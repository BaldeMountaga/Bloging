const mongoose = require('mongoose');
const config = require('./config');


console.log("MongoDB URL:", typeof(config.MONGODB_URI));

mongoose.connect(config.MONGODB_URI, config.MONGOOSE_OPTS).then(()=> {
    console.log("Connection Succeeded")
})
.catch(err=> {
    console.log("Error Connecting to DB")
    console.log("=======================================");
    console.log(err);
})