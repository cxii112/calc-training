import React from 'react';
import '../css/Popup.css';

import jsonData from '../json/usage.json';

import operatorVideo from '../img/operator.mp4';
import sumVideo from '../img/sum.mp4';
import decrVideo from '../img/decr.mp4';
import mulVideo from '../img/mul.mp4';
import fracVideo from '../img/frac.mp4';
import inputVideo from '../img/input.mp4';
import solveVideo from '../img/solve.mp4';
import resultsVideo from '../img/results.mp4';

import operatorWebm from '../img/operator.webm';
import sumWebm from '../img/sum.webm';
import decrWebm from '../img/decr.webm';
import mulWebm from '../img/mul.webm';
import fracWebm from '../img/frac.webm';
import inputWebm from '../img/input.webm';
import solveWebm from '../img/solve.webm';
import resultsWebm from '../img/results.webm';

class Usage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   load: props.load /*? props.load : 'exercise'*/
    // };

    this.slide = 0;
    this.imgs = {
      operator: operatorWebm,
      sum: sumWebm,
      decr: decrWebm,
      mul: mulWebm,
      frac: fracWebm,
      input: inputWebm,
      solve: solveWebm,
      results: resultsWebm
    }
    this.videos = {
      operator: operatorVideo,
      sum: sumVideo,
      decr: decrVideo,
      mul: mulVideo,
      frac: fracVideo,
      input: inputVideo,
      solve: solveVideo,
      results: resultsVideo
    }

    this.message = (
      <p className='message'><i>Внешний вид приложения может отличаться от видео, просьба заглядывать в DevLog, приложение в процессе доработки.</i></p>
    )

    this.onClick = this.popupToggle.bind(this);

    this.getData = () => JSON.parse(JSON.stringify(jsonData));
    this.data = {
      greet: {
        operator: this.getData().greet.operator,
        sum: this.getData().greet.sum,
        decr: this.getData().greet.decr,
        mul: this.getData().greet.mul,
        frac: this.getData().greet.frac,
      },
      exercise: {
        input: this.getData().exercise.input,
        solve: this.getData().exercise.solve,
      },
      stats: {
        results: this.getData().stats.results,
        conclusion: this.getData().stats.conclusion,
      }
    }
    // this.slides = this.generateSlides(this.data, this.state.load);

    this.slidesSwitch = this.slidesSwitch.bind(this);
  }

  popupToggle(event) {
    this.props.onClick(event);
  }

  slidesSwitch(event) {
    const TARGET = event.target;
    const VALUE = TARGET.value;
    //const SLIDE = this.slide;
    // const SLIDES = this.slides;
    //let slides = this.slides;
    let slides = document.getElementsByClassName('slide');
    let slideNow = document.getElementsByClassName('now')[0];
    let slideNum = this.slide;

    switch (VALUE) {
      case 'next':
        if (slideNum + 1 < slides.length) {
          slideNum++;
          slideNow.classList.toggle('prev');
          slideNow.classList.toggle('now');
          slides[slideNum].classList.toggle('now');
          this.slide = slideNum;
        }
        break;
      case 'prev':
        if (slideNum - 1 >= 0) {
          slideNum--;
          slideNow.classList.toggle('now');
          slides[slideNum].classList.toggle('now');
          slides[slideNum].classList.toggle('prev');
          this.slide = slideNum;
        }
        break;

      default:
        break;
    }
  }

  generateSlides(source, load) {
    const KEYS = Object.keys(source[load]);
    console.log(KEYS);
    let result = Array(KEYS.length);
    for (let i = 0; i < KEYS.length; i++) {
      console.log(source[load][KEYS[i]]);
      result[i] = (
        <div key={KEYS[i]} className={i ? 'slide' : 'slide now'}>
          {this.generateSlide(source[load][KEYS[i]])}
        </div>
      );
    }
    return (result);
  }

  generateSlide(elem) {
    const TITLE = elem.title;
    const BODY = elem.body.map(
      (subElem, index) => {
        const TYPE = subElem.type;
        switch (TYPE) {
          case 'par':
            const BODY = subElem.body;
            return (<p key={index}>{BODY}</p>);
          case 'video':
            const KEY = subElem.key;
            const SOURCE_WEBM = this.imgs[KEY];
            const SOURCE_MP4 = this.videos[KEY];
            console.log(KEY);
            return (
              <div className='' key={index}>
                <video
                  loop={true}
                  autoPlay={true}
                  muted={true}
                  preload='none'
                  className='content'>
                  <source src={SOURCE_WEBM} type="video/webm" />
                  <source src={SOURCE_MP4} type="video/mp4" />
                </video>
              </div>
            );

          default:
            break;
        }
      }
    )

    return (
      <div className='text__section'>
        <span className='text__sectiontitle'>{TITLE}</span>
        <div className='text__par'>{BODY}</div>
      </div>
    );
  }

  render() {
    const LOAD = this.props.load;
    const DATA = this.data;
    const SLIDES = this.generateSlides(DATA, LOAD);
    return (
      <div className='popup' id='usage-popup'>
        <div className='popup__container'>
          <div className='popup__content'>
            <button type='button'
              className='close icon-times-solid'
              name='usage-popup'
              onClick={this.onClick}></button>
            <span className='popup__title'>Использование</span>
            <div className='container'>
              <div className='slides'>
                {SLIDES}
                {/* {this.generateSlides(DATA, LOAD)} */}
              </div>
            </div>
            <div className='slides-controls'>
              <button type='button'
                onClick={this.slidesSwitch}
                value='prev'
                className='icon-angle-double-left-solid'>
              </button>
              <button type='button'
                onClick={this.slidesSwitch}
                value='next'
                className='icon-angle-double-right-solid'></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Usage;
