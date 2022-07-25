// falta Pais origem, Estado, Município

export const Qualificacao = {
    'Diretor': 203,
    'Conselheiro de Administração': 204,
    'Administrador=205;Administrador de Grupo': 206,
    'Administrador de Sociedade Filiada': 207,
    'Administrador Judicial - Pessoa Física': 220,
    'Administrador Judicial - Pessoa Jurídica - Profissional Responsável': 222,
    'Administrador Judicial/Gestor': 223,
    'Gestor Judicial': 226,
    'Procurador': 309,
    'Inventariante': 312,
    'Liquidante': 313,
    'Interventor': 315,
    'Titular Pessoa Física': 401,
    'Empresário': 801,
    'Contador': 900,
    'Outros': 999,
}

export const TipoPessoa = {
    'Sócio': 1,
    'Administrador': 2,
    'Usufrutuário': 3,
    'Titular': 4,
    'Presidente': 5,
    'Síndico': 6,
}

export const PerfilTarefa = {
    'Gerente': 1,
    'Recursos Humanos': 2,
    'Financeiro': 3,
    'Colaborador': 4,
    'Administrador': 5
}

export const TipoLogradouro = {
    'Avenida': 4,
    'Condomínio': 8,
    'Estrada': 13,
    'Loteamento': 22,
    'Praça': 28,
    'Quadra': 29,
    'Rodovia': 32,
    'Rua': 33,
    'Travessa': 36
}

export const TipoInscricaoFederal = {
    'CPF': 1,
    'CNPJ': 2
}

export const OrgãoEmissor = {
    'SSP': 10,
    'TRE': 20,
    'EXT': 21,
    'DRT': 30,
    'M MILITAR': 40,
    'MIN AER': 41,
    'MIN EXER': 42,
    'MIN MAR': 43,
    'DPF': 44,
    'INSS': 56,
    'SRF': 57,
    'CLASSISTAS': 60,
    'CRA': 61,
    'CRAS': 62,
    'CRB': 63,
    'CRC': 64,
    'CRECI': 65,
    'COREN': 66,
    'CREA': 67,
    'CONRE': 68,
    'CRF': 69,
    'CREFITO': 70,
    'CRM': 71,
    'CRMV': 72,
    'OMB': 73,
    'CRN': 74,
    'CRO': 75,
    'CONRERP': 76,
    'CRP': 77,
    'CRQ': 78,
    'CORE': 79,
    'OAB': 80,
    'OE': 81,
    'DOC ESTR': 82,
    'CRE': 83,
    'REG CIVIL': 91,
    'SDS': 92,
    'DETRAN': 93,
}

export const Nacionalidade = {
    'Brasileiro': 10,
    'Brasileiro nascido no exterior': 15,
    'Naturalizado brasileiro': 20,
    'Argentino': 21,
    'Boliviano': 22,
    'Chileno': 23,
    'Paraguaio': 24,
    'Uruguaio': 25,
    'Venezuelano': 26,
    'Colombiano': 27,
    'Peruano': 28,
    'Equatoriano': 29,
    'Alemão': 30,
    'Belga': 31,
    'Britânico': 32,
    'Canadense': 34,
    'Espanhol': 35,
    'Norte-americano(EUA)': 36,
    'Francês': 37,
    'Suíço': 38,
    'Italiano': 39,
    'Haitiano': 40,
    'Japonês': 41,
    'Chinês': 42,
    'Coreano': 43,
    'Russo': 44,
    'Português': 45,
    'Paquistanês': 46,
    'Indiano': 47,
    'Outros latino-americanos': 48,
    'Outros asiáticos': 49,
    'Outros': 50,
    'Outros Europeus': 51,
    'Angolano': 60,
    'Congolês': 61,
    'Sul-Africano': 62,
    'Outros Africanos': 70,
}

export const EstadoCivil = {
    'Solteiro': 1,
    'Casado': 2,
    'Divorciado/Separado Judicialmente': 3,
    'Viúvo': 4,
    'Concubinado': 5,
    'Outros': 6,
    'Casado - Comunhão Total de Bens': 7,
    'Casado - Sem Comunhão de Bens': 8,
    'Casado - Comunhão Parcial de Bens': 9,
}

export const GrauInstrucao = {
    'Analfabeto': 1,
    'Até a 4º série incompleta do ensino fundamental': 2,
    'Com a 4º série completa do ensino fundamental': 3,
    'De 5 a 8º série incompleta do ensino fundamental': 4,
    'Ensino fundamental completo': 5,
    'Ensino médio incompleto': 6,
    'Ensino médio completo': 7,
    'Superior Incompleto': 8,
    'Superior Completo': 9,
    'Especialização': 10,
    'Mestrado': 11,
    'Doutorado': 12,
    'Pós Doutorado': 13,
}

export const Sexo = {
    'Masculino': 1,
    'Feminino': 2,
}

export const RacaCor = {
    'Indígena': 1,
    'Branca': 2,
    'Negra': 4,
    'Amarela': 6,
    'Parda': 8,
    'Não Informado': 9,
}

export const SimNão = {
    'Não': 0,
    'Sim': 1,
}

export const CategoriaContrato = {
    'Empregado': 1,
    'Empregado Afastado para Prestar Serviço Militar Obrigatório': 3,
    'Empregado sob Contrato de Trabalho por Prazo Determinado (Lei n.9601/98)': 4,
    'Diretor não Empregado com FGTS (Lei n.8036/90, art.16)': 5,
    'Empregado Doméstico': 6,
    'Menor Aprendiz (Lei 10.097/2000)': 7,
    'Contribuinte Individual - Diretor não Empregado e demais Empresários sem FGTS': 11,
    'Demais Agentes Públicos': 12,
    'Contribuinte Individual - Trabalhador Autônomo ou a este equiparado, inclusive o operador de máquina, com Contribuição sobre a Remuneração': 13,
    'Contribuinte Individual - Cooperado que presta serviços a empresas contratantes da Cooperativa de Trabalho': 17,
    'Contribuinte Individual - Transportador Cooperado que presta serviços a empresas contratantes da Cooperativa de Trabalho': 18,
    'Agente Político': 19,
    'Servidor Público Ocupante, exclusivamente, de cargo em comissão': 20,
    'Servidor Público titular de cargo efetivo, magistrado, membro do Ministério Público': 21,
    'Contribuinte Individual cooperado que presta serviços à entidade beneficente isenta da cota patronal, por intermédio da coop. de trabalho': 24,
    'Contribuinte Individual transportador cooperado que presta serviços à entidade beneficente isenta cota patronal, por intermédio da coop trabalho': 25,
    'Dirigente sind., em relação adic. pago pelo sind. magistr. classista temp. Just. Trab. magistr. Trib. Eleit., 3 sit., mantida qualid. segur. empreg. (s/FGTS)': 26,
}

export const CategoriaESocial = {
    'Empregado Geral': 101,
    'Empregado Trabalhador Rural por Pequeno Prazo da Lei 11.718/2008': 102,
    'Empregado Aprendiz': 103,
    'Empregado Doméstico': 104,
    'Empregado contrato a termo firmado nos termos da Lei 9601/98': 105,
    'Empregado contrato por prazo determinado nos termos da Lei 6019/74': 106,
    'Trabalhador Avulso Portuário': 201,
    'Trabalhador Avulso Não Portuário': 202,
    'Servidor Público Titular de Cargo Efetivo': 301,
    'Servidor Público Ocupante de Cargo exclusivo em comissão': 302,
    'Agente Político': 303,
    'Servidor Público indicado para conselho ou órgão representativo': 305,
    'Servidor Público Contrato Temporário': 306,
    'Militar efetivo': 307,
    'Conscrito': 308,
    'Agente Público - Outros': 309,
    'Dirigente Sindical Informação prestada pelo Sindicato': 401,
    'Trabalhador Cedido Informação prestada pelo Cessionário': 410,
    'Contr. Ind. Autônomo em geral, exceto demais categorias de contribuinte individual': 701,
    'Contr. Ind. Transportador autônomo de passageiros': 711,
    'Contr. Ind. Transportador autônomo de carga': 711,
    'Contr. Ind. Diretor não empregado, com FGTS': 721,
    'Contr. Ind. Diretor não empregado, sem FGTS': 722,
    'Contr. Ind. empresários, sócios e membro de conselho de administração ou fiscal': 723,
    'Contr. Ind. Cooperado que presta serviços Cooperativa de Trabalho': 731,
    'Contr. Ind. Transportador Cooperado que presta serviços cooperativa de trabalho': 734,
    'Contr. Ind. Cooperado filiado a Cooperativa de Produção': 738,
    'Contr. Ind. MEI, quando contratado por PJ': 741,
    'Contr. Ind. - Aposentado magistrado classista temporário da Justiça do Trabalho ou da Justiça Eleitoral': 751,
    'Contr. Ind. Associado eleito para direção de Cooperativa,síndico ou administrador, remunerado': 761,
    'Contr. Ind. Membro de conselho tutelar, nos termos da Lei n� 8.069, de 13 de julho de 1990': 771,
    'Ministro de confissão religiosa ou membro de vida consagrada, de congregação ou de ordem religiosa': 781,
    'Estagiário': 901,
    'Médico Residente': 902,
    'Bolsista, nos termos da lei 8958/1994': 903,
}

export const DDD = {
    '11 - São Paulo – SP': 11,
    '12 - São José dos Campos – SP': 12,
    '13 - Santos – SP': 13,
    '14 - Bauru – SP': 14,
    '15 - Sorocaba – SP': 15,
    '16 - Ribeirão Preto – SP': 16,
    '17 - São José do Rio Preto – SP': 17,
    '18 - Presidente Prudente – SP': 18,
    '19 - Campinas – SP': 19,
    '21 - Rio de Janeiro – RJ': 21,
    '22 - Campos dos Goytacazes – RJ': 22,
    '24 - Volta Redonda – RJ': 24,
    '27 - Vila Velha/Vitória – ES': 27,
    '28 - Cachoeiro de Itapemirim – ES': 28,
    '31 - Belo Horizonte – MG': 31,
    '32 - Juiz de Fora – MG': 32,
    '33 - Governador Valadares – MG': 33,
    '34 - Uberlândia – MG': 34,
    '35 - Poços de Caldas – MG': 35,
    '37 - Divinópolis – MG': 37,
    '38 - Montes Claros – MG': 38,
    '41 - Curitiba – PR': 41,
    '42 - Ponta Grossa – PR': 42,
    '43 - Londrina – PR': 43,
    '44 - Maringá – PR': 44,
    '45 - Foz do Iguaçú – PR': 45,
    '46 - Francisco Beltrão/Pato Branco – PR': 46,
    '47 - Joinville – SC': 47,
    '48 - Florianópolis – SC': 48,
    '49 - Chapecó – SC': 49,
    '51 - Porto Alegre – RS': 51,
    '53 - Pelotas – RS': 53,
    '54 - Caxias do Sul – RS': 54,
    '55 - Santa Maria – RS': 55,
    '61 - Brasília – DF': 61,
    '62 - Goiânia – GO': 62,
    '63 - Palmas – TO': 63,
    '64 - Rio Verde – GO': 64,
    '65 - Cuiabá – MT': 65,
    '66 - Rondonópolis – MT': 66,
    '67 - Campo Grande – MS': 67,
    '68 - Rio Branco – AC': 68,
    '69 - Porto Velho – RO': 69,
    '71 - Salvador – BA': 71,
    '73 - Ilhéus – BA': 73,
    '74 - Juazeiro – BA': 74,
    '75 - Feira de Santana – BA': 75,
    '77 - Barreiras – BA': 77,
    '79 - Aracaju – SE': 79,
    '81 - Recife – PE': 81,
    '82 - Maceió – AL': 82,
    '83 - João Pessoa – PB': 83,
    '84 - Natal – RN': 84,
    '85 - Fortaleza – CE': 85,
    '86 - Teresina – PI': 86,
    '87 - Petrolina – PE': 87,
    '88 - Juazeiro do Norte – CE': 88,
    '89 - Picos – PI': 89,
    '91 - Belém – PA': 91,
    '92 - Manaus – AM': 92,
    '93 - Santarém – PA': 93,
    '94 - Marabá – PA': 94,
    '95 - Boa Vista – RR': 95,
    '96 - Macapá – AP': 96,
    '97 - Coari – AM': 97,
    '98 - São Luís – MA': 98,
    '99 - Imperatriz – MA': 99
}