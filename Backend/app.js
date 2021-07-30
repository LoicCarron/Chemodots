const express = require ('express');
const app = express ();
const port = process.env.PORT || 3000;

const bodyParser = require ('body-parser');
app.use(bodyParser.json());

// permet d'éviter le problème de CORS que l'on avait déjà vu
const cors = require ('cors');
//app.use(cors({origin: 'http://localhost:4200', credentials: true}));
app.use(cors({origin: 'http://10.36.4.17:4200', credentials: true}));

const Callscript = require ('./Callscript');
const Callscript2 = require ('./Callscript2');
const Callscript_UndSub = require ('./Callscript_UndSub');


app.post ('/Callscript', (req, res) => {Callscript(req,res);});
app.post ('/Callscript2', (req, res) => {Callscript2(req,res);});
app.post ('/Callscript_UndSub', (req, res) => {Callscript_UndSub(req,res);});

app.listen(port, () => {console.log (`listening on port ${port}`)});