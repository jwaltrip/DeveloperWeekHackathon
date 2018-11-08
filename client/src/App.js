import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from "./components/customers/customers";
import PrintChecklist from "./components/PrintChecklist";
import ChecklistCard from "./components/ChecklistCard";
import ChecklistCardView from "./components/ChecklistCardView";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("/data")
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    return (
      <div className="App">
        {/*<PrintChecklist*/}
          {/*data={this.state.data}*/}
        {/*/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        <ChecklistCardView
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
