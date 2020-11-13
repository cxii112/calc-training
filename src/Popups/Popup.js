import React from 'react';
import '../css/Popup.css';
class Popup extends React.Component {
   constructor(props) {
      super(props);
      this.load = (props.load ? props.load : 'greet');
      this.name = props.name;
      this.title = props.title;

      this.content = (<p>POPUP</p>);
   }

   popupToggle(event) {
      this.props.onClick(event);
   }

   render() {
      const TITLE = this.title;
      const NAME = this.name + '-popup';
      const ID = NAME + '-popup';
      const CONTENT = this.content;
      return (
         <div className='popup' id={ID}>
            <div className='popup__container'>
               <div className='popup__content'>
                  <button type='button'
                     className='close icon-times-solid'
                     name={NAME}
                     onClick={this.onClick}></button>
                  <div className='text'>
                     <span className='text__title'>{TITLE}</span>
                     {CONTENT}
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Popup;
