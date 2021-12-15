import React from 'react';
import {Link} from 'react-router-dom';

import LogoUfscar from '../../../assets/img/LogoUFSCar.jpg';
import AA from './image/equecao.jpeg';
import AB from './image/graficos.jpeg';
import AC from './image/linha.jpeg';
import AD from './image/resultado.jpeg';
import Video from './image/esquema.jpeg';


import '../../../styles/meb.css';


export default function PostPage(){
    return(
        <div className="principal">
			<div class="cabecalho">
				
				<div className="logo">
					<img src={LogoUfscar} alt="LogoUsfacr" width="15%" height="20%" align="right"/>
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
                        
						<div className="foto">
                            <p className="texto2">GONCALVES, R. ; TOZZI, K. A. ; SACCARDO, M. C. ; ZUQUELLO, A. G. ; 
								SCURACCHIO, C.H. . 
								Nafion-based ionomeric polymer/metal composites operating in the air: Theoretical 
								and Electrochemical Analysis. 
								Journal of Solid State Electrochemistry, 2020.<br />
							</p>
                        
                            <p className="texto2">SACCARDO, MATHEUS COLOVATI ; ZUQUELLO, ARIEL GUSTAVO ; 
								TOZZI, KAIQUE AFONSO ; GONÇALVES, ROGER ; HIRANO, LAOS ALEXANDRE ; 
								Scuracchio, Carlos Henrique . Counter-ion and humidity effects on 
								electromechanical properties of Nafion®/Pt composites. 
								MATERIALS CHEMISTRY AND PHYSICS, v. 244, p. 122674, 2020.
								
								<br /><a href="https://www.sciencedirect.com/science/article/pii/S0254058420300560?via%3Dihub">
									https://www.sciencedirect.com/science/article/pii/S0254058420300560?via%3Dihub<br /></a>
							</p>
                            
                             <p className="texto2">MATOS, BRUNO R. ; SANTIAGO, ELISABETE I. ; FERNANDO Q. REY, JOSE ; 
								 SCURACCHIO, CARLOS H. ; 
								 Mantovani, Gerson L. ; Hirano, Laos A. ; FONSECA, FABIO C. .
								  dc Proton conductivity at low-frequency in 
								 Nafion conductivity spectrum probed by time-resolved SAXS 
								 measurements and impedance spectroscopy. 
								 Journal of Polymer Science. Part B, Polymer Physics, v. 53, p. n/a-n/a, 2015.
								 
								<br /><a href="https://onlinelibrary.wiley.com/doi/full/10.1002/polb.23704">
									https://onlinelibrary.wiley.com/doi/full/10.1002/polb.23704<br /></a>
							</p>
							
                            <p className="texto2"> Hirano, L. A. ; ACERBI, L. W. ; KIKUCHI, K. ; TSUCHITANI, S. ; 
								SCURACCHIO, C. H. . 
								Study of the Influence of the Hydration Level on the Electromechanical Behavior 
								of Nafion Based 
								Ionomeric Polymer-metal Composites Actuators. Materials Research,
								 p. 154-158, 2015.

								<br /><a href="http://www.scielo.br/scielo.php?script=sci_arttext&pid=S1516-14392015000800154&lng=en&tlng=en">
									http://www.scielo.br/scielo.php?script=sci_arttext&pid=S1516-14392015000800154&lng=en&tlng=en<br /></a>
								</p>

                             <p className="texto2">   Hirano, Laos A. ; Escote, Márcia T. ; Martins-Filho, Luiz S. ; 
								Mantovani, Gerson L. ; 
								Scuracchio, C. H. . Development of Artificial Muscles Based on Electroactive 
								Ionomeric Polymer-Metal 
								Composites. Artificial Organs, v. 35, p. 478-483, 2011.
								
								<br /><a href="https://onlinelibrary.wiley.com/doi/full/10.1111/j.1525-1594.2011.01259.x">
									https://onlinelibrary.wiley.com/doi/full/10.1111/j.1525-1594.2011.01259.x<br /></a>
							</p>
                            
                            <p className="texto2">GONCALVES, R. ; ZUQUELO, A. G. ; SACCARDO, M. C. ; Hirano, L. A. ; 
								SCURACCHIO, C.H. . 
								Estudo por dinâmica molecular da camada de solvatação de contra-íons em membranas 
								de Nafion. In: 15 Congresso 
								Braileiro de Polímeros, 2019, Bento Gonçalves. Anais do 15º Congresso Brasileiro 
								de Polímeros. São Carlos: 
                                Associação Brasileira de Polímeros, 2019.<br /></p>

                            <p className="texto2">ZIMMERMANN, C. P. ; GONCALVES, R. ; SILVA, L. L. ; FIORI, M. A. ; 
								SCURACCHIO, C.H. . 
								ANÁLISE MORFOLÓGICA DE FILMES DE POLIANILINA ELETRODEPOSITADOS SOBRE ELETRODO 
								DE IPMC PLATINA/NAFION. 
								In: 15 Congresso Brasileiro de Polímeros, 2019, Bento Golçalves. Anais do 15 
								Congresso Brasileiro de Polímeros. 
                                São Carlos: Associação Brasileira de Polímeros, 2019.<br /></p>
							
							<p className="texto2">ZUQUELO, A. G. ; SACCARDO, M. C. ; GONCALVES, R. ; SCURACCHIO, 
								C.H. ; Hirano, Laos A. .
								 AVALIAÇÃO DE DESEMPENHO ELETROMECÂNICO DE FILMES DE IPMC À BASE DE NAFION® 
								 UTILIZANDO CORRELAÇÃO DE IMAGENS. 
								 In: 15 Congresso Brasileiro de Polímeros, 2019, Bento Golçalves. Anais do 
								 15 Congresso Brasileiro de 
								 Polímeros. São Carlos: Associação Brasileira de Polímeros, 2019.<br /></p>

							<p className="texto2">SACCARDO, M. C. ; ZUQUELO, A. G. ; GONCALVES, R. ; MAFFEI, T. ;
								 Hirano, L. A. ; SCURACCHIO, 
								C.H. . INFLUÊNCIA DO CONTRAÍON E UMIDADE RELATIVA NA CINÉTICA DE ABSORÇÃO DE
								 ÁGUA PELO NAFION E 
								COMPÓSITO DE POLÍMERO IONOMÉRICO E METAL. In: 15 Congresso Brasileiro de
								 Polímeros, 2019, Bento
								 Golçalves. Anais do 15 Congresso Brasileiro de Polímeros, 2019.<br /></p>
								
							<p className="texto2">TOZZI, K. A. ; RODRIGUES, L. K. ; MAFFEI, T. ; GONCALVES, R. ; Hirano, L. A. ; 
								SCURACCHIO, C.H. . 
								IPMC?S DE NAFION COM CAMADA DE PLATINA DEPOSITADA CONTENDO CLORETO DE 1-BUTIL-3-METILIMIDAZOL 
								INCORPORADO: 
								ANÁLISE TÉRMICA E ELÉTRICA. In: 15 Congresso Brasileiro de Polímeros, 2019, Bento Golçalves.
								 Anais do 15 
								Congresso Brasileiro de Polímeros. São Carlos: Associação Brasileira de Polímeros, 2019.<br /></p>
								
							<p className="texto2">BARBOSA, R. ; MARTINS, L. S. ; SILVEIRA, T. A. ; GONCALVES, R. ; SCURACCHIO, C.H. . 
								NANOCOMPÓSITOS 
								DE BORRACHA NATURAL/NANOTUBOS DE CARBONO PRODUZIDOS VIA MÉTODO LÁTEX ASSISTIDO POR SURFACTANTE. 
								In: 15 Congresso
								 Brasileiro de Polímeros, 2019, Bento Golçalves. Anais do 15 Congresso Brasileiro de 
								 Polímeros. São Carlos: 
								 Associação Brasileira de Polímeros.<br /></p>
								
							<p className="texto2">RODRIGUES, L. K. ; TOZZI, K. A. ; GONCALVES, R. ; Hirano, L. A. ; 
								SCURACCHIO, C.H. . ESTUDO DE
								 ABSORÇÃO E PERDA D?ÁGUA EM IPMC?S DE NAFION E PLATINA CONTENDO CLORETO DE 1-BUTIL-3-METILIMIDAZOL 
								 INCORPORADO. 
								 In: 15 Congresso Brasileiro de Polímeros, 2019, Bento Golçalves. Anais do 15 Congresso 
								 Brasileiro de Polímeros. 
								 São Carlos: Associação Brasileira de Polímeros, 2019.<br /></p>
								
						    <p className="texto2">ZUQUELO, A. G. ; SACCARDO, M. C. ; GONCALVES, R. ; MAFFEI, T. ; 
								SCURACCHIO, C. H. . Análise do 
								comportamento eletromecânico em compósitso de polímeros ionomérico e metal com 
								redução na camada de platina
								visnado economia e menos geração de resíduos. In: Congresso Online Nacional de 
							 	Química, 2019. Congresso Online 
							 	Nacional de Química, 2019.<br /></p>
								
							<p className="texto2">GONCALVES, R. ; ZUQUELO, A. G. ; SACCARDO, M. C. ; Hirano, L. A. ; SCURACCHIO, C.H. . 
								Study of the ion effect on the performance of Nafion-based ionomeric/metal polymer composite. In: 
								XXII Simposio 
								Brasileiro de Eletroquímica e eletroanalítica, 2019, Ribeirão Preto. ANAIS DO XXII SIMPÓSIO 
								BRASILEIRO DE 
								ELETROQUÍMICA E ELETROANALÍTICA, 2019. p. 257-257.<br /></p>
								
							<p class="texto2">SCURACCHIO, C. H.; Hirano, L. A. . Morphological 
								and Electromechanical Characterization of 
								Artificial Muscles Based on Ionomeric Polymer Metal Composites (IPMC).
								 In: Nanomat 2017 - 
								The 7th Latin American Conference on Metastable and Nanostructured 
								Materials, 2017, Brotas - 
								SP. Nanomat 2017. São Carlos, 2017. p. 39-39.<br /></p>
                        </div>

					</div>
				</div>
				<div className="barra-lateral">
						<div className="espacamento">

							<p className="resumo">
							Arranjo experimental para ensaios de força e deslocamento de um IPMC
								<img src={Video} alt="image" className="image-lateral" />
							</p>
								
							<p>
								<p className="resumo">
								Exemplo de coleta de dados de visão de máquina para acompanhamento do deslocamento de um IPMC durante ataução
									<img src={AA} alt="Image" className='image-lateral'/>
								</p>
							</p>
							<p className='resumo'>
							Mecanismo de dispersão de nanotubos de carbono em 
							látex de borracha natural com aplicação de ultra-som, 
							em banho e de ponteira								
							<img src={AB} className="image-lateral" alt="Image"/>
							</p>
							<p className='resumo'>
							Deformação no tempo do IPMC quando aplicada uma diferença de potencial elétrico
								<img src={AC} className="image-lateral" alt="Iamge"/>
							</p>
							<p className='resumo'>
							
							Resultado de deslocamento controlado de um 
							IPMC através de um sistema e controle do tipo PI								
							<img src={AD} className="image-lateral" alt="Iamge"/>
							</p>
						</div>
					</div>
			</div>
			<div clclassNameass="rodape">
				<div className="inter">
					Copyright &copy; - Criado por Lucas Vidotto<br />
				</div>
			</div>
		</div>
    )
}