(this["webpackJsonpcalc-training"]=this["webpackJsonpcalc-training"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var a=s(0),n=s(2),r=s.n(n),c=s(9),i=s.n(c),h=(s(15),s(1)),o=s(4),l=s(5),d=s(3),u=s(7),b=s(6),j=(s(16),s(17),function(t){Object(u.a)(s,t);var e=Object(b.a)(s);function s(t){var a;return Object(o.a)(this,s),(a=e.call(this,t)).state={operator:t.operator,factor:t.factor?t.factor:2,first:t.first?t.first:2,second:t.second?t.second:1},a.titles={first:"1 \u044d\u043b\u0435\u043c\u0435\u043d\u0442",second:"2 \u044d\u043b\u0435\u043c\u0435\u043d\u0442",factor:"\u041c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c"},a.mins={first:1,second:1,factor:2},a.maxs={first:3,second:3,factor:9},a.handleChanges=a.handleChanges.bind(Object(d.a)(a)),a}return Object(l.a)(s,[{key:"handleChanges",value:function(t){var e=t.target.name,s=t.target.value;switch(t.target.type){case"number":this.setState(Object(h.a)({},e,Number(s)));break;case"button":case"select-one":this.setState(Object(h.a)({},e,s))}this.props.handleChanges(t)}},{key:"render",value:function(){var t;switch(this.state.operator){case"mul":t=Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"number",children:[Object(a.jsx)("span",{className:"number__title",children:this.titles.first}),Object(a.jsx)("input",{className:"number__input",type:"number",name:"first",min:this.mins.first,max:this.maxs.first,value:this.state.first,step:"1",onChange:this.handleChanges})]}),Object(a.jsxs)("div",{className:"number",children:[Object(a.jsx)("span",{className:"number__title",children:this.titles.second}),Object(a.jsx)("input",{className:"number__input",type:"number",name:"second",min:this.mins.second,max:this.maxs.second,value:this.state.second,step:"1",onChange:this.handleChanges})]}),Object(a.jsxs)("div",{className:"number",children:[Object(a.jsx)("span",{className:"number__title",children:this.titles.factor}),Object(a.jsx)("input",{className:"number__input",type:"number",name:"factor",min:this.mins.factor,max:this.maxs.factor,value:this.state.factor,step:"1",onChange:this.handleChanges})]})]});break;default:t=Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"number",children:[Object(a.jsx)("span",{className:"number__title",children:this.titles.first}),Object(a.jsx)("input",{className:"number__input",type:"number",name:"first",min:this.mins.first,max:this.maxs.first,value:this.state.first,step:"1",onChange:this.handleChanges})]}),Object(a.jsxs)("div",{className:"number",children:[Object(a.jsx)("span",{className:"number__title",children:this.titles.second}),Object(a.jsx)("input",{className:"number__input",type:"number",name:"second",min:this.mins.second,max:this.maxs.second,value:this.state.second,step:"1",onChange:this.handleChanges})]})]})}return Object(a.jsxs)("div",{className:"Greet container",children:[Object(a.jsx)("button",{className:"content",type:"button",onClick:this.handleChanges,name:"load",value:"exercise",children:"\u0421\u0442\u0430\u0440\u0442"}),Object(a.jsxs)("select",{value:this.state.operator,onChange:this.handleChanges,name:"operator",className:"content",children:[Object(a.jsx)("option",{value:"sum",children:"\u0421\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(a.jsx)("option",{value:"decr",children:"\u0412\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u0435"}),Object(a.jsx)("option",{value:"mul",children:"\u0423\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(a.jsx)("option",{value:"frac",children:"\u0414\u0435\u043b\u0435\u043d\u0438\u0435"})]}),t]})}}]),s}(r.a.Component)),m=(s(18),function(t){Object(u.a)(s,t);var e=Object(b.a)(s);function s(t){var a;switch(Object(o.a)(this,s),(a=e.call(this,t)).state={load:void 0,operator:t.operator,factor:t.factor?t.factor:2,first:t.first?t.first:2,second:t.second?t.second:1,correct:t.correct?t.correct:0,total:t.total?t.total:0},a.sym="",a.state.operator){case"sum":a.sym="+";break;case"decr":a.sym="-";break;case"mul":a.sym="*";break;case"frac":a.sym=":"}return a.current={first:0,second:0,correct:0},a.stats={correct:0,total:0},a.handleChanges=a.handleChanges.bind(Object(d.a)(a)),a.handleAnswer=a.handleAnswer.bind(Object(d.a)(a)),a.generateEquasion(),a}return Object(l.a)(s,[{key:"handleAnswer",value:function(t){this.current.answer=Number(t.target.value)}},{key:"handleChanges",value:function(t){var e=t.target.name,s=t.target.value;switch(t.target.type){case"number":this.setState(Object(h.a)({},e,Number(s)));break;case"button":switch(e){case"load":this.setState(Object(h.a)({},e,s)),this.props.statsUpd(this.stats),this.props.handleChanges(t);break;case"answer":this.check(),this.setState({total:this.stats.total,correct:this.stats.correct}),this.generateEquasion()}}}},{key:"check",value:function(){this.current.answer===this.current.correct&&this.stats.correct++,this.stats.total++}},{key:"generateEquasion",value:function(){switch(this.state.operator){case"sum":this.current.first=Math.floor(Math.random()*Math.pow(10,this.state.first)),this.current.second=Math.floor(Math.random()*Math.pow(10,this.state.second)),this.current.correct=this.current.first+this.current.second;break;case"decr":if(this.current.first=Math.floor(Math.random()*Math.pow(10,this.state.first)),this.current.second=Math.floor(Math.random()*Math.pow(10,this.state.second)),this.current.first<this.current.second){var t=this.current.first;this.current.first=this.current.second,this.current.second=t}this.current.correct=this.current.first-this.current.second;break;case"mul":this.state.second>=2?(this.current.first=Math.floor(Math.random()*Math.pow(10,this.state.first)),this.current.second=Math.floor(Math.random()*Math.pow(10,this.state.second)),this.current.correct=this.current.first*this.current.second):(this.current.first=Math.floor(Math.random()*Math.pow(10,1)),this.current.second=this.state.factor,this.current.correct=this.current.first*this.current.second),console.log(this.current.correct);break;case"frac":do{if(this.current.first=Math.floor(Math.random()*Math.pow(10,this.state.first)),this.current.second=Math.floor(Math.random()*Math.pow(10,this.state.second)),this.current.first<this.current.second){var e=this.current.first;this.current.first=this.current.second,this.current.second=e}0===this.current.second&&this.current.second++}while(this.current.first%this.current.second!==0);this.current.correct=this.current.first/this.current.second}console.log(this.current.first+this.sym+this.current.second+"="+this.current.correct)}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("span",{children:this.current.first}),Object(a.jsx)("span",{children:this.sym}),Object(a.jsx)("span",{children:this.current.second}),Object(a.jsx)("span",{children:"="}),Object(a.jsx)("input",{type:"number",name:"current",min:"0",placeholder:"\u041e\u0442\u0432\u0435\u0442",onChange:this.handleAnswer}),Object(a.jsx)("button",{className:"content",type:"button",name:"answer",onClick:this.handleChanges,children:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439"})]}),Object(a.jsx)("button",{className:"content",type:"button",onClick:this.handleChanges,name:"load",value:"stats",children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"})]})}}]),s}(r.a.Component)),f=(s(19),function(t){Object(u.a)(s,t);var e=Object(b.a)(s);function s(t){var a;return Object(o.a)(this,s),(a=e.call(this,t)).state={load:void 0,correct:t.correct?t.correct:0,total:t.total?t.total:0},a.handleChanges=a.handleChanges.bind(Object(d.a)(a)),a}return Object(l.a)(s,[{key:"handleChanges",value:function(t){var e=t.target.name,s=t.target.value;switch(t.target.type){case"range":this.setState(Object(h.a)({},e,Number(s)));break;case"button":case"select-one":this.setState(Object(h.a)({},e,s))}this.props.handleChanges(t)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"Stats content",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"",children:"\u0412\u0435\u0440\u043d\u043e"}),Object(a.jsx)("span",{className:"",children:this.state.correct})]}),Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)("span",{className:"",children:"\u0412\u0441\u0435\u0433\u043e"}),Object(a.jsx)("span",{className:"",children:this.state.total})]})]}),Object(a.jsx)("button",{className:"content",type:"button",onClick:this.handleChanges,name:"load",value:"greet",children:"\u0412 \u043d\u0430\u0447\u0430\u043b\u043e"})]})}}]),s}(r.a.Component)),p=function(t){Object(u.a)(s,t);var e=Object(b.a)(s);function s(t){var a;return Object(o.a)(this,s),(a=e.call(this,t)).state={load:t.load?t.load:"greet",operator:"mul",factor:t.factor?t.factor:5,first:t.first?t.first:1,second:t.second?t.second:1,correct:t.correct?t.correct:0,total:t.total?t.total:0},a.handleChanges=a.handleChanges.bind(Object(d.a)(a)),a.statsUpd=a.statsUpd.bind(Object(d.a)(a)),a}return Object(l.a)(s,[{key:"statsUpd",value:function(t){this.setState({total:t.total,correct:t.correct})}},{key:"handleChanges",value:function(t){var e=t.target.name,s=t.target.value;switch(t.target.type){case"number":this.setState(Object(h.a)({},e,Number(s)));break;case"button":case"select-one":this.setState(Object(h.a)({},e,s))}}},{key:"render",value:function(){this.state.load,this.state.operator,this.state.limits;switch(this.state.load){case"exercise":return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(m,{operator:this.state.operator,factor:this.state.factor,first:this.state.first,second:this.state.second,handleChanges:this.handleChanges,statsUpd:this.statsUpd})});case"stats":return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(f,{correct:this.state.correct,total:this.state.total,handleChanges:this.handleChanges})});default:return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(j,{operator:this.state.operator,factor:this.state.factor,first:this.state.first,second:this.state.second,handleChanges:this.handleChanges})})}}}]),s}(r.a.Component),O=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,r=e.getLCP,c=e.getTTFB;s(t),a(t),n(t),r(t),c(t)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),O()}],[[20,1,2]]]);
//# sourceMappingURL=main.db2d8eac.chunk.js.map