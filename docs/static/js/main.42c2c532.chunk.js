(this["webpackJsonppromo-k-3.6-form-and-json"]=this["webpackJsonppromo-k-3.6-form-and-json"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),a=n.n(r),c=n(9),l=n.n(c),o=(n(15),n(8)),i=n(2),h=n(3),u=n(6),p=n(5),d=n(4),j=(n(16),n(17),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),s=t.call(this,e),document.title="".concat(s.props.number,": ").concat(s.props.title),s}return Object(h.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("header",{className:"header",children:[this.props.subtitle?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("h1",{className:"header__title",children:[this.props.number," ",this.props.lesson,": ",this.props.title]}),Object(s.jsx)("h2",{className:"header__subtitle header__underline",children:this.props.subtitle})]}):Object(s.jsxs)("h1",{className:"header__title header__underline",children:[this.props.number," ",this.props.lesson,": ",this.props.title]}),Object(s.jsxs)("a",{className:"header__logo",href:"https://github.com/Adalab/ejercicios-en-clase-k/",title:"Ir al repo del ejercicio",target:"_blank",rel:"noreferrer",children:[Object(s.jsx)("img",{src:"https://raw.githubusercontent.com/Adalab/resources/master/images/adalab-logo-32x32.png",alt:"Adalab logo"}),Object(s.jsx)("span",{className:"hidden",children:"Ir al repo"})]})]})}}]),n}(a.a.Component)),b=(n(18),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){console.log("ResultJson.render()"),console.log(this.props);var e=JSON.stringify(this.props.result).replace("{","{\n  ").replace("}","\n}").replace(",",",\n  ");return Object(s.jsxs)("section",{className:"result",children:[Object(s.jsx)("h3",{className:"result__title",children:"JSON resultante:"}),Object(s.jsx)("pre",{className:"result__json",children:e})]})}}]),n}(a.a.Component)),m=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleChange=s.handleChange.bind(Object(u.a)(s)),s}return Object(h.a)(n,[{key:"handleChange",value:function(e){var t=e.currentTarget,n=t.id,s=t.value;console.log("Select.handleChange()"),console.log(s),this.props.handleChange(n,s)}},{key:"render",value:function(){console.log("Select.render()"),console.log(this.props);var e=this.props.options.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},e)}));return Object(s.jsxs)("div",{className:"Select",children:[Object(s.jsxs)("label",{htmlFor:this.props.id,className:"form__label",children:[this.props.text,":"]}),Object(s.jsx)("select",{name:this.props.id,id:this.props.id,className:"form__select",onClick:this.handleChange,children:e})]})}}]),n}(a.a.Component),O=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleBlur=s.handleBlur.bind(Object(u.a)(s)),s}return Object(h.a)(n,[{key:"handleBlur",value:function(e){var t=e.currentTarget,n=t.id,s=t.value;console.log("Text.handleBlur()"),console.log(s),this.props.handleChange(n,s)}},{key:"render",value:function(){return console.log("Text.render()"),console.log(this.props),Object(s.jsxs)("div",{className:"Text",children:[Object(s.jsxs)("label",{htmlFor:this.props.id,className:"form__label",children:[this.props.text,":"]}),Object(s.jsx)("input",{type:"text",name:this.props.id,id:this.props.id,placeholder:this.props.placeholder,className:"form__text",onBlur:this.handleBlur})]})}}]),n}(a.a.Component),g=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).numberOptions=[1,2,3,4],s.state={},s.changeInput=s.changeInput.bind(Object(u.a)(s)),s}return Object(h.a)(n,[{key:"changeInput",value:function(e,t){var n={};n[e]=t,this.setState((function(e){var t=Object(o.a)(Object(o.a)({},e),n);return console.log("setState"),console.log(t),t}))}},{key:"render",value:function(){return console.log("App.render()"),console.log(this.state),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(j,{number:"2.6",lesson:"Estado",title:"Formulario",subtitle:"Con JSON!"}),Object(s.jsxs)("main",{className:"container",children:[Object(s.jsxs)("section",{className:"form",children:[Object(s.jsx)(m,{id:"number",text:"Escoge un n\xfamero",options:this.numberOptions,handleChange:this.changeInput}),Object(s.jsx)(O,{id:"name",text:"Escribe tu nombre",placeholder:"Kizzmekia Shanta Corbett",handleChange:this.changeInput})]}),Object(s.jsx)(b,{result:this.state})]})]})}}]),n}(a.a.Component);l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.42c2c532.chunk.js.map