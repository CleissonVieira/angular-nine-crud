interface ITableFields {
    labelName: string;
    tableFieldName: string;
    typeImput: 'select' | 'textBox' | '';
    numberOfCharacters: number;
}

export interface ITable {
    titleName: string;
    tableName: string;
    children?: ITableFields[];
}