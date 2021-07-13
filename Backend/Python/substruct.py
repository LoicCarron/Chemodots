#Dictionnary which associates functions name with their smarts
#substruct returns the smiles of the molecule without the function given in the parameters --> removes the fct


from chemodots import *



functions ={}
remove={}

functions["Boronate alkyl"]='OB(O)C'
remove["Boronate alkyl"]='HOBOH'

functions["Boronate aryl"]='OB(O)c'
remove["Boronate aryl"]='HOBOH'

functions["Amine primaire alkyl"]='[C[NH2]]'
remove["Amine primaire alkyl"]='H'

functions["Amine secondaire alkyl"]='[C[NH]C]'
remove["Amine secondaire alkyl"]='H'

functions["Amine primaire aryl"]='c[NH2]'
remove["Amine primaire aryl"]='H'

functions["Amine secondaire aryl"]='c[NH]c'
remove["Amine secondaire aryl"]='H'

''' On enlève quoi sachant que ça risque de casser la molecule dans tout les cas'''
functions["Amine tertiaire"]='cN(C)C'
remove["Amine tertiaire"]='cN(C)C'

functions["Nitrile alkyl"]='CC#N'
remove["Nitrile alkyl"]='#N'

functions["Nitrile aryl"]='cC#N'
remove["Nitrile aryl"]='#N'
   
functions["Aziridine alkyl"]='C1NC1C'
remove["Aziridine alkyl"]='HNC2HCHC3H'
    
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
remove["Amidine alkyl"]='C[C;R0](N)=N'

functions["Amidine aryl"]='c[C;R0](N)=N'
remove["Amidine aryl"]='c[C;R0](N)=N'
   
functions["Hydrazine alkyl"]='C[NH;R0][NH2;R0]'
remove["Hydrazine alkyl"]='C[NH;R0][NH2;R0]'
    
functions["Hydrazine aryl"]='c[NH;R0][NH2;R0]'
remove["Hydrazine aryl"]='c[NH;R0][NH2;R0]'
    
functions["Alcool"]='[OH;R0][#6;!$([#6]=[O,S])]'
remove["Alcool"]='[OH;R0][#6;!$([#6]=[O,S])]'
    
functions["Alcohol Alkyl"]='C[OH]'
remove["Alcohol Alkyl"]='H'
  
functions["Alcohol Aryl"]='c[OH]'
remove["Alcohol Aryl"]='H'
    
functions["Acide alkyl"]='C[C;R0]([OH])=O'
remove["Acide alkyl"]='H'
    
functions["Acide aryl"]='c[C;R0]([OH])=O'
remove["Acide aryl"]='H'
    
functions["Aldehyde alkyl"]='C[CH1;R0](=O)'
remove["Aldehyde alkyl"]='C[CH1;R0](=O)'
   
functions["Aldehyde aryl"]='c[CH1;R0](=O)'
remove["Aldehyde aryl"]='c[CH1;R0](=O)'
   
functions["Ketone alkyl"]='C[C;R0](=O)C'
remove["Ketone alkyl"]='C[C;R0](=O)C'
   
functions["Ketone aryl"]='c[C;R0](=O)c'
remove["Ketone aryl"]='c[C;R0](=O)c'
    
functions["Ester alkyl"]='C[C;R0](=O)OC'
remove["Ester alkyl"]='C[C;R0](=O)OC'
   
functions["Ester aryl"]='c[C;R0](=O)OC'
remove["Ester aryl"]='c[C;R0](=O)OC'
    
functions["Ether alkyl"]='C[O;R0]C'
remove["Ether alkyl"]='C[O;R0]C'
    
functions["Ether aryl"]='C[O;R0]c'
remove["Ether aryl"]='C[O;R0]c'
    
functions["Michael acc alkyl"]='C[C;R0](=O)[C;R0]=[C;R0]'
remove["Michael acc alkyl"]='C[C;R0](=O)[C;R0]=[C;R0]'
    
functions["Michael acc aryl"]='c[C;R0](=O)[C;R0]=[C;R0]'
remove["Michael acc aryl"]='c[C;R0](=O)[C;R0]=[C;R0]'

functions["Anhydride alkyl"]='C[C;R0](=O)O[C;R0](=O)C'
remove["Anhydride alkyl"]='C[C;R0](=O)O[C;R0](=O)C'
   
functions["Anhydride aryl"]='c[C;R0](=O)O[C;R0](=O)c'
remove["Anhydride aryl"]='c[C;R0](=O)O[C;R0](=O)c'
   
functions["Dicarbonyl 1-3 alkyl"]='C[C;R0](=O)[CH2][C;R0](=O)C'
remove["Dicarbonyl 1-3 alkyl"]='C[C;R0](=O)[CH2][C;R0](=O)C'
   
functions["Dicarbonyl 1-3 aryl"]='[#6][C;R0](=O)[CH2;R0][C;R0]([#6])=O'
remove["Dicarbonyl 1-3 aryl"]='[#6][C;R0](=O)[CH2;R0][C;R0]([#6])=O'
    
functions["Dicarbonyl 1-4 alkyl"]='C[C;R0](=O)[CH2][CH2][C;R0](=O)C'
remove["Dicarbonyl 1-4 alkyl"]='C[C;R0](=O)[CH2][CH2][C;R0](=O)C'
   
functions["Dicarbonyl 1-4 aryl"]='[#6][C;R0](=O)[CH2;R0][CH2;R0][C;R0]([#6])=O'
remove["Dicarbonyl 1-4 aryl"]='[#6][C;R0](=O)[CH2;R0][CH2;R0][C;R0]([#6])=O'
   
functions["Ketone alpha halide"]='C[C;R0](=O)[CH2][Cl,Br,I]'
remove["Ketone alpha halide"]='[Cl,Br,I]'
   
functions["Ketone beta halide"]='C[C;R0](=O)[CH2][CH2][Cl,Br,I]'
remove["Ketone beta halide"]='[Cl,Br,I]'
    
functions["Epoxyde alkyl"]='C1OC1C'
remove["Epoxyde alkyl"]='C1OC1C'
   
functions["Epoxyde aryl"]='C1OC1c'
remove["Epoxyde aryl"]='C1OC1c'
   
functions["Acyl chloride alkyl"]='C[C;R0](Cl)=O'
remove["Acyl chloride alkyl"]='C[C;R0](Cl)=O'

functions["Acyl chloride aryl"]='c[C;R0](Cl)=O'
remove["Acyl chloride aryl"]='c[C;R0](Cl)=O'

functions["Thioether alkyl"]='C[S;R0]C'
remove["Thioether alkyl"]='C[S;R0]C'

functions["Thioether aryl"]='C[S;R0]c'
remove["Thioether aryl"]='C[S;R0]c'

functions["Thiol alkyl"]='C[SH]'
remove["Thiol alkyl"]='H'

functions["Thiol aryl"]='c[SH]'
remove["Thiol aryl"]='H'

functions["Amide 1"]='[#6][C;R0](=[OD1])[NH2]'
remove["Amide 1"]='H'
   
functions["Amide 2"]='[#6][C;R0](=[OD1])[NH][#6]'
remove["Amide 2"]='H'
    
functions["Amide alkyl"]='C[C;R0]([NH2])=O'
remove["Amide alkyl"]='H'
  
functions["Amide aryl"]='c[C;R0]([NH2])=O'
remove["Amide aryl"]='H'
    
functions["Isocyanate alkyl"]='CN=C=O'
remove["Isocyanate alkyl"]='CN=C=O'
    
functions["Isocyanate aryl"]='cN=C=O'
remove["Isocyanate aryl"]='cN=C=O'
   
functions["Nitro alkyl"]='C[N+]([O-])=O'
remove["Nitro alkyl"]='C[N+]([O-])=O'
    
functions["Nitro aryl"]='c[N+]([O-])=O'
remove["Nitro aryl"]='c[N+]([O-])=O'
    
functions["Imide alkyl"]='C[C;R0](=O)N[C;R0](=O)C'
remove["Imide alkyl"]='C[C;R0](=O)N[C;R0](=O)C'
   
functions["Imide aryl"]='c[C;R0](=O)N[C;R0](=O)c'
remove["Imide aryl"]='c[C;R0](=O)N[C;R0](=O)c'

functions["Thioester alkyl"]='C[C;R0](=S)OC'
remove["Thioester alkyl"]='C[C;R0](=S)OC'
   
functions["Thioester aryl"]='c[C;R0](=S)OC'
remove["Thioester aryl"]='c[C;R0](=S)OC'
   
functions["Vinylsulfonyl Alkyl"]='C[S;R0](=O)(=O)[C;R0]=[C;R0]'
remove["Vinylsulfonyl Alkyl"]='C[S;R0](=O)(=O)[C;R0]=[C;R0]'
    
functions["Vinylsulfonyl Aryl"]='c[S;R0](=O)(=O)[C;R0]=[C;R0]'
remove["Vinylsulfonyl Aryl"]='c[S;R0](=O)(=O)[C;R0]=[C;R0]'
    
functions["Sulfonate ester alkyl"]='[#6][O;R0][S;R0](=O)(=O)[#6]'
remove["Sulfonate ester alkyl"]='OS(=O)(=O)'
   
functions["Sulfonate ester aryl"]='c[S;R0](=O)(=O)Oc'
remove["Sulfonate ester aryl"]='S(=O)(=O)Oc'
    
functions["Sulfonylhalide alkyl"]='C[S;R0](Cl)(=O)=O'
remove["Sulfonylhalide alkyl"]='Cl'
   
functions["Sulfonylhalide aryl"]='c[S;R0](Cl)(=O)=O'
remove["Sulfonylhalide aryl"]='Cl'

functions["Thioamide alkyl 1"]='C[C;R0]([NH2])=S'
remove["Thioamide alkyl 1"]='/NH'
   
functions["Thioamide alkyl 2"]='c[C;R0]([NH2])=S'
remove["Thioamide alkyl 2"]='/NH'
  
functions["Thioisocyanate alkyl"]='CN=C=S'
remove["Thioisocyanate alkyl"]='N=C=S'
   
functions["Thioisocyanate aryl"]='cN=C=S'
remove["Thioisocyanate aryl"]='N=C=S'

functions["Sulfonamide alkyl"]='C[S;R0]([NH2])(=O)=O'
remove["Sulfonamide alkyl"]='H'
   
functions["Sulfonamide aryl"]='c[S;R0]([NH2])(=O)=O'
remove["Sulfonamide aryl"]='H'
   
functions["Alkyne alkyl"]='CC#C'
remove["Alkyne alkyl"]='C#C'
   
functions["Alkyne aryl"]='cC#C'
remove["Alkyne aryl"]='C#C'

functions["Alkene alkyl"]='C[C;R0]=[C;R0]'
remove["Alkene alkyl"]='CH=C'
   
functions["Alkene aryl"]='c[C;R0]=[C;R0]'
remove["Alkene aryl"]='HCH=CH'
    
functions["Halide alkyl"]='[CH2][Cl,Br,I]'
remove["Halide alkyl"]='Cl,Br,I'
    
functions["Halide aryl"]='c[Cl,Br,I]'
remove["Halide aryl"]='Cl,Br,I'
   
functions["Halo pyrimidine"]='[Cl,Br,I]c1ncccn1'
remove["Halo pyrimidine"]='Cl,Br,I'
    
    


def substruct(smiles, function):
    m = Chem.MolFromSmiles(smiles)
    m=AllChem.AddHs(m)
    params = Chem.SmilesParserParams()
    params.removeHs=False
    m=Chem.MolFromSmiles(AllChem.MolToSmiles(m),params)
    print(Chem.MolToSmiles(m))

    '''
    fct = Chem.MolFromSmarts(functions[function])
    rm = AllChem.DeleteSubstructs(m,fct)
    print(Chem.MolToSmiles(rm))'''
    tmp=Chem.MolFromSmarts(functions[function])
    try:
        tmp2=AllChem.AddHs(tmp)
        print(m.GetSubstructMatches(tmp2))
    except:
        print(m.GetSubstructMatches(tmp))

    print(remove[function])
import sys
if __name__== '__main__':
# simple argument echo script
   smiles=sys.argv[1]
   function=sys.argv[2]
   substruct(smiles, function)
  