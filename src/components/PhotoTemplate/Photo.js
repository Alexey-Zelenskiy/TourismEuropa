import React, {Component, Fragment} from 'react';
import Modal from 'react-responsive-modal';
import {connect} from 'react-redux'

import center from "../../imagesSrc/Belguim/center.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from "../../imagesSrc/Austria/Austria.jpg";

const  mapStateToProps  = (state) => {
    return {
        jopa: state.photos,
        oneState: state.states.blya,
        neBlyaState: state.states.neBlya,
    }
};

class Photo extends React.Component {

    state = {
        prazdn: false,
        dostopr:false,
      prirodaa:false
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }
    getPhoto=(click)=>{
        if(click === 'prazdn'){
            this.setState({prazdn: !this.state.prazdn,open:true})
        }
        if(click === 'dostopr'){
            this.setState({dostopr: !this.state.dostopr,open:true})
        }
        if(click === 'prirodaa'){
            this.setState({prirodaa: !this.state.prirodaa,open:true})
        }
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    renderPhotos(item) {
    return (
        <Fragment>
            {item.map((item, index) =>
                <div id="portfolio-wrapper1" className="bgrid-quarters s-bgrid-thirds cf">
                    <div className="columns portfolio-item">
                        <div className="item-wrap1">
                            <img src={item.remote}/>
                            <div onClick={() => {this.getPhoto(item.click)
                            }} className="overlay">
                                <div className="portfolio-item-meta">
                                    <a key={index}><a className="a_photo">{item.label}</a></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>

    );
}

    render() {
        const { open } = this.state;

        return (
            <div id="photo">
                <section id="france">
                    <div className="content">
                    <div className="country_1">
                        <div className="twelve columns collapsed">
                            {this.renderPhotos(this.props.jopa)}
                        </div>
                        {this.state.prazdn === true && <div className="twelve columns collapsed">
                            <Modal open={open} onClose={this.onCloseModal} center>
                                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                                    <div>
                                        <img src={this.props.img1}/>
                                        <p className="p">
                                            {this.props.information}
                                        </p>
                                    </div>
                                    <div>
                                        <img src={this.props.img2}/>
                                        <p className="p">
                                            {this.props.information1}
                                        </p>
                                    </div>
                                    <div>
                                        <img src={this.props.img3   }/>
                                        <p className="p">
                                            {this.props.information2}
                                        </p>
                                    </div>
                                </Carousel>

                            </Modal>
                        </div>}
                        {this.state.dostopr === true && <div className="twelve columns collapsed">
                            <Modal open={open} onClose={this.onCloseModal} center>
                                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                                    <div>
                                        <img src={this.props.img4}/>
                                        <p className="p">
                                            {this.props.information4}
                                        </p>
                                    </div>
                                    <div>
                                        <img src={this.props.img5}/>
                                        <p className="p">
                                            {this.props.information5}
                                        </p>
                                    </div>
                                    <div>
                                        <img src={this.props.img6}/>
                                        <p className="p">
                                            {this.props.information6}
                                        </p>
                                    </div>
                                </Carousel>

                            </Modal>
                        </div>}
                        {this.state.prirodaa === true && <div className="twelve columns collapsed">
                            <Modal open={open} onClose={this.onCloseModal} center>
                                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                                    <div>
                                        <img src={this.props.img7}/>
                                        <p className="p">
                                            {this.props.information7}
                                        </p>
                                    </div>
                                    <div>
                                        <img src={this.props.img8}/>
                                        <p className="p">
                                            {this.props.information8}
                                        </p>
                                    </div>
                                    <div>
                                        <img src={this.props.img9  }/>
                                        <p className="p">
                                            {this.props.information9}
                                        </p>
                                    </div>
                                </Carousel>

                            </Modal>
                        </div>}
                    </div>
                    </div>
                </section>
            </div>

        )
    }
}




export default connect(mapStateToProps)
(Photo);