(this["webpackJsonptibber-webapp"]=this["webpackJsonptibber-webapp"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),c=n(11),a=n.n(c),s=(n(17),n(10)),i=n.n(s),u=n(12),l=n(4),b=(n(19),n(20),n(2)),j=function(t){var e=t.currentPrice,n=Object(r.useState)(null),o=Object(l.a)(n,2),c=o[0],a=o[1],s=Object(r.useState)(null),i=Object(l.a)(s,2),u=i[0],j=i[1],d=Object(r.useState)(null),f=Object(l.a)(d,2),p=f[0],h=f[1];return Object(r.useEffect)((function(){a(e.total),function(){for(var t="",n=11;n<16;n++)t+=e.startsAt[n];h(t)}(),function(){for(var t="",n=0;n<10;n++)t+=e.startsAt[n];j(t)}()}),[]),Object(b.jsxs)("div",{className:"currentPrice",children:[Object(b.jsxs)("h2",{id:c>3?"highPrice":"",children:[c,"kr"]}),Object(b.jsxs)("h4",{children:["at ",p," on ",u]})]})},d=n(7),f=n(0);n(22);f.d.register(f.c,f.i,f.k,f.h,f.o,f.p,f.f);var p=function(t){var e=t.todaysPrices,n=t.tomorrowsPrices,r={labels:Array.from({length:24},(function(t,e){return e})),datasets:[{label:"Today's Prices",data:Array.from(e,(function(t){return t.total})),borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Tomorrow's Prices",data:Array.from(n,(function(t){return t.total})),borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]};return Object(b.jsx)("div",{className:"prices",children:r&&Object(b.jsx)("div",{className:"chartContainer",id:"join",children:Object(b.jsx)(d.a,{data:r,options:{maintainAspectRatio:!1}})})})};n(23);f.d.register(f.c,f.i,f.k,f.h,f.o,f.p,f.f);var h=function(t){var e=t.todaysPrices,n=Array.from({length:24},(function(t,e){return e}));console.log(n);var r=Array.from(e,(function(t){return t.total}));console.log(r);var o={labels:n,datasets:[{label:"Today's Prices",data:r,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"}]};return Object(b.jsx)("div",{className:"todaysPrices",children:o&&Object(b.jsx)("div",{className:"chartContainer",children:Object(b.jsx)(d.a,{data:o,options:{maintainAspectRatio:!0}})})})};n(24);f.d.register(f.c,f.i,f.k,f.h,f.o,f.p,f.f);var O=function(t){var e=t.tomorrowsPrices,n=Array.from({length:24},(function(t,e){return e}));console.log(n);var r=Array.from(e,(function(t){return t.total}));console.log(r);var o={labels:n,datasets:[{label:"Tomorrow's Prices",data:r,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]};return Object(b.jsx)("div",{className:"tomorrowsPrices",children:o&&Object(b.jsx)("div",{className:"chartContainer",children:Object(b.jsx)(d.a,{data:o,options:{maintainAspectRatio:!0}})})})},m=(n(25),function(t){var e=t.setToken,n=Object(r.useState)(""),o=Object(l.a)(n,2),c=o[0],a=o[1];return Object(b.jsxs)("div",{className:"inputContainer",children:[Object(b.jsx)("input",{type:"text",placeholder:"Insert token",value:c,onChange:function(t){a(t.target.value)}}),Object(b.jsx)("button",{type:"submit",value:"save token",className:"separationButton",onClick:function(){return document.cookie="Token="+c,e(c),void a(null)},children:"Save token"})]})});var v=function(){var t=Object(r.useState)(null),e=Object(l.a)(t,2),n=e[0],o=e[1],c=Object(r.useState)(null),a=Object(l.a)(c,2),s=a[0],d=a[1],f=Object(r.useState)(null),v=Object(l.a)(f,2),g=v[0],x=v[1],y=Object(r.useState)(!1),k=Object(l.a)(y,2),w=k[0],P=k[1],S=Object(r.useState)(null),C=Object(l.a)(S,2),A=C[0],N=C[1],T="query{\n\t\tviewer {\n\t\t\thomes {\n\t\t\t\tcurrentSubscription{\n\t\t\t\t\tpriceInfo{\n\t\t\t\t\t\tcurrent{\n\t\t\t\t\t\t\ttotal\n\t\t\t\t\t\t\tenergy\n\t\t\t\t\t\t\ttax\n\t\t\t\t\t\t\tstartsAt\n\t\t\t\t\t\t}\n\t\t\t\t\t\ttoday {\n\t\t\t\t\t\t\ttotal\n\t\t\t\t\t\t\tenergy\n\t\t\t\t\t\t\ttax\n\t\t\t\t\t\t\tstartsAt\n\t\t\t\t\t\t}\n\t\t\t\t\t\ttomorrow {\n\t\t\t\t\t\t\ttotal\n\t\t\t\t\t\t\tenergy\n\t\t\t\t\t\t\ttax\n\t\t\t\t\t\t\tstartsAt\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n  }";function I(t){console.log(t),t&&(d(t.viewer.homes[0].currentSubscription.priceInfo.today),x(t.viewer.homes[0].currentSubscription.priceInfo.tomorrow),o(t.viewer.homes[0].currentSubscription.priceInfo.current))}function B(){return(B=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(A)try{console.log("Submitting"),fetch("https://api.tibber.com/v1-beta/gql",{method:"POST",headers:{Authorization:"Bearer "+A,"Content-Type":"application/json"},body:JSON.stringify({query:T})}).then((function(t){return t.json()})).then((function(t){return I(t.data)}))}catch(e){console.log(e)}case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){if(document.cookie){var t=document.cookie.split("; ").find((function(t){return t.startsWith("Token")})).split("=")[1];t&&N(t)}}),[]),Object(r.useEffect)((function(){!function(){B.apply(this,arguments)}()}),[A]),Object(r.useEffect)((function(){console.log(n),console.log(s),console.log(g)}),[n]),Object(b.jsxs)("div",{className:"App",children:[!A&&Object(b.jsx)(m,{setToken:N}),A&&n&&Object(b.jsx)(j,{currentPrice:n}),A&&s&&g&&!w&&Object(b.jsx)(p,{todaysPrices:s,tomorrowsPrices:g}),A&&s&&w&&Object(b.jsx)(h,{todaysPrices:s}),A&&g&&w&&Object(b.jsx)(O,{tomorrowsPrices:g}),A&&g&&g.length>0&&Object(b.jsx)("button",{className:"separationButton",onClick:function(){P(!w)},children:w?"Join":"Separate"}),A&&Object(b.jsx)("button",{className:"separationButton",onClick:function(){return N(null),void(document.cookie="Token=")},children:"Clear token"})]})};a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.d1ae7a7e.chunk.js.map