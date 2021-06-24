from rdkit import Chem
from rdkit.Chem.Draw import rdMolDraw2D
from rdkit.Chem.Draw import IPythonConsole
from rdkit.Chem import AllChem
from IPython import get_ipython
import operator



#Search fct (return the index where the fct is)
def searchFct(smiles):

    m = Chem.MolFromSmiles(smiles)

    primaire=Chem.MolFromSmarts('[NH2;!$(N~[C,S,P,N]=[O,S,N]);!$(N#[C,N]);!$(N=C)]')
    secondaire=Chem.MolFromSmarts('[NH1;!$(N~[C,S,P,N]=[O,S,N]);!$(N#[C,N]);!$(N=C)]')
    tertiaire=Chem.MolFromSmarts('CN(C)C')
    amine_prim_alkyl=Chem.MolFromSmarts('C[NH2]')
    amine_sec_alkyl=Chem.MolFromSmarts('C[NH]C')
    amine_tert_alkyl=Chem.MolFromSmarts('CN(C)C')
    amine_prim_aryl=Chem.MolFromSmarts('c[NH2]')
    amine_sec_aryl=Chem.MolFromSmarts('c[NH]C')
    amine_tert_aryl=Chem.MolFromSmarts('cN(C)C')

    amide1=Chem.MolFromSmarts('[#6][C;R0](=[OD1])[NH2]')
    amide2=Chem.MolFromSmarts('[#6][C;R0](=[OD1])[NH][#6]')
    amide_alkyl=Chem.MolFromSmarts('C[C;R0]([NH2])=O')
    amide_aryl=Chem.MolFromSmarts('c[C;R0]([NH2])=O')

    alcool=Chem.MolFromSmarts('[OH;R0][#6;!$([#6]=[O,S])]')
    alcohol_alkyl=Chem.MolFromSmarts('C[OH]')
    alcohol_aryl=Chem.MolFromSmarts('c[OH]')



    acid_alkyl=Chem.MolFromSmarts('C[C;R0]([OH])=O')
    acid_aryl=Chem.MolFromSmarts('c[C;R0]([OH])=O')
    aldehyde_alkyl=Chem.MolFromSmarts('C[CH1;R0](=O)')
    aldehyde_aryl=Chem.MolFromSmarts('c[CH1;R0](=O)')
    boronate_alkyl=Chem.MolFromSmarts('OB(O)C')
    boronate_aryl=Chem.MolFromSmarts('OB(O)c')
    halide_alkyl=Chem.MolFromSmarts('[CH2][Cl,Br,I]')
    halide_aryl=Chem.MolFromSmarts('c[Cl,Br,I]')
    ketone_alkyl=Chem.MolFromSmarts('C[C;R0](=O)C')
    ketone_aryl=Chem.MolFromSmarts('c[C;R0](=O)c')
    sulfonylhalide_alkyl=Chem.MolFromSmarts('C[S;R0](Cl)(=O)=O')
    sulfonylhalide_aryl=Chem.MolFromSmarts('c[S;R0](Cl)(=O)=O')
    ester_alkyl=Chem.MolFromSmarts('C[C;R0](=O)OC')
    ester_aryl=Chem.MolFromSmarts('c[C;R0](=O)OC')
    thioester_alkyl=Chem.MolFromSmarts('C[C;R0](=S)OC')
    thioester_aryl=Chem.MolFromSmarts('c[C;R0](=S)OC')
    ketone_alpha_halide=Chem.MolFromSmarts('C[C;R0](=O)[CH2][Cl,Br,I]')
    ketone_beta_halide=Chem.MolFromSmarts('C[C;R0](=O)[CH2][CH2][Cl,Br,I]')
    thioamide_alkyl1=Chem.MolFromSmarts('C[C;R0]([NH2])=S')
    thioamide_alkyl2=Chem.MolFromSmarts('c[C;R0]([NH2])=S')
    nitrile_alkyl=Chem.MolFromSmarts('CC#N')
    nitrile_aryl=Chem.MolFromSmarts('cC#N')
    alkyne_alkyl=Chem.MolFromSmarts('CC#C')
    alkyne_aryl=Chem.MolFromSmarts('cC#C')
    dicarbonyl_1_4_alkyl=Chem.MolFromSmarts('C[C;R0](=O)[CH2][CH2][C;R0](=O)C')
    dicarbonyl_1_4_aryl=Chem.MolFromSmarts('c[C;R0](=O)[CH2][CH2][C;R0](=O)c')
    dicarbonyl_1_3_alkyl=Chem.MolFromSmarts('C[C;R0](=O)[CH2][C;R0](=O)C')
    dicarbonyl_1_3_aryl=Chem.MolFromSmarts('c[C;R0](=O)[CH2][C;R0](=O)c')
    hydrazine_alkyl=Chem.MolFromSmarts('C[NH;R0][NH2;R0]')
    hydrazine_aryl=Chem.MolFromSmarts('c[NH;R0][NH2;R0]')
    imide_alkyl=Chem.MolFromSmarts('C[C;R0](=O)N[C;R0](=O)C')
    imide_aryl=Chem.MolFromSmarts('c[C;R0](=O)N[C;R0](=O)c')
    anhydride_alkyl=Chem.MolFromSmarts('C[C;R0](=O)O[C;R0](=O)C')
    anhydride_aryl=Chem.MolFromSmarts('c[C;R0](=O)O[C;R0](=O)c')
    sulfonamide_alkyl=Chem.MolFromSmarts('C[S;R0]([NH2])(=O)=O')
    sulfonamide_aryl=Chem.MolFromSmarts('c[S;R0]([NH2])(=O)=O')
    alkene_alkyl=Chem.MolFromSmarts('C[C;R0]=[C;R0]')
    alkene_aryl=Chem.MolFromSmarts('c[C;R0]=[C;R0]')
    amidine_alkyl=Chem.MolFromSmarts('C[C;R0](N)=N')
    amidine_aryl=Chem.MolFromSmarts('c[C;R0](N)=N')
    isocyanate_alkyl=Chem.MolFromSmarts('CN=C=O')
    isocyanate_aryl=Chem.MolFromSmarts('cN=C=O')
    thioisocyanate_alkyl=Chem.MolFromSmarts('CN=C=S')
    thioisocyanate_aryl=Chem.MolFromSmarts('cN=C=S')
    thiol_alkyl=Chem.MolFromSmarts('C[SH]')
    thiol_aryl=Chem.MolFromSmarts('c[SH]')
    azide_alkyl=Chem.MolFromSmarts('[N-]=[N+]=NC')
    azide_aryl=Chem.MolFromSmarts('[N-]=[N+]=Nc')
    epoxyde_alkyl=Chem.MolFromSmarts('C1OC1C')
    epoxyde_aryl=Chem.MolFromSmarts('C1OC1c')
    aziridine_alkyl=Chem.MolFromSmarts('C1NC1C')
    aziridine_aryl=Chem.MolFromSmarts('C1NC1c')
    acyl_chloride_alkyl=Chem.MolFromSmarts('C[C;R0](Cl)=O')
    acyl_chloride_aryl=Chem.MolFromSmarts('c[C;R0](Cl)=O')
    nitro_alkyl=Chem.MolFromSmarts('C[N+]([O-])=O')
    nitro_aryl=Chem.MolFromSmarts('c[N+]([O-])=O')
    ether_alkyl=Chem.MolFromSmarts('C[O;R0]C')
    ether_aryl=Chem.MolFromSmarts('C[O;R0]c')
    thioether_alkyl=Chem.MolFromSmarts('C[S;R0]C')
    thioether_aryl=Chem.MolFromSmarts('C[S;R0]c')
    halo_pyrimidine=Chem.MolFromSmarts('[Cl,Br,I]c1ncccn1')
    sulfonate_ester_alkyl=Chem.MolFromSmarts('c[S;R0](=O)(=O)OC')
    sulfonate_ester_aryl=Chem.MolFromSmarts('c[S;R0](=O)(=O)Oc')
    imine_alkyl=Chem.MolFromSmarts('[C;R0](=N)C')
    imine_aryl=Chem.MolFromSmarts('[C;R0](=N)c')
    michael_acc_alkyl=Chem.MolFromSmarts('C[C;R0](=O)[C;R0]=[C;R0]')
    michael_acc_aryl=Chem.MolFromSmarts('c[C;R0](=O)[C;R0]=[C;R0]')
    vinylsulfonyl_alkyl=Chem.MolFromSmarts('C[S;R0](=O)(=O)[C;R0]=[C;R0]')
    vinylsulfonyl_aryl=Chem.MolFromSmarts('c[S;R0](=O)(=O)[C;R0]=[C;R0]')






    print("amine primaire: ", m.GetSubstructMatches(primaire))
    print("amine secondaire: ", m.GetSubstructMatches(secondaire))
    print("amide1: ", m.GetSubstructMatches(amide1))
    print("amide2: ", m.GetSubstructMatches(amide2))
    print("alcool: ", m.GetSubstructMatches(alcool))
    print("amine_prim_alkyl: ", m.GetSubstructMatches(amine_prim_alkyl))
    print("amine_sec_alkyl: ", m.GetSubstructMatches(amine_sec_alkyl))
    print("amine_tert_alkyl: ", m.GetSubstructMatches(amine_tert_alkyl))
    print("amine_prim_aryl: ", m.GetSubstructMatches(amine_prim_aryl))
    print("amine_sec_aryl: ", m.GetSubstructMatches(amine_sec_aryl))
    print("amine_tert_aryl: ", m.GetSubstructMatches(amine_tert_aryl))
    print("amide_alkyl: ", m.GetSubstructMatches(amide_alkyl))
    print("amide_aryl: ", m.GetSubstructMatches(amide_aryl))
    print("alcohol_alkyl: ", m.GetSubstructMatches(alcohol_alkyl))
    print("alcohol_aryl: ", m.GetSubstructMatches(alcohol_aryl))
    print("acid_alkyl: ", m.GetSubstructMatches(acid_alkyl))
    print("acid_aryl: ", m.GetSubstructMatches(acid_aryl))
    print("aldehyde_alkyl: ", m.GetSubstructMatches(aldehyde_alkyl))
    print("aldehyde_aryl: ", m.GetSubstructMatches(aldehyde_aryl))
    print("boronate_alkyl: ", m.GetSubstructMatches(boronate_alkyl))
    print("boronate_aryl: ", m.GetSubstructMatches(boronate_aryl))
    print("halide_alkyl: ", m.GetSubstructMatches(halide_alkyl))
    print("halide_aryl: ", m.GetSubstructMatches(halide_aryl))
    print("ketone_alkyl: ", m.GetSubstructMatches(ketone_alkyl))
    print("ketone_aryl: ", m.GetSubstructMatches(ketone_aryl))
    print("sulfonylhalide_alkyl: ", m.GetSubstructMatches(sulfonylhalide_alkyl))
    print("sulfonylhalide_aryl: ", m.GetSubstructMatches(sulfonylhalide_aryl))
    print("ester_alkyl: ", m.GetSubstructMatches(ester_alkyl))
    print("ester_aryl: ", m.GetSubstructMatches(ester_aryl))
    print("thioester_alkyl: ", m.GetSubstructMatches(thioester_alkyl))
    print("thioester_aryl: ", m.GetSubstructMatches(thioester_aryl))
    print("ketone_alpha_halide: ", m.GetSubstructMatches(ketone_alpha_halide))
    print("ketone_beta_halide: ", m.GetSubstructMatches(ketone_beta_halide))
    print("thioamide_alkyl1: ", m.GetSubstructMatches(thioamide_alkyl1))
    print("thioamide_alkyl2: ", m.GetSubstructMatches(thioamide_alkyl2))
    print("nitrile_alkyl: ", m.GetSubstructMatches(nitrile_alkyl))
    print("nitrile_aryl: ", m.GetSubstructMatches(nitrile_aryl))
    print("alkyne_alkyl: ", m.GetSubstructMatches(alkyne_alkyl))
    print("alkyne_aryl: ", m.GetSubstructMatches(alkyne_aryl))
    print("dicarbonyl_1_4_alkyl: ", m.GetSubstructMatches(dicarbonyl_1_4_alkyl))
    print("dicarbonyl_1_4_aryl: ", m.GetSubstructMatches(dicarbonyl_1_4_aryl))
    print("dicarbonyl_1_3_alkyl: ", m.GetSubstructMatches(dicarbonyl_1_3_alkyl))
    print("dicarbonyl_1_3_aryl: ", m.GetSubstructMatches(dicarbonyl_1_3_aryl))
    print("hydrazine_alkyl: ", m.GetSubstructMatches(hydrazine_alkyl))
    print("hydrazine_aryl: ", m.GetSubstructMatches(hydrazine_aryl))
    print("imide_alkyl: ", m.GetSubstructMatches(imide_alkyl))
    print("imide_aryl: ", m.GetSubstructMatches(imide_aryl))
    print("anhydride_alkyl: ", m.GetSubstructMatches(anhydride_alkyl))
    print("anhydride_aryl: ", m.GetSubstructMatches(anhydride_aryl))
    print("sulfonamide_alkyl: ", m.GetSubstructMatches(sulfonamide_alkyl))
    print("sulfonamide_aryl: ", m.GetSubstructMatches(sulfonamide_aryl))
    print("alkene_alkyl: ", m.GetSubstructMatches(alkene_alkyl))
    print("alkene_aryl: ", m.GetSubstructMatches(alkene_aryl))
    print("amidine_alkyl: ", m.GetSubstructMatches(amidine_alkyl))
    print("amidine_aryl: ", m.GetSubstructMatches(amidine_aryl))
    print("isocyanate_alkyl: ", m.GetSubstructMatches(isocyanate_alkyl))
    print("isocyanate_aryl: ", m.GetSubstructMatches(isocyanate_aryl))
    print("thioisocyanate_alkyl: ", m.GetSubstructMatches(thioisocyanate_alkyl))
    print("thioisocyanate_aryl: ", m.GetSubstructMatches(thioisocyanate_aryl))
    print("thiol_alkyl: ", m.GetSubstructMatches(thiol_alkyl))
    print("thiol_aryl: ", m.GetSubstructMatches(thiol_aryl))
    print("azide_alkyl: ", m.GetSubstructMatches(azide_alkyl))
    print("azide_aryl: ", m.GetSubstructMatches(azide_aryl))
    print("epoxyde_alkyl: ", m.GetSubstructMatches(epoxyde_alkyl))
    print("epoxyde_aryl: ", m.GetSubstructMatches(epoxyde_aryl))
    print("aziridine_aryl: ", m.GetSubstructMatches(aziridine_aryl))
    print("acyl_chloride_alkyl: ", m.GetSubstructMatches(acyl_chloride_alkyl))
    print("acyl_chloride_aryl: ", m.GetSubstructMatches(acyl_chloride_aryl))
    print("nitro_alkyl: ", m.GetSubstructMatches(nitro_alkyl))
    print("nitro_aryl: ", m.GetSubstructMatches(nitro_aryl))
    print("ether_alkyl: ", m.GetSubstructMatches(ether_alkyl))
    print("ether_aryl: ", m.GetSubstructMatches(ether_aryl))
    print("thioether_alkyl: ", m.GetSubstructMatches(thioether_alkyl))
    print("thioether_aryl: ", m.GetSubstructMatches(thioether_aryl))
    print("halo_pyrimidine: ", m.GetSubstructMatches(halo_pyrimidine))
    print("sulfonate_ester_alkyl: ", m.GetSubstructMatches(sulfonate_ester_alkyl))
    print("sulfonate_ester_aryl: ", m.GetSubstructMatches(sulfonate_ester_aryl))
    print("imine_alkyl: ", m.GetSubstructMatches(imine_alkyl))
    print("imine_aryl: ", m.GetSubstructMatches(imine_aryl))
    print("michael_acc_alkyl: ", m.GetSubstructMatches(michael_acc_alkyl))
    print("michael_acc_aryl: ", m.GetSubstructMatches(michael_acc_aryl))
    print("vinylsulfonyl_alkyl: ", m.GetSubstructMatches(vinylsulfonyl_alkyl))
    print("vinylsulfonyl_aryl: ", m.GetSubstructMatches(vinylsulfonyl_aryl))





#Add H (convert smiles without Hydrogens to smiles with hydrogens)
def addH(smiles):
    m = Chem.MolFromSmiles(smiles)
    m2=Chem.AddHs(m)

    print (Chem.MolToSmiles(m2))


IPythonConsole.drawOptions.addAtomIndices=True



def draw(smiles):
    m = Chem.MolFromSmiles(smiles)
    m
if __name__== '__main__':
smiles=sys.argv[1]
print(smiles)
searchFct(smiles)