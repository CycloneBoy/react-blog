import React, { Component } from 'react';
// import CommentApp from '../components/Comment/CommentApp'
// import Clock from '../components/Clock/Clock'
// import Card from '../components/Card/Card'
import { Button } from 'antd'
import './main.css'

class Main extends Component {
    constructor () {
        super()
        this.state = { isShowClock: true }
      }
    
      handleShowOrHide () {
        this.setState({
          isShowClock: !this.state.isShowClock
        })
      }


    render () {

      return (
      <div className="Main">
        <h2>This is main content</h2>
        <Button type="primary">button</Button>
        {/* <Card content={
            <div>
            <h2>React.js 小书</h2>
            <div>开源、免费、专业、简单</div>
            订阅：<input />
            </div>
        } /> */}
        {/* <div>
            {this.state.isShowClock ? <Clock /> : null }
            <button onClick={this.handleShowOrHide.bind(this)}>
                 显示或隐藏时钟
            </button>
        </div>
        <div>
           <CommentApp/>
        </div> */}
        {/* ,
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test" */}
      </div>
      )
    }
  }

export default Main