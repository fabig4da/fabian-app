(this["webpackJsonpfabian-app"]=this["webpackJsonpfabian-app"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(1),c=a.n(n),s=a(4),r=a.n(s),d=a(2),l=[a.p+"static/media/pista1.d4df5030.mp3",a.p+"static/media/Blinding Lights.c5a704b0.mp3",a.p+"static/media/Khalid - Better (Official Video).95caa6af.mp3",a.p+"static/media/Sia - Move Your Body (Single Mix) [Lyric].d437f596.mp3",a.p+"static/media/Tones and I - Dance Monkey (Lyrics).07bc7ea9.mp3",a.p+"static/media/I m Still Here Sia.d3013d74.mp3",a.p+"static/media/albina-she-wolf-sia-and-david-guetta_(Cool.DJ).81e076f3.mp3"],o=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(100),o=Object(d.a)(r,2),u=o[0],j=o[1],f=Object(n.useState)(0),m=Object(d.a)(f,2),b=m[0],p=m[1],O=Object(n.useState)(""),v=Object(d.a)(O,2),x=v[0],h=v[1],g=Object(n.useState)(!0),N=Object(d.a)(g,2),y=N[0],C=N[1],S=document.getElementById("pista_reader"),k=Object(n.useState)(l[0]),L=Object(d.a)(k,2),E=L[0],T=L[1];function B(){S&&(j(S.duration),S.play())}function I(){var e=l.indexOf(E);return!!l[e+1]&&(T(l[e+1]),setTimeout((function(){S.play(),j(S.duration)}),1e3),!0)}function w(){I()||S.load()}return Object(n.useEffect)((function(){var e=E.split("/");h(e[e.length-1]),S&&function(e){e.addEventListener("timeupdate",(function(){return p(e.currentTime)})),e.addEventListener("ended",(function(){return w()})),e.addEventListener("pause",(function(){return s(!1)})),e.addEventListener("play",(function(){return s(!0)})),e.addEventListener("loadeddata",(function(){return s(!1)}))}(S)}),[S,E]),Object(i.jsx)("div",{className:"player",children:Object(i.jsxs)("div",{className:"player-container",children:[Object(i.jsx)("div",{className:y?"song-list move-menu-left":"song-list",children:l.map((function(e){var t=e.split("/");return Object(i.jsx)("div",{className:"song-item",onClick:function(){return function(e){T(e),setTimeout((function(){B()}),1e3)}(e)},children:t[t.length-1]},t)}))}),Object(i.jsxs)("div",{className:"player-header",children:[Object(i.jsx)("i",{className:"fas fa-ellipsis-v"}),Object(i.jsx)("h4",{className:"song-title",children:x}),Object(i.jsx)("i",{className:"fas fa-music",onClick:function(){return C(!y)}})]}),Object(i.jsx)("div",{className:"player-body",children:c?Object(i.jsx)("div",{className:"circle boderC",children:Object(i.jsx)("div",{className:"figura spin-disc"})}):Object(i.jsx)("div",{className:"circle",children:Object(i.jsx)("div",{className:"figura"})})}),Object(i.jsxs)("div",{className:"player-footer",children:[Object(i.jsx)("input",{type:"range",id:"slide",className:"slide",name:"slaide",min:0,max:u,value:b,onChange:function(e){var t=e.target;p(t.value),S.currentTime=t.value}}),Object(i.jsx)("i",{className:"fas fa-redo-alt",onClick:function(){S&&S.load()}}),Object(i.jsxs)("div",{className:"media-group",children:[Object(i.jsx)("audio",{id:"pista_reader",src:E}),Object(i.jsx)("i",{className:"fas fa-fast-backward",onClick:function(){var e=l.indexOf(E);l[e-1]&&(T(l[e-1]),setTimeout((function(){S.play(),j(S.duration)}),1e3))}}),c?Object(i.jsx)("i",{className:"fas fa-pause-circle",onClick:function(){var e=document.getElementById("pista_reader");e&&(e.pause(),clearInterval())}}):Object(i.jsx)("i",{className:"fas fa-play-circle",onClick:B}),Object(i.jsx)("i",{className:"fas fa-fast-forward",onClick:I})]})]})]})})},u=function(){return Object(i.jsx)(o,{})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};a(10);r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),j()}},[[11,1,2]]]);
//# sourceMappingURL=main.cce2fb37.chunk.js.map