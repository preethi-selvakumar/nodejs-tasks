function differenceInDays(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24;
    const diffMs = date2.getTime() - date1.getTime();
    const diffDays = Math.abs(diffMs / oneDay);
    return diffDays;
}

const d1 = new Date("2025-08-19");
const d2 = new Date("2025-09-01");

console.log("Difference in days:", differenceInDays(d1, d2));
