#Dictionnary which associates functions name with their smarts
#substruct returns the smiles of the molecule without the function given in the parameters --> removes the fct


from chemodots import *



functions ={}
remove={}

functions["Boronate alkyl"]='OB(O)C'
remove["Boronate alkyl"]='OB(O)C'

functions["Boronate aryl"]='OB(O)c'
remove["Boronate aryl"]='OB(O)'

functions["Amine Primaire"]='[NH2;!$(N~[C,S,P,N]=[O,S,N]);!$(N#[C,N]);!$(N=C)]'
remove["Amine Primaire"]='N'

functions["Amine secondaire"]='[NH1;!$(N~[C,S,P,N]=[O,S,N]);!$(N#[C,N]);!$(N=C)]'
remove["Amine secondaire"]='N'
''' On enlève quoi sachant que ça risque de casser la molecule dans tout les cas'''
functions["Amine tertiaire"]='cN(C)C'
remove["Amine tertiaire"]=''

functions["Nitrile alkyl"]='CC#N'
remove["Nitrile alkyl"]='#N'

functions["Nitrile aryl"]='cC#N'
remove["Nitrile aryl"]='#N'
   
functions["Aziridine alkyl"]='C1NC1C'
remove["Aziridine alkyl"]='C1NC1C'
    
functions["Aziridine aryl"]='C1NC1c'
remove["Aziridine aryl"]='C1NC1'
  
functions["Imine alkyl"]='[C;R0](=N)C'
remove["Imine alkyl"]='HN'
   
functions["Imine aryl"]='[C;R0](=N)c'
remove["Imine aryl"]='HN'
  
functions["Azide alkyl"]='[N-]=[N+]=NC'
remove["Azide alkyl"]='3N'
   
functions["Azide aryl"]='[N-]=[N+]=Nc'
remove["Azide aryl"]='3N'
   
functions["Amidine alkyl"]='C[C;R0](N)=N'
remove["Amidine alkyl"]=''

functions["Amidine aryl"]='c[C;R0](N)=N'
remove["Amidine aryl"]='OB(O)C'
   
functions["Hydrazine alkyl"]='C[NH;R0][NH2;R0]'
remove["Hydrazine alkyl"]='OB(O)C'
    
functions["Hydrazine aryl"]='c[NH;R0][NH2;R0]'
remove["Hydrazine aryl"]='OB(O)C'
    
functions["Alcool"]='[OH;R0][#6;!$([#6]=[O,S])]'
remove["Alcool"]='OB(O)C'
    
functions["Alcohol Alkyl"]='C[OH]'
remove["Alcohol Alkyl"]='OB(O)C'
  
functions["Alcohol Aryl"]='c[OH]'
remove["Alcohol Aryl"]='OB(O)C'
    
functions["Acide alkyl"]='C[C;R0]([OH])=O'
remove["Acide alkyl"]='OB(O)C'
    
functions["Acide aryl"]='c[C;R0]([OH])=O'
remove["Acide aryl"]='OB(O)C'
    
functions["Aldehyde alkyl"]='C[CH1;R0](=O)'
remove["Aldehyde alkyl"]='OB(O)C'
   
functions["Aldehyde aryl"]='c[CH1;R0](=O)'
remove["Aldehyde aryl"]='OB(O)C'
   
functions["Ketone alkyl"]='C[C;R0](=O)C'
remove["Ketone alkyl"]='OB(O)C'
   
functions["Ketone aryl"]='c[C;R0](=O)c'
remove["Ketone aryl"]='OB(O)C'
    
functions["Ester alkyl"]='C[C;R0](=O)OC'
remove["Ester alkyl"]='OB(O)C'
   
functions["Ester aryl"]='c[C;R0](=O)OC'
remove["Ester aryl"]='OB(O)C'
    
functions["Ether alkyl"]='C[O;R0]C'
remove["Ether alkyl"]='OB(O)C'
    
functions["Ether aryl"]='C[O;R0]c'
remove["Ether aryl"]='OB(O)C'
    
functions["Michael acc alkyl"]='C[C;R0](=O)[C;R0]=[C;R0]'
remove["Michael acc alkyl"]='OB(O)C'
    
functions["Michael acc aryl"]='c[C;R0](=O)[C;R0]=[C;R0]'
remove["Michael acc aryl"]='OB(O)C'

functions["Anhydride alkyl"]='C[C;R0](=O)O[C;R0](=O)C'
remove["Anhydride alkyl"]='OB(O)C'
   
functions["Anhydride aryl"]='c[C;R0](=O)O[C;R0](=O)c'
remove["Anhydride aryl"]='OB(O)C'
   
functions["Dicarbonyl 1-3 alkyl"]='C[C;R0](=O)[CH2][C;R0](=O)C'
remove["Dicarbonyl 1-3 alkyl"]='OB(O)C'
   
functions["Dicarbonyl 1-3 aryl"]='[#6][C;R0](=O)[CH2;R0][C;R0]([#6])=O'
remove["Dicarbonyl 1-3 aryl"]='OB(O)C'
    
functions["Dicarbonyl 1-4 alkyl"]='C[C;R0](=O)[CH2][CH2][C;R0](=O)C'
remove["Dicarbonyl 1-4 alkyl"]='OB(O)C'
   
functions["Dicarbonyl 1-4 aryl"]='[#6][C;R0](=O)[CH2;R0][CH2;R0][C;R0]([#6])=O'
remove["Dicarbonyl 1-4 aryl"]='OB(O)C'
   
functions["Ketone alpha halide"]='C[C;R0](=O)[CH2][Cl,Br,I]'
remove["Ketone alpha halide"]='OB(O)C'
   
functions["Ketone beta halide"]='C[C;R0](=O)[CH2][CH2][Cl,Br,I]'
remove["Ketone beta halide"]='OB(O)C'
    
functions["Epoxyde alkyl"]='C1OC1C'
remove["Epoxyde alkyl"]='OB(O)C'
   
functions["Epoxyde aryl"]='C1OC1c'
remove["Epoxyde aryl"]='OB(O)C'
   
functions["Acyl chloride alkyl"]='C[C;R0](Cl)=O'
remove["Acyl chloride alkyl"]='OB(O)C'

functions["Acyl chloride aryl"]='c[C;R0](Cl)=O'
remove["Acyl chloride aryl"]='OB(O)C'

functions["Thioether alkyl"]='C[S;R0]C'
remove["Thioether alkyl"]='OB(O)C'

functions["Thioether aryl"]='C[S;R0]c'
remove["Thioether aryl"]='OB(O)C'

functions["Thiol alkyl"]='C[SH]'
remove["Thiol alkyl"]='OB(O)C'

functions["Thiol aryl"]='c[SH]'
remove["Thiol aryl"]='OB(O)C'

functions["Amide 1"]='[#6][C;R0](=[OD1])[NH2]'
remove["Amide 1"]='OB(O)C'
   
functions["Amide 2"]='[#6][C;R0](=[OD1])[NH][#6]'
remove["Amide 2"]='OB(O)C'
    
functions["Amide alkyl"]='C[C;R0]([NH2])=O'
remove["Amide alkyl"]='OB(O)C'
  
functions["Amide aryl"]='c[C;R0]([NH2])=O'
remove["Amide aryl"]='OB(O)C'
    
functions["Isocyanate alkyl"]='CN=C=O'
remove["Isocyanate alkyl"]='OB(O)C'
    
functions["Isocyanate aryl"]='cN=C=O'
remove["Isocyanate aryl"]='OB(O)C'
   
functions["Nitro alkyl"]='C[N+]([O-])=O'
remove["Nitro alkyl"]='OB(O)C'
    
functions["Nitro aryl"]='c[N+]([O-])=O'
remove["Nitro aryl"]='OB(O)C'
    
functions["Imide alkyl"]='C[C;R0](=O)N[C;R0](=O)C'
remove["Imide alkyl"]='OB(O)C'
   
functions["Imide aryl"]='c[C;R0](=O)N[C;R0](=O)c'
remove["Imide aryl"]='OB(O)C'

functions["Thioester alkyl"]='C[C;R0](=S)OC'
remove["Thioester alkyl"]='OB(O)C'
   
functions["Thioester aryl"]='c[C;R0](=S)OC'
remove["Thioester aryl"]='OB(O)C'
   
functions["Vinylsulfonyl Alkyl"]='C[S;R0](=O)(=O)[C;R0]=[C;R0]'
remove["Vinylsulfonyl Alkyl"]='OB(O)C'
    
functions["Vinylsulfonyl Aryl"]='c[S;R0](=O)(=O)[C;R0]=[C;R0]'
remove["Vinylsulfonyl Aryl"]='OB(O)C'
    
functions["Sulfonate ester alkyl"]='[#6][O;R0][S;R0](=O)(=O)[#6]'
remove["Sulfonate ester alkyl"]='OB(O)C'
   
functions["Sulfonate ester aryl"]='c[S;R0](=O)(=O)Oc'
remove["Sulfonate ester aryl"]='OB(O)C'
    
functions["Sulfonylhalide alkyl"]='C[S;R0](Cl)(=O)=O'
remove["Sulfonylhalide alkyl"]='OB(O)C'
   
functions["Sulfonylhalide aryl"]='c[S;R0](Cl)(=O)=O'
remove["Sulfonylhalide aryl"]='OB(O)C'

functions["Thioamide alkyl 1"]='C[C;R0]([NH2])=S'
remove["Thioamide alkyl 1"]='OB(O)C'
   
functions["Thioamide alkyl 2"]='c[C;R0]([NH2])=S'
remove["Thioamide alkyl 2"]='OB(O)C'
  
functions["Thioisocyanate alkyl"]='CN=C=S'
remove["Thioisocyanate alkyl"]='OB(O)C'
   
functions["Thioisocyanate aryl"]='cN=C=S'
remove["Thioisocyanate aryl"]='OB(O)C'

functions["Sulfonamide alkyl"]='C[S;R0]([NH2])(=O)=O'
remove["Sulfonamide alkyl"]='OB(O)C'
   
functions["Sulfonamide aryl"]='c[S;R0]([NH2])(=O)=O'
remove["Sulfonamide aryl"]='OB(O)C'
   
functions["Alkyne alkyl"]='CC#C'
remove["Alkyne alkyl"]='OB(O)C'
   
functions["Alkyne aryl"]='cC#C'
remove["Alkyne aryl"]='OB(O)C'

functions["Alkene alkyl"]='C[C;R0]=[C;R0]'
remove["Alkene alkyl"]='OB(O)C'
   
functions["Alkene aryl"]='c[C;R0]=[C;R0]'
remove["Alkene aryl"]='OB(O)C'
    
functions["Halide alkyl"]='[CH2][Cl,Br,I]'
remove["Halide alkyl"]='OB(O)C'
    
functions["Halide aryl"]='c[Cl,Br,I]'
remove["Halide aryl"]='OB(O)C'
   
functions["Halo pyrimidine"]='[Cl,Br,I]c1ncccn1'
remove["Halo pyrimidine"]='OB(O)C'
    
    


def substruct(smiles, function):
    m = Chem.MolFromSmiles(smiles)
    m=Chem.AddHs(m)
    print(Chem.MolToSmiles(m))
    '''
    fct = Chem.MolFromSmarts(functions[function])
    rm = AllChem.DeleteSubstructs(m,fct)
    print(Chem.MolToSmiles(rm))'''
    tmp=Chem.MolFromSmarts(functions[function])
    tmp=Chem.AddHs(tmp)

    print(m.GetSubstructMatches(tmp))
    print(remove[function])
import sys
if __name__== '__main__':
# simple argument echo script
   smiles=sys.argv[1]
   function=sys.argv[2]
   substruct(smiles, function)
  