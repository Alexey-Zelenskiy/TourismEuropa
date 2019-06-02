import React from 'react'
import ReactDOM from 'react-dom'
import ReactSurvey from 'react-survey'
import { fakeSurvey } from './data'

class Test extends React.Component {
    state = {
        answer: false,
        answer2: false,
        answer3: false,
        answer4: false,
        answer5: false,
        answer6: false,
        countAnswer: 0,
        countAnswer1: 0,
        show: true,
        button: false, button2: false,

    }

    answerHandler() {
        console.log(this.state.answer)
        const { answerHandler1 } = this.state
        this.setState({countAnswer1: this.state.countAnswer1 + 1})
    }

    show() {
        const { show, button,button1 } = this.state
        this.setState({
            show: !show,   answer: false,
            answer2: false,
            answer3: false,
            answer4: false,
            answer5: false,
            answer6: false, button: !button
        })
    }

    show1() {
        const { button1, show } = this.state
        this.setState({
            show: !show, button1: !button1,
        })
    }
    show2() {
        const { show, button,button1 } = this.state
        this.setState({
            show:false,   answer: false,showAnsw:false,
            answer2: false,
            answer3: false,
            answer4: false,
            answer5: false,
            answer6: false, button: !button
        })
    }

    showAnsw() {
        const { showAnsw, button1 } = this.state
        this.setState({
            showAnsw: !showAnsw,button1:!button1
        })
    }
    showAnsw1() {
        const { showAnsw, button } = this.state
        this.setState({
            showAnsw: !showAnsw,button:!button
        })
    }

    show3() {
        const { showAnsw1, button,button1б } = this.state
        this.setState({
            show3:false,   answer: false,showAnsw:false,
            answer2: false,
            answer3: false,
            answer4: false,
            answer5: false,
            answer6: false, button3: !button
        })
    }

    showAnsw2() {
        const { showAnsw1, button3 } = this.state
        this.setState({
            showAnsw1: !showAnsw1,button3:!button3
        })
    }
    answerHandler2() {
        const { answerHandler2 } = this.state
        this.setState({
            answer: false, answer2: true, answer3: false,  countAnswer: this.state.countAnswer + 1,
        })
        console.log(this.state.countAnswer)

    }
    answerHandler3() {
        const { answerHandler2 } = this.state
        this.setState({
            answer4: false, answer5: true, answer6: false,  countAnswer: this.state.countAnswer + 1,
        })
        console.log(this.state.countAnswer)

    }

    render() {
        const { answerHandler2, show, button, button1, showAnsw,button2 ,showAnsw2,button3,show3,showAnsw1} = this.state
        console.log(this.state.countAnswer)
        return (

          <div>
              <section id="france">

                  <div className="content">
                      {show &&
                      <section id="content">
                      <nav>
                          <h3 className="h3">{this.props.text}</h3>
                          <div className="radio">
                              <input checked={this.state.answer} onClick={() => {
                                  this.answerHandler(this.setState({ answer: true }))
                              }} type="radio" id="radioButton"/>
                              <label htmlFor="radioButton">{this.props.text1}</label>
                              {this.state.answer === true && this.show()}
                          </div>
                          <div className="radio">
                              <input checked={this.state.answer2} onClick={() => {
                                  this.answerHandler2(
                                  )
                              }} type="radio" id="radioButton1"/>
                              <label htmlFor="radioButton1">{this.props.text2}</label>
                              {this.state.answer2 === true && this.show1()}
                          </div>
                          <div className="radio">
                              <input checked={this.state.answer3} onClick={() => {
                                  this.answerHandler(this.setState({ answer3: true }))
                              }} type="radio" id="radioButton2"/>
                              <label htmlFor="radioButton2">{this.props.text3}</label>
                              {this.state.answer3 === true && this.show()}
                          </div>

                          {/*<p>Кол-во правильных овтетов-{this.state.countAnswer}</p>*/}
                      </nav>
                      </section>
                      }
                      {button &&
                      <div>
                          <hr/>
                          <h3 className="h3">Неправильный ответ</h3>
                          <hr/>
                          <ul className="actions2">
                              <a className="button" onClick={() => {
                                  this.show(this.setState({ show: true }))
                              }}>Попробуйте еще раз
                              </a>
                              <br/>
                              <a className="button" onClick={() => {
                                  this.showAnsw1()
                              }}>Далее
                              </a>
                          </ul>
                      </div>
                      }
                      {button1 && <div><hr/><bar><h3 className="h3">Правильный ответ</h3><p className="p">Столицей Франции являеется {this.props.text2}</p></bar>
                          <hr/>
                          <a className="button" onClick={() => {
                              this.showAnsw()
                          }}>Далее
                          </a>
                      </div>}
                      {showAnsw &&
                      <section id="content">
                      <nav>
                          <h3 className="h3">{this.props.vopros}</h3>



                              <img className="imgAnsw" src={this.props.imgAnsw} alt=""/>


                          <div className="radio">
                              <input checked={this.state.answer4} onClick={() => {
                                  this.answerHandler(this.setState({ answer4: true }))
                              }} type="radio" id="radioButton4"/>
                              <label htmlFor="radioButton4">{this.props.text4}</label>
                              {this.state.answer4 === true && this.show2()}
                          </div>
                          <div className="radio">
                              <input checked={this.state.answer6} onClick={() => {
                                  this.answerHandler(this.setState({ answer6: true }))
                              }} type="radio" id="radioButton5"/>
                              <label htmlFor="radioButton5">{this.props.text6}</label>
                              {this.state.answer6 === true && this.show2()}
                          </div>
                          <div className="radio">
                              <input checked={this.state.answer5} onClick={() => {
                                  this.answerHandler3(
                                  )
                              }} type="radio" id="radioButton6"/>
                              <label htmlFor="radioButton6">{this.props.text5}</label>
                              {this.state.answer5 === true && this.show3()}
                          </div>
                          {/*<p>Кол-во правильных овтетов-{this.state.countAnswer}</p>*/}
                      </nav>
                      </section>}
                      {button2 &&
                      <div>
                          <hr/>
                          <h3 className="h3">Неправильный ответ</h3>
                          <hr/>
                          <ul className="actions2">
                              <a className="button" onClick={() => {
                                  this.show(this.setState({ show: true }))
                              }}>Попробуйте еще раз
                              </a>
                              <br/>
                              <a className="button" onClick={() => {
                                  this.showAnsw2()
                              }}>Далее
                              </a>
                          </ul>
                      </div>
                      }
                      {button3  && <div><hr/><bar><h3 className="h3">Правильный ответ</h3><p className="p">На картинке изображен {this.props.text5}</p></bar>
                          <hr/>
                          <a className="button" onClick={() => {
                              this.showAnsw2()
                          }}>Далее
                          </a>
                      </div>}
                      {showAnsw1&&   <nav><h3 className="h3">Кол-во правильных овтетов-{this.state.countAnswer}</h3>
                          <h3 className="h3">Кол-во неправильных овтетов-{this.state.countAnswer1}</h3></nav>}
                  </div>
              </section>
          </div>
        )
    }
}


export default Test