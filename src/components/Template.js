import React from 'react'
import Navbar from './pages/Countrys/Germany'
import {
  YMaps,
  Map,
  GeoObject,
  Placemark,
  RouteEditor,
  FullscreenControl,
  SearchControl,
  TypeSelector,
} from 'react-yandex-maps'
import up from '../imagesSrc/right.png'
import down from '../imagesSrc/left.png'
import icon from '../imagesSrc/menu-burger.png'
import menu from '../imagesSrc/menu.png'
import ReactWeather from 'react-open-weather'
//Optional include of the default css styles
import images from '../images/pic04.jpg'
import 'react-open-weather/lib/css/ReactWeather.css'
import norveg from '../imagesSrc/norveg.jpg'
import img1 from '../imagesSrc/Belguim/belgiya.jpg'
import Modal from 'react-responsive-modal'
import { Carousel } from 'react-responsive-carousel'
import Slider from './Slider'
import priroda from '../imagesSrc/Belguim/priroda.jpg'
import prazd from '../imagesSrc/Belguim/prazd.jpg'
import dostrop from '../imagesSrc/Belguim/dostopr.jpg'
import Country_Europa from './pages/Countrys/handler_Country/Country_Europa'
import Photo from './PhotoTemplate/Photo'
import { connect } from 'react-redux'
import center from '../imagesSrc/Belguim/center.jpg'
import img from '../imagesSrc/Austria/Austria.jpg'
import Citys from './Citys'
import image1 from '../images/pic02.jpg'
import image from '../images/pic01.jpg'
import Lions from './Lions'
import CityLions from './CityLions'
import Test from './Test'

const mapStateToProps = (state) => {
  return {
    oneState: state.states.ones,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPhoto: (click) => {
      const check = dispatch({
        type: `${click}`,
        payload: click,
      })
    },
  }
}


class Template extends React.Component {

  state = {
    showMap: false,
    showCity: true,
    next: true,
    show: false,
    width: 1030,
    height: 500,
    showWith_text: false,
    navigationShow: false,
    showMenu: false,
    open: false,
    openPhoto: false,
    showLoins: false,
    onOpen: false,
    texts: {
      showText: false,

    },
    photos: {},
  }

  toggleMap() {
    console.log(this.state.showMap)
    const { showMap, showCity } = this.state
    this.setState({
      showMap: !showMap,
      show: false,
      showCity: false,
      cityPhoto: false,
      cityLions: false,
    })
  }

  cityLions() {
    console.log(this.state.cityLions)
    const { cityLions, showCity } = this.state
    this.setState({
      cityLions: !cityLions,
      show: false,
      showCity: false,
      showMap: false,
      cityPhoto: false,
    })
  }

  cityPhoto() {
    console.log(this.state.cityPhoto)
    const { cityPhoto, showCity } = this.state
    this.setState({
      cityPhoto: !cityPhoto,
      show: false,
      showCity: false,
      showMap: false,
      cityLions: false,
    })
  }


  navigationShow() {
    console.log(this.state.navigationShow)
    const { navigationShow } = this.state
    this.setState({
      navigationShow: !navigationShow,
      show: false,
      showPhoto: false,
      showLoins: false,
      cityLions: false,
      showCity: true,
      cityPhoto: false,
      onOpenCityModal: false,
    })

  }

  showWith_text() {
    console.log(this.state.showWith_text)
    const { showWith_text } = this.state
    this.setState({
      showWith_text: !showWith_text,
    })
  }

  show() {
    console.log(this.state.show)
    const { show } = this.state
    this.setState({
      show: !show,
      navigationShow: false,
      showPhoto: false,
      showLoins: false,
    })
  }

  showPhoto = () => {
    console.log(this.state.showPhoto)
    const { showPhoto } = this.state
    this.setState({
      showPhoto: !showPhoto,
      navigationShow: false,
      show: false,
      showLoins: false,
    })
  }
  showLoins = () => {
    console.log(this.state.showLoins)
    const { showLoins } = this.state
    this.setState({
      showLoins: !showLoins,
      navigationShow: false,
      show: false,
      showPhoto: false,
      showTest: false,
    })
  }
  showTest = () => {
    console.log(this.state.showTest)
    const { showTest } = this.state
    this.setState({
      showTest: !showTest,
      navigationShow: false,
      show: false,
      showPhoto: false,
      showLoins: false,
    })
  }


  showCity() {
    console.log(this.state.showCity)
    const { showCity } = this.state
    this.setState({
      showCity: true,
      showMap: false,
      showLoins: false,
      cityLions: false,
      cityPhoto: false,

    })
  }

  openMenu() {
    console.log(this.state.openMenu)
    const { openMenu } = this.state
    this.setState({
      openMenu: !openMenu,
    })
  }

  openMenuCity() {
    console.log(this.state.openMenuCity)
    const { openMenuCity } = this.state
    this.setState({
      openMenuCity: true,
      onOpenCityModal: true,

    })
  }

  showText() {
    console.log(this.state.showText)


  }

  onOpenModal = () => {
    this.setState({ open: true })
  }
  onOpen = () => {
    this.setState({ onOpen: true, onOpen2: true })
  }
  onOpen1 = () => {
    this.setState({ onOpen1: true, onOpen2: true })
  }
  onClose = () => {
    this.setState({ onOpen: false, onOpen1: false })
  }


  onCloseModal = () => {
    this.setState({ open: false })
  }

  componentWillReceiveProps = () => {
    this.setState({ photogr: this.props.oneState })
    console.log(this.state.photogr)
  }

  openModal() {
    this.setState({
      visible: true,
    })
  }

  closeModal() {
    this.setState({
      visible: false,
    })
  }


  onCloseCityModal = () => {
    this.setState({ onOpenCityModal: false })
  }

  render() {
    const { showMap, width, height, cityLions, showTest } = this.state
    const { show, showWith_text, navigationShow, showCity, showPhoto, showLoins, cityPhoto } = this.state
    const photo = this.props.jopa
    const { open, openMenu, openMenuCity, onOpenCityModal } = this.state
    const { showText, showText1, showText2, showText3, showText4, showText5, showText6, showText7 } = this.state
    let count = 1


    return (
      <div>
        <div id="main" className="wrapper style3">
          <div className="container">
            <header className="major">
              {/*<a href="#one" className="goto scrolly"><h2 id="countryName">{this.props.countryName} </h2></a>*/}
              <div id="tests">
                <div className="content">
                  <h3 className="h3">{this.props.countryName}</h3>
                  <ul className="actions2">
                    <li onClick={() => {
                      this.show()
                    }}><a href="#one" className="goto scrolly"><a className="button">О
                      стране</a></a></li>
                    <li><a href="#one" className="goto scrolly"><a className="button" onClick={() => {
                      this.openMenuCity()}}>Города</a></a>
                    </li>
                    <li><a href="#one" className="goto scrolly"><a className="button"
                                                                   onClick={() => {
                                                                     this.showPhoto()
                                                                   }}>Фотогалерея</a></a></li>
                    <li><a href="#one" className="goto scrolly"><a className="button"
                                                                   onClick={() => {
                                                                     this.showLoins()
                                                                   }}>Достопримечательности</a></a>
                    </li>
                    <li><a href="#one" className="goto scrolly">
                      <a onClick={() => {
                        this.showTest()
                      }} className="button">Тест</a></a></li>
                  </ul>
                </div>
              </div>
            </header>
            <div className="row 150%">
              <div className="8u 12u$(medium)">
                <section id="content">
                  <a className="image fit"><img src={this.props.photoCountry} alt=""/></a>
                </section>
              </div>
              <div className="4u$ 12u$(medium)">

                <section id="sidebar">
                  <section>
                    <h3 id="countryName">{this.props.countryName}</h3>
                    <p id="countryInfo">{this.props.countryInfo}</p>
                  </section>
                  <hr/>
                </section>

              </div>
            </div>
          </div>

        </div>
        <section id="one">
          <section id="two">
            <section id="resume">
              <div className="content">
                <div className="container">
                  <div className="countryTemplate">
                    <section>
                      {openMenuCity && <nav>
                        <Modal open={this.state.onOpenCityModal}
                               onClose={this.onCloseCityModal} center>
                          <section className="package-area section_gap_top">
                            <div className="container">
                              <div className="row d-flex justify-content-center">
                                <div className="ol-lg-12">
                                  <div className="main_title">
                                    <p>Выберите город</p>
                                  <br/>
                                    <span className="title-widget-bg"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div>
                                  <div className="single-package">
                                    <div className="thumb">
                                      <img onClick={() => {
                                        this.navigationShow()
                                      }} className="img-fluid" src={dostrop} alt=""/>
                                    </div>
                                    <h1 className="date"><br/><h3 id="countryName1">{this.props.cityName}</h3></h1>
                                    <div className="meta-top d-flex">
                                      {/*<p><span className="fa fa-location-arrow"></span> {this.props.cityName}</p>*/}
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="single-package">
                                    <div className="thumb">
                                      <img onClick={() => {
                                        this.navigationShow()
                                      }} className="img-fluid" src={dostrop} alt=""/>
                                    </div>
                                    <h1 className="date"><br/><h3 id="countryName1">{this.props.cityName}</h3></h1>
                                    <div className="meta-top d-flex">
                                      {/*<p><span className="fa fa-location-arrow"></span> {this.props.cityName}</p>*/}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </Modal>
                        {navigationShow &&
                        <div>
                          <div id="tests">
                            <div className="content">
                              <ul className="actions2">
                                <li onClick={() => {
                                  this.show()
                                }}><a className="button">О стране</a></li>
                                <li onClick={() => {
                                  this.openMenuCity()
                                }}><a className="button">Города</a></li>
                                <li><a className="button" onClick={() => {
                                  this.showPhoto()
                                }}>Фотогалерея</a></li>
                                <li><a className="button" onClick={() => {
                                  this.showLoins()
                                }}>Достопримечательности</a></li>
                                <li><a className="button" onClick={() => {
                                  this.showTest()
                                }}>Тест</a></li>
                              </ul>
                            </div>
                          </div>
                          <div id="about">
                            <YMaps>
                              <div className="map">
                                <section id="france">
                                  <div className="content">
                                    <ul className="actions1">
                                      <h3 className="h3">{this.props.cityName}</h3>
                                      <hr className="hr1"/>
                                      <li onClick={() => {
                                        this.showCity()
                                      }}><a className="button">Справочник по городу</a>
                                      </li>
                                      <li onClick={() => {
                                        this.toggleMap()
                                      }}><a className="button">Карта</a></li>
                                      {/*<li><a id="a1">Красивые места</a></li>*/}
                                      <li onClick={() =>
                                        this.cityPhoto()}>
                                        <a className="button">Фотогалерея</a></li>
                                      <li onClick={() => {
                                        this.cityLions()
                                      }}><a className="button">Достопримечательности</a>
                                      </li>
                                    </ul>
                                    {showCity &&
                                    <Citys
                                      cityName={this.props.cityName}
                                      info_city={this.props.info_city}
                                      info_city1={this.props.info_city1}
                                      info_city3={this.props.info_city3}
                                      Object1={this.props.Object1}
                                      info_city1_1={this.props.info_city1_1}
                                      Object2={this.props.Object2}
                                      info_city1_1_1={this.props.info_city1_1_1}
                                      info_city1_2={this.props.info_city1_2}
                                      info_city1_3={this.props.info_city1_3}
                                      info_city_4={this.props.info_city_4}
                                      info_city2={this.props.info_city2}
                                      info_city2_1={this.props.info_city2_1}
                                      countryNames={this.props.countryNames}
                                      countryNames1={this.props.countryNames1}


                                    />
                                    }


                                    {showMap &&
                                    <div className="mapa">
                                      <Map state={this.props.mapState} width={width}
                                           height={height}>
                                        <GeoObject onClick={() => {
                                          this.onOpen()
                                        }}
                                                   geometry={{
                                                     type: 'Point',
                                                     coordinates: [48.8582573, 2.2945111],
                                                   }}
                                                   properties={{
                                                     hintContent: 'Эйфелева башня',
                                                   }}
                                                   modules={
                                                     ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                                   }
                                        />
                                        <GeoObject onClick={() => {
                                          this.onOpen1()
                                        }}
                                                   geometry={{
                                                     type: 'Point',
                                                     coordinates: [48.8608322, 2.337985],
                                                   }}
                                                   properties={{
                                                     hintContent: 'Лувр',
                                                   }}
                                                   modules={
                                                     ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                                   }
                                        />
                                        <GeoObject onClick={() => {
                                          this.onOpen()
                                        }}
                                                   geometry={{
                                                     type: 'Point',
                                                     coordinates: [50.8948869, 4.3416006],
                                                   }}
                                                   properties={{
                                                     hintContent: 'ратуша Отель-де-Виль',
                                                   }}
                                                   modules={
                                                     ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                                   }
                                        />
                                        <GeoObject onClick={() => {
                                          this.onOpen1()
                                        }}
                                                   geometry={{
                                                     type: 'Point',
                                                     coordinates: [50.7948869, 4.1416006],
                                                   }}
                                                   properties={{
                                                     hintContent: 'Атомиум',
                                                   }}
                                                   modules={
                                                     ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                                   }
                                        />
                                        <GeoObject onClick={() => {
                                          this.onOpen()
                                        }}
                                                   geometry={{
                                                     type: 'Point',
                                                     coordinates: [52.5162746, 13.377704],
                                                   }}
                                                   properties={{
                                                     hintContent: 'Бранденбургские ворота',
                                                   }}
                                                   modules={
                                                     ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                                   }
                                        />
                                        <GeoObject onClick={() => {
                                          this.onOpen1()
                                        }}
                                                   geometry={{
                                                     type: 'Point',
                                                     coordinates: [52.522133, 13.414646],
                                                   }}
                                                   properties={{
                                                     hintContent: 'Александерплатц',
                                                   }}
                                                   modules={
                                                     ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                                   }
                                        />
                                        <GeoObject onClick={() => {
                                          this.onOpen()
                                        }}
                                                   geometry={{
                                                     type: 'Point',
                                                     coordinates: [40.4154234, -3.7072074],
                                                   }}
                                                   properties={{
                                                     hintContent: 'Плаза-Майор',
                                                   }}
                                                   modules={
                                                     ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                                   }
                                        />
                                        <GeoObject onClick={() => {
                                          this.onOpen1()
                                        }}
                                                   geometry={{
                                                     type: 'Point',
                                                     coordinates: [40.417955, -3.714312],
                                                   }}
                                                   properties={{
                                                     hintContent: 'Королевский дворец',
                                                   }}
                                                   modules={
                                                     ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                                   }
                                        />
                                        <RouteEditor
                                          data={{ title: 'Click this to create a route' }}
                                          options={{ float: 'right' }}
                                          properties={{
                                            balloonContentBody:
                                              'This is balloon is pre-loaded with initial Yandex.Maps API request',
                                          }}
                                        />
                                        <FullscreenControl/>
                                        <SearchControl
                                          options={{
                                            noPlacemark: true,
                                            placeholderContent: 'This is search control',
                                          }}/>
                                        <TypeSelector defaultState={{ expanded: true }}/>
                                        <Modal open={this.state.onOpen}
                                               onClose={this.onClose} center>
                                          <img src={this.props.photoLion} alt=""/>
                                          <h3 id="countryName"
                                              className="p">{this.props.lionName}</h3>
                                          <p id="countryInfo"
                                             className="p">{this.props.lionInfo}</p>
                                        </Modal>
                                        <Modal open={this.state.onOpen1}
                                               onClose={this.onClose} center>
                                          <img src={this.props.photoLion1} alt=""/>
                                          <h3 id="countryName"
                                              className="p">{this.props.lionName1}</h3>
                                          <p id="countryInfo"
                                             className="p">{this.props.lionInfo1}</p>
                                        </Modal>
                                      </Map>
                                    </div>}
                                    {cityLions && <CityLions
                                      photoLion={this.props.photoLion}
                                      lionName={this.props.lionName}
                                      lionInfo={this.props.lionInfo}
                                      photoLion1={this.props.photoLion1}
                                      lionName1={this.props.lionName1}
                                      lionInfo1={this.props.lionInfo1}

                                    />}
                                    {cityPhoto &&
                                    <Carousel infiniteLoop useKeyboardArrows autoPlay>
                                      <div>
                                        <img src={this.props.Cityimg1}/>
                                        <p className="p">
                                          {this.props.informationPhotoCity}
                                        </p>
                                      </div>
                                      <div>
                                        <img src={this.props.Cityimg2}/>
                                        <p className="p">
                                          {this.props.informationPhotoCity1}
                                        </p>
                                      </div>
                                      <div>
                                        <img src={this.props.Cityimg3}/>
                                        <p className="p">
                                          {this.props.informationPhotoCity2}
                                        </p>
                                      </div>
                                      <div>
                                        <img src={this.props.Cityimg4}/>
                                        <p className="p">
                                          {this.props.informationPhotoCity3}
                                        </p>
                                      </div>
                                      <div>
                                        <img src={this.props.Cityimg5}/>
                                        <p className="p">
                                          {this.props.informationPhotoCity4}
                                        </p>
                                      </div>
                                    </Carousel>}
                                  </div>
                                </section>
                              </div>
                            </YMaps>

                          </div>
                        </div>
                        }
                      </nav>
                      }
                      {show &&
                      <div>
                        <div id="tests">
                          <div className="content">
                            <ul className="actions2">
                              <li onClick={() => {
                                this.show()
                              }}><a className="button">О стране</a></li>
                              <li onClick={() => {
                                this.openMenuCity()
                              }}><a className="button">Города</a></li>
                              <li><a className="button" onClick={() => {
                                this.showPhoto()
                              }}>Фотогалерея</a></li>
                              <li><a className="button" onClick={() => {
                                this.showLoins()
                              }}>Достопримечательности</a></li>
                              <li><a className="button" onClick={() => {
                                this.showTest()
                              }}>Тест</a></li>
                            </ul>
                          </div>
                        </div>
                        <section id="france">
                          <div className="content">
                            <h3 className="h3">{this.props.countryName}</h3>
                            <p className="p">{this.props.intro}</p>

                            <ul className="actions1">
                              <li><p className="button" onClick={() => {
                                this.showText(this.setState({
                                  showText: !showText,
                                  showText1: false,
                                  showText2: false,
                                  showText3: false,
                                  showText4: false,
                                  showText5: false,
                                  showText6: false,
                                  showText7: false,
                                }))
                              }}>Как добраться до {this.props.countryNames}
                              </p></li>


                              <li><p className="button" onClick={() => {
                                this.showText(this.setState({
                                  showText1: !showText1,
                                  showText: false,
                                  showText2: false,
                                  showText3: false,
                                  showText4: false,
                                  showText5: false,
                                  showText6: false,
                                  showText7: false,
                                }))
                              }}>Горные лыжи
                              </p></li>


                              <li><p className="button" onClick={() => {
                                this.showText(this.setState({
                                  showText3: !showText3,
                                  showText1: false,
                                  showText2: false,
                                  showText: false,
                                  showText4: false,
                                  showText5: false,
                                  showText6: false,
                                  showText7: false,
                                }))
                              }}>История {this.props.countryNames}
                              </p></li>

                              <li><p className="button" onClick={() => {
                                this.showText(this.setState({
                                  showText4: !showText4,
                                  showText1: false,
                                  showText2: false,
                                  showText3: false,
                                  showText: false,
                                  showText5: false,
                                  showText6: false,
                                  showText7: false,
                                }))
                              }}>Регионы и курорты {this.props.countryNames}
                              </p></li>

                              <li><p className="button" onClick={() => {
                                this.showText(this.setState({
                                  showText5: !showText5,
                                  showText1: false,
                                  showText2: false,
                                  showText3: false,
                                  showText4: false,
                                  showText: false,
                                  showText6: false,
                                  showText7: false,
                                }))
                              }}>Климат {this.props.countryNames}
                              </p></li>

                              <li><p className="button" onClick={() => {
                                this.showText(this.setState({
                                  showText6: !showText6,
                                  showText1: false,
                                  showText2: false,
                                  showText3: false,
                                  showText4: false,
                                  showText: false,
                                  showText5: false,
                                  showText7: false,
                                }))
                              }}>Кухня и рестораны
                              </p></li>

                              <li><p className="button" onClick={() => {
                                this.showText(this.setState({
                                  showText7: !showText7,
                                  showText1: false,
                                  showText2: false,
                                  showText3: false,
                                  showText4: false,
                                  showText5: false,
                                  showText6: false,
                                  showText: false,
                                }))
                              }}>Праздники и события
                              </p></li>


                            </ul>
                            {showText1 &&
                            <nav>
                              <h3 className="h3">Горные лыжи</h3>
                              <p className="p">{this.props.info_block}</p>
                            </nav>
                            }
                            {showText &&
                            <nav>
                              <p className="p"><h3
                                className="h3">Как добраться до {this.props.countryNames}</h3>
                                <p>{this.props.infoGeograf}</p>
                              </p>
                            </nav>
                            }
                            {showText7 &&
                            <nav>
                              <p className="p"><h3 className="h3">Праздники и события</h3>
                                <p>{this.props.info_block_6}</p>
                                <p>{this.props.info_block_6_1}</p></p>
                            </nav>

                            }
                            {showText6 &&
                            <nav>
                              <p className="p"><h3 className="h3">Кухня и рестораны</h3>
                                <p>{this.props.info_block_5}</p></p>
                            </nav>

                            }
                            {showText5 &&
                            <nav>
                              <p className="p"><h3
                                className="h3">Климат {this.props.countryNames}</h3>
                                <p>{this.props.info_block_4}</p>
                                <p>Актуальная информация:<a onClick={() => {
                                  this.onOpenModal()
                                }}>прогноз погоды на основных
                                  курортах {this.props.countryNames} на
                                  ближайшие
                                  дни.</a></p>
                                <Modal open={open} onClose={this.onCloseModal} center>
                                  {/*<img src={this.props.imgsrc}/>*/}
                                  {this.props.weather}
                                </Modal>

                              </p>
                            </nav>}
                            {showText4 &&
                            <nav>
                              <p className="p">
                                <h3 className="h3">Регионы и
                                  курорты {this.props.countryNames}</h3>
                                <p>{this.props.info_block_3}</p>
                                <p>{this.props.info_block_3_1}</p>
                                <p> {this.props.info_block_3_2}</p>
                                <p> {this.props.info_block_3_3}</p></p>
                            </nav>
                            }
                            {showText3 &&
                            <nav>
                              <p className="p" onClick={() => {
                                this.showWith_text()
                              }}>
                                <h3 className="h3">История {this.props.countryNames}</h3>
                                <br/>
                                <p>{this.props.info_block_2}
                                  {
                                    showWith_text &&
                                    <div>{this.props.info_block_2_1}</div>
                                  }
                                  {
                                    showWith_text ? <a>Скрыть текст</a> :
                                      <a>Показать весь текст</a>
                                  }
                                </p>
                              </p>
                            </nav>
                            }

                          </div>
                        </section>
                      </div>
                      }
                      {showPhoto &&
                      <div className="Photo">
                        <div id="tests">
                          <div className="content">
                            <ul className="actions2">
                              <li onClick={() => {
                                this.show()
                              }}><a className="button">О стране</a></li>
                              <li onClick={() => {
                                this.openMenuCity()
                              }}><a className="button">Города</a></li>
                              <li><a className="button" onClick={() => {
                                this.showPhoto()
                              }}>Фотогалерея</a></li>
                              <li><a className="button" onClick={() => {
                                this.showLoins()
                              }}>Достопримечательности</a></li>
                              <li><a className="button" onClick={() => {
                                this.showTest()
                              }}>Тест</a></li>
                            </ul>
                          </div>
                        </div>
                        <Photo item={photo}
                               img1={this.props.img1}
                               img2={this.props.img2}
                               img3={this.props.img3}
                               img4={this.props.img4}
                               img5={this.props.img5}
                               img6={this.props.img6}
                               img7={this.props.img7}
                               img8={this.props.img8}
                               img9={this.props.img9}
                               information={this.props.information}
                               information1={this.props.information1}
                               information2={this.props.information2}
                               information4={this.props.information4}
                               information5={this.props.information5}
                               information6={this.props.information6}
                               information7={this.props.information7}
                               information8={this.props.information8}
                               information9={this.props.information9}
                        />
                      </div>
                      }
                      {showLoins &&
                      <div>
                        <div id="tests">
                          <div className="content">
                            <ul className="actions2">
                              <li onClick={() => {
                                this.show()
                              }}><a className="button">О стране</a></li>
                              <li onClick={() => {
                                this.openMenuCity()
                              }}><a className="button">Города</a></li>
                              <li><a className="button" onClick={() => {
                                this.showPhoto()
                              }}>Фотогалерея</a></li>
                              <li><a className="button" onClick={() => {
                                this.showLoins()
                              }}>Достопримечательности</a></li>
                              <li><a className="button" onClick={() => {
                                this.showTest()
                              }}>Тест</a></li>
                            </ul>
                          </div>
                        </div>
                        <Lions
                          photoLion={this.props.photoLion}
                          lionName={this.props.lionName}
                          lionInfo={this.props.lionInfo}
                          photoLion1={this.props.photoLion1}
                          lionName1={this.props.lionName1}
                          lionInfo1={this.props.lionInfo1}

                        />
                      </div>
                      }
                      {
                        showTest && <div>
                          <div id="tests">
                            <div className="content">
                              <ul className="actions2">
                                <li onClick={() => {
                                  this.show()
                                }}><a className="button">О стране</a></li>
                                <li onClick={() => {
                                  this.openMenuCity()
                                }}><a className="button">Города</a></li>
                                <li><a className="button" onClick={() => {
                                  this.showPhoto()
                                }}>Фотогалерея</a></li>
                                <li><a className="button" onClick={() => {
                                  this.showLoins()
                                }}>Достопримечательности</a></li>
                                <li><a className="button" onClick={() => {
                                  this.showTest()
                                }}>Тест</a></li>
                              </ul>
                            </div>
                          </div>
                          <Test text={this.props.text}
                                text1={this.props.text1}
                                text2={this.props.text2}
                                text3={this.props.text3}
                                vopros={this.props.vopros}
                                text4={this.props.text4}
                                text5={this.props.text5}
                                text6={this.props.text6}
                                imgAnsw={this.props.imgAnsw}
                          />
                        </div>
                      }


                    </section>
                  </div>
                </div>
              </div>


            </section>
          </section>
        </section>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
(Template)