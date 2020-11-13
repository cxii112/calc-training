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
    this.slides = [];
    this.slides.push(this.generateSlide(this.data.greet.operator));
    //console.log(this.slides);
  }

  popupToggle(event) {
    this.props.onClick(event);
  }

  generateSlide(elem) {
    const TITLE = elem.title;
    const BODY = elem.body.map(
      (subElem) => {
        const TYPE = subElem.type;
        const BODY = subElem.body;
        switch (TYPE) {
          case 'par':
            return (<p>{BODY}</p>);
          case 'video':
            const KEY = subElem.key;
            const SOURCE_WEBM = this.imgs[KEY];
            const SOURCE_MP4 = this.videos[KEY];
            console.log(KEY);
            return (
              <video
                loop={true}
                autoPlay={true}
                muted={true}
                className='content'>
                <source src={SOURCE_WEBM} type="video/webm" />
                <source src={SOURCE_MP4} type="video/mp4" />
              </video>
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
    let usage;
    switch (LOAD) {
      case 'greet':
        usage = this.greetUsage;
    }
    const SLIDE = this.slides[0];
    return (
      <div className='popup' id='usage-popup'>
        <div className='popup__container'>
          <div className='popup__content'>
            <button type='button'
              className='close icon-times-solid'
              name='usage-popup'
              onClick={this.onClick}></button>
            <div className='text'>
              <span className='text__title'>Использование</span>
              <p><i>Убедительная просьба дочитать это руководство <b>до конца</b>, особенно если вы читаете его в первый раз. Взависимости от того на какой странице Вы находитесь будет меняться содержание этого руководства. Также просьба заглядывать в DevLog, прежде чем ругаться о недочетач и т.п., возможно они уже в процессе исправления.</i></p>
              {SLIDE}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Usage;
