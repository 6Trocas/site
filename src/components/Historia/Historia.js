import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import internal_image from '../../images/internal_image02.jpg';
import '../../Globals.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

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
                <div className="Main-Image Desktop">
                    <img src={internal_image} className="Main-Slider" alt="6 Trocas" />
                    <div className="Main-Text-Internal">
                        <h1>Nossa História</h1>
                        <h4>Saiba mais sobre nossa história</h4>
                    </div>
                </div>
                <div className="Main-Image Mobile">
                    {/* <img src={mainImageSm} className="Main-Slider-Mobile" alt="6 Trocas" />
                    <div className="Main-Text">
                        <h1>Faça trocas surpreendentes</h1>
                        <h4>Economize e tenha o produto que sempre quis, na palma da sua mão</h4>
                        <button onClick={handleClick} className="Main-Button">Cadastre-se agora</button>
                    </div> */}
                </div>
                <div className="Internal_Text">
                    <h2>Conheça nossa história.</h2>
                    <p>Lorem ipsum dolor sit amet. Quo perferendis voluptas est alias voluptatem cum nihil aperiam. Ut voluptates quasi et possimus illo qui repellat expedita. Eos obcaecati voluptatem ut voluptatem aperiam est alias beatae est porro quidem qui architecto rerum aut culpa nobis? Cum accusamus enim non porro cumque a commodi nihil. </p><p>Non obcaecati repellat sit asperiores facere et quidem rerum. Vel voluptatem vitae sit blanditiis rerum ab quaerat eligendi sed accusantium Quis non incidunt nisi sit sequi sequi id internos amet. </p><p>Vel dolor voluptas vel ipsa praesentium rem exercitationem velit. Sed voluptatem beatae et dolorem dolores id dolorum dignissimos eum unde molestias id distinctio molestiae aut voluptas nesciunt ea deleniti voluptatem. </p><p>Et dicta consequuntur ea enim saepe vel unde consequatur aut corporis ipsum! Vel labore dolorem eos galisum laudantium et consequuntur veritatis non facere corrupti aut unde sunt? </p><p>Ut fugiat doloremque non ratione suscipit a fugit galisum quo maiores eaque eum dolor galisum qui minus pariatur sed mollitia voluptate. Eum nisi iste ut dolor molestiae eum corporis dolor qui dicta blanditiis in distinctio blanditiis quo sint molestiae sed quibusdam quis. </p>
                </div>
            </main>

            <Footer />

        </div>
    );
}

export default Logged;