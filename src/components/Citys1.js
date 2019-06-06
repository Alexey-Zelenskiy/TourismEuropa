import React, {Component, Fragment} from 'react';
import Modal from 'react-responsive-modal';
import {connect} from 'react-redux'
import up from "../imagesSrc/up.png";
import down from "../imagesSrc/douwn.png";

class Citys extends React.Component {

    state = {
        open: false, showText_city2: true, next: true, back: true, infoBlock: 0, texts: {
            showText: false,

        }
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    showText() {
        console.log(this.state.showText);
        const {showText, showText1} = this.state;
        this.setState({texts: false})


    }

    changeMenu = (next, back) => {
        if (next === true && this.state.infoBlock === 3) {
            this.state.infoBlock = 3;
        } else if (back === true && this.state.infoBlock === 0) {
            this.state.infoBlock = 0;
        } else {
            if (next === true) {
                this.state.infoBlock += 1;
            } else if (back === true) {
                this.state.infoBlock -= 1;
            } else return;
        }
        console.log(this.state.infoBlock);
        switch (this.state.infoBlock) {
            case 0:
                this.setState({
                    showText_city2: true,
                    texts: false
                });
                break;
            case 1:
                this.setState({
                    texts:
                        {
                            showText: <div>
                                <h3 className="h3">Районы {this.props.countryNames1}</h3>
                                <p className="p">{this.props.info_city1} <a
                                    id="a1">{this.props.Object1}</a>{this.props.info_city1_1}<a
                                    id="a1">{this.props.Object2}</a>{this.props.info_city1_1_1}
                                </p>
                                <p className="p">{this.props.info_city1_2}</p>
                                <p className="p">{this.props.info_city1_3}</p>
                                <p className="p">{this.props.info_city1_4}</p>
                            </div>

                        }
                    , showText_city2: false
                });
                break;
            case 2:
                this.setState({
                    texts: {
                        showText: <div>
                            <h3 className="h3">Как добраться до {this.props.countryNames1}</h3><p className="p">{this.props.info_city2}</p>
                            <p className="p">{this.props.info_city2_1}</p>
                            <p className="p">{this.props.info_city2_2}</p></div>
                    }
                });
                break;
            case 3:
                this.setState({
                    texts: {
                        showText:<div><h3 className="h3">Развлечения и достопримечательности {this.props.countryNames1}</h3>
                            <p className="p">{this.props.info_city3}</p></div>
                    }
                });
                break
        }


    };


    render() {
        const {showText_city2}= this.state;
        return (

            <div>
                <p>{this.state.texts.showText}</p>
                <br/>
                {showText_city2 && <p className="p">
                    <h3 className="h3">{this.props.cityName}</h3>
                    {this.props.info_city}</p>}
                <span id="span-next" onClick={() => {
                    this.changeMenu(true, false)
                }} className="icon alt major fa fa-angle-right"/>
                <span  id="span-back" onClick={() => {
                    this.changeMenu(false, true)
                }} className="icon alt major fa fa-angle-left"/>

            </div>
        );
    }
}


export default Citys;