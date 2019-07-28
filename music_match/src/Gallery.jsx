import React, { Component } from "react";
import "./App.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingUrl: "",
      audio: null,
      playing: false
    };
  }

  playAudio(preview) {
    let audio = new Audio(preview);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        playingUrl: preview,
        audio
      });
    } else {
      if (this.state.playingUrl === preview) {
        this.state.audio.pause();
        this.setState({
          playing: false
        });
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing: true,
          playingUrl: preview,
          audio
        });
      }
    }
  }

  render() {
    // console.log("gallery props", this.props);
    const { tracks } = this.props;
    return (
      <div>
        {tracks.map((track, k) => {
          console.log("Track", track);
          const trackImg = track.album.cover_medium;
          return (
            <div
              key={k}
              className="track"
              onClick={() => this.playAudio(track.preview)}
            >
              <img scr={trackImg} className="track-img" alt="Album Cover" />
              <div className="track-play">
                <div className="track-inner">
                  {this.state.playingUrl === track.preview ? (
                    <span>| |</span>
                  ) : (
                    <span>&#9654;</span>
                  )}
                </div>
              </div>
              <p className="track-text">{track.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
