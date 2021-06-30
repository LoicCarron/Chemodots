from rdkit import Chem
from rdkit.Chem.Draw import rdMolDraw2D
from rdkit.Chem.Draw import IPythonConsole
from rdkit.Chem import AllChem
from IPython import get_ipython


#Search fct (return the index where the fct is)
def searchFct(smiles):
    
    m = Chem.MolFromSmiles(smiles)
    
    #B
    boronate_alkyl=Chem.MolFromSmarts('OB(O)C')
    boronate_alkyl.name="Boronate alkyl"
    boronate_aryl=Chem.MolFromSmarts('OB(O)c')
    boronate_aryl.name="Boronate aryl"
    
    #N
    primaire=Chem.MolFromSmarts('[NH2;!$(N~[C,S,P,N]=[O,S,N]);!$(N#[C,N]);!$(N=C)]')
    primaire.name="Amine Primaire"
    secondaire=Chem.MolFromSmarts('[NH1;!$(N~[C,S,P,N]=[O,S,N]);!$(N#[C,N]);!$(N=C)]')
    secondaire.name="Amine secondaire"
    tertiaire=Chem.MolFromSmarts('cN(C)C')
    tertiaire.name="Amine tertiaire"
    #amine_prim_alkyl=Chem.MolFromSmarts('C[NH2]')
    #amine_prim_alkyl.name="Amine primaire alkyl"
    #amine_sec_alkyl=Chem.MolFromSmarts('C[NH]C')
    #amine_sec_alkyl.name="Amine secondaire alkyl"
    #amine_tert_alkyl=Chem.MolFromSmarts('CN(C)C')
    #amine_tert_alkyl.name="Amine tertiaire alkyl"
    #amine_prim_aryl=Chem.MolFromSmarts('c[NH2]')
    #amine_prim_aryl.name="Amine primaire aryl"
    #amine_sec_aryl=Chem.MolFromSmarts('c[NH]c')
    #amine_sec_aryl.name="Amine secondaire aryl"
    #amine_tert_aryl=Chem.MolFromSmarts('cN(C)C')
    #amine_tert_aryl.name="Amine tertiaire aryl"
    nitrile_alkyl=Chem.MolFromSmarts('CC#N')
    nitrile_alkyl.name="Nitrile alkyl"
    nitrile_aryl=Chem.MolFromSmarts('cC#N')
    nitrile_aryl.name="Nitrile aryl"
    aziridine_alkyl=Chem.MolFromSmarts('C1NC1C')
    aziridine_alkyl.name="Aziridine alkyl"
    aziridine_aryl=Chem.MolFromSmarts('C1NC1c')
    aziridine_aryl.name="Aziridine aryl"
    imine_alkyl=Chem.MolFromSmarts('[C;R0](=N)C')
    imine_alkyl.name="Imine alkyl"
    imine_aryl=Chem.MolFromSmarts('[C;R0](=N)c')
    imine_aryl.name="Imine aryl"
    azide_alkyl=Chem.MolFromSmarts('[N-]=[N+]=NC')
    azide_alkyl.name="Azide alkyl"
    azide_aryl=Chem.MolFromSmarts('[N-]=[N+]=Nc')
    azide_aryl.name="Azide aryl"
    amidine_alkyl=Chem.MolFromSmarts('C[C;R0](N)=N')
    amidine_alkyl.name="Amidine alkyl"
    amidine_aryl=Chem.MolFromSmarts('c[C;R0](N)=N')
    amidine_aryl.name="Amidine aryl"
    hydrazine_alkyl=Chem.MolFromSmarts('C[NH;R0][NH2;R0]')
    hydrazine_alkyl.name="Hydrazine alkyl"
    hydrazine_aryl=Chem.MolFromSmarts('c[NH;R0][NH2;R0]')
    hydrazine_aryl.name="Hydrazine aryl"
    
    #O
    alcool=Chem.MolFromSmarts('[OH;R0][#6;!$([#6]=[O,S])]')
    alcool.name="Alcool"
    alcohol_alkyl=Chem.MolFromSmarts('C[OH]')
    alcohol_alkyl.name="Alcohol Alkyl"
    alcohol_aryl=Chem.MolFromSmarts('c[OH]')
    alcohol_aryl.name="Alcohol Aryl"
    acid_alkyl=Chem.MolFromSmarts('C[C;R0]([OH])=O')
    acid_alkyl.name="Acide alkyl"
    acid_aryl=Chem.MolFromSmarts('c[C;R0]([OH])=O')
    acid_aryl.name="Acide aryl"
    aldehyde_alkyl=Chem.MolFromSmarts('C[CH1;R0](=O)')
    aldehyde_alkyl.name="Aldehyde alkyl"
    aldehyde_aryl=Chem.MolFromSmarts('c[CH1;R0](=O)')
    aldehyde_aryl.name="Aldehyde aryl"
    ketone_alkyl=Chem.MolFromSmarts('C[C;R0](=O)C')
    ketone_alkyl.name="Ketone alkyl"
    ketone_aryl=Chem.MolFromSmarts('c[C;R0](=O)c')
    ketone_aryl.name="Ketone aryl"
    ester_alkyl=Chem.MolFromSmarts('C[C;R0](=O)OC')
    ester_alkyl.name="Ester alkyl"
    ester_aryl=Chem.MolFromSmarts('c[C;R0](=O)OC')
    ester_aryl.name="Ester aryl"
    ether_alkyl=Chem.MolFromSmarts('C[O;R0]C')
    ether_alkyl.name="Ether alkyl"
    ether_aryl=Chem.MolFromSmarts('C[O;R0]c')
    ether_aryl.name="Ether aryl"
    michael_acc_alkyl=Chem.MolFromSmarts('C[C;R0](=O)[C;R0]=[C;R0]')
    michael_acc_alkyl.name="Michael acc alkyl"
    michael_acc_aryl=Chem.MolFromSmarts('c[C;R0](=O)[C;R0]=[C;R0]')
    michael_acc_aryl.name="Michael acc aryl"
    anhydride_alkyl=Chem.MolFromSmarts('C[C;R0](=O)O[C;R0](=O)C')
    anhydride_alkyl.name="Anhydride alkyl"
    anhydride_aryl=Chem.MolFromSmarts('c[C;R0](=O)O[C;R0](=O)c')
    anhydride_aryl.name="Anhydride aryl"
    dicarbonyl_1_3_alkyl=Chem.MolFromSmarts('C[C;R0](=O)[CH2][C;R0](=O)C')
    dicarbonyl_1_3_alkyl.name="Dicarbonyl 1-3 alkyl"
    dicarbonyl_1_3_aryl=Chem.MolFromSmarts('[#6][C;R0](=O)[CH2;R0][C;R0]([#6])=O')
    dicarbonyl_1_3_aryl.name="Dicarbonyl 1-3 aryl"
    dicarbonyl_1_4_alkyl=Chem.MolFromSmarts('C[C;R0](=O)[CH2][CH2][C;R0](=O)C')
    dicarbonyl_1_4_alkyl.name="Dicarbonyl 1-4 alkyl"
    dicarbonyl_1_4_aryl=Chem.MolFromSmarts('[#6][C;R0](=O)[CH2;R0][CH2;R0][C;R0]([#6])=O')
    dicarbonyl_1_4_aryl.name="Dicarbonyl 1-4 aryl"
    ketone_alpha_halide=Chem.MolFromSmarts('C[C;R0](=O)[CH2][Cl,Br,I]')
    ketone_alpha_halide.name="Ketone alpha halide"
    ketone_beta_halide=Chem.MolFromSmarts('C[C;R0](=O)[CH2][CH2][Cl,Br,I]')
    ketone_beta_halide.name="Ketone beta halide"
    epoxyde_alkyl=Chem.MolFromSmarts('C1OC1C')
    epoxyde_alkyl.name="Epoxyde alkyl"
    epoxyde_aryl=Chem.MolFromSmarts('C1OC1c')
    epoxyde_aryl.name="Epoxyde aryl"
    acyl_chloride_alkyl=Chem.MolFromSmarts('C[C;R0](Cl)=O')
    acyl_chloride_alkyl.name="Acyl chloride alkyl"
    acyl_chloride_aryl=Chem.MolFromSmarts('c[C;R0](Cl)=O')
    acyl_chloride_aryl.name="Acyl chloride aryl"

    
    
    #S
    thioether_alkyl=Chem.MolFromSmarts('C[S;R0]C')
    thioether_alkyl.name="Thioether alkyl"
    thioether_aryl=Chem.MolFromSmarts('C[S;R0]c')
    thioether_aryl.name="Thioether aryl"
    thiol_alkyl=Chem.MolFromSmarts('C[SH]')
    thiol_alkyl.name="Thiol alkyl"
    thiol_aryl=Chem.MolFromSmarts('c[SH]')
    thiol_aryl.name="Thiol aryl"
    
    
    #O & N
    amide1=Chem.MolFromSmarts('[#6][C;R0](=[OD1])[NH2]')
    amide1.name="Amide 1"
    amide2=Chem.MolFromSmarts('[#6][C;R0](=[OD1])[NH][#6]')
    amide2.name="Amide 2"
    amide_alkyl=Chem.MolFromSmarts('C[C;R0]([NH2])=O')
    amide_alkyl.name="Amide alkyl"
    amide_aryl=Chem.MolFromSmarts('c[C;R0]([NH2])=O')
    amide_aryl.name="Amide aryl"
    isocyanate_alkyl=Chem.MolFromSmarts('CN=C=O')
    isocyanate_alkyl.name="Isocyanate alkyl"
    isocyanate_aryl=Chem.MolFromSmarts('cN=C=O')
    isocyanate_aryl.name="Isocyanate aryl"
    nitro_alkyl=Chem.MolFromSmarts('C[N+]([O-])=O')
    nitro_alkyl.name="Nitro alkyl"
    nitro_aryl=Chem.MolFromSmarts('c[N+]([O-])=O')
    nitro_aryl.name="Nitro aryl"
    imide_alkyl=Chem.MolFromSmarts('C[C;R0](=O)N[C;R0](=O)C')
    imide_alkyl.name="Imide alkyl"
    imide_aryl=Chem.MolFromSmarts('c[C;R0](=O)N[C;R0](=O)c')
    imide_aryl.name="Imide aryl"
   
  
   
    #O & S
    thioester_alkyl=Chem.MolFromSmarts('C[C;R0](=S)OC')
    thioester_alkyl.name="Thioester alkyl"
    thioester_aryl=Chem.MolFromSmarts('c[C;R0](=S)OC')
    thioester_aryl.name="Thioester aryl"
    vinylsulfonyl_alkyl=Chem.MolFromSmarts('C[S;R0](=O)(=O)[C;R0]=[C;R0]')
    vinylsulfonyl_alkyl.name="Vinylsulfonyl Alkyl"
    vinylsulfonyl_aryl=Chem.MolFromSmarts('c[S;R0](=O)(=O)[C;R0]=[C;R0]')
    vinylsulfonyl_aryl.name="Vinylsulfonyl Aryl"
    sulfonate_ester_alkyl=Chem.MolFromSmarts('[#6][O;R0][S;R0](=O)(=O)[#6]')
    sulfonate_ester_alkyl.name="Sulfonate ester alkyl"
    sulfonate_ester_aryl=Chem.MolFromSmarts('c[S;R0](=O)(=O)Oc')
    sulfonate_ester_aryl.name="Sulfonate ester aryl"
    sulfonylhalide_alkyl=Chem.MolFromSmarts('C[S;R0](Cl)(=O)=O')
    sulfonylhalide_alkyl.name="Sulfonylhalide alkyl"
    sulfonylhalide_aryl=Chem.MolFromSmarts('c[S;R0](Cl)(=O)=O')
    sulfonylhalide_aryl.name="Sulfonylhalide aryl"
    
    #S & N
    thioamide_alkyl1=Chem.MolFromSmarts('C[C;R0]([NH2])=S')
    thioamide_alkyl1.name="Thioamide alkyl 1"
    thioamide_alkyl2=Chem.MolFromSmarts('c[C;R0]([NH2])=S')
    thioamide_alkyl2.name="Thioamide alkyl 2"
    thioisocyanate_alkyl=Chem.MolFromSmarts('CN=C=S')
    thioisocyanate_alkyl.name="Thioisocyanate alkyl"
    thioisocyanate_aryl=Chem.MolFromSmarts('cN=C=S')
    thioisocyanate_aryl.name="Thioisocyanate aryl"
    
    
    #S & N & O
    sulfonamide_alkyl=Chem.MolFromSmarts('C[S;R0]([NH2])(=O)=O')
    sulfonamide_alkyl.name="Sulfonamide alkyl"
    sulfonamide_aryl=Chem.MolFromSmarts('c[S;R0]([NH2])(=O)=O')
    sulfonamide_aryl.name="Sulfonamide aryl"
    
    #else
    alkyne_alkyl=Chem.MolFromSmarts('CC#C')
    alkyne_alkyl.name="Alkyne alkyl"
    alkyne_aryl=Chem.MolFromSmarts('cC#C')
    alkyne_aryl.name="Alkyne aryl"
    alkene_alkyl=Chem.MolFromSmarts('C[C;R0]=[C;R0]')
    alkene_alkyl.name="Alkene alkyl"
    alkene_aryl=Chem.MolFromSmarts('c[C;R0]=[C;R0]')
    alkene_aryl.name="Alkene aryl"
    halide_alkyl=Chem.MolFromSmarts('[CH2][Cl,Br,I]')
    halide_alkyl.name="Halide alkyl"
    halide_aryl=Chem.MolFromSmarts('c[Cl,Br,I]')
    halide_aryl.name="Halide aryl"
    halo_pyrimidine=Chem.MolFromSmarts('[Cl,Br,I]c1ncccn1')
    halo_pyrimidine.name="Halo pyrimidine"
    
    
    
    fctB = {1:boronate_alkyl, 2:boronate_aryl}
    fctN = {1:imine_alkyl, 2:imine_aryl, 3:amidine_alkyl, 4:amidine_aryl, 5:hydrazine_alkyl, 6:hydrazine_aryl, 7:aziridine_alkyl, 8:aziridine_aryl, 9:nitrile_alkyl, 10:nitrile_aryl, 11:azide_alkyl, 12:azide_aryl, 13:primaire, 14:secondaire, 15:tertiaire }
    fctO = {1:dicarbonyl_1_3_alkyl, 2:dicarbonyl_1_3_aryl, 3:dicarbonyl_1_4_alkyl, 4:dicarbonyl_1_4_aryl, 5:anhydride_alkyl, 6:anhydride_aryl, 7:ether_alkyl, 8:ether_aryl, 9:ester_alkyl, 10:ester_aryl, 11:ketone_alkyl, 12:ketone_aryl, 13:michael_acc_alkyl, 14:michael_acc_aryl,15:aldehyde_alkyl, 16:aldehyde_aryl, 17:acid_alkyl, 18:acid_aryl, 19:alcohol_alkyl, 20:alcohol_aryl, 21:alcool, 22:ketone_alpha_halide, 23:ketone_beta_halide, 24:epoxyde_alkyl, 25:epoxyde_aryl, 26:acyl_chloride_alkyl, 27:acyl_chloride_aryl  } 
    fctS = {1:thiol_alkyl, 2:thiol_aryl, 3:thioether_alkyl, 4:thioether_aryl}
    fctON = {1:imide_alkyl, 2:imide_aryl, 3:amide1, 4:amide2, 5:amide_alkyl, 6:amide_aryl, 7:isocyanate_alkyl, 8:isocyanate_aryl, 9:nitro_alkyl, 10:nitro_aryl, 11:sulfonamide_alkyl, 12:sulfonamide_aryl }
    fctOS = {1:thioester_alkyl, 2:thioester_aryl, 3:vinylsulfonyl_alkyl, 4:vinylsulfonyl_aryl, 5:sulfonate_ester_alkyl, 6:sulfonate_ester_aryl, 7:sulfonylhalide_alkyl, 8:sulfonylhalide_aryl,  9:sulfonamide_alkyl, 10:sulfonamide_aryl}
    fctSN = {1:thioamide_alkyl1, 2:thioamide_alkyl2, 3:thioisocyanate_alkyl, 4:thioisocyanate_aryl,  5:sulfonamide_alkyl, 6:sulfonamide_aryl}
    fctElse = {1:halide_alkyl, 2:halide_aryl, 3:halo_pyrimidine, 4:alkyne_alkyl, 5:alkyne_aryl, 6:alkene_alkyl, 7:alkene_aryl}
    dico ={}
    
    
    for p in range (len(smiles)) :
     
      #if B is present
      if (smiles[p] == 'B') & (p<len(smiles)):
          
          if smiles[p+1] != 'r':
                
              for i in range (1,len(fctB)+1):
                  t=m.GetSubstructMatches(fctB[i])
                  if (len(t) != 0):
                    dico[fctB[i].name]=t
                   
           
       
      #if N is present
      if (smiles[p] == 'N') & (p<len(smiles)):
                
              for i in range (1,len(fctN)+1):
                  t=m.GetSubstructMatches(fctN[i])
                  if (len(t) != 0):
                    dico[fctN[i].name]=t
                    
                    
                    
                                
                   
       
            
      #if O is present
      if (smiles[p] == 'O') & (p<len(smiles)):
                
              for i in range (1,len(fctO)+1):
                  t=m.GetSubstructMatches(fctO[i])
                  if (len(t) != 0):
                    dico[fctO[i].name]=t
                   
             
                
      #if S is present
      if (smiles[p] == 'S') & (p<len(smiles)):
                
              for i in range (1,len(fctS)+1):
                  t=m.GetSubstructMatches(fctS[i])
                  if (len(t) != 0):
                    dico[fctS[i].name]=t
        
        
        
      #if O & N are present
      if (smiles[p] == 'O') & (p<len(smiles)):
          
          for j in range (len(smiles)):
                if (smiles[j] == 'N'):
                
                    for k in range (1,len(fctON)+1):
                        t=m.GetSubstructMatches(fctON[k])
                        if (len(t) != 0):
                            dico[fctON[k].name]=t
     
        
     #if O & S are present
      if (smiles[p] == 'O') & (p<len(smiles)):
          
          for j in range (len(smiles)):
                if (smiles[j] == 'S'):
                
                    for k in range (1,len(fctOS)+1):
                        t=m.GetSubstructMatches(fctOS[k])
                        if (len(t) != 0):
                            dico[fctOS[k].name]=t    
     
        
     
      #if N & S are present
      if (smiles[p] == 'N') & (p<len(smiles)):
          
          for j in range (len(smiles)):
                if (smiles[j] == 'S'):
                
                    for k in range (1,len(fctSN)+1):
                        t=m.GetSubstructMatches(fctSN[k])
                        if (len(t) != 0):
                            dico[fctSN[k].name]=t
      
        
      
      #Halogens and no B/N/O/S atoms
      else:
         for i in range (1,len(fctElse)+1):
             t=m.GetSubstructMatches(fctElse[i])
             if (len(t) != 0):
                 dico[fctElse[i].name]=t
          
    

    for v in dico:
        print(v)
        print(dico[v])
import sys
if __name__== '__main__':
# simple argument echo script
   smiles=sys.argv[1]
   searchFct(smiles)
