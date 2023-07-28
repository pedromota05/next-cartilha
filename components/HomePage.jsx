import Image from 'next/image'
import Link from 'next/link'

export const HomePage = () => {
    var Logo = require('../public/logo.svg');
    var LogoIF = require('../public/ifms-dr-marca-2015.png');
    var LogoEmbrapa = require('../public/logo-embrapa-400.png');
    var LogoIFEmbrapa = require('../public/logo-if-embrapa.png');
    var LogoCartilha = require('../public/logo-cartilha.svg');   
    var Harley = require('../public/harley.png');    
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
                                    <Link className="nav-link" href="/edicao-completa" aria-current="page">
                                        Edição Completa
                                    </Link>     
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

            <div className="px-4 py-5 text-center hero">
                <div className='messagem'>
                    <Image className="d-block mx-auto mb-4" src={LogoCartilha} alt="" width="100%" height="128"/>
                    <h1 className="display-5 fw-bold">Tecnologias para a Agricultura Familiar</h1>
                </div>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">4<sup>a</sup> edição revista e atualizada</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-lg px-5">
                            <span className="btn-text">Acessar a edição completa</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="apresentacao">
                <div className="titulo">
                    <p>Você sabia que boa parte das publicações das minibibliotecas da Embrapa estão disponíveis em formato digital? Conheça a quarta edição revista e atualizada da publicação Tecnologias para a Agricultura Familiar.</p>
                </div>
                <div className="texto-container">
                    <h1>Apresentação</h1>
                    <div className="texto">
                        <p>Em 2014, a Embrapa lançou a publicação “Tecnologias para a Agricultura Familiar”, a qual reuniu diversas tecnologias voltadas ao agricultor familiar, em um formato simples e objetivo. Os capítulos continham informações básicas, mas também apresentavam sugestões bibliográficas e links de acesso, onde o leitor poderia se aprofundar nos temas de interesse.</p>
                        <p>O sucesso da publicação foi tal que, de lá para cá, em função de demandas, foram realizadas revisões com incrementos de tecnologias. Esta quarta edição, além de ter sido revisada, ampliada e editada em forma de e-book, também está disponível por meio de aplicativo, fruto de uma parceria com o Instituto Federal de Mato Grosso do Sul (IFMS) – Campus de Dourados, o qual, depois de instalado, trabalha offline. Assim, informações mais detalhadas poderão ser facilmente acessadas por meio dos links disponibilizados pelos autores no final de cada capítulo. A ideia é conectar o produtor ao cenário de inovação tecnológica, para expandir a disseminação da informação e do acesso ao conhecimento.</p>
                        <p>A Embrapa está constantemente trabalhando para viabilizar soluções de pesquisa, desenvolvimento e inovação para a sustentabilidade da agricultura, em benefício da sociedade brasileira. Entregamos esta publicação, junto com nossos parceiros, especialmente para os produtores familiares, buscando propiciar cada vez mais o acesso a essas soluções, de forma que elas sejam propulsoras de uma agricultura pujante, forte e cheia de oportunidades.</p>
                    </div>
                    <div className="autor">
                        <Image src={Harley} alt="Foto do Harley" className='img' width="100%" height={100}/>
                        <p className="nome">Harley Nonato de Oliveira</p>
                        <p className="cargo">Chefe Geral</p>
                        <p className="cargo">Embrapa Agropecuária Oeste</p>
                    </div>
                </div>
            </div>
                
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