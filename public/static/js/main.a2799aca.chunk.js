(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},28:function(e,t,a){e.exports=a(52)},37:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(26),l=a.n(c),o=(a(37),a(10)),s=a(0),u=(a(39),a(27)),i=a.n(u),m=a(5),p=Object(n.createContext)({});function d(e){var t=e.children,a=Object(n.useState)("1877F2"),c=Object(m.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)(null),u=Object(m.a)(s,2),i=u[0],d=u[1];return r.a.createElement(p.Provider,{value:{primaryColor:l,user:i,setPrimaryColor:o,setUser:d}},t)}var f=a(54).a.create({baseURL:"".concat(window.location.protocol||"https:","//").concat(window.location.hostname),headers:{"Content-Type":"application/json"},withCredentials:!0});function E(){var e=Object(n.useContext)(p),t=e.primaryColor,a=e.user,c=e.setUser,l=e.setPrimaryColor,u=Object(s.o)();return Object(n.useEffect)(function(){f.get("/api/user").then(function(e){c(function(){return e.data.user||null}),e.data.user&&e.data.user.preferences&&e.data.user.preferences.primaryColor&&l(e.data.user.preferences.primaryColor)}).catch(function(){c(function(){return null})})},[]),r.a.createElement("nav",{style:{backgroundColor:"#".concat(t)}},r.a.createElement(o.b,{className:"brand",to:"/"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:i.a,alt:"logo"})),r.a.createElement("h1",null,"UserPref")),r.a.createElement("div",{className:"nav-menu"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav-menu-item"},r.a.createElement("span",null,"(Logged in as ",a.username,")")),r.a.createElement("div",{className:"nav-menu-item"},r.a.createElement("span",{onClick:function(){f.get("/api/user/logout").then(function(){c(function(){return null})}).catch(function(){c(function(){return null})}).finally(function(){return u("/login")})}},"logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav-menu-item"},r.a.createElement(o.b,{to:"/login"},"Login")),r.a.createElement("div",{className:"nav-menu-item"},r.a.createElement(o.b,{to:"/signup"},"Signup")))))}function b(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),t)}var v=a(6),g=a(14);a(45);function h(e){var t=e.title,a=e.children;return r.a.createElement("div",{className:"auth-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h2",null,t)),r.a.createElement("div",{className:"card-body"},a)))}var w=a(24);a(47);function C(e){var t=e.label,a=Object(w.a)(e,["label"]);return r.a.createElement("div",{className:"form-element"},r.a.createElement("label",{htmlFor:a.name},t),r.a.createElement("input",Object.assign({id:a.name},a)))}a(49);function y(e){var t=e.children,a=e.type,c=void 0===a?"button":a,l=Object(w.a)(e,["children","type"]),o=Object(n.useContext)(p).primaryColor;return r.a.createElement("button",Object.assign({className:"btn-primary",type:c},l,{style:{backgroundColor:"#".concat(o)}}),t)}function j(){var e=Object(n.useContext)(p),t=e.setUser,a=e.setPrimaryColor,c=Object(n.useState)({username:"",password:""}),l=Object(m.a)(c,2),o=l[0],u=l[1],i=function(e){var t=e.target;u(Object(g.a)({},o,Object(v.a)({},t.name,t.value)))},d=Object(s.o)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{title:"Login"},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault(),o.username.trim()?o.password.trim()?void f.post("/api/user/login",o).then(function(e){f.get("/api/user").then(function(e){var n=e.data;t(function(){return n.user}),n.user&&n.user.preferences&&n.user.preferences.primaryColor&&a(n.user.preferences.primaryColor),d("/")}).catch(function(){t(function(){return null}),alert("Something went wrong!")})}).catch(function(e){alert(e.response.data.message)}):alert("Enter password!"):alert("Enter username!")}},r.a.createElement(C,{label:"Username",placeholder:"Enter your username",type:"text",value:o.username,name:"username",onChange:i}),r.a.createElement(C,{label:"Password",placeholder:"Enter your password",type:"password",value:o.password,name:"password",onChange:i}),r.a.createElement("div",{className:"text-center"},r.a.createElement(y,{type:"submit"},"Login")))))}function O(){var e=Object(s.o)(),t=Object(n.useContext)(p).setUser,a=Object(n.useState)({username:"",password:"",confirmPassword:""}),c=Object(m.a)(a,2),l=c[0],o=c[1],u=function(e){var t=e.target;o(Object(g.a)({},l,Object(v.a)({},t.name,t.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{title:"Signup"},r.a.createElement("form",{onSubmit:function(a){return a.preventDefault(),l.username.trim()?l.password.trim()?l.password.trim()!==l.confirmPassword.trim()?alert("Passwords not matching!"):void f.post("/api/user/register",l).then(function(){f.get("/api/user").then(function(a){var n=a.data;t(function(){return n.user||null}),e("/")}).catch(function(){t(function(){return null}),alert("Something went wrong!")})}).catch(function(e){alert(e.response.data.message)}):alert("Enter password!"):alert("Enter username!")}},r.a.createElement(C,{label:"Username",placeholder:"Enter your username",type:"text",value:l.username,name:"username",onChange:u}),r.a.createElement(C,{label:"Password",placeholder:"Enter your password",type:"password",value:l.password,name:"password",onChange:u}),r.a.createElement(C,{label:"Confirm Password",placeholder:"Confirm your password",type:"password",value:l.confirmPassword,name:"confirmPassword",onChange:u}),r.a.createElement("div",{className:"text-center"},r.a.createElement(y,{type:"submit"},"Signup")))))}var N=function(e){return Object(n.useContext)(p).user?r.a.createElement(s.a,{to:"/"}):e};a(25);function P(e){var t=e.color,a=e.onClick,n=e.active;return r.a.createElement("button",{style:{backgroundColor:"#".concat(t)},className:"color-palette ".concat(n?"active":""),onClick:function(){return a(t)}})}function x(){var e=Object(n.useContext)(p),t=e.primaryColor,a=e.setPrimaryColor,c=e.setUser,l=(e.user,function(e){f.put("/api/user",{preferences:{primaryColor:e}}).then(function(){c(function(t){return Object(g.a)({},t,{preferences:{primaryColor:e}})}),a(e)}).catch(function(){alert("Something went wrong")})});return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"User Preferences"),r.a.createElement("div",{className:"settings"},r.a.createElement("div",{className:"settings-item"},r.a.createElement("h3",null,"Choose color"),r.a.createElement("div",{className:"settings-item-content"},["1877F2","2700b5","d102c0","d10282","6b02c7","f70264","222222"].map(function(e){return r.a.createElement(P,{key:e,color:e,onClick:l,active:t===e})})))))}var S=function(e){return Object(n.useContext)(p).user?e:r.a.createElement(s.a,{to:"/login"})};var k=function(){return r.a.createElement(o.a,null,r.a.createElement(b,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",element:S(r.a.createElement(x,null))}),r.a.createElement(s.b,{path:"/login",element:N(r.a.createElement(j,null))}),r.a.createElement(s.b,{path:"/signup",element:N(r.a.createElement(O,null))}),r.a.createElement(s.b,{path:"*",element:r.a.createElement("h4",null,"404 Not found")}))))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null,r.a.createElement(k,null))))}},[[28,2,1]]]);
//# sourceMappingURL=main.a2799aca.chunk.js.map