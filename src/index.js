import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './common/Header'
import Main from './common/Main'
import Footer from './common/Footer'

class Index extends Component {

    render () {
      return (
      <div>
          <Header />
          <Main />
          <Footer />
        </div>
      )
    }
  }

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)