import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import classnames from 'classnames'
import { registerUser } from '../../actions/authentication'
import Navbar from '../layout/Navbar'


class Register extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm,
    }
    this.props.registerUser(user, this.props.history)
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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/')
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
						Регистрация
					</span>

                  <div className="wrap-input100 validate-input">
                    <span className="focus-input100" data-placeholder="&#xf207;"/>
                    <input
                      type="text"
                      placeholder="Логин"
                      className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.name,
                      })}
                      name="name"
                      onChange={this.handleInputChange}
                      value={this.state.name}
                    />

                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                  </div>
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
                  <div className="wrap-input100 validate-input">
                    <span className="focus-input100" data-placeholder="&#xf190;"/>
                    <input
                      type="password"
                      placeholder="Повторите пароль"
                      className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password_confirm,
                      })}
                      name="password_confirm"
                      onChange={this.handleInputChange}
                      value={this.state.password_confirm}
                    />
                    {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Зарегистрироваться
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register))