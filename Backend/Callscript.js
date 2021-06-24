const {sendError, sendMessage} = require ("./message");
const {PythonShell} = require('python-shell')
async function Callscript(req,res) {

    let options= {
        pythonOptions: ['-u'], // get print results in real-time
        args: [req.body.smiles]// An argument which can be accessed in the script using sys.argv[1]
    };
    console.log(req.body);
    console.log(req.body.smiles);
    PythonShell.run('./Backend/test.py', options,(err, output) => {
        if (err) throw err;
        return sendMessage(res,output);
     });


}
module.exports=Callscript;