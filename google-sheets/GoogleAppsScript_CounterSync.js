/**
 * ============================================================================
 * 👑 VINAY & KISHMA WEDDING — GOOGLE SHEETS LIVE HEADCOUNT SYNC
 * ============================================================================
 * 
 * Synchronizes RSVP headcount data from CounterAPI V2 into Google Sheets.
 * Workspace: a-james-aathithyan-s-team-5304
 * Slug: marriage-headcount
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet (sheets.new).
 * 2. Click "Extensions" > "Apps Script".
 * 3. Delete any code in the editor and paste this entire file.
 * 4. Click "Save" (disk icon) and then select "syncCounterToSheet" from the
 *    dropdown menu and click "Run".
 * 5. Grant permissions when prompted.
 * 6. Return to your Google Sheet — your royal wedding dashboard is ready!
 * ============================================================================
 */

// ─── Configuration ─────────────────────────────────────────────────────────
const COUNTER_CONFIG = {
  apiKey: 'ut_M5uXvuMkko04tJL0Yvg6LN8sNbREY4BTLaM4HUTA',
  workspace: 'a-james-aathithyan-s-team-5304',
  slug: 'marriage-headcount',
  baseUrl: 'https://api.counterapi.dev/v2/a-james-aathithyan-s-team-5304/marriage-headcount',
  spreadsheetId: '1X1ikj7PbyMTO0ksd8s-KGqb4OFo6ZAso5wQovs9gKaY',
  spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/1X1ikj7PbyMTO0ksd8s-KGqb4OFo6ZAso5wQovs9gKaY/edit',
  weddingCouple: 'Vinay & Kishma',
  weddingDate: '24th & 25th October 2026',
  venue: 'Tranquil Wedding Venue, Bannerghatta Road, Bangalore'
};

/**
 * Get active spreadsheet or open by ID
 */
function getSpreadsheet() {
  try {
    return SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.openById(COUNTER_CONFIG.spreadsheetId);
  } catch (e) {
    return SpreadsheetApp.openById(COUNTER_CONFIG.spreadsheetId);
  }
}

// ─── Custom UI Menu on Open ────────────────────────────────────────────────
function onOpen() {
  try {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('👑 Wedding RSVP Tracker')
      .addItem('🔄 Refresh Headcount Now', 'syncCounterToSheet')
      .addSeparator()
      .addItem('⏱️ Setup Auto-Sync (Every 5 Mins)', 'installAutoSyncTrigger')
      .addItem('🛑 Disable Auto-Sync', 'removeAutoSyncTrigger')
      .addSeparator()
      .addItem('✨ Reset & Redesign Dashboard', 'setupFullDashboard')
      .addToUi();
  } catch (e) {
    // Menu cannot be created in non-UI context
  }
}

/**
 * Main function: Fetches live headcount from CounterAPI and updates the Google Sheet
 */
function syncCounterToSheet() {
  const ss = getSpreadsheet();
  let dashSheet = ss.getSheetByName('👑 Wedding Dashboard');
  let logSheet = ss.getSheetByName('📊 Sync History');

  // If sheets don't exist yet, create and format them
  if (!dashSheet || !logSheet) {
    setupFullDashboard();
    dashSheet = ss.getSheetByName('👑 Wedding Dashboard');
    logSheet = ss.getSheetByName('📊 Sync History');
  }

  // 1. Fetch from CounterAPI
  let upCount = 0;
  let downCount = 0;
  let netCount = 0;
  let statusMsg = 'Connected (HTTP 200)';
  const now = new Date();
  const formattedTime = Utilities.formatDate(now, Session.getScriptTimeZone() || 'Asia/Kolkata', 'dd MMM yyyy, hh:mm:ss a');

  try {
    const options = {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + COUNTER_CONFIG.apiKey,
        'Content-Type': 'application/json'
      },
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(COUNTER_CONFIG.baseUrl, options);
    const code = response.getResponseCode();

    if (code === 200) {
      const json = JSON.parse(response.getContentText());
      upCount = Number(json?.data?.up_count || 0);
      downCount = Number(json?.data?.down_count || 0);
      netCount = Math.max(0, upCount - downCount);
    } else {
      statusMsg = 'Error ' + code + ': ' + response.getContentText();
    }
  } catch (err) {
    statusMsg = 'Fetch Error: ' + err.toString();
  }

  // 2. Update Dashboard Sheet Cells
  dashSheet.getRange('C6').setValue(upCount);     // Big Confirmed RSVP Count
  dashSheet.getRange('E6').setValue(downCount);   // Regrets / Declined
  dashSheet.getRange('G6').setValue(netCount);    // Net Headcount
  dashSheet.getRange('C9').setValue(formattedTime); // Last Synced
  dashSheet.getRange('C10').setValue(statusMsg);   // Status

  // 3. Append to Historical Log Sheet
  logSheet.appendRow([
    formattedTime,
    upCount,
    downCount,
    netCount,
    statusMsg
  ]);

  return { upCount, downCount, netCount, formattedTime };
}

/**
 * Sets up a clean, luxurious Royal Wedding dashboard format inside the sheet
 */
function setupFullDashboard() {
  const ss = getSpreadsheet();

  // ── 1. Create or Reset Dashboard Sheet ──
  let dashSheet = ss.getSheetByName('👑 Wedding Dashboard');
  if (!dashSheet) {
    dashSheet = ss.insertSheet('👑 Wedding Dashboard', 0);
  }
  dashSheet.clear();
  try {
    dashSheet.setHideGridlines(true);
  } catch (e) {
    // Ignore if not supported in environment
  }

  // Set column widths
  dashSheet.setColumnWidth(1, 40);
  dashSheet.setColumnWidth(2, 30);
  dashSheet.setColumnWidth(3, 160);
  dashSheet.setColumnWidth(4, 30);
  dashSheet.setColumnWidth(5, 160);
  dashSheet.setColumnWidth(6, 30);
  dashSheet.setColumnWidth(7, 160);
  dashSheet.setColumnWidth(8, 40);

  // Header Title
  dashSheet.getRange('C2:G2').merge()
    .setValue('💍 VINAY & KISHMA WEDDING — LIVE RSVP TRACKER')
    .setFontFamily('Georgia')
    .setFontSize(16)
    .setFontWeight('bold')
    .setFontColor('#174C3C')
    .setHorizontalAlignment('center');

  dashSheet.getRange('C3:G3').merge()
    .setValue('Sacred Celebrations · 24th & 25th October 2026 · Bengaluru')
    .setFontFamily('Georgia')
    .setFontSize(11)
    .setFontStyle('italic')
    .setFontColor('#8B6B34')
    .setHorizontalAlignment('center');

  // Metric Card 1: Confirmed RSVPs
  dashSheet.getRange('C5').setValue('CONFIRMED GUESTS (RSVP YES)')
    .setFontFamily('Arial')
    .setFontSize(9)
    .setFontWeight('bold')
    .setFontColor('#174C3C')
    .setBackground('#EFE6D2')
    .setHorizontalAlignment('center');

  dashSheet.getRange('C6').setValue(0)
    .setFontFamily('Georgia')
    .setFontSize(28)
    .setFontWeight('bold')
    .setFontColor('#174C3C')
    .setBackground('#FBF8F1')
    .setHorizontalAlignment('center');

  dashSheet.getRange('C5:C6').setBorder(true, true, true, true, false, false, '#C6A66B', SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

  // Metric Card 2: Regrets
  dashSheet.getRange('E5').setValue('CELEBRATING IN SPIRIT (NO)')
    .setFontFamily('Arial')
    .setFontSize(9)
    .setFontWeight('bold')
    .setFontColor('#7A5229')
    .setBackground('#EFE6D2')
    .setHorizontalAlignment('center');

  dashSheet.getRange('E6').setValue(0)
    .setFontFamily('Georgia')
    .setFontSize(28)
    .setFontWeight('bold')
    .setFontColor('#7A5229')
    .setBackground('#FBF8F1')
    .setHorizontalAlignment('center');

  dashSheet.getRange('E5:E6').setBorder(true, true, true, true, false, false, '#C6A66B', SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

  // Metric Card 3: Net Total
  dashSheet.getRange('G5').setValue('NET HEADCOUNT')
    .setFontFamily('Arial')
    .setFontSize(9)
    .setFontWeight('bold')
    .setFontColor('#176B70')
    .setBackground('#EFE6D2')
    .setHorizontalAlignment('center');

  dashSheet.getRange('G6').setValue(0)
    .setFontFamily('Georgia')
    .setFontSize(28)
    .setFontWeight('bold')
    .setFontColor('#176B70')
    .setBackground('#FBF8F1')
    .setHorizontalAlignment('center');

  dashSheet.getRange('G5:G6').setBorder(true, true, true, true, false, false, '#C6A66B', SpreadsheetApp.BorderStyle.SOLID_MEDIUM);

  // Details Strip
  dashSheet.getRange('B9').setValue('Last Synced:').setFontWeight('bold').setFontColor('#555');
  dashSheet.getRange('C9:G9').merge().setFontColor('#174C3C');

  dashSheet.getRange('B10').setValue('Status:').setFontWeight('bold').setFontColor('#555');
  dashSheet.getRange('C10:G10').merge().setFontColor('#174C3C');

  dashSheet.getRange('B12:G12').merge()
    .setValue('💡 Tips: Use the top menu "👑 Wedding RSVP Tracker" > "Refresh Headcount Now" or setup auto-sync.')
    .setFontSize(10)
    .setFontStyle('italic')
    .setFontColor('#666');

  // ── 2. Create or Reset History Log Sheet ──
  let logSheet = ss.getSheetByName('📊 Sync History');
  if (!logSheet) {
    logSheet = ss.insertSheet('📊 Sync History', 1);
  }
  logSheet.clear();

  const headers = ['Timestamp', 'Confirmed RSVPs (Up)', 'Regrets (Down)', 'Net Headcount', 'Status'];
  logSheet.getRange(1, 1, 1, headers.length)
    .setValues([headers])
    .setFontWeight('bold')
    .setBackground('#174C3C')
    .setFontColor('#F7F1E3')
    .setHorizontalAlignment('center');

  logSheet.setColumnWidth(1, 200);
  logSheet.setColumnWidth(2, 160);
  logSheet.setColumnWidth(3, 160);
  logSheet.setColumnWidth(4, 140);
  logSheet.setColumnWidth(5, 250);
  logSheet.setFrozenRows(1);
}

// ─── Custom Spreadsheet Formula: =GET_WEDDING_HEADCOUNT() ─────────────────
/**
 * Custom formula for any cell in Google Sheets.
 * Example: =GET_WEDDING_HEADCOUNT()
 * @customfunction
 */
function GET_WEDDING_HEADCOUNT() {
  try {
    const options = {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + COUNTER_CONFIG.apiKey,
        'Content-Type': 'application/json'
      },
      muteHttpExceptions: true
    };
    const response = UrlFetchApp.fetch(COUNTER_CONFIG.baseUrl, options);
    const json = JSON.parse(response.getContentText());
    return Number(json?.data?.up_count || 0);
  } catch (e) {
    return 'Error: ' + e.message;
  }
}

// ─── Auto-Sync Triggers ────────────────────────────────────────────────────
function installAutoSyncTrigger() {
  removeAutoSyncTrigger(); // Avoid duplicates

  ScriptApp.newTrigger('syncCounterToSheet')
    .timeBased()
    .everyMinutes(5)
    .create();

  SpreadsheetApp.getUi().alert('✅ Auto-Sync Activated! Headcount will update automatically every 5 minutes.');
}

function removeAutoSyncTrigger() {
  const triggers = ScriptApp.getProjectTriggers();
  for (let i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'syncCounterToSheet') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
}
