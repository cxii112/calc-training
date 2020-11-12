import React from 'react';
import './Popup.css';
import operatorVIDEO from '../img/operator_choose.mp4';
import sumLimitsVIDEO from '../img/sum_limits.mp4';
import decrLimitsVIDEO from '../img/decr_limits.mp4';
import mulLimitsVIDEO from '../img/mul_limits.mp4';
import fracLimitsVIDEO from '../img/frac_limits.mp4';
class Usage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: props.load ? props.load : 'greet',
    };

    this.imgs = {
      operator: operatorVIDEO,
      sum: sumLimitsVIDEO,
      decr: decrLimitsVIDEO,
      mul: mulLimitsVIDEO,
      frac: fracLimitsVIDEO
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
              <video id="background-video" loop autoPlay className='content'>
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
              <video id="background-video" loop autoPlay className='content'>
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
              <video id="background-video" loop autoPlay className='content'>
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
              <video id="background-video" loop autoPlay className='content'>
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
              <video id="background-video" loop autoPlay className='content'>
                <source src={this.imgs.frac} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <p>Теперь вы готовы упражняться, смело жмите кнопку "Старт".</p>
      </div>
    )
  }

  popupToggle(event) {
    // const CN = event.currentTarget;
    // CN.classList.toggle('closing');
    this.props.onClick(event);
  }

  render() {
    const LOAD = this.state.load;
    let usage;
    switch (LOAD) {
      case 'greet':
        usage = this.greetUsage;
    }
    return (
      <div className='popup' name='usage' id='popup' onClick={this.onClick}>
        <div className='popup__container'>
          <div className='popup__content'>
            <div className='text'>
              <span className='text__title'>Использование</span>
              <p><i>Убедительная просьба дочитать это руководство <b>до конца</b>, особенно если вы читаете его в первый раз. Взависимости от того на какой странице Вы находитесь будет меняться содержание этого руководства. Также просьба заглядывать в DevLog, прежде чем ругаться о недочетач и т.п., возможно они уже в процессе исправления.</i></p>
              {usage}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Usage;
