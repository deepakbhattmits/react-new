/** @format */

import React, { Component } from 'react';

class ScrollButton extends Component {
  state = {
    intervalId: 0
  };

  scrollStep = () => {
    // console.log("Scroll :")
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx); // here the props
  };
  scrollToTop = () => {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    ); // here the props
    this.setState({ intervalId: intervalId });
  };
  render() {
    return (
      <button title='Back to top' className='scroll' onClick={this.scrollToTop}>
        <i className='fa fa-angle-up'></i>
        <span className='text-uppercase'>top</span>
      </button>
    );
  }
}

class ScrollApp extends Component {
  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const element = document.getElementById('BottomTopScroll');
      const h = window.innerHeight;
      if (h > 5) {
        if (window.scrollY > 6) {
          element.classList.add('scroll');
        } else {
          element.classList && element.classList.remove('scroll');
        }
      }
    });
  }
  render() {
    return (
      <div id='BottomTopScroll' className='long'>
        <ScrollButton scrollStepInPx='50' delayInMs='25.66' />{' '}
        {/* upper container */}
      </div>
    );
  }
}
export default ScrollApp;
