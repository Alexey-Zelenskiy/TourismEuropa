import React, {Component, Fragment} from 'react';
import Modal from 'react-responsive-modal';

class Menu_Country extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.items)
    }

    render() {
        return (
            <Fragment>
                {this.props.items.map((item, index) =>
                    <div>
                        <a href={item.link} key={index}>{item.label}</a>
                    </div>
                )}
            </Fragment>


        );
    }
}

export default Menu_Country;