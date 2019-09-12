import React from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCardID } from './actions/Action';
import {Card, Button, Icon, Image} from 'semantic-ui-react';



function App(props) {

  return (
    <div className="App">
      <h1>Hearthstone API</h1>
      <Button onClick={props.getCardID}>Hearthstone Card Data</Button>
      {props.loading && <div>loading...</div>}
      {props.err && <div>{props.err}</div>}
      <Card.Group>
        {props.cards && props.cards.map(card=>{
          if(!card.imgGold){
            return false;
          }
          if(!card.rarity){
            return false;
          }
          if(!card.flavor){
            return false;
          }
          return <CardComponent card={card} key={card.cardId} />
        })}
      </Card.Group>
    </div>
  );
}

const CardComponent = (props) =>{

    return (
      <Card>
      <Image src={props.card.imgGold} wrapped ui={false} />
      <Card.Content>
      <Card.Header>{props.card.playerClass}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.card.rarity && props.card.rarity + ` Card`}</span>
      </Card.Meta>
      <Card.Description>
      {props.card.flavor}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
     </Card>
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
