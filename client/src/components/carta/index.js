import React,{useState,Fragment} from  'react';

import "../cards/cards.css";

import Form from "../Busca/index";

export default function Card(props) {
  const [open, setOpen] = useState(false);
  
  return(

    <Fragment>
      <Form
        open={open}
        setOpen={setOpen}
        title={props.name}
        category={props.category}
        cost={props.cost}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-id">{props.id}</p>
        <p className="card-cartegory">{props.category}</p>
        <h3 className="card-cost">Link:  {props.cost}</h3>
      </div>
    </Fragment>
  );
}
