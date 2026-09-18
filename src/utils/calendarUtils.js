/**
 * calendarUtils.js — Calendar Link & ICS File Generator
 * Generates Google Calendar event URLs and downloadable .ics files
 * from the centralized CALENDAR_EVENTS data structure.
 */

/**
 * Format a JS Date object to the iCalendar format: YYYYMMDDTHHMMSS
 */
function toICSDate(isoString) {
  // Convert ISO string to UTC format for ICS: YYYYMMDDTHHMMSSZ
  const d = new Date(isoString);
  return d
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '');
}

/**
 * Format a date for Google Calendar URL parameter: YYYYMMDDTHHMMSS
 */
function toGoogleDate(isoString) {
  const d = new Date(isoString);
  return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z/, 'Z');
}

/**
 * Generate a single Google Calendar event URL for an event
 */
export function buildGoogleCalendarUrl(event) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${toGoogleDate(event.startISO)}/${toGoogleDate(event.endISO)}`,
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generate a Google Calendar URL for all 4 wedding events combined
 * (Opens the main ceremony for simplicity; all events are in ICS)
 */
export function buildCombinedGoogleCalendarUrl(events) {
  // Point to the Reception event
  const main = events.find((e) => e.title.includes('Reception')) || events[0];
  return buildGoogleCalendarUrl(main);
}

/**
 * Generate and trigger a .ics file download containing the Reception event
 */
export function downloadICS(events) {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Vinay & Kishma Reception 2026//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Vinay & Kishma Wedding Reception',
    'X-WR-TIMEZONE:Asia/Kolkata',
  ];

  for (const event of events) {
    const uid = `${event.title.replace(/\W+/g, '-').toLowerCase()}-vinay-kishma-2026@wedding`;
    lines.push('BEGIN:VEVENT');
    lines.push(`DTSTART;TZID=Asia/Kolkata:${toICSDate(event.startISO).replace('Z', '')}`);
    lines.push(`DTEND;TZID=Asia/Kolkata:${toICSDate(event.endISO).replace('Z', '')}`);
    lines.push(`SUMMARY:${event.title}`);
    lines.push(`DESCRIPTION:${event.description.replace(/,/g, '\\,').replace(/\n/g, '\\n')}`);
    lines.push(`LOCATION:${event.location.replace(/,/g, '\\,')}`);
    lines.push(`UID:${uid}`);
    lines.push('STATUS:CONFIRMED');
    lines.push('END:VEVENT');
  }

  lines.push('END:VCALENDAR');

  const icsContent = lines.join('\r\n');
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'Vinay-Kishma-Wedding-2026.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
