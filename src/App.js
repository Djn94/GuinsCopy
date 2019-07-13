import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Card from './components/card/card';
import penguins from './penguins.json';
import Container from './components/cardwrapper/Container'
class App extends Component {
  state = { penguins }
  render() {
    return (<div>
      <Navbar />
      <Header />
      <Container>
        {this.state.penguins.map(penguin => (
          <Card
            handleClick={this.handleClick}
            id={penguin.id}
            key={penguin.id}
            image={penguin.image}
            name={penguin.name}
          />
        ))}
      </Container>
      <Footer />
    </div>
    );

  }
}

export default App;
