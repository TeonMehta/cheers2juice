(this.webpackJsonpv2=this.webpackJsonpv2||[]).push([[0],{53:function(e,t,n){},74:function(e,t,n){},78:function(e,t,n){},83:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},96:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(26),c=n.n(a),s=(n(74),n(21)),r=n.n(s),l=n(10),o=n(28),d=n(29),u=n(30),m=n(32),b=n(31),j=n(12),p=n(35);n(100),n(76);p.a.initializeApp({apiKey:"AIzaSyCFlaBkzEo6N_mj5G3MwI0qafcS00Tq8-E",authDomain:"cheers2juice.firebaseapp.com",projectId:"cheers2juice",storageBucket:"cheers2juice.appspot.com",messagingSenderId:"842768694700",appId:"1:842768694700:web:b8e8c2252c00a337c18e09",measurementId:"G-SPMTNVLCFS"});var h=function(){var e=Object(o.a)(r.a.mark((function e(t,n){var i,a,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return i=g.doc("users/".concat(t.uid)),e.next=5,i.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,s=new Date,e.prev=9,e.next=12,i.set(Object(l.a)({displayName:a,email:c,createdAt:s},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",i);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),O=p.a.auth(),g=p.a.firestore(),x=new p.a.auth.GoogleAuthProvider;x.setCustomParameters({prompt:"select_account"});var f=function(){return O.signInWithPopup(x)},v=(p.a,n(78),n(16));function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k=i.createElement("g",null),C=i.createElement("g",null),N=i.createElement("g",null),I=i.createElement("g",null),E=i.createElement("g",null),T=i.createElement("g",null),U=i.createElement("g",null),L=i.createElement("g",null),P=i.createElement("g",null),A=i.createElement("g",null),R=i.createElement("g",null),S=i.createElement("g",null),M=i.createElement("g",null),q=i.createElement("g",null),F=i.createElement("g",null);function G(e,t){var n=e.title,a=e.titleId,c=w(e,["title","titleId"]);return i.createElement("svg",y({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),n?i.createElement("title",{id:a},n):null,i.createElement("g",null,i.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),i.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),i.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),i.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),i.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),k,C,N,I,E,T,U,L,P,A,R,S,M,q,F)}var _=i.forwardRef(G),D=(n.p,n(83),n(11)),B=function(e){return e.cart},z=Object(D.a)([B],(function(e){return e.cartItems})),H=Object(D.a)([B],(function(e){return e.hidden})),V=Object(D.a)([z],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Q=Object(D.a)([z],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),W={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},J=function(e){return{type:W.ADD_ITEM,payload:e}},X=function(e){return{type:W.REMOVE_ITEM,payload:e}},Z=n(2),K=Object(D.b)({itemCount:V}),Y=Object(v.b)(K,(function(e){return{toggleCartHidden:function(){return e({type:W.TOGGLE_CART_HIDDEN})}}}))((function(e){e.toggleCartHidden;var t=e.itemCount;return Object(Z.jsx)(j.b,{to:"/checkout",children:Object(Z.jsxs)("div",{className:"cart-icon",children:[Object(Z.jsx)(_,{className:"shopping-icon"}),Object(Z.jsx)("span",{className:"item-count",children:t})]})})})),$=(n(86),n(102)),ee=(n(87),function(e){var t=e.item,n=t.imageUrl,i=t.price,a=t.name,c=t.quantity;return Object(Z.jsxs)("div",{className:"cart-item",children:[Object(Z.jsx)($.a,{src:n,alt:"item"}),Object(Z.jsxs)("div",{className:"item-details",children:[Object(Z.jsx)("span",{className:"name",children:a}),Object(Z.jsxs)("span",{className:"price",children:[" ",c," x $",i]})]})]})}),te=n(13),ne=Object(D.b)({cartItems:z}),ie=Object(te.g)(Object(v.b)(ne)((function(e){var t=e.cartItems,n=e.history;return Object(Z.jsxs)("div",{className:"cart-dropdown",children:[Object(Z.jsx)("div",{className:"cart-items",children:t.map((function(e){return Object(Z.jsx)(ee,{item:e},e.id)}))}),Object(Z.jsx)("button",{onClick:function(){return n.push("/checkout")},children:"GO TO CHECKOUT"})]})}))),ae=Object(D.a)([function(e){return e.user}],(function(e){return e.currentUser})),ce=n(103),se=n(104),re=Object(D.b)({currentUser:ae,hidden:H}),le=Object(v.b)(re)((function(e){var t=e.currentUser,n=e.hidden;return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)(ce.a,{fluid:!0,children:[Object(Z.jsx)(se.a,{className:"justify-content-md-center",children:Object(Z.jsxs)("nav",{children:[Object(Z.jsx)(j.b,{to:"/",children:Object(Z.jsx)("div",{className:"branding",children:"CHEERS 2 JUICE"})}),Object(Z.jsxs)("div",{className:"nav-inner",children:[Object(Z.jsx)(j.b,{className:"navlink",to:"/about",children:"ABOUT"}),Object(Z.jsx)(j.b,{className:"navlink",to:"/shop",children:"SHOP"}),Object(Z.jsx)(j.b,{className:"navlink",to:"/contact",children:"CONTACT"}),Object(Z.jsx)(j.b,{className:"navlink",to:{pathname:"https://www.instagram.com/cheers2juicemtl/"},target:"_blank",children:"FOLLOW"}),t?Object(Z.jsx)("div",{className:"navlink",onClick:function(){return O.signOut()},children:"SIGN OUT"}):Object(Z.jsx)(j.b,{className:"navlink",to:"/signin",children:"SIGN IN"})]}),n?null:Object(Z.jsx)(ie,{})]})}),Object(Z.jsx)(se.a,{className:"justify-content-md-center justify-content-sm-center justify-content-center",children:Object(Z.jsx)(Y,{className:"navlink"})})]})})})),oe=n(53),de=n.n(oe),ue=n(44),me=n(59),be=n(54),je=["https://mail.google.com/mail/u/0/#inbox"],pe=function(){return Object(Z.jsx)("footer",{children:Object(Z.jsxs)("div",{className:"inner",children:[Object(Z.jsxs)("div",{className:"footer-social",children:[Object(Z.jsx)("div",{className:"brand",children:"CHEERS 2 JUICE "}),Object(Z.jsxs)("div",{className:de.a.iconRow,children:[Object(Z.jsx)(j.b,{href:je[0],children:Object(Z.jsx)("a",{className:"email footer-icon icon",children:Object(Z.jsx)(ue.a,{icon:me.a})})}),Object(Z.jsx)(j.b,{href:je[0],children:Object(Z.jsx)("a",{className:"instagram footer-icon icon",children:Object(Z.jsx)(ue.a,{icon:be.b})})}),Object(Z.jsx)(j.b,{href:je[0],children:Object(Z.jsx)("a",{className:"facebook footer-icon icon",children:Object(Z.jsx)(ue.a,{icon:be.a})})})]})]}),Object(Z.jsxs)("div",{className:de.a.links,children:[Object(Z.jsx)(j.b,{href:"#",children:Object(Z.jsx)("a",{className:"link",children:"Contact"})}),Object(Z.jsx)(j.b,{href:"#",children:Object(Z.jsx)("a",{className:"link",children:"FAQ"})}),Object(Z.jsx)(j.b,{href:"#",children:Object(Z.jsx)("a",{className:"link",children:"Blog"})})]}),Object(Z.jsx)("div",{className:"copyright",children:"\xa92021 CHEERS 2 JUICE"}),Object(Z.jsx)("div",{className:"footer-newsletter"})]})})},he=n(27),Oe=(n(90),n(33)),ge=function(){return Object(Z.jsx)("div",{className:"home",children:Object(Z.jsxs)(Oe.a,{children:[Object(Z.jsx)(Oe.a.Item,{interval:1500,children:Object(Z.jsx)("img",Object(he.a)({className:"d-block w-100",src:"https://i.ibb.co/QC62yhf/body-boosters-min.jpg",alt:"body-booster"},"alt","First slide"))}),Object(Z.jsx)(Oe.a.Item,{interval:1500,children:Object(Z.jsx)("img",{className:"d-block w-100",src:"https://i.ibb.co/7gLM850/chiller-min.jpg",alt:"First slide"})}),Object(Z.jsx)(Oe.a.Item,{interval:1500,children:Object(Z.jsx)("img",{className:"d-block w-100",src:"https://i.ibb.co/qspYvph/khemistryy-min.jpg",alt:"First slide"})}),Object(Z.jsx)(Oe.a.Item,{interval:1500,children:Object(Z.jsx)("img",{className:"d-block w-100",src:"https://i.ibb.co/6ZXB5T6/takee-control-min.jpg",alt:"First slide"})}),Object(Z.jsx)(Oe.a.Item,{interval:1500,children:Object(Z.jsx)("img",{className:"d-block w-100",src:"https://i.ibb.co/Cwhzkzn/sweet-tooth-min.jpg",alt:"First slide"})}),Object(Z.jsx)(Oe.a.Item,{interval:1500,children:Object(Z.jsx)("img",{className:"d-block w-100",src:"https://i.ibb.co/9tBQmkf/tropical-blisss-min.jpg",alt:"First slide"})})]})})},xe=(n(91),[{title:"The Chiller",imageUrl:"https://i.ibb.co/7gLM850/chiller-min.jpg",id:1,linkUrl:"chiller",price:8.5,indgredients:"",description:""},{title:"Body Booster",imageUrl:"https://i.ibb.co/QC62yhf/body-boosters-min.jpg",id:2,linkUrl:"body-booster",price:8.5,indgredients:"Red Apple, Lemon, Ginger and Cayenne Pepper",description:""},{title:"Eclipse",imageUrl:"https://i.ibb.co/GnWHJSB/eclipsee-min.jpg",id:3,linkUrl:"eclipse",price:8.5,indgredients:"",description:""},{title:"The Khemsitry",imageUrl:"https://i.ibb.co/qspYvph/khemistryy-min.jpg",id:4,linkUrl:"khemistry",price:9.5,indgredients:"",description:""},{title:"Lemon Twist",imageUrl:"https://i.ibb.co/NV9TXFB/lemmon-twist-min.jpg",id:5,linkUrl:"lemon-twist",price:8.5,indgredients:"",description:""},{title:"Red Zone",imageUrl:"https://i.ibb.co/m5Fc7bF/redd-zone-min.jpg",id:6,linkUrl:"red-zone",price:8.5,indgredients:"",description:""},{title:"Refresher",imageUrl:"https://i.ibb.co/VmFV9pt/refresheer-min.jpg",id:7,linkUrl:"refresher",price:8.5,indgredients:"Red Apple, Lemon, Ginger and Cayenne Pepper",description:""},{title:"Sweet Tooth",imageUrl:"https://i.ibb.co/Cwhzkzn/sweet-tooth-min.jpg",id:8,linkUrl:"sweet-tooth",price:9,indgredients:"",description:""},{title:"Take Control",imageUrl:"https://i.ibb.co/6ZXB5T6/takee-control-min.jpg",id:9,linkUrl:"take-control",price:9,indgredients:"",description:""},{title:"Tropical Bliss",imageUrl:"https://i.ibb.co/9tBQmkf/tropical-blisss-min.jpg",id:10,linkUrl:"tropical-bliss",price:9,indgredients:"",description:""}]),fe=n(63),ve=Object(te.g)(Object(v.b)(null,(function(e){return{addItem:function(t){return e(J(t))}}}))((function(e){var t=e.item;e.addItem;console.log(t);t.title;var n=t.imageUrl;t.price,t.description,t.linkUrl,t.history,t.match;return Object(Z.jsx)(ce.a,{className:"product-item",children:Object(Z.jsx)($.a,{fluid:!0,src:n,alt:""})})}))),ye=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={products:xe},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(Z.jsx)(ce.a,{fluid:!0,className:"container",children:Object(Z.jsx)(se.a,{className:"justify-content-md-center",children:xe.map((function(e){return Object(Z.jsx)(fe.a,{s:12,md:4,className:" product",children:Object(Z.jsx)(j.b,{to:"/shop/".concat(e.linkUrl),children:Object(Z.jsx)(ve,{linkUrl:e.linkUrl,item:e,className:""},e.id)})},e.id)}))})})}}]),n}(i.Component),we=(n(92),Object(v.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:W.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(J(t))},removeItem:function(t){return e(X(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,i=e.addItem,a=e.removeItem,c=t.name,s=t.imageUrl,r=t.price,l=t.quantity;return Object(Z.jsxs)("div",{className:"checkout-item",children:[Object(Z.jsx)("div",{className:"image-container",children:Object(Z.jsx)("img",{src:s,alt:"item"})}),Object(Z.jsx)("span",{className:"name",children:c}),Object(Z.jsxs)("span",{className:"quantity",children:[Object(Z.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276e"}),Object(Z.jsx)("span",{className:"value",children:l}),Object(Z.jsx)("div",{className:"arrow",onClick:function(){return i(t)},children:"\u276f"})]}),Object(Z.jsx)("span",{className:"price",children:r}),Object(Z.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),ke=(n(93),Object(D.b)({cartItems:z,total:Q})),Ce=Object(v.b)(ke)((function(e){var t=e.cartItems,n=e.total;return Object(Z.jsxs)("div",{className:"checkout-page",children:[Object(Z.jsxs)("div",{className:"checkout-header",children:[Object(Z.jsx)("div",{className:"header-block",children:Object(Z.jsx)("span",{children:"Product"})}),Object(Z.jsx)("div",{className:"header-block",children:Object(Z.jsx)("span",{children:"Description"})}),Object(Z.jsx)("div",{className:"header-block",children:Object(Z.jsx)("span",{children:"Quantity"})}),Object(Z.jsx)("div",{className:"header-block",children:Object(Z.jsx)("span",{children:"Price"})}),Object(Z.jsx)("div",{className:"header-block",children:Object(Z.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(Z.jsx)(we,{cartItem:e},e.id)})),Object(Z.jsxs)("div",{className:"total",children:["TOTAL: $",n]})]})})),Ne=n(45),Ie=n(105),Ee=n(64),Te=n(65),Ue=function(e){var t=Object(i.useState)(!1),n=Object(Ne.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)({firstName:"",lastName:"",email:"",subject:"",message:""}),r=Object(Ne.a)(s,2),o=r[0],d=r[1],u=(Object(i.useRef)(null),Object(i.useState)(!1)),m=Object(Ne.a)(u,2),b=m[0],j=m[1];return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("div",{className:"spacer",children:" \xa0"}),Object(Z.jsxs)(se.a,{className:"justify-content-md-center",children:[Object(Z.jsx)(fe.a,{className:"left"}),Object(Z.jsx)(fe.a,{xs:10,md:8,children:Object(Z.jsxs)("div",{className:"form-container",children:[Object(Z.jsx)("h2",{children:"CONTACT"}),Object(Z.jsx)("p",{children:"Get in touch with us."}),Object(Z.jsxs)(Ie.a,{noValidate:!0,validated:a,onSubmit:function(e){var t=e.currentTarget,n=new FormData(t.current);!1===t.checkValidity()?(e.preventDefault(),e.stopPropagation()):(e.preventDefault(),c(!0),a&&(j(!0),fetch("http://localhost:1337/contacts",{method:"POST",body:n,headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e),e.json()})).catch((function(e){return alert(e)})))),console.log(o)},children:[Object(Z.jsxs)(Ie.a.Row,{children:[Object(Z.jsxs)(Ie.a.Group,{as:fe.a,md:"6",controlId:"validationCustomFirstName",children:[Object(Z.jsx)(Ie.a.Label,{children:"First name"}),Object(Z.jsx)(Ie.a.Control,{required:!0,type:"text",placeholder:"First name",value:o.firstName,onChange:function(e){d((function(t){return Object(l.a)(Object(l.a)({},t),{},{firstName:e.target.value})}))}}),Object(Z.jsx)(Ie.a.Control.Feedback,{children:"Looks good!"})]}),Object(Z.jsxs)(Ie.a.Group,{as:fe.a,md:"6",controlId:"validationCustomLastName",children:[Object(Z.jsx)(Ie.a.Label,{children:"Last name"}),Object(Z.jsx)(Ie.a.Control,{required:!0,type:"text",placeholder:"Last name",value:o.lastName,onChange:function(e){d((function(t){return Object(l.a)(Object(l.a)({},t),{},{lastName:e.target.value})}))}}),Object(Z.jsx)(Ie.a.Control.Feedback,{children:"Looks good!"})]})]}),Object(Z.jsxs)(Ee.a,{controlId:"validationCustomEmail",children:[Object(Z.jsx)(Te.a,{children:"Email Address *"}),Object(Z.jsx)(Ie.a.Control,{type:"email",placeholder:"Email Address","aria-describedby":"inputGroupPrepend",required:!0,value:o.email,onChange:function(e){d((function(t){return Object(l.a)(Object(l.a)({},t),{},{email:e.target.value})}))}}),Object(Z.jsx)(Ie.a.Control.Feedback,{type:"invalid",children:"Please enter a valid email."})]}),Object(Z.jsxs)(Ie.a.Group,{controlId:"",children:[Object(Z.jsx)(Ie.a.Label,{children:"Subject *"}),Object(Z.jsx)(Ie.a.Control,{type:"text",placeholder:"Subject",required:!0,value:o.subject,onChange:function(e){d((function(t){return Object(l.a)(Object(l.a)({},t),{},{subject:e.target.value})}))}}),Object(Z.jsx)(Ie.a.Control.Feedback,{type:"invalid",children:"Please provide a subject."})]}),Object(Z.jsxs)(Ie.a.Group,{controlId:"",children:[Object(Z.jsx)(Ie.a.Label,{children:"Message *"}),Object(Z.jsx)(Ie.a.Control,{as:"textarea",rows:3,placeholder:"Message",required:!0,value:o.message,onChange:function(e){d((function(t){return Object(l.a)(Object(l.a)({},t),{},{message:e.target.value})}))}}),Object(Z.jsx)(Ie.a.Control.Feedback,{type:"invalid",children:"Please deliver your message."})]}),Object(Z.jsx)("div",{className:"button-wrapper",children:Object(Z.jsx)("button",{type:"submit",children:"Submit"})})]}),b&&Object(Z.jsx)("div",{class:"success-message",children:"Success! Thank you for registering"})]})}),Object(Z.jsx)(fe.a,{className:"right"})]})]})},Le=function(e){e.about;return Object(Z.jsx)("div",{className:"about-container",children:Object(Z.jsxs)("div",{className:"about-inner",children:[Object(Z.jsx)("div",{className:"about-image-wrapper",children:Object(Z.jsx)("div",{className:"about-image",children:Object(Z.jsx)(ce.a,{fluid:!0,children:Object(Z.jsx)(se.a,{children:Object(Z.jsx)(fe.a,{})})})})}),Object(Z.jsxs)(se.a,{children:[Object(Z.jsx)(fe.a,{xs:1,md:3}),Object(Z.jsxs)(fe.a,{xs:12,md:6,children:[Object(Z.jsx)("div",{className:"spacer",children:" \xa0"}),Object(Z.jsxs)(ce.a,{className:"about-row ",children:[Object(Z.jsx)("h2",{children:"Our Story"}),Object(Z.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci, animi, commodi consectetur culpa dolores excepturi neque nobis qui quibusdam, sapiente! Debitis eos impedit iusto officia quasi quis recusandae."}),Object(Z.jsx)("br",{}),Object(Z.jsx)("br",{}),Object(Z.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci, animi, commodi consectetur culpa dolores excepturi neque nobis qui quibusdam, sapiente! Debitis eos impedit iusto officia quasi quis recusandae."}),Object(Z.jsx)("br",{}),Object(Z.jsx)("br",{}),Object(Z.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci, animi, commodi consectetur culpa dolores excepturi neque nobis qui quibusdam, sapiente! Debitis eos impedit iusto officia quasi quis recusandae."}),Object(Z.jsx)("br",{}),Object(Z.jsx)("br",{})]})]}),Object(Z.jsx)(fe.a,{xs:1,md:3})]})]})})},Pe=(n(95),n(96),Object(D.a)([function(e){return e.shop}],(function(e){return e.collections}))),Ae=(Object(D.a)([Pe],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),Object(D.b)({collections:Pe})),Re=Object(v.b)(Ae,(function(e){return{addItem:function(t){return e(J(t))},removeItem:function(t){return e(X(t))}}}))((function(e){var t,n=e.collections,i=e.match,a=e.addItem,c=n.filter((function(e){return e.linkUrl===i.params.productId}))[0];return Object(Z.jsx)(ce.a,{className:"product-item",children:Object(Z.jsxs)(se.a,{children:[Object(Z.jsx)(fe.a,{xs:12,md:6,children:Object(Z.jsx)($.a,{fluid:!0,src:c.imageUrl,alt:""})}),Object(Z.jsxs)(fe.a,{xs:12,md:4,children:[Object(Z.jsx)("h3",{className:"juice-title",children:c.title}),Object(Z.jsxs)("p",{children:["$",(t=c.price,parseFloat(t).toFixed(2))]}),Object(Z.jsx)("p",{children:c.ingredients}),Object(Z.jsx)("p",{children:c.description}),Object(Z.jsx)("button",{onClick:function(){return a(c)},children:"Add to cart"})]})]})})})),Se=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(o.a)(r.a.mark((function t(n){var i,a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),i=e.state,a=i.email,c=i.password,t.prev=2,t.next=5,O.signInWithEmailAndPassword(a,c);case 5:e.setState({email:"",password:""}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),e.onChange=function(t){var n=t.target,i=n.value,a=n.name;e.setState(Object(he.a)({},a,i))},e.state={email:"",password:""},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(Z.jsx)(fe.a,{xs:12,md:8,children:Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h2",{children:"Login"}),Object(Z.jsxs)(Ie.a,{onSubmit:this.handleSubmit,children:[Object(Z.jsxs)(Ee.a,{controlId:"validationCustomEmail",children:[Object(Z.jsx)(Te.a,{children:"Email Address *"}),Object(Z.jsx)(Ie.a.Control,{className:"input",value:this.state.email,onChange:this.onChange,name:"email",type:"email",placeholder:"Email address..."})]}),Object(Z.jsxs)(Ee.a,{controlId:"validationCustomPassword",children:[Object(Z.jsx)(Te.a,{children:"Password *"}),Object(Z.jsx)(Ie.a.Control,{className:"input",value:this.state.password,onChange:this.onChange,name:"password",type:"password",placeholder:"Password..."})]}),Object(Z.jsx)("button",{style:{margin:"10px"},className:"button",type:"submit",children:"Log In"}),Object(Z.jsx)("button",{className:"button",onClick:f,type:"submit",children:"Sign In With Google"})]})]})})}}]),n}(i.Component),Me=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(o.a)(r.a.mark((function t(n){var i,a,c,s,l,o,d;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),i=e.state,a=i.displayName,c=i.email,s=i.password,l=i.confirmPassword,s===l){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,O.createUserWithEmailAndPassword(c,s);case 8:return o=t.sent,d=o.user,t.next=12,h(d,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,i=n.name,a=n.value;e.setState(Object(he.a)({},i,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,i=e.password,a=e.confirmPassword;return Object(Z.jsx)(fe.a,{xs:12,md:8,children:Object(Z.jsxs)("div",{className:"sign-up",children:[Object(Z.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(Z.jsx)("span",{children:"Sign up with your email and password"}),Object(Z.jsxs)(Ie.a,{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(Z.jsxs)(Ee.a,{controlId:"validationCustomName",children:[Object(Z.jsx)(Te.a,{children:"Name *"}),Object(Z.jsx)(Ie.a.Control,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0})]}),Object(Z.jsxs)(Ee.a,{controlId:"validationCustomEmail",children:[Object(Z.jsx)(Te.a,{children:"Email Address *"}),Object(Z.jsx)(Ie.a.Control,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(Z.jsx)(Ie.a.Control.Feedback,{type:"invalid",children:"Please enter a valid email."})]}),Object(Z.jsxs)(Ee.a,{controlId:"validationCustomPassword",children:[Object(Z.jsx)(Te.a,{children:"Password *"}),Object(Z.jsx)(Ie.a.Control,{type:"password",name:"password",value:i,onChange:this.handleChange,label:"Password",required:!0})]}),Object(Z.jsxs)(Ee.a,{controlId:"validationCustomConfirmPassword",children:[Object(Z.jsx)(Te.a,{children:"Confirm Password *"}),Object(Z.jsx)(Ie.a.Control,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"Confirm Password",required:!0})]}),Object(Z.jsx)("button",{type:"submit",children:"SIGN UP"})]})]})})}}]),n}(i.Component),qe=function(){return Object(Z.jsx)(ce.a,{children:Object(Z.jsxs)(se.a,{children:[Object(Z.jsx)(fe.a,{s:12,md:6,children:Object(Z.jsx)(Se,{})}),Object(Z.jsx)(fe.a,{s:12,md:6,children:Object(Z.jsx)(Me,{})})]})})},Fe="SET_CURRENT_USER",Ge=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).unsubscribeFromAuth=null,e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=O.onAuthStateChanged(function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,h(n);case 3:t.sent.onSnapshot((function(t){e(Object(l.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(Z.jsxs)("div",{className:"App",children:[Object(Z.jsx)(le,{}),Object(Z.jsxs)(te.d,{children:[Object(Z.jsx)(te.b,{exact:!0,path:"/",component:ge}),Object(Z.jsx)(te.b,{exact:!0,path:"/shop",component:ye}),Object(Z.jsx)(te.b,{exact:!0,path:"/shop/:productId",component:Re}),Object(Z.jsx)(te.b,{exact:!0,path:"/about",component:Le}),Object(Z.jsx)(te.b,{exact:!0,path:"/checkout",component:Ce}),Object(Z.jsx)(te.b,{exact:!0,path:"/contact",component:Ue}),Object(Z.jsx)(te.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(Z.jsx)(te.a,{to:"/"}):Object(Z.jsx)(qe,{})}})]}),Object(Z.jsx)(pe,{})]})}}]),n}(i.Component),_e=Object(D.b)({currentUser:ae}),De=Object(v.b)(_e,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:Fe,payload:e}}(t))}}}))(Ge),Be=n(66),ze=n(23),He=n(42),Ve=n(67),Qe=n.n(Ve),We=n(68),Je=n.n(We),Xe={currentUser:null},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return Object(l.a)(Object(l.a)({},e),{},{currentUser:t.payload});default:return e}},Ke=n(69),Ye=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Ke.a)(e),[Object(l.a)(Object(l.a)({},t),{},{quantity:1})])},$e=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity-1}):e}))},et={hidden:!0,cartItems:[]},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.TOGGLE_CART_HIDDEN:return Object(l.a)(Object(l.a)({},e),{},{hidden:!e.hidden});case W.ADD_ITEM:return Object(l.a)(Object(l.a)({},e),{},{cartItems:Ye(e.cartItems,t.payload)});case W.REMOVE_ITEM:return Object(l.a)(Object(l.a)({},e),{},{cartItems:$e(e.cartItems,t.payload)});case W.CLEAR_ITEM_FROM_CART:return Object(l.a)(Object(l.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},nt={collections:[{title:"The Chiller",imageUrl:"https://i.ibb.co/7gLM850/chiller-min.jpg",id:1,linkUrl:"chiller",price:8.5,ingredients:"Red Apple, Lemon, Ginger and Cayenne Pepper",description:"The following is placeholder text known as \u201clorem ipsum,\u201d which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula in ligula commodo egestas. Integer cursus egestas ex dapibus eleifend. Maecenas mi erat, condimentum ac blandit sit amet, dapibus a purus."},{title:"Body Booster",imageUrl:"https://i.ibb.co/QC62yhf/body-boosters-min.jpg",id:2,linkUrl:"body-booster",price:8.5,ingredients:"Red Apple, Lemon, Ginger and Cayenne Pepper",description:"The following is placeholder text known as \u201clorem ipsum,\u201d which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula in ligula commodo egestas. Integer cursus egestas ex dapibus eleifend. Maecenas mi erat, condimentum ac blandit sit amet, dapibus a purus."},{title:"Eclipse",imageUrl:"https://i.ibb.co/GnWHJSB/eclipsee-min.jpg",id:3,linkUrl:"eclipse",price:8.5,ingredients:"Red Apple, Lemon, Ginger and Cayenne Pepper",description:"The following is placeholder text known as \u201clorem ipsum,\u201d which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula in ligula commodo egestas. Integer cursus egestas ex dapibus eleifend. Maecenas mi erat, condimentum ac blandit sit amet, dapibus a purus."},{title:"The Khemsitry",imageUrl:"https://i.ibb.co/qspYvph/khemistryy-min.jpg",id:4,linkUrl:"khemistry",price:9.5,ingredients:"Red Apple, Lemon, Ginger and Cayenne Pepper",description:"The following is placeholder text known as \u201clorem ipsum,\u201d which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula in ligula commodo egestas. Integer cursus egestas ex dapibus eleifend. Maecenas mi erat, condimentum ac blandit sit amet, dapibus a purus."},{title:"Lemon Twist",imageUrl:"https://i.ibb.co/NV9TXFB/lemmon-twist-min.jpg",id:5,linkUrl:"lemon-twist",price:8.5,ingredients:"Red Apple, Lemon, Ginger and Cayenne Pepper",description:"The following is placeholder text known as \u201clorem ipsum,\u201d which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula in ligula commodo egestas. Integer cursus egestas ex dapibus eleifend. Maecenas mi erat, condimentum ac blandit sit amet, dapibus a purus."},{title:"Red Zone",imageUrl:"https://i.ibb.co/m5Fc7bF/redd-zone-min.jpg",id:6,linkUrl:"red-zone",price:8.5,ingredients:"Red Apple, Lemon, Ginger and Cayenne Pepper",description:"The following is placeholder text known as \u201clorem ipsum,\u201d which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula in ligula commodo egestas. Integer cursus egestas ex dapibus eleifend. Maecenas mi erat, condimentum ac blandit sit amet, dapibus a purus."},{title:"Refresher",imageUrl:"https://i.ibb.co/VmFV9pt/refresheer-min.jpg",id:7,linkUrl:"refresher",price:8.5,ingredients:"Red Apple, Lemon, Ginger and Cayenne Pepper",description:"The following is placeholder text known as \u201clorem ipsum,\u201d which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula in ligula commodo egestas. Integer cursus egestas ex dapibus eleifend. Maecenas mi erat, condimentum ac blandit sit amet, dapibus a purus."},{title:"Sweet Tooth",imageUrl:"https://i.ibb.co/Cwhzkzn/sweet-tooth-min.jpg",id:8,linkUrl:"sweet-tooth",price:9,ingredients:"Red Apple, Lemon, Ginger and Cayenne Pepper",description:"The following is placeholder text known as \u201clorem ipsum,\u201d which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula in ligula commodo egestas. Integer cursus egestas ex dapibus eleifend. Maecenas mi erat, condimentum ac blandit sit amet, dapibus a purus."},{title:"Take Control",imageUrl:"https://i.ibb.co/6ZXB5T6/takee-control-min.jpg",id:9,linkUrl:"take-control",price:9,ingredients:"Red Apple, Lemon, Ginger and Cayenne Pepper",description:"The following is placeholder text known as \u201clorem ipsum,\u201d which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula in ligula commodo egestas. Integer cursus egestas ex dapibus eleifend. Maecenas mi erat, condimentum ac blandit sit amet, dapibus a purus."},{title:"Tropical Bliss",imageUrl:"https://i.ibb.co/9tBQmkf/tropical-blisss-min.jpg",id:10,linkUrl:"tropical-bliss",price:9,ingredients:"Red Apple, Lemon, Ginger and Cayenne Pepper",description:"The following is placeholder text known as \u201clorem ipsum,\u201d which is scrambled Latin used by designers to mimic real copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non ligula in ligula commodo egestas. Integer cursus egestas ex dapibus eleifend. Maecenas mi erat, condimentum ac blandit sit amet, dapibus a purus."}]},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},at={key:"root",storage:Je.a,whitelist:["cart"]},ct=Object(ze.c)({user:Ze,cart:tt,shop:it}),st=Object(He.a)(at,ct),rt=[Qe.a],lt=Object(ze.d)(st,ze.a.apply(void 0,rt)),ot=Object(He.b)(lt);c.a.render(Object(Z.jsx)(v.a,{store:lt,children:Object(Z.jsx)(j.a,{children:Object(Z.jsx)(Be.a,{persistor:ot,children:Object(Z.jsx)(De,{})})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.e1415302.chunk.js.map