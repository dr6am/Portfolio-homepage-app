(this["webpackJsonphomepage-app"]=this["webpackJsonphomepage-app"]||[]).push([[0],{52:function(t,n,e){t.exports=e(68)},57:function(t,n,e){},58:function(t,n,e){},68:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(26),o=e.n(i),c=(e(57),e(33)),u=e(5),l=e(71),s=e(72),p=e(73),d=e(6),f=e(41),m=e.n(f),h=(e(58),e(47)),g=e(16),b=e(17),v=e(20),x=e(18),w=e(21);function E(){var t=Object(u.a)(["\n\t","\n\twidth:",";\n\toverflow:hidden;\n\theight: min-content;\n\tspan {\n\t\tcolor:#212121;\n\t\twidth: max-content;\n\t\tfont-size:",";\n\t\tdisplay:flex;\n\t\tpadding-left:100%;\n\t\t-webkit-animation: marquee 10s infinite linear;\n\t\tanimation: marquee 10s infinite linear;\n\t}\n\t@-webkit-keyframes marquee {\n\t\t0%{-webkit-transform: translate(0, 0);}\n\t\t100%{-webkit-transform: translate(-100%, 0);}\n\t}\n\t@keyframes marquee{\n\t\t0%{transform: translate(0, 0);}\n\t\t100%{transform: translate(-100%, 0)}\n\t}\n"]);return E=function(){return t},t}var y=d.a.div(E(),(function(t){return t.margin?t.margin+": auto;":null}),(function(t){return t.width}),(function(t){return t.fz})),j=function(t){var n=t.children,e=t.width,r=t.fontSize,i=t.margin;return a.a.createElement(y,{margin:"margin-"+i,width:e,fz:r},a.a.createElement("span",null,n))};function k(){var t=Object(u.a)(["\n\tletter-spacing: .05em;\n\tcolor: #111111;\n\tfont-family: 'Source Sans Pro', sans-serif;\n\tfont-weight: 700;\n\tmargin: 0;\n\theight: min-content;\n\tmargin-bottom: 5px;\n\tfont-size: 2em;\n\ttext-align: center;\n"]);return k=function(){return t},t}function O(){var t=Object(u.a)(["\n\twidth: 500px;\n\theight: min-content;\n\talign-items: center;\n\tz-index: 2;\n\tfont-size: 3vmax;\n\tbackground: #fff;\n\tborder-radius: 15px;\n\tpadding: 30px;\n\ttop: 0;\n\tleft:0;\n\tright:0;\n\tbox-shadow: 0 0 10px rgba(0,0,0,0.5);\n"]);return O=function(){return t},t}var S=function(t){function n(){var t,e;Object(g.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=Object(v.a)(this,(t=Object(x.a)(n)).call.apply(t,[this].concat(a)))).getTime=function(){var t=new Date;return(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},e}return Object(w.a)(n,t),Object(b.a)(n,[{key:"render",value:function(){var t=this;return setTimeout((function(){t.forceUpdate()}),1e3),a.a.createElement(C,null,a.a.createElement(D,{id:"time"},this.getTime()),a.a.createElement(j,{width:"100%",fontSize:"15px"},new Date("December 17, 1995 03:24:00").toString()))}}]),n}(r.Component),C=d.a.div(O()),D=d.a.h1(k());function _(){var t=Object(u.a)(["\n\n\t\twidth: 90%;\n\t\tmargin-left: auto;\n\t\tcolor: #333;\n\t\tfont-size: .7em;\n\t\tmin-height: auto;\n\t\n"]);return _=function(){return t},t}function z(){var t=Object(u.a)(["\n\tdisplay: block;\n\tbox-sizing: content-box;\n\tposition: relative;\n\twidth: 75%;\n\t//max-height: ",";\n\t//min-height: ",";\n\theight:min-content;\n\tpadding-right: 5px;\n\th1{\n\t\tmargin-top: .3em;\n\t\tmargin-bottom: 0;\n\t\tcolor: #1b1b1b;\n\t\tfont-size: 1em;\n\t}\n\t\n"]);return z=function(){return t},t}function T(){var t=Object(u.a)(["\n\tborder-radius: 15px;\n\tmin-height: ",";\n\tmin-width: ",";\n\tmax-height: ",";\n\tmax-width: ",';\n\tbackground: url("','");\n\tbackground-size: cover;\n\tmargin-right: 10px;\n\tmargin-top: auto;\n\tmargin-bottom: auto;\n']);return T=function(){return t},t}function F(){var t=Object(u.a)(["\n\tpadding: 15px 10px;\n\tdisplay: flex;\n\tborder-top:1px solid #111;\n\talign-content: baseline;\n\ttransition: all ease .3s;\n\tbackground:none;\n\tcursor:pointer;\n\t:hover{\n\t\tbackground: #efefef;\n\t}\n\t:first-of-type{\n\t\tborder-top:none;\n\t\tborder-radius: 15px 15px 0 0;\n\t}\n\t:last-of-type{\n\t\tborder-radius: 0 0 15px 15px ;\n\t}\n\t\n"]);return F=function(){return t},t}var A=d.a.div(F()),B=d.a.div(T(),(function(t){return t.size+"px"}),(function(t){return t.size+"px"}),(function(t){return t.size+"px"}),(function(t){return t.size+"px"}),(function(t){return t.img})),N=d.a.div(z(),(function(t){return t.size+"px"}),(function(t){return t.size+"px"})),W=d.a.p(_()),H=function(t){var n=t.url,e=t.title,r=t.caption,i=t.thumb,o=void 0===i?"":i,c=t.stripe;return a.a.createElement(A,{onClick:function(){return window.open(n,"_blank").focus}},Boolean(o)?a.a.createElement(B,{img:o.url,size:.8*o.height}):"",a.a.createElement(N,{size:.8*o.height},a.a.createElement("h1",null,e||"Title not found"),a.a.createElement(W,null,r),c?a.a.createElement(j,{margin:"top",width:"100%",fontSize:"15px"},c):""))};function R(){var t=Object(u.a)(["\n\tmax-height: 455px;\n\tborder: 1px solid #282c34;\n\tborder-radius: 15px;\n\toverflow: hidden;\n\t"]);return R=function(){return t},t}function U(){var t=Object(u.a)(["\n\t\n\tdisplay: flex;\n\tflex-direction: column;\n\tbox-sizing: border-box;\n\tbackground: #fff;\n\tborder-radius: 15px;\n\twidth: 500px;\n\tpadding: 25px;\n\theight: max-content;\n\tbox-shadow: 0 0 10px rgba(0,0,0,0.5);\n"]);return U=function(){return t},t}function L(){var t=Object(u.a)(['\n\tfont-size: 2em;\n\tfont-family: "San Francisco","Lato",sans-serif;\n\tpadding-bottom: 5px;\n\tfont-weight: 700;\n\tcolor: #282c34;\n']);return L=function(){return t},t}var M=d.a.div(L()),P=d.a.div(U()),G=d.a.div(R()),I=function(t){function n(){var t,e;Object(g.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=Object(v.a)(this,(t=Object(x.a)(n)).call.apply(t,[this].concat(a)))).state={hasError:null},e.data=[{url:"https://dr6am-clothing-store.glitch.me/",title:"Clothing store",caption:"My e-commerce project",thumb:{}},{url:"/",title:"Homepage app",caption:"Drag & drop test",thumb:{}},{url:"https://practical-mclean-a180c8.netlify.com/",title:"Gatsby",caption:"Gatsby Blog ",thumb:{}},{url:"https://dr6am.github.io/todo-app/",title:"Todo app",caption:"Simple todo app",thumb:{url:"https://cdn.glitch.com/80115052-6f77-4004-8889-e3d0122fea2c%2Fc30db698-bbe7-4922-bbb4-76f0f5457454.%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5.png",size:"150"}},{url:"https://dr6am.github.io/react-monsters-app/",title:"Monsters Rolodex",caption:"Monsters Rolodex App",thumb:{url:"https://cdn.glitch.com/80115052-6f77-4004-8889-e3d0122fea2c%2F%D0%90%D0%BD%D0%BD%D0%BE%D1%82%D0%B0%D1%86%D0%B8%D1%8F%202020-01-10%20131815-min(1).png?v=1578651705498",size:"150"}}],e}return Object(w.a)(n,t),Object(b.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidCatch",value:function(t,n){this.setState({hasError:t})}},{key:"render",value:function(){var t=this.data;return a.a.createElement(P,null,a.a.createElement(M,null,"My Projects:"),a.a.createElement(G,null,Array.isArray(t)&&t.map((function(t,n){return a.a.createElement(H,{key:n,url:t.url,title:t.title,caption:t.caption})}))))}}]),n}(r.Component),q=e(29),J={FETCH_NEWS_START:"FETCH_NEWS_START",FETCH_NEWS_SUCCESS:"FETCH_NEWS_SUCCESS",FETCH_NEWS_FAILURE:"FETCH_NEWS_FAILURE"},Y=function(){return{type:J.FETCH_NEWS_START}},$=function(t){return{type:J.FETCH_NEWS_SUCCESS,payload:t}},V=function(t){return{type:J.FETCH_NEWS_FAILURE,payload:t}};function X(){var t=Object(u.a)(["\n\theight: 1.5em;\n\tmargin:  auto;\n"]);return X=function(){return t},t}function K(){var t=Object(u.a)(["\n\tdisplay: flex;\n\twhite-space: nowrap;\n\tvertical-align: bottom;\n\talign-content: baseline;\n\talign-items: baseline;\n\tfont-size: 1em;\n"]);return K=function(){return t},t}function Q(){var t=Object(u.a)(["\n\tmargin-right: 15px;\n\tcolor: #282c34;\n\tfont-size: 1em;\n"]);return Q=function(){return t},t}function Z(){var t=Object(u.a)(["\n\tcolor: #111;\n\tfont-size: 1em;\n"]);return Z=function(){return t},t}function tt(){var t=Object(u.a)(['\n\tmargin: auto 10px auto auto;\n\tfont-size: 1.2em;\n\tfont-family: "San Francisco","Lato",sans-serif;\n\tfont-weight: 700;\n']);return tt=function(){return t},t}function nt(){var t=Object(u.a)(["\n\tpadding: 10px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmin-height: 35px;\n\theight: 35px;\n\tmax-height: 35px;\n\twidth: auto;\n\tz-index: 5;\n\tmargin-bottom: 5px;\n"]);return nt=function(){return t},t}function et(){var t=Object(u.a)(["\n\tmax-height: 415px;\n\toverflow: scroll;\n\toverflow-x: hidden;\n::-webkit-scrollbar-track\n{\n\tborder-radius: 10px;\n  \tborder: none;\n  \twidth: 10px;\n}\n\n\t::-webkit-scrollbar\n{\n\twidth: 10px;\n\tbackground: rgba(0,0,0,0.08);\n    border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb\n{\n\tborder-radius: 100px;\n\tbackground-color: #282c34;\n  \tborder:none;\n}\n\t"]);return et=function(){return t},t}function rt(){var t=Object(u.a)(["\n\tbackground: #fff;\n\tborder-radius: 15px;\n\twidth: 500px;\n\tpadding: 25px;\n\tdisplay: ",";\n\tbox-shadow: 0 0 10px rgba(0,0,0,0.5);\n"]);return rt=function(){return t},t}var at=d.a.div(rt(),(function(t){return t.error?"flex":"block"})),it=d.a.div(et()),ot=d.a.img(nt()),ct=d.a.span(tt()),ut=d.a.h1(Z()),lt=d.a.p(Q()),st=d.a.div(K()),pt=d.a.img(X()),dt=function(t){function n(){var t,e;Object(g.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=Object(v.a)(this,(t=Object(x.a)(n)).call.apply(t,[this].concat(a)))).state={hasError:null},e}return Object(w.a)(n,t),Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchNewsStart()}},{key:"componentDidCatch",value:function(t,n){this.setState({hasError:t})}},{key:"makeStripe",value:function(t){return a.a.createElement(st,null,a.a.createElement(ut,null,t.section),a.a.createElement(lt,null,Boolean(t.subsection)&&"|"+t.subsection),a.a.createElement(pt,{src:"https://cdnjs.cloudflare.com/ajax/libs/topcoat-icons/0.1.0/svg/location.svg",alt:""}),a.a.createElement(lt,null,Boolean(t.geo)&&" "+t.geo),a.a.createElement(pt,{src:"https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/collection/build/ionicons/svg/ios-stopwatch.svg",alt:""}),a.a.createElement(lt,null,Boolean(t.published_date)&&t.published_date))}},{key:"render",value:function(){var t=this,n=this.props.newsList,e=n.data,r=n.isFetching,i=n.error,o=this.state.hasError;return a.a.createElement(at,{error:i||r||o},a.a.createElement(ot,{src:"https://1000logos.net/wp-content/uploads/2017/04/Symbol-New-York-Times.png",alt:"nyt",onClick:function(){return window.open("https://nytimes.com","_blank")}}),!r&&!(i||o)&&a.a.createElement(it,null,Array.isArray(e)&&!r&&e.map((function(n,e){return a.a.createElement(H,{key:e,url:n.url,title:n.title,caption:n.caption,thumb:n.thumb,stripe:t.makeStripe(n.stripeData)})}))),(o||i)&&a.a.createElement(ct,null,"\u0421ould not get data from NY times"),r&&a.a.createElement(ct,null,"Fetching data..."))}}]),n}(r.Component),ft=Object(q.b)((function(t){return{newsList:t.news}}),(function(t){return{fetchNewsStart:function(){return t(Y())}}}))(dt);function mt(){var t=Object(u.a)(['\n  background: url("https://source.unsplash.com/random/1920x1080");\n  background-size: cover;\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  z-index: -1;\n  filter: contrast(1.1);\n']);return mt=function(){return t},t}var ht=function(){return a.a.createElement(gt,null)},gt=d.a.div(mt());function bt(){var t=Object(u.a)(["\n\topacity: ",";\n\theight:max-content;\n\ttransition: .3s all ease;\n\twidth:max-content;\n\tpadding: 0.5rem 1rem;\n\tmargin-bottom: .5rem;\n\tcursor: grab;\n"]);return bt=function(){return t},t}var vt="card";var xt=d.a.div(bt(),(function(t){return t.opacity})),wt=function(t){var n=t.id,e=t.Text,i=t.index,o=t.moveCard,u=Object(r.useRef)(null),l=Object(s.a)({accept:vt,hover:function(t,n){if(u.current){var e=t.index,r=i;if(e!==r){var a=u.current.getBoundingClientRect(),c=(a.bottom-a.top)/2,l=n.getClientOffset().y-a.top;e<r&&l<c||e>r&&l>c||(o(e,r),t.index=r)}}}}),d=Object(c.a)(l,2)[1],f=Object(p.a)({item:{type:vt,id:n,index:i},collect:function(t){return{isDragging:t.isDragging()}}}),m=Object(c.a)(f,2),h=m[0].isDragging?0:1;return(0,m[1])(d(u)),a.a.createElement(xt,{ref:u,opacity:h},e)},Et=function(){var t=Object(r.useState)([{id:1,data:a.a.createElement(S,null)},{id:2,data:a.a.createElement(ft,null)},{id:3,data:a.a.createElement(I,null)}]),n=Object(c.a)(t,2),e=n[0],i=n[1],o=Object(r.useCallback)((function(t,n){var r=e[t];i(m()(e,{$splice:[[t,1],[n,0,r]]}))}),[e]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex"}},e.map((function(t,n){return function(t,n){return a.a.createElement(wt,{key:t.id,index:n,id:t.id,Text:t.data,moveCard:o})}(t,n)}))))},yt=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(l.a,{backend:h.a},a.a.createElement(Et,null)),a.a.createElement(ht,null))},jt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function kt(t,n){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(t)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var Ot=e(45),St=e(7),Ct=e(30),Dt=(e(64),e(48)),_t=e(11),zt=e.n(_t),Tt=e(13),Ft=zt.a.mark(Nt),At=zt.a.mark(Wt),Bt=zt.a.mark(Ht);function Nt(){var t,n;return zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=kxVgG6LIUn8ivPxepGeHuyvzAXGpGucN").then((function(t){return t.json()}));case 3:return t=e.sent,n=[],t.results.forEach((function(t){t.multimedia.length>=2&&n.push({title:t.title,url:t.url,caption:t.abstract,thumb:{height:t.multimedia[1].height,url:t.multimedia[1].url},stripeData:{published_date:t.published_date,geo:Array.isArray(t.geo_facet)?t.geo_facet[0]:null,section:t.section,subsection:t.subsection?t.subsection:null}})})),e.next=8,Object(Tt.c)($(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(Tt.c)(V(e.t0.message));case 14:case"end":return e.stop()}}),Ft,null,[[0,10]])}function Wt(){return zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Tt.d)(J.FETCH_NEWS_START,Nt);case 2:case"end":return t.stop()}}),At)}function Ht(){return zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Tt.a)([Object(Tt.b)(Wt)]);case 2:case"end":return t.stop()}}),Bt)}var Rt=zt.a.mark(Ut);function Ut(){return zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Tt.a)([Object(Tt.b)(Ht)]);case 2:case"end":return t.stop()}}),Rt)}var Lt=e(46),Mt=e.n(Lt),Pt=e(39),Gt={data:[],error:null,isFetching:!1},It=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case J.FETCH_NEWS_START:return Object(Pt.a)({isFetching:!0},t);case J.FETCH_NEWS_SUCCESS:return{isFetching:!1,error:null,data:n.payload};case J.FETCH_NEWS_FAILURE:return Object(Pt.a)({error:n.payload,isFetching:!1},t);default:return t}},qt={key:"root",storage:Mt.a,whitelist:[]},Jt=Object(St.c)({news:It}),Yt=Object(Ct.a)(qt,Jt),$t=Object(Dt.a)(),Vt=[$t];var Xt=Object(St.e)(Yt,St.a.apply(void 0,Vt));$t.run(Ut);var Kt=Object(Ct.b)(Xt);o.a.render(a.a.createElement(q.a,{store:Xt},a.a.createElement(Ot.a,{persistor:Kt},a.a.createElement(yt,null))),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/Portfolio-homepage-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Portfolio-homepage-app","/service-worker.js");jt?(!function(t,n){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(e){var r=e.headers.get("content-type");404===e.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):kt(t,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):kt(n,t)}))}}()}},[[52,1,2]]]);
//# sourceMappingURL=main.e4054b07.chunk.js.map