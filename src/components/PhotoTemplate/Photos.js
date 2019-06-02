import React, {Component, Fragment} from 'react';
import Modal from 'react-responsive-modal';
import {connect} from 'react-redux'

const  mapStateToProps  = (state) => {
    return {
        oneState: state.states.blya
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        getPhoto: (click) => {
              const check = dispatch({
                type: `${click }`,
                payload: click
            });
        }
    }
};

class Photos extends React.Component {

    render() {

        return (
            <div id="about">
                {console.log(this.props.oneState)}
                {this.props.blya&&<p>sss</p>}
            </div>

        )
    }
}




export default connect(mapStateToProps, mapDispatchToProps)
(Photos);