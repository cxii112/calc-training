import React from 'react';
import './Popup.css';
class DevLog extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         load: props.load ? props.load : 'greet',
      }
      this.lastUpdated = '10.11.2020';
      this.onClick = this.popupToggle.bind(this);
      this.content = (
         <div className=''>
            <div className=''>
               <div className='text__section'>
                  <span className='text__sectiontitle'>Известные баги, недороботки недочеты</span>
                  <div className='text__subsection'>
                     <div className='text__par'>
                        <li className=''>В некоторых случаях число генерируется неправильно и выдает 100-значное число. Лечится перезагрузкой, было замечено только на телефонах.</li>
                        <li>Внешний вид примеров и статистики требует доработки.</li>
                        <li className='red'>Наверное стоит переписать "Помощь".</li>
                        <li>Пустая "Помощь" для статистики и упражнения.</li>
                        <li>Не хватает картинок.</li>
                     </div>
                  </div>
               </div>
               <div className='text__section'>
                  <span className='text__sectiontitle'>Изменения</span>
                  <div className='text__subsection'>
                     <span className='text__subtitle'>Добавлено</span>
                     <div className='text__par'>
                        <li>Автофокусировка на поле ввода</li>
                        <li>Защита от ввода текста</li>
                        <li>Ну собственно этот раздел.</li>
                        <li>Помощь.</li>
                        <li>Анимации.</li>
                        <li>Выделения цветом.</li>
                        <li className='green'>Проверка ввода.</li>
                        <li className='green'>Список примеров.</li>
                        <li>Минимальное количество примеров для завершения и отображения количества.</li>
                     </div>
                  </div>
                  <div className='text__subsection'>
                     <span className='text__subtitle'>Изменено</span>
                     <div className='text__par'>
                        <li className='green'>Обнуление поля ответа.</li>
                        <li>Переключатели в главном меню.</li>
                        <li>Внешний вид некоторых элементов.</li>
                        <li>Проверка ввода. Больше нельзя ответить на первый и нажимать "Следующий"</li>
                        <li>Не знаю стоит ли писать о внутренних изменениях, но они были. :D</li>
                        <li className='green'>Теперь при переходе к упражнению модальное окно как и положено прячется.</li>
                        <li className='green'>При выборе <b>любого</b> оператора подписи не пропадают.</li>
                        <li>Подписи к полям ввода.</li>
                     </div>
                  </div>
                  <div className='text__subsection'>
                     <span className='text__subtitle'>Убрано</span>
                     <div className='text__par'>
                        <li>Пока ничего.</li>
                     </div>
                  </div>
               </div>
               <div className='text__section'>
                  <span className='text__sectiontitle'>Планы</span>
                  <div className='text__subsection'>
                     <span className='text__subtitle'>Добавить</span>
                     <div className='text__par'>
                        <p>УХХХХХ.... ПОГНАЛИ!</p>
                        <li>Список неправильных ответов. Ну или вообще список ответов.</li>
                        <li>Отображение корректности ответа. Хотя, возможно, оно и не надо вовсе, если выводить номер и список ответов.</li>
                        <li>"Помощь" для упражнений и статистики.</li>
                     </div>
                  </div>
                  <div className='text__subsection'>
                     <span className='text__subtitle'>Изменить</span>
                     <div className='text__par'>
                        <li>Внешний вид главного меню для мобильных.</li>
                        <li>Внешний вид статистики и упражнений.</li>
                        <li>Внешний вид некоторых элементов.</li>
                     </div>
                  </div>
                  <div className='text__subsection'>
                     <span className='text__subtitle'>Убрать</span>
                     <div className='text__par'>
                        <li>Пока ничего. Но, уверен, найдется.</li>
                     </div>
                  </div>
               </div>
               <div className='text__section'>
                  <span className='text__sectiontitle'>Связь</span>
                  <p>Пока что связь осуществляется через <a className='gray' type='link' href='https://vk.com/cxii112'>Вконтакте</a>. Прошу прикреплять снимки экрана с недочетами, ошибками и пр. или подробно описывать недоработки. Желательно подробно рассказать о действиях, которые были совершены перед тем, как появилась ошибка (возможно они и не связаны).</p>
                  <p></p>
               </div>
            </div>
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
      let devLog;
      switch (LOAD) {
         case 'greet':
            devLog = this.content;
      }
      return (
         <div className='popup' name='devLog' onClick={this.onClick}>
            <div className='popup__container'>
               <div className='popup__content'>
                  <div className='text'>
                     <span className='text__title'>DevLog</span>
                     <p>Здесь будет размещаться информация о ходе разработки и пр.</p>
                     {devLog}
                     <p>Обновено <span className='gray'>{this.lastUpdated}</span></p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default DevLog;
