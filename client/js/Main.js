import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
      author: ''
    }
  }

  componentDidMount() {
    let socket = io();
    this.getMessages();
    socket.on('chat message', function(msg){
      let allmessages = document.getElementById('allmessages');
      let newMessage = document.createElement('div');
      let bold = document.createElement('b');
      let authorDiv = document.createElement('div');
      let contentDiv = document.createElement('div');

      newMessage.classList.add('message');
      authorDiv.classList.add('author');
      contentDiv.classList.add('content');

      bold.innerHTML = msg.author;
      contentDiv.innerHTML = msg.content;

      authorDiv.appendChild(bold);
      newMessage.appendChild(authorDiv);
      newMessage.appendChild(contentDiv);
      allmessages.appendChild(newMessage);
    });
  }

  getMessages() {
    // axios.get('/messages') // for real data
    axios.get('../fixtures/fakedata.json') // comment this line out when backend is hooked up
      .then(function (res) {
        return res.data.messages;
      })
      .then((messages) => {
        this.setState({messages, messages});
        return messages;
      })
      .catch(function (error) {
        return console.log(error);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let socket = io();

    const content = this.state.newMessage.trim();
    const author = this.state.author.trim();
    const timestamp = new Date().getTime();

    if (!content || !author) {
      return;
    }

    const message = {
      'content': content,
      'author': author,
      'timestamp': timestamp
    };

    const dataToSend = {data: message};
    socket.emit('chat message', message);
  
    this.setState({
      newMessage: '',
      author: ''
    });
  }

  updateState(field, event) {
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  render() {
    return (
      <div id="container" className="col-md-8 col-md-offset-2">
        <Message messages={this.state.messages} />
        <form onSubmit={this.handleSubmit.bind(this)} className="form-inline">
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <input 
              type="text"
              value={this.state.newMessage}
              onChange={this.updateState.bind(this, 'newMessage')} 
              className="form-control"
              id="message"
              placeholder="Enter message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              value={this.state.author}
              onChange={this.updateState.bind(this, 'author')} 
              className="form-control"
              id="username"
              placeholder="your name" 
            />
          </div>
          <input 
            className="btn btn-primary"
            type="submit" 
            value="Submit" 
          />
        </form>
      </div>
    )
  }
};

export default Main;
