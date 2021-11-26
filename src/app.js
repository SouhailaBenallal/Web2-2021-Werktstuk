const express = require('express');
const path = require("path");
require("./db/connection");
const app = express();
const port = process.env.PORT || 3000;


//Setting the path
const staticpath = path.join(__dirname, "../public")

//middleware
app.use(express.static(staticpath))



// app.get (path, callback)
app.get('/', (req,res) => {
    res.send('Hiiiiii');
});

// Server create
app.listen(port, () => {
    console.log(`Server is running at port on ${port}`);
})