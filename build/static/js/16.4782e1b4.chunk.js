(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[16],{605:function(e,t,n){},738:function(e,t,n){"use strict";n.r(t);var r=n(28),c=n(583),i=n(19),o=n.n(i),a=n(6),s=n(80),u=n(79),j=n.n(u),l=n(739),b=n(747),f=n(133),d=n(71),O=n(167),g=n(169),h=(n(605),n(52)),m=Object(f.a)((function(){return Promise.all([n.e(0),n.e(3),n.e(14)]).then(n.bind(null,730))})),x=Object(f.a)((function(){return Promise.all([n.e(0),n.e(5),n.e(4),n.e(20)]).then(n.bind(null,726))})),p=Object(f.a)((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,715))}));t.default=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],i=t[1],u=Object(s.b)(),f=Object(s.c)((function(e){return e})),v=Object(s.c)((function(e){return e.countries.filtered})),w=Object(a.useRef)(),k=function(){var e=Object(r.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://nominatim.openstreetmap.org/search?q=".concat(t,"&polygon_geojson=1&format=json"));case 2:return n=e.sent,r=n.data[0],e.abrupt("return",i(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){if(1===v.length){var e=v[0].name.common;"Antarctic"===v[0].region?u(Object(O.b)("Antarctic")):u(Object(O.b)(e)),k(e)}}),[v]);var C=0===v.length;return console.log("state",f),C?Object(h.jsx)("div",{id:"ref",ref:w,children:Object(h.jsx)(l.a,{id:"Sticky",context:w,children:Object(h.jsx)(m,{})})}):Object(h.jsxs)("div",{id:"ref",ref:w,children:[Object(h.jsxs)(l.a,{id:"Sticky",context:w,children:[Object(h.jsx)(m,{}),1===v.length?Object(h.jsx)(h.Fragment,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b.a,{attached:!0,tabular:!0,widths:7,children:g.map((function(e){return Object(h.jsx)(b.a.Item,{active:f.countries.filter.region.region.toLowerCase()===e.region.toLowerCase(),onClick:function(){return t=e,void u(Object(d.b)(t));var t},children:"All"===e.region?"All Regions":e.region},e.id)}))}),"all"!==f.countries.filter.region.region.toLowerCase()?Object(h.jsx)(b.a,{widths:f.countries.filter.region.subregions.length,attached:!0,tabular:!0,children:f.countries.filter.region.subregions.map((function(e){return Object(h.jsx)(b.a.Item,{active:f.countries.filter.subregion.toLowerCase()===e.name.toLowerCase(),onClick:function(){return t=e.name,void u(Object(d.c)(t));var t},children:e.name},e.id)}))}):Object(h.jsx)(h.Fragment,{})]})]}),1===v.length?Object(h.jsx)(x,{geo:n}):Object(h.jsx)(p,{})]})}}}]);
//# sourceMappingURL=16.4782e1b4.chunk.js.map