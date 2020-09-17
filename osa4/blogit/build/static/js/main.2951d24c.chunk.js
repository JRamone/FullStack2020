(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),u=n.n(l),c=n(11),i=n(6),o=n.n(i),s=n(9),m=n(25),p={message:"",type:"success"},d=void 0,f=function(e,t){return d&&(clearTimeout(d),d=void 0),function(){var n=Object(s.a)(o.a.mark((function n(a){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"SET",data:{message:e,type:t}}),d=setTimeout((function(){return a(E())}),4e3);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(){return{type:"RESET",data:""}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET":return p;case"SET":return t.data;default:return e}},b=n(22),v=n.n(b),h={login:function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=null,j=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{authorization:O}},e.next=3,v.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put("".concat("/api/blogs","/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("".concat("/api/blogs","/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k={getAll:function(){return v.a.get("/api/blogs").then((function(e){return e.data}))},setToken:function(e){O="bearer ".concat(e)},createBlog:j,likeABlog:y,deleteABlog:function(){var e=Object(s.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{authorization:O}},e.next=3,v.a.delete("".concat("/api/blogs","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),commentABlog:w},x=function(e){return function(){var t=Object(s.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.login(e);case 2:a=t.sent,window.localStorage.setItem("LoggedUser",JSON.stringify(a)),k.setToken(a.token),n({type:"LOGIN",data:e});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;default:return e}},S=n(156),I=function(){var e=Object(c.c)((function(e){return e.notification.message})),t=Object(c.c)((function(e){return e.notification.type}));if(""===e)return null;return r.a.createElement("div",{style:{fontSize:50}},r.a.createElement(S.a,{severity:t},e))},A=n(155),L=n(143),q=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],u=Object(a.useState)(""),i=Object(m.a)(u,2),p=i[0],d=i[1],E=Object(c.b)(),g=function(e){"username"===e.target.name&&l(e.target.value),"password"===e.target.name&&d(e.target.value)},b=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,E(x({username:n,password:p}));case 4:l(""),d(""),E(f("Successfully logged in")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),E(f("Wrong Credentials","error"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{style:{padding:20}},r.a.createElement("h2",null,"Log in"),r.a.createElement("form",{onSubmit:b},r.a.createElement("div",null,r.a.createElement(A.a,{onChange:g,label:"username",id:"username",name:"username"})),r.a.createElement("div",null,r.a.createElement(A.a,{onChange:g,label:"password",type:"password",id:"password",name:"password"})),r.a.createElement("div",{style:{paddingTop:20}},r.a.createElement(L.a,{type:"submit",variant:"contained",color:"primary",id:"loginButton",text:"Log in"},"Log in")),r.a.createElement("div",null,r.a.createElement(I,null)),r.a.createElement("div",null,r.a.createElement("h2",null,"Testik\xe4ytt\xe4j\xe4 "),r.a.createElement("h3",null,"K\xe4ytt\xe4j\xe4tunnus : Testi"),r.a.createElement("h3",null,"Salasana : Testi123"))))},C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Tervetuloa blogisovellukseen"),r.a.createElement("p",null,"Users - v\xe4lilehdelt\xe4 n\xe4et muut k\xe4ytt\xe4j\xe4t ja pystyt katsomaan heid\xe4n lis\xe4\xe4m\xe4ns\xe4 blogit"),r.a.createElement("p",null,"Blogs - v\xe4lilehdelt\xe4 n\xe4et kaikki blogit. Voit lis\xe4t\xe4 omia blogeja, sek\xe4 tyk\xe4t\xe4 ja kommentoida muita blogeja"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dui quis neque vulputate lacinia. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque mattis, ligula quis vestibulum convallis, neque risus venenatis odio, eu fringilla neque lacus nec erat. Sed et nisl congue, commodo nibh ac, lobortis leo. Donec molestie mi tincidunt nunc pretium lacinia. Ut sagittis blandit ligula sed dapibus. Donec vitae orci sed quam dictum bibendum. Sed et maximus ex. Aenean pretium aliquet nisi, vel tincidunt massa volutpat semper. Nam sodales dui eget sagittis gravida. Maecenas ac scelerisque sem, et tempus tortor."),r.a.createElement("p",null,"Vestibulum eu justo hendrerit, pulvinar orci ut, rutrum enim. Aenean blandit congue convallis. Phasellus id felis nec diam blandit tempor. Mauris sit amet felis sit amet felis lacinia congue. Praesent bibendum dignissim felis non vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum nec ante a eleifend. Donec tristique facilisis urna, vel efficitur lorem finibus eget. Donec id justo magna."),r.a.createElement("p",null,"Nunc pellentesque augue vel ligula condimentum, nec sollicitudin massa fermentum. Nullam blandit orci neque, quis tempor elit semper eget. Aliquam lacinia urna quis neque tempor vulputate. Nam vel lacus a mi consectetur maximus. Maecenas nec erat aliquam, imperdiet turpis at, efficitur nibh. Mauris aliquam lectus ultrices mi ullamcorper varius. Vestibulum gravida, ligula quis luctus varius, eros tellus pellentesque eros, sit amet cursus nunc velit in augue."))},N=n(18),B=n(15),D=n(39),U=n(68),F=function(e){return function(){var t=Object(s.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.createBlog(e);case 2:a=t.sent,n({type:"CREATE_NEW",data:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=function(e){return function(){var t=Object(s.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.deleteABlog(e.id);case 2:n({type:"DELETE",data:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":return t.data;case"CREATE_NEW":return[].concat(Object(U.a)(e),[t.data]);case"LIKE":return e.map((function(e){return e.id!==t.data.id?e:t.data}));case"DELETE":return e.filter((function(e){return e.id!==t.data.id}));case"ADDCOMMENT":return e.map((function(e){return e.id!==t.data.id?e:t.data}));default:return e}},R=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],l=t[1],u=Object(B.f)(),i=Object(B.g)().id,p=Object(c.c)((function(e){return e.blogs})).find((function(e){return e.id===i})),d=Object(c.b)(),E=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.confirm("You really wanna delete ".concat(p.title,"?"))&&(d(M(p)),d(f("deleted ".concat(p.title))),u.push("/"));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return p?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("p",null,"Author : ",p.author),r.a.createElement("p",null,"Title : ",p.title),r.a.createElement("p",null,"Url : ",r.a.createElement("a",{href:"https://www.google.com"},p.url)),r.a.createElement("p",null,"Likes : ",p.likes," ",r.a.createElement("button",{value:p.id,onClick:function(){d(function(e){return function(){var t=Object(s.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(D.a)(Object(D.a)({},e),{},{likes:e.likes+1}),t.next=3,k.likeABlog(a);case 3:n({type:"LIKE",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(p)),d(f("liked ".concat(p.title)))}},"like")),r.a.createElement("p",null,"User : ",p.user.username," ",function(){var e=JSON.parse(window.localStorage.getItem("LoggedUser"));return p.user.username===e.username?r.a.createElement("button",{value:p.id,onClick:E},"delete this blog"):null}()),r.a.createElement("p",null,"Comments : "),r.a.createElement("ul",null,p.comments.map((function(e){return r.a.createElement("li",{key:e},e)}))),r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target;return l(t.value)}}),r.a.createElement("button",{onClick:function(){d(function(e,t){return function(){var n=Object(s.a)(o.a.mark((function n(a){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Object(D.a)(Object(D.a)({},e),{},{comments:e.comments.concat(t)}),n.next=3,k.commentABlog(r);case 3:a({type:"ADDCOMMENT",data:r});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(p,n))}},"add comment"))):null},G=n(144),P=n(145),z=n(146),K=n(147),V=n(148),W=function(){var e=Object(c.c)((function(e){return e.blogs.sort((function(e,t){return t.likes-e.likes}))}));return r.a.createElement(N.a,null,r.a.createElement(B.c,null,r.a.createElement(B.a,{path:"/blogs/:id"},r.a.createElement(R,null)),r.a.createElement(B.a,{path:"/blogs"},r.a.createElement("h2",null," blogs"),r.a.createElement(G.a,null,r.a.createElement(P.a,null,r.a.createElement(z.a,null,r.a.createElement(K.a,null,"Title"),r.a.createElement(K.a,null,"Added by"))),r.a.createElement(V.a,null,e.map((function(e){return r.a.createElement(z.a,{key:e.id},r.a.createElement(K.a,null,r.a.createElement(N.b,{to:"/blogs/".concat(e.id)},e.title)),r.a.createElement(K.a,null,e.user.name))})))))))},Z=function(){var e=Object(c.b)(),t=Object(a.useState)(""),n=Object(m.a)(t,2),l=n[0],u=n[1],i=Object(a.useState)(""),p=Object(m.a)(i,2),d=p[0],E=p[1],g=Object(a.useState)(""),b=Object(m.a)(g,2),v=b[0],h=b[1],O=function(){var t=Object(s.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault();try{e(F({title:l,author:d,url:v})),e(f("added ".concat(l," by ").concat(d)))}catch(a){console.log(a)}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Create new"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title: "),r.a.createElement("th",null,"Author: "),r.a.createElement("th",null,"Url:")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{id:"titleinput",onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement("td",null,r.a.createElement("input",{id:"authorinput",onChange:function(e){var t=e.target;return E(t.value)}})),r.a.createElement("td",null,r.a.createElement("input",{id:"urlinput",onChange:function(e){var t=e.target;return h(t.value)}})),r.a.createElement("td",null,r.a.createElement(L.a,{id:"blogsubmitbutton",onClick:O},"create"))))))},_=function(){return v.a.get("/api/users").then((function(e){return e.data}))},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZE":return t.data;default:return e}},H=function(){var e=Object(B.g)().id,t=Object(c.c)((function(e){return e.users})).find((function(t){return t.id===e}));return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t.name),r.a.createElement("h2",null,"Added blogs"),r.a.createElement("ul",null,t.blogs.map((function(e){return r.a.createElement("li",{key:e.id},e.title)})))):null},Q=n(149),X=n(105),$=function(){var e=Object(c.b)();Object(a.useEffect)((function(){e(function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:n=e.sent,t({type:"INITIALIZE",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(c.c)((function(e){return e.users}));return t?(t.sort((function(e,t){return t.blogs.length-e.blogs.length})),r.a.createElement(N.a,null,r.a.createElement(B.c,null,r.a.createElement(B.a,{path:"/users/:id"},r.a.createElement(H,null)),r.a.createElement(B.a,{path:"/"},r.a.createElement("h1",null,"Users"),r.a.createElement(Q.a,{component:X.a},r.a.createElement(G.a,null,r.a.createElement(P.a,null,r.a.createElement(z.a,null,r.a.createElement(K.a,null,"name"),r.a.createElement(K.a,null,"Blogs"))),r.a.createElement(V.a,null,t.map((function(e){return r.a.createElement(z.a,{key:e.id},r.a.createElement(K.a,null,r.a.createElement(N.b,{to:"/users/".concat(e.id)},e.name)),r.a.createElement(K.a,null,e.blogs.length))}))))))))):null},ee=n(150),te=n(151),ne=n(153),ae=n(154),re=n(152),le=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.user})),n=Object(B.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.name," logged in ",r.a.createElement(L.a,{color:"inherit",id:"logOutButton",onClick:function(t){t.preventDefault(),e((window.localStorage.clear(),k.setToken(null),{type:"LOGOUT",data:null})),e(f("Successfully logged out")),n.push("/")},text:"log out"},"log out")))},ue=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.user}));Object(a.useEffect)((function(){e(function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAll();case 2:n=e.sent,t({type:"INIT",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(s.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=window.localStorage.getItem("LoggedUser"))&&(a=JSON.parse(n),k.setToken(a.token),t({type:"LOGIN",data:a}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement(ee.a,{style:{padding:80}},r.a.createElement(N.a,null,r.a.createElement("div",null,null===t?r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a,{variant:"outlined",position:"absolute"},r.a.createElement(re.a,null,r.a.createElement("a",{style:{paddingLeft:20,color:"white",visited:"white"},href:"https://github.com/JRamone/FullStack2020"},"https://github.com/JRamone/FullStack2020")),r.a.createElement(ne.a,null,r.a.createElement(ae.a,{"justify-content":"left",container:!0},r.a.createElement(L.a,{color:"inherit",component:N.b,to:"/"},"home"),r.a.createElement(L.a,{color:"inherit",component:N.b,to:"/users"},"users"),r.a.createElement(L.a,{color:"inherit",component:N.b,to:"/blogs"},"blogs"),r.a.createElement(I,null)),r.a.createElement(ae.a,{"justify-content":"end"},r.a.createElement(le,null)))),r.a.createElement(B.c,null,r.a.createElement(B.a,{path:"/users"},r.a.createElement($,null)),r.a.createElement(B.a,{path:"/blogs"},r.a.createElement(Z,null),r.a.createElement(W,null)),r.a.createElement(B.a,{path:"/"},r.a.createElement(C,null)))),r.a.createElement(te.a,{style:{position:"fixed",top:0,width:"100%",marginTop:"98vh"}}))))},ce=n(33),ie=n(67),oe=Object(ce.c)({notification:g,blogs:J,user:T,users:Y}),se=Object(ce.d)(oe,Object(ce.a)(ie.a));u.a.render(r.a.createElement(c.a,{store:se},r.a.createElement(ue,null)),document.getElementById("root"))},76:function(e,t,n){e.exports=n(104)}},[[76,1,2]]]);
//# sourceMappingURL=main.2951d24c.chunk.js.map