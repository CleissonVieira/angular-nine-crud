interface ITableFields {
    required: boolean;
    labelName?: string;
    placeholder?: string;
    tableFieldName: string;
    typeImput: 
        'select' | 'text' | 'email' | 'phone' | 'time' | 'date' | 'radio' |
        'password' | 'url' | 'number' | 'range' | 'datetime' | 'checkbox';
    typeDataImput: 'string' | 'boolean' | 'integer' | 'float';
    optionsImput?: {};
    mask?: string[];
    numberOfCharacters: number;
    fixedValue: string | number | null; 
}

export interface ITable {
    titleName: string;
    tableName: string;
    children?: ITableFields[];
}