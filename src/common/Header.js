import React, { Component } from 'react';
import Title from './Title'

class Header extends Component {
  constructor () {
    super()
    console.log('construct')
  }

  
  componentWillMount () {
    console.log('component will mount')
  }

  componentDidMount () {
    console.log('component did mount')
  }



  componentWillUnmount() {
    console.log('component will unmount')
  }


  render () {
    console.log('render')
    return (
    <div>
      <Title />
      <h2>This is Header</h2>
    </div>
    )
  }
}

export default Header