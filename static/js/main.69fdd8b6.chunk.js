(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(10),i=n.n(c),l=(n(15),n(6)),s=(n(16),n(2)),u=n(5),r=(n(17),n(3)),j=n(9),b=n.n(j);function d(t,e,n){var a=b()(t),o=b()(e);if("+"===n)return a.plus(o).toString();if("-"===n)return a.minus(o).toString();if("x"===n)return a.times(o).toString();if("\xf7"===n)try{return a.div(o).toString()}catch(c){return"Can't divide by 0."}if("%"===n)return a.mod(o).toString();throw Error("Unknown operation '".concat(n,"'"))}var m=function(t,e){return"AC"===e?{total:null,next:null,operation:null}:e.match(/[0-9]+/)?"0"===e&&"0"===t.next?{}:t.operation?t.next?Object(r.a)(Object(r.a)({},t),{},{next:t.next+e}):Object(r.a)(Object(r.a)({},t),{},{next:e}):t.next?{next:t.next+e,total:null}:{next:e,total:null}:"."===e?t.next?t.next.includes(".")?Object(r.a)({},t):Object(r.a)(Object(r.a)({},t),{},{next:"".concat(t.next,".")}):t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total,".")}:{total:"0."}:"="===e?t.next&&t.operation?{total:d(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===e?t.next?Object(r.a)(Object(r.a)({},t),{},{next:(-1*parseFloat(t.next)).toString()}):t.total?Object(r.a)(Object(r.a)({},t),{},{total:(-1*parseFloat(t.total)).toString()}):{}:t.next||!t.total||t.operation?t.operation?t.total&&!t.next?Object(r.a)(Object(r.a)({},t),{},{operation:e}):{total:d(t.total,t.next,t.operation),next:null,operation:e}:t.next?{total:t.next,next:null,operation:e}:{operation:e}:Object(r.a)(Object(r.a)({},t),{},{operation:e})},x=n(0),h=function(t){var e=t.output;return Object(x.jsx)("div",{className:"result",children:e})};h.defaultProps={output:"0"};var p=function(t){var e=t.className,n=t.buttonName;return Object(x.jsx)("button",{type:"button",className:e,onClick:function(e){(0,t.handleButtonClick)(e.target.textContent)},children:n})};p.defaultProps={className:"",buttonName:"",handleButtonClick:function(){}};var O={},N=function(){var t=Object(a.useState)(0),e=Object(u.a)(t,2),n=e[0],o=e[1],c=function(t){var e="";(O=m(O,t)).total&&(e+=O.total),O.operation&&(e+=O.operation),O.next&&(e+=O.next),""===e&&(e+="0"),o(e)};return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h2",{children:"Let's do some math!"}),Object(x.jsxs)("div",{className:"calculator",children:[Object(x.jsx)(h,{output:n}),Object(x.jsxs)("div",{className:"numbers-oberations",children:[Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"AC"}),Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"+/-"}),Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"%"}),Object(x.jsx)(p,{handleButtonClick:c,className:"last",buttonName:"\xf7"}),Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"7"}),Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"8"}),Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"9"}),Object(x.jsx)(p,{handleButtonClick:c,className:"last",buttonName:"x"}),Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"4"}),Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"5"}),Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"6"}),Object(x.jsx)(p,{handleButtonClick:c,className:"last",buttonName:"-"}),Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"1"}),Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"2"}),Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"3"}),Object(x.jsx)(p,{handleButtonClick:c,className:"last",buttonName:"+"}),Object(x.jsx)(p,{handleButtonClick:c,className:"zero-btn",buttonName:"0"}),Object(x.jsx)(p,{handleButtonClick:c,className:"",buttonName:"."}),Object(x.jsx)(p,{handleButtonClick:c,className:"last",buttonName:"="})]})]})]})},f=function(){return Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:"0 20px"},children:[Object(x.jsx)("h2",{children:"Welcome to out page!"}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(x.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},g=function(){return Object(x.jsx)("div",{style:{height:"calc( 70vh - 100px )",fontSize:"30px",display:"flex",alignItems:"center",textAlign:"center",padding:"0 60px"},children:"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thurston"})};var C=function(){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("nav",{children:[Object(x.jsx)("h1",{children:"Math Magicians"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:"/",children:"Home"})}),"|",Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:"/calculator",children:"Calculator"})}),"|",Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:"/quote",children:"Quote"})})]})]}),Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{path:"/",element:Object(x.jsx)(f,{})}),Object(x.jsx)(s.a,{path:"calculator",element:Object(x.jsx)(N,{})}),Object(x.jsx)(s.a,{path:"quote",element:Object(x.jsx)(g,{})})]})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),o(t),c(t),i(t)}))};i.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(l.a,{children:Object(x.jsx)(C,{})})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.69fdd8b6.chunk.js.map