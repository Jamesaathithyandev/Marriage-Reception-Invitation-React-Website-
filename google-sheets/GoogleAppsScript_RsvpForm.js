/**
 * ============================================================================
 * 👑 VINAY & KISHMA WEDDING — RSVP FORM RECEIVER
 * ============================================================================
 * Sheet ID : 11ssrJ8wKKz98_cx37MIarPJqyxwHeneI7uGKVPipq58k
 *
 * HOW TO USE:
 * 1. Paste this entire file into Extensions > Apps Script
 * 2. Save (💾), then run "manualSetup" once to create the sheet
 * 3. Deploy > New Deployment > Web app > Anyone > Deploy > copy URL
 * 4. Paste that URL into RsvpSection.jsx line 11
 * 5. To test locally run "testDoGet" (never run doGet manually)
 * ============================================================================
 */

const SPREADSHEET_ID = '11ssrJ8wKKz98_cx37MIarPJqyxwHeneI7uGKVPipq58k';
const RSVP_SHEET_NAME = '📋 RSVP Submissions';

// ─── Web App Entry Point ────────────────────────────────────────────────────

/**
 * Handles GET requests from the wedding website form.
 * DO NOT run manually — use testDoGet() to test from the editor.
 */
function doGet(e) {
  try {
    if (e && e.parameter && e.parameter.name) {
      const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      const sheet = getOrCreateRsvpSheet(ss);

      sheet.appendRow([
        e.parameter.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        e.parameter.name      || '',
        e.parameter.phone     || '',
        e.parameter.guests    || '1',
        e.parameter.events    || '',
        e.parameter.attending || 'Yes',
      ]);

      try { sheet.autoResizeColumns(1, 6); } catch (_) {}

      return ContentService
        .createTextOutput(JSON.stringify({ status: 'success' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Health check (no params)
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', message: 'RSVP endpoint live.' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('doGet error: ' + err.toString());
    try {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (_) {
      return null;
    }
  }
}

// ─── Manual Test Function ───────────────────────────────────────────────────

/**
 * Run THIS from the editor to test writing a row to the sheet.
 * Select "testDoGet" in the dropdown and click ▶ Run.
 */
function testDoGet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getOrCreateRsvpSheet(ss);

  sheet.appendRow([
    new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    'Test Guest',
    '+91 99999 00000',
    '2',
    'Mehendi, Wedding Muhurtham',
    'Yes',
  ]);

  try { sheet.autoResizeColumns(1, 6); } catch (_) {}
  Logger.log('✅ Test row written successfully!');
}

// ─── Sheet Setup ────────────────────────────────────────────────────────────

/**
 * Run once to create and format the RSVP sheet.
 */
function manualSetup() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  getOrCreateRsvpSheet(ss);
  Logger.log('✅ RSVP sheet ready!');
  try {
    SpreadsheetApp.getUi().alert(
      '✅ Done!\n\nThe "📋 RSVP Submissions" sheet is ready.\n\nNext: Deploy as Web App and copy the URL into RsvpSection.jsx.'
    );
  } catch (_) {}
}

function getOrCreateRsvpSheet(ss) {
  let sheet = ss.getSheetByName(RSVP_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(RSVP_SHEET_NAME);
    setupHeaders(sheet);
  }
  return sheet;
}

function setupHeaders(sheet) {
  const headers = ['Timestamp', 'Full Name', 'Phone Number', 'No. of Guests', 'Events Attending', 'RSVP Status'];

  sheet.getRange(1, 1, 1, headers.length)
    .setValues([headers])
    .setFontFamily('Arial')
    .setFontSize(10)
    .setFontWeight('bold')
    .setFontColor('#F7F1E3')
    .setBackground('#4A0E4E')
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle');

  sheet.setRowHeight(1, 36);
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 200);
  sheet.setColumnWidth(2, 180);
  sheet.setColumnWidth(3, 160);
  sheet.setColumnWidth(4, 110);
  sheet.setColumnWidth(5, 300);
  sheet.setColumnWidth(6, 120);
}

// ─── Spreadsheet Menu ───────────────────────────────────────────────────────

function onOpen() {
  try {
    SpreadsheetApp.getUi()
      .createMenu('👑 Wedding RSVP')
      .addItem('✨ Setup RSVP Sheet', 'manualSetup')
      .addItem('🧪 Write Test Row', 'testDoGet')
      .addItem('📊 Count Guests', 'showGuestCount')
      .addToUi();
  } catch (_) {}
}

function showGuestCount() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(RSVP_SHEET_NAME);

  if (!sheet || sheet.getLastRow() < 2) {
    SpreadsheetApp.getUi().alert('No RSVP submissions yet.');
    return;
  }

  const guestData = sheet.getRange(2, 4, sheet.getLastRow() - 1, 1).getValues();
  const totalGuests = guestData.reduce((sum, row) => sum + (parseInt(row[0]) || 0), 0);
  const totalResponses = sheet.getLastRow() - 1;

  SpreadsheetApp.getUi().alert(
    `📊 RSVP Summary\n\nTotal Responses: ${totalResponses}\nTotal Guests Expected: ${totalGuests}`
  );
}
