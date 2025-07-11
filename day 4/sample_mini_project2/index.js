const fs = require('fs');
const path = require('path');
const events = require('events');

// Create EventEmitter
const eventEmitter = new events.EventEmitter();

// Folder to organize
const folderPath = path.join(__dirname, 'files');

// Read all files in the folder using fs.readdir()
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error("Error reading folder:", err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(folderPath, file);

        // Check if it's a file (not a folder)
        fs.stat(filePath, (err, stats) => {
            if (err || !stats.isFile()) return;

            // Get file extension using path.extname()
            const ext = path.extname(file).slice(1);
            if (!ext) return;

            const newFolder = path.join(folderPath, ext); // e.g., files/txt

            // Create subfolder using fs.mkdir()
            fs.mkdir(newFolder, { recursive: true }, (err) => {
                if (err) {
                    console.error("Error creating folder:", err);
                    return;
                }

                // Move file using fs.rename()
                const newPath = path.join(newFolder, file);
                fs.rename(filePath, newPath, (err) => {
                    if (err) console.error("Error moving file:", err);
                });
            });
        });
    });

    // Emit custom event after short delay
    setTimeout(() => {
        eventEmitter.emit('organized');
    }, 500);
});

//  Listen for organized event
eventEmitter.on('organized', () => {
    console.log(" All files organized successfully!");
});
