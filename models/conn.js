const e = require("express");
const mongoose = require("mongoose");

mongoose.connect ("mongodb+srv://rohan:rohan@clusterrestaurant.18xva.mongodb.net/labtest1?retryWrites=true&w=majority")
.then(()  => {
    console.log(`connection successful`);
}).catch((e)  => {
    console.log(`no connection`);
})