import React, { Component } from 'react';

class Title extends Component {

    handleClickOnTitle(word,e){
        console.log(this,e)
    }

  render () {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this,"Hello")}>React 小书</h1>
    )
  }
}


export default Title