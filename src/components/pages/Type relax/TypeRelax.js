import React, {Component, Fragment} from 'react';




class TypeRelax extends React.Component {

    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props.items)
    }

    render() {

        return (
            <Fragment>
                <div>
                    {this.props.items.map((item, index) =>
                        <Fragment>

                                <span className="relax" key={index} >{item.label}</span>
                                <img className={'img'} src={ item.photos} id="img" />

                        </Fragment>
                    )}
                </div >

            </Fragment>
        );
    }
}

export default TypeRelax;