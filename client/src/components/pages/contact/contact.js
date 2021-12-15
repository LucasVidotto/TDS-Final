import React from 'react';

import { Link } from 'react-router-dom';

import './form.css';

import LogoUfscar from '../../../assets/img/LogoUFSCar.jpg';

export default function Contact(){

    const styles = {
        font: '1.3rem',
        color: 'rgb(0,100,130)',
    }
    
    return(
        <div class="principal">
			<div class="cabecalho">
				
				
				<div class="logo">
					<img src={LogoUfscar} alt ="Logo Ufscar" width="15%" height="20%" align="right"/>
				</div>
			</div>
			<div class="menu">
				<ul>
					<li> <Link to="/">Início</Link> </li>
					<li> <Link to="/membros">Membros</Link> </li>
					<li> <Link to="/pesquisa">Linha de Pesquisa </Link> </li>
					<li> <Link to="/publicacao">Publicações </Link></li>
					<li> <Link to="/contato">Contato</Link> </li>
					<li> <Link to="/home">Home</Link> </li>
					<li> <Link to="/login">Login</Link> </li>

              </ul>
			</div>
			<div class="corpo">
				<div class="artigos">   
					<div class="espacamento">
						
						<form name="meu_form">
 
							<h1>Entre em contato</h1>
					 
							<p class="nome">
								<input type="text" id="nomeid" placeholder="Name" required="required" name="nome"align="center" />
								<label for="nome" hidden>Nome</label>
							</p>
							<p class="fone">
								<input type="text" id="foneid" placeholder="(xx)xx-xx-xx-xx" name="fone" />
								<label for="fone" hidden>Fone</label>
					 
							</p>
							<p>
								<input type="email" id="emailid" placeholder="Email@mail.com" name="email" />
								<label for="email" hidden>Email</label>
							</p>
							<p>
								<textarea placeholder="Deixe sua opnião"></textarea>
							</p>
							<p class="submit">
								<input type="submit" onclick="Enviar();" value="Enviar" />
                            </p>
                        </form>
					</div>
				</div>
				<div class="barra-lateral">
					<div class="espacamento">
						<legend align="center"><span style={styles} >Email</span></legend>	
							<p align="center">carlos.scu@ufscar.br</p>

							<br /><br /><br />  

							<legend id="legen"align="center"><span >Endereço</span></legend> 
							<p class="tex" align="center">Rod. Washington Luís km 235 - SP-310 - São Carlos<br />
								São Carlos,SP<br />
								CEP 13565-905<br />
								Telefone: (16) 3306-6553<br />
                            </p>
					</div>
				</div>
			</div>
			<div class="rodape">
				<div class="inter">
					Copyright &copy; - Criado por Lucas Vidotto<br />
				</div>
			</div>
		</div>
    )
}