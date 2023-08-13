const mongoose = require('mongoose');
const db_name = "examen_db";

mongoose.connect(`mongodb://127.0.0.1:27017/${db_name}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then(() => {
        console.log('Rocking with mongo:' + db_name)
    }).catch(() => {
        console.log('Error connecting Mongo')
    })