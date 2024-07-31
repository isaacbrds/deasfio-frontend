import rocketImg from '../assets/imagens/undraw_rocket.svg';
import { Link } from 'react-router-dom';

function Sidebar({menuAtivo = "home"}) {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Desafio</div>
        </a>

        <hr className="sidebar-divider my-0"/>

        <li className={ menuAtivo === "home"? "nav-item active" : "nav-item" }>
            <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Home</span>
            </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">
            Outros links
        </div>

        <li className="nav-item">
            <a className="nav-link collapsed" href={()=> {}} 
                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                aria-expanded="false" aria-controls="collapseTwo"
                data-toggle="collapse"
            >
                <i className="fas fa-fw fa-folder"></i>
                <span>Paginas</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Outros:</h6>

                    <li className={ menuAtivo === "cadastro"? "nav-item active" : "nav-item" }>
                        <Link className="collapse-item" to="/cadastro">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Cadastro</span>
                        </Link>
                    </li>
                    <li className={ menuAtivo === "sobre"? "nav-item active" : "nav-item" }>
                        <Link className="collapse-item" to="/sobre">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Sobre</span>
                        </Link>
                    </li>
                    <li className={ menuAtivo === "login"? "nav-item active" : "nav-item" }>
                        <Link className="collapse-item" to="/login">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Login</span>
                        </Link>
                    </li>
                </div>
            </div>
        </li>

        <hr className="sidebar-divider d-none d-md-block"/>

        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        <div className="sidebar-card d-none d-lg-flex">
            <img className="sidebar-card-illustration mb-2" src={rocketImg} alt="..." />
            <p className="text-center mb-2"><strong>Desafio de Front-end</strong> - Layout adaptado com os alunos do desafio de front-end</p>
        </div>
    </ul>
  );
}

export default Sidebar;
