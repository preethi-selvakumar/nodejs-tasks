const { format } = require('date-fns');

const currentDate = new Date();
const formattedDate = format(currentDate, "do MMMM yyyy");

console.log("Formatted Date:", formattedDate);
