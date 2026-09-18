# 💍 Vinay & Kishma Wedding — Google Sheets Live Headcount Sync

This guide shows you how to connect your **CounterAPI** counter (`marriage-headcount`) with **Google Sheets** in 2 minutes so you can track how many guests have clicked the RSVP button in real-time.

---

## 🚀 Quick Setup (Takes 2 Minutes)

### Step 1: Open Your Google Sheet
1. Open your Google Sheet: **[Vinay & Kishma Wedding RSVP Tracker](https://docs.google.com/spreadsheets/d/1X1ikj7PbyMTO0ksd8s-KGqb4OFo6ZAso5wQovs9gKaY/edit)**.

### Step 2: Open Apps Script
1. In the top menu, click **Extensions** > **Apps Script**.
2. Delete any existing code inside `Code.gs`.

### Step 3: Paste the Code
1. Copy the complete code from [`google-sheets/GoogleAppsScript_CounterSync.js`](./GoogleAppsScript_CounterSync.js).
2. Paste it into the Google Apps Script editor.
3. Click the **Save** icon (💾) at the top.

### Step 4: Run Initial Setup
1. In the toolbar dropdown (next to "Debug"), make sure **`syncCounterToSheet`** is selected.
2. Click **Run** (▶).
3. Google will ask for permission on the first run:
   - Click **Review permissions** > Select your Google Account.
   - Click **Advanced** (small text) > **Go to Untitled project (unsafe)**.
   - Click **Allow**.
4. Once the script finishes running, switch back to your Google Sheet tab!

---

## 📊 What You Get in Google Sheets

### 1. 👑 Wedding Dashboard
- **Confirmed Guests (RSVP YES)**: Live total count of guests who clicked "Joyfully Attending".
- **Celebrating in Spirit**: Count of guests who clicked "Cannot Attend".
- **Net Headcount**: Net confirmed attendees.
- **Last Synced**: Exact timestamp of the latest synchronization.

### 2. 📊 Sync History Log
- A rolling audit log of headcount updates over time.

### 3. 👑 Custom Menu Bar Item
A new menu called **`👑 Wedding RSVP Tracker`** is automatically added to your Google Sheets menu bar:
- **🔄 Refresh Headcount Now**: Instantly re-checks CounterAPI.
- **⏱️ Setup Auto-Sync (Every 5 Mins)**: One-click setup to update headcount every 5 minutes in the background automatically.
- **🛑 Disable Auto-Sync**: Turn off automatic background refreshing.
- **✨ Reset & Redesign Dashboard**: Re-applies the royal formatting.

---

## 🧮 Using the Custom Formula Anywhere

You can also type this formula into **any cell** of any Google Sheet:
```excel
=GET_WEDDING_HEADCOUNT()
```
It will output the current confirmed headcount number directly into that cell.

---

## 🔑 Your API Configuration
- **API Key:** `ut_M5uXvuMkko04tJL0Yvg6LN8sNbREY4BTLaM4HUTA`
- **Workspace:** `a-james-aathithyan-s-team-5304`
- **Slug:** `marriage-headcount`
- **Endpoint:** `https://api.counterapi.dev/v2/a-james-aathithyan-s-team-5304/marriage-headcount`
