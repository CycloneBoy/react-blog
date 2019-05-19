import React, { Component } from 'react'

class Layout extends Component {
    render () {
      return (
        <div className='two-cols-layout'>
          <div className='sidebar'>
            {this.props.children[0]}
          </div>
          <div className='main'>
            {this.props.children[1]}
          </div>
        </div>
      )
    }
  }

  export default Layout