(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[9],{168:function(t,n,e){"use strict";e.d(n,"b",(function(){return o}));var r=e(39),a=e(22),c=e.n(a),i=e(62),o=function(t){return function(){var n=Object(r.a)(c.a.mark((function n(e){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.getWeather(t);case 2:r=n.sent,e({type:"GET_WEATHER",data:r});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()};n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return"GET_WEATHER"===n.type?n.data:t}},169:function(t,n,e){"use strict";e.d(n,"b",(function(){return o}));var r=e(39),a=e(22),c=e.n(a),i=e(62),o=function(t){return function(){var n=Object(r.a)(c.a.mark((function n(e){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.getTimeZone(t);case 2:r=n.sent,e({type:"GET_TIME_ZONE",data:r});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()};n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return"GET_TIME_ZONE"===n.type?n.data:t}},170:function(t,n,e){"use strict";e.d(n,"b",(function(){return o}));var r=e(39),a=e(22),c=e.n(a),i=e(62),o=function(t){return function(){var n=Object(r.a)(c.a.mark((function n(e){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.getCiaData(t);case 2:r=n.sent,e({type:"FIND_COUNTRY",data:r});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()};n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return"FIND_COUNTRY"===n.type?n.data.toString().includes("Error")?{data:"no data"}:n.data:t}},539:function(t,n,e){},567:function(t,n,e){"use strict";e.r(n);e(171),e(181),e(182),e(183),e(184),e(185),e(186),e(187),e(188),e(189),e(190),e(191),e(192),e(193),e(194),e(261),e(262),e(263),e(264),e(265),e(266),e(267),e(197),e(269),e(270),e(111),e(271),e(272),e(273),e(274),e(275),e(276),e(277),e(278),e(279),e(280),e(281),e(282),e(283),e(285),e(287),e(288),e(208),e(148),e(289),e(290),e(291),e(292),e(293),e(294),e(295),e(296),e(297),e(298),e(299),e(301),e(302),e(303),e(304),e(305),e(212),e(306),e(307),e(308),e(309),e(310),e(311),e(312),e(313),e(314),e(315),e(316),e(317),e(318),e(319),e(320),e(321),e(322),e(323),e(324),e(325),e(326),e(327),e(328),e(329),e(330),e(331),e(332),e(333),e(334),e(335),e(336),e(337),e(338),e(339),e(219),e(341),e(342),e(343),e(344),e(349),e(350),e(351),e(353),e(354),e(355),e(356),e(357),e(358),e(359),e(360),e(361),e(362),e(363),e(364),e(228),e(365),e(366),e(367),e(368),e(369),e(370),e(371),e(158),e(372),e(373),e(374),e(375),e(376),e(377),e(378),e(379),e(380),e(381),e(382),e(383),e(384),e(385),e(386),e(387),e(388),e(389),e(390),e(391),e(392),e(393),e(394),e(395),e(396),e(397),e(399),e(400),e(401),e(402),e(403),e(404),e(405),e(406),e(407),e(408),e(409),e(410),e(413),e(414),e(415),e(416),e(417),e(418),e(419),e(420),e(421),e(422),e(423),e(424),e(425),e(426),e(427),e(428),e(429),e(430),e(431),e(432),e(433),e(161),e(434),e(435),e(441),e(442),e(443),e(444),e(445),e(447),e(448),e(449),e(450),e(451),e(452),e(453),e(454),e(456),e(457),e(458),e(459),e(460),e(461),e(462),e(463),e(464),e(465),e(466),e(467),e(468),e(469),e(470),e(471),e(472),e(473),e(474),e(475),e(476),e(477),e(478),e(479),e(480),e(482),e(484),e(485),e(486),e(487),e(488),e(490),e(491),e(492),e(493),e(494),e(495),e(496),e(497),e(498),e(499),e(500),e(501),e(502),e(503),e(504),e(505),e(506),e(507),e(508),e(509),e(510),e(511),e(512),e(513),e(514),e(515),e(517),e(238),e(239),e(240),e(519),e(520),e(521),e(522),e(523),e(524),e(525),e(526),e(243),e(528),e(529),e(530),e(532),e(245);var r=e(5),a=e(104),c=e.n(a),i=e(79),o=(e(539),e(540),e(165)),u=e(132),s=e(71),f=e(51),l=Object(u.a)((function(){return Promise.all([e.e(1),e.e(3),e.e(18)]).then(e.bind(null,729))})),m=Object(u.a)((function(){return Promise.all([e.e(0),e.e(1),e.e(6),e.e(20)]).then(e.bind(null,731))}));var d=function(){var t=Object(i.b)(),n=Object(i.c)((function(t){return t.countries.initialCountries}));return Object(r.useEffect)((function(){void 0===n&&t(Object(s.e)())}),[t,n]),void 0!==n?o.isMobile?Object(f.jsx)(m,{}):Object(f.jsx)(l,{}):Object(f.jsx)(f.Fragment,{})},p=e(102),b=e(257),O=e(256),g=e(168),j=e(169),v=e(170),y=Object(p.combineReducers)({countries:s.a,countriesData:v.a,unit:s.k,weather:g.a,time:j.a,menu:s.f}),h=Object(p.createStore)(y,Object(O.composeWithDevTools)(Object(p.applyMiddleware)(b.a)));c.a.render(Object(f.jsx)(i.a,{store:h,children:Object(f.jsx)(d,{})}),document.getElementById("root"))},62:function(t,n,e){"use strict";var r=e(6),a=e(39),c=e(22),i=e.n(c),o=e(103),u=e.n(o),s=function(){var t=Object(a.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("/api/countries");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(i.a.mark((function t(n){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("/api/weather/lat/".concat(n.location[0],"/lng/").concat(n.location[1],"/unit/").concat(n.unit));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=Object(a.a)(i.a.mark((function t(n){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("/api/time/lat/".concat(n.location[0],"/lng/").concat(n.location[1]));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(i.a.mark((function t(n){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("/api/ciadata/".concat(n," ")).then((function(t){return'{ "no data" }\n'===t.data?Object(r.a)(Object(r.a)({},t),{},{data:"no data"}):t})).catch((function(t){return t}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();n.a={getAll:s,getWeather:f,getTimeZone:l,getCiaData:m}},71:function(t,n,e){"use strict";e.d(n,"k",(function(){return s})),e.d(n,"f",(function(){return f})),e.d(n,"e",(function(){return l})),e.d(n,"j",(function(){return m})),e.d(n,"i",(function(){return d})),e.d(n,"g",(function(){return p})),e.d(n,"b",(function(){return b})),e.d(n,"c",(function(){return O})),e.d(n,"d",(function(){return g})),e.d(n,"h",(function(){return j}));var r=e(39),a=e(258),c=e(6),i=e(22),o=e.n(i),u=e(62),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{unit:"metric"},n=arguments.length>1?arguments[1]:void 0;if("UNIT_TOGGLE"===n.type){var e="metric"===t.unit?"imperial":"metric";return Object(c.a)(Object(c.a)({},t),{},{unit:e})}return t},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{show:!1},n=arguments.length>1?arguments[1]:void 0;if("MENU_TOGGLE"===n.type){var e=!1===t.show;return Object(c.a)(Object(c.a)({},t),{},{show:e})}return t},l=function(){return function(){var t=Object(r.a)(o.a.mark((function t(n){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.getAll();case 2:e=t.sent,n({type:"INIT_COUNTRIES",data:e});case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},m=function(t){return{type:"UNIT_TOGGLE",unit:t}},d=function(t){return{type:"MENU_TOGGLE",show:t}},p=function(t){return{type:"FILTER_COUNTRIES",input:t}},b=function(t){return{type:"FILTER_COUNTRIES",country:t}},O=function(t){return{type:"FILTER_COUNTRIES",region:t}},g=function(t){return{type:"FILTER_COUNTRIES",subregion:t}},j=function(t){return{type:"SORT_COUNTRIES",key:t}};n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INIT_COUNTRIES":var e=n.data.filter((function(t){return"Antarctica"===t.name.common||"Bouvet Island"===t.name.common||"Heard Island and McDonald Islands"===t.name.common||"Macau"===t.name.common||"United States Minor Outlying Islands"===t.name.common||"South Georgia"===t.name.common||"French Southern and Antarctic Lands"===t.name.common})),r=e.filter((function(t){return"Antarctica"===t.name.common})).map((function(t){return Object(c.a)(Object(c.a)({},t),{},{capital:["No Capital City"],subregion:"Antarctic"})})),i=e.filter((function(t){return"Bouvet Island"===t.name.common})).map((function(t){return Object(c.a)(Object(c.a)({},t),{},{capital:["Oslo"],subregion:"Antarctic"})})),o=e.filter((function(t){return"Heard Island and McDonald Islands"===t.name.common})).map((function(t){return Object(c.a)(Object(c.a)({},t),{},{capital:["Bern"],subregion:"Antarctic"})})),u=e.filter((function(t){return"Macau"===t.name.common})).map((function(t){return Object(c.a)(Object(c.a)({},t),{},{capital:["Macau"]})})),s=e.filter((function(t){return"United States Minor Outlying Islands"===t.name.common})).map((function(t){return Object(c.a)(Object(c.a)({},t),{},{capital:["Washington DC"]})})),f=e.filter((function(t){return"South Georgia"===t.name.common})).map((function(t){return Object(c.a)(Object(c.a)({},t),{},{subregion:"Antarctic"})})),l=e.filter((function(t){return"French Southern and Antarctic Lands"===t.name.common})).map((function(t){return Object(c.a)(Object(c.a)({},t),{},{subregion:"Antarctic"})})),m=n.data.filter((function(t){return"Antarctica"!==t.name.common&&"Bouvet Island"!==t.name.common&&"Heard Island and McDonald Islands"!==t.name.common&&"Macau"!==t.name.common&&"United States Minor Outlying Islands"!==t.name.common&&"South Georgia"!==t.name.common&&"French Southern and Antarctic Lands"!==t.name.common})),d=[].concat(Object(a.a)(m),[f[0],o[0],u[0],s[0],r[0],i[0],l[0]]),p=function(t,n){return t.name.common.localeCompare(n.name.common)};return d.sort(p),{initialCountries:d,filter:{input:"",country:"",region:"All",subregion:"",reset:!1},filtered:d,sortConfig:{key:"name",direction:"ascending"}};case"FILTER_COUNTRIES":if(""===n.input)return{initialCountries:d,filter:{input:"",country:"",region:"All",subregion:"",reset:!1},filtered:d};if(n.input){var b=Object(c.a)(Object(c.a)({},t),{},{filter:Object(c.a)(Object(c.a)({},t.filter),{},{input:n.input.toLowerCase()})}),O=b.initialCountries.filter((function(t){return t.name.common.toLowerCase().startsWith(b.filter.input)})),g=b.filtered.filter((function(t){return t.name.common.toLowerCase().startsWith(b.filter.input)})),j="All"===b.filter.region?O:g;return Object(c.a)(Object(c.a)({},b),{},{filtered:j})}if(n.country){var v=Object(c.a)(Object(c.a)({},t),{},{filter:Object(c.a)(Object(c.a)({},t.filter),{},{country:n.country.name.common.toLowerCase(),region:n.country.region,subregion:n.country.subregion})}),y=v.initialCountries.filter((function(t){return t.name.common.toLowerCase()===v.filter.country.toLowerCase()}));return Object(c.a)(Object(c.a)({},v),{},{filtered:y})}if(n.region){var h=Object(c.a)(Object(c.a)({},t),{},{filter:Object(c.a)(Object(c.a)({},t.filter),{},{region:n.region.toLowerCase()})}),C="all"===h.filter.region?h.initialCountries:h.initialCountries.filter((function(t){return t.region.toLowerCase()===h.filter.region}));return Object(c.a)(Object(c.a)({},h),{},{filtered:C,filter:Object(c.a)(Object(c.a)({},h.filter),{},{input:"",country:"",region:n.region.toLowerCase(),subregion:""})})}if(n.subregion){var T=Object(c.a)(Object(c.a)({},t),{},{filter:Object(c.a)(Object(c.a)({},t.filter),{},{subregion:n.subregion.toLowerCase()})}),E=T.initialCountries.filter((function(t){var n;return(null===(n=t.subregion)||void 0===n?void 0:n.toLowerCase())===T.filter.subregion})),I=Object(c.a)(Object(c.a)({},T),{},{filtered:E});return I}return t;case"RESET_FILTER":return Object(c.a)(Object(c.a)({},t),{},{filter:{input:"",country:"",region:"All",subregion:"",reset:!0},filtered:[]});case"SORT_COUNTRIES":var k="ascending"===t.sortConfig.direction?"descending":"ascending",w=t.filtered;"area"===n.key||"population"===n.key?w.sort((function(t,e){return"ascending"===k?t[n.key]-e[n.key]:e[n.key]-t[n.key]})):"name"===n.key?w.sort((function(t,e){return"ascending"===k?t[n.key].common.localeCompare(e[n.key].common):e[n.key].common.localeCompare(t[n.key].common)})):"capital"===n.key?w.sort((function(t,e){return"ascending"===k?t[n.key][0].localeCompare(e[n.key][0]):e[n.key][0].localeCompare(t[n.key][0])})):w.sort((function(t,e){return t[n.key]&&"ascending"===k?t[n.key].localeCompare(e[n.key]):e[n.key].localeCompare(t[n.key])}));var L=Object(c.a)(Object(c.a)({},t),{},{filtered:w,sortConfig:{key:n.key,direction:k}});return L;default:return t}}}},[[567,10,11]]]);
//# sourceMappingURL=main.351d42d0.chunk.js.map