import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../../Globals.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Logged = () => {
    return (
        <div className="App">

            <header className="App-Header">
                <div className="Main-Logo">
                    <Link to="/">
                        <img src={logo} className="App-Logo" alt="6 Trocas" />
                    </Link>
                </div>
                <div className="Main-Interact">
                    <Link to="/logged" className="App-Button"><FontAwesomeIcon icon={faUser} /> Entrar</Link>
                </div>
            </header>

            <main className="App-Main">
                <h1>Termos</h1>
                <h4>termos de uso do site</h4>
            </main>

            <footer className="App-Footer">
                <div className="Footer-Items">
                    <h3>Sobre o 6 Trocas</h3>
                    <div className="Footer-Line">
                        <hr />
                    </div>
                    <ul>
                        <li><Link className="icon_footer" to="/empresa"><FontAwesomeIcon icon={faChevronCircleRight} /> Nossa Empresa</Link></li>
                        <li><Link className="icon_footer" to="/historia"><FontAwesomeIcon icon={faChevronCircleRight} /> História</Link></li>
                    </ul>
                </div>
                <div className="Footer-Items">
                    <h3>Serviços aos Clientes</h3>
                    <div className="Footer-Line">
                        <hr />
                    </div>
                    <ul>
                        <li><Link className="icon_footer" to="/termos"><FontAwesomeIcon icon={faChevronCircleRight} /> Termos de Uso</Link></li>
                        <li><Link className="icon_footer" to="/anunciar"><FontAwesomeIcon icon={faChevronCircleRight} /> Como Anunciar</Link></li>
                    </ul>
                </div>
                <div className="Footer-Items">
                    <h3>Pagamentos</h3>
                    <div className="Footer-Line">
                        <hr />
                    </div>
                    <ul>
                        <li><FontAwesomeIcon className="icon_footer" icon={faChevronCircleRight} /> Cartão de Crédito</li>
                        <li><FontAwesomeIcon className="icon_footer" icon={faChevronCircleRight} /> Transferência</li>
                        <li><FontAwesomeIcon className="icon_footer" icon={faChevronCircleRight} /> Pix</li>
                    </ul>
                </div>
                <div className="Footer-Items">
                    <h3>Redes Sociais</h3>
                    <div className="Footer-Line">
                        <hr />
                    </div>
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebook} className="Social-Icons" />&nbsp;<FontAwesomeIcon icon={faInstagram} className="Social-Icons" />&nbsp;<FontAwesomeIcon icon={faYoutube} className="Social-Icons" /></li>
                    </ul>
                </div>
            </footer>

            <div className="Final-Footer">
                <span>Developed by SUSI Technologies 2023. All Rights Reserved.</span>
            </div>

        </div>
    );
}

export default Logged;