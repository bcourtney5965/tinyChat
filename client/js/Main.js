import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: ""
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

  handleSubmit(e) {
    e.preventDefault();
    console.log('handleMessage');
    const newMessage = this.state.newMessage.trim();
    if (!newMessage) {
      return;
    }

    var dataToSend = {"newMessage": newMessage};
    // $.post('/message', dataToSend, function(response) {
    //   console.log('response = ', response);
    // });

    axios.post('/message', dataToSend)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });



    
    this.setState({
      newMessage: ''
    });
  }

  updateState(field, event) {
    console.log('updateState');
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  render() {
    return (
      <div id="container" className="center-block col-lg-4">
        <Message messages={this.state.messages} />

        <form onSubmit={this.handleSubmit.bind(this)}>
          <input 
            type="text" 
            value={this.state.newMessage}
            placeholder="type message here" 
            onChange={this.updateState.bind(this, 'newMessage')} 
          />

          <input 
            type="submit" 
            value="Submit" 
          />

        </form>
      </div>
    )
  }
};

export default Main;
