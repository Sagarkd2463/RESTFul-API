const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/olympic')
.then(() => {
        console.log('Database connnection successful...')
}).catch((e) => {
        console.log(e)
});


