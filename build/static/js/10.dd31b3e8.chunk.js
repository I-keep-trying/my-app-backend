(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[10,20],{571:function(e,t,n){"use strict";var a=n(615),c=n(594),r=n(602),o=Object(c.a)((function(e,t){return Object(r.a)(e)?Object(a.a)(e,t):[]}));t.a=o},576:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(168);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,c,r=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(s){i=!0,c=s}finally{try{o||null==n.return||n.return()}finally{if(i)throw c}}return r}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},602:function(e,t,n){"use strict";var a=n(580),c=n(579);t.a=function(e){return Object(c.a)(e)&&Object(a.a)(e)}},615:function(e,t,n){"use strict";var a=n(617),c=n(630),r=n(631),o=n(597),i=n(627),s=n(612);t.a=function(e,t,n,l){var u=-1,m=c.a,d=!0,j=e.length,b=[],O=t.length;if(!j)return b;n&&(t=Object(o.a)(t,Object(i.a)(n))),l?(m=r.a,d=!1):t.length>=200&&(m=s.a,d=!1,t=new a.a(t));e:for(;++u<j;){var p=e[u],h=null==n?p:n(p);if(p=l||0!==p?p:0,d&&h===h){for(var f=O;f--;)if(t[f]===h)continue e;b.push(p)}else m(t,h,l)||b.push(p)}return b}},637:function(e,t,n){"use strict";t.a=function(e){switch(!0){case"Antarctica"===e.name.common:return 2;case"Russia"===e.name.common:return 3;case"British Indian Ocean Territory"===e.name.common||"Svalbard and Jan Mayen"===e.name.common:return 4;case"French Guiana"===e.name.common||"Switzerland"===e.name.common||"Congo"===e.name.common||"Spain"===e.name.common||"Central African Republic"===e.name.common||"France"===e.name.common:return 5;case"Oman"===e.name.common||"Yamoussoukro"===e.capital[0]||"Germany"===e.name.common||"Indonesia"===e.name.common||"DR Congo"===e.name.common:return 5.5;case"Mozambique"===e.name.common:return 6;case"Palestine"===e.name.common||"Dominican Republic"===e.name.common||"Croatia"===e.name.common||"Togo"===e.name.common||"Azerbaijan"===e.name.common||"Serbia"===e.name.common||"Jordan"===e.name.common||"Honduras"===e.name.common||"Nicaragua"===e.name.common||"Suriname"===e.name.common:return 6.5;case"Bonaire, Sint Eustatius and Saba"===e.name.official||"United States Virgin Islands"===e.name.common||"Barbados"===e.name.common||"Saint Lucia"===e.name.common||"Montenegro"===e.name.common||"Saint Helena, Ascension and Tristan da Cunha"===e.name.common:return 7;case"Pitcairn"===e.name.common||"Mayotte"===e.name.common||"Martinique"===e.name.common||"Guadeloupe"===e.name.common||"Bahrain"===e.name.common||"R\xe9union"===e.name.common||"South Georgia and the South Sandwich Islands"===e.name.common:return 7.5;case"Antigua and Barbuda"===e.name.common||"\xc5land Islands"===e.name.common:return 8;case"Cura\xe7ao"===e.name.common||"Isle of Man"===e.name.common:return 9;case"Guernsey"===e.name.common||"Jersey"===e.name.common||"Cocos (Keeling) Islands"===e.name.common:return 10;case"Nauru"===e.name.common||"Tuvalu"===e.name.common||"Tokelau"===e.name.common||"Saint Barth\xe9lemy"===e.name.common:return 13;case e.area<1:return 14;case e.area>2&&e.area<5.9:return 13;case e.area>5.9&&e.area<52:return 12;case e.area>52&&e.area<55:return 10.5;case e.area>55&&e.area<179:return 7;case e.area>179&&e.area<4e4:return 6;case e.area>4e4&&e.area<27e4:return 5;case e.area>27e4&&e.area<9629092:return 4;case e.area>9640010&&e.area<1e7:return 3;default:return 0}}},645:function(e,t,n){"use strict";var a=n(5),c=n(6),r=n.n(c),o=n(80),i=n(735),s=n(749),l=n(736),u=n(737),m=n(738),d=n(744),j=n(748),b=n(166),O={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png"},p=n(52);t.a=function(e){var t=e.lt,n=e.lg,h=e.zm,f=e.features,v=Object(o.b)(),x=Object(o.c)((function(e){return e})),g=Object(o.c)((function(e){return e.country.featuresDetails}));console.log("details",g);var y=[t,n];return Object(c.useEffect)((function(){f.map((function(e){return v(Object(b.c)(e.properties.place_id))}))}),[f]),console.log("state",x),Object(p.jsxs)(i.a,{id:"map",center:y,zoom:h,children:[Object(p.jsx)(s.a,Object(a.a)({},O)),g.map((function(e){var t,n,a=e[0].properties,c=a.lat,o=a.lon,i=a.name,s=a.place_id,m="".concat(a.housenumber),b="".concat(a.street),O="".concat(a.city,", ").concat(a.state," ").concat(a.postcode),h=a.website,f=null===(t=a.contact)||void 0===t?void 0:t.phone,v=null===(n=a.accommodation)||void 0===n?void 0:n.stars;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)(l.a,{position:{lat:c,lng:o},children:Object(p.jsx)(u.a,{children:Object(p.jsxs)(d.a,{children:[Object(p.jsxs)(d.a.Content,{children:[v&&v>0?Object(p.jsx)(j.a,{icon:"star",defaultRating:v,maxRating:5,disabled:!0}):null,Object(p.jsxs)(d.a.Header,{children:[i," "]}),f&&Object(p.jsxs)(d.a.Meta,{children:[" ",f," "]}),Object(p.jsxs)(d.a.Description,{children:["undefined"!==m?m:""," ",b&&b]}),Object(p.jsx)(d.a.Description,{children:O&&O})]}),Object(p.jsxs)(d.a.Content,{extra:!0,as:"a",href:h,children:[h," "]})]})})})},s)})})),Object(p.jsx)(m.a,{imperial:!1})]})}},679:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(6),r=n.n(c),o=n(80),i=n(744),s=n(719),l=n(599),u=n.n(l),m=n(167),d=n(52),j=function(){var e=Object(o.c)((function(e){return e.country.news.articles})),t=/\[\+\d+\schars\]/g,n=e.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{content:e.content.replace(t,"")})}));return Object(d.jsxs)(d.Fragment,{children:[" ",m.isMobile?Object(d.jsx)(d.Fragment,{}):Object(d.jsx)(i.a,{id:"card",fluid:!0,content:"News obtained from newsapi.org. Relevance to selected country is not guaranteed."}),Object(d.jsxs)(i.a.Group,{itemsPerRow:m.isMobile?1:3,children:[m.isMobile?Object(d.jsx)(i.a,{id:"card-mobile",fluid:!0,content:"News obtained from newsapi.org. Relevance to selected country is not guaranteed."}):Object(d.jsx)(d.Fragment,{}),null===n||void 0===n?void 0:n.map((function(e,t){console.log("item",e);var n=u()(e.publishedAt).format("YYYY-MM-DD LT");return Object(d.jsxs)(i.a,{raised:!0,as:"a",href:e.url,children:[Object(d.jsx)(s.a,{src:e.urlToImage}),Object(d.jsxs)(i.a.Content,{children:[Object(d.jsxs)(i.a.Header,{children:[e.title," "]}),Object(d.jsxs)(i.a.Meta,{children:[n," "]}),e.author?Object(d.jsxs)(i.a.Meta,{children:["Author: ",e.author," "]}):Object(d.jsx)(d.Fragment,{}),Object(d.jsxs)(i.a.Meta,{children:["Source: ",e.source.name," "]}),Object(d.jsxs)(i.a.Description,{children:[e.content," "]})]})]},t)}))]})]})},b=r.a.memo(j);t.default=b},718:function(e,t,n){"use strict";n.r(t);var a=n(576),c=n(6),r=n.n(c),o=n(80),i=n(644),s=n(34),l=n(570),u=n(583),m=n(658),d=n(659),j=n(569),b=n(690),O=n(719),p=n(681);function h(e){var t=e.children,n=e.className,a=e.content,c=Object(l.a)("sub header",n),o=Object(m.a)(h,e),i=Object(d.a)(h,e);return r.a.createElement(i,Object(s.a)({},o,{className:c}),j.a.isNil(t)?a:t)}h.handledProps=["as","children","className","content"],h.propTypes={},h.create=Object(p.d)(h,(function(e){return{content:e}}));var f=h;function v(e){var t=e.children,n=e.className,a=e.content,c=Object(l.a)("content",n),o=Object(m.a)(v,e),i=Object(d.a)(v,e);return r.a.createElement(i,Object(s.a)({},o,{className:c}),j.a.isNil(t)?a:t)}v.handledProps=["as","children","className","content"],v.propTypes={};var x=v;function g(e){var t=e.attached,n=e.block,a=e.children,c=e.className,o=e.color,i=e.content,p=e.disabled,h=e.dividing,v=e.floated,y=e.icon,C=e.image,N=e.inverted,T=e.size,w=e.sub,k=e.subheader,A=e.textAlign,I=Object(l.a)("ui",o,T,Object(u.a)(n,"block"),Object(u.a)(p,"disabled"),Object(u.a)(h,"dividing"),Object(u.e)(v,"floated"),Object(u.a)(!0===y,"icon"),Object(u.a)(!0===C,"image"),Object(u.a)(N,"inverted"),Object(u.a)(w,"sub"),Object(u.b)(t,"attached"),Object(u.d)(A),"header",c),S=Object(m.a)(g,e),P=Object(d.a)(g,e);if(!j.a.isNil(a))return r.a.createElement(P,Object(s.a)({},S,{className:I}),a);var M=b.a.create(y,{autoGenerateKey:!1}),E=O.a.create(C,{autoGenerateKey:!1}),F=f.create(k,{autoGenerateKey:!1});return M||E?r.a.createElement(P,Object(s.a)({},S,{className:I}),M||E,(i||F)&&r.a.createElement(x,null,i,F)):r.a.createElement(P,Object(s.a)({},S,{className:I}),i,F)}g.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],g.propTypes={},g.Content=x,g.Subheader=f;var y=g,C=n(165),N=n(577),T=n(572),w=n(571),k=n(587),A=(n(573),n(675)),I=n(574),S=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))||this).handleClick=function(e){return Object(T.a)(t.props,"onClick",e,t.props)},t}return Object(C.a)(t,e),t.prototype.render=function(){var e=this.props,n=e.active,a=e.children,c=e.className,o=e.content,i=e.icon,O=Object(l.a)(Object(u.a)(n,"active"),"title",c),p=Object(m.a)(t,this.props),h=Object(d.a)(t,this.props),f=Object(I.a)(i)?"dropdown":i;return j.a.isNil(a)?r.a.createElement(h,Object(s.a)({},p,{className:O,onClick:this.handleClick}),b.a.create(f,{autoGenerateKey:!1}),o):r.a.createElement(h,Object(s.a)({},p,{className:O,onClick:this.handleClick}),a)},t}(c.Component);function P(e){var t=e.active,n=e.children,a=e.className,c=e.content,o=Object(l.a)("content",Object(u.a)(t,"active"),a),i=Object(m.a)(P,e),b=Object(d.a)(P,e);return r.a.createElement(b,Object(s.a)({},i,{className:o}),j.a.isNil(n)?c:n)}S.handledProps=["active","as","children","className","content","icon","index","onClick"],S.propTypes={},S.create=Object(p.d)(S,(function(e){return{content:e}})),P.handledProps=["active","as","children","className","content"],P.propTypes={},P.create=Object(p.d)(P,(function(e){return{content:e}}));var M=P,E=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))||this).handleTitleOverrides=function(e){return{onClick:function(n,a){Object(T.a)(e,"onClick",n,a),Object(T.a)(t.props,"onTitleClick",n,a)}}},t}return Object(C.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.active,n=e.content,a=e.index,c=e.title;return r.a.createElement(r.a.Fragment,null,S.create(c,{autoGenerateKey:!1,defaultProps:{active:t,index:a},overrideProps:this.handleTitleOverrides}),M.create(n,{autoGenerateKey:!1,defaultProps:{active:t}}))},t}(c.Component);E.handledProps=["active","content","index","onTitleClick","title"],E.propTypes={},E.create=Object(p.d)(E,null);var F=E,G=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))||this).computeNewIndex=function(e){var n=t.props.exclusive,a=t.state.activeIndex;return n?e===a?-1:e:Object(k.a)(a,e)?Object(w.a)(a,e):[].concat(a,[e])},t.handleTitleClick=function(e,n){var a=n.index;t.setState({activeIndex:t.computeNewIndex(a)}),Object(T.a)(t.props,"onTitleClick",e,n)},t.isIndexActive=function(e){var n=t.props.exclusive,a=t.state.activeIndex;return n?a===e:Object(k.a)(a,e)},t}Object(C.a)(t,e);var n=t.prototype;return n.getInitialAutoControlledState=function(e){return{activeIndex:e.exclusive?-1:[]}},n.componentDidMount=function(){0},n.componentDidUpdate=function(){0},n.render=function(){var e=this,n=this.props,a=n.className,c=n.children,o=n.panels,i=Object(l.a)("accordion",a),u=Object(m.a)(t,this.props),b=Object(d.a)(t,this.props);return r.a.createElement(b,Object(s.a)({},u,{className:i}),j.a.isNil(c)?Object(N.a)(o,(function(t,n){return F.create(t,{defaultProps:{active:e.isIndexActive(n),index:n,onTitleClick:e.handleTitleClick}})})):c)},t}(A.a);function z(e){var t=e.className,n=e.fluid,a=e.inverted,c=e.styled,o=Object(l.a)("ui",Object(u.a)(n,"fluid"),Object(u.a)(a,"inverted"),Object(u.a)(c,"styled"),t),i=Object(m.a)(z,e);return r.a.createElement(G,Object(s.a)({},i,{className:o}))}G.handledProps=["activeIndex","as","children","className","defaultActiveIndex","exclusive","onTitleClick","panels"],G.propTypes={},G.defaultProps={exclusive:!0},G.autoControlledProps=["activeIndex"],G.create=Object(p.d)(G,(function(e){return{content:e}})),z.handledProps=["className","fluid","inverted","styled"],z.propTypes={},z.Accordion=G,z.Content=M,z.Panel=F,z.Title=S;var D=z,R=n(685),K=n(744),B=n(170),J=n(171),Y=n(637),H=n(133),L=n(679),_=n(645),q=n(52),U=Object(H.a)((function(){return Promise.all([n.e(4),n.e(21)]).then(n.bind(null,740))})),V=function(e){var t=e.data,n=Object(c.useState)(0),r=Object(a.a)(n,2),s=r[0],l=r[1],u=Object(o.b)(),m=Object(o.c)((function(e){return e.weather})),d=Object(o.c)((function(e){return e.unit.unit})),j=void 0===t.capitalInfo.latlng?t.latlng:t.capitalInfo.latlng;Object(c.useEffect)((function(){u(Object(B.b)({location:j,unit:d})),u(Object(J.b)({location:j}))}),[d]);var p=Object(o.c)((function(e){if(e.country.features)return e.country.features.features})),h=function(e,t){var n=t.index;l(s===n?-1:n)};return Object.entries(m).length<1?Object(q.jsx)(q.Fragment,{children:"Loading..."}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(i.a,{inverted:!0,textAlign:"center",children:Object(q.jsx)(y,{children:t.name.common})}),Object(q.jsxs)(D,{fluid:!0,children:[Object(q.jsxs)(D.Title,{active:0===s,index:0,onClick:h,children:[Object(q.jsx)(b.a,{name:"dropdown"}),"News"]}),Object(q.jsxs)(D.Content,{active:0===s,children:[Object(q.jsx)(i.a,{id:"map-segment",children:Object(q.jsx)(L.default,{})})," "]}),Object(q.jsxs)(D.Title,{active:1===s,index:1,onClick:h,children:[Object(q.jsx)(b.a,{name:"dropdown"}),"Map"]}),Object(q.jsxs)(D.Content,{active:1===s,children:[Object(q.jsx)(i.a,{id:"map-segment",children:Object(q.jsx)(_.a,{lt:t.latlng[0],lg:t.latlng[1],zm:Object(Y.a)(t),features:p})})," "]}),Object(q.jsxs)(D.Title,{active:2===s,index:2,onClick:h,children:[Object(q.jsx)(b.a,{name:"dropdown"}),"Flag"]}),Object(q.jsx)(D.Content,{active:2===s,children:Object(q.jsx)(O.a,{id:"flag",centered:!0,src:t.flags.svg,alt:"country flag",size:"medium",bordered:!0})}),Object(q.jsxs)(D.Title,{active:3===s,index:3,onClick:h,children:[Object(q.jsx)(b.a,{name:"dropdown"}),"Coat Of Arms"]}),Object(q.jsx)(D.Content,{active:3===s,children:Object(q.jsx)(q.Fragment,{children:0===Object.entries(t.coatOfArms).length?Object(q.jsx)(R.a,{children:"No image available"}):Object(q.jsx)(O.a,{id:"coatOfArms",centered:!0,src:t.coatOfArms.svg,alt:"coat of arms",size:"medium",bordered:!0})})}),Object(q.jsxs)(D.Title,{active:4===s,index:4,onClick:h,children:[Object(q.jsx)(b.a,{name:"dropdown"}),"Weather"]}),Object(q.jsx)(D.Content,{active:4===s,children:Object(q.jsx)(K.a,{id:"CiaCard",fluid:!0,children:Object(q.jsx)(U,{country:t})})})]})]})},W=r.a.memo(V);t.default=W}}]);
//# sourceMappingURL=10.dd31b3e8.chunk.js.map