(this["webpackJsonpcalc-training"]=this["webpackJsonpcalc-training"]||[]).push([[0],[,,,,,,,,,function(e,t,s){},,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(3),i=s.n(a),n=s(10),r=s.n(n),l=(s(16),s(2)),h=s(4),o=s(5),d=s(1),j=s(7),b=s(6),u=(s(17),s(18),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(h.a)(this,s),(c=t.call(this,e)).state={operator:e.operator,factor:e.factor?e.factor:2,first:e.first?e.first:2,second:e.second?e.second:1},c.titles={first:"###",second:"###",factor:"\u041c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c"},c.texts={sum:{first:"1-\u043c \u0441\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u043c",second:"2-\u043c \u0441\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u043c"},decr:{first:"\u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u043c\u043e\u043c",second:"\u0432\u044b\u0447\u0438\u0442\u0430\u0435\u043c\u043e\u043c"},mul:{first:"1-\u043c \u043c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u0435",second:"2-\u043c \u043c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u0435"},frac:{first:"\u0434\u0435\u043b\u0438\u043c\u043e\u043c",second:"\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435"}},c.mins={first:1,second:1,factor:2},c.maxs={first:3,second:3,factor:9},c.handleChanges=c.handleChanges.bind(Object(d.a)(c)),c}return Object(o.a)(s,[{key:"changeTitles",value:function(e){switch(console.log("titles "+e),console.log(this.texts),e){case"mul":this.titles.first=this.texts.mul.first,this.titles.second=this.texts.mul.second;break;case"frac":this.titles.first=this.texts.frac.first,this.titles.second=this.texts.frac.second;break;case"sum":this.titles.first=this.texts.sum.first,this.titles.second=this.texts.sum.second;break;case"decr":this.titles.first=this.texts.decr.first,this.titles.second=this.texts.decr.second}console.log(this.titles)}},{key:"limitsRender",value:function(e){var t,s=Object(c.jsxs)("div",{className:"number",children:[Object(c.jsx)("span",{className:"number__title",children:this.titles.first}),Object(c.jsx)("input",{className:"number__input",type:"number",name:"first",min:this.mins.first,max:this.maxs.first,value:this.state.first,step:"1",onChange:this.handleChanges})]}),a=Object(c.jsxs)("div",{className:"number",children:[Object(c.jsx)("span",{className:"number__title",children:this.titles.second}),Object(c.jsx)("input",{className:"number__input",type:"number",name:"second",min:this.mins.second,max:this.maxs.second,value:this.state.second,step:"1",onChange:this.handleChanges})]}),i=Object(c.jsxs)("div",{className:"number",children:[Object(c.jsx)("span",{className:"number__title",children:this.titles.factor}),Object(c.jsx)("input",{className:"number__input",type:"number",name:"factor",min:this.mins.factor,max:this.maxs.factor,value:this.state.factor,step:"1",onChange:this.handleChanges})]});switch(e){case"mul":t=Object(c.jsxs)("div",{className:"container gray",children:[Object(c.jsxs)("div",{className:"",children:[Object(c.jsx)("div",{children:"\u0427\u0438\u0441\u043b\u043e \u0440\u0430\u0437\u0440\u044f\u0434\u043e\u0432 \u0432"}),s,a]}),Object(c.jsx)("div",{className:"",children:i})]});break;default:t=Object(c.jsx)("div",{className:"container gray",children:Object(c.jsxs)("div",{className:"",children:[Object(c.jsx)("div",{children:"\u0427\u0438\u0441\u043b\u043e \u0440\u0430\u0437\u0440\u044f\u0434\u043e\u0432 \u0432"}),s,a]})})}return t}},{key:"handleChanges",value:function(e){var t=e.target.name,s=e.target.type,c=e.target.value;switch(s){case"number":switch(t){case"first":Number(c)>this.maxs.first&&(c=this.maxs.first);break;case"second":Number(c)>this.maxs.first&&(c=this.maxs.second);break;case"factor":Number(c)>this.maxs.first&&(c=this.maxs.factor)}this.setState(Object(l.a)({},t,Number(c)));break;case"button":case"select-one":this.setState(Object(l.a)({},t,c))}this.props.handleChanges(e)}},{key:"render",value:function(){var e=this.state.operator;this.changeTitles(e);var t=this.limitsRender(e);return Object(c.jsxs)("div",{className:"Greet container",children:[Object(c.jsx)("button",{className:"content",type:"button",onClick:this.handleChanges,name:"load",value:"exercise",children:"\u0421\u0442\u0430\u0440\u0442"}),Object(c.jsxs)("select",{value:this.state.operator,onChange:this.handleChanges,name:"operator",className:"content",children:[Object(c.jsx)("option",{value:"sum",children:"\u0421\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(c.jsx)("option",{value:"decr",children:"\u0412\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u0435"}),Object(c.jsx)("option",{value:"mul",children:"\u0423\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(c.jsx)("option",{value:"frac",children:"\u0414\u0435\u043b\u0435\u043d\u0438\u0435"})]}),t]})}}]),s}(i.a.Component)),x=(s(19),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var c;switch(Object(h.a)(this,s),(c=t.call(this,e)).state={load:void 0,operator:e.operator,solveToFinish:e.solveToFinish?e.solveToFinish:5,current:"",autoFocus:!1,factor:e.factor?e.factor:2,first:e.first?e.first:2,second:e.second?e.second:1,correct:e.correct?e.correct:0,total:e.total?e.total:0},c.sym="",c.state.operator){case"sum":c.sym="+";break;case"decr":c.sym="-";break;case"mul":c.sym="*";break;case"frac":c.sym=":"}return c.current={first:0,second:0,correct:0,answer:""},c.stats={correct:0,total:0},c.equasions=[],c.handleChanges=c.handleChanges.bind(Object(d.a)(c)),c.handleAnswer=c.handleAnswer.bind(Object(d.a)(c)),c.generateEquasion(),c}return Object(o.a)(s,[{key:"handleAnswer",value:function(e){"number"===typeof Number(e.target.value)?(this.current.answer=Number(e.target.value),this.setState(Object(l.a)({},e.target.name,this.current.answer))):this.setState(Object(l.a)({},e.target.name,""))}},{key:"handleChanges",value:function(e){var t=e.target.name,s=e.target.value;switch(e.target.type){case"number":this.setState(Object(l.a)({},t,Number(s)));break;case"button":switch(t){case"load":this.setState(Object(l.a)({},t,s)),this.props.statsUpd(this.stats),this.props.handleEquasions(this.equasions),this.props.handleChanges(e);break;case"answer":this.check()&&(this.setState({total:this.stats.total,correct:this.stats.correct,current:"",autoFocus:!0}),this.generateEquasion())}}}},{key:"check",value:function(){return"number"===typeof this.current.answer&&(this.current.answer===this.current.correct&&this.stats.correct++,this.equasions.push({first:this.current.first,second:this.current.second,answer:this.current.answer,correct:this.current.correct}),this.current.answer="",this.stats.total++,!0)}},{key:"generateEquasion",value:function(){switch(this.state.operator){case"sum":this.current.first=Math.floor(Math.random()*Math.pow(10,this.state.first)),this.current.second=Math.floor(Math.random()*Math.pow(10,this.state.second)),this.current.correct=this.current.first+this.current.second;break;case"decr":if(this.current.first=Math.floor(Math.random()*Math.pow(10,this.state.first)),this.current.second=Math.floor(Math.random()*Math.pow(10,this.state.second)),this.current.first<this.current.second){var e=this.current.first;this.current.first=this.current.second,this.current.second=e}this.current.correct=this.current.first-this.current.second;break;case"mul":this.state.second>=2?(this.current.first=Math.floor(Math.random()*Math.pow(10,this.state.first)),this.current.second=Math.floor(Math.random()*Math.pow(10,this.state.second)),this.current.correct=this.current.first*this.current.second):(this.current.first=Math.floor(Math.random()*Math.pow(10,1)),this.current.second=this.state.factor,this.current.correct=this.current.first*this.current.second),console.log(this.current.correct);break;case"frac":do{if(this.current.first=Math.floor(Math.random()*Math.pow(10,this.state.first)),this.current.second=Math.floor(Math.random()*Math.pow(10,this.state.second)),this.current.first<this.current.second){var t=this.current.first;this.current.first=this.current.second,this.current.second=t}0===this.current.second&&this.current.second++}while(this.current.first%this.current.second!==0);this.current.correct=this.current.first/this.current.second}console.log(this.current.first+this.sym+this.current.second+"="+this.current.correct)}},{key:"render",value:function(){var e;return e=this.state.total>=this.state.solveToFinish?Object(c.jsx)("button",{className:"",type:"button",onClick:this.handleChanges,name:"load",value:"stats",children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"}):Object(c.jsxs)("button",{className:"gray",type:"button",name:"load",value:"stats",children:["\u0414\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f ",this.state.solveToFinish-this.stats.total]}),Object(c.jsx)("div",{className:"Exercise container",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:this.current.first}),Object(c.jsx)("span",{children:this.sym}),Object(c.jsx)("span",{children:this.current.second}),Object(c.jsx)("span",{children:"="}),Object(c.jsx)("input",{type:"number",pattern:"^[0-9]+$",name:"current",placeholder:"\u041e\u0442\u0432\u0435\u0442",value:this.state.current,onChange:this.handleAnswer,autoFocus:!0})]})}),Object(c.jsx)("button",{className:"",type:"button",name:"answer",onClick:this.handleChanges,children:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439"}),e]})})}}]),s}(i.a.Component)),O=(s(20),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(h.a)(this,s),(c=t.call(this,e)).state={load:void 0,operator:e.operator,correct:e.correct?e.correct:0,total:e.total?e.total:0},c.equasions=c.props.equasions.slice(),c.handleChanges=c.handleChanges.bind(Object(d.a)(c)),c}return Object(o.a)(s,[{key:"equasionsParse",value:function(){var e,t=this.equasions;switch(this.state.operator){case"sum":e="+";break;case"decr":e="-";break;case"mul":e="*";break;case"frac":e=":"}var s=t.map((function(t,s){return Object(c.jsxs)("li",{className:"container",children:[Object(c.jsxs)("div",{className:t.answer!==t.correct?"red content":"content",children:[t.first," ",e," ",t.second," = ",t.answer]}),Object(c.jsx)("div",{className:"green content",children:t.answer!==t.correct?"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e: "+t.correct:""})]},s)}));return Object(c.jsx)("div",{className:"content",children:s})}},{key:"handleChanges",value:function(e){var t=e.target.name,s=e.target.value;switch(e.target.type){case"range":this.setState(Object(l.a)({},t,Number(s)));break;case"button":case"select-one":this.setState(Object(l.a)({},t,s))}this.props.handleChanges(e)}},{key:"render",value:function(){console.log("stats"),console.log(this.equasions);var e=this.equasionsParse();return Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"Stats",children:Object(c.jsx)("div",{className:"Stats__container",children:Object(c.jsxs)("div",{className:"Stats__content",children:[Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"",children:["\u0412\u0435\u0440\u043d\u043e",Object(c.jsx)("span",{className:"",children:this.state.correct}),"\u0438\u0437",Object(c.jsx)("span",{className:"",children:this.state.total})]})})}),Object(c.jsx)("div",{className:"",children:e}),Object(c.jsx)("button",{className:"content",type:"button",onClick:this.handleChanges,name:"load",value:"greet",children:"\u0412 \u043d\u0430\u0447\u0430\u043b\u043e"})]})})})})}}]),s}(i.a.Component)),m=(s(9),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).state={load:e.load?e.load:"greet"},a.onClick=a.popupToggle.bind(Object(d.a)(a)),a.greetUsage=Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"text__section",children:[Object(c.jsx)("span",{className:"text__sectiontitle",children:"\u0412\u044b\u0431\u043e\u0440 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430"}),Object(c.jsx)("div",{className:"text__subsection",children:Object(c.jsxs)("div",{className:"text__par",children:[Object(c.jsx)("p",{children:'\u0412 \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0435 \u043f\u043e\u0434 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 "\u0421\u0442\u0430\u0440\u0442" \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0435\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440.'}),Object(c.jsx)("p",{children:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b: \u0441\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0432\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u0435, \u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435, \u0434\u0435\u043b\u0435\u043d\u0438\u0435. \u0427\u0438\u0441\u043b\u0430 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u0441\u0435\u0432\u0434\u043e\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043d\u043e \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c."})]})})]}),Object(c.jsxs)("div",{className:"text__section",children:[Object(c.jsx)("span",{className:"text__sectiontitle",children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f"}),Object(c.jsx)("div",{className:"text__subsection",children:Object(c.jsx)("div",{className:"text__par",children:Object(c.jsxs)("p",{children:["\u041f\u0435\u0440\u0432\u044b\u0435 \u0434\u0432\u0430 \u043f\u043e\u043b\u044f ",Object(c.jsx)("b",{children:"\u0432\u0441\u0435\u0433\u0434\u0430"})," \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442 \u0437\u0430 \u0447\u0438\u0441\u043b\u043e \u0440\u0430\u0437\u0440\u044f\u0434\u043e\u0432 \u0434\u043b\u044f \u0447\u043b\u0435\u043d\u043e\u0432 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0442.\u0435. \u0443 ",Object(c.jsx)("i",{children:"\u043f\u0435\u0440\u0432\u043e\u0433\u043e"})," \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u0447\u0438\u0441\u043b\u043e \u0440\u0430\u0437\u0440\u044f\u0434\u043e\u0432 \u0440\u0430\u0432\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u0443 \u0432 ",Object(c.jsx)("i",{children:"\u043f\u0435\u0440\u0432\u043e\u043c"})," \u043f\u043e\u043b\u0435, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0434\u043b\u044f \u0432\u0442\u043e\u0440\u043e\u0433\u043e. \u0414\u0430\u043b\u0435\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u043e\u0441\u043e\u0431\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u044d\u0442\u0438\u0445 \u043f\u043e\u043b\u0435\u0439."]})})}),Object(c.jsxs)("div",{className:"text__subsection",children:[Object(c.jsx)("span",{className:"text__subtitle",children:"\u0421\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(c.jsx)("div",{className:"text__par",children:Object(c.jsx)("p",{children:"\u0412\u0441\u0435 \u0431\u044b\u043b\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432\u044b\u0448\u0435, \u043d\u0438\u043a\u0430\u043a\u043e\u0433\u043e \u043e\u0441\u043e\u0431\u043e\u0433\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043d\u0435\u0442."})})]}),Object(c.jsxs)("div",{className:"text__subsection",children:[Object(c.jsx)("span",{className:"text__subtitle",children:"\u0412\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u0435"}),Object(c.jsx)("div",{className:"text__par",children:Object(c.jsxs)("p",{children:["\u0427\u0438\u0441\u043b\u0430 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0442\u0430\u043a, \u0447\u0442\u043e ",Object(c.jsx)("i",{children:"\u0432\u0442\u043e\u0440\u043e\u0439"})," \u0447\u043b\u0435\u043d \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0435\u0442 ",Object(c.jsx)("b",{children:"\u0432\u0441\u0435\u0433\u0434\u0430"})," \u043c\u0435\u043d\u044c\u0448\u0435 ",Object(c.jsx)("i",{children:"\u043f\u0435\u0440\u0432\u043e\u0433\u043e"})," (\u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0447\u0438\u0441\u043b\u043e \u0440\u0430\u0437\u0440\u044f\u0434\u043e\u0432 \u0434\u043b\u044f ",Object(c.jsx)("i",{children:"\u0432\u0442\u043e\u0440\u043e\u0433\u043e"})," \u0447\u043b\u0435\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0434\u043b\u044f ",Object(c.jsx)("i",{children:"\u043f\u0435\u0440\u0432\u043e\u0433\u043e"}),")."]})})]}),Object(c.jsxs)("div",{className:"text__subsection",children:[Object(c.jsx)("span",{className:"text__subtitle",children:"\u0423\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(c.jsxs)("div",{className:"text__par",children:[Object(c.jsxs)("p",{children:["\u041f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u044d\u0442\u043e\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f ",Object(c.jsx)("b",{children:"\u0442\u0440\u0438"})," \u043f\u043e\u043b\u044f \u0432\u0432\u043e\u0434\u0430. \u041f\u043e\u043b\u044f \u0432\u0432\u043e\u0434\u0430 \u0447\u0438\u0441\u043b\u0430 \u0440\u0430\u0437\u0440\u044f\u0434\u043e\u0432 \u0438 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430 \u043c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044f."]}),Object(c.jsxs)("p",{children:["\u041e\u0434\u043d\u0430\u043a\u043e, \u043f\u0440\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0438 \u0432\u043e ",Object(c.jsx)("i",{children:"\u0432\u0442\u043e\u0440\u043e\u043c"}),' \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f "',Object(c.jsx)("b",{children:"1"}),'", ',Object(c.jsx)("i",{children:"\u0432\u0442\u043e\u0440\u043e\u0439 \u043c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c"})," ",Object(c.jsx)("b",{children:"\u0432\u0441\u0435\u0433\u0434\u0430"}),' \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u0435\u043d \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u0432 \u043f\u043e\u043b\u0435 "\u041c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c", \u0430 ',Object(c.jsx)("i",{children:"\u043f\u0435\u0440\u0432\u044b\u0439 \u043c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c"})," \u0431\u0443\u0434\u0435\u0442 ",Object(c.jsx)("b",{children:"\u0432\u0441\u0435\u0433\u0434\u0430"})," \u0438\u043c\u0435\u0442\u044c ",Object(c.jsx)("b",{children:"\u043e\u0434\u0438\u043d"})," \u0440\u0430\u0437\u0440\u044f\u0434."]})]})]}),Object(c.jsxs)("div",{className:"text__subsection",children:[Object(c.jsx)("span",{className:"text__subtitle",children:"\u0414\u0435\u043b\u0435\u043d\u0438\u0435"}),Object(c.jsx)("div",{className:"text__par",children:Object(c.jsxs)("p",{children:["\u0427\u0438\u0441\u043b\u0430 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0442\u0430\u043a, \u0447\u0442\u043e ",Object(c.jsx)("i",{children:"\u0434\u0435\u043b\u0438\u043c\u043e\u0435"})," ",Object(c.jsx)("b",{children:"\u0432\u0441\u0435\u0433\u0434\u0430"})," \u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f ",Object(c.jsx)("b",{children:"\u043d\u0430\u0446\u0435\u043b\u043e"}),", \u0430 ",Object(c.jsx)("i",{children:"\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c"})," ",Object(c.jsx)("b",{children:"\u043d\u0438\u043a\u043e\u0433\u0434\u0430"})," \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u0435\u043d 0."]})})]})]}),Object(c.jsx)("p",{children:'\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u0443\u043f\u0440\u0430\u0436\u043d\u044f\u0442\u044c\u0441\u044f, \u0441\u043c\u0435\u043b\u043e \u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 "\u0421\u0442\u0430\u0440\u0442".'})]}),a}return Object(o.a)(s,[{key:"popupToggle",value:function(e){this.props.onClick(e)}},{key:"render",value:function(){var e;switch(this.state.load){case"greet":e=this.greetUsage}return Object(c.jsx)("div",{className:"popup",name:"usage",onClick:this.onClick,children:Object(c.jsx)("div",{className:"popup__container",children:Object(c.jsx)("div",{className:"popup__content",children:Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)("span",{className:"text__title",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(c.jsx)("p",{children:Object(c.jsxs)("i",{children:["\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0441\u044c\u0431\u0430 \u0434\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u044d\u0442\u043e \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e ",Object(c.jsx)("b",{children:"\u0434\u043e \u043a\u043e\u043d\u0446\u0430"}),", \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0447\u0438\u0442\u0430\u0435\u0442\u0435 \u0435\u0433\u043e \u0432 \u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u0430\u0437. \u0412\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u043e\u0433\u043e \u043d\u0430 \u043a\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0412\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430. \u0422\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u0441\u044c\u0431\u0430 \u0437\u0430\u0433\u043b\u044f\u0434\u044b\u0432\u0430\u0442\u044c \u0432 DevLog, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u0440\u0443\u0433\u0430\u0442\u044c\u0441\u044f \u043e \u043d\u0435\u0434\u043e\u0447\u0435\u0442\u0430\u0447 \u0438 \u0442.\u043f., \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043e\u043d\u0438 \u0443\u0436\u0435 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f."]})}),e]})})})})}}]),s}(i.a.Component)),p=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).state={load:e.load?e.load:"greet"},a.lastUpdated="10.11.2020",a.onClick=a.popupToggle.bind(Object(d.a)(a)),a.content=Object(c.jsx)("div",{className:"",children:Object(c.jsxs)("div",{className:"",children:[Object(c.jsxs)("div",{className:"text__section",children:[Object(c.jsx)("span",{className:"text__sectiontitle",children:"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u0431\u0430\u0433\u0438, \u043d\u0435\u0434\u043e\u0440\u043e\u0431\u043e\u0442\u043a\u0438 \u043d\u0435\u0434\u043e\u0447\u0435\u0442\u044b"}),Object(c.jsx)("div",{className:"text__subsection",children:Object(c.jsxs)("div",{className:"text__par",children:[Object(c.jsx)("li",{className:"",children:"\u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0447\u0438\u0441\u043b\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0438 \u0432\u044b\u0434\u0430\u0435\u0442 100-\u0437\u043d\u0430\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e. \u041b\u0435\u0447\u0438\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u043e\u0439, \u0431\u044b\u043b\u043e \u0437\u0430\u043c\u0435\u0447\u0435\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430\u0445."}),Object(c.jsx)("li",{children:"\u041d\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0432\u0435\u0440\u0435\u043d \u0438\u043b\u0438 \u043d\u0435\u0442 \u043e\u0442\u0432\u0435\u0442."}),Object(c.jsx)("li",{className:"red",children:"\u041d\u0435\u0442 \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0435\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432. \u041d\u0443 \u0438\u043b\u0438 \u0445\u043e\u0442\u044f \u0431\u044b \u0441\u043f\u0438\u0441\u043a\u0430 \u0432\u0441\u0435\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432."}),Object(c.jsx)("li",{children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438 \u0432\u043e\u043e\u0431\u0449\u0435 \u0432 \u043d\u0443\u043b\u0435."}),Object(c.jsx)("li",{className:"red",children:'\u041d\u0430\u0432\u0435\u0440\u043d\u043e\u0435 \u0441\u0442\u043e\u0438\u0442 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u0442\u044c "\u041f\u043e\u043c\u043e\u0449\u044c".'}),Object(c.jsx)("li",{children:'\u041f\u0443\u0441\u0442\u0430\u044f "\u041f\u043e\u043c\u043e\u0449\u044c" \u0434\u043b\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438 \u0438 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f.'}),Object(c.jsx)("li",{children:"\u041d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a."})]})})]}),Object(c.jsxs)("div",{className:"text__section",children:[Object(c.jsx)("span",{className:"text__sectiontitle",children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"}),Object(c.jsxs)("div",{className:"text__subsection",children:[Object(c.jsx)("span",{className:"text__subtitle",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"}),Object(c.jsxs)("div",{className:"text__par",children:[Object(c.jsx)("li",{children:"\u0410\u0432\u0442\u043e\u0444\u043e\u043a\u0443\u0441\u0438\u0440\u043e\u0432\u043a\u0430 \u043d\u0430 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430"}),Object(c.jsx)("li",{children:"\u0417\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u0432\u0432\u043e\u0434\u0430 \u0442\u0435\u043a\u0441\u0442\u0430"}),Object(c.jsx)("li",{children:"\u041d\u0443 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u044d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b."}),Object(c.jsx)("li",{children:"\u041f\u043e\u043c\u043e\u0449\u044c."}),Object(c.jsx)("li",{children:"\u0410\u043d\u0438\u043c\u0430\u0446\u0438\u0438."}),Object(c.jsx)("li",{children:"\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442\u043e\u043c."}),Object(c.jsx)("li",{className:"green",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0432\u0432\u043e\u0434\u0430."}),Object(c.jsx)("li",{children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0434\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430."})]})]}),Object(c.jsxs)("div",{className:"text__subsection",children:[Object(c.jsx)("span",{className:"text__subtitle",children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u043e"}),Object(c.jsxs)("div",{className:"text__par",children:[Object(c.jsx)("li",{className:"green",children:"\u041e\u0431\u043d\u0443\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f \u043e\u0442\u0432\u0435\u0442\u0430."}),Object(c.jsx)("li",{children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434 \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043c\u0435\u043d\u044e."}),Object(c.jsx)("li",{children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432."}),Object(c.jsx)("li",{children:'\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0432\u0432\u043e\u0434\u0430. \u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u043f\u0435\u0440\u0432\u044b\u0439 \u0438 \u043d\u0430\u0436\u0438\u043c\u0430\u0442\u044c "\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439"'}),Object(c.jsx)("li",{children:"\u041d\u0435 \u0437\u043d\u0430\u044e \u0441\u0442\u043e\u0438\u0442 \u043b\u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0445, \u043d\u043e \u043e\u043d\u0438 \u0431\u044b\u043b\u0438. :D"}),Object(c.jsx)("li",{className:"green",children:"\u0422\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0435 \u043a \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044e \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e \u043a\u0430\u043a \u0438 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043e \u043f\u0440\u044f\u0447\u0435\u0442\u0441\u044f."}),Object(c.jsxs)("li",{className:"green",children:["\u041f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 ",Object(c.jsx)("b",{children:"\u043b\u044e\u0431\u043e\u0433\u043e"})," \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u043d\u0435 \u043f\u0440\u043e\u043f\u0430\u0434\u0430\u044e\u0442."]}),Object(c.jsx)("li",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0438 \u043a \u043f\u043e\u043b\u044f\u043c \u0432\u0432\u043e\u0434\u0430."})]})]}),Object(c.jsxs)("div",{className:"text__subsection",children:[Object(c.jsx)("span",{className:"text__subtitle",children:"\u0423\u0431\u0440\u0430\u043d\u043e"}),Object(c.jsx)("div",{className:"text__par",children:Object(c.jsx)("li",{children:"\u041f\u043e\u043a\u0430 \u043d\u0438\u0447\u0435\u0433\u043e."})})]})]}),Object(c.jsxs)("div",{className:"text__section",children:[Object(c.jsx)("span",{className:"text__sectiontitle",children:"\u041f\u043b\u0430\u043d\u044b"}),Object(c.jsxs)("div",{className:"text__subsection",children:[Object(c.jsx)("span",{className:"text__subtitle",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(c.jsxs)("div",{className:"text__par",children:[Object(c.jsx)("p",{children:"\u0423\u0425\u0425\u0425\u0425\u0425.... \u041f\u041e\u0413\u041d\u0410\u041b\u0418!"}),Object(c.jsx)("li",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432. \u041d\u0443 \u0438\u043b\u0438 \u0432\u043e\u043e\u0431\u0449\u0435 \u0441\u043f\u0438\u0441\u043e\u043a \u043e\u0442\u0432\u0435\u0442\u043e\u0432."}),Object(c.jsx)("li",{children:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u0438 \u043e\u0442\u0432\u0435\u0442\u0430. \u0425\u043e\u0442\u044f, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043e\u043d\u043e \u0438 \u043d\u0435 \u043d\u0430\u0434\u043e \u0432\u043e\u0432\u0441\u0435, \u0435\u0441\u043b\u0438 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u043e\u0442\u0432\u0435\u0442\u043e\u0432."}),Object(c.jsx)("li",{children:'"\u041f\u043e\u043c\u043e\u0449\u044c" \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0439 \u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438.'})]})]}),Object(c.jsxs)("div",{className:"text__subsection",children:[Object(c.jsx)("span",{className:"text__subtitle",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(c.jsxs)("div",{className:"text__par",children:[Object(c.jsx)("li",{children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434 \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u043c\u0435\u043d\u044e \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445."}),Object(c.jsx)("li",{children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438 \u0438 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0439."}),Object(c.jsx)("li",{children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432."})]})]}),Object(c.jsxs)("div",{className:"text__subsection",children:[Object(c.jsx)("span",{className:"text__subtitle",children:"\u0423\u0431\u0440\u0430\u0442\u044c"}),Object(c.jsx)("div",{className:"text__par",children:Object(c.jsx)("li",{children:"\u041f\u043e\u043a\u0430 \u043d\u0438\u0447\u0435\u0433\u043e. \u041d\u043e, \u0443\u0432\u0435\u0440\u0435\u043d, \u043d\u0430\u0439\u0434\u0435\u0442\u0441\u044f."})})]})]}),Object(c.jsxs)("div",{className:"text__section",children:[Object(c.jsx)("span",{className:"text__sectiontitle",children:"\u0421\u0432\u044f\u0437\u044c"}),Object(c.jsxs)("p",{children:["\u041f\u043e\u043a\u0430 \u0447\u0442\u043e \u0441\u0432\u044f\u0437\u044c \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 ",Object(c.jsx)("a",{className:"gray",type:"link",href:"https://vk.com/cxii112",children:"\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"}),". \u041f\u0440\u043e\u0448\u0443 \u043f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u0441\u043d\u0438\u043c\u043a\u0438 \u044d\u043a\u0440\u0430\u043d\u0430 \u0441 \u043d\u0435\u0434\u043e\u0447\u0435\u0442\u0430\u043c\u0438, \u043e\u0448\u0438\u0431\u043a\u0430\u043c\u0438 \u0438 \u043f\u0440. \u0438\u043b\u0438 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u043d\u0435\u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438. \u0416\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u044b \u043f\u0435\u0440\u0435\u0434 \u0442\u0435\u043c, \u043a\u0430\u043a \u043f\u043e\u044f\u0432\u0438\u043b\u0430\u0441\u044c \u043e\u0448\u0438\u0431\u043a\u0430 (\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043e\u043d\u0438 \u0438 \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u044b)."]}),Object(c.jsx)("p",{})]})]})}),a}return Object(o.a)(s,[{key:"popupToggle",value:function(e){this.props.onClick(e)}},{key:"render",value:function(){var e;switch(this.state.load){case"greet":e=this.content}return Object(c.jsx)("div",{className:"popup",name:"devLog",onClick:this.onClick,children:Object(c.jsx)("div",{className:"popup__container",children:Object(c.jsx)("div",{className:"popup__content",children:Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)("span",{className:"text__title",children:"DevLog"}),Object(c.jsx)("p",{children:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0442\u044c\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0445\u043e\u0434\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438 \u043f\u0440."}),e,Object(c.jsxs)("p",{children:["\u041e\u0431\u043d\u043e\u0432\u0435\u043d\u043e ",Object(c.jsx)("span",{className:"gray",children:this.lastUpdated})]})]})})})})}}]),s}(i.a.Component),f=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).state={load:e.load?e.load:"greet",usage:!1,devLog:!1,operator:"sum",solveToFinish:"dev"===e.status?3:10,factor:e.factor?e.factor:5,first:e.first?e.first:1,second:e.second?e.second:1,correct:e.correct?e.correct:0,total:e.total?e.total:0},a.maxs={first:3,second:3,factor:9},a.equasions=[],a.handleEquasions=a.handleEquasions.bind(Object(d.a)(a)),a.handleChanges=a.handleChanges.bind(Object(d.a)(a)),a.statsUpd=a.statsUpd.bind(Object(d.a)(a)),a.popupToggle=a.popupToggle.bind(Object(d.a)(a)),a.options=Object(c.jsxs)("div",{className:"options",children:[Object(c.jsx)("button",{type:"button",name:"devLog",onClick:a.handleChanges,children:"DevLog"}),Object(c.jsx)("button",{type:"button",name:"usage",onClick:a.handleChanges,children:"\u041f\u043e\u043c\u043e\u0449\u044c"})]}),a}return Object(o.a)(s,[{key:"statsUpd",value:function(e){this.setState({total:e.total,correct:e.correct})}},{key:"handleEquasions",value:function(e){this.equasions=e.slice()}},{key:"popupToggle",value:function(e){console.log("popup ".concat(e.target.name));e.target.name;this.state.usage&&this.setState({usage:!this.state.usage}),this.state.devLog&&this.setState({devLog:!this.state.devLog})}},{key:"handleChanges",value:function(e){var t=e.target.name,s=e.target.type,c=e.target.value;switch(s){case"number":switch(t){case"first":Number(c)>this.maxs.first&&(c=this.maxs.first);break;case"second":Number(c)>this.maxs.first&&(c=this.maxs.second);break;case"factor":Number(c)>this.maxs.first&&(c=this.maxs.factor)}this.setState(Object(l.a)({},t,Number(c)));break;case"button":switch(t){case"usage":this.setState({usage:!this.state.usage});break;case"devLog":this.setState({devLog:!0});break;default:this.setState(Object(l.a)({},t,c))}break;case"select-one":this.setState(Object(l.a)({},t,c))}}},{key:"render",value:function(){this.state.operator,this.state.limits;var e,t,s,a=this.options;switch(this.state.usage&&(t=Object(c.jsx)(m,{onClick:this.popupToggle})),this.state.devLog&&(s=Object(c.jsx)(p,{onClick:this.popupToggle})),this.state.load){case"exercise":e=Object(c.jsx)(x,{operator:this.state.operator,factor:this.state.factor,first:this.state.first,second:this.state.second,solveToFinish:this.state.solveToFinish,handleChanges:this.handleChanges,statsUpd:this.statsUpd,handleEquasions:this.handleEquasions});break;case"stats":e=Object(c.jsx)(O,{operator:this.state.operator,correct:this.state.correct,total:this.state.total,handleChanges:this.handleChanges,equasions:this.equasions});break;default:e=Object(c.jsx)(u,{operator:this.state.operator,factor:this.state.factor,first:this.state.first,second:this.state.second,handleChanges:this.handleChanges})}return Object(c.jsxs)("div",{className:"container",children:[a,Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("div",{className:"App",children:e})}),t,s]})}}]),s}(i.a.Component),v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(f,{load:"greet",status:""})}),document.getElementById("root")),v()}],[[21,1,2]]]);
//# sourceMappingURL=main.c7ed3a44.chunk.js.map