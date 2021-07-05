# Chemodots
npm install --save-dev @angular-devkit/build-angular
//Si toute première fois
conda create -c conda-forge -n my-rdkit-env rdkit
conda activate my-rdkit-env
conda install -c anaconda ipython
//Sinon
conda activate my-rdkit-env
//Lancement
//Dans Chemodots 
node ./Backend/app.js
//Dans Frontend
ng serve

//Si on veut le lancer en local pour que d'autres aient accès 
Vérifier les cors dans app.js
activer l'environnement avec conda activate
lancer app.js
pour le front faire bash exec dans le dossier Frontend.
