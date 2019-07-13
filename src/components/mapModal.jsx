import React, { Component } from "react";
import { Modal, Button } from "react-materialize";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapModal extends Component {
  state = {};

  displayMarker = () => {
    return (
      <Marker
        position={{
          lat: 47.49855629475769,
          lng: -122.14184416996333
        }}
        onClick={() => console.log("You clicked me!")}
      />
    );
  };

  render() {
    return (
      <Modal
        header={this.props.title}
        bottomSheet
        trigger={this.props.trigger}
        className="mapModal"
      >
        <Map
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
          {this.displayMarker()}
        </Map>
      </Modal>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC_N-X52vCtw4q5scuZf07YkqWBfRHX7uo"
})(MapModal);
