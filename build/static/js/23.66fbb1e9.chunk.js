(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[23],{745:function(e,t,r){"use strict";r.r(t);var i=r(583),c=r(6),s=r.n(c),a=r(80),h=r(600),n=r.n(h),d=r(642),l=(r(678),r(679),r(52));function j(e){var t=e.country,r=Object(c.useState)("time zone error"),s=Object(i.a)(r,2),h=s[0],j=s[1],m=Object(a.c)((function(e){return e.unit.unit})),_=Object(a.c)((function(e){return e.weather})),g=Object(a.c)((function(e){return Math.round(e.weather.current.temp)})),b=Object(a.c)((function(e){return Math.round(e.weather.current.feels_like)})),u=Object(a.c)((function(e){return Math.round(e.weather.current.wind_speed)})),o=Object(a.c)((function(e){return e.time}));Object(c.useMemo)((function(){var e=new Date,t={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:o.zoneName,timeZoneName:"short"};j(e.toLocaleString(window.navigator.language,t))}),[]);var w=_.current.weather[0].icon,O=d.a[w].path;return Object(l.jsxs)("div",{className:"widget-right weather-right--type1 widget-right--blue",children:[Object(l.jsx)("div",{className:"widget-right__header widget-right__header--blue",children:Object(l.jsx)("div",{className:"widget-right__layout",children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{className:"widget-right__title",children:["Date and Time in ",t.capital," "]}),Object(l.jsxs)("p",{children:[" ",h," "]})]})})}),Object(l.jsxs)("div",{className:"widget-right__header widget-right__header--blue",children:[Object(l.jsx)("div",{className:"widget-right__layout",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"widget-right__title",children:" "}),Object(l.jsxs)("p",{children:[_.current.weather[0].description," "]})]})}),Object(l.jsx)("img",{src:O,width:"128",height:"128",alt:"Weather in ".concat(t.name),className:"weather-right__icon"})]}),Object(l.jsx)("div",{className:"weather-right weather-right--blue",children:Object(l.jsxs)("div",{className:"weather-right__layout",children:[Object(l.jsxs)("div",{className:"weather-right__temperatureMobile",children:[g,Object(l.jsxs)("span",{children:["\xb0","metric"===m?"C":"F"]})]}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"weather-right-card",children:Object(l.jsx)("table",{className:"weather-right__table",children:Object(l.jsxs)("tbody",{children:[Object(l.jsx)("tr",{className:"weather-right__items",children:Object(l.jsx)("th",{colSpan:"2",className:"weather-right__item",children:"Details"})}),Object(l.jsxs)("tr",{className:"weather-right__items",children:[Object(l.jsx)("td",{className:"weather-right__item",children:"Feels like"}),Object(l.jsxs)("td",{className:"weather-right__item",children:[b,Object(l.jsxs)("span",{children:["\xb0","metric"===m?"C":"F"]})]})]}),Object(l.jsxs)("tr",{className:"weather-right__items",children:[Object(l.jsx)("td",{className:"weather-right__item",children:"Clouds"}),Object(l.jsxs)("td",{className:"weather-right__item",children:[_.current.clouds,Object(l.jsx)("span",{children:"%"})]})]}),Object(l.jsxs)("tr",{className:"weather-right__items",children:[Object(l.jsx)("td",{className:"weather-right__item",children:"Wind"}),Object(l.jsxs)("td",{className:"weather-right__item",children:[u,"metric"===m?"m/s":"mph"]})]}),Object(l.jsxs)("tr",{className:"weather-right-card__items",children:[Object(l.jsx)("td",{className:"weather-right__item",children:"Humidity"}),Object(l.jsxs)("td",{className:"weather-right__item",children:[_.current.humidity,"%"]})]}),Object(l.jsxs)("tr",{className:"weather-right-card__items",children:[Object(l.jsx)("td",{className:"weather-right__item",children:"Pressure"}),Object(l.jsxs)("td",{className:"weather-right__item",children:[_.current.pressure," hPa"]})]})]})})})})]})}),Object(l.jsx)("div",{className:"widget-right__footer widget-right__footer--blue",children:Object(l.jsxs)("div",{className:"widget-right__layout",children:[Object(l.jsx)("a",{href:"https://openweathermap.org/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("div",{className:"widget-right__logo_black_small"})}),Object(l.jsx)("div",{className:"widget-right__date",children:n.a.unix(_.current.dt).format("YYYY-MM-DD, h:mm a")})]})})]})}var m=s.a.memo(j);t.default=m}}]);
//# sourceMappingURL=23.66fbb1e9.chunk.js.map