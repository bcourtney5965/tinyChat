import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="chat">
        {
          this.props.messages.map((message, key) => {
            return ( 
              <div key={key} id={key} className="message">
                <div className="author">{message.author}</div>
                <div className="content">{message.content}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
};

export default Message;
