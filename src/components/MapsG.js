import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Marker, Popup, NavigationControl, FullscreenControl, FlyToInterpolator} from 'react-map-gl';

import ControlPanel from '../components/pages/control-panel';
import CityPin from './city-pin';
import CityInfo from './city-info';
import CITIES from './cities1.json';
import ReactMapGL from "./pages/Home";
import norveg from "../imagesSrc/pointer.png";
import {Link} from 'react-router-dom';
import {GeoObject} from "react-yandex-maps";
import MyMapController from "./my-map-controller";
const TOKEN = 'pk.eyJ1IjoibGlsemUiLCJhIjoiY2p1bXRxbHd5MW9hbTN5bjd4MDNxem5xbSJ9.xcVxKHnQHgdZQvE1MInlKw'; // Set your mapbox token here

const fullscreenControlStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const navStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px'
};
const mapController = new MyMapController();

export default class MapsG extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 48.0,
                longitude: 40.0,
                zoom: 4,
                bearing: 0,
                pitch: 0
            },
            popupInfo: null
        };
    }
    _onViewportChange = viewport => this.setState({
        viewport: {...this.state.viewport, ...viewport}
    });
    show = () => {
        console.log(this.state.show);
        const {show} = this.state;
        this.setState({
            show:true
        });
    };

    _goToViewport = ({longitude, latitude}) => {
        this._onViewportChange({
            longitude,
            latitude,
            zoom: 7,
            transitionInterpolator: new FlyToInterpolator(),
            transitionDuration: 3000
        });
    };
    _updateViewport = (viewport) => {
        this.setState({viewport});
    }

    _renderCityMarker = (city, index) => {
        return (
            <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
                <div>You are here</div>
            </Marker>
        );
    }

    _renderPopup() {
        const {popupInfo,show} = this.state;
        const mapController = new MyMapController();

        return popupInfo && (
            <Popup tipSize={5}
                   anchor="top"
                   longitude={popupInfo.longitude}
                   latitude={popupInfo.latitude}
                   closeOnClick={false}
                   onClose={() => this.setState({popupInfo: null})} >
                <CityInfo info={popupInfo} />
            </Popup>
        );
    }

    render() {

        const {viewport} = this.state;
        const France =( function (e) {

            document.location.href='/france'});
        const Germany =( function (e) {

            document.location.href='/germany'});
        const Belgium =( function (e) {

            document.location.href='/belgium'});
        const Austria =(function(e) {
            document.location.href='/austria'
        })
        const Switzerland =(function(e) {
            document.location.href='/switzerland'
        })
        const Denmark =(function(e) {
            document.location.href='/denmark'
        })
        const Estonia =(function(e) {
            document.location.href='/estonia'
        })
        const Sweden =(function(e) {
            document.location.href='/sweden'
        })
        const Spain =(function(e) {
            document.location.href='/spain'
        })

        return (
            <div className="overflow">
            <MapGL
                {...viewport}
                width={2500}
                height={500}

                mapStyle={'mapbox://styles/mapbox/basic-v9'}
                onViewportChange={this._onViewportChange}
                mapboxApiAccessToken={TOKEN} >

                {/*{ CITIES.map(this._renderCityMarker) }*/}

                <Marker  latitude={47.85658} longitude={9.5} offsetLeft={-20} offsetTop={-10} height={10}>
               <img onClick={France} className="pulse" src={norveg }/>
                    <h3 className="hc">Франция</h3>
                </Marker>

                <Marker  latitude={51.3} longitude={16.9} offsetLeft={-20} offsetTop={-10} captureScroll={true}>
                    <img onClick={Germany} className="pulse" src={norveg }/>
                    <h3 className="hc">Германия</h3>
                </Marker>
                <Marker  latitude={50.78} longitude={11.45} offsetLeft={-20} offsetTop={-10} captureScroll={true}>
                    <img onClick={Belgium} className="pulse" src={norveg }/>
                    <h3 className="hc">Бельгия</h3>
                </Marker>
                <Marker  latitude={47.62694} longitude={21} offsetLeft={-20} offsetTop={-10} captureScroll={false}>
                    <img onClick={Austria} className="pulse" src={norveg }/>
                    <h3 className="hc">Австрия</h3>
                </Marker>

                <Marker  latitude={46.89732} longitude={15} offsetLeft={-20} offsetTop={-10} captureScroll={false}>
                    <img onClick={Switzerland} className="pulse" src={norveg }/>
                    <h3 className="hc">Швейцария</h3>
                </Marker>
                <Marker  latitude={56} longitude={16.8032} offsetLeft={-20} offsetTop={-10} captureScroll={false}>
                    <img onClick={Denmark} className="pulse" src={norveg }/>
                    <h3 className="hc">Дания</h3>
                </Marker>
                <Marker  latitude={59} longitude={32.6092} offsetLeft={-20} offsetTop={-10} captureScroll={false}>
                    <img onClick={Estonia} className="pulse" src={norveg }/>
                    <h3 className="hc">Эстония</h3>
                </Marker>
                <Marker  latitude={64.99572} longitude={24.4892} offsetLeft={-20} offsetTop={-10} captureScroll={false}>
                    <img onClick={Sweden} className="pulse" src={norveg }/>
                    <h3 className="hc">Швеция</h3>
                </Marker>
                <Marker  latitude={41.68333} longitude={2.7929} offsetLeft={-20} offsetTop={-10} captureScroll={false}>
                    <img onClick={Spain} className="pulse" src={norveg }/>
                    <h3 className="hc">Испания</h3>
                </Marker>
                {/*{this._renderPopup()}*/}

                <div className="fullscreen" style={fullscreenControlStyle}>
                    <FullscreenControl />
                </div>
                <div className="nav" style={navStyle}>
                    <NavigationControl onViewportChange={this._updateViewport} />
                </div>
                {/*{ CITIES.filter(city => city.city==='Франция').map(handleClick) }*/}


            </MapGL>
            <ControlPanel containerComponent={this.props.containerComponent}
        onViewportChange={this._goToViewport} />
            </div>
        );
    }

}

export function renderToDom(container) {
    render(<MapsG/>, container);
}