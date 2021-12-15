import React from 'react';

import { Link } from 'react-router-dom';

import LogoUfscar from '../../../assets/img/LogoUFSCar.jpg';

export default function Search(){
    return(
        <div className="principal">
			<div className="cabecalho">
				
				<div class="logo">
					<img src={LogoUfscar} width="15%" height="20%" align="right"/>
				</div>
			</div>
			<div className="menu">
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
			<div className="corpo">
				<div className="artigos">
					<div className="espacamento">
				         <ul>	
                            <li><p className="pub"> Busca por novos materiais poliméricos condutores para utilização como eletrodos flexíveis
                            <br /></p></li>
                            <li><p className="pub">Diminuição da dependência da umidade ambiente na atuação de polímeros eletroativos iônicos para uso 
                            como atuadores mecânicos<br /></p></li>
                           <li><p className="pub">Uso de reconhecimento de imagem para controle e medida de desempenho em músculos artificiais baseados
                            em polímeros eletroativos iônicos<br /></p></li>
                            <li><p className="pub">Estudo eletroquímico de polímero eletroativos iônicos<br /></p></li>
                            <li><p className="pub">Sulfonação de polímeros para utilização como músculos artificiais e sensores de deformação.<br /></p></li>
				         </ul>		
					</div>
				</div>

				<div className="barra-lateral">
						<div className="espacamento">
							
							<p>
								<p className="resumo">
									
									<img src='{AA}' alt="Image" className='image-lateral'/>
								</p>
							</p>
							<p>
								
								<img src='{AB}' className="image-lateral" alt="Image"/>
							</p>
							<p>
								<img src='{AC}' className="image-lateral" alt="Iamge"/>
							</p>
						</div>
					</div>

			</div>
			<div className="rodape">
				<div className="inter">
					Copyright &copy; - Criado por Lucas Vidotto<br />
				</div>
			</div>
		</div>
    )
}