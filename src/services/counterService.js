/**
 * counterService.js — CounterAPI V2 Integration for Wedding RSVP Headcount
 *
 * Workspace: a-james-aathithyan-s-team-5304
 * Slug: marriage-headcount
 */

const API_KEY = 'ut_M5uXvuMkko04tJL0Yvg6LN8sNbREY4BTLaM4HUTA';
const WORKSPACE = 'a-james-aathithyan-s-team-5304';
const SLUG = 'marriage-headcount';
const BASE_URL = `https://api.counterapi.dev/v2/${WORKSPACE}/${SLUG}`;

const LOCAL_STORAGE_KEY = 'vinay_kishma_rsvp_status'; // 'attending' | 'declined' | null
const LOCAL_STORAGE_TIMESTAMP_KEY = 'vinay_kishma_rsvp_time';

/**
 * Fetch the current counter status and headcount from CounterAPI
 */
export async function getHeadcount() {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`CounterAPI error: ${response.status}`);
    }

    const data = await response.json();
    const upCount = Number(data?.data?.up_count || 0);
    const downCount = Number(data?.data?.down_count || 0);
    const netCount = Math.max(0, upCount - downCount);

    return {
      success: true,
      count: upCount,
      netCount,
      raw: data?.data,
    };
  } catch (error) {
    console.warn('Unable to fetch live headcount from CounterAPI:', error);
    return {
      success: false,
      count: 0,
      netCount: 0,
      error: error.message,
    };
  }
}

/**
 * Increment the RSVP counter (User clicks "Attending")
 */
export async function incrementRsvp() {
  try {
    const response = await fetch(`${BASE_URL}/up`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`CounterAPI error: ${response.status}`);
    }

    const data = await response.json();
    const upCount = Number(data?.data?.up_count || 0);

    // Save status locally
    setLocalRsvpStatus('attending');

    return {
      success: true,
      count: upCount,
      data,
    };
  } catch (error) {
    console.error('Error incrementing RSVP count:', error);
    // Optimistically record locally anyway so user gets their confirmation
    setLocalRsvpStatus('attending');
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Decrement RSVP counter if user decides to change/cancel their RSVP
 */
export async function decrementRsvp() {
  try {
    const response = await fetch(`${BASE_URL}/down`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`CounterAPI error: ${response.status}`);
    }

    const data = await response.json();
    setLocalRsvpStatus(null);

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('Error decrementing RSVP count:', error);
    setLocalRsvpStatus(null);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Local storage helpers to remember if this device/user already RSVP'd
 */
export function getLocalRsvpStatus() {
  try {
    return localStorage.getItem(LOCAL_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setLocalRsvpStatus(status) {
  try {
    if (status) {
      localStorage.setItem(LOCAL_STORAGE_KEY, status);
      localStorage.setItem(LOCAL_STORAGE_TIMESTAMP_KEY, new Date().toISOString());
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      localStorage.removeItem(LOCAL_STORAGE_TIMESTAMP_KEY);
    }
  } catch {
    // Ignore storage errors
  }
}
