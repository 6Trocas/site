import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import mainImage from '../../images/mainImage.jpg';
import mainImageSm from '../../images/mainImage_sm.jpg'
import userImage from '../../images/user-example.jpeg';
import advantage01 from '../../images/advantage01.png';
import advantage02 from '../../images/advantage02.png';
import advantage03 from '../../images/advantage03.png';
import iphone8 from '../../images/iphone8.jpg';
import '../../Globals.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const handleClick = () => {
  alert('Em Desenvolvimento');
};

const Home = () =>{
  return (
    <div className="App"> 

      <header className="App-Header">
        <div className="Main-Logo">
          <img src={logo} className="App-Logo" alt="6 Trocas" />
        </div>
        <div className="Main-Interact">
          <Link to="/logged" className="App-Button"><FontAwesomeIcon icon={faUser} /> Entrar</Link>
        </div>
      </header>

      <main className="App-Main">
        <div className="Main-Image Desktop">
          <img src={mainImage} className="Main-Slider" alt="6 Trocas" />
          <div className="Main-Text">
            <h1>Faça trocas surpreendentes</h1>
            <h4>Economize e tenha o produto que sempre quis, na palma da sua mão</h4>
            <button onClick={handleClick} className="Main-Button">Cadastre-se agora</button>
          </div>
        </div>

        <div className="Main-Image Mobile">
          <img src={mainImageSm} className="Main-Slider-Mobile" alt="6 Trocas" />
          <div className="Main-Text">
            <h1>Faça trocas surpreendentes</h1>
            <h4>Economize e tenha o produto que sempre quis, na palma da sua mão</h4>
            <button onClick={handleClick} className="Main-Button">Cadastre-se agora</button>
          </div>
        </div>

        <div className="Main-Line">
          <hr />
        </div>

        <div className="Main-Products">
          
          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>
          
          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>
          
          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>

          <div className="Product">
            <div className="User-Data">
              <div className="User-Picture">
                <img src={userImage} className="User-Picture" alt="User" />
              </div>
              <div className="User-Name">
                <p>Marcos Roberto</p>
                <span>São Lourenço/MG</span>
              </div>  
            </div>
            <div className="User-Items">
              <div className="User-Products">
                <p>Produtos:</p>
                <span>iPhone 8</span>
                <span>Samsung S10</span>
                <span>Motorola G7</span>
              </div>
              <div className="User-Desires">
                <p>Desejos:</p>
                <span>X-Box 360</span>
                <span>Playstation 4</span>
                <span>Notebook Acer</span>
              </div>
            </div>
          </div>
          
        </div>

        <div className="Main-Explanation">

          <div className="Explanation-Title">
            <h1>Trocar seu produto tem muitas vantagens!</h1>
          </div>

          <div className="Explanation-SubTitle">
            <h3>Você não precisa ficar mais guardando o que não usa! Aproveite nossa plataforma e troque por<br></br> algo que deseja, em poucos cliques. <strong>Faça suas trocas gratuitamente!</strong></h3>
          </div>

          <div className="Main-Line">
            <hr />
          </div>

          <div className="Advantage">

            <div className="Advantages">
              <img src={advantage01} className="Advantage-Image" alt="Vantagens" />
              <h3>MILHARES DE OPORTUNIDADES</h3>
              <div className="Main-Line">
                <hr />
              </div>
              <p>No 6 Trocas, você encontra de tudo! O celular mais espetacular, aqui você vai encontrar!</p>
            </div>

            <div className="Advantages">
              <img src={advantage02} className="Advantage-Image" alt="Vantagens" />
              <h3>FAÇA TROCAS ILIMITADAS</h3>
              <div className="Main-Line">
                <hr />
              </div>
              <p>Troque tudo o que quiser. Sem limites para trocas. Economize e ajude o Meio Ambiente.</p>
            </div>

            <div className="Advantages">
              <img src={advantage03} className="Advantage-Image" alt="Vantagens" />
              <h3>GARANTIA EM SUA TROCAS</h3>
              <div className="Main-Line">
                <hr />
              </div>
              <p>Troque tudo o que quiser. Sem limites para trocas. Economize e ajude o Meio Ambiente.</p>
            </div>

          </div>

          <button onClick={handleClick} className="Action-Button">Cadastre-se agora</button>

        </div>
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

export default Home;
