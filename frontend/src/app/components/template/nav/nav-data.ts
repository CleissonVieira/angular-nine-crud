export interface FlatNode {
    expandable: boolean;
    name: string;
    route: string;
    imageIcon: string;
    level: number;
}

export interface FoodNode {
    name: string;
    route: string;
    imageIcon: string;
    children?: FoodNode[];
}
  
export const NavData: FoodNode[] = [
    {
      name: 'Página Inicial',
      route: '/',
      imageIcon: '/assets/icons-menu/PaginaInicial.svg',
    },
    {
      name: 'Módulos',
      route: '/modulos',
      imageIcon: '/assets/icons-menu/Modulos.svg',
    },
    {
        name: 'Gerenciador de Empresas',
        route: '/modulos/gerenciador-de-empresas',
        imageIcon: '/assets/icons-module/icon-gem.svg',
    },
    {
        name: 'Folha de Pagamento',
        route: '',
        imageIcon: '/assets/icons-module/icon-fpa.svg',
        children: [
            {
            name: 'Empresas',
            route: '',
            imageIcon: ''
            },
            {
            name: 'Admissões',
            route: '',
            imageIcon: ''
            },
            {
            name: 'Rescisões',
            route: '',
            imageIcon: ''
            },
            {
            name: 'Recibo Ferias',
            route: '',
            imageIcon: ''
            },
            {
            name: 'Períodos Aquisitivo',
            route: '',
            imageIcon: ''
            }
        ],
    }
  ];