(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[12],{611:function(e,a,t){"use strict";var c=t(170),n=t(574),r=t(5);a.a=function(e){var a=Object(r.useState)({key:"name",direction:"ascending"}),t=Object(n.a)(a,2),i=t[0],l=t[1];window.localStorage.setItem("sort key",i.key),window.localStorage.setItem("direction",i.direction);var s=(new Date).getTime(),o=localStorage.getItem("setupTime");null==o?localStorage.setItem("setupTime",s):s-o>36e5&&(localStorage.clear(),localStorage.setItem("setupTime",s));return{items:Object(r.useMemo)((function(){var a=Object(c.a)(e);return"area"===i.key||"population"===i.key?a.sort((function(e,a){return e[i.key]<a[i.key]?"ascending"===i.direction?-1:1:e[i.key]>a[i.key]?"ascending"===i.direction?1:-1:0})):"name"===i.key?a.sort((function(e,a){return"ascending"===i.direction?e[i.key].common.localeCompare(a[i.key].common):a[i.key].common.localeCompare(e[i.key].common)})):"capital"===i.key?a.sort((function(e,a){return"ascending"===i.direction?e[i.key][0].localeCompare(a[i.key][0]):a[i.key][0].localeCompare(e[i.key][0])})):a.sort((function(e,a){return e[i.key]&&"ascending"===i.direction?e[i.key].localeCompare(a[i.key]):a[i.key].localeCompare(e[i.key])})),a}),[e,i]),requestSort:function(e){var a="ascending"===i.direction?"descending":"ascending";l({key:e,direction:a}),window.localStorage.setItem("sort key",e),window.localStorage.setItem("direction",a)}}}},640:function(e,a,t){"use strict";var c=t(33),n=t(570),r=t(5),i=t.n(r),l=t(581),s=t(624),o=t(625),d=t(569);function b(e){var a=e.children,t=e.className,r=e.compact,j=e.content,u=e.horizontal,O=e.piled,m=e.raised,p=e.size,g=e.stacked,f=Object(n.a)("ui",p,Object(l.a)(r,"compact"),Object(l.a)(u,"horizontal"),Object(l.a)(O,"piled"),Object(l.a)(m,"raised"),Object(l.a)(g,"stacked"),"segments",t),h=Object(s.a)(b,e),v=Object(o.a)(b,e);return i.a.createElement(v,Object(c.a)({},h,{className:f}),d.a.isNil(a)?j:a)}b.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],b.propTypes={};var j=b;function u(e){var a=e.children,t=e.className,r=e.content,l=Object(n.a)("inline",t),b=Object(s.a)(u,e),j=Object(o.a)(u,e);return i.a.createElement(j,Object(c.a)({},b,{className:l}),d.a.isNil(a)?r:a)}u.handledProps=["as","children","className","content"],u.propTypes={};var O=u;function m(e){var a=e.attached,t=e.basic,r=e.children,b=e.circular,j=e.className,u=e.clearing,O=e.color,p=e.compact,g=e.content,f=e.disabled,h=e.floated,v=e.inverted,y=e.loading,k=e.placeholder,N=e.padded,w=e.piled,x=e.raised,C=e.secondary,A=e.size,P=e.stacked,S=e.tertiary,E=e.textAlign,I=e.vertical,z=Object(n.a)("ui",O,A,Object(l.a)(t,"basic"),Object(l.a)(b,"circular"),Object(l.a)(u,"clearing"),Object(l.a)(p,"compact"),Object(l.a)(f,"disabled"),Object(l.a)(v,"inverted"),Object(l.a)(y,"loading"),Object(l.a)(k,"placeholder"),Object(l.a)(w,"piled"),Object(l.a)(x,"raised"),Object(l.a)(C,"secondary"),Object(l.a)(P,"stacked"),Object(l.a)(S,"tertiary"),Object(l.a)(I,"vertical"),Object(l.b)(a,"attached"),Object(l.b)(N,"padded"),Object(l.d)(E),Object(l.e)(h,"floated"),"segment",j),T=Object(s.a)(m,e),R=Object(o.a)(m,e);return i.a.createElement(R,Object(c.a)({},T,{className:z}),d.a.isNil(r)?g:r)}m.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],m.Group=j,m.Inline=O,m.propTypes={};a.a=m},667:function(e,a,t){"use strict";t.r(a);var c=t(574),n=t(5),r=t.n(n),i=t(79),l=t(165),s=t(646),o=t(640),d=t(678),b=t(677),j=t(70),u=t(611),O=t(585),m=t(51),p=function(){var e=Object(n.useState)({id:"FZUe47mEY9PCOzYmMxzYY",region:"All",subregions:[]}),a=Object(c.a)(e,2)[1],t=Object(i.b)(),r=Object(i.c)((function(e){return e})),p=Object(i.c)((function(e){return e.unit.unit})),g=Object(i.c)((function(e){return e.countries.filtered.length>0?e.countries.filtered:e.countries.initialCountries})),f=Object(i.c)((function(e){return e.countries.filtered})),h=Object(i.c)((function(e){return e.countries.filtered})),v=h.length>0?h:f.length>0?f:g,y=Object(u.a)(v),k=y.items,N=y.requestSort,w=function(e){return"ascending"===window.localStorage.getItem("direction")&&window.localStorage.getItem("sort key")===e?Object(m.jsx)(s.a,{name:"caret up"}):"descending"===window.localStorage.getItem("direction")&&window.localStorage.getItem("sort key")===e?Object(m.jsx)(s.a,{name:"caret down"}):void 0};return console.dir("isIE?",l.isIE),Object(m.jsx)(o.a,{attached:"bottom",children:v.length>1?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(d.a,{sortable:!0,compact:!0,selectable:!0,unstackable:!0,size:"small",children:[Object(m.jsx)(d.a.Header,{id:"all"===r.countries.filter.region.toLowerCase()?"one":"two",children:Object(m.jsx)(d.a.Row,{children:Object(m.jsx)(m.Fragment,{children:[{fieldName:"CCA3",id:"cca3"},{fieldName:"Flag",id:"flag"},{fieldName:"Name",id:"name"},{fieldName:"Capital",id:"capital"},{fieldName:"Region",id:"region"},{fieldName:"Subregion",id:"subregion"},{fieldName:"Population",id:"population"},{fieldName:"Area km\xb2",id:"area"}].map((function(e){var a=e.fieldName,t=e.id;return Object(m.jsxs)(d.a.HeaderCell,{onClick:function(){return N(t)},children:["Area km\xb2"===a?"metric"===p?a:"Area mi\xb2":a,w(t)]},t)}))})})}),Object(m.jsx)(d.a.Body,{children:Object(m.jsx)(m.Fragment,{children:k.map((function(e){var c=Math.round(e.area/2.59);return Object(m.jsxs)(d.a.Row,{onClick:function(){return function(e){t(Object(j.b)(e));var c=O.filter((function(a){return a.region===e.region}));a(c[0])}(e)},children:[Object(m.jsx)(d.a.Cell,{children:e.cca3}),Object(m.jsx)(d.a.Cell,{children:Object(m.jsx)(b.a,{srcSet:"".concat(e.flags.svg," 100w"),size:"tiny",src:l.isIE?e.flags.png:e.flags.svg,alt:"country flag",bordered:!0,loading:"lazy"})}),Object(m.jsx)(d.a.Cell,{children:e.name.common}),Object(m.jsx)(d.a.Cell,{children:void 0===e.capital?"no data":e.capital}),Object(m.jsx)(d.a.Cell,{children:e.region}),Object(m.jsx)(d.a.Cell,{children:e.subregion}),Object(m.jsx)(d.a.Cell,{children:e.population.toLocaleString()}),Object(m.jsx)(d.a.Cell,{children:"imperial"===p?c.toLocaleString():e.area.toLocaleString()})]},e.cca3)}))})})]})}):null})},g=r.a.memo(p);a.default=g},678:function(e,a,t){"use strict";var c=t(33),n=t(576),r=t(570),i=t(5),l=t.n(i),s=t(581),o=t(624),d=t(625),b=t(569);function j(e){var a=e.children,t=e.className,n=Object(r.a)(t),i=Object(o.a)(j,e),s=Object(d.a)(j,e);return l.a.createElement(s,Object(c.a)({},i,{className:n}),a)}j.handledProps=["as","children","className"],j.defaultProps={as:"tbody"},j.propTypes={};var u=j,O=t(637),m=t(646);function p(e){var a=e.active,t=e.children,n=e.className,i=e.collapsing,j=e.content,u=e.disabled,O=e.error,g=e.icon,f=e.negative,h=e.positive,v=e.selectable,y=e.singleLine,k=e.textAlign,N=e.verticalAlign,w=e.warning,x=e.width,C=Object(r.a)(Object(s.a)(a,"active"),Object(s.a)(i,"collapsing"),Object(s.a)(u,"disabled"),Object(s.a)(O,"error"),Object(s.a)(f,"negative"),Object(s.a)(h,"positive"),Object(s.a)(v,"selectable"),Object(s.a)(y,"single line"),Object(s.a)(w,"warning"),Object(s.d)(k),Object(s.f)(N),Object(s.g)(x,"wide"),n),A=Object(o.a)(p,e),P=Object(d.a)(p,e);return b.a.isNil(t)?l.a.createElement(P,Object(c.a)({},A,{className:C}),m.a.create(g),j):l.a.createElement(P,Object(c.a)({},A,{className:C}),t)}p.handledProps=["active","as","children","className","collapsing","content","disabled","error","icon","negative","positive","selectable","singleLine","textAlign","verticalAlign","warning","width"],p.defaultProps={as:"td"},p.propTypes={},p.create=Object(O.d)(p,(function(e){return{content:e}}));var g=p;function f(e){var a=e.children,t=e.className,n=e.content,i=e.fullWidth,j=Object(r.a)(Object(s.a)(i,"full-width"),t),u=Object(o.a)(f,e),O=Object(d.a)(f,e);return l.a.createElement(O,Object(c.a)({},u,{className:j}),b.a.isNil(a)?n:a)}f.handledProps=["as","children","className","content","fullWidth"],f.defaultProps={as:"thead"},f.propTypes={};var h=f;function v(e){var a=e.as,t=Object(o.a)(v,e);return l.a.createElement(h,Object(c.a)({},t,{as:a}))}v.handledProps=["as"],v.propTypes={},v.defaultProps={as:"tfoot"};var y=v;function k(e){var a=e.as,t=e.className,n=e.sorted,i=Object(r.a)(Object(s.e)(n,"sorted"),t),d=Object(o.a)(k,e);return l.a.createElement(g,Object(c.a)({},d,{as:a,className:i}))}k.handledProps=["as","className","sorted"],k.propTypes={},k.defaultProps={as:"th"};var N=k;function w(e){var a=e.active,t=e.cellAs,i=e.cells,j=e.children,u=e.className,O=e.disabled,m=e.error,p=e.negative,f=e.positive,h=e.textAlign,v=e.verticalAlign,y=e.warning,k=Object(r.a)(Object(s.a)(a,"active"),Object(s.a)(O,"disabled"),Object(s.a)(m,"error"),Object(s.a)(p,"negative"),Object(s.a)(f,"positive"),Object(s.a)(y,"warning"),Object(s.d)(h),Object(s.f)(v),u),N=Object(o.a)(w,e),x=Object(d.a)(w,e);return b.a.isNil(j)?l.a.createElement(x,Object(c.a)({},N,{className:k}),Object(n.a)(i,(function(e){return g.create(e,{defaultProps:{as:t}})}))):l.a.createElement(x,Object(c.a)({},N,{className:k}),j)}w.handledProps=["active","as","cellAs","cells","children","className","disabled","error","negative","positive","textAlign","verticalAlign","warning"],w.defaultProps={as:"tr",cellAs:"td"},w.propTypes={},w.create=Object(O.d)(w,(function(e){return{cells:e}}));var x=w;function C(e){var a=e.attached,t=e.basic,i=e.celled,j=e.children,O=e.className,m=e.collapsing,p=e.color,g=e.columns,f=e.compact,v=e.definition,k=e.fixed,N=e.footerRow,w=e.headerRow,A=e.headerRows,P=e.inverted,S=e.padded,E=e.renderBodyRow,I=e.selectable,z=e.singleLine,T=e.size,R=e.sortable,L=e.stackable,F=e.striped,B=e.structured,H=e.tableData,Y=e.textAlign,D=e.unstackable,M=e.verticalAlign,q=Object(r.a)("ui",p,T,Object(s.a)(i,"celled"),Object(s.a)(m,"collapsing"),Object(s.a)(v,"definition"),Object(s.a)(k,"fixed"),Object(s.a)(P,"inverted"),Object(s.a)(I,"selectable"),Object(s.a)(z,"single line"),Object(s.a)(R,"sortable"),Object(s.a)(L,"stackable"),Object(s.a)(F,"striped"),Object(s.a)(B,"structured"),Object(s.a)(D,"unstackable"),Object(s.b)(a,"attached"),Object(s.b)(t,"basic"),Object(s.b)(f,"compact"),Object(s.b)(S,"padded"),Object(s.d)(Y),Object(s.f)(M),Object(s.g)(g,"column"),"table",O),J=Object(o.a)(C,e),W=Object(d.a)(C,e);if(!b.a.isNil(j))return l.a.createElement(W,Object(c.a)({},J,{className:q}),j);var G={defaultProps:{cellAs:"th"}},U=(w||A)&&l.a.createElement(h,null,x.create(w,G),Object(n.a)(A,(function(e){return x.create(e,G)})));return l.a.createElement(W,Object(c.a)({},J,{className:q}),U,l.a.createElement(u,null,E&&Object(n.a)(H,(function(e,a){return x.create(E(e,a))}))),N&&l.a.createElement(y,null,x.create(N)))}C.handledProps=["as","attached","basic","celled","children","className","collapsing","color","columns","compact","definition","fixed","footerRow","headerRow","headerRows","inverted","padded","renderBodyRow","selectable","singleLine","size","sortable","stackable","striped","structured","tableData","textAlign","unstackable","verticalAlign"],C.defaultProps={as:"table"},C.propTypes={},C.Body=u,C.Cell=g,C.Footer=y,C.Header=h,C.HeaderCell=N,C.Row=x;a.a=C}}]);
//# sourceMappingURL=12.bf86adaa.chunk.js.map