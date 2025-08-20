function parseDate(dateString) {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        console.log("Invalid date");
    } 
    else {
        console.log("Valid date:", date.toDateString());
    }
}

parseDate("2025-08-19"); 
parseDate("invalid-date"); 
