// imports
require('dotenv').config();


const express = require('express');
const app = express();

// Middlewares

// --> for json
app.use(express.json());

// for parsing the cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// for file parsing
const fileUpload = require('express-fileupload');
app.use(
    fileUpload(
        {
            useTempFiles:true, // have a temporary path for the file
            tempFileDir:'/tmp', // path of local directory
        }
    )
)

//cors configaration
const cors = require('cors');
app.use(
    cors(
        {
            origin:`${process.env.FRONT_END_BASE_URL}`,
            credentials:true,
        }
    )
)

//get the port number
const PORT = process.env.PORT || 4000;

// make the app listen to incomming requests from client
app.listen(PORT,() => {
    console.log('The Backend Server is Listening at Port Number ',PORT);
});