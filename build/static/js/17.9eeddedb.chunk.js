(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[17],{637:function(e,t,a){"use strict";t.a=function(e){switch(!0){case"Antarctica"===e.name.common:return 2;case"Russia"===e.name.common:return 3;case"British Indian Ocean Territory"===e.name.common||"Svalbard and Jan Mayen"===e.name.common:return 4;case"French Guiana"===e.name.common||"Switzerland"===e.name.common||"Congo"===e.name.common||"Spain"===e.name.common||"Central African Republic"===e.name.common||"France"===e.name.common:return 5;case"Oman"===e.name.common||"Yamoussoukro"===e.capital[0]||"Germany"===e.name.common||"Indonesia"===e.name.common||"DR Congo"===e.name.common:return 5.5;case"Mozambique"===e.name.common:return 6;case"Palestine"===e.name.common||"Dominican Republic"===e.name.common||"Croatia"===e.name.common||"Togo"===e.name.common||"Azerbaijan"===e.name.common||"Serbia"===e.name.common||"Jordan"===e.name.common||"Honduras"===e.name.common||"Nicaragua"===e.name.common||"Suriname"===e.name.common:return 6.5;case"Bonaire, Sint Eustatius and Saba"===e.name.official||"United States Virgin Islands"===e.name.common||"Barbados"===e.name.common||"Saint Lucia"===e.name.common||"Montenegro"===e.name.common||"Saint Helena, Ascension and Tristan da Cunha"===e.name.common:return 7;case"Pitcairn"===e.name.common||"Mayotte"===e.name.common||"Martinique"===e.name.common||"Guadeloupe"===e.name.common||"Bahrain"===e.name.common||"R\xe9union"===e.name.common||"South Georgia and the South Sandwich Islands"===e.name.common:return 7.5;case"Antigua and Barbuda"===e.name.common||"\xc5land Islands"===e.name.common:return 8;case"Cura\xe7ao"===e.name.common||"Isle of Man"===e.name.common:return 9;case"Guernsey"===e.name.common||"Jersey"===e.name.common||"Cocos (Keeling) Islands"===e.name.common:return 10;case"Nauru"===e.name.common||"Tuvalu"===e.name.common||"Tokelau"===e.name.common||"Saint Barth\xe9lemy"===e.name.common:return 13;case e.area<1:return 14;case e.area>2&&e.area<5.9:return 13;case e.area>5.9&&e.area<52:return 12;case e.area>52&&e.area<55:return 10.5;case e.area>55&&e.area<179:return 7;case e.area>179&&e.area<4e4:return 6;case e.area>4e4&&e.area<27e4:return 5;case e.area>27e4&&e.area<9629092:return 4;case e.area>9640010&&e.area<1e7:return 3;default:return 0}}},645:function(e,t,a){"use strict";var n=a(5),c=a(6),r=a.n(c),i=a(80),s=a(735),o=a(749),m=a(736),d=a(737),l=a(738),j=a(744),h=a(748),u=a(166),b={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png"},x=a(52);t.a=function(e){var t=e.lt,a=e.lg,O=e.zm,p=e.features,g=Object(i.b)(),f=Object(i.c)((function(e){return e})),y=Object(i.c)((function(e){return e.country.featuresDetails}));console.log("details",y);var w=[t,a];return Object(c.useEffect)((function(){p.map((function(e){return g(Object(u.c)(e.properties.place_id))}))}),[p]),console.log("state",f),Object(x.jsxs)(s.a,{id:"map",center:w,zoom:O,children:[Object(x.jsx)(o.a,Object(n.a)({},b)),y.map((function(e){var t,a,n=e[0].properties,c=n.lat,i=n.lon,s=n.name,o=n.place_id,l="".concat(n.housenumber),u="".concat(n.street),b="".concat(n.city,", ").concat(n.state," ").concat(n.postcode),O=n.website,p=null===(t=n.contact)||void 0===t?void 0:t.phone,g=null===(a=n.accommodation)||void 0===a?void 0:a.stars;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(r.a.Fragment,{children:Object(x.jsx)(m.a,{position:{lat:c,lng:i},children:Object(x.jsx)(d.a,{children:Object(x.jsxs)(j.a,{children:[Object(x.jsxs)(j.a.Content,{children:[g&&g>0?Object(x.jsx)(h.a,{icon:"star",defaultRating:g,maxRating:5,disabled:!0}):null,Object(x.jsxs)(j.a.Header,{children:[s," "]}),p&&Object(x.jsxs)(j.a.Meta,{children:[" ",p," "]}),Object(x.jsxs)(j.a.Description,{children:["undefined"!==l?l:""," ",u&&u]}),Object(x.jsx)(j.a.Description,{children:b&&b})]}),Object(x.jsxs)(j.a.Content,{extra:!0,as:"a",href:O,children:[O," "]})]})})})},o)})})),Object(x.jsx)(l.a,{imperial:!1})]})}},721:function(e,t,a){"use strict";a.r(t);var n=a(576),c=a(6),r=a.n(c),i=a(80),s=a(167),o=a(690),m=a(644),d=a(742),l=a(34),j=a(723),h=a(570),u=a(658),b=a(659),x=a(569),O=a(574),p=a(681);function g(e){var t=e.children,a=e.className,n=e.content,c=e.icon,i=Object(h.a)("divider",a),s=Object(u.a)(g,e),m=Object(b.a)(g,e);return Object(O.a)(c)?Object(O.a)(n)?r.a.createElement(m,Object(l.a)({},s,{className:i}),x.a.isNil(t)?"/":t):r.a.createElement(m,Object(l.a)({},s,{className:i}),n):o.a.create(c,{defaultProps:Object(l.a)({},s,{className:i}),autoGenerateKey:!1})}g.handledProps=["as","children","className","content","icon"],g.propTypes={},g.create=Object(p.d)(g,(function(e){return{icon:e}}));var f=g,y=a(165),w=a(572),v=a(583),M=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).computeElementType=function(){var e=t.props,a=e.link,n=e.onClick;if(a||n)return"a"},t.handleClick=function(e){return Object(w.a)(t.props,"onClick",e,t.props)},t}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,a=e.active,n=e.children,c=e.className,i=e.content,s=e.href,o=Object(h.a)(Object(v.a)(a,"active"),"section",c),m=Object(u.a)(t,this.props),d=Object(b.a)(t,this.props,this.computeElementType);return r.a.createElement(d,Object(l.a)({},m,{className:o,href:s,onClick:this.handleClick}),x.a.isNil(n)?i:n)},t}(c.Component);function _(e){var t=e.children,a=e.className,n=e.divider,c=e.icon,i=e.sections,s=e.size,o=Object(h.a)("ui",s,"breadcrumb",a),m=Object(u.a)(_,e),d=Object(b.a)(_,e);if(!x.a.isNil(t))return r.a.createElement(d,Object(l.a)({},m,{className:o}),t);var O=[];return Object(j.a)(i,(function(e,t){var a=M.create(e);if(O.push(a),t!==i.length-1){var r=a.key+"_divider"||!1;O.push(f.create({content:n,icon:c,key:r}))}})),r.a.createElement(d,Object(l.a)({},m,{className:o}),O)}M.handledProps=["active","as","children","className","content","href","link","onClick"],M.propTypes={},M.create=Object(p.d)(M,(function(e){return{content:e,link:!0}})),_.handledProps=["as","children","className","divider","icon","sections","size"],_.propTypes={},_.Divider=f,_.Section=M;var N=_,A=a(719),C=a(685),k=a(744),S=a(170),F=a(171),D=a(72),I=a(166),L=a(637),E=a(133),z=a(599),T=a.n(z),B=a(640),R=(a(677),a(678),a(52));var G=function(e){var t=e.country,a=Object(i.c)((function(e){return e.unit.unit})),n=Object(i.c)((function(e){return e.weather})),c=n.current.weather[0].icon,r=B.a[c].path;return Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:"widget-left-menu widget-left-menu--brown",children:Object(R.jsxs)("div",{className:"widget-left-menu__layout",children:[Object(R.jsx)("h2",{className:"widget-left-menu__header",children:t.capital[0]}),Object(R.jsx)("a",{href:"https://openweathermap.org/",target:"_blank",rel:"noreferrer",children:Object(R.jsx)("div",{className:"widget-left-menu__logo_black"})})]})}),Object(R.jsxs)("div",{children:[Object(R.jsxs)(m.a,{floated:"left",children:[Object(R.jsxs)("div",{className:"weather-left-card__row1",children:[Object(R.jsx)("img",{src:r,alt:"Weather in ".concat(t.name.common),className:"weather-left-card__img"}),Object(R.jsx)("div",{className:"weather-left-card__col",children:Object(R.jsxs)("p",{className:"weather-left-card__number",children:[Math.round(n.current.temp),Object(R.jsxs)("span",{children:["\xb0","metric"===a?"C":"F"]})]})})]}),Object(R.jsxs)("div",{className:"weather-left-card__row2",children:[Object(R.jsx)("p",{className:"weather-left-card__means",children:n.current.weather[0].description}),Object(R.jsxs)("p",{className:"weather-left-card__wind",children:["Wind: ",Math.round(n.current.wind_speed),"metric"===a?" m/s":" mph"]})]})]}),Object(R.jsx)(m.a,{id:"weather",floated:"right",children:Object(R.jsxs)("div",{className:"widget-left__calendar",children:[Object(R.jsxs)("ul",{className:"calendar",children:[Object(R.jsxs)("li",{className:"calendar__item",children:["Today",Object(R.jsx)("br",{}),T.a.unix(n.current.dt).format("MMM D"),Object(R.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(n.current.weather[0].icon,".png"),width:"32",height:"32",alt:"Today"})]}),Object(R.jsxs)("li",{className:"calendar__item",children:[T.a.unix(n.daily[1].dt).format("ddd"),Object(R.jsx)("br",{})," ",T.a.unix(n.daily[1].dt).format("MMM D"),Object(R.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(n.daily[1].weather[0].icon,".png"),width:"32",height:"32",alt:T.a.unix(n.daily[1].dt).format("ddd")})]}),Object(R.jsxs)("li",{className:"calendar__item",children:[T.a.unix(n.daily[2].dt).format("ddd"),Object(R.jsx)("br",{})," ",T.a.unix(n.daily[2].dt).format("MMM D"),Object(R.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(n.daily[2].weather[0].icon,".png"),width:"32",height:"32",alt:T.a.unix(n.daily[2].dt).format("ddd")})]}),Object(R.jsxs)("li",{className:"calendar__item",children:[T.a.unix(n.daily[3].dt).format("ddd"),Object(R.jsx)("br",{})," ",T.a.unix(n.daily[3].dt).format("MMM D"),Object(R.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(n.daily[3].weather[0].icon,".png"),width:"32",height:"32",alt:T.a.unix(n.daily[3].dt).format("ddd")})]}),Object(R.jsxs)("li",{className:"calendar__item",children:[T.a.unix(n.daily[4].dt).format("ddd"),Object(R.jsx)("br",{})," ",T.a.unix(n.daily[4].dt).format("MMM D"),Object(R.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(n.daily[4].weather[0].icon,".png"),width:"32",height:"32",alt:T.a.unix(n.daily[4].dt).format("ddd")})]}),Object(R.jsxs)("li",{className:"calendar__item",children:[T.a.unix(n.daily[5].dt).format("ddd"),Object(R.jsx)("br",{})," ",T.a.unix(n.daily[5].dt).format("MMM D"),Object(R.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(n.daily[5].weather[0].icon,".png"),width:"32",height:"32",alt:T.a.unix(n.daily[5].dt).format("ddd")})]}),Object(R.jsxs)("li",{className:"calendar__item",children:[T.a.unix(n.daily[6].dt).format("ddd"),Object(R.jsx)("br",{})," ",T.a.unix(n.daily[6].dt).format("MMM D"),Object(R.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(n.daily[6].weather[0].icon,".png"),width:"32",height:"32",alt:T.a.unix(n.daily[6].dt).format("ddd")})]}),Object(R.jsxs)("li",{className:"calendar__item",children:[T.a.unix(n.daily[7].dt).format("ddd"),Object(R.jsx)("br",{})," ",T.a.unix(n.daily[7].dt).format("MMM D"),Object(R.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(n.daily[7].weather[0].icon,".png"),width:"32",height:"32",alt:T.a.unix(n.daily[7].dt).format("ddd")})]})]}),Object(R.jsx)("div",{id:"graphic2",className:"widget-left__graphic",children:Object(R.jsxs)("svg",{className:"axis",width:"420",height:"79",fill:"#FEB020",children:[Object(R.jsx)("g",{children:Object(R.jsx)("path",{d:"M15,23.615384615384613L72.14285714285714,30.42307692307692L129.28571428571428,30.42307692307692L186.42857142857142,21.346153846153847L243.57142857142856,41.76923076923077L300.7142857142857,44.03846153846154L357.85714285714283,39.5L415,34.96153846153847L415,53.11538461538461L357.85714285714283,53.11538461538461L300.7142857142857,57.65384615384615L243.57142857142856,53.11538461538461L186.42857142857142,48.57692307692308L129.28571428571428,50.84615384615385L72.14285714285714,50.84615384615385L15,44.03846153846154L15,23.615384615384613"})}),Object(R.jsxs)("text",{x:"15",y:"19.115384615384613",textAnchor:"middle",children:[Math.round(n.daily[0].temp.max),"\xb0"]}),Object(R.jsxs)("text",{x:"15",y:"61.03846153846154",textAnchor:"middle",children:[Math.round(n.daily[0].temp.min),"\xb0"]}),Object(R.jsxs)("text",{x:"72.14285714285714",y:"25.92307692307692",textAnchor:"middle",children:[Math.round(n.daily[1].temp.max),"\xb0"]}),Object(R.jsxs)("text",{x:"72.14285714285714",y:"67.84615384615384",textAnchor:"middle",children:[Math.round(n.daily[1].temp.min),"\xb0"]}),Object(R.jsxs)("text",{x:"129.28571428571428",y:"25.92307692307692",textAnchor:"middle",children:[Math.round(n.daily[2].temp.max),"\xb0"]}),Object(R.jsxs)("text",{x:"129.28571428571428",y:"67.84615384615384",textAnchor:"middle",children:[Math.round(n.daily[2].temp.min),"\xb0"]}),Object(R.jsxs)("text",{x:"186.42857142857142",y:"16.846153846153847",textAnchor:"middle",children:[Math.round(n.daily[3].temp.max),"\xb0"]}),Object(R.jsxs)("text",{x:"186.42857142857142",y:"65.57692307692308",textAnchor:"middle",children:[Math.round(n.daily[3].temp.min),"\xb0"]}),Object(R.jsxs)("text",{x:"243.57142857142856",y:"37.26923076923077",textAnchor:"middle",children:[Math.round(n.daily[4].temp.max),"\xb0"]}),Object(R.jsxs)("text",{x:"243.57142857142856",y:"70.11538461538461",textAnchor:"middle",children:[Math.round(n.daily[4].temp.min),"\xb0"]}),Object(R.jsxs)("text",{x:"300.7142857142857",y:"39.53846153846154",textAnchor:"middle",children:[Math.round(n.daily[5].temp.max),"\xb0"]}),Object(R.jsxs)("text",{x:"300.7142857142857",y:"74.65384615384616",textAnchor:"middle",children:[Math.round(n.daily[5].temp.min),"\xb0"]}),Object(R.jsxs)("text",{x:"357.85714285714283",y:"35",textAnchor:"middle",children:[Math.round(n.daily[6].temp.max),"\xb0"]}),Object(R.jsxs)("text",{x:"357.85714285714283",y:"70.11538461538461",textAnchor:"middle",children:[Math.round(n.daily[6].temp.min),"\xb0"]}),Object(R.jsxs)("text",{x:"415",y:"30.461538461538467",textAnchor:"middle",children:[Math.round(n.daily[7].temp.max),"\xb0"]}),Object(R.jsxs)("text",{x:"415",y:"70.11538461538461",textAnchor:"middle",children:[Math.round(n.daily[7].temp.min),"\xb0"]})]})})]})})]})]})},P=a(645),J=Object(E.a)((function(){return a.e(20).then(a.bind(null,679))})),W=Object(E.a)((function(){return a.e(19).then(a.bind(null,739))})),H=function(e){var t=e.data,a=Object(c.useState)(!0),r=Object(n.a)(a,2),l=r[0],j=r[1],h=Object(c.useState)("Map"),u=Object(n.a)(h,2),b=u[0],x=u[1],O=Object(c.useState)([]),p=Object(n.a)(O,2),g=p[0],f=(p[1],Object(c.useState)([])),y=Object(n.a)(f,2),w=(y[0],y[1],Object(c.useState)([])),v=Object(n.a)(w,2),M=(v[0],v[1],Object(i.b)()),_=void 0===t.capitalInfo.latlng?t.latlng:t.capitalInfo.latlng,E=(Object(i.c)((function(e){return e})),Object(i.c)((function(e){return e.country.news.articles}))),z=Object(i.c)((function(e){return e.unit.unit})),T=Object(i.c)((function(e){if(e.country.features)return e.country.features.features}));Object(c.useEffect)((function(){j(!1),M(Object(S.b)({location:_,unit:z})),M(Object(F.b)({location:_}))}),[z]);var B=function(e,t){var a=t.name;x(a)},H=function(e){M(Object(I.f)()),"All"===e?M(Object(D.e)()):"region"===e?M(Object(D.c)(t.region)):"subregion"===e&&M(Object(D.d)(t.subregion)),j(!0)};return l?Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(o.a,{loading:!0,name:"circle notch"})}):Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(m.a,{attached:"bottom",children:[Object(R.jsx)(d.a,{id:"breadcrumb",secondary:!0,children:Object(R.jsxs)(N,{size:"small",children:[Object(R.jsx)(N.Section,{link:!0,onClick:function(){return H("All")},children:"All"},"All"),Object(R.jsx)(N.Divider,{icon:"right chevron"}),Object(R.jsx)(N.Section,{link:!0,onClick:function(){return H("region")},children:t.region},t.region),""!==t.subregion?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(N.Divider,{icon:"right chevron"}),Object(R.jsx)(N.Section,{link:!0,onClick:function(){return H("subregion")},children:t.subregion},t.subregion),Object(R.jsx)(N.Divider,{icon:"right chevron"}),Object(R.jsx)(N.Section,{active:!0,children:t.name.common},t.name.common)]}):Object(R.jsx)(R.Fragment,{})]})}),Object(R.jsxs)(d.a,{attached:!0,tabular:!0,className:"ui menu2",children:[E.length>0?Object(R.jsx)(d.a.Item,{name:"News",active:"News"===b,onClick:B}):Object(R.jsx)(R.Fragment,{}),Object(R.jsx)(d.a.Item,{name:"Map",active:"Map"===b,onClick:B}),Object(R.jsx)(d.a.Item,{name:"Flag",active:"Flag"===b,onClick:B})," ",Object(R.jsx)(d.a.Item,{name:"CoatOfArms",active:"CoatOfArms"===b,onClick:B}),Object(R.jsx)(d.a.Item,{name:"Weather",active:"Weather"===b,onClick:B})]}),E&&E.length>0&&"News"===b?Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(J,{})}):Object(R.jsx)(R.Fragment,{}),"Map"===b?Object(R.jsx)(R.Fragment,{children:T&&Object(R.jsx)(P.a,{lt:_[0],lg:_[1],zm:Object(L.a)(t),geo:g,features:T})}):Object(R.jsx)(R.Fragment,{}),"Flag"===b?Object(R.jsx)(A.a,{id:"flag",centered:!0,src:s.isIE?t.flags.png:t.flags.svg,alt:"country flag",size:"medium",bordered:!0}):Object(R.jsx)(R.Fragment,{}),"CoatOfArms"===b?Object(R.jsx)(R.Fragment,{children:0===Object.entries(t.coatOfArms).length?Object(R.jsx)(C.a,{children:"No image available"}):Object(R.jsx)(A.a,{id:"coatOfArms",centered:!0,src:s.isIE?t.coatOfArms.png:t.coatOfArms.svg,alt:"coat of arms",size:"medium",bordered:!0})}):Object(R.jsx)(R.Fragment,{}),"Weather"===b?Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(k.a,{id:"CiaCard",fluid:!0,children:s.isIE?Object(R.jsx)(G,{country:t}):Object(R.jsx)(W,{country:t})})}):Object(R.jsx)(R.Fragment,{})]})})},q=r.a.memo(H);t.default=q}}]);
//# sourceMappingURL=17.9eeddedb.chunk.js.map