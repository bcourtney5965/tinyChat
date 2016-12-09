import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';
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
        <Message messages={this.state.messages} />
      </div>
    )
  }
};

export default Main;
