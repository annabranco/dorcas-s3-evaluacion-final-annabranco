import React from 'react';
import { Link } from 'react-router-dom';
import Gryffindor from '../images/gryffindor.png';
import Hufflepuff from '../images/hufflepuff.png';
import Ravenclaw from '../images/ravenclaw.png';
import Slytherin from '../images/slytherin.png';
import Hogwarts from '../images/hogwarts.png';


let characterToDisplay;
let deadOrAlive;
let deadOrAliveIcon;
let housePicture;

class ShowDetails extends React.Component {
  constructor(props) {
    super(props)

    this.getCharacter = this.getCharacter.bind(this)
  }

  componentWillMount() {
    this.getCharacter();
  }

  getCharacter() {
    for (const character of this.props.characters) {
      if (character.id === this.props.match.params.id) {
        characterToDisplay = character;
      }
    }

    let genderEnding;
    if (characterToDisplay.gender === 'female') {
      genderEnding = 'A';
    } else {
      genderEnding = 'O';
    }

    if (characterToDisplay.alive) {
      deadOrAlive = `VIV${genderEnding}`;
      deadOrAliveIcon = '';
    } else {
      deadOrAlive = `MUERT${genderEnding}`;
      deadOrAliveIcon = '☠️';

    }

      if (characterToDisplay.house === 'Gryffindor') {
      housePicture = Gryffindor;
    } else if (characterToDisplay.house === 'Hufflepuff') {
      housePicture = Hufflepuff;
    } else if (characterToDisplay.house === 'Ravenclaw') {
      housePicture = Ravenclaw;
    } else if (characterToDisplay.house === 'Slytherin') {
      housePicture = Slytherin;
    } else {
      housePicture = Hogwarts;

    }
    console.log(housePicture);
  }

  render () {

    return (
      <React.Fragment>
        <div className="character__details--box">
          <div className="character__details--photoBox" style={{backgroundImage: "url(" + characterToDisplay.image + ")"}}>
            <img src={characterToDisplay.image} alt="" className="character__details--photo"/>
          </div>
          <div className="character__details--infoBox">
            <h2 className="character__details--name">{characterToDisplay.name} <span className="status">{deadOrAliveIcon}</span></h2>
            <ul className="character__details--infoList">
              <li className="character__details--infoItem">
                <p className="character__details--item">Casa: {characterToDisplay.house}</p>
              </li>
              <li className="character__details--infoItem">
                <p className="character__details--item">Nacimiento: {characterToDisplay.yearOfBirth}</p>
              </li>
              <li className="character__details--infoItem">
                <p className="character__details--item">Patronus: {characterToDisplay.patronus.charAt(0).toUpperCase() + characterToDisplay.patronus.slice(1)}</p>
              </li>
              <li className="character__details--infoItem">
                <p className="character__details--item">Estado: {deadOrAlive} </p>
              </li>
              <li className="character__details--infoItem">
                <img className="house__crest" src={housePicture} alt={characterToDisplay.house} />
              </li>
            </ul>
          </div>
        </div>
        <div className="back--box">
          <Link to='/' className="link back--box">
          <img src="http://31.media.tumblr.com/43d83cd18ae6a18ead69bef818b3bd02/tumblr_n5zkaohA5s1rff386o1_500.gif" alt="" className="photo__back"/>
          <p className="text__back">Volver</p>
        </Link>
      </div>


    </React.Fragment>
  );
}

}

export default ShowDetails;