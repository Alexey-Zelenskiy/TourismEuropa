import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { loginUser } from '../../actions/authentication'
import history from '../../history'
import { withRouter } from 'react-router-dom'
import Navbar from '../layout/Navbar'


class Login extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {},
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.loginUser(user)
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/')
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      })
    }
  }

  render() {
    const { errors } = this.state
    return (
      <section id="banner">
        <Navbar/>
        <div className="content">
          <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100">
                <form  class="login100-form validate-form" onSubmit={this.handleSubmit}>
                      <span className="login100-form-logo">
						<i className="zmdi zmdi-landscape"></i>
					</span>

                  <span className="login100-form-title p-b-34 p-t-27">
						Авторизация
					</span>

                  <div className="wrap-input100 validate-input">
                    <span className="focus-input100 " data-placeholder="&#xf15a;"/>
                    <input
                      type="email"
                      placeholder="Email"
                      className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email,
                      })}
                      name="email"
                      onChange={this.handleInputChange}
                      value={this.state.email}
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                  </div>
                  <div className="wrap-input100 validate-input">
                    <span className="focus-input100" data-placeholder="&#xf190;"/>
                    <input
                      type="password"
                      placeholder="Пароль"
                      className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password,
                      })}
                      name="password"
                      onChange={this.handleInputChange}
                      value={this.state.password}
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Войти
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
})

export default withRouter(connect(mapStateToProps, { loginUser })(Login))