import Image from 'next/image'

export const Capitulos = () => {
    var Logo = require('../public/logo.svg');
    var LogoIF = require('../public/ifms-dr-marca-2015.png');
    var LogoEmbrapa = require('../public/logo-embrapa-400.png');
    var LogoIFEmbrapa = require('../public/logo-if-embrapa.png');
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light" aria-label="Offcanvas navbar large">
                <div className="container-fluid">
                    <div className="d-flex align-items-center"> 
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                            <span className="navbar-toggler-icon custom-navbar-toggler"></span>
                        </button>
                        <a className="navbar-brand" href="/">
                            <Image src={Logo} width={350} height={54} alt="logo Embrapa com letras em azul com um simbolo verde, sendo que as letras em cima do simbolo são brancas" priority/>
                        </a>
                    </div>
                    <div className="first-form-search">
                        <form className="d-flex rounded-pill p-1 position-relative first-form-search" role="search">
                            <div className="input-group">
                                <input
                                    className="form-control border-0 rounded-pill pr-5"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <div className="input-group-append">
                                    <span className="">
                                        <i className="fas fa-search icone-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="offcanvas offcanvas-start text-bg-light" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <ul className="navbar-nav d-flex links-logo-ifembrapa flex-row">
                                <li className="nav-item">
                                    <Image src={LogoIFEmbrapa} className='logotipo me-3' width="100%" height={45} alt="logo Embrapa com letras em azul com um simbolo verde, sendo que as letras em cima do simbolo são brancas" priority/>
                                </li>
                            </ul>
                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <hr className="featurette-divider"></hr>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 center-itens">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Edição Completa</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Autores</a>
                                </li>
                            </ul>
                            <form id="searchForm" className="d-flex rounded-pill p-1 position-relative" role="search">
                                <div className="input-group">
                                    <input
                                        className="form-control border-0 rounded-pill pr-5"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                        <span className="">
                                            <i className="fas fa-search icone-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav d-flex links-logo flex-row">
                                <li className="nav-item second-logo-inst">
                                    <Image src={LogoIF} className='logotipo me-3' width="100%" height={32} alt="logo Embrapa com letras em azul com um simbolo verde, sendo que as letras em cima do simbolo são brancas" priority/>
                                </li>
                                <li className="nav-item second-logo-inst">
                                    <Image src={LogoEmbrapa} className='logotipo' width="100%" height={48} alt="logo Embrapa com letras em azul com um simbolo verde, sendo que as letras em cima do simbolo são brancas" priority/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
                
            <footer>
                <div className="container container-footer">
                    <div className="title-footer">
                        <p>Embrapa Agropecuária Oeste</p>
                    </div>
                    <div className="description-footer">
                        <p>Rodovia BR 163, Km 253,6, Caixa Postal 449, CEP: 79804-970, Dourados, MS</p>
                        <p>Fone: + 55 (67) 3416-9700</p>
                    </div>
                </div>
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />   
        </>
    );
};