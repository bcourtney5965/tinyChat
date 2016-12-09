import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat.js';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    axios.get('../fixtures/fakedata.json')
      .then(function (res) {
        return res.data.messages;
      })
      .then((messages) => {
        this.setState({messages, messages})
        return messages;
      })
      .catch(function (error) {
        return console.log(error);
      });
  }

  render() {
    return (
      <div id="container" className="center-block col-lg-4">
        <Chat />
      </div>
    )
  }
};

export default Main;
