interface FlatNode {
    expandable: boolean;
    name: string;
    route: string;
    level: number;
}

interface FoodNode {
    name: string;
    route: string;
    children?: FoodNode[];
}
  
export const NavData: FoodNode[] = [
    {
      name: 'Configuração das empresas',
      route: '/modulos/folha-de-pagamento/configuracao-das-empresas',
    },
    {
      name: 'Cadastro de Admissões',
      route: '/modulos/folha-de-pagamento/cadastro-de-admissoes',
    },
    {
        name: 'Cadastro de Rescisões',
        route: '/modulos/folha-de-pagamento/cadastro-de-rescisoes',
    },
    {
        name: 'Cadastro de Recibo das Ferias',
        route: '/modulos/folha-de-pagamento/cadastro-de-recibos-das-ferias',
    },
    {
        name: 'Cadastro de Periodos Aquisitivos',
        route: '/modulos/folha-de-pagamento/cadastro-de-periodos-aquisitivos',
    }
  ];