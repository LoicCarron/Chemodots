const {sendError, sendMessage} = require ("./message");
const {PythonShell} = require('python-shell')
async function Callscript(req,res) {

    let options= {
        pythonOptions: ['-u'], // get print results in real-time
        args: [req.body.smiles]// An argument which can be accessed in the script using sys.argv[1]
    };
    PythonShell.run('./Backend/Python/chemodots.py', options,(err, output) => {
        return sendMessage(res,output);
     });


}
module.exports=Callscript;