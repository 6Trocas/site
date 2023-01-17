import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import mainImage from '../../images/mainImage.jpg';
import mainImageSm from '../../images/mainImage_sm.jpg'
import userImage from '../../images/user-example.jpeg';
import advantage01 from '../../images/advantage01.png';
import advantage02 from '../../images/advantage02.png';
import advantage03 from '../../images/advantage03.png';
import '../../Globals.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from '../Footer/Footer';

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
            <input type="text" placeholder="O que você busca?" className="inputSearch"></input> <br/><br/>
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

      <Footer />

    </div>
  );
}

export default Home;
