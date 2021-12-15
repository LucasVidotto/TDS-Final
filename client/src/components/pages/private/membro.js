import React from 'react';
import {Link} from 'react-router-dom';

import LogoUfscar from '../../../assets/img/LogoUFSCar.jpg';
import Carlos from './Image/Grupo/carlos.jpg';
import Lao from './Image/Grupo/lao.jpg'
import Ariel from './Image/Grupo/ariel.jpeg';
import Cristiano from './Image/Grupo/Cristiano.jpg';
import Iago from './Image/Grupo/iago.jpg';

import '../../../styles/texto.css';
import '../../../styles/mover.css';
import '../../../styles/newfundo.css';


export default function Membros(){

	const styles ={
		left: '1px',
		top: '200px',
		
	}

    return(
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
			<div classNameNome="corpo">
				<div className='arti'>
					<div className="espacamento">
						<div className="foto">
							<legend className="legen">
								Carlos Henrique Carlos<br />
								Coordenador
							</legend>
							<p><Link to={{pathname:"https://www.google.com.br"}} target="__blank">
								<img src={Carlos}
								className="image"
								title="lattes"
								align="left"
								style={{styles, zIndex:1}}
								/></Link>
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>:<br /><br />
								<p className="texto">Graduação em Engenharia de Materiais(UFSCar)<br /></p>
								<p className="texto">Mestre em Engenharia dos Materiais(UFSCar)<br /></p>
								<p className="texto">Doutor em Ciência e Engenharia dos Materias(UFSCar)<br /></p>
								
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Atuação Profissional</b>: 
								<p className="texto">Professor do Magistério Superior da Universidade Federal de São Carlos<br /></p>
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Projetos</b>:<br />
								<p className="texto"> Materiais inteligentes baseados em polímeros eletroativos para utilização em músculos 
								artificiais, sensores de deformação e geração de energia<br /></p>
								<p className="texto"> Elastômeros condutores para uso em eletrodos flexíveis<br /></p>
								<p className="texto"> Reciclagem de borrachas vulcanizadas<br />
								</p>

								<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>:<br /> 
								<p className="texto">carlos.scu@ufscar.br<br /></p>
							</p>
							<div className="over">
								<div className="text"> Clique na imagem para abrir o Lattes </div>
							
							</div>
						</div>

						<div className="foto">
							<legend className="legen">Laos Alexandre Hirano<br /></legend>
							<p><a href="#" onclick="Llaos();"><img src={Lao} className="image-dir" title="lattes" align="left" style={styles} /></a>
								
								<b>Formação</b>: <br />
								<p className="texto">Engenheiro de Controle e Automação (UFOP)<br /></p>
								<p className="texto">Mestre em Engenharia de Materiais (Redemat-UFOP)<br /></p>
								<p className="texto">Doutor em Nanociências e Materiais Avançados (UFABC)<br /></p>
								<b> Profissional</b>:<br /> 
								<p className="texto">Professor do Magistério Superior da Universidade Federal 
								de Alfenas<br /></p>
								<b>Projetos</b>:<br />
								<p className="texto">Desenvolvimento e Caracterização de Dispositivos 
								Acionados por Polímeros Iônicos: Este projeto 
									tem como objetivo o 
								desenvolvimento e caracterização de atuadores e/ou sensores 
								acionados por polímeros eletroativos (EAP). Atualmente, 
								os materiais de interesse de estudos são os compósitos 
								polímero-metal contendo Nafion, Flemion ou outros polímeros 
								flexíveis com capacidade de de transporte iônico</p><br />
								<b>E-mail</b>:<br /> 
								<p className="texto">laosdaserra@gmail.com<br /></p>
							</p>
							<div className="over">
								<div className="text"> Clique na imagem para abrir o Lattes </div>
							</div>
						</div>

						<div className="foto">
							<legend className="legen">Ariel Gustavo Zuquello<br /></legend>
							<p><a href="#" onclick="Lariel();"><img src={Ariel} className="image" title="lattes" align="left" style={styles}/></a>
								
								<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>: <br />
								<p className="texto">Graduação e mestrado na área da Computação<br /></p>
								<p className="texto">Atualmente aluno de doutorado no programa PPGCEM/UFSCAR <br />
								</p>

								<b>&nbsp;&nbsp;&nbsp;&nbsp;Resumo</b>:<br />
								<p className="texto">Desenvolve pesquisa na área de polímeros eletroativos, compósitos, atuadores, 
									músculos artificiais, visão computacional e aprendizagem de máquina</p><br />

								<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>: 
								<p className="texto">arielzuquello@gmail.com<br /></p>
							</p>
								<div className="over">
									<div className="text"> Clique na imagem para abrir o Lattes </div>
								</div>
						</div>

						<div className="foto">
							<legend className="legen">Cristiano Porporatti Zimmermann</legend>
							<p><a href="#" onclick="Lcristiano();"><img src={Cristiano} className="image" title="lattes"align="left" style={styles}/></a>
								

								,<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>:<br />
								<p className="texto">Graduação em Engenharia Elétrica pela 
								Universidade Federal de Santa Maria – UFSM<br /></p>
								<p className="texto">MBA em Gestão e Engenharia de Produção pela 
								Universidade Regional de Blumenau.- FURB<br /></p>
								<p className="texto">Mestrado em Engenharia Elétrica pela 
								Universidade Federal Tecnológica do Paraná – UTFPR<br /></p>
								<p className="texto">Doutorado em andamento em Engenharia de Materiais pela 
									Universidade Federal de São Carlos – UFSCar.<br /></p>
								

								<b>&nbsp;&nbsp;&nbsp;&nbsp;Resumo</b>:<br /> 
								<p className="texto">O projeto envolve a aplicação de polímeros condutores, ou junções 
									híbridas de metais nobres com 
								polímeros condutores, no desenvolvimento de eletrodos para aplicações em IPMCS. Entre os 
								principais objetivos 
								deste trabalho estão a otimização do tempo e custo de fabricação, redução de fadiga, 
								assim como aumentar a 
								contabilidade dos IPMCs. Eletrodos Híbridos de Platina e Compósitos de 
									Polianilina e Nanotubos de Carbono aplicados a 
								Compósitos Metal-Polímero Ionoméricos (IPMCs).<br /></p>
							
								<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>:<br /> 
								<p className="texto">zimmermann.eng@unochapeco.edu.br<br /></p>

							</p>
							<div className="over">
								<div className="text"> Clique na imagem para abrir o Lattes </div>
							
							</div>
						</div>

						<div className="foto">
							<legend className="legen">Iago Cordeiro Santa Bárbara</legend>
							<p><a href="#" onclick="Liago();"><img src={Iago} className="image" title="lattes"align="left" style={styles}/></a>
								

								,<b>&nbsp;&nbsp;&nbsp;&nbsp;Formação</b>:<br />
								<p className="texto">Graduando em Engenharia de Materiais (UFSCar)<br /></p>
								

								<b>&nbsp;&nbsp;&nbsp;&nbsp;Resumo</b>:<br /> 
								<p className="texto">"Estudo da Influência do Cátion e da Umidade Relativa do 
									Ar na Resposta Elétrica de Sensores de Deformação Baseados em IPMC". 
									O projeto tem por objetivo geral investigar a influência do grau de hidratação
									 e o tipo e tamanho do cátion móvel no comportamento elétrico de um sensor de 
									 deformação baseado em IPMC.<br /></p>
							
								<b>&nbsp;&nbsp;&nbsp;&nbsp;E-mail</b>:<br /> 
								<p className="texto">iagocsb97@gmail.com<br /></p>

							</p>
							<div className="over">
								<div className="text"> Clique na imagem para abrir o Lattes </div>
							
							</div>
						</div>

						
					</div>
				</div>
			</div>
			

		</div>
    )
}