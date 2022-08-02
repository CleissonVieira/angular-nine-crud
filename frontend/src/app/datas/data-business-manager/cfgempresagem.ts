import { ITable } from '../DataInterface'

const DataCfgEmpresaGem: ITable[] = [
        {
                titleName: 'CfgEmpresaGem',
                tableName: 'cfgempresagem',
                children: [
                        {
                                requiredField: true,
                                labelName: 'Código da Empresa',
                                placeholder: 'informe o código da empresa',
                                tableFieldName: 'CodigoEmpresa',
                                typeImput: 'number',
                                typeDataImputReturn: 'integer',
                                numberOfCharacters: 5,
                                fixedValue: null
                        },
                        {
                                requiredField: true,
                                labelName: 'Responsável Pelas Informações a Nível Federal',
                                placeholder: 'informe o contador responsável pelas informações a nível federal',
                                tableFieldName: 'ContaResponsavelCnpj',
                                typeImput: 'number',
                                typeDataImputReturn: 'integer',
                                numberOfCharacters: 5,
                                fixedValue: null
                        },
                        {
                                requiredField: true,
                                labelName: 'Responsável pelo Preenchimento das Declarações para a Receita Federal',
                                placeholder: 'informe o contador responsável pelo preenchimento das declarações para a receita federal',
                                tableFieldName: 'ContaResponsavelPreenchimentoFederal',
                                typeImput: 'number',
                                typeDataImputReturn: 'integer',
                                numberOfCharacters: 5,
                                fixedValue: null
                        },
                        {
                                requiredField: true,
                                tableFieldName: 'SocioResponsavelCnpj',
                                typeDataImputReturn: 'integer',
                                numberOfCharacters: 5,
                                fixedValue: 1
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'TipoEnquadramento',
                                typeDataImputReturn: 'integer',
                                numberOfCharacters: 2,
                                fixedValue: 1
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'DescricaoLivro',
                                typeDataImputReturn: 'string',
                                numberOfCharacters: 10,
                                fixedValue: 'Livro'
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'TipoAssinatura',
                                typeDataImputReturn: 'integer',
                                numberOfCharacters: 2,
                                fixedValue: 1
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'InicioFolhaLivro',
                                typeDataImputReturn: 'integer',
                                numberOfCharacters: 5,
                                fixedValue: 2
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'LimiteFolhaLivro',
                                typeDataImputReturn: 'integer',
                                numberOfCharacters: 5,
                                fixedValue: 500
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'DescricaoFolhaLivro',
                                typeDataImputReturn: 'string',
                                numberOfCharacters: 10,
                                fixedValue: 'Folha'
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'TipoCabecalho',
                                typeDataImputReturn: 'integer',
                                numberOfCharacters: 2,
                                fixedValue: 1
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'UsaGrupoPessoaPadrao',
                                typeDataImputReturn: 'boolean',
                                numberOfCharacters: 1,
                                fixedValue: 1
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'UsaPessoaContaContabil',
                                typeDataImputReturn: 'boolean',
                                numberOfCharacters: 1,
                                fixedValue: 1
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'MascataGrupoProduto',
                                typeDataImputReturn: 'string',
                                numberOfCharacters: 30,
                                fixedValue: '9.99.99'
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'UsaReferenciaProduto',
                                typeDataImputReturn: 'boolean',
                                numberOfCharacters: 1,
                                fixedValue: 1
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'LivroModelo7',
                                typeDataImputReturn: 'boolean',
                                numberOfCharacters: 1,
                                fixedValue: 1
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'MascaraClassificacaoFiscalProduto',
                                typeDataImputReturn: 'string',
                                numberOfCharacters: 12,
                                fixedValue: '9999.99.99'
                        },
                        {
                                requiredField: false,
                                tableFieldName: 'UsaLinhaAssinatura',
                                typeDataImputReturn: 'boolean',
                                numberOfCharacters: 1,
                                fixedValue: 0
                        },
                ]
        }
]