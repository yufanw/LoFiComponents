(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(28)},,,,,,function(e,t,n){},,function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),i=n.n(c),r=(n(14),n(1)),l=n(2),s=n(4),m=n(3),u=n(5),h=(n(16),n(20),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={count:n.props.count},n.handleClick=function(){n.setState(function(e){return{count:e.count+1,clicked:!0}},n.props.onClick),setTimeout(function(){n.setState({clicked:!1})},280)},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"floating-button-comp"},o.a.createElement("div",{className:"floating-button-wrapper"},o.a.createElement("a",{className:this.state.clicked?"btn active":"btn",href:"#0w0",onClick:this.handleClick},o.a.createElement("i",{className:"icon ion-ios-heart"}))))}}]),t}(a.Component));h.defaultProps={count:0};n(22);var f=function(e){var t=e.icon,n=e.score;return o.a.createElement("div",{className:"scorebox-comp"},o.a.createElement("div",{className:"scorebox-wrapper"},o.a.createElement("div",{className:"icon"},t),o.a.createElement("div",{className:"score"},n)))},g=(n(24),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={on:n.props.on},n.toggle=function(){n.setState(function(e){return{on:!e.on}},n.props.toggle)},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"switch-comp"},o.a.createElement("div",{className:"switch-wrapper"},o.a.createElement("label",{className:this.state.on?"switch":"switch off",htmlFor:"switch"},o.a.createElement("input",{type:"checkbox",name:"switch",id:"switch",onChange:this.toggle,checked:this.state.on}),o.a.createElement("div",{className:this.state.on?"slider":"slider off"}))))}}]),t}(a.Component));g.defaultProps={on:!1};n(26);var p=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"checkbox-comp"},o.a.createElement("div",{className:"checkbox-wrapper"},o.a.createElement("label",{className:"container"},o.a.createElement("input",{type:"radio",name:"radio"}),o.a.createElement("span",{className:"checkmark red"})),o.a.createElement("label",{className:"container"},o.a.createElement("input",{type:"radio",name:"radio"}),o.a.createElement("span",{className:"checkmark yellow"})),o.a.createElement("label",{className:"container"},o.a.createElement("input",{type:"radio",name:"radio"}),o.a.createElement("span",{className:"checkmark green"}))))}}]),t}(a.Component),d=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={floatingbutton:0,toggle:!1,rainbowClass:""},n.handleFloatingButtonClick=function(){n.setState(function(e){var t=e.floatingbutton;return{floatingbutton:t+1,rainbowClass:"rainbow".concat(String(String(t+1)[String(t+1).length-1]))}})},n.handleToggle=function(){n.setState(function(e){return{toggle:!e.toggle}})},n.toggleIcon=function(){return n.state.toggle?o.a.createElement("div",{className:"shift"},o.a.createElement("i",{className:"icon ion-ios-moon"})):o.a.createElement("div",{className:"shift"},o.a.createElement("i",{className:"icon ion-ios-sunny"}))},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:this.state.toggle?"App dark":"App"},o.a.createElement("h1",null,"LoFi Components"),o.a.createElement("div",{className:"app-wrapper"},o.a.createElement("div",{className:"comp"},o.a.createElement("div",{className:this.state.rainbowClass},o.a.createElement(f,{icon:o.a.createElement("i",{className:"icon ion-ios-heart"}),score:this.state.floatingbutton})),o.a.createElement(h,{count:this.state.floatingbutton,onClick:this.handleFloatingButtonClick})),o.a.createElement("div",{className:"comp"},o.a.createElement(f,{icon:this.toggleIcon()}),o.a.createElement(g,{on:this.state.toggle,toggle:this.handleToggle})),o.a.createElement("div",{className:"comp"},o.a.createElement(p,null)),o.a.createElement("div",{className:"comp info"},o.a.createElement("a",{href:"https://github.com/yufanw/LoFiComponents"},"Follow Work on Github",o.a.createElement("i",{className:"icon ion-logo-github github"})))),o.a.createElement("footer",null,o.a.createElement("h3",null,o.a.createElement("a",{href:"https://github.com/yufanw"},"Yufan Wang")),o.a.createElement("h5",null,"v1.0.0"),o.a.createElement("a",{href:"https://github.com/yufanw/LoFiComponents"},"Source Code"),o.a.createElement("a",{href:"mailto:yufansmail@gmail.com"},"Contact")))}}]),t}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(d,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");v?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):b(e)})}}()}],[[8,2,1]]]);
//# sourceMappingURL=main.309ba2bb.chunk.js.map