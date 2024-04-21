const fs = require('node:fs');

const content = 'Some content!'

fs.writeFile('/users/jovan/notes.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    } else {
        //file written successfully
    }
}); 