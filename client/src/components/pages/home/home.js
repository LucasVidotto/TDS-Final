import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import './home.css';

import Card from '../../carta/index';
import Logo from '../../../assets/img/Logo.png';
import LogoUfscar from '../../../assets/img/LogoUFSCar.jpg';

export default function Home(){
    const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);
  console.log(listCard);
  const handleRegisterGame = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then(() => {
      Axios.post("http://localhost:3001/search", {
        name: values.name,
        cost: values.cost,
        category: values.category,
      }).then((response) => {
        setListCard([
          ...listCard,
          {
            id: response.data[0].id,
            name: values.name,
            cost: values.cost,
            category: values.category,
          },
        ]);
      });
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };
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
					    <div className="fundonew">
						    <div className="espacamento">
                  <div className="register-container">
                    <h1 className="register-title">Scrim Shop</h1>
                      <input
                        type="text"
                        name="name"
                        placeholder="Nome Completo"
                        className="register-input"
                        onChange={handleaddValues}
                      />
                      <input
                        type="text"
                        placeholder="Link Lattes"
                        name="cost"
                        className="register-input"
                        onChange={handleaddValues}
                      />
                      <input
                        type="text"
                        placeholder="Área de Atuação"
                        name="category"
                        className="register-input"
                        onChange={handleaddValues}
                      />

                      <button onClick={handleRegisterGame} className="register-button">
                        Cadastrar
                      </button>
                    </div>
                    {listCard.map((val) => (
                      <Card
                        listCard={listCard}
                        setListCard={setListCard}
                        key={val.id}
                        id={val.id}
                        name={val.name}
                        cost={val.cost}
                        category={val.category}
                      />
                    ))}
                  </div>
                </div>
              </div>
      </div>
    </div>
    )
}