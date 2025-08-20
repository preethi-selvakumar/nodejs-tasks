// Example: Start date before daylight saving shift
const date = new Date("2025-03-30T00:00:00");

// Add 1 day safely
date.setDate(date.getDate() + 1);

console.log("After adding 1 day:", date.toString());

// Using UTC to avoid DST issues
const utcDate = new Date("2025-03-30T00:00:00Z");
utcDate.setUTCDate(utcDate.getUTCDate() + 1);

console.log("After adding 1 day (UTC safe):", utcDate.toUTCString());
