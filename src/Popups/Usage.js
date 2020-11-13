import React from 'react';
import '../css/Popup.css';
import jsonData from '../json/usage.json';
import operatorVideo from '../img/operator.mp4';
import sumVideo from '../img/sum.mp4';
import decrVideo from '../img/decr.mp4';
import mulVideo from '../img/mul.mp4';
import fracVideo from '../img/frac.mp4';
import operatorWebm from '../img/operator.webm';
import sumWebm from '../img/sum.webm';
import decrWebm from '../img/decr.webm';
import mulWebm from '../img/mul.webm';
import fracWebm from '../img/frac.webm';
class Usage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: props.load ? props.load : 'greet',
    };

    this.slide = 0;
    this.imgs = {
      operator: operatorWebm,
      sum: sumWebm,
      decr: decrWebm,
      mul: mulWebm,
      frac: fracWebm
    }
    this.videos = {
      operator: operatorVideo,
      sum: sumVideo,
      decr: decrVideo,
      mul: mulVideo,
      frac: fracVideo
    }

    this.message = (
      <p className='message'><i>Убедительная просьба заглядывать в DevLog, прежде чем ругаться о недочетаx и т.п., возможно они уже в процессе исправления.</i></p>
    )

    this.onClick = this.popupToggle.bind(this);
    this.greetUsage = (
      <div>
        <div className='text__section'>
          <span className='text__sectiontitle'>Выбор оператора</span>
          <div className='text__subsection'>
            <div className='text__par'>
              <p>В прямоугольнике под кнопкой "Старт" можно выбрать небходимый оператор.</p>
              <p>Доступны: сложение, вычитание, умножение, деление. Числа генерируются псевдослучайным образом, но по определенным правилам.</p>
              {/* <img src={this.imgs.operator}
              className='content' /> */}
              <video
                loop={true}
                autoPlay={true}
                className='content'>
                <source src={this.imgs.operator} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className='text__section'>
          <span className='text__sectiontitle'>Генерация выражения</span>
          <div className='text__subsection'>
            <div className='text__par'>
              <p>Первые два поля <b>всегда</b> отвечают за число разрядов для членов выражения, т.е. у <i>первого</i> элемента будет число разрядов равное числу в <i>первом</i> поле, аналогично для второго. Далее будет описано особое поведение этих полей.</p>
            </div>
          </div>
          <div className='text__subsection'>
            <span className='text__subtitle'>Сложение</span>
            <div className='text__par'>
              <p>Все было описано выше, никакого особого поведения нет.</p>
              {/* <img src={this.imgs.sum}
                className='content' /> */}
              <video
                loop={true}
                autoPlay={true}
                className='content'>
                <source src={this.imgs.sum} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className='text__subsection'>
            <span className='text__subtitle'>Вычитание</span>
            <div className='text__par'>
              <p>Числа генерируются так, что <i>второй</i> член выражения будет <b>всегда</b> меньше <i>первого</i> (даже если число разрядов для <i>второго</i> члена будет указано больше, чем для <i>первого</i>).</p>
              {/* <img src={this.imgs.decr}
                className='content' /> */}
              <video
                loop={true}
                autoPlay={true}
                className='content'>
                <source src={this.imgs.decr} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className='text__subsection'>
            <span className='text__subtitle'>Умножение</span>
            <div className='text__par'>
              <p>При выборе этого оператора ображаются <b>три</b> поля ввода. Поля ввода числа разрядов и поле для ввода множителя.</p>
              <p>Однако, при указании во <i>втором</i> поле значения "<b>1</b>", <i>второй множитель</i> <b>всегда</b> будет равен значению в поле "Множитель", а <i>первый множитель</i> будет <b>всегда</b> иметь <b>один</b> разряд.</p>
              {/* <img src={this.imgs.mul}
                className='content' /> */}
              <video
                loop={true}
                autoPlay={true}
                className='content'>
                <source src={this.imgs.mul} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className='text__subsection'>
            <span className='text__subtitle'>Деление</span>
            <div className='text__par'>
              <p>Числа генерируются так, что <i>делимое</i> <b>всегда</b> будет делиться <b>нацело</b>, а <i>делитель</i> <b>никогда</b> не будет равен 0.</p>
              {/* <img src={this.imgs.frac}
                className='content' /> */}
              <video
                loop={true}
                autoPlay={true}
                className='content'>
                <source src={this.imgs.frac} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <p>Теперь вы готовы упражняться, смело жмите кнопку "Старт".</p>
      </div>
    )
    this.getData = () => JSON.parse(JSON.stringify(jsonData));
    this.data = {
      greet: {
        operator: this.getData().greet.operator,
        sum: this.getData().greet.sum,
        decr: this.getData().greet.decr,
        mul: this.getData().greet.mul,
        frac: this.getData().greet.frac,
      }
    }
    this.slides = this.generateSlides(this.data, this.state.load);

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
    //const SLIDES = document.getElementsByClassName('slide');
    // const CURRENT = document.getElementsByClassName('now');
    // CURRENT.classList.toggle('prev');
    // for (let item in SLIDES) {

    // }
  }

  generateSlides(source, load) {
    const KEYS = Object.keys(source[load]);
    console.log(KEYS);
    let result = Array(KEYS.length);
    for (let i = 0; i < KEYS.length; i++) {
      console.log(source[load][KEYS[i]]);
      result[i] = (
        <div className={i ? 'slide' : 'slide now'}>
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
              <div className='container' key={index}>
                <video
                  loop={true}
                  autoPlay={true}
                  muted={true}
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
    const LOAD = this.state.load;
    const MSG = this.message;
    const DATA = this.data;
    const SLIDE = this.state.slide;
    let usage;
    switch (LOAD) {
      case 'greet':
        usage = this.greetUsage;
    }
    //const SLIDES = this.generateSlides(DATA, LOAD);
    const SLIDES = this.slides;
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
