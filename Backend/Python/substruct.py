#Dictionnary which associates functions name with their smarts
#substruct returns the smiles of the molecule without the function given in the parameters --> removes the fct


from chemodots import *



functions ={}

functions["Boronate alkyl"]='OB(O)C'

functions["Boronate aryl"]='OB(O)c'

functions["Amine Primaire"]='[NH2;!$(N~[C,S,P,N]=[O,S,N]);!$(N#[C,N]);!$(N=C)]'

functions["Amine secondaire"]='[NH1;!$(N~[C,S,P,N]=[O,S,N]);!$(N#[C,N]);!$(N=C)]'

functions["Amine tertiaire"]='cN(C)C'

functions["Nitrile alkyl"]='CC#N'
 
functions["Nitrile aryl"]='cC#N'
   
functions["Aziridine alkyl"]='C1NC1C'
    
functions["Aziridine aryl"]='C1NC1c'
  
functions["Imine alkyl"]='[C;R0](=N)C'
   
functions["Imine aryl"]='[C;R0](=N)c'
  
functions["Azide alkyl"]='[N-]=[N+]=NC'
   
functions["Azide aryl"]='[N-]=[N+]=Nc'
   
functions["Amidine alkyl"]='C[C;R0](N)=N'

functions["Amidine aryl"]='c[C;R0](N)=N'
   
functions["Hydrazine alkyl"]='C[NH;R0][NH2;R0]'
    
functions["Hydrazine aryl"]='c[NH;R0][NH2;R0]'
    
functions["Alcool"]='[OH;R0][#6;!$([#6]=[O,S])]'
    
functions["Alcohol Alkyl"]='C[OH]'
  
functions["Alcohol Aryl"]='c[OH]'
    
functions["Acide alkyl"]='C[C;R0]([OH])=O'
    
functions["Acide aryl"]='c[C;R0]([OH])=O'
    
functions["Aldehyde alkyl"]='C[CH1;R0](=O)'
   
functions["Aldehyde aryl"]='c[CH1;R0](=O)'
   
functions["Ketone alkyl"]='C[C;R0](=O)C'
   
functions["Ketone aryl"]='c[C;R0](=O)c'
    
functions["Ester alkyl"]='C[C;R0](=O)OC'
   
functions["Ester aryl"]='c[C;R0](=O)OC'
    
functions["Ether alkyl"]='C[O;R0]C'
    
functions["Ether aryl"]='C[O;R0]c'
    
functions["Michael acc alkyl"]='C[C;R0](=O)[C;R0]=[C;R0]'
    
functions["Michael acc aryl"]='c[C;R0](=O)[C;R0]=[C;R0]'

functions["Anhydride alkyl"]='C[C;R0](=O)O[C;R0](=O)C'
   
functions["Anhydride aryl"]='c[C;R0](=O)O[C;R0](=O)c'
   
functions["Dicarbonyl 1-3 alkyl"]='C[C;R0](=O)[CH2][C;R0](=O)C'
   
functions["Dicarbonyl 1-3 aryl"]='[#6][C;R0](=O)[CH2;R0][C;R0]([#6])=O'
    
functions["Dicarbonyl 1-4 alkyl"]='C[C;R0](=O)[CH2][CH2][C;R0](=O)C'
   
functions["Dicarbonyl 1-4 aryl"]='[#6][C;R0](=O)[CH2;R0][CH2;R0][C;R0]([#6])=O'
   
functions["Ketone alpha halide"]='C[C;R0](=O)[CH2][Cl,Br,I]'
   
functions["Ketone beta halide"]='C[C;R0](=O)[CH2][CH2][Cl,Br,I]'
    
functions["Epoxyde alkyl"]='C1OC1C'
   
functions["Epoxyde aryl"]='C1OC1c'
   
functions["Acyl chloride alkyl"]='C[C;R0](Cl)=O'

functions["Acyl chloride aryl"]='c[C;R0](Cl)=O'

functions["Thioether alkyl"]='C[S;R0]C'

functions["Thioether aryl"]='C[S;R0]c'

functions["Thiol alkyl"]='C[SH]'

functions["Thiol aryl"]='c[SH]'

functions["Amide 1"]='[#6][C;R0](=[OD1])[NH2]'
   
functions["Amide 2"]='[#6][C;R0](=[OD1])[NH][#6]'
    
functions["Amide alkyl"]='C[C;R0]([NH2])=O'
  
functions["Amide aryl"]='c[C;R0]([NH2])=O'
    
functions["Isocyanate alkyl"]='CN=C=O'
    
functions["Isocyanate aryl"]='cN=C=O'
   
functions["Nitro alkyl"]='C[N+]([O-])=O'
    
functions["Nitro aryl"]='c[N+]([O-])=O'
    
functions["Imide alkyl"]='C[C;R0](=O)N[C;R0](=O)C'
   
functions["Imide aryl"]='c[C;R0](=O)N[C;R0](=O)c'

functions["Thioester alkyl"]='C[C;R0](=S)OC'
   
functions["Thioester aryl"]='c[C;R0](=S)OC'
   
functions["Vinylsulfonyl Alkyl"]='C[S;R0](=O)(=O)[C;R0]=[C;R0]'
    
functions["Vinylsulfonyl Aryl"]='c[S;R0](=O)(=O)[C;R0]=[C;R0]'
    
functions["Sulfonate ester alkyl"]='[#6][O;R0][S;R0](=O)(=O)[#6]'
   
functions["Sulfonate ester aryl"]='c[S;R0](=O)(=O)Oc'
    
functions["Sulfonylhalide alkyl"]='C[S;R0](Cl)(=O)=O'
   
functions["Sulfonylhalide aryl"]='c[S;R0](Cl)(=O)=O'

functions["Thioamide alkyl 1"]='C[C;R0]([NH2])=S'
   
functions["Thioamide alkyl 2"]='c[C;R0]([NH2])=S'
  
functions["Thioisocyanate alkyl"]='CN=C=S'
   
functions["Thioisocyanate aryl"]='cN=C=S'

functions["Sulfonamide alkyl"]='C[S;R0]([NH2])(=O)=O'
   
functions["Sulfonamide aryl"]='c[S;R0]([NH2])(=O)=O'
   
functions["Alkyne alkyl"]='CC#C'
   
functions["Alkyne aryl"]='cC#C'
    
functions["Alkene alkyl"]='C[C;R0]=[C;R0]'
   
functions["Alkene aryl"]='c[C;R0]=[C;R0]'
    
functions["Halide alkyl"]='[CH2][Cl,Br,I]'
    
functions["Halide aryl"]='c[Cl,Br,I]'
   
functions["Halo pyrimidine"]='[Cl,Br,I]c1ncccn1'
    
    


def substruct(smiles, function):
    m = Chem.MolFromSmiles(smiles)
    m=Chem.AddHs(m)
    fct = Chem.MolFromSmarts(functions[function])
    print(Chem.MolToSmarts(fct))
    rm = AllChem.DeleteSubstructs(m,fct)
    
    print(Chem.MolToSmiles(rm))
import sys
if __name__== '__main__':
# simple argument echo script
   smiles=sys.argv[1]
   function=sys.argv[2]
   substruct(smiles, function)
  