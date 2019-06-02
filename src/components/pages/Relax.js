import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as THREE from "three";
import carModel from "./assest/eiffel_tower.obj";
import carMaterial from "./assest/eiffel_tower.mtl";
import { User } from '../../components/User'
import { Page } from '../../components/Page'
import { getPhotos } from '../../actions/PageActions'
import { handleLogin } from '../../actions/UserActions'
import Navbar from '../layout/Navbar'



class Relax extends Component {

  render() {
    const { user, page, getPhotosAction, handleLoginAction } = this.props
    let width = window.innerWidth;
    let height = window.innerHeight;
    return (
      <div>
      <Navbar/>
        <section id="banner">
          <div className="content">
        <Page
          photos={page.photos}
          year={page.year}
          isFetching={page.isFetching}
          error={page.error}
          getPhotos={getPhotosAction}
        />
        {/* добавили новые props для User */}
        <User
          name={user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}
        />
      </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user, // вытащили из стора (из редьюсера user все в переменную thid.props.user)
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    // "приклеили" в this.props.handleLoginAction функцию, которая умеет диспатчить handleLogin
    handleLoginAction: () => dispatch(handleLogin()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Relax)