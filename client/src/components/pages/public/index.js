import React from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/menu.css';
import '../../../styles/fundo.css';
import '../../../styles/scroll.css';

import AA from './Image/Menu/a1.jpeg';
import AB from './Image/Menu/a2.jpeg';
import AC from'./Image/Menu/a3.jpeg';
import Video from './Image/video.jpg';

import Logo from '../../../assets/img/Logo.png';
import LogoUfscar from '../../../assets/img/LogoUFSCar.jpg';

export default function Page(){
    return(
        <div>
            <div className="principal">
                <div className="cabecalho">
                    <div className="logo">
                        <img src={LogoUfscar} alt="Logo Ufscar" width="15%" height="20%" align="right"/>
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
							<p>
								<img src={Logo} />
							</p>
							<p className="resumo">
							
								Materiais inteligentes (Smart Materials) são materiais capazes de perceber alterações no ambiente ao qual estão inseridos 
								respondendo de maneira pré-determinada. Normalmente estas respostas ocorrem de maneira não óbvia, como, por exemplo, mudança de 
								módulo elástico em uma direção através de aplicação de campo magnético.
							</p><br />
							<p className="resumo">
								O grupo SMaRT (Smart Macromolecules Research Team), alocado no Departamento de Engenharia de Materiais da Universidade Federal de 
								São Carlos, tem com objetivo de pesquisa a síntese e caracterização de uma subclasse destes materiais, os polímeros eletroativos 
								(eletroactive polymers ou EAP).
							</p><br />
							<p className="resumo">
								Os EAPs são polímeros que reagem a estímulos elétricos com mudanças em sua forma e/ou dimensões. 
								Dentre as aplicações de EAPs estão músculos artificiais e sensores de deformação.
							</p><br />
							<p className='resumo'>
								OO Grupo SMART tem trabalhado intensamente em polímeros eletoativos iônicos 
								(i-EAP's) que têm como mecanismo eletroativo fenômenos de mobilidade 
								iônica no volume do polímero. Fazendo uso destas características, é 
								possível construir dispositivos chamados IPMC (do inglês "Ionomeric 
								Polymer-Metal ,Composite) que tem como característica construção de 
								dois eletrodos nas superfícies opostas de uma membrana de i-EAP. Estes 
								dispositivos tem a capacidade de transformar energia mecânica em elétrica e 
								vice-versa, conferindo ao dispositivo as funções de atuadores mecânicos ou 
								sensores de deformação.
							</p>
				
						</div>
					</div>
					<div className="barra-lateral">
						<div className="espacamento">
							Entrevista para o LAbI: <p className="resumo">Pesquisas da UFSCar desenvolvem materiais que atuam como músculos artificiais</p>
							<td className="f1" rowspan="6"><a href="http://www.labi.ufscar.br/2017/01/03/pesquisas-da-ufscar-desenvolvem-materiais-que-atuam-como-musculos-artificiais/  "><img title="" src={Video} alt="poster"/></a></td>
							
							<p>
								<p className="resumo">
									Músculo artificial pronto
									<img src={AA} alt="Image" className='image-lateral'/>
								</p>
							</p>
							<p>
								Incorporação de platina no nafion
								<img src={AB} className="image-lateral" alt="Image"/>
							</p>
							<p>
								<img src={AC} className="image-lateral" alt="Iamge"/>
							</p>
						</div>
					</div>
				</div>
            </div>
            <div className="rodape">
				<div className="inter">
					Copyright &copy; - Criado por Lucas Vidotto<br></br>
				</div>
			</div>
        </div>
    )
}

