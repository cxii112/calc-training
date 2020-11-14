import React from 'react';
import '../css/Popup.css';
import JSONdata from '../json/log.json';
class DevLog extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         load: props.load ? props.load : 'greet',
      }

      this.getData = (() => JSON.parse(JSON.stringify(JSONdata)));
      //this.data = this.getData();
      this.bugsAndIssues = this.getData().bugsAndIssues;
      this.changes = this.getData().changes;
      this.plans = this.getData().plans;

      this.bugsAndIssuesList = this.bugsAndIssues.content.map((elem, index) =>
         <li key={index}
            className={elem.colorise ? elem.colorise : ''}>
            <span>{elem.body}</span>
            <div className='date icon-calendar-day'>
               {elem.date.day}.{elem.date.month}.{elem.date.year}</div>
         </li>
      );
      this.addedList = this.changes.added.content.map((elem, index) =>
         <li key={index}
            className={elem.colorise ? elem.colorise : ''}>
            <span>{elem.body}</span>
            <div className='date icon-calendar-day'>
               {elem.date.day}.{elem.date.month}.{elem.date.year}</div>
         </li>
      );
      this.changedList = this.changes.changed.content.map((elem, index) =>
         <li key={index}
            className={elem.colorise ? elem.colorise : ''}>
            <span>{elem.body}</span>
            <div className='date icon-calendar-day'>
               {elem.date.day}.{elem.date.month}.{elem.date.year}</div>
         </li>
      );
      this.deletedList = this.changes.deleted.content.map((elem, index) =>
         <li key={index}
            className={elem.colorise ? elem.colorise : ''}>
            <span>{elem.body}</span>
            <div className='date icon-calendar-day'>
               {elem.date.day}.{elem.date.month}.{elem.date.year}</div>
         </li>
      );
      this.addList = this.plans.add.content.map((elem, index) =>
         <li key={index}
            className={elem.colorise ? elem.colorise : ''}>
            <span>{elem.body}</span>
            <div className='date icon-calendar-day'>
               {elem.date.day}.{elem.date.month}.{elem.date.year}</div>
         </li>
      );
      this.changeList = this.plans.change.content.map((elem, index) =>
         <li key={index}
            className={elem.colorise ? elem.colorise : ''}>
            <span>{elem.body}</span>
            <div className='date icon-calendar-day'>
               {elem.date.day}.{elem.date.month}.{elem.date.year}</div>
         </li>
      );
      this.deleteList = this.plans.delete.content.map((elem, index) =>
         <li key={index}
            className={elem.colorise ? elem.colorise : ''}>
            <span>{elem.body}</span>
            <div className='date icon-calendar-day'>
               {elem.date.day}.{elem.date.month}.{elem.date.year}</div>
         </li>
      );
      //this.bugAndIssuesList = this.data().bugAndIssues.slice();
      // console.log(this.bugsAndIssues);
      // console.log(this.changes);
      // console.log(this.plans);
      //console.log(this.bugAndIssuesList);
      this.lastUpdated = '15.11.2020';
      this.onClick = this.popupToggle.bind(this);
      this.content = (
         <div className=''>
            <div className=''>
               <div className='text__section'>
                  <span className='text__sectiontitle'>{this.bugsAndIssues.title}</span>
                  <div className='text__subsection'>
                     <div className='text__par'>
                        {this.bugsAndIssuesList}
                     </div>
                  </div>
               </div>
               <div className='text__section'>
                  <span className='text__sectiontitle'>{this.changes.title}</span>
                  <div className='text__subsection'>
                     <span className='text__subtitle'>{this.changes.added.title}</span>
                     <div className='text__par'>
                        {this.addedList}
                     </div>
                  </div>
                  <div className='text__subsection'>
                     <span className='text__subtitle'>{this.changes.changed.title}</span>
                     <div className='text__par'>
                        {this.changedList}
                     </div>
                  </div>
                  <div className='text__subsection'>
                     <span className='text__subtitle'>{this.changes.deleted.title}</span>
                     <div className='text__par'>
                        {this.deletedList}
                     </div>
                  </div>
               </div>
               <div className='text__section'>
                  <span className='text__sectiontitle'>{this.plans.title}</span>
                  <div className='text__subsection'>
                     <span className='text__subtitle'>{this.plans.add.title}</span>
                     <div className='text__par'>
                        {this.addList}
                     </div>
                  </div>
                  <div className='text__subsection'>
                     <span className='text__subtitle'>{this.plans.change.title}</span>
                     <div className='text__par'>
                        {this.changeList}
                     </div>
                  </div>
                  <div className='text__subsection'>
                     <span className='text__subtitle'>{this.plans.delete.title}</span>
                     <div className='text__par'>
                        {this.deleteList}
                     </div>
                  </div>
               </div>
               <div className='text__section'>
                  <span className='text__sectiontitle'>Связь</span>
                  <p>Пока что связь осуществляется через <a className='gray icon-link' type='link' href='https://vk.com/cxii112'>Вконтакте</a>. Прошу прикреплять снимки экрана с недочетами, ошибками и пр. или подробно описывать недоработки. Желательно подробно рассказать о действиях, которые были совершены перед тем, как появилась ошибка (возможно они и не связаны).</p>
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
         <div className='popup ofv' id='devLog-popup'>
            <div className='popup__container'>
               <div className='popup__content'>
                  <button type='button'
                     className='close icon-times-solid'
                     name='devLog-popup'
                     onClick={this.onClick}></button>
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
