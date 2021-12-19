import React, { Fragment, Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import data from "../data/data";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        body: "",
        author: ""
    }
}

  //Return a random number min included and max excluded 

  getRandomQuote = () => {
    let num = Math.floor(Math.random() * (59 - 1) + 1);
    this.setState(
      {
        body: data[num]["body"],
        author: data[num]["author"]
      }
    )
   
  };

  componentDidMount() {
    this.getRandomQuote()
}

render() { 
  return (
    <Fragment>
      <div className="container" id="quote-box">
        <Card>
          <Card.Body>
            <Card.Title className="title">YOUR DAILY STOIC QUOTE</Card.Title>
            <Card.Text id="text">
              <p>{this.state.body}</p>
              <p>
                <cite id="author">{this.state.author}</cite>
              </p>
            </Card.Text>
          </Card.Body>
            <div className="buttons">
              <a href="twitter.com/intent/tweet" id="tweet-quote"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
              <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              <Button id="new-quote" onClick={this.getRandomQuote}>New Quote</Button>
            </div>
        </Card>
      </div>
    </Fragment>
  );
}
};

export default Home;