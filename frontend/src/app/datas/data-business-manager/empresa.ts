import { ITable } from '../DataInterface'

export const DataEmpresa: ITable = {
        titleName: 'Empresa',
        tableName: 'empresa',
        children: [
                {
                        requiredField: true,
                        labelName: 'Codigo da Empresa',
                        placeholder: 'informe o código da empresa',
                        tableFieldName: 'CodigoEmpresa',
                        typeImput: 'number',
                        typeDataImputReturn: 'integer',
                        numberOfCharacters: 5,
                        fixedValue: null,
                },
                {
                        requiredField: true,
                        labelName: 'Nome da Empresa',
                        placeholder: 'informe o nome da empresa',
                        tableFieldName: 'NomeEmpresa',
                        typeImput: 'text',
                        typeDataImputReturn: 'string',
                        numberOfCharacters: 100,
                        fixedValue: null,
                }
        ]
}


