interface ITableFields {
    labelName: string;
    placeholder: string;
    tableFieldName: string;
    typeImput: 
        'select' | 'text' | 'email' | 'phone' | 'time' | 'date' | 'radio' |
        'password' | 'url' | 'number' | 'range' | 'datetime' | 'checkbox';
    typeDataImput: 'string' | 'boolean' | 'integer' | 'float';
    optionsImput?: {};
    numberOfCharacters: number;
}

export interface ITable {
    titleName: string;
    tableName: string;
    children?: ITableFields[];
}