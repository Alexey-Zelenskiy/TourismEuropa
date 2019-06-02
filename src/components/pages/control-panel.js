import React, {PureComponent} from 'react';

import CITIES from '../cities.json';
const handleClick =( function (e) {

    document.location.href='/france'});
const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {

    _renderButton = (city, index) => {
        return (

            <div  key={`btn-${index}`} className="input" >
                <input type="radio" name="city"
                       id={`city-${index}`}
                       defaultChecked={city.city === 'France'}
                       onClick={() => this.props.onViewportChange(city)} />
                <label htmlFor={`city-${index}`}>{city.city}</label>
            </div>
        );
    };

    render() {
        const Container = this.props.containerComponent || defaultContainer;

        return (
            <Container>
                { CITIES.filter(city => city.state).map(this._renderButton) }
            </Container>
        );
    }
}