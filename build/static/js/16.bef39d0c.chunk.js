(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[16],{588:function(e){e.exports=JSON.parse('[{"id":"FZUe47mEY9PCOzYmMxzYY","region":"All","subregions":[]},{"id":"p3QkwaBBJbQm4-oi_qzIQ","region":"Africa","subregions":["Northern Africa","Middle Africa","Western Africa","Southern Africa","Eastern Africa"]},{"id":"oEXPulND1myYNkk691COU","region":"Americas","subregions":["Caribbean","South America","Central America","North America"]},{"id":"Tnrp40V1CE3AB_yBKxmxK","region":"Antarctic","subregions":["Antarctic"]},{"id":"MywTm4_IEp2XZtAfPKRGg","region":"Asia","subregions":["Southern Asia","Western Asia","South-Eastern Asia","Eastern Asia","Central Asia"]},{"id":"qxmsAgkNwgqb5xqff-ddc","region":"Europe","subregions":["Northern Europe","Southern Europe","Western Europe","Eastern Europe","Central Europe"]},{"id":"3HyqK4xy8_nAO7Up9TwSN","region":"Oceania","subregions":["Polynesia","Australia and New Zealand","Melanesia","Micronesia"]}]')},592:function(e,r,n){},707:function(e,r,n){"use strict";n.r(r);var t=n(576),i=n(5),o=n(79),s=n(708),a=n(714),c=n(132),u=n(71),l=n(588),b=(n(592),n(51)),g=Object(c.a)((function(){return Promise.all([n.e(0),n.e(7),n.e(18)]).then(n.bind(null,678))})),d=Object(c.a)((function(){return Promise.all([n.e(0),n.e(8),n.e(6),n.e(5),n.e(17)]).then(n.bind(null,692))})),f=Object(c.a)((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,681))}));r.default=function(){var e=Object(i.useState)({id:"FZUe47mEY9PCOzYmMxzYY",region:"All",subregions:[]}),r=Object(t.a)(e,2),n=r[0],c=r[1],j=Object(o.b)(),O=Object(o.c)((function(e){return e})),h=Object(o.c)((function(e){return e.countries.filtered.length>0?e.countries.filtered:e.countries.initialCountries})),A=Object(i.useRef)();return Object(i.useEffect)((function(){if(O.countries.filter.region.toLowerCase()===n.region.toLowerCase())return n;var e=l.filter((function(e){return e.region.toLowerCase()===O.countries.filter.region.toLowerCase()?e:null}));c(e[0])}),[O]),Object(b.jsxs)("div",{id:"ref",ref:A,children:[Object(b.jsxs)(s.a,{id:"Sticky",context:A,children:[Object(b.jsx)(g,{}),1===h.length?Object(b.jsx)(b.Fragment,{}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(a.a,{attached:!0,tabular:!0,widths:7,children:l.map((function(e){return Object(b.jsx)(a.a.Item,{active:O.countries.filter.region.toLowerCase()===e.region.toLowerCase(),onClick:function(){return r=e,j(Object(u.c)(r.region)),c(r),void("All"===r.region&&window.localStorage.clear());var r},children:"All"===e.region?"All Regions":e.region},e.id)}))}),"all"!==O.countries.filter.region.toLowerCase()?Object(b.jsx)(a.a,{widths:n.subregions.length,attached:!0,tabular:!0,children:n.subregions.map((function(e,r){return Object(b.jsx)(a.a.Item,{active:O.countries.filter.subregion.toLowerCase()===e.toLowerCase(),onClick:function(){return r=e,void j(Object(u.d)(r));var r},children:e},r)}))}):Object(b.jsx)(b.Fragment,{})," "]})]}),1===h.length?Object(b.jsx)(d,{data:h[0]}):Object(b.jsx)(f,{})]})}}}]);
//# sourceMappingURL=16.bef39d0c.chunk.js.map