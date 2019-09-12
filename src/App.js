import React from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCardID } from './actions/Action';

// const apiCall = () =>{
//   fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "526395db8emshdb6e39fb34ce32bp162132jsn16ecdb8b1bee"
// 	}
// })
// .then(response => {
// 	return response.json();
// })
// .then(res=>{
//   console.log(res);
// })
// .catch(err => {
// 	console.log("error", err);
// });
// }

function App(props) {
  // console.log(props);
  return (
    <div className="App">
      {/* <button onClick={()=>apiCall()}>Fetch call</button> */}
      <h1>Hearthstone API</h1>
      <button onClick={props.getCardID}>Hearthstone Card Data</button>
      {props.loading && <div>loading...</div>}
      {props.err && <div>{props.err}</div>}
      {/* props.monsters.map(mon=>{
        return <cardComponent img={mon.url} mon={mon} />
      }) */}
      {props.cards && props.cards.map(card=>{
        return <CardComponent card={card} key={card.cardId} />
      })}
        {/* {props.error !== "" && <p>{error}</p>} */}
    </div>
  );
}

const CardComponent = (props) =>{  
    return (
      <div>
        <img src={props.card.imgGold}/>
        <h2>{props.card.name}</h2>
        <p>{props.card.text}</p>
        <hr />
        <br />
     </div>
    );
}


const mapStateToProps = state => {
  return {
    // cardID: state.cardID,
    error: state.error,
    loading: state.loading,
    cards: state.cards
    // state
  };
};

export default connect(mapStateToProps, { getCardID })(App);
