import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapComponent = props => {
  const { lat, lng } = props;
  return (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: lat, lng: lng }}>
      {props.isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(MapComponent));

// import React, { Component } from "react";
// import { withGoogleMap, GoogleMap } from "react-google-maps";

// const mapStyles = {
//   position: "inherit",
//   width: "300px",
//   height: "400px"
// };

// class MapComponent extends Component {
//   state = {};

//   displayMarker = () => {
//     return (
//       <Marker
//         position={{
//           lat: 47.49855629475769,
//           lng: -122.14184416996333
//         }}
//         onClick={() => console.log("You clicked me!")}
//       />
//     );
//   };

//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={8}
//         style={mapStyles}
//         initialCenter={{ lat: 47.444, lng: -122.176 }}
//       >
//         {this.displayMarker()}
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyC_N-X52vCtw4q5scuZf07YkqWBfRHX7uo"
// })(MapComponent);

// AIzaSyC_N - X52vCtw4q5scuZf07YkqWBfRHX7uo;
