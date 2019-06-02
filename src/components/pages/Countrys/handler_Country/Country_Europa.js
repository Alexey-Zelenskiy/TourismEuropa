import React, {Component, Fragment} from 'react';
import Modal from 'react-responsive-modal';

class Country_Europa extends React.Component {

    state = {open:false};
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.items)
    }
    onOpenModal = () => {
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    render() {
        const {open}=this.state;
        return (
            <Fragment>
                {this.props.items.map((item, index) =>

                    <div className="columns1 portfolio-item">
                        <div className="item-wrap">
                            <a>
                                <img   src={item.remote}/>
                                <div className="overlay">
                                    <div className="portfolio-item-meta">

                                        <a  href={item.link} key={index}><a
                                            className="a">{item.label}</a></a>
                                    </div>
                                </div>



                            </a>
                        </div>
                    </div>)}
            </Fragment>


        );
    }
}

export default Country_Europa;