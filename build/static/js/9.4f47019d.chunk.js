(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[9],{696:function(e,t,a){},697:function(e,t,a){},707:function(e,t,a){"use strict";a.r(t);var i=a(672),d=a(1),c=a.n(d),r=a(120),s=a(228),n=a(682),l=a(694),h=a.n(l),m={"01d":{id:"01d",path:a.p+"static/media/day.d946e0d3.svg",alt:"clear day"},"01n":{id:"01n",path:a.p+"static/media/night.3a5b9f57.svg",alt:"clear night"},"02d":{id:"02d",path:a.p+"static/media/cloudy-day-1.485db1d7.svg",alt:"cloudy day"},"02n":{id:"02n",path:a.p+"static/media/cloudy-night-1.31db38af.svg",alt:"cloudy night"},"03d":{id:"03d",path:a.p+"static/media/clouds-scattered-day.4ebe4308.svg",alt:"scattered clouds day"},"03n":{id:"03n",path:a.p+"static/media/clouds-scattered-night.b2fdabaa.svg",alt:"scattered clouds night"},"04d":{id:"04d",path:a.p+"static/media/broken-clouds-day.93d9e05d.svg",alt:"broken clouds day"},"04n":{id:"04n",path:a.p+"static/media/broken-clouds-night.0ee7ff13.svg",alt:"broken clouds night"},"09d":{id:"09d",path:a.p+"static/media/rainy-1.ca51ee00.svg",alt:"shower day"},"09n":{id:"09n",path:a.p+"static/media/rainy-4.9145687f.svg",alt:"shower night"},"10d":{id:"10d",path:a.p+"static/media/rainy-3.c87f2444.svg",alt:"rainy day"},"10n":{id:"10n",path:a.p+"static/media/rainy-5.3123af7a.svg",alt:"rainy night"},"11d":{id:"11d",path:a.p+"static/media/thunder-day.3d169914.svg",alt:"thunder day"},"11n":{id:"11n",path:a.p+"static/media/thunder-night.f31c3284.svg",alt:"thunder night"},"13d":{id:"13d",path:a.p+"static/media/snowy-3.21145f25.svg",alt:"snowy day"},"13n":{id:"13n",path:a.p+"static/media/snowy-6.f096b2f1.svg",alt:"snowy night"},"50d":{id:"50d",path:a.p+"static/media/mist-day.b3406414.svg",alt:"mist day"},"50n":{id:"50n",path:a.p+"static/media/mist-night.b3894aee.svg",alt:"mist night"}},j=(a(696),a(697),a(29));function x(e){var t=e.country,a=Object(d.useState)("time zone error"),c=Object(i.a)(a,2),l=c[0],x=c[1],o=Object(r.c)((function(e){return e.unit.unit})),g=Object(r.c)((function(e){return e.weather})),b=Object(r.c)((function(e){return e.time}));Object(d.useMemo)((function(){var e=new Date,t={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:b.zoneName,timeZoneName:"short"};x(e.toLocaleString(window.navigator.language,t))}),[]);var u=g.current.weather[0].icon,p=m[u].path;return s.isMobile?Object(j.jsxs)("div",{className:"widget-right weather-right--type1 widget-right--blue",children:[Object(j.jsx)("div",{className:"widget-right__header widget-right__header--blue",children:Object(j.jsx)("div",{className:"widget-right__layout",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("h2",{className:"widget-right__title",children:["Date and Time in ",t.capital," "]}),Object(j.jsxs)("p",{children:[" ",l," "]})]})})}),Object(j.jsxs)("div",{className:"widget-right__header widget-right__header--blue",children:[Object(j.jsx)("div",{className:"widget-right__layout",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"widget-right__title",children:"Weather "}),Object(j.jsxs)("p",{children:[g.current.weather[0].description," "]})]})}),Object(j.jsx)("img",{src:p,width:"128",height:"128",alt:"Weather in ".concat(t.name),className:"weather-right__icon"})]}),Object(j.jsx)("div",{className:"weather-right weather-right--blue",children:Object(j.jsxs)("div",{className:"weather-right__layout",children:[Object(j.jsxs)("div",{className:"weather-right__temperatureMobile",children:[Math.round(g.current.temp),Object(j.jsxs)("span",{children:["\xb0","metric"===o?"C":"F"]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"weather-right-card",children:Object(j.jsx)("table",{className:"weather-right__table",children:Object(j.jsxs)("tbody",{children:[Object(j.jsx)("tr",{className:"weather-right__items",children:Object(j.jsx)("th",{colSpan:"2",className:"weather-right__item",children:"Details"})}),Object(j.jsxs)("tr",{className:"weather-right__items",children:[Object(j.jsx)("td",{className:"weather-right__item",children:"Feels like"}),Object(j.jsxs)("td",{className:"weather-right__item",children:[Math.round(g.current.feels_like),Object(j.jsxs)("span",{children:["\xb0","metric"===o?"C":"F"]})]})]}),Object(j.jsxs)("tr",{className:"weather-right__items",children:[Object(j.jsx)("td",{className:"weather-right__item",children:"Clouds"}),Object(j.jsxs)("td",{className:"weather-right__item",children:[g.current.clouds,Object(j.jsx)("span",{children:"%"})]})]}),Object(j.jsxs)("tr",{className:"weather-right__items",children:[Object(j.jsx)("td",{className:"weather-right__item",children:"Wind"}),Object(j.jsxs)("td",{className:"weather-right__item",children:[Math.round(g.current.wind_speed),"metric"===o?"m/s":"mph"]})]}),Object(j.jsxs)("tr",{className:"weather-right-card__items",children:[Object(j.jsx)("td",{className:"weather-right__item",children:"Humidity"}),Object(j.jsxs)("td",{className:"weather-right__item",children:[g.current.humidity,"%"]})]}),Object(j.jsxs)("tr",{className:"weather-right-card__items",children:[Object(j.jsx)("td",{className:"weather-right__item",children:"Pressure"}),Object(j.jsxs)("td",{className:"weather-right__item",children:[g.current.pressure," hPa"]})]})]})})})})]})}),Object(j.jsx)("div",{className:"widget-right__footer widget-right__footer--blue",children:Object(j.jsxs)("div",{className:"widget-right__layout",children:[Object(j.jsx)("a",{href:"https://openweathermap.org/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("div",{className:"widget-right__logo_black_small"})}),Object(j.jsx)("div",{className:"widget-right__date",children:h.a.unix(g.current.dt).format("YYYY-MM-DD, h:mm a")})]})})]}):Object(j.jsxs)("div",{children:[s.isIE?Object(j.jsx)(j.Fragment,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"widget-left-menu widget-left-menu--brown",children:Object(j.jsx)("div",{className:"widget-left-menu__layout",children:Object(j.jsxs)("h3",{children:["Current Date and Time in ",t.capital[0]]})})}),Object(j.jsx)(n.a,{floated:"left",children:Object(j.jsx)("span",{className:"calendar__item",children:l})})]}),Object(j.jsx)("div",{className:"widget-left-menu widget-left-menu--brown",children:Object(j.jsxs)("div",{className:"widget-left-menu__layout",children:[Object(j.jsx)("h2",{className:"widget-left-menu__header",children:t.capital[0]}),Object(j.jsx)("a",{href:"https://openweathermap.org/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("div",{className:"widget-left-menu__logo_black"})})]})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)(n.a,{floated:"left",children:[Object(j.jsxs)("div",{className:"weather-left-card__row1",children:[Object(j.jsx)("img",{src:p,alt:"Weather in ".concat(t.name.common),className:"weather-left-card__img"}),Object(j.jsx)("div",{className:"weather-left-card__col",children:Object(j.jsxs)("p",{className:"weather-left-card__number",children:[Math.round(g.current.temp),Object(j.jsxs)("span",{children:["\xb0","metric"===o?"C":"F"]})]})})]}),Object(j.jsxs)("div",{className:"weather-left-card__row2",children:[Object(j.jsx)("p",{className:"weather-left-card__means",children:g.current.weather[0].description}),Object(j.jsxs)("p",{className:"weather-left-card__wind",children:["Wind: ",Math.round(g.current.wind_speed),"metric"===o?" m/s":" mph"]})]})]}),Object(j.jsx)(n.a,{id:"weather",floated:"right",children:Object(j.jsxs)("div",{className:"widget-left__calendar",children:[Object(j.jsxs)("ul",{className:"calendar",children:[Object(j.jsxs)("li",{className:"calendar__item",children:["Today",Object(j.jsx)("br",{}),h.a.unix(g.current.dt).format("MMM D"),Object(j.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(g.current.weather[0].icon,".png"),width:"32",height:"32",alt:"Today"})]}),Object(j.jsxs)("li",{className:"calendar__item",children:[h.a.unix(g.daily[1].dt).format("ddd"),Object(j.jsx)("br",{})," ",h.a.unix(g.daily[1].dt).format("MMM D"),Object(j.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(g.daily[1].weather[0].icon,".png"),width:"32",height:"32",alt:h.a.unix(g.daily[1].dt).format("ddd")})]}),Object(j.jsxs)("li",{className:"calendar__item",children:[h.a.unix(g.daily[2].dt).format("ddd"),Object(j.jsx)("br",{})," ",h.a.unix(g.daily[2].dt).format("MMM D"),Object(j.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(g.daily[2].weather[0].icon,".png"),width:"32",height:"32",alt:h.a.unix(g.daily[2].dt).format("ddd")})]}),Object(j.jsxs)("li",{className:"calendar__item",children:[h.a.unix(g.daily[3].dt).format("ddd"),Object(j.jsx)("br",{})," ",h.a.unix(g.daily[3].dt).format("MMM D"),Object(j.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(g.daily[3].weather[0].icon,".png"),width:"32",height:"32",alt:h.a.unix(g.daily[3].dt).format("ddd")})]}),Object(j.jsxs)("li",{className:"calendar__item",children:[h.a.unix(g.daily[4].dt).format("ddd"),Object(j.jsx)("br",{})," ",h.a.unix(g.daily[4].dt).format("MMM D"),Object(j.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(g.daily[4].weather[0].icon,".png"),width:"32",height:"32",alt:h.a.unix(g.daily[4].dt).format("ddd")})]}),Object(j.jsxs)("li",{className:"calendar__item",children:[h.a.unix(g.daily[5].dt).format("ddd"),Object(j.jsx)("br",{})," ",h.a.unix(g.daily[5].dt).format("MMM D"),Object(j.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(g.daily[5].weather[0].icon,".png"),width:"32",height:"32",alt:h.a.unix(g.daily[5].dt).format("ddd")})]}),Object(j.jsxs)("li",{className:"calendar__item",children:[h.a.unix(g.daily[6].dt).format("ddd"),Object(j.jsx)("br",{})," ",h.a.unix(g.daily[6].dt).format("MMM D"),Object(j.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(g.daily[6].weather[0].icon,".png"),width:"32",height:"32",alt:h.a.unix(g.daily[6].dt).format("ddd")})]}),Object(j.jsxs)("li",{className:"calendar__item",children:[h.a.unix(g.daily[7].dt).format("ddd"),Object(j.jsx)("br",{})," ",h.a.unix(g.daily[7].dt).format("MMM D"),Object(j.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(g.daily[7].weather[0].icon,".png"),width:"32",height:"32",alt:h.a.unix(g.daily[7].dt).format("ddd")})]})]}),Object(j.jsx)("div",{id:"graphic2",className:"widget-left__graphic",children:Object(j.jsxs)("svg",{className:"axis",width:"420",height:"79",fill:"#FEB020",children:[Object(j.jsx)("g",{children:Object(j.jsx)("path",{d:"M15,23.615384615384613L72.14285714285714,30.42307692307692L129.28571428571428,30.42307692307692L186.42857142857142,21.346153846153847L243.57142857142856,41.76923076923077L300.7142857142857,44.03846153846154L357.85714285714283,39.5L415,34.96153846153847L415,53.11538461538461L357.85714285714283,53.11538461538461L300.7142857142857,57.65384615384615L243.57142857142856,53.11538461538461L186.42857142857142,48.57692307692308L129.28571428571428,50.84615384615385L72.14285714285714,50.84615384615385L15,44.03846153846154L15,23.615384615384613"})}),Object(j.jsxs)("text",{x:"15",y:"19.115384615384613",textAnchor:"middle",children:[Math.round(g.daily[0].temp.max),"\xb0"]}),Object(j.jsxs)("text",{x:"15",y:"61.03846153846154",textAnchor:"middle",children:[Math.round(g.daily[0].temp.min),"\xb0"]}),Object(j.jsxs)("text",{x:"72.14285714285714",y:"25.92307692307692",textAnchor:"middle",children:[Math.round(g.daily[1].temp.max),"\xb0"]}),Object(j.jsxs)("text",{x:"72.14285714285714",y:"67.84615384615384",textAnchor:"middle",children:[Math.round(g.daily[1].temp.min),"\xb0"]}),Object(j.jsxs)("text",{x:"129.28571428571428",y:"25.92307692307692",textAnchor:"middle",children:[Math.round(g.daily[2].temp.max),"\xb0"]}),Object(j.jsxs)("text",{x:"129.28571428571428",y:"67.84615384615384",textAnchor:"middle",children:[Math.round(g.daily[2].temp.min),"\xb0"]}),Object(j.jsxs)("text",{x:"186.42857142857142",y:"16.846153846153847",textAnchor:"middle",children:[Math.round(g.daily[3].temp.max),"\xb0"]}),Object(j.jsxs)("text",{x:"186.42857142857142",y:"65.57692307692308",textAnchor:"middle",children:[Math.round(g.daily[3].temp.min),"\xb0"]}),Object(j.jsxs)("text",{x:"243.57142857142856",y:"37.26923076923077",textAnchor:"middle",children:[Math.round(g.daily[4].temp.max),"\xb0"]}),Object(j.jsxs)("text",{x:"243.57142857142856",y:"70.11538461538461",textAnchor:"middle",children:[Math.round(g.daily[4].temp.min),"\xb0"]}),Object(j.jsxs)("text",{x:"300.7142857142857",y:"39.53846153846154",textAnchor:"middle",children:[Math.round(g.daily[5].temp.max),"\xb0"]}),Object(j.jsxs)("text",{x:"300.7142857142857",y:"74.65384615384616",textAnchor:"middle",children:[Math.round(g.daily[5].temp.min),"\xb0"]}),Object(j.jsxs)("text",{x:"357.85714285714283",y:"35",textAnchor:"middle",children:[Math.round(g.daily[6].temp.max),"\xb0"]}),Object(j.jsxs)("text",{x:"357.85714285714283",y:"70.11538461538461",textAnchor:"middle",children:[Math.round(g.daily[6].temp.min),"\xb0"]}),Object(j.jsxs)("text",{x:"415",y:"30.461538461538467",textAnchor:"middle",children:[Math.round(g.daily[7].temp.max),"\xb0"]}),Object(j.jsxs)("text",{x:"415",y:"70.11538461538461",textAnchor:"middle",children:[Math.round(g.daily[7].temp.min),"\xb0"]})]})})]})})]})]})}var o=c.a.memo(x);t.default=o}}]);
//# sourceMappingURL=9.4f47019d.chunk.js.map