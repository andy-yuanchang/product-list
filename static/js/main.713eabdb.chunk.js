(this["webpackJsonpproduct-list"]=this["webpackJsonpproduct-list"]||[]).push([[0],{18:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){},22:function(t,e,a){},23:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var c=a(2),i=a.n(c),n=a(11),s=a.n(n),o=(a(18),a(9)),r=a(3),d=(a(19),a(20),a(12)),l=a(1);function u(t){var e=t.renderContent,a=void 0===e?function(){}:e,c=t.onClose,i=void 0===c?function(){}:c;return Object(l.jsxs)("div",{id:"popup-modal",children:[Object(l.jsx)("div",{className:"popup-modal__mask",onClick:i}),Object(l.jsxs)("div",{className:"popup-modal__content",children:[a(),Object(l.jsx)("div",{className:"popup-modal__close-button",onClick:i,children:Object(l.jsx)(d.a,{})})]})]})}a(22);var j=a(8);function m(t){var e=t.imageList,a=void 0===e?[]:e,i=Object(c.useRef)(null),n=Object(c.useState)(0),s=Object(r.a)(n,2),o=s[0],d=s[1],u=function(){var t=Object(c.useState)([0,0]),e=Object(r.a)(t,2),a=e[0],i=e[1];return Object(c.useLayoutEffect)((function(){function t(){i([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),a}(),m=Object(r.a)(u,2),h=m[0],b=m[1];return Object(c.useEffect)((function(){i.current.style.transform="translate3d(".concat(-1*i.current.children[o].offsetLeft,"px, 0px, 0px)")}),[h,b,o]),Object(l.jsx)("div",{className:"carousel",children:Object(l.jsxs)("div",{className:"carousel__content",children:[a.length>1&&Object(l.jsx)("div",{className:"carousel__arrow-mask prev",onClick:function(t){var e=o-1<0?a.length-1:o-1;d(e)},children:Object(l.jsx)(j.b,{})}),Object(l.jsx)("ul",{className:"carousel__image-list",ref:i,children:a.map((function(t,e){return Object(l.jsx)("li",{className:"list__item",children:Object(l.jsx)("img",{src:t,alt:t})},e)}))}),a.length>1&&Object(l.jsx)("div",{className:"carousel__arrow-mask next",onClick:function(t){var e=o+1>a.length-1?0:o+1;d(e)},children:Object(l.jsx)(j.a,{})})]})})}var h=a(5),b=a(13);a(23);function p(t){var e=t.imageList,a=void 0===e?[]:e,c=t.title,i=void 0===c?"":c,n=t.price,s=void 0===n?0:n,o=t.discount,r=void 0===o?0:o,d=t.isCollected,u=void 0!==d&&d,j=t.stars,p=void 0===j?0:j,f=t.onClick,O=void 0===f?function(){}:f,x=Math.floor(p),v=Math.ceil(p)-x;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card__image",children:Object(l.jsx)(m,{imageList:a})}),Object(l.jsxs)("div",{className:"card__content",children:[Object(l.jsx)("h2",{children:i}),Object(l.jsxs)("h3",{className:"price",children:[Object(l.jsx)(h.a,{}),s]}),Object(l.jsx)("p",{className:"stars",children:v?Object(l.jsxs)(l.Fragment,{children:[Array(x).fill(Object(l.jsx)(h.b,{})),Object(l.jsx)(h.c,{})]}):Array(x).fill(Object(l.jsx)(h.b,{}))})]}),0!==r&&Object(l.jsx)("div",{className:"card__discount",children:"".concat(r,"% off")}),Object(l.jsx)("div",{className:"card__collection-icon ".concat(u&&"collected"),onClick:O,children:Object(l.jsx)(b.a,{})})]})}for(var f=a(10),O=a(26),x=[{id:Object(O.a)(),title:"Fantastic electronic candle that you could put it onto the table, and just read books at the table, or whatever you want to",price:(1e3*Math.random()).toFixed(0),stars:Math.ceil(4*Math.random())+(Math.random()>.5?1:.5),imageList:new Array(9).fill(0).map((function(t,e){return"./assets/images/electronic candle/".concat(e+1,".jpg")})),discount:(100*Math.random()).toFixed(0)},{id:Object(O.a)(),title:"Boys, buy this and give it to your girlfriend!",price:(1e3*Math.random()).toFixed(0),stars:Math.ceil(4*Math.random())+(Math.random()>.5?1:.5),imageList:new Array(9).fill(0).map((function(t,e){return"./assets/images/flower/".concat(e+1,".jpg")})),discount:(100*Math.random()).toFixed(0)},{id:Object(O.a)(),title:"Ipad needs your protection, please kindly help them.",price:(1e3*Math.random()).toFixed(0),stars:Math.ceil(4*Math.random())+(Math.random()>.5?1:.5),imageList:new Array(9).fill(0).map((function(t,e){return"./assets/images/ipad protective case/".concat(e+1,".jpg")})),discount:(100*Math.random()).toFixed(0)},{id:Object(O.a)(),title:"It's a stamp.",price:(1e3*Math.random()).toFixed(0),stars:Math.ceil(4*Math.random())+(Math.random()>.5?1:.5),imageList:new Array(9).fill(0).map((function(t,e){return"./assets/images/stamp/".concat(e+1,".jpg")})),discount:(100*Math.random()).toFixed(0)},{id:Object(O.a)(),title:"The wallet was made of leather. The long time you own it, the more classic the wallet could be.",price:(1e3*Math.random()).toFixed(0),stars:Math.ceil(4*Math.random())+(Math.random()>.5?1:.5),imageList:new Array(9).fill(0).map((function(t,e){return"./assets/images/wallet/".concat(e+1,".jpg")})),discount:(100*Math.random()).toFixed(0)},{id:Object(O.a)(),title:"It's a bluetooth music box. It's convenient.",price:(1e3*Math.random()).toFixed(0),stars:Math.ceil(4*Math.random())+(Math.random()>.5?1:.5),imageList:new Array(9).fill(0).map((function(t,e){return"./assets/images/wireless bluetooth music box/".concat(e+1,".jpg")})),discount:(100*Math.random()).toFixed(0)},{id:Object(O.a)(),title:"It looks quite expensive.",price:(1e3*Math.random()).toFixed(0),stars:Math.ceil(4*Math.random())+(Math.random()>.5?1:.5),imageList:["./assets/images/case/1.jpg"],discount:(100*Math.random()).toFixed(0)}],v=0;v<5;v++)x=x.concat(x.slice().map((function(t){return Object(f.a)(Object(f.a)({},t),{},{id:Object(O.a)(),stars:Math.ceil(4*Math.random())+(Math.random()>.5?1:.5),discount:(100*Math.random()).toFixed(0)})})));var g=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),a=e[0],i=e[1],n=Object(c.useState)(!1),s=Object(r.a)(n,2),d=s[0],j=s[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("ul",{className:"product-list",children:x.map((function(t){return Object(l.jsx)("li",{className:"product-list__item",children:Object(l.jsx)(p,{imageList:t.imageList,title:t.title,price:t.price,stars:t.stars,discount:t.discount,isCollected:a.find((function(e){return e===t.id})),onClick:function(e){return function(t){var e=a.findIndex((function(e){return e===t}));if(-1!==e)return a.splice(e,1),void i(Object(o.a)(a));i([].concat(Object(o.a)(a),[t]))}(t.id)}})},t.id)}))}),Object(l.jsx)("footer",{className:"footer-content",children:Object(l.jsx)("button",{className:"footer-content__button",onClick:function(){j(!0)},children:"".concat(a.length," ").concat(a.length<=1?"product":"products"," in Wishlist")})}),d&&Object(l.jsx)(u,{renderContent:function(){return Object(l.jsx)("ul",{className:"collected-products",children:a.map((function(t){var e=x.find((function(e){return e.id===t}));return Object(l.jsxs)("li",{className:"collected-products__item",children:[Object(l.jsx)("div",{className:"image-mask",children:Object(l.jsx)("img",{src:e.imageList[0],alt:e.title})}),Object(l.jsx)("section",{children:e.title})]},t)}))})},onClose:function(){return j(!1)}})]})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.713eabdb.chunk.js.map