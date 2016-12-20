import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="allmessages">
        {
          this.props.messages.map((message, key) => {
            return ( 
              <div key={key} id={`message${key}`} className="message">
                <div className="author"><b>{message.author}</b></div>
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
