import React from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';

const apiCall = () =>{

  fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "526395db8emshdb6e39fb34ce32bp162132jsn16ecdb8b1bee"
	}
})
.then(response => {
	return response.json();
})
.then(res=>{
  console.log(res);
})
.catch(err => {
	console.log("error", err);
});
}

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <button onClick={()=>apiCall()}>Fetch call</button>
      <h1>Hearthstone API</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cardID: state.cardID,
    error: state.error,
    loading: state.loading
  };
};

export default connect(mapStateToProps, null)(App);
