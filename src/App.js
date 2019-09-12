import React, {useState} from 'react';
import './App.css';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getCardID } from './actions/Action';
import {Card, Button, Image, Dropdown, Dimmer, Loader, Segment } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Basic', value: 1},
  { key: 2, text: 'Classic', value: 2},
  { key: 3, text: 'Blackrock Mountain', value: 3 },
  { key: 4, text: 'Goblins vs Gnomes', value: 4 },
  // { key: 5, text: "Journey of Un'Goro", value: 5 },
  { key: 6, text: 'Knights of the Frozen Throne', value: 6 },
  { key: 7, text: 'Kobolds & Catacombs', value: 7 },
  { key: 8, text: 'Mean Streets of Gadgetzan', value: 8 },
  { key: 9, text: 'Naxxramas', value: 9 },
  { key: 10, text: 'One Night in Karazhan', value: 10 },
  // { key: 11, text: "Rastakhan's Rumble", value: 11 },
  // { key: 12, text: 'Rise of Shadows', value: 12 },
  // { key: 13, text: 'Saviors of Uldum', value: 13 },
  // { key: 14, text: 'Tavern Brawl', value: 14 },
  // { key: 15, text: 'Taverns of Time', value: 15 },
  { key: 16, text: 'The Boomsday Project', value: 16 },
  { key: 17, text: 'The Grand Tournament', value: 17 },
  { key: 18, text: 'The League of Explorers', value: 18 },
  { key: 19, text: 'The Witchwood', value: 19 },
  { key: 20, text: 'Whispers of the Old Gods', value: 20 },
]

function App(props) {

  const [dropdown, setDropdown] = useState('Basic');

  const handleChange = (e, {value})=> {
    setDropdown(e.target.textContent);
  }

  return (
    <div className="App">
      <h1>Hearthstone API</h1>

          <Dropdown
            onChange={handleChange}
            options={options}
            placeholder= "Please make a selection."
            selection
          />

      <Button onClick={()=>{props.getCardID(dropdown)}}>Hearthstone Card Data</Button>
      {props.loading && 
      <div>
        {/* <Dimmer active inverted> */}
          <Loader size='massive' active inline="centered">Loading</Loader>
        {/* </Dimmer> */}
      </div>}
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
