import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      petList: [],
      petName: "", //placeholder to hold temporary form input
      petBreed: "",
      petAge: 0
    };
  }

  handleNameInput = (event) => {
    let typedInput = event.target.value;
    this.setState({petName: typedInput});
  }

  handleBreedInput = (event) => {
    this.setState ({
      petBreed: event.target.value
    })
  }

  handleAgeInput = (event) => {
    this.setState ({
      petAge: event.target.value
    })
  }

  handleClick = () => {
    let petObject = {petName: this.state.petName,
    petBreed: this.state.petBreed,
  petAge: this.state.petAge,
};
    this.setState ({
      petList: [...this.state.petList, petObject], 
      petName: "",
      petBreed: "",
      petAge: 0
    });
  }

render() {
  let petElementArray = this.state.petList.map((animal, index) => {
    return (
      <div key={index}>
        <div>Name: {animal.petName}</div>
        <div>Breed: {animal.petBreed}</div>
        <div>Age: {animal.petAge}</div>
      </div>
    )
  });

  return (
    <div>
      <h4>Pet Store Animal List</h4>
      {petElementArray}
      <input value={this.state.petName} onChange={this.handleNameInput} placeholder="Pet Name"/>
      <input value={this.state.petBreed} onChange={this.handleBreedInput} placeholder="Pet Breed"/>
      <input value={this.state.petAge} onChange={this.handleAgeInput} placeholder="Pet Age"/>
      <button onClick ={this.handleClick}>Add Animal</button>
    </div>
  )
}

}

export default App;
