(this.webpackJsonprecipesx=this.webpackJsonprecipesx||[]).push([[0],{10:function(e,t,a){e.exports={wrap:"Ingredients_wrap__1yIjA",title:"Ingredients_title__2a0We",table:"Ingredients_table__26189",quantity:"Ingredients_quantity__2vD4_",value:"Ingredients_value__1j7OH"}},11:function(e,t,a){e.exports={image:"RecipeView_image__3blqD",title:"RecipeView_title__2_p5f",tags:"RecipeView_tags__1iG9a",contentWrap:"RecipeView_contentWrap__3KVRm"}},12:function(e,t,a){e.exports={wrap:"ListItem_wrap__1nudd",image:"ListItem_image__3DErl",data:"ListItem_data__3cw49",title:"ListItem_title__11C99"}},16:function(e,t,a){e.exports={wrap:"SlideIn_wrap__1PUfU",active:"SlideIn_active__3yx6B",back:"SlideIn_back__1Rcr4"}},196:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n,r=a(9),c=a(0),i=a.n(c),o=a(26),l=a.n(o),u=a(3),s=a(67),m=a.n(s),p=function(e){return"https://recipes-ccae2.firebaseio.com/".concat(e,".json?auth=KdZC0TV3sNDv7pkNLfyYyT6um8bjFm84GUYqcxPl")};!function(e){e.DATA="data"}(n||(n={}));var d,v=function(e){return"".concat("recipes_").concat(e)},f=function(e){var t=localStorage.getItem(v(e));return t?JSON.parse(t):null},_=function(e,t){return localStorage.setItem(v(e),JSON.stringify(t))},g=a(68),E=a.n(g),b={isLoading:!1,isError:!1,data:f(n.DATA)||[]},y=Object(r.b)({name:"data",initialState:b,reducers:{dataRequest:function(e){e.isLoading=!0,e.isError=!1},dataSuccess:function(e,t){var a=E()(t.payload.data,["title"]);e.isLoading=!1,e.isError=!1,e.data=a,_(n.DATA,a)},dataError:function(e){e.isLoading=!1,e.isError=!0}}}),w=y.actions,h=(w.dataRequest,w.dataSuccess),I=(w.dataError,y.reducer),N=null,k=Object(r.b)({name:"slideIn",initialState:{isActive:!1},reducers:{activate:{reducer:function(e){e.isActive=!0},prepare:function(e){return function(e){N=e}(e),{payload:null}}},deactivate:function(e){e.isActive=!1}}}),j=k.actions,O=j.activate,A=j.deactivate,x=k.reducer,S=function(e){return e.replace("imgur.com","i.imgur.com")+"s.jpg"},R=a(7),T=a.n(R),C=a(69),L=a.n(C),P=function(e){var t=e.url,a=e.klass,n=T()(L.a.wrap,a);return i.a.createElement("div",{className:n,style:{backgroundImage:"url(".concat(t,")")}})};!function(e){e.INGREDIENTS="ingredients",e.PARAGRAPH="paragraph",e.YOUTUBE="youtube",e.LINK="link"}(d||(d={}));var U=a(39),q=a.n(U),D=function(e){var t=e.tags,a=void 0===t?[]:t,n=e.keyPrefix,r=e.klass;if(!a.length)return null;var c=T()(q.a.wrap,r);return i.a.createElement("div",{className:c},a.map((function(e,t){return i.a.createElement("span",{className:q.a.tag,key:"tag-".concat(n,"-").concat(t)},e)})))},Y=a(10),V=a.n(Y),W=function(e){var t=e.recipeContent,a=t.title,n=function(e){var t=[];return e?(e.split("\n").forEach((function(e){if(e=e.trim()){var a=e.split(":");if(1===a.length)t.push({quantity:null,value:a[0]});else{var n=a[0].trim();a.shift();var r=a.join(":").trim();t.push({quantity:n,value:r})}}})),t):t}(t.content);return i.a.createElement("div",{className:V.a.wrap},i.a.createElement("div",{className:V.a.title},a||"Sastojci"),i.a.createElement("table",{className:V.a.table},i.a.createElement("tbody",null,n.map((function(e,a){return i.a.createElement("tr",{key:"".concat(t.id,"-ingredient-").concat(a)},i.a.createElement("td",{className:V.a.quantity},e.quantity),i.a.createElement("td",{className:V.a.value},e.value))})))))},B=a(27),G=a.n(B),H=function(e){var t=e.recipeContent,a=t.title,n=function(e){var t=[];return e?(e.split("\n").forEach((function(e){(e=e.trim())&&t.push(e)})),t):t}(t.content);return i.a.createElement("div",{className:G.a.wrap},i.a.createElement("div",{className:G.a.title},a||"Priprema"),n.map((function(e,a){return i.a.createElement("p",{key:"".concat(t.id,"-paragraph-").concat(a),className:G.a.p},e)})))},J=a(11),F=a.n(J),K=a(71),M=a(8),Z=a.n(M),$=function(e){return"https://www.youtube.com/embed/".concat(e,"?autoplay=1")},z=function(e){return"https://i1.ytimg.com/vi/".concat(e,"/0.jpg")},Q=function(e){return e.slideIn.isActive},X=function(e){var t=e.recipeContent,a=Object(u.c)(Q),n=Object(c.useState)(!1),r=Object(K.a)(n,2),o=r[0],l=r[1];Object(c.useEffect)((function(){a||l(!1)}),[a]);var s=t.content;if(!s)return null;var m=function(e){var t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?t[2]:null}(s);if(!m)return null;var p=function(){return l(!0)};return i.a.createElement("div",{className:Z.a.wrap},i.a.createElement("div",{className:Z.a.videoContainer},o?i.a.createElement("iframe",{src:$(m),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",allowFullScreen:!0,title:"youtube iframe"}):i.a.createElement("div",{className:Z.a.cover,onClick:p},i.a.createElement(P,{url:z(m),klass:Z.a.coverImage}),i.a.createElement("div",{className:Z.a.coverOverlay},i.a.createElement("div",{className:Z.a.playIcon})))))},ee=function(e){var t,a=e.recipe;return i.a.createElement("div",{className:F.a.wrap},i.a.createElement(P,{klass:F.a.image,url:(t=a.imageUrl,t.replace("imgur.com","i.imgur.com")+".jpg")}),i.a.createElement("div",{className:F.a.title},a.title),i.a.createElement(D,{keyPrefix:"recipe",tags:a.tags,klass:F.a.tags}),i.a.createElement("div",{className:F.a.contentWrap},a.content.map((function(e){return function(e){switch(e.type){case d.INGREDIENTS:return i.a.createElement(W,{recipeContent:e,key:e.id});case d.YOUTUBE:return i.a.createElement(X,{recipeContent:e,key:e.id});case d.PARAGRAPH:return i.a.createElement(H,{recipeContent:e,key:e.id});default:return null}}(e)}))))},te=a(12),ae=a.n(te),ne=function(e){var t=e.recipe,a=t.title,n=t.imageUrl,r=t.tags,c=void 0===r?[]:r,o=Object(u.b)();return i.a.createElement("div",{className:ae.a.wrap,onClick:function(){return o(O(i.a.createElement(ee,{recipe:t})))}},i.a.createElement(P,{klass:ae.a.image,url:S(n)}),i.a.createElement("div",{className:ae.a.data},i.a.createElement("div",{className:ae.a.title},a),i.a.createElement(D,{tags:c,keyPrefix:"listItem",klass:ae.a.tags})))},re=function(){document.addEventListener("backbutton",ce,!1)},ce=function(e){oe!==ie?(e.preventDefault(),oe(),oe=ie):navigator.app.exitApp()},ie=function(){},oe=ie,le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;oe=e},ue=function(e){return e.slideIn.isActive},se=a(16),me=a.n(se),pe=function(){var e=function(){var e=Object(u.b)();return{isActive:Object(u.c)(ue),component:N,deactivate:Object(c.useCallback)((function(){return e(A())}),[e])}}(),t=e.isActive,a=e.component,n=e.deactivate,r=Object(c.useRef)(null),o=function(){n(),le()};Object(c.useEffect)((function(){r&&r.current&&r.current.scrollTo(0,0),le(o)}),[a]);var l=T()(me.a.wrap,t&&me.a.active),s=T()(me.a.back,t&&me.a.active);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:l,ref:r},a),i.a.createElement("div",{className:s,onClick:o}))},de=a(70),ve=a.n(de),fe=function(e){return e.data.data},_e=function(){var e=Object(u.c)(fe),t=Object(u.b)();return Object(c.useEffect)((function(){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return m.a.get(p(e))})("recipes").then((function(e){var a=e.data;console.log(a),t(h({data:Object.values(a)}))})).catch((function(e){return console.log(e)}))}),[]),i.a.createElement("div",{className:ve.a.app},i.a.createElement("header",null),i.a.createElement("section",null,e.map((function(e,t){return i.a.createElement(ne,{key:"list-".concat(e.id),recipe:e})}))),i.a.createElement(pe,null))},ge=(a(196),a(2)),Ee=Object(ge.c)({slideIn:x,data:I});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.addEventListener("deviceready",re,!1);var be=Object(r.a)({reducer:Ee});l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u.a,{store:be},i.a.createElement(_e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,t,a){e.exports={wrap:"Paragraph_wrap__N3xmS",title:"Paragraph_title__1vwUR",p:"Paragraph_p__r8mOW"}},39:function(e,t,a){e.exports={tag:"TagList_tag__18A-U"}},69:function(e,t,a){e.exports={wrap:"Image_wrap__Su3u-"}},70:function(e,t,a){e.exports={app:"App_app__3maBR"}},72:function(e,t,a){e.exports=a(197)},8:function(e,t,a){e.exports={wrap:"YouTube_wrap__12Ux0",videoContainer:"YouTube_videoContainer__5VVIo",cover:"YouTube_cover__eRZ2M",coverOverlay:"YouTube_coverOverlay__1TiHr",coverImage:"YouTube_coverImage__15yvU",playIcon:"YouTube_playIcon__1WyrH"}}},[[72,1,2]]]);
//# sourceMappingURL=main.67053030.chunk.js.map