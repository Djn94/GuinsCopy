(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Peng1",image:"https://images.unsplash.com/photo-1462888210965-cdf193fb74de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",state:"teststate"},{id:2,name:"Peng2",image:"https://images.unsplash.com/photo-1517783999520-f068d7431a60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",state:"teststate"},{id:3,name:"Peng3",image:"https://images.unsplash.com/photo-1541336528065-8f1fdc435835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",state:"teststate"},{id:4,name:"Peng4",image:"https://images.unsplash.com/photo-1508967289497-b9c85158e02d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",state:"teststate"},{id:5,name:"Peng5",image:"https://images.unsplash.com/photo-1520887358165-1e6b909b8a3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",state:"teststate"},{id:6,name:"Peng6",image:"https://images.unsplash.com/photo-1531303802923-80597f84bdf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",state:"teststate"},{id:7,name:"Peng7",image:"https://images.unsplash.com/photo-1516642581250-4fb94123ba31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",state:"teststate"},{id:8,name:"Peng8",image:"https://images.unsplash.com/photo-1540303405360-1fce3ee6c773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",state:"teststate"},{id:9,name:"Peng9",image:"https://images.unsplash.com/photo-1559344296-b7781ed5de38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",state:"teststate"},{id:10,name:"Peng10",image:"https://images.unsplash.com/photo-1473082538761-d4c7cd3f5e91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",state:"teststate"},{id:11,name:"Peng11",image:"https://images.unsplash.com/photo-1539640340767-00f10adebe8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",state:"teststate"},{id:12,name:"Peng12",image:"https://images.unsplash.com/photo-1473437673642-a9229b66cd75?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",state:"teststate"}]},,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(2),r=a.n(o),s=(a(15),a(3)),c=a(4),l=a(7),m=a(5),d=a(8),h=(a(16),a(17),{navStyle:{background:"yellow",height:"10vh",width:"100%",marginTop:0,paddingTop:0,textAlign:"right",position:"fixed",top:"0",left:"0",borderBottom:"3px, solid, black",borderTop:"3px, solid, black"}});var p=function(){return n.a.createElement("nav",{style:h.navStyle},n.a.createElement("p",null,"this is the navbar div"))},u=(a(18),{HeaderStyle:{background:"green",marginTop:0,height:"22vh",textAlign:"center",width:"100%"}});var f=function(){return n.a.createElement("div",{style:u.HeaderStyle,className:"headerDiv"},n.a.createElement("div",null,n.a.createElement("h2",null,"hm")),n.a.createElement("h2",{id:"instructions"},"Clck each cute penguin only once! Get twelve correct in a row to win."))},g={footerStyle:{background:"blue",fontSize:20,color:"black",borderTop:"3px solid black",textAlign:"center",padding:20,position:"fixed",left:"0",bottom:"0",height:"5vh",width:"100%"},ghostdiv:{display:"block",padding:"20px",height:"10vh",width:"100%"}};var b=function(){return n.a.createElement("div",null,n.a.createElement("div",{style:g.ghostdiv}),n.a.createElement("div",{style:g.footerStyle},n.a.createElement("span",{id:"copyrightText"},"Copyright 2019")))};a(19);var y=function(e){var t=this;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})),n.a.createElement("strong",null,e.name),n.a.createElement("span",{className:"select",onClick:function(){return t.props.Handleclick(e.id)}},"Select"))},v=a(6);a(20);var x=function(e){return n.a.createElement("div",{className:"container"},e.children)},E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={penguins:v},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(p,null),n.a.createElement(f,null),n.a.createElement(x,null,this.state.penguins.map(function(t){return n.a.createElement(y,{handleClick:e.handleClick,id:t.id,key:t.id,image:t.image,name:t.name})})),n.a.createElement(b,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.25c69e2e.chunk.js.map