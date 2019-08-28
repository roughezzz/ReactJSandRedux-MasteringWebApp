import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Profile from "./Profile";
import Gallery from "./Gallery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artist: null,
      tracks: []
    };
  }

  search() {
    // const CLIENT_ID = "35192ae706134e06901dbbec6c5c8fcd";
    // const CLIENT_SECRECT = "1b1e76240d804e53a3c18f89fab03045";
    // const encodedData = window.btoa(`${CLIENT_ID}:${CLIENT_SECRECT}`);
    // const token = "Basic " + encodedData;
    const CORS_URL = "https://cors-anywhere.herokuapp.com/";
    const BASE_URL_ARTIST = "https://api.deezer.com/search/artist?";
    const BASE_URL_TRACK = "https://api.deezer.com/search/track?";
    let FETCH_URL = `${CORS_URL}${BASE_URL_ARTIST}q=${
      this.state.query
    }&limit=1`;

    fetch(FETCH_URL, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        const artist = json.data[0];
        // console.log(artist);
        this.setState({ artist });

        FETCH_URL = `${CORS_URL}${BASE_URL_TRACK}q=${artist.name}&limit=10`;

        fetch(FETCH_URL, {
          method: "GET"
        })
          .then(response => response.json())
          .then(json => {
            // console.log("Artist's top track", json);
            const tracks = json.data;
            this.setState({ tracks });
          });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              placeholder="Search for an Artist"
              type="text"
              value={this.state.query}
              onChange={event => {
                this.setState({ query: event.target.value });
              }}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            <InputGroup.Append onClick={() => this.search()}>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </FormGroup>
        {this.state.artist !== null ? (
          <div>
            <Profile artist={this.state.artist} />
            <Gallery tracks={this.state.tracks} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
