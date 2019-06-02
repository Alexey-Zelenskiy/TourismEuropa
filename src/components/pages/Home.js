import React, {Component} from 'react';
import ReactMapGL,{FlyToInterpolator,Marker,Popup, NavigationControl} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import CITIES from '../cities.json';
import {Link} from 'react-router-dom';
import {withAuth} from '@okta/okta-react';
import image from "../../images/test2.jpg";
import image4 from "../../images/france.jpg";
import image1 from "../../images/pic02.jpg";
import image5 from "../../images/world3.jpg";
import image6 from "../../images/wold2.jpg";
import CityPin from '../city-pin';
import CityInfo from '../city-info';
import image7 from "../../images/world3.jpg";
import image2 from "../../images/pic03.jpg";
import image3 from "../../images/pic04.jpg";
import austria from "../../imagesSrc/Austria/Vena.jpg";
import belgium from "../../imagesSrc/Belguim/belgiya.jpg";
import germany from "../../imagesSrc/Germany/germany.jpg";
import monaco from "../../imagesSrc/monaco.jpg";
import switzerland from "../../imagesSrc/switzerland.jpg";
import danya from "../../imagesSrc/danya.jpg";
import island from "../../imagesSrc/island.jpg";
import latvya from "../../imagesSrc/latvya.jpg";
import estonia from "../../imagesSrc/estonia.jpg";
import sweden from "../../imagesSrc/sweden.jpg";
import france from '../../imagesSrc/France/france.jpg'
import norveg from "../../imagesSrc/norveg.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    YMaps,
    Map,
    GeolocationControl,
    GeoObject,
    RouteEditor,
    FullscreenControl,
    SearchControl, TypeSelector
} from 'react-yandex-maps';
import Country_Europa from "./Country";
import Navbar from "../layout/Navbar";
import Modal from "../Template";
import ControlPanel from "./control-panel";
import MyMapController from "../my-map-controller";
import MapsG from "../MapsG";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

const CountryEurop_Western = [
    {
        link: '/austria',
        label: 'Австрия',
        remote: austria

    },
    {
        link: '/belgium',
        label: 'Бельгия',
        remote: belgium

    },
    {
        link: '/germany',
        label: 'Германия',
        remote: germany
    }
    ,
    {
        link: '/monaco',
        label: 'Монако',
        remote: monaco
    },
    {
        link: '/france',
        label: 'Франция',
        remote: france
    }
    ,
    {
        link: '/switzerland',
        label: 'Швейцария',
        remote: switzerland
    }

];
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
const CountryEurop_North = [

    {
        link: '/denmark',
        label: 'Дания',
        remote: danya

    },

    {
        link: '/iceland',
        label: 'Исландия',
        remote: island
    },
    {
        link: '/latvia',
        label: 'Латвия',
        remote: latvya
    }
    ,
    {
        link: '/estonia',
        label: 'Эстония',
        remote: estonia
    }
    ,
    {
        link: '/sweden',
        label: 'Швеция',
        remote: sweden
    }
    ,
    {
        link: '/norway',
        label: 'Норвегия',
        remote: norveg
    }
];


class Home extends Component {

    state = {
        width: 1250,
        height: 500,
        viewport: {
            latitude: 48.0,
            longitude: 11.30,
            zoom: 1,
            language:"ru"

        }
    };
    _renderCityMarker = (city, index) => {
        return (
            <Marker
                key={`marker-${index}`}
                longitude={city.longitude}
                latitude={city.latitude} >
                <CityPin size={20} onClick={() => this.setState({popupInfo: city})} />
            </Marker>
        );
    }
    _renderPopup() {
        const {popupInfo} = this.state;

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
    _onViewportChange = viewport => this.setState({
        viewport: {...this.state.viewport, ...viewport}
    });

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
    onOpens = () => {
        console.log(this.state.onOpens);
        this.setState({onOpens: true});
    };
    render() {

        const mapState = {
            center: [48.0, 11.30],
            zoom:3,
        };
        const {viewport, settings} = this.state;
        const handleClick =( function (e) {

            document.location = e.get('target').properties.get('href')});


        const {width, height,onOpens} = this.state;
        const mapController = new MyMapController();
        const transformRequest = (url, resourceType) => {
            if (resourceType === 'Tile' && url.match('yourTileSource.com')) {
                return {
                    url: url,
                    headers: { 'Authorization': 'Lilze ' + 'pk.eyJ1IjoibGlsemUiLCJhIjoiY2p1bXRxbHd5MW9hbTN5bjd4MDNxem5xbSJ9.xcVxKHnQHgdZQvE1MInlKw' }
                }
            }
        }

        return (
            <div className="App">
                <Navbar/>
                <section id="banner">
                    <div className="content">
                        <header>
                            <h2>Городской туризм - <h1>форма познавательного отдыха</h1></h2>
                            <p className="p">Любите путешествовать?<br/>
                                Тогда этот сайт для вас.</p>
                        </header>
                        <span className="image"><img src={image} alt=""/></span>
                    </div>
                    <a href="#one" className="goto-next scrolly">Next</a>
                </section>
                <section id="one" className="spotlight style1 bottom">
                            <span className="image fit main"><img src={image6} alt=""/>
                            </span>
                    <div className="content">
                        <div className="container">
                            <div className="row">

                                    <header>
                                        <p className="p2">Городской туризм – это посещении крупных населенных пунктов в
                                            туристских целях, мы невольно представляем себе образы тех или иных городов.
                                            Все зримые формы городов несут на себе отпечаток судьбы города и его
                                            жителей. Города производят впечатление своей неповторимостью. Неистощимый
                                            поток туристов в Венецию объясняется больше уникальным положением этого
                                            города, нежели его исторической ценностью.</p>



                                    <p className="p2">В последнее время проблемам городского туризма как одному из перспективных
                                        направлений туристской деятельности уделяется большое внимание на международном,
                                        региональных и национальных уровнях. За последние годы его объем более чем
                                        удвоился. На городской туризм в Европе пришлось 38% всех туристских потоков.
                                        Роль и значение городов в развитии туризма неуклонно повышаются. Города –
                                        туристские центры чрезвычайно разнообразны. Существует много классификаций
                                        туристских центров в зависимости от выбранного основания.</p>


                                    <p className="p2">Наиболее крупным является деление городских туристских центров на две группы:
                                        Города, где туристская индустрия выполняет градообразующую функцию. К этой
                                        категории относятся малые, реже – средние города. Для таких туристских центров
                                        характерна ориентация на определенный тип потребителя с соответствующим уровнем
                                        дохода и целями путешествия. Экономика такого города попадает в зависимость не
                                        только от конъюнктуры туристского рынка в целом, но и от состояния туристского
                                        спроса, что делает городскую систему неустойчивой.</p>
                                    </header>

                            </div>
                        </div>
                    </div>
                    <a href="#three" className="goto-next scrolly">Next</a>
                </section>
                {/*<section id="two" className="spotlight style2 right">*/}
                    {/*<span className="image fit main"><img src={image5} alt=""/></span>*/}

                    {/*<div className="content">*/}
                        {/*<header>*/}
                            {/*<h2>Европа</h2>*/}
                            {/*<p className="p">Европа туристическая — разноцветный благоухающий букет стран, городов и курортов.*/}
                                {/*Если говорить о видах отдыха, то едва ли найдётся занятие, которое невозможно было*/}
                                {/*бы найти в этом регионе.</p>*/}
                        {/*</header>*/}
                        {/*/!*<p className="p">Кроме всего прочего, Европа настолько разнопланова, что любой турист сможет найти себе*!/*/}
                            {/*/!*нужное направление по степени, так скажем, отдалённости от родных пенатов.</p>*!/*/}
                        {/*<ul className="actions">*/}
                            {/*<li><a href="/country" className="button">Страны Европы</a></li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                    {/*<a href="#three" className="goto-next scrolly">Next</a>*/}
                {/*</section>*/}
                <section id="three" className="spotlight style3 left">
                    <span className="image fit main bottom"><img src={france} alt=""/></span>
                    <div className="content">
                        <header>
                            <h2>Франция</h2>
                            <p className="p">Элегантная красавица-Франция — это отдых с шармом: насыщенная «экскурсионка», отдых на
                                утонченном Лазурном Берегу, знаменитые музеи, гастрономические провинции и замки Луары.
                            </p>
                        </header>
                        <p></p>
                        <ul className="actions">
                            <li><a href="/france" className="button">Франция</a></li>
                        </ul>
                    </div>

                </section>

                {/*<section id="four" className="wrapper style1 special fade-up">*/}
                    {/*<div className="container">*/}
                        {/*<header className="major">*/}
                            {/*<h2>Карта Европы</h2>*/}
                        {/*</header>*/}
                        {/*<div className="box alt">*/}
                            {/*<div className="row uniform">*/}
                                {/*<YMaps>*/}
                                    {/*<Map defaultState={mapState} width={width}*/}
                                         {/*height={height}>*/}

                                        {/*<GeoObject onClick={handleClick}*/}
                                            {/*geometry={{*/}
                                                {/*type: 'Point',*/}
                                                {/*coordinates: [46.0, 2.0],*/}
                                            {/*}}*/}
                                            {/*properties={{*/}
                                                {/*hintContent: 'Франция',*/}
                                                {/*href:"/france"*/}
                                            {/*}*/}
                                            {/*}*/}
                                            {/*modules={*/}
                                                {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                            {/*}*/}

                                        {/*/>*/}
                                        {/*<GeoObject onClick={handleClick}*/}
                                            {/*geometry={{*/}
                                                {/*type: 'Point',*/}
                                                {/*coordinates: [51.5, 10.5],*/}
                                            {/*}}*/}
                                            {/*properties={{*/}
                                                {/*hintContent: 'Германия',*/}
                                                {/*href:"/germany"*/}
                                            {/*}}*/}
                                            {/*modules={*/}
                                                {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                            {/*}*/}
                                        {/*/>*/}
                                        {/*<GeoObject onClick={handleClick}*/}
                                                   {/*geometry={{*/}
                                                       {/*type: 'Point',*/}
                                                       {/*coordinates: [47.33333 , 13.33333 ],*/}
                                                   {/*}}*/}
                                                   {/*properties={{*/}
                                                       {/*hintContent: 'Австрия',*/}
                                                       {/*href:"/austria"*/}
                                                   {/*}}*/}
                                                   {/*modules={*/}
                                                       {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                                   {/*}*/}
                                        {/*/>*/}
                                        {/*<GeoObject onClick={handleClick}*/}
                                                   {/*geometry={{*/}
                                                       {/*type: 'Point',*/}
                                                       {/*coordinates: [50.83333 , 4.0],*/}
                                                   {/*}}*/}
                                                   {/*properties={{*/}
                                                       {/*hintContent: 'Бельгия',*/}
                                                       {/*href:"/belgium"*/}
                                                   {/*}}*/}
                                                   {/*modules={*/}
                                                       {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                                   {/*}*/}
                                        {/*/>*/}
                                        {/*<GeoObject onClick={handleClick}*/}
                                                   {/*geometry={{*/}
                                                       {/*type: 'Point',*/}
                                                       {/*coordinates: [43.73141, 7.41903],*/}
                                                   {/*}}*/}
                                                   {/*properties={{*/}
                                                       {/*hintContent: 'Монако',*/}
                                                       {/*href:"/monaco"*/}
                                                   {/*}}*/}
                                                   {/*modules={*/}
                                                       {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                                   {/*}*/}
                                        {/*/>*/}
                                        {/*<GeoObject onClick={handleClick}*/}
                                                   {/*geometry={{*/}
                                                       {/*type: 'Point',*/}
                                                       {/*coordinates: [47.00016,8.01427],*/}
                                                   {/*}}*/}
                                                   {/*properties={{*/}
                                                       {/*hintContent: 'Швейцария',*/}
                                                       {/*href:"/switzerland"*/}
                                                   {/*}}*/}
                                                   {/*modules={*/}
                                                       {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                                   {/*}*/}
                                        {/*/>*/}
                                        {/*<GeoObject onClick={handleClick}*/}
                                                   {/*geometry={{*/}
                                                       {/*type: 'Point',*/}
                                                       {/*coordinates: [56.0, 10.0],*/}
                                                   {/*}}*/}
                                                   {/*properties={{*/}
                                                       {/*hintContent: 'Дания',*/}
                                                       {/*href:"/denmark"*/}
                                                   {/*}}*/}
                                                   {/*modules={*/}
                                                       {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                                   {/*}*/}
                                        {/*/>*/}
                                        {/*<GeoObject onClick={handleClick}*/}
                                                   {/*geometry={{*/}
                                                       {/*type: 'Point',*/}
                                                       {/*coordinates: [65.0, -18.0],*/}
                                                   {/*}}*/}
                                                   {/*properties={{*/}
                                                       {/*hintContent: 'Исландия',*/}
                                                       {/*href:"/iceland"*/}
                                                   {/*}}*/}
                                                   {/*modules={*/}
                                                       {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                                   {/*}*/}
                                        {/*/>*/}
                                        {/*<GeoObject onClick={handleClick}*/}
                                                   {/*geometry={{*/}
                                                       {/*type: 'Point',*/}
                                                       {/*coordinates: [57.0, 25.0],*/}
                                                   {/*}}*/}
                                                   {/*properties={{*/}
                                                       {/*hintContent: 'Латвия',*/}
                                                       {/*href:"/latvia"*/}
                                                   {/*}}*/}
                                                   {/*modules={*/}
                                                       {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                                   {/*}*/}
                                        {/*/>*/}
                                        {/*<GeoObject onClick={handleClick}*/}
                                                   {/*geometry={{*/}
                                                       {/*type: 'Point',*/}
                                                       {/*coordinates: [59.0, 26.0],*/}
                                                   {/*}}*/}
                                                   {/*properties={{*/}
                                                       {/*hintContent: 'Эстония',*/}
                                                       {/*href:"/estonia"*/}
                                                   {/*}}*/}
                                                   {/*modules={*/}
                                                       {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                                   {/*}*/}
                                        {/*/>*/}
                                        {/*<GeoObject onClick={handleClick}*/}
                                                   {/*geometry={{*/}
                                                       {/*type: 'Point',*/}
                                                       {/*coordinates: [62.0, 15.0],*/}
                                                   {/*}}*/}
                                                   {/*properties={{*/}
                                                       {/*hintContent: 'Швеция',*/}
                                                       {/*href:"/sweden"*/}
                                                   {/*}}*/}
                                                   {/*modules={*/}
                                                       {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                                   {/*}*/}
                                        {/*/>*/}
                                        {/*<GeoObject onClick={handleClick}*/}
                                                   {/*geometry={{*/}
                                                       {/*type: 'Point',*/}
                                                       {/*coordinates: [51.5, 10.5],*/}
                                                   {/*}}*/}
                                                   {/*properties={{*/}
                                                       {/*hintContent: 'Германия',*/}
                                                       {/*href:"/germany"*/}
                                                   {/*}}*/}
                                                   {/*modules={*/}
                                                       {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                                   {/*}*/}
                                        {/*/>*/}
                                        {/*<RouteEditor*/}
                                            {/*data={{title: 'Click this to create a route'}}*/}
                                            {/*options={{float: 'right'}}*/}
                                            {/*properties={{*/}
                                                {/*balloonContentBody:*/}
                                                    {/*'This is balloon is pre-loaded with initial Yandex.Maps API request',*/}
                                            {/*}}*/}
                                        {/*/>*/}
                                        {/*<FullscreenControl/>*/}
                                        {/*<SearchControl*/}
                                            {/*options={{*/}
                                                {/*noPlacemark: true,*/}
                                                {/*placeholderContent: 'This is search control',*/}
                                            {/*}}/>*/}
                                        {/*<TypeSelector defaultState={{expanded: true}}/>*/}
                                    {/*</Map>*/}
                                {/*</YMaps>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<footer className="major">*/}
                            {/*<ul className="actions">*/}
                                {/*<li><a href="/country" className="button">Страны Европы</a></li>*/}
                            {/*</ul>*/}
                        {/*</footer>*/}
                    {/*</div>*/}
                {/*</section>*/}
                {/*<section id="tests2">*/}
                    {/*<div className="content">*/}
                        {/*<header className="major">*/}

                            {/*<h2>Карта Мира</h2>*/}


                        {/*</header>*/}
                        {/*<YMaps>*/}
                            {/*<Map defaultState={mapState} width={width}*/}
                                 {/*height={height}>*/}
                                {/*<GeoObject onClick={handleClick}*/}
                                           {/*geometry={{*/}
                                               {/*type: 'Point',*/}
                                               {/*coordinates: [46.0, 2.0],*/}
                                           {/*}}*/}
                                           {/*properties={{*/}
                                               {/*hintContent: 'Франция',*/}
                                               {/*href:"/france",*/}
                                           {/*}*/}
                                           {/*}*/}
                                           {/*modules={*/}
                                               {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                           {/*}*/}

                                {/*/>*/}
                                {/*/!*<div class="pulse">Click me!</div>*!/*/}
                                {/*<GeoObject onClick={handleClick}*/}
                                           {/*geometry={{*/}
                                               {/*type: 'Point',*/}
                                               {/*coordinates: [51.5, 10.5],*/}
                                           {/*}}*/}
                                           {/*properties={{*/}
                                               {/*hintContent: 'Германия',*/}
                                               {/*href:"/germany"*/}
                                           {/*}}*/}
                                           {/*modules={*/}
                                               {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                           {/*}*/}
                                {/*/>*/}
                                {/*<GeoObject onClick={handleClick}*/}
                                           {/*geometry={{*/}
                                               {/*type: 'Point',*/}
                                               {/*coordinates: [47.33333 , 13.33333 ],*/}
                                           {/*}}*/}
                                           {/*properties={{*/}
                                               {/*hintContent: 'Австрия',*/}
                                               {/*href:"/austria"*/}
                                           {/*}}*/}
                                           {/*modules={*/}
                                               {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                           {/*}*/}
                                {/*/>*/}
                                {/*<GeoObject onClick={handleClick}*/}
                                           {/*geometry={{*/}
                                               {/*type: 'Point',*/}
                                               {/*coordinates: [50.83333 , 4.0],*/}
                                           {/*}}*/}
                                           {/*properties={{*/}
                                               {/*hintContent: 'Бельгия',*/}
                                               {/*href:"/belgium"*/}
                                           {/*}}*/}
                                           {/*modules={*/}
                                               {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                           {/*}*/}
                                {/*/>*/}
                                {/*<GeoObject onClick={handleClick}*/}
                                           {/*geometry={{*/}
                                               {/*type: 'Point',*/}
                                               {/*coordinates: [43.73141, 7.41903],*/}
                                           {/*}}*/}
                                           {/*properties={{*/}
                                               {/*hintContent: 'Монако',*/}
                                               {/*href:"/monaco"*/}
                                           {/*}}*/}
                                           {/*modules={*/}
                                               {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                           {/*}*/}
                                {/*/>*/}
                                {/*<GeoObject onClick={handleClick}*/}
                                           {/*geometry={{*/}
                                               {/*type: 'Point',*/}
                                               {/*coordinates: [47.00016,8.01427],*/}
                                           {/*}}*/}
                                           {/*properties={{*/}
                                               {/*hintContent: 'Швейцария',*/}
                                               {/*href:"/switzerland"*/}
                                           {/*}}*/}
                                           {/*modules={*/}
                                               {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                           {/*}*/}
                                {/*/>*/}
                                {/*<GeoObject onClick={handleClick}*/}
                                           {/*geometry={{*/}
                                               {/*type: 'Point',*/}
                                               {/*coordinates: [56.0, 10.0],*/}
                                           {/*}}*/}
                                           {/*properties={{*/}
                                               {/*hintContent: 'Дания',*/}
                                               {/*href:"/denmark"*/}
                                           {/*}}*/}
                                           {/*modules={*/}
                                               {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                           {/*}*/}
                                {/*/>*/}
                                {/*<GeoObject onClick={handleClick}*/}
                                           {/*geometry={{*/}
                                               {/*type: 'Point',*/}
                                               {/*coordinates: [65.0, -18.0],*/}
                                           {/*}}*/}
                                           {/*properties={{*/}
                                               {/*hintContent: 'Исландия',*/}
                                               {/*href:"/iceland"*/}
                                           {/*}}*/}
                                           {/*modules={*/}
                                               {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                           {/*}*/}
                                {/*/>*/}
                                {/*<GeoObject onClick={handleClick}*/}
                                           {/*geometry={{*/}
                                               {/*type: 'Point',*/}
                                               {/*coordinates: [57.0, 25.0],*/}
                                           {/*}}*/}
                                           {/*properties={{*/}
                                               {/*hintContent: 'Латвия',*/}
                                               {/*href:"/latvia"*/}
                                           {/*}}*/}
                                           {/*modules={*/}
                                               {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                           {/*}*/}
                                {/*/>*/}
                                {/*<GeoObject onClick={handleClick}*/}
                                           {/*geometry={{*/}
                                               {/*type: 'Point',*/}
                                               {/*coordinates: [59.0, 26.0],*/}
                                           {/*}}*/}
                                           {/*properties={{*/}
                                               {/*hintContent: 'Эстония',*/}
                                               {/*href:"/estonia"*/}
                                           {/*}}*/}
                                           {/*modules={*/}
                                               {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                           {/*}*/}
                                {/*/>*/}
                                {/*<GeoObject onClick={handleClick}*/}
                                           {/*geometry={{*/}
                                               {/*type: 'Point',*/}
                                               {/*coordinates: [62.0, 15.0],*/}
                                           {/*}}*/}
                                           {/*properties={{*/}
                                               {/*hintContent: 'Швеция',*/}
                                               {/*href:"/sweden"*/}
                                           {/*}}*/}
                                           {/*modules={*/}
                                               {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                           {/*}*/}
                                {/*/>*/}
                                {/*<GeoObject onClick={handleClick}*/}
                                           {/*geometry={{*/}
                                               {/*type: 'Point',*/}
                                               {/*coordinates: [51.5, 10.5],*/}
                                           {/*}}*/}
                                           {/*properties={{*/}
                                               {/*hintContent: 'Германия',*/}
                                               {/*href:"/germany"*/}
                                           {/*}}*/}
                                           {/*modules={*/}
                                               {/*['geoObject.addon.balloon', 'geoObject.addon.hint']*/}
                                           {/*}*/}
                                {/*/>*/}
                                {/*<RouteEditor*/}
                                    {/*data={{title: 'Click this to create a route'}}*/}
                                    {/*options={{float: 'right'}}*/}
                                    {/*properties={{*/}
                                        {/*balloonContentBody:*/}
                                            {/*'This is balloon is pre-loaded with initial Yandex.Maps API request',*/}
                                    {/*}}*/}
                                {/*/>*/}
                                {/*<FullscreenControl/>*/}
                                {/*<SearchControl*/}
                                    {/*options={{*/}
                                        {/*noPlacemark: true,*/}
                                        {/*placeholderContent: 'This is search control',*/}
                                    {/*}}/>*/}
                                {/*<TypeSelector defaultState={{expanded: true}}/>*/}
                            {/*</Map>*/}
                        {/*</YMaps>*/}

                    {/*</div>*/}
                {/*</section>*/}
                <section id="tests2">
                    <div className="content">
                        <header className="major">
                            <h2>Карта Мира</h2>
                        </header>
                        <div  className="mapp" style={{height:1000}}>
                            {/*<ReactMapGL*/}
                                {/*{...viewport}*/}
                                {/*language={'ru'}*/}
                                {/*{...settings}*/}
                                {/*controller={mapController}*/}
                                {/*width={2500}*/}
                                {/*height={500}*/}
                                {/*mapStyle={'mapbox://styles/mapbox/basic-v9'}*/}
                                {/*onViewportChange={this._onViewportChange}*/}
                                {/*dragToRotate={false}*/}
                                {/*mapboxApiAccessToken={'pk.eyJ1IjoibGlsemUiLCJhIjoiY2p1bXRxbHd5MW9hbTN5bjd4MDNxem5xbSJ9.xcVxKHnQHgdZQvE1MInlKw'}*/}

                            {/*/>*/}

                            {/*<ControlPanel containerComponent={this.props.containerComponent}*/}
                                          {/*onViewportChange={this._goToViewport} />*/}
                                          <MapsG/>
                        </div>


                    </div>
                </section>
                {/*<section id="five" className="wrapper style2 special fade">*/}
                {/*<div className="container">*/}
                {/*<header>*/}
                {/*<h2>Здесь вы можете оставить свой отзыв</h2>*/}
                {/*</header>*/}
                {/*<form method="post" action="#" className="container 50%">*/}
                {/*<div className="row uniform 50%">*/}
                {/*<div className="8u 12u$(xsmall)"><input type="email" name="email" id="email"*/}
                {/*placeholder="Введите отзыв"/></div>*/}
                {/*<div className="4u$ 12u$(xsmall)"><input type="submit" value="Отправить"*/}
                {/*className="fit special"/>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</form>*/}
                {/*</div>*/}
                {/*</section>*/}

                <footer id="footer">
                    <ul className="icons">
                        <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a>
                        </li>
                        <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a>
                        </li>
                        <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a>
                        </li>
                        <li><a href="#" className="icon alt fa-instagram"><span
                            className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a>
                        </li>
                        <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a>
                        </li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Untitled. All rights reserved.</li>
                        <li>Автор: <a href="https://vk.com/lil_ze   ">Алексей Зеленский</a></li>
                    </ul>
                </footer>
            </div>
        );
    }
}
const mapStateToProps = store => {
    console.log(store) // посмотрим, что же у нас в store?
    return {
        user: store.user,
    }
}
export default connect(mapStateToProps)(Home);