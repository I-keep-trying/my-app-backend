(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[13],{678:function(e,a,t){"use strict";var c=t(234),n=t(672),r=t(1);a.a=function(e){var a=Object(r.useState)({key:"name",direction:"ascending"}),t=Object(n.a)(a,2),i=t[0],l=t[1];window.localStorage.setItem("sort key",i.key),window.localStorage.setItem("direction",i.direction);var s=(new Date).getTime(),o=localStorage.getItem("setupTime");null==o?localStorage.setItem("setupTime",s):s-o>36e5&&(localStorage.clear(),localStorage.setItem("setupTime",s));return{items:Object(r.useMemo)((function(){var a=Object(c.a)(e);return"area"===i.key||"population"===i.key?a.sort((function(e,a){return e[i.key]<a[i.key]?"ascending"===i.direction?-1:1:e[i.key]>a[i.key]?"ascending"===i.direction?1:-1:0})):"name"===i.key?a.sort((function(e,a){return"ascending"===i.direction?e[i.key].common.localeCompare(a[i.key].common):a[i.key].common.localeCompare(e[i.key].common)})):"capital"===i.key||"continents"===i.key?a.sort((function(e,a){return"ascending"===i.direction?e[i.key][0].localeCompare(a[i.key][0]):a[i.key][0].localeCompare(e[i.key][0])})):a.sort((function(e,a){return e[i.key]&&"ascending"===i.direction?e[i.key].localeCompare(a[i.key]):a[i.key].localeCompare(e[i.key])})),a}),[e,i]),requestSort:function(e){var a="ascending"===i.direction?"descending":"ascending";l({key:e,direction:a}),window.localStorage.setItem("sort key",e),window.localStorage.setItem("direction",a)}}}},682:function(e,a,t){"use strict";var c=t(4),n=t(15),r=t(1),i=t.n(r),l=t(81),s=t(321),o=t(322),d=t(11);function b(e){var a=e.children,t=e.className,r=e.compact,j=e.content,O=e.horizontal,u=e.piled,m=e.raised,p=e.size,g=e.stacked,f=Object(n.a)("ui",p,Object(l.a)(r,"compact"),Object(l.a)(O,"horizontal"),Object(l.a)(u,"piled"),Object(l.a)(m,"raised"),Object(l.a)(g,"stacked"),"segments",t),h=Object(s.a)(b,e),v=Object(o.a)(b,e);return i.a.createElement(v,Object(c.a)({},h,{className:f}),d.a.isNil(a)?j:a)}b.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],b.propTypes={};var j=b;function O(e){var a=e.children,t=e.className,r=e.content,l=Object(n.a)("inline",t),b=Object(s.a)(O,e),j=Object(o.a)(O,e);return i.a.createElement(j,Object(c.a)({},b,{className:l}),d.a.isNil(a)?r:a)}O.handledProps=["as","children","className","content"],O.propTypes={};var u=O;function m(e){var a=e.attached,t=e.basic,r=e.children,b=e.circular,j=e.className,O=e.clearing,u=e.color,p=e.compact,g=e.content,f=e.disabled,h=e.floated,v=e.inverted,y=e.loading,k=e.placeholder,N=e.padded,w=e.piled,x=e.raised,C=e.secondary,A=e.size,P=e.stacked,S=e.tertiary,E=e.textAlign,T=e.vertical,I=Object(n.a)("ui",u,A,Object(l.a)(t,"basic"),Object(l.a)(b,"circular"),Object(l.a)(O,"clearing"),Object(l.a)(p,"compact"),Object(l.a)(f,"disabled"),Object(l.a)(v,"inverted"),Object(l.a)(y,"loading"),Object(l.a)(k,"placeholder"),Object(l.a)(w,"piled"),Object(l.a)(x,"raised"),Object(l.a)(C,"secondary"),Object(l.a)(P,"stacked"),Object(l.a)(S,"tertiary"),Object(l.a)(T,"vertical"),Object(l.b)(a,"attached"),Object(l.b)(N,"padded"),Object(l.d)(E),Object(l.e)(h,"floated"),"segment",j),z=Object(s.a)(m,e),R=Object(o.a)(m,e);return i.a.createElement(R,Object(c.a)({},z,{className:I}),d.a.isNil(r)?g:r)}m.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],m.Group=j,m.Inline=u,m.propTypes={};a.a=m},690:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),r=t(120),i=t(228),l=t(142),s=t(682),o=t(698),d=t(333),b=t(98),j=t(678),O=t(29),u=function(){var e=Object(r.b)(),a=Object(r.c)((function(e){return e})),t=Object(r.c)((function(e){return e.unit.unit})),c=Object(r.c)((function(e){return e.countries.filtered.length>0?e.countries.filtered:e.countries.initialCountries})),n=Object(j.a)(c),u=n.items,m=n.requestSort,p=function(e){return"ascending"===window.localStorage.getItem("direction")&&window.localStorage.getItem("sort key")===e?Object(O.jsx)(l.a,{name:"caret up"}):"descending"===window.localStorage.getItem("direction")&&window.localStorage.getItem("sort key")===e?Object(O.jsx)(l.a,{name:"caret down"}):void 0};return Object(O.jsx)(s.a,{attached:"bottom",children:c.length>1?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(o.a,{sortable:!0,compact:!0,selectable:!0,unstackable:!0,size:"small",children:[Object(O.jsx)(o.a.Header,{id:"all"===a.countries.filter.region.toLowerCase()?"one":"two",children:Object(O.jsx)(o.a.Row,{children:Object(O.jsx)(O.Fragment,{children:[{fieldName:"CCA3",id:"cca3"},{fieldName:"Flag",id:"flag"},{fieldName:"Name",id:"name"},{fieldName:"Capital",id:"capital"},{fieldName:"Continent",id:"continents"},{fieldName:"Region",id:"region"},{fieldName:"Subregion",id:"subregion"},{fieldName:"Population",id:"population"},{fieldName:"Area km\xb2",id:"area"}].map((function(e){var a=e.fieldName,c=e.id;return Object(O.jsxs)(o.a.HeaderCell,{onClick:function(){return m(c)},children:["Area km\xb2"===a?"metric"===t?a:"Area mi\xb2":a,p(c)]},c)}))})})}),Object(O.jsx)(o.a.Body,{children:Object(O.jsx)(O.Fragment,{children:u.map((function(a){var c=Math.round(a.area/2.59);return Object(O.jsxs)(o.a.Row,{onClick:function(){return t=a,void e(Object(b.b)(t));var t},children:[Object(O.jsx)(o.a.Cell,{textAlign:"center",children:a.cca3}),Object(O.jsx)(o.a.Cell,{children:Object(O.jsx)(d.a,{srcSet:"".concat(a.flags.svg," 100w"),size:"tiny",src:i.isIE?a.flags.png:a.flags.svg,alt:"country flag",bordered:!0,loading:"lazy"})}),Object(O.jsx)(o.a.Cell,{children:a.name.common}),Object(O.jsx)(o.a.Cell,{children:void 0===a.capital?"no data":a.capital}),Object(O.jsx)(o.a.Cell,{children:a.continents[0]}),Object(O.jsx)(o.a.Cell,{children:a.region}),Object(O.jsx)(o.a.Cell,{children:a.subregion}),Object(O.jsx)(o.a.Cell,{children:a.population.toLocaleString()}),Object(O.jsx)(o.a.Cell,{children:"imperial"===t?c.toLocaleString():a.area.toLocaleString()})]},a.cca3)}))})})]})}):null})},m=n.a.memo(u);a.default=m},698:function(e,a,t){"use strict";var c=t(4),n=t(226),r=t(15),i=t(1),l=t.n(i),s=t(81),o=t(321),d=t(322),b=t(11);function j(e){var a=e.children,t=e.className,n=Object(r.a)(t),i=Object(o.a)(j,e),s=Object(d.a)(j,e);return l.a.createElement(s,Object(c.a)({},i,{className:n}),a)}j.handledProps=["as","children","className"],j.defaultProps={as:"tbody"},j.propTypes={};var O=j,u=t(326),m=t(142);function p(e){var a=e.active,t=e.children,n=e.className,i=e.collapsing,j=e.content,O=e.disabled,u=e.error,g=e.icon,f=e.negative,h=e.positive,v=e.selectable,y=e.singleLine,k=e.textAlign,N=e.verticalAlign,w=e.warning,x=e.width,C=Object(r.a)(Object(s.a)(a,"active"),Object(s.a)(i,"collapsing"),Object(s.a)(O,"disabled"),Object(s.a)(u,"error"),Object(s.a)(f,"negative"),Object(s.a)(h,"positive"),Object(s.a)(v,"selectable"),Object(s.a)(y,"single line"),Object(s.a)(w,"warning"),Object(s.d)(k),Object(s.f)(N),Object(s.g)(x,"wide"),n),A=Object(o.a)(p,e),P=Object(d.a)(p,e);return b.a.isNil(t)?l.a.createElement(P,Object(c.a)({},A,{className:C}),m.a.create(g),j):l.a.createElement(P,Object(c.a)({},A,{className:C}),t)}p.handledProps=["active","as","children","className","collapsing","content","disabled","error","icon","negative","positive","selectable","singleLine","textAlign","verticalAlign","warning","width"],p.defaultProps={as:"td"},p.propTypes={},p.create=Object(u.d)(p,(function(e){return{content:e}}));var g=p;function f(e){var a=e.children,t=e.className,n=e.content,i=e.fullWidth,j=Object(r.a)(Object(s.a)(i,"full-width"),t),O=Object(o.a)(f,e),u=Object(d.a)(f,e);return l.a.createElement(u,Object(c.a)({},O,{className:j}),b.a.isNil(a)?n:a)}f.handledProps=["as","children","className","content","fullWidth"],f.defaultProps={as:"thead"},f.propTypes={};var h=f;function v(e){var a=e.as,t=Object(o.a)(v,e);return l.a.createElement(h,Object(c.a)({},t,{as:a}))}v.handledProps=["as"],v.propTypes={},v.defaultProps={as:"tfoot"};var y=v;function k(e){var a=e.as,t=e.className,n=e.sorted,i=Object(r.a)(Object(s.e)(n,"sorted"),t),d=Object(o.a)(k,e);return l.a.createElement(g,Object(c.a)({},d,{as:a,className:i}))}k.handledProps=["as","className","sorted"],k.propTypes={},k.defaultProps={as:"th"};var N=k;function w(e){var a=e.active,t=e.cellAs,i=e.cells,j=e.children,O=e.className,u=e.disabled,m=e.error,p=e.negative,f=e.positive,h=e.textAlign,v=e.verticalAlign,y=e.warning,k=Object(r.a)(Object(s.a)(a,"active"),Object(s.a)(u,"disabled"),Object(s.a)(m,"error"),Object(s.a)(p,"negative"),Object(s.a)(f,"positive"),Object(s.a)(y,"warning"),Object(s.d)(h),Object(s.f)(v),O),N=Object(o.a)(w,e),x=Object(d.a)(w,e);return b.a.isNil(j)?l.a.createElement(x,Object(c.a)({},N,{className:k}),Object(n.a)(i,(function(e){return g.create(e,{defaultProps:{as:t}})}))):l.a.createElement(x,Object(c.a)({},N,{className:k}),j)}w.handledProps=["active","as","cellAs","cells","children","className","disabled","error","negative","positive","textAlign","verticalAlign","warning"],w.defaultProps={as:"tr",cellAs:"td"},w.propTypes={},w.create=Object(u.d)(w,(function(e){return{cells:e}}));var x=w;function C(e){var a=e.attached,t=e.basic,i=e.celled,j=e.children,u=e.className,m=e.collapsing,p=e.color,g=e.columns,f=e.compact,v=e.definition,k=e.fixed,N=e.footerRow,w=e.headerRow,A=e.headerRows,P=e.inverted,S=e.padded,E=e.renderBodyRow,T=e.selectable,I=e.singleLine,z=e.size,R=e.sortable,L=e.stackable,F=e.striped,B=e.structured,H=e.tableData,D=e.textAlign,q=e.unstackable,J=e.verticalAlign,M=Object(r.a)("ui",p,z,Object(s.a)(i,"celled"),Object(s.a)(m,"collapsing"),Object(s.a)(v,"definition"),Object(s.a)(k,"fixed"),Object(s.a)(P,"inverted"),Object(s.a)(T,"selectable"),Object(s.a)(I,"single line"),Object(s.a)(R,"sortable"),Object(s.a)(L,"stackable"),Object(s.a)(F,"striped"),Object(s.a)(B,"structured"),Object(s.a)(q,"unstackable"),Object(s.b)(a,"attached"),Object(s.b)(t,"basic"),Object(s.b)(f,"compact"),Object(s.b)(S,"padded"),Object(s.d)(D),Object(s.f)(J),Object(s.g)(g,"column"),"table",u),W=Object(o.a)(C,e),G=Object(d.a)(C,e);if(!b.a.isNil(j))return l.a.createElement(G,Object(c.a)({},W,{className:M}),j);var K={defaultProps:{cellAs:"th"}},Q=(w||A)&&l.a.createElement(h,null,x.create(w,K),Object(n.a)(A,(function(e){return x.create(e,K)})));return l.a.createElement(G,Object(c.a)({},W,{className:M}),Q,l.a.createElement(O,null,E&&Object(n.a)(H,(function(e,a){return x.create(E(e,a))}))),N&&l.a.createElement(y,null,x.create(N)))}C.handledProps=["as","attached","basic","celled","children","className","collapsing","color","columns","compact","definition","fixed","footerRow","headerRow","headerRows","inverted","padded","renderBodyRow","selectable","singleLine","size","sortable","stackable","striped","structured","tableData","textAlign","unstackable","verticalAlign"],C.defaultProps={as:"table"},C.propTypes={},C.Body=O,C.Cell=g,C.Footer=y,C.Header=h,C.HeaderCell=N,C.Row=x;a.a=C}}]);
//# sourceMappingURL=13.c0505149.chunk.js.map