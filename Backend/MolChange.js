import {sendMessage} from "./message";

async function MolChange( req, res )
{
    sketcher.then(function (marvin) {
        function handleMolChange() {
            marvin.exportStructure("smiles").then(function (smiles) {
                document.getElementById("smilesMolecule").value = smiles;
                sendMessage(res, smiles);

            });
        }

        marvin.on("molchange", handleMolChange);
    });
}
module.exports.MolChange=MolChange;