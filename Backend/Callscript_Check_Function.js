const {sendError, sendMessage} = require ("./message");
const {PythonShell} = require('python-shell')
async function Callscript_Check_Function(req,res) {

    let options= {
        pythonOptions: ['-u'], // get print results in real-time
        args: [req.body.funcname]// An argument which can be accessed in the script using sys.argv[1]
    };
    PythonShell.run('./Backend/Check_Function.py', options,(err, output) => {
        if (err) throw err;
        return sendMessage(res,output);
     });


}
module.exports=Callscript_Check_Function;