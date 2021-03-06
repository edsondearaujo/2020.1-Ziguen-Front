import React from 'react';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'

import '../styles/pages/busca.css'
import '../styles/pages/header.css'

function Search() {
        return(
        <div id = "busca" >
                {/*--------------- Top Bar ---------------*/ }
                <div className = "top-bar" >
                <div className = "header">
                    <img src={logoImg} alt="Logo" className="img-logo" />
                    <div className="navbar">
                        <Link to="./Home-Cliente" className="pagina-inicial-link">Página Inicial</Link>
                        <Link to="./Passagens-cliente" className="minhas-passagens-link">Minhas Passagens</Link>
                        <Link to="/" className="logout-link">Encerrar Sessão</Link>
                    </div>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>
        {/*--------------- Search ---------------*/ }
        <div className = "search" >
                <b><p>Encontre suas passagens de Barco:</p></b>
                <div className="input-block">
                    <div className="input-block1">
                        <b><label id="origin">Origem</label></b>
                        <input id="origin" placeholder="Cidade" />
                    </div>
                    <div className="input-block2">
                        <b><label id="destination">Destino</label></b>
                        <input id="destination" placeholder="Cidade" />
                    </div>
                    <div className="input-block3">
                        <b><label id="day">Data</label></b>
                        <input id="day" placeholder="dd/mm/aa" type="date" />
                    </div>
                    <Link to="/"><button>Buscar</button></Link>
                </div>
            </div >
        {/*--------------- Cards ---------------*/ }
        <div className = "cards" >
                <div className = "space"></div>
                <div className="card">
                    <div className="container">
                        <div className = "titulo">
                            <h5>Nome da Embarcação:</h5>
                            <div className = "space"></div>
                            <p>Nome</p>
                        </div>
                        <div className = "informacoes">
                            <h5>Informações da Viagem:</h5>
                            <div className = "space"></div>
                            <p>Descrição da passagem.</p>
                        </div>
                        <div className = "preco">
                            <h5>Preço:</h5>
                            <div className = "space">
                            </div><p>R$00,00</p>
                        </div>
                        <button>Comprar</button>
                    </div>
                </div>
            </div >

        {/*--------------- Footer ---------------*/ }
        <div className = "footer" >
                <p>Nossas redes sociais</p>
                <div className="icones">
                    <img src={instagramImg} alt="Instagram" className="instagram-logo" />
                    <img src={facebookImg} alt="Facebook" className="facebook-logo" />
                </div>
                <p className="hr"></p>
                <p className="space"></p>
                <p>© 2020 - Ziguen - Vendas de Passagens Fluviais</p>
            </div >
        </div >
    )
}

export default Search;