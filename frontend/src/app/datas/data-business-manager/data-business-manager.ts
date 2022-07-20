export interface FlatNode {
    expandable: boolean;
    name: string;
    level: number;
}

export interface FoodNode {
    name: string;
    
    children?: FoodNode[];
}
  
export const NavData: FoodNode[] = [
    {
        name: 'Página Inicial',
    },
    {
        name: 'Módulos',
    },
    {
        name: 'Gerenciador de Empresas',
    },
    {
        name: 'Folha de Pagamento',
    }
  ];