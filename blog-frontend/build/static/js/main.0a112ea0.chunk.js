(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(33),c=t.n(o),u=(t(76),t(13)),i=t(8),l=t(2),s=t(3),b=t(11),m=t(68);function f(){var e=Object(l.a)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 1024px;\n  margin: 0 auto; /* \uc911\uc559 \uc815\ub82c */\n\n  /* \ube0c\ub77c\uc6b0\uc800 \ud06c\uae30\uc5d0 \ub530\ub77c \uac00\ub85c \uc0ac\uc774\uc988 \ubcc0\uacbd */\n  @media (max-width: 1024px) {\n    width: 768px;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return f=function(){return e},e}var d=s.b.div(f()),p=function(e){var n=e.children,t=Object(m.a)(e,["children"]);return a.a.createElement(d,t,n)},g={gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"]};function v(){var e=Object(l.a)(["\n  ","\n"]);return v=function(){return e},e}function O(){var e=Object(l.a)(["\n  ","\n"]);return O=function(){return e},e}function j(){var e=Object(l.a)(["\n        background: ",";\n        &:hover {\n          background: ",";\n        }\n      "]);return j=function(){return e},e}function E(){var e=Object(l.a)(["\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        width: 100%;\n        font-size: 1.125rem;\n      "]);return E=function(){return e},e}function h(){var e=Object(l.a)(["\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.25rem 1rem;\n  color: white;\n  outline: none;\n  cursor: pointer;\n\n  background: ",";\n  &:hover {\n    background: ",";\n  }\n\n  &:disabled {\n    background: ",";\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  ","\n\n  ","\n"]);return h=function(){return e},e}var y=Object(s.a)(h(),g.gray[8],g.gray[6],g.gray[3],g.gray[5],function(e){return e.fullWidth&&Object(s.a)(E())},function(e){return e.cyan&&Object(s.a)(j(),g.cyan[5],g.cyan[4])}),w=s.b.button(O(),y),x=Object(s.b)(b.b)(v(),y),k=function(e){return e.to?a.a.createElement(x,Object.assign({},e,{cyan:e.cyan?1:0})):a.a.createElement(w,e)};function S(){var e=Object(l.a)(["\n  font-weight: 800;\n  margin-right: 1rem;\n"]);return S=function(){return e},e}function C(){var e=Object(l.a)(["\n  height: 4rem;\n"]);return C=function(){return e},e}function I(){var e=Object(l.a)(["\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; /* \uc790\uc2dd \uc5d8\ub9ac\uba3c\ud2b8 \uc0ac\uc774\uc5d0 \uc5ec\ubc31\uc744 \ucd5c\ub300\ub85c \uc124\uc815 */\n  .logo {\n    font-size: 1.125rem;\n    font-weight: 800;\n    letter-spacing: 2px;\n  }\n  .right {\n    display: flex;\n    align-items: center;\n  }\n"]);return I=function(){return e},e}function T(){var e=Object(l.a)(["\n  position: fixed;\n  width: 100%;\n  background: white;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);\n"]);return T=function(){return e},e}var _,R,P=s.b.div(T()),L=Object(s.b)(p)(I()),A=s.b.div(C()),N=s.b.div(S()),D=function(e){var n=e.user,t=e.onLogout;return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null,a.a.createElement(L,null,a.a.createElement(b.b,{to:"/",className:"logo"},"REACTERS"),n?a.a.createElement("div",{className:"right"},a.a.createElement(N,null,n.username),a.a.createElement(k,{onClick:t},"\ub85c\uadf8\uc544\uc6c3")):a.a.createElement("div",{className:"right"},a.a.createElement(k,{to:"/login"},"\ub85c\uadf8\uc778")))),a.a.createElement(A,null))},F=t(5),z=t(9),G=t(10),M=t.n(G),H=t(14),U=t(111),B=t(110),W=t(12),q=t(59),J=t.n(q).a.create(),Z=function(){return J.post("/api/auth/logout")},Q=Object(U.a)("loading/START_LOADING",function(e){return e}),$=Object(U.a)("loading/FINISH_LOADING",function(e){return e}),K=Object(B.a)((_={},Object(F.a)(_,"loading/START_LOADING",function(e,n){return Object(z.a)({},e,Object(F.a)({},n.payload,!0))}),Object(F.a)(_,"loading/FINISH_LOADING",function(e,n){return Object(z.a)({},e,Object(F.a)({},n.payload,!1))}),_),{}),V=function(e){return[e,"".concat(e,"_SUCCESS"),"".concat(e,"_FAILURE")]};function X(e,n){var t="".concat(e,"_SUCCESS"),r="".concat(e,"_FAILURE");return M.a.mark(function a(o){var c;return M.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(W.c)(Q(e));case 2:return a.prev=2,a.next=5,Object(W.b)(n,o.payload);case 5:return c=a.sent,a.next=8,Object(W.c)({type:t,payload:c.data,meta:c});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(2),a.next=14,Object(W.c)({type:r,payload:a.t0,error:!0});case 14:return a.next=16,Object(W.c)($(e));case 16:case"end":return a.stop()}},a,null,[[2,10]])})}var Y=M.a.mark(be),ee=M.a.mark(me),ne=V("user/CHECK"),te=Object(H.a)(ne,3),re=te[0],ae=te[1],oe=te[2],ce="user/LOGOUT",ue=(Object(U.a)("user/TEMP_SET_USER",function(e){return e}),Object(U.a)(re)),ie=Object(U.a)(ce),le=X(re,function(){return J.get("/api/auth/check")});function se(){try{localStorage.removeItem("user")}catch(e){console.log("localStorage is not working")}}function be(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(W.b)(Z);case 3:localStorage.removeItem("user"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},Y,null,[[0,6]])}function me(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(re,le);case 2:return e.next=4,Object(W.d)(oe,se);case 4:return e.next=6,Object(W.d)(ce,be);case 6:case"end":return e.stop()}},ee)}var fe=Object(B.a)((R={},Object(F.a)(R,"user/TEMP_SET_USER",function(e,n){var t=n.payload;return Object(z.a)({},e,{user:t})}),Object(F.a)(R,ae,function(e,n){var t=n.payload;return Object(z.a)({},e,{user:t,checkError:null})}),Object(F.a)(R,oe,function(e,n){var t=n.payload;return Object(z.a)({},e,{user:null,checkError:t})}),Object(F.a)(R,ce,function(e){return Object(z.a)({},e,{user:null})}),R),{user:null,checkError:null}),de=function(){var e=Object(i.c)(function(e){return{user:e.user.user}}).user,n=Object(i.b)();return a.a.createElement(D,{user:e,onLogout:function(){n(ie())}})},pe=t(27),ge=t.n(pe);function ve(){var e=Object(l.a)(["\n      margin-top: 1rem;\n    "]);return ve=function(){return e},e}function Oe(){var e=Object(l.a)(["\n  ","\n  color: ",";\n\n  /* span \uc0ac\uc774\uc5d0 \uac00\uc6b4\ub383\uc810 \ubb38\uc790 \ubcf4\uc5ec\uc8fc\uae30*/\n  span + span:before {\n    color: ",";\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    content: '\\B7'; /* \uac00\uc6b4\ub383\uc810 \ubb38\uc790 */\n  }\n"],["\n  ","\n  color: ",";\n\n  /* span \uc0ac\uc774\uc5d0 \uac00\uc6b4\ub383\uc810 \ubb38\uc790 \ubcf4\uc5ec\uc8fc\uae30*/\n  span + span:before {\n    color: ",";\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n    content: '\\\\B7'; /* \uac00\uc6b4\ub383\uc810 \ubb38\uc790 */\n  }\n"]);return Oe=function(){return e},e}var je=s.b.div(Oe(),function(e){return e.hasMarginTop&&Object(s.a)(ve())},g.gray[6],g.gray[4]),Ee=function(e){var n=e.username,t=e.publishedDate,r=e.hasMarginTop;return a.a.createElement(je,{hasMarginTop:r},a.a.createElement("span",null,a.a.createElement("b",null,a.a.createElement(b.b,{to:"/@".concat(n)},n))),a.a.createElement("span",null,new Date(t).toLocaleDateString()))};function he(){var e=Object(l.a)(["\n  margin-top: 0.5rem;\n  .tag {\n    display: inline-block;\n    color: ",";\n    text-decoration: none;\n    margin-right: 0.5rem;\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return he=function(){return e},e}var ye=s.b.div(he(),g.cyan[7],g.cyan[6]),we=function(e){var n=e.tags;return a.a.createElement(ye,null,n.map(function(e){return a.a.createElement(b.b,{className:"tag",to:"/?tag=".concat(e),key:e},"#",e)}))};function xe(){var e=Object(l.a)(["\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  /* \ub9e8 \uc704 \ud3ec\uc2a4\ud2b8\ub294 padding-top \uc5c6\uc74c */\n  &:first-child {\n    padding-top: 0;\n  }\n  & + & {\n    border-top: 1px solid ",";\n  }\n\n  h2 {\n    font-size: 2rem;\n    margin-bottom: 0;\n    margin-top: 0;\n    &:hover {\n      color: ",";\n    }\n  }\n  p {\n    margin-top: 2rem;\n  }\n"]);return xe=function(){return e},e}function ke(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 3rem;\n"]);return ke=function(){return e},e}function Se(){var e=Object(l.a)(["\n  margin-top: 3rem;\n"]);return Se=function(){return e},e}var Ce,Ie=Object(s.b)(p)(Se()),Te=s.b.div(ke()),_e=s.b.div(xe(),g.gray[2],g.gray[6]),Re=function(e){var n=e.post,t=n.publishedDate,r=n.user,o=n.tags,c=n.title,u=n.body,i=n._id;return a.a.createElement(_e,null,a.a.createElement("h2",null,a.a.createElement(b.b,{to:"/@".concat(r.username,"/").concat(i)},c)),a.a.createElement(Ee,{username:r.username,publishedDate:new Date(t)}),a.a.createElement(we,{tags:o}),a.a.createElement("p",null,u))},Pe=function(e){var n=e.posts,t=e.loading,r=e.error,o=e.showWriteButton;return r?a.a.createElement(Ie,null,"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."):a.a.createElement(Ie,null,a.a.createElement(Te,null,o&&a.a.createElement(k,{cyan:!0,to:"/write"},"\uc0c8 \uae00 \uc791\uc131\ud558\uae30")),!t&&n&&a.a.createElement("div",null,n.map(function(e){return a.a.createElement(Re,{post:e,key:e._id})})))},Le=M.a.mark(He),Ae=V("posts/LIST_POSTS"),Ne=Object(H.a)(Ae,3),De=Ne[0],Fe=Ne[1],ze=Ne[2],Ge=Object(U.a)(De,function(e){return{tag:e.tag,username:e.username,page:e.page}}),Me=X(De,function(e){var n=e.page,t=e.username,r=e.tag,a=ge.a.stringify({page:n,username:t,tag:r});return J.get("/api/posts?".concat(a))});function He(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(De,Me);case 2:case"end":return e.stop()}},Le)}var Ue=Object(B.a)((Ce={},Object(F.a)(Ce,Fe,function(e,n){var t=n.payload,r=n.meta;return Object(z.a)({},e,{posts:t,lastPage:parseInt(r.headers["last-page"],10)})}),Object(F.a)(Ce,ze,function(e,n){var t=n.payload;return Object(z.a)({},e,{error:t})}),Ce),{posts:null,error:null,lastPage:1}),Be=Object(u.e)(function(e){var n=e.location,t=Object(i.b)(),o=Object(i.c)(function(e){var n=e.posts,t=e.loading,r=e.user;return{posts:n.posts,error:n.error,loading:t["posts/LIST_POSTS"],user:r.user}}),c=o.posts,u=o.error,l=o.loading,s=o.user;return Object(r.useEffect)(function(){var e=ge.a.parse(n.search,{ignoreQueryPrefix:!0}),r=e.tag,a=e.username,o=e.page;t(Ge({tag:r,username:a,page:o}))},[t,n.search]),a.a.createElement(Pe,{loading:l,error:u,posts:c,showWriteButton:s})});function We(){var e=Object(l.a)([""]);return We=function(){return e},e}function qe(){var e=Object(l.a)(["\n  width: 320px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 3rem;\n"]);return qe=function(){return e},e}var Je=s.b.div(qe()),Ze=s.b.div(We()),Qe=function(e){var n=e.username,t=e.tag,r=e.page,a=ge.a.stringify({tag:t,page:r});return n?"/@".concat(n,"?").concat(a):"/?".concat(a)},$e=function(e){var n=e.page,t=e.lastPage,r=e.username,o=e.tag;return a.a.createElement(Je,null,a.a.createElement(k,{disabled:1===n,to:1===n?void 0:Qe({username:r,tag:o,page:n-1})},"\uc774\uc804"),a.a.createElement(Ze,null,n),a.a.createElement(k,{disabled:n===t,to:n===t?void 0:Qe({username:r,tag:o,page:n+1})},"\ub2e4\uc74c"))},Ke=Object(u.e)(function(e){var n=e.location,t=Object(i.c)(function(e){var n=e.posts,t=e.loading;return{lastPage:n.lastPage,posts:n.posts,loading:t["posts/LIST_POSTS"]}}),r=t.lastPage,o=t.posts,c=t.loading;if(!o||c)return null;var u=ge.a.parse(n.search,{ignoreQueryPrefix:!0}),l=u.tag,s=u.username,b=u.page,m=void 0===b?1:b;return a.a.createElement($e,{tag:l,username:s,page:parseInt(m,10),lastPage:r})}),Ve=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(de,null),a.a.createElement(Be,null),a.a.createElement(Ke,null))};function Xe(){var e=Object(l.a)(["\n  .logo-area {\n    display: block;\n    padding-bottom: 2rem;\n    text-align: center;\n    font-weight: bold;\n    letter-spacing: 2px;\n  }\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);\n  padding: 2rem;\n  width: 360px;\n  background: white;\n  border-radius: 2px;\n"]);return Xe=function(){return e},e}function Ye(){var e=Object(l.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background: ",";\n  /* flex\ub85c \ub0b4\ubd80 \ub0b4\uc6a9 \uc911\uc559 \uc815\ub82c */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Ye=function(){return e},e}var en,nn=s.b.div(Ye(),g.gray[2]),tn=s.b.div(Xe()),rn=function(e){var n=e.children;return a.a.createElement(nn,null,a.a.createElement(tn,null,a.a.createElement("div",{className:"logo-area"},a.a.createElement(b.b,{to:"/"},"REACTERS")),n))},an=t(60),on=M.a.mark(wn),cn=V("auth/REGISTER"),un=Object(H.a)(cn,3),ln=un[0],sn=un[1],bn=un[2],mn=V("auth/LOGIN"),fn=Object(H.a)(mn,3),dn=fn[0],pn=fn[1],gn=fn[2],vn=Object(U.a)("auth/CHANGE_FIELD",function(e){return{form:e.form,key:e.key,value:e.value}}),On=Object(U.a)("auth/INITIALIZE_FORM",function(e){return e}),jn=Object(U.a)(ln,function(e){return{username:e.username,password:e.password}}),En=Object(U.a)(dn,function(e){return{username:e.username,password:e.password}}),hn=X(ln,function(e){var n=e.username,t=e.password;return J.post("/api/auth/register",{username:n,password:t})}),yn=X(dn,function(e){var n=e.username,t=e.password;return J.post("/api/auth/login",{username:n,password:t})});function wn(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(ln,hn);case 2:return e.next=4,Object(W.d)(dn,yn);case 4:case"end":return e.stop()}},on)}var xn={register:{username:"",password:"",passwordConfirm:""},login:{username:"",password:""},auth:null,authError:null},kn=Object(B.a)((en={},Object(F.a)(en,"auth/CHANGE_FIELD",function(e,n){var t=n.payload,r=t.form,a=t.key,o=t.value;return Object(an.a)(e,function(e){e[r][a]=o})}),Object(F.a)(en,"auth/INITIALIZE_FORM",function(e,n){var t,r=n.payload;return Object(z.a)({},e,(t={},Object(F.a)(t,r,xn[r]),Object(F.a)(t,"authError",null),t))}),Object(F.a)(en,sn,function(e,n){var t=n.payload;return Object(z.a)({},e,{authError:null,auth:t})}),Object(F.a)(en,bn,function(e,n){var t=n.payload;return Object(z.a)({},e,{authError:t})}),Object(F.a)(en,pn,function(e,n){var t=n.payload;return Object(z.a)({},e,{authError:null,auth:t})}),Object(F.a)(en,gn,function(e,n){var t=n.payload;return Object(z.a)({},e,{authError:t})}),en),xn);function Sn(){var e=Object(l.a)(["\n  color: red;\n  text-align: center;\n  font-size: 0.875rem;\n  margin-top: 1rem;\n"]);return Sn=function(){return e},e}function Cn(){var e=Object(l.a)(["\n  margin-top: 1rem;\n"]);return Cn=function(){return e},e}function In(){var e=Object(l.a)(["\n  margin-top: 2rem;\n  text-align: right;\n  a {\n    color: ",";\n    text-decoration: underline;\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return In=function(){return e},e}function Tn(){var e=Object(l.a)(["\n  font-size: 1rem;\n  border: none;\n  border-bottom: 1px solid ",";\n  padding-bottom: 0.5rem;\n  outline: none;\n  width: 100%;\n  &:focus {\n    color: $oc-teal-7;\n    border-bottom: 1px solid ",";\n  }\n  & + & {\n    margin-top: 1rem;\n  }\n"]);return Tn=function(){return e},e}function _n(){var e=Object(l.a)(["\n  h3 {\n    margin: 0;\n    color: ",";\n    margin-bottom: 1rem;\n  }\n"]);return _n=function(){return e},e}var Rn=s.b.div(_n(),g.gray[8]),Pn=s.b.input(Tn(),g.gray[5],g.gray[7]),Ln=s.b.div(In(),g.gray[6],g.gray[9]),An=Object(s.b)(k)(Cn()),Nn={login:"\ub85c\uadf8\uc778",register:"\ud68c\uc6d0\uac00\uc785"},Dn=s.b.div(Sn()),Fn=function(e){var n=e.type,t=e.form,r=e.onChange,o=e.onSubmit,c=e.error,u=Nn[n];return a.a.createElement(Rn,null,a.a.createElement("h3",null,u),a.a.createElement("form",{onSubmit:o},a.a.createElement(Pn,{autoComplete:"username",name:"username",placeholder:"\uc544\uc774\ub514",onChange:r,value:t.username}),a.a.createElement(Pn,{autoComplete:"new-password",name:"password",placeholder:"\ube44\ubc00\ubc88\ud638",type:"password",onChange:r,value:t.password}),"register"===n&&a.a.createElement(Pn,{autoComplete:"new-password",name:"passwordConfirm",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",type:"password",onChange:r,value:t.passwordConfirm}),c&&a.a.createElement(Dn,null,c),a.a.createElement(An,{cyan:!0,fullWidth:!0,style:{marginTop:"1rem"}},u)),a.a.createElement(Ln,null,"login"===n?a.a.createElement(b.b,{to:"/register"},"\ud68c\uc6d0\uac00\uc785"):a.a.createElement(b.b,{to:"/login"},"\ub85c\uadf8\uc778")))},zn=Object(u.e)(function(e){var n=e.history,t=Object(r.useState)(null),o=Object(H.a)(t,2),c=o[0],u=o[1],l=Object(i.b)(),s=Object(i.c)(function(e){var n=e.auth,t=e.user;return{form:n.login,auth:n.auth,authError:n.authError,user:t.user}}),b=s.form,m=s.auth,f=s.authError,d=s.user;return Object(r.useEffect)(function(){l(On("login"))},[l]),Object(r.useEffect)(function(){if(f)return console.log("\uc624\ub958 \ubc1c\uc0dd"),console.log(f),void u("\ub85c\uadf8\uc778 \uc2e4\ud328");m&&(console.log("\ub85c\uadf8\uc778 \uc131\uacf5"),l(ue()))},[m,f,l]),Object(r.useEffect)(function(){if(d){n.push("/");try{localStorage.setItem("user",JSON.stringify(d))}catch(e){console.log("localStorage is not working")}}},[n,d]),a.a.createElement(Fn,{type:"login",form:b,onChange:function(e){var n=e.target,t=n.value,r=n.name;l(vn({form:"login",key:r,value:t}))},onSubmit:function(e){e.preventDefault();var n=b.username,t=b.password;l(En({username:n,password:t}))},error:c})}),Gn=function(){return a.a.createElement(rn,null,a.a.createElement(zn,null))},Mn=Object(u.e)(function(e){var n=e.history,t=Object(r.useState)(null),o=Object(H.a)(t,2),c=o[0],u=o[1],l=Object(i.b)(),s=Object(i.c)(function(e){var n=e.auth,t=e.user;return{form:n.register,auth:n.auth,authError:n.authError,user:t.user}}),b=s.form,m=s.auth,f=s.authError,d=s.user;return Object(r.useEffect)(function(){l(On("register"))},[l]),Object(r.useEffect)(function(){if(f)return 409===f.response.status?void u("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uacc4\uc815\uba85\uc785\ub2c8\ub2e4."):void u("\ud68c\uc6d0\uac00\uc785 \uc2e4\ud328");m&&(console.log("\ud68c\uc6d0\uac00\uc785 \uc131\uacf5"),console.log(m),l(ue()))},[m,f,l]),Object(r.useEffect)(function(){if(d){n.push("/");try{localStorage.setItem("user",JSON.stringify(d))}catch(e){console.log("localStorage is not working")}}},[n,d]),a.a.createElement(Fn,{type:"register",form:b,onChange:function(e){var n=e.target,t=n.value,r=n.name;l(vn({form:"register",key:r,value:t}))},onSubmit:function(e){e.preventDefault();var n=b.username,t=b.password,r=b.passwordConfirm;if(![n,t,r].includes(""))return t!==r?(u("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),vn({form:"register",key:"password",value:""}),void vn({form:"register",key:"passwordConfirm",value:""})):void l(jn({username:n,password:t}));u("\ube48 \uce78\uc744 \ubaa8\ub450 \uc785\ub825\ud558\uc138\uc694.")},error:c})}),Hn=function(){return a.a.createElement(rn,null,a.a.createElement(Mn,null))},Un=t(61),Bn=t.n(Un);t(105);function Wn(){var e=Object(l.a)(["\n  /* \ucd5c\uc18c \ud06c\uae30 \uc9c0\uc815 \ubc0f padding \uc81c\uac70 */\n  .ql-editor {\n    padding: 0;\n    min-height: 320px;\n    font-size: 1.125rem;\n    line-height: 1.5;\n  }\n  .ql-editor.ql-blank::before {\n    left: 0px;\n  }\n"]);return Wn=function(){return e},e}function qn(){var e=Object(l.a)(["\n  font-size: 3rem;\n  outline: none;\n  padding-bottom: 0.5rem;\n  border: none;\n  border-bottom: 1px solid ",";\n  margin-bottom: 2rem;\n  width: 100%;\n"]);return qn=function(){return e},e}function Jn(){var e=Object(l.a)(["\n  /* \ud398\uc774\uc9c0 \uc704 \uc544\ub798 \uc5ec\ubc31 \uc9c0\uc815 */\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n"]);return Jn=function(){return e},e}var Zn,Qn=Object(s.b)(p)(Jn()),$n=s.b.input(qn(),g.gray[4]),Kn=s.b.div(Wn()),Vn=function(e){var n=e.title,t=e.body,o=e.onChangeField,c=Object(r.useRef)(null),u=Object(r.useRef)(null);Object(r.useEffect)(function(){u.current=new Bn.a(c.current,{theme:"bubble",placeholder:"\ub0b4\uc6a9\uc744 \uc791\uc131\ud558\uc138\uc694...",modules:{toolbar:[[{header:"1"},{header:"2"}],["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],["blockquote","code-block","link","image"]]}});var e=u.current;e.on("text-change",function(n,t,r){"user"===r&&o({key:"body",value:e.root.innerHTML})})},[o]);var i=Object(r.useRef)(!1);Object(r.useEffect)(function(){i.current||(i.current=!0,u.current.root.innerHTML=t)},[t]);return a.a.createElement(Qn,null,a.a.createElement($n,{placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694",onChange:function(e){o({key:"title",value:e.target.value})},value:n}),a.a.createElement(Kn,null,a.a.createElement("div",{ref:c})))},Xn=M.a.mark(gt),Yn=V("write/WRITE_POST"),et=Object(H.a)(Yn,3),nt=et[0],tt=et[1],rt=et[2],at=V("write/UPDATE_POST"),ot=Object(H.a)(at,3),ct=ot[0],ut=ot[1],it=ot[2],lt=Object(U.a)("write/INITIALIZE"),st=Object(U.a)("write/CHANGE_FIELD",function(e){return{key:e.key,value:e.value}}),bt=Object(U.a)(nt,function(e){return{title:e.title,body:e.body,tags:e.tags}}),mt=Object(U.a)("write/SET_ORIGINAL_POST",function(e){return e}),ft=Object(U.a)(ct,function(e){return{id:e.id,title:e.title,body:e.body,tags:e.tags}}),dt=X(nt,function(e){var n=e.title,t=e.body,r=e.tags;return J.post("/api/posts",{title:n,body:t,tags:r})}),pt=X(ct,function(e){var n=e.id,t=e.title,r=e.body,a=e.tags;return J.patch("/api/posts/".concat(n),{title:t,body:r,tags:a})});function gt(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(nt,dt);case 2:return e.next=4,Object(W.d)(ct,pt);case 4:case"end":return e.stop()}},Xn)}var vt={title:"",body:"",tags:[],post:null,postError:null,originalPostId:null},Ot=Object(B.a)((Zn={},Object(F.a)(Zn,"write/INITIALIZE",function(e){return vt}),Object(F.a)(Zn,"write/CHANGE_FIELD",function(e,n){var t=n.payload,r=t.key,a=t.value;return Object(z.a)({},e,Object(F.a)({},r,a))}),Object(F.a)(Zn,nt,function(e){return Object(z.a)({},e,{post:null,postError:null})}),Object(F.a)(Zn,tt,function(e,n){var t=n.payload;return Object(z.a)({},e,{post:t})}),Object(F.a)(Zn,rt,function(e,n){var t=n.payload;return Object(z.a)({},e,{postError:t})}),Object(F.a)(Zn,"write/SET_ORIGINAL_POST",function(e,n){var t=n.payload;return Object(z.a)({},e,{title:t.title,body:t.body,tags:t.tags,originalPostId:t._id})}),Object(F.a)(Zn,ut,function(e,n){var t=n.payload;return Object(z.a)({},e,{post:t})}),Object(F.a)(Zn,it,function(e,n){var t=n.payload;return Object(z.a)({},e,{postError:t})}),Zn),vt),jt=function(){var e=Object(i.b)(),n=Object(i.c)(function(e){var n=e.write;return{title:n.title,body:n.body}}),t=n.title,o=n.body,c=Object(r.useCallback)(function(n){return e(st(n))},[e]);return Object(r.useEffect)(function(){return function(){e(lt())}},[e]),a.a.createElement(Vn,{onChangeField:c,title:t,body:o})},Et=t(66);function ht(){var e=Object(l.a)(["\n  display: flex;\n  margin-top: 0.5rem;\n"]);return ht=function(){return e},e}function yt(){var e=Object(l.a)(["\n  margin-right: 0.5rem;\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    opacity: 0.5;\n  }\n"]);return yt=function(){return e},e}function wt(){var e=Object(l.a)(["\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  width: 256px;\n  border: 1px solid ","; /* \uc2a4\ud0c0\uc77c \ucd08\uae30\ud654 */\n  input,\n  button {\n    outline: none;\n    border: none;\n    font-size: 1rem;\n  }\n\n  input {\n    padding: 0.5rem;\n    flex: 1;\n  }\n  button {\n    cursor: pointer;\n    padding-right: 1rem;\n    padding-left: 1rem;\n    border: none;\n    background: ",";\n    color: white;\n    font-weight: bold;\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return wt=function(){return e},e}function xt(){var e=Object(l.a)(["\n  width: 100%;\n  border-top: 1px solid ",";\n  padding-top: 2rem;\n\n  h4 {\n    color: ","\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n  }\n"]);return xt=function(){return e},e}var kt=s.b.div(xt(),g.gray[2],g.gray[8]),St=s.b.form(wt(),g.gray[9],g.gray[8],g.gray[6]),Ct=s.b.div(yt(),g.gray[6]),It=s.b.div(ht()),Tt=a.a.memo(function(e){var n=e.tag,t=e.onRemove;e.onChangeTags;return a.a.createElement(Ct,{onClick:function(){return t(n)}},"#",n)}),_t=a.a.memo(function(e){var n=e.tags,t=e.onRemove;return a.a.createElement(It,null,n&&n.map(function(e){return a.a.createElement(Tt,{key:e,tag:e,onRemove:t})}))}),Rt=function(e){var n=e.tags,t=e.onChangeTags,o=Object(r.useState)(""),c=Object(H.a)(o,2),u=c[0],i=c[1],l=Object(r.useState)([]),s=Object(H.a)(l,2),b=s[0],m=s[1],f=Object(r.useCallback)(function(e){if(e&&!b.includes(e)){var n=[].concat(Object(Et.a)(b),[e]);m(n),t(n)}},[b,t]),d=Object(r.useCallback)(function(e){var n=b.filter(function(n){return n!==e});m(n),t(n)},[b,t]),p=Object(r.useCallback)(function(e){i(e.target.value)},[]),g=Object(r.useCallback)(function(e){e.preventDefault(),f(u.trim()),i("")},[u,f]);return Object(r.useEffect)(function(){m(n)},[n]),a.a.createElement(kt,null,a.a.createElement("h4",null,"\ud0dc\uadf8"),a.a.createElement(St,{onSubmit:g},a.a.createElement("input",{placeholder:"\ud0dc\uadf8\ub97c \uc785\ub825\ud558\uc138\uc694",value:u,onChange:p}),a.a.createElement("button",{type:"submit"},"\ucd94\uac00")),a.a.createElement(_t,{tags:b,onRemove:d}))},Pt=function(){var e=Object(i.b)(),n=Object(i.c)(function(e){return e.write.tags});return a.a.createElement(Rt,{onChangeTags:function(n){e(st({key:"tags",value:n}))},tags:n})};function Lt(){var e=Object(l.a)(["\n  height: 2.125rem;\n  & + & {\n    margin-left: 0.5rem;\n  }\n"]);return Lt=function(){return e},e}function At(){var e=Object(l.a)(["\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n  button + button {\n    margin-left: 0.5rem;\n  }\n"]);return At=function(){return e},e}var Nt,Dt=s.b.div(At()),Ft=Object(s.b)(k)(Lt()),zt=function(e){var n=e.onCancel,t=e.onPublish,r=e.isEdit;return a.a.createElement(Dt,null,a.a.createElement(Ft,{cyan:!0,onClick:t},"\ud3ec\uc2a4\ud2b8 ",r?"\uc218\uc815":"\ub4f1\ub85d"),a.a.createElement(Ft,{onClick:n},"\ucde8\uc18c"))},Gt=Object(u.e)(function(e){var n=e.history,t=Object(i.b)(),o=Object(i.c)(function(e){var n=e.write;return{title:n.title,body:n.body,tags:n.tags,post:n.post,postError:n.postError,originalPostId:n.originalPostId}}),c=o.title,u=o.body,l=o.tags,s=o.post,b=o.postError,m=o.originalPostId;return Object(r.useEffect)(function(){if(s){var e=s._id,t=s.user;n.push("/@".concat(t.username,"/").concat(e))}b&&console.log(b)},[n,s,b]),a.a.createElement(zt,{onPublish:function(){t(m?ft({title:c,body:u,tags:l,id:m}):bt({title:c,body:u,tags:l}))},onCancel:function(){n.goBack()},isEdit:!!m})}),Mt=t(28),Ht=function(){return a.a.createElement(p,null,a.a.createElement(Mt.a,null,a.a.createElement("title",null,"\uae00 \uc791\uc131\ud558\uae30 - REACTERS")),a.a.createElement(jt,null),a.a.createElement(Pt,null),a.a.createElement(Gt,null))},Ut=t(64),Bt=M.a.mark(Xt),Wt=V("post/READ_POST"),qt=Object(H.a)(Wt,3),Jt=qt[0],Zt=qt[1],Qt=qt[2],$t=Object(U.a)(Jt,function(e){return e}),Kt=Object(U.a)("post/UNLOAD_POST"),Vt=X(Jt,function(e){return J.get("/api/posts/".concat(e))});function Xt(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(Jt,Vt);case 2:case"end":return e.stop()}},Bt)}var Yt={post:null,error:null},er=Object(B.a)((Nt={},Object(F.a)(Nt,Zt,function(e,n){var t=n.payload;return Object(z.a)({},e,{post:t})}),Object(F.a)(Nt,Qt,function(e,n){var t=n.payload;return Object(z.a)({},e,{error:t})}),Object(F.a)(Nt,"post/UNLOAD_POST",function(){return Yt}),Nt),Yt);function nr(){var e=Object(l.a)(["\n  font-size: 1.3125rem;\n  color: ",";\n"]);return nr=function(){return e},e}function tr(){var e=Object(l.a)(["\n  border-bottom: 1px solid ",";\n  padding-bottom: 3rem;\n  margin-bottom: 3rem;\n  h1 {\n    font-size: 3rem;\n    line-height: 1.5;\n    margin: 0;\n  }\n"]);return tr=function(){return e},e}function rr(){var e=Object(l.a)(["\n  margin-top: 4rem;\n"]);return rr=function(){return e},e}var ar=Object(s.b)(p)(rr()),or=s.b.div(tr(),g.gray[2]),cr=s.b.div(nr(),g.gray[8]),ur=function(e){var n=e.post,t=e.error,r=e.loading,o=e.actionButtons;if(t)return t.response&&404===t.response.status?a.a.createElement(ar,null,"\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ud3ec\uc2a4\ud2b8\uc785\ub2c8\ub2e4."):a.a.createElement(ar,null,"\uc624\ub958 \ubc1c\uc0dd!");if(r||!n)return null;var c=n.title,u=n.body,i=n.user,l=n.publishedDate,s=n.tags;return a.a.createElement(ar,null,a.a.createElement(Mt.a,null,a.a.createElement("title",null,c," - REACTERS")),a.a.createElement(or,null,a.a.createElement("h1",null,c),a.a.createElement(Ee,{username:i.username,publishedDate:l,hasMarginTop:!0}),a.a.createElement(we,{tags:s})),o,a.a.createElement(cr,{dangerouslySetInnerHTML:{__html:u}}))};function ir(){var e=Object(l.a)(["\n  height: 2rem;\n  & + & {\n    margin-left: 0.75rem;\n  }\n"]);return ir=function(){return e},e}function lr(){var e=Object(l.a)(["\n  width: 320px;\n  background: white;\n  padding: 1.5rem;\n  border-radius: 4px;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);\n  h2 {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n  p {\n    margin-bottom: 3rem;\n  }\n  .buttons {\n    display: flex;\n    justify-content: flex-end;\n  }\n"]);return lr=function(){return e},e}function sr(){var e=Object(l.a)(["\n  position: fixed;\n  z-index: 30;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.25);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return sr=function(){return e},e}var br=s.b.div(sr()),mr=s.b.div(lr()),fr=Object(s.b)(k)(ir()),dr=function(e){var n=e.visible,t=e.title,r=e.description,o=e.confirmText,c=void 0===o?"\ud655\uc778":o,u=e.cancelText,i=void 0===u?"\ucde8\uc18c":u,l=e.onConfirm,s=e.onCancel;return n?a.a.createElement(br,null,a.a.createElement(mr,null,a.a.createElement("h2",null,t),a.a.createElement("p",null,r),a.a.createElement("div",{className:"buttons"},a.a.createElement(fr,{onClick:s},i),a.a.createElement(fr,{cyan:!0,onClick:l},c)))):null},pr=function(e){var n=e.visible,t=e.onConfirm,r=e.onCancel;return a.a.createElement(dr,{visible:n,title:"\ud3ec\uc2a4\ud2b8 \uc0ad\uc81c",description:"\ud3ec\uc2a4\ud2b8\ub97c \uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",confirmText:"\uc0ad\uc81c",onConfirm:t,onCancel:r})};function gr(){var e=Object(l.a)(["\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  color: ",";\n  font-weight: bold;\n  border: none;\n  outline: none;\n  font-size: 0.875rem;\n  cursor: pointer;\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n  & + & {\n    margin-left: 0.25rem;\n  }\n"]);return gr=function(){return e},e}function vr(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 2rem;\n  margin-top: -1.5rem;\n"]);return vr=function(){return e},e}var Or=s.b.div(vr()),jr=s.b.button(gr(),g.gray[6],g.gray[1],g.cyan[7]),Er=function(e){var n=e.onEdit,t=e.onRemove,o=Object(r.useState)(!1),c=Object(H.a)(o,2),u=c[0],i=c[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(Or,null,a.a.createElement(jr,{onClick:n},"\uc218\uc815"),a.a.createElement(jr,{onClick:function(){i(!0)}},"\uc0ad\uc81c")),a.a.createElement(pr,{visible:u,onConfirm:function(){i(!1),t()},onCancel:function(){i(!1)}}))},hr=Object(u.e)(function(e){var n=e.match,t=e.history,o=n.params.postId,c=Object(i.b)(),u=Object(i.c)(function(e){var n=e.post,t=e.loading,r=e.user;return{post:n.post,error:n.error,loading:t["post/READ_POST"],user:r.user}}),l=u.post,s=u.error,b=u.loading,m=u.user;Object(r.useEffect)(function(){return c($t(o)),function(){c(Kt())}},[c,o]);var f=function(){var e=Object(Ut.a)(M.a.mark(function e(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n=o,J.delete("/api/posts/".concat(n));case 3:t.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}var n},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}();return a.a.createElement(ur,{post:l,loading:b,error:s,actionButtons:a.a.createElement(Er,{onEdit:function(){c(mt(l)),t.push("/write")},onRemove:f}),ownPost:m&&m.id===l&&l.id})}),yr=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(de,null),a.a.createElement(hr,null))},wr=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Mt.a,null,a.a.createElement("title",null,"REACTERS")),a.a.createElement(u.a,{component:Ve,path:["/@:username","/"],exact:!0}),a.a.createElement(u.a,{component:Gn,path:"/login"}),a.a.createElement(u.a,{component:Hn,path:"/register"}),a.a.createElement(u.a,{component:Ht,path:"/write"}),a.a.createElement(u.a,{component:yr,path:"/@:username/:postId"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xr=t(22),kr=t(65),Sr=t(67),Cr=M.a.mark(Ir);function Ir(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.a)([wn(),me(),gt(),Xt(),He()]);case 2:case"end":return e.stop()}},Cr)}var Tr=Object(xr.combineReducers)({auth:kn,loading:K,user:fe,write:Ot,post:er,posts:Ue}),_r=Object(Sr.a)(),Rr=Object(xr.createStore)(Tr,Object(kr.composeWithDevTools)(Object(xr.applyMiddleware)(_r)));_r.run(Ir),c.a.render(a.a.createElement(i.a,{store:Rr},a.a.createElement(b.a,null,a.a.createElement(Mt.b,null,a.a.createElement(wr,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,n,t){e.exports=t(109)},76:function(e,n,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.0a112ea0.chunk.js.map