import React, { Component } from 'react';

class Checklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issues: []
    };
  }

  componentDidMount() {
    fetch("/data")
      .then(res => res.json())
      .then(issues => {
        this.setState({ issues });
      });
  }

  render() {
    return (
      <div>
        <div className="checkbox"> </div>
      </div>
    );
  }
}

export default Checklist;