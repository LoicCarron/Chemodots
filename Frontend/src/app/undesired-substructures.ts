export interface UndesiredSubstructures {
  Name:string;
  Smart:string;
}

export const Undesired_substructures_DATA_BASE:UndesiredSubstructures[]=[
  {Name:"2,2-dimethyl-4,5-dicarboxy-dithiole",Smart:"C1(C)(C)SC(C(=O)O)=C(C(=O)O)S1"},
  {Name:"2,3,4_trihydroxyphenyl",Smart:"c([OH])c([OH])c([OH])"},
  {Name:"2,3,5_trihydroxyphenyl",Smart:"c([OH])c([OH])cc([OH])"},
  {Name:"acid_anhydrides",Smart:"C(=O)OC(=O)"},
  {Name:"acid_anhydrides_2",Smart:"[#6]C(=O)!@OC(=!@[N,O])[#6]"},
  {Name:"acid_halides",Smart:"[S,C](=[O,S])[F,Br,Cl,I]"},
  {Name:"Acridine",Smart:"c1c2cc4ccccc4nc2ccc1"},
  {Name:"Active_Phosphate",Smart:"P(=S)([OH1,O$(O[#6])])([OH1,O$(O[#6])])[S,O]"},
  {Name:"acyl_cyanide",Smart:"C(=O)-C#N"},
  {Name:"Adjacent_Ring_Double_Bonds",Smart:"[*;R]=[*;R]=[*;R]"},
  {Name:"Aldehyde",Smart:"[#6][C!H0]=O"},
  {Name:"Aliphatic_Triflate",Smart:"COS(=O)(=O)C(F)(F)F"},
  {Name:"AlkylEnamine",Smart:"[C;H1$(C([#6;!$(C=O)])),H0$(C([#6;!$(C=O)])[#6;!$(C=O)])]=[CH1]!@N([#6;!$(C(=O))])[#6;!$(C(=O))]"},
  {Name:"Allene",Smart:"*=C=*"},
  {Name:"Alpha_Halo_Carbonyl",Smart:"[C;!$(C[N])](=O)!@[C;h1,h2;H1,H2][F,Cl,Br,I]"},
  {Name:"amidotetrazole",Smart:"c1nnnn1C=O"},
  {Name:"Amino_Naphtalimide",Smart:"c1(N)ccc(C(=O)NC3(=O))c(c3ccc2)c21"},
  {Name:"Aminonitrile",Smart:"NC#N"},
  {Name:"aminothiazole",Smart:"s1ccnc1[N!H0]"},
  {Name:"Anhydride",Smart:"[#6]C(=O)OC(=O)[#6]"},
  {Name:"Any_Carbazide",Smart:"O=*N=[N+]=[N-]"},
  {Name:"aromatic_azides",Smart:"cN=N=N"},
  {Name:"Aromatic_N-Oxide_more_than_one",Smart:"[n+][O-X1].[n+][O-X1]"},
  {Name:"Azanitrone",Smart:"N=[N+]([O-])C"},
  {Name:"azoalkanals",Smart:"[N;R0]=[N;R0]CC=O"},
  {Name:"Azobenzene",Smart:"c1ccccc1[N!r]=[N!r]c2ccccc2"},
  {Name:"Azocyanamide",Smart:"[N;R0]=[N;R0]C#N"},
  {Name:"b-Carbonyl_Quaternary_Nitrogen",Smart:"C(=O)CC[N+,n+]"},
  {Name:"benzylic_quaternary_nitrogen",Smart:"cC[N+,NX4]"},
  {Name:"beta-carbonyl_quaternary_nitrogen",Smart:"C(=O)C[N+,n+,NX4,nX4]"},
  {Name:"Beta-Fluoro-ethyl-ON",Smart:"[C;H2$(CF),H1$(C(F)F)]!@[CH2][N,O]"},
  {Name:"biotin_analogue",Smart:"C12C(NC(N1)=O)CSC2"},
  {Name:"carbazides",Smart:"C(=O)N=N=N"},
  {Name:"carbodiimides",Smart:"N=C=N"},
  {Name:"CCl3-CHO_releasing",Smart:"C(Cl)(Cl)(Cl)C([O,S])[NX3]"},
  {Name:"Chlor_or_Fluor_gte_5",Smart:"[Br,Cl,F].[Br,Cl,F].[Br,Cl,F].[Br,Cl,F].[Br,Cl,F].[Br,Cl,F]"},
  {Name:"Chloramidine",Smart:"[Cl]C([C&R0])=N"},
  {Name:"Conjugated_Dithioether",Smart:"SC(=[!r])S"},
  {Name:"Coumarin",Smart:"c1cc2C=CC(=O)Oc2cc1"},
  {Name:"Crown_Ether_12CRO4",Smart:"O1CCOCCOCCOCC1"},
  {Name:"Crown_Ether_15CRO5",Smart:"O1CCOCCOCCOCCOCC1"},
  {Name:"Crown_Ether_16CRO6",Smart:"O1CCOCCOCCOCCOCCOCC1"},
  {Name:"crown_ethers",Smart:"[O;R1][C;R1][C;R1][O;R1][C;R1][C;R1][O;R1]"},
  {Name:"cyanamide",Smart:"N[CH2]C#N"},
  {Name:"Cyano_gte_2",Smart:"[C]-[CH0]#[NH0].[C]-[CH0]#[NH0].[C]-[CH0]#[NH0]"},
  {Name:"Cyanohydrin",Smart:"N#CC[OH1]"},
  {Name:"Cyanophosphonate",Smart:"P(OCC)(OCC)(=O)C#N"},
  {Name:"cyclobutene",Smart:"C1CC=C1"},
  {Name:"di_and_triphosphates",Smart:"P(=O)([OH])OP(=O)[OH]"},
  {Name:"Diacetylene",Smart:"C#CC#C"},
  {Name:"Diazoalkane",Smart:"C=[N+]=[N-]"},
  {Name:"Diazonium_Salt",Smart:"[N+]#N"},
  {Name:"Diene",Smart:"C!@=[CH1]-C!@=[CH1]-[CX3](=O)"},
  {Name:"Dinitrobenzene_1",Smart:"c1c([N+](=O)[O-])c([N+](=O)[O-])ccc1"},
  {Name:"Dinitrobenzene_2",Smart:"c1c([N+](=O)[O-])ccc([N+](=O)[O-])c1"},
  {Name:"Dinitrobenzene_3 ",Smart:"c1c([N+](=O)[O-])cc([N+](=O)[O-])cc1"},
  {Name:"disulfides",Smart:"[SX2][SX2]"},
  {Name:"Dithiocarbamate",Smart:"NC(=S)S"},
  {Name:"Dithiole-2-thione",Smart:"S1SC=CC1=S"},
  {Name:"Dithiole-3-thione",Smart:"S1C=CSC1=C"},
  {Name:"Dithiomethylene_acetal",Smart:"S[C;!$(C=*)]S"},
  {Name:"Enyne",Smart:"C=!@CC#C"},
  {Name:"epoxides,_thioepoxides,_aziridines",Smart:"C1[O,S,N]C1"},
  {Name:"ester_of_HOBT",Smart:"C(=O)Onnn"},
  {Name:"Flavin",Smart:"c1cccc(NC(=NC(=[N,S,O])NC(=O)3)C3=N2)c12"},
  {Name:"Fluorescein",Smart:"c1cc(O)cc(OC(=CC(=O)C=C3)C3=C2)c12"},
  {Name:"Fluorinated_Carbon_1",Smart:"C(C(CF)F)F"},
  {Name:"Fluorinated_Carbon_2",Smart:"C(C(F)F)(F)F"},
  {Name:"formate_formide",Smart:"O=[CH][O,N][#6]"},
  {Name:"four_member_lactones",Smart:"C1(=O)OCC1"},
  {Name:"geminal_amines",Smart:"[NH1;!r][CX4][NH1;!r]"},
  {Name:"geminal_dinitriles",Smart:"N#CCC#N"},
  {Name:"gte_2_N_quats",Smart:"[N,n;H0;+;!$(N~O);!$(n~O)].[N,n;H0;+;!$(N~O);!$(n~O)].[N,n;H0;+;!$(N~O);!$(n~O)]"},
  {Name:"gte_2_sulfonic_acid",Smart:"[C,c]S(=O)(=O)[O;D1].[C,c]S(=O)(=O)[O;D1].[C,c]S(=O)(=O)[O;D1]"},
  {Name:"halo-pyridine,_-diazoles_and_-triazoles",Smart:"[Cl,Br,I]c1[c,n][c,n][c,n][c,n]n1"},
  {Name:"hydrazone",Smart:"[#6]C(=!@NNa)[#6]"},
  {Name:"hydrazothiourea",Smart:"N=NC(S)N"},
  {Name:"Imidazolium",Smart:"c1[n+]([#6])ccn1([#6])"},
  {Name:"Imine2",Smart:"[#6,#8,#16]-[CH1]=[NH1]"},
  {Name:"imines_(not_ring)",Smart:"[#6][C;R0](=[N;R0,O0])[#6]"},
  {Name:"isocyanates_&_isothiocyanates",Smart:"N=C=[S,O]"},
  {Name:"isonitrile",Smart:"[N+]#[C-]"},
  {Name:"Isotopes",Smart:"[2H,3H,11C,11c,14C,14c,125I,32P,33P,35S]"},
  {Name:"ketene",Smart:"C=C=O"},
  {Name:"Lawesson_Reagent_Derivatives",Smart:"P(=S)(S)S"},
  {Name:"Metal_Carbon_bond",Smart:"[#6;$([#6]~[#3,#11,#12,#13,#19,#20,#26,#27,#28,#29,#30])]"},
  {Name:"methylidene-1,3-dithiole",Smart:"S1C=CSC1=S"},
  {Name:"Michael_Phenyl_Ketone",Smart:"c1ccccc1C(=O)C=!@CC(=O)!@*"},
  {Name:"N-halo",Smart:"[NX3,NX4][F,Cl,Br,I]"},
  {Name:"Nitro",Smart:"[#6]N(~O)~O"},
  {Name:"Nitro_more_than_one",Smart:"[N+](=O)[O-].[N+](=O)[O-]"},
  {Name:"Nitrobenz-azadiazole_1",Smart:"c1ccc(n[o,s]n2)c2c1[N+](=O)[O-]"},
  {Name:"Nitrobenz-azadiazole_2",Smart:"c1c([N+](=O)[O-])cc(n[o,s]n2)c2c1"},
  {Name:"nitrosamine",Smart:"N-[N;X2](=O)"},
  {Name:"nitroso",Smart:"[N&D2](=O)"},
  {Name:"Nitrosone_not_nitro",Smart:"[$(N(~!@[#6])!@O);!$([N+]([O-])=O)]"},
  {Name:"noname",Smart:"N1=C[S,NH1]C(=[C,N,P][C,N,O,P])C1(=O)"},
  {Name:"N-Oxide_aliphatic",Smart:"[N+!$(N=O)][O-X1]"},
  {Name:"N-S_(not_sulfonamides)",Smart:"[#6][S;O0][N;H0]"},
  {Name:"Orthoester",Smart:"C(O)(O)[OH]"},
  {Name:"o-tertbutylphenol",Smart:"c1c([OH1])c(C(C)(C)C)ccc1"},
  {Name:"Oxime",Smart:"[#6]C(=!@N[$(OC),$([OH])])[#6]"},
  {Name:"Oxobenzothiepine",Smart:"C1(=O)C=CCSC=C1"},
  {Name:"oxepine",Smart:"O1C=CC=CC=C1"},
  {Name:"oxy-amide",Smart:"[#6]C(=O)!@C!@C(=O)N"},
  {Name:"P_or_S_Halides",Smart:"[P,S][Cl,Br,F,I]"},
  {Name:"p-Aminoaryl_diazo",Smart:"Nc1aaa(N!@=N)aa1"},
  {Name:"paranitrophenyl_esters",Smart:"C(=O)Oc1ccc(N(=O)=O)cc1"},
  {Name:"pentahalophenyl",Smart:"c1c([F,Cl])c([F,Cl])c([F,Cl])c([F,Cl])c1([F,Cl])"},
  {Name:"pentafluorophenyl_esters",Smart:"C(=O)Oc1c(F)c(F)c(F)c(F)c1(F)"},
  {Name:"peroxide",Smart:"[#8]~[#8]"},
  {Name:"Phenanthrene",Smart:"c12cccc3c1c4c(cc3)cccc4cc2"},
  {Name:"phosphonate_esters",Smart:"[#6]P(=O)(~O)O[#6]"},
  {Name:"phosphoramides",Smart:"NP(=O)(N)N"},
  {Name:"phosphorane",Smart:"C=P"},
  {Name:"Phosphorus_More_Than_1",Smart:"P.P"},
  {Name:"Phosphorus_Halide",Smart:"[S,P][F,Cl,Br,I]"},
  {Name:"poly_sub_atomatic",Smart:"*!@c1c(!@*)c(!@*)c(!@*)c(!@*)c1"},
  {Name:"Polyene",Smart:"C=!@CC=!@C"},
  {Name:"polyenes",Smart:"C=CC=CC=CC=C"},
  {Name:"polyene_chain_between_aromatics",Smart:"cC=CC=CC=Cc"},
  {Name:"polyines",Smart:"CC#CC#CC"},
  {Name:"Polynuclear_Aromatic_1",Smart:"c1cccc(cc(cccc2)c2c3)c13"},
  {Name:"Polynuclear_Aromatic_2",Smart:"c1cccc(c(cccc2)c2cc3)c13"},
  {Name:"Polysulfide",Smart:"*[SX2][SX2][SX2]*"},
  {Name:"pyranone",Smart:"O=C1C=COC=C1"},
  {Name:"Sulphur_Halide",Smart:"[#16][F,Cl,Br,I]"},
  {Name:"pyrene_fragments",Smart:"c1c2cccc3c2c4c(cc3)cccc4c1"},
  {Name:"Pyrylium",Smart:"c1ccc[o+]c1"},
  {Name:"reactive_carbonyls",Smart:"[C;!r](=[O,S])[S;!r]"},
  {Name:"reactive_carbonyls",Smart:"[C;!r](=[O,S])[CX2;!r][F,Br,Cl]"},
  {Name:"Ring_Triple_Bond",Smart:"[C,c;R]#[C,c;R]"},
  {Name:"S=N_(not_ring)",Smart:"[S;R0]=[N;R0]"},
  {Name:"Sulfonate_Ester",Smart:"O=[SX4](=O)OC"},
  {Name:"sulfonyl_cyanide",Smart:"S(=O)(=O)C#N"},
  {Name:"sulphates",Smart:"[#6]S(=O)(=O)O"},
  {Name:"Sulphate_Ester",Smart:"COS(=O)O[C,c]"},
  {Name:"sulphonates",Smart:"COS(=O)(=O)[C,c]"},
  {Name:"Sulphur_Nitrogen_single_bond",Smart:"[SX2H0]!@[N]"},
  {Name:"Tetraazinane",Smart:"C1NNC=NN1"},
  {Name:"thiatetrazolidine",Smart:"[$(Sc1nnn[nH,n-]1),$(Sc1nn[nH,n-]n1)]"},
  {Name:"Thiazolidinone",Smart:"O=C1CSCN1"},
  {Name:"Thiocarbonyl_group",Smart:"C=S"},
  {Name:"Thiocyanate",Smart:"SC#N"},
  {Name:"thioesters",Smart:"C[O,S;R0][C;R0](=S)"},
  {Name:"thioles_(not_aromatic)",Smart:"[!a][SX2;H1]"},
  {Name:"Thiomorpholinedione",Smart:"N1C(=O)CSCC1=O"},
  {Name:"Thiophosphothionate",Smart:"P(=S)(-[S;H1,H0$(S(P)C)])(-[O;H1,H0$(O(P)C)])(-N(C)C)"},
  {Name:"thiourea",Smart:"[N;!r][C;!r](=S)[N;!r]"},
  {Name:"Three_Membered_Heterocycle",Smart:"*1[O,S]*1"},
  {Name:"Tri_Pentavalent_S",Smart:"[#16v3,#16v5]"},
  {Name:"Triacyloxime",Smart:"C(=O)N(C(=O))OC(=O)"},
  {Name:"Triazole",Smart:"c1cnnn1!@C!@[NH1][#6]"},
  {Name:"triflate",Smart:"OS(=O)(=O)(C(F)(F)(F))"},
  {Name:"trifluroacetate_amide",Smart:"FC(F)(F)C(=O)N"},
  {Name:"Triphenyl_Boranyl",Smart:"B(c1ccccc1)(c2ccccc2)c3ccccc3"},
  {Name:"triphenylphosphines",Smart:"P(c1aaaaa1)(c1aaaaa1)(c1aaaaa1)"},
  {Name:"Triphenyl_Silyl",Smart:"[Si](c1ccccc1)(c2ccccc2)(c3ccccc3)"},
  {Name:"triple_bond",Smart:"[#6]C#[CH]"},
  {Name:"tropone",Smart:"C1C(=O)C=CC=CC=1"},
  {Name:"Vinyl_Halide",Smart:"[Cl,Br,I]C=[!O!R]"},
  {Name:"Vinyl_Sulphone",Smart:"[#6][CH1]!@=[CH1][S;H1,H0$(S(C)C)](=O)(=O)"},
]
