// we create the web server on port 3000
const express = require ('express');
const app = express ();
const port = process.env.PORT || 3000;

// body-parser allows you to easily retrieve the data passed in POST.
// The Angular application send its data in JSON format, so we have to ask
// to the body parser to parser only this format.
const bodyParser = require ('body-parser');
app.use(bodyParser.json());

// For CORS
const cors = require ('cors');
//app.use(cors({origin: 'http://localhost:4200', credentials: true}));
app.use(cors({origin: 'http://10.36.4.17:4200', credentials: true}));



// here, we set up the routes that will be served by the web server:
// each route corresponds to a file that we load via a require. This
// file just exports a function, which is called when the user
// ask to access the route.
const Callscript = require ('./Callscript');
const Callscript2 = require ('./Callscript2');
const Callscript_UndSub = require ('./Callscript_UndSub');


app.post ('/Callscript', (req, res) => {Callscript(req,res);});
app.post ('/Callscript2', (req, res) => {Callscript2(req,res);});
app.post ('/Callscript_UndSub', (req, res) => {Callscript_UndSub(req,res);});

app.listen(port, () => {console.log (`listening on port ${port}`)});