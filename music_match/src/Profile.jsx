import React, { Component } from "react";
import "./App.css";

class Profile extends Component {
  render() {
    let artist = {
      name: "",
      nb_fan: "",
      picture_medium: ""
    };
    artist = this.props.artist !== null ? this.props.artist : artist;
    return (
      <div className="profile">
        <img
          alt="Profile"
          className="profile-img"
          src={artist.picture_medium}
        />
        <div className="profile-info">
          <div className="profile-name">{artist.name}</div>
          <div className="profile-followers">{artist.nb_fan} followers</div>
        </div>
      </div>
    );
  }
}

export default Profile;
