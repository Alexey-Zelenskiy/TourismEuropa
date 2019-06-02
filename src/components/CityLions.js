import React, {Component, Fragment} from 'react';
import Modal from 'react-responsive-modal';
import {connect} from 'react-redux'
import up from "../imagesSrc/up.png";
import down from "../imagesSrc/douwn.png";

class Lions extends React.Component {

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
                                <header id="hed" className="major">
                                    <p className="p">
                                        <h2 href="#one" >{this.props.lionName1} </h2>
                                    </p>
                                </header>

                                <div>
                                    <div className="container">
                                        <div className="row 150%">

                                            <section id="content">

                                                <img className="img" src={this.props.photoLion1} alt=""/>
                                                <span  id="span-next1" onClick={() => {
                                                    this.changeMenu(true, false)
                                                }} className="icon alt major fa fa-angle-right"/>
                                                <span id="span-back1" onClick={() => {
                                                    this.changeMenu(false, true)
                                                }} className="icon alt major fa fa-angle-left"/>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <section id="sidebar">
                                    <section>
                                        <p className="p">
                                            <p className="p">{this.props.lionInfo1}</p>
                                        </p>
                                    </section>

                                    <hr/>
                                </section>
                            </div>

                        }
                    , showText_city2: false
                });
                break;
            case 2:
                this.setState({
                    texts: {
                        showText: <div>
                            <header id="hed" className="major">
                                <p className="p">
                                    <h2 href="#one" >{this.props.lionName1} </h2>
                                </p>
                            </header>

                            <div>
                                <div className="container">
                                    <div className="row 150%">

                                        <section id="content">

                                            <img className="img" src={this.props.photoLion1} alt=""/>
                                            <span  id="span-next1" onClick={() => {
                                                this.changeMenu(true, false)
                                            }} className="icon alt major fa fa-angle-right"/>
                                            <span id="span-back1" onClick={() => {
                                                this.changeMenu(false, true)
                                            }} className="icon alt major fa fa-angle-left"/>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <section id="sidebar">
                                <section>
                                    <p className="p">
                                        <p className="p">{this.props.lionInfo1}</p>
                                    </p>
                                </section>

                                <hr/>
                            </section>
                        </div>
                    }
                });
                break;
            case 3:
                this.setState({
                    texts: {
                        showText: this.props.info_city1
                    }
                });
                break
        }


    };


    render() {
        const {showText_city2} = this.state;
        return (

            <div>
                        <p>{this.state.texts.showText}</p>
                        <br/>

                        {showText_city2 &&<div>
                            <header id="hed" className="major">
                                <p className="p">
                               <h2 >{this.props.lionName} </h2>
                                </p>
                            </header>

                            <div>
                            <div className="container">
                                <div className="row 150%">

                                        <section id="content">
                                          <img className="img" src={this.props.photoLion} alt=""/>
                                            <span  id="span-next1" onClick={() => {
                                                this.changeMenu(true, false)
                                            }} className="icon alt major fa fa-angle-right"/>
                                            <span id="span-back1" onClick={() => {
                                                this.changeMenu(false, true)
                                            }} className="icon alt major fa fa-angle-left"/>

                                        </section>
                                </div>
                            </div>
                            </div>
                            <section id="sidebar">
                                <section>
                                    <p className="p">
                                    <p className="p">{this.props.lionInfo}</p>
                                    </p>
                                </section>

                                <hr/>
                            </section>


                        </div>}
            </div>
        );
    }
}


export default Lions