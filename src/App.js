import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          {
            lat: 32.4697,
            lng: -99.7081
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Abilene Christian University'}
          position={{lat: 32.4697, lng: -99.7081}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'University of Houston'}
          position={{lat: 29.7199, lng: -95.3422}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'University of North Texas'}
          position={{lat: 33.2075, lng: -97.1526}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'The University of Texas at Austin'}
          position={{lat: 30.2849, lng: -97.7341}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'The University of Texas at Dallas'}
          position={{lat: 32.9858, lng: -96.7501}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Texas A&M University'}
          position={{lat: 30.6188, lng: -96.3365}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Lamar University'}
          position={{lat: 30.0399, lng: -94.0756}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Sam Houston State University'}
          position={{lat: 30.714279 , lng: -95.547366}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Sul Ross State University'}
          position={{lat: 30.3637, lng: -103.6498}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Texas State University'}
          position={{lat: 29.8884, lng: -97.9384}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Angelo State University'}
          position={{lat: 31.4383, lng: -100.4603}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Texas Tech University'}
          position={{lat: 33.5843, lng: -101.8783}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Midwestern State University'}
          position={{lat: 33.8714, lng: -98.5216}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Stephen F. Austin University'}
          position={{lat: 31.6206, lng: -94.6451}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Texas Southern University'}
          position={{lat: 29.7214, lng: -95.3593}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Texas Woman\'s University'}
          position={{lat: 33.2263, lng: -97.1275}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Tarleton State University'}
          position={{lat: 32.2150, lng: -98.2151}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Baylor University'}
          position={{lat: 31.5489, lng: -97.1131}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Dallas Baptist University'}
          position={{lat: 32.7101, lng: -96.9470}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Rice University'}
          position={{lat: 29.7174, lng: -95.4018}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'St. Edward\'s University'}
          position={{lat: 30.2303, lng: -97.7538}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Southern Methodist University'}
          position={{lat: 32.8412, lng: -96.7845}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Texas Christian University'}
          position={{lat: 32.7096, lng: -97.3636}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'University of the Incarnate Word'}
          position={{lat: 29.4676, lng: -98.4676}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Houston Baptist University'}
          position={{lat: 29.6952, lng: -95.5154}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Hardin-Simmons University'}
          position={{lat: 32.4769, lng: -99.7341}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Howard Payne University'}
          position={{lat: 31.7158, lng: -98.9872}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'East Texas Baptist University'}
          position={{lat: 32.5558, lng: -94.3734}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Lubbock Christian University'}
          position={{lat: 33.5742, lng: -101.9336}}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBy7uynHAcp4OjXZ1Jq6eChQ2bVIxlNieQ'
})(MapContainer);