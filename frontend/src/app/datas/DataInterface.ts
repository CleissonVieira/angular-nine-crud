export interface ITableFields {
    requiredField: boolean;
    labelName?: string;
    placeholder?: string;
    tableFieldName: string;
    typeImput?: 
        'select' | 'text' | 'email' | 'phone' | 'time' | 'date' | 'radio' |
        'password' | 'url' | 'number' | 'moeda' | 'range' | 'datetime' | 'checkbox';
    typeDataImputReturn: 'string' | 'boolean' | 'integer' | 'float';
    optionsImput?: {};
    mask?: string[];
    numberOfCharacters: number;
    fixedValue: string | number | null; 
    children?: ITableFields[];
    value?: null;
}

export interface ITable {
    titleName: string;
    tableName: string;
    children?: ITableFields[];
}

// para inserir máscaras
// return (valor.ToString().Length) switch
// { // CpfCnpjCnoCnaeCodentidadeComMascara
//     15 => Convert.ToUInt64(valor.ToString().Substring(0, 15)).ToString(@"000\.000\.000\.00000\.0"),
//     14 => Convert.ToUInt64(valor.ToString().Substring(0, 14)).ToString(@"00\.000\.000\/0000\-00"),
//     12 => Convert.ToUInt64(valor.ToString().Substring(0, 12)).ToString(@"00\.000\.000\.000/-0"),
//     11 => Convert.ToUInt64(valor.ToString().Substring(0, 11)).ToString(@"000\.000\.000\-00"),
//     8 => Convert.ToUInt64(valor.ToString().Substring(0, 8)).ToString(@"00\.000\-000"),
//     7 => Convert.ToUInt64(valor.ToString().Substring(0, 7)).ToString(@"0000\-0\/00"),
//     _ => "0",
// };