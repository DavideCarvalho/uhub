import { NavbarOrganism } from '@organism/navbar.organism';

export default function CompanyDashboard(): JSX.Element {
  return (
    <div>
      <NavbarOrganism />
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          <div className={`card w-96 bg-base-100 shadow-xl`}>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Usuários</h2>
              <button className="btn btn-active btn-primary">Adicionar</button>
              <button className="btn btn-active btn-primary">Listar</button>
            </div>
          </div>
          <div className={`card w-96 bg-base-100 shadow-xl`}>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Clientes</h2>
              <button className="btn btn-active btn-primary">Gráficos</button>
              <button className="btn btn-active btn-primary">
                Possíveis clientes
              </button>
            </div>
          </div>
          <div className={`card w-96 bg-base-100 shadow-xl`}>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Produtos e Serviços</h2>
              <button className="btn btn-active btn-primary">
                Listar Produtos
              </button>
              <button className="btn btn-active btn-primary">
                Adicionar Produto
              </button>
              <button className="btn btn-active btn-primary">
                Listar Serviços
              </button>
              <button className="btn btn-active btn-primary">
                Adicionar Serviço
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
