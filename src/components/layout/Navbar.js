import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { User } from '../User'
import PropTypes from 'prop-types'
import { getPhotos } from '../../actions/PageActions'
import { handleLogin } from '../../actions/UserActions'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authentication'


class Navbar extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    // renderTemplate = () => {
    //     const { name, error, isFetching } = this.props
    //
    //     if (error) {
    //         return <p>Во время запроса произошла ошибка, обновите страницу</p>
    //     }
    //
    //     if (isFetching) {
    //         return <p>Загружаю...</p>
    //     }
    //
    //     if (name) {
    //         return <div><p>Привет, {name}!</p>
    //         </div>
    //     } else {
    //         return (
    //           <div>
    //               <li className="special" onClick={this.props.handleLogin}>
    //                   Войти
    //               </li>
    //           </div>
    //
    //         )
    //     }
    // }
    render() {
        // const { user, page, getPhotosAction, handleLoginAction } = this.props
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
          <div className="contents1">
            <img src={user.avatar} alt={user.name} title={user.name}
                 className="styleimg"
                  />
                  <div className="logout">
              <a href="#" className="button special" onClick={this.onLogout.bind(this)}>
                  Выход
              </a>
                  </div>

          </div>
        )
        const guestLinks = (
   <div className="contents">
              <li>
                  <Link  className="button special" to="/register">Регистрация</Link>
              </li>
              <li >
                  <Link  className="button special"  to="/login">Авторизация</Link>
              </li>
   </div>


        )
        return (
                <header id="header">
                    <nav id="nav">

                        <ul>
                            <li><Link  to="/">
                                <h3 className="ph3">Главная</h3>
                            </Link></li>
                            <li>
                                <Link  to="/country">
                                    <h3 className="ph3">Страны Европы</h3>
                                </Link>
                            </li>

                            {/*<User*/}
                              {/*name={user.name}*/}
                              {/*isFetching={user.isFetching}*/}
                              {/*error={user.error}*/}
                              {/*handleLogin={handleLoginAction}*/}
                            {/*/>*/}
                          {isAuthenticated ? authLinks : guestLinks}
                        </ul>






                    </nav>

                </header>


        );
    }
}
// const mapStateToProps = store => {
//     return {
//         user: store.user, // вытащили из стора (из редьюсера user все в переменную thid.props.user)
//         page: store.page,
//     }
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         getPhotosAction: year => dispatch(getPhotos(year)),
//         // "приклеили" в this.props.handleLoginAction функцию, которая умеет диспатчить handleLogin
//         handleLoginAction: () => dispatch(handleLogin()),
//     }
// }
//
// User.propTypes = {
//     name: PropTypes.string.isRequired,
//     error: PropTypes.string,
//     isFetching: PropTypes.bool.isRequired,
//     handleLogin: PropTypes.func.isRequired,
//     handleLogout: PropTypes.func.isRequired,
// }
// export default connect(
//   mapStateToProps,
//    mapDispatchToProps
// )(Navbar);
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
