(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[5],{168:function(t,n,e){"use strict";e.d(n,"b",(function(){return o}));var r=e(50),a=e(27),i=e.n(a),c=e(78),o=function(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.getWeather(t);case 2:r=n.sent,e({type:"GET_WEATHER",data:r});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()};n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return"GET_WEATHER"===n.type?n.data:t}},169:function(t,n,e){"use strict";e.d(n,"b",(function(){return o}));var r=e(50),a=e(27),i=e.n(a),c=e(78),o=function(t){return function(){var n=Object(r.a)(i.a.mark((function n(e){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.getTimeZone(t);case 2:r=n.sent,e({type:"GET_TIME_ZONE",data:r});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()};n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return"GET_TIME_ZONE"===n.type?n.data:t}},538:function(t,n,e){},566:function(t,n,e){"use strict";e.r(n);e(171),e(181),e(182),e(183),e(184),e(185),e(186),e(187),e(188),e(189),e(190),e(191),e(192),e(193),e(194),e(260),e(261),e(262),e(263),e(264),e(265),e(266),e(197),e(268),e(269),e(110),e(270),e(271),e(272),e(273),e(274),e(275),e(276),e(277),e(278),e(279),e(280),e(281),e(282),e(284),e(286),e(287),e(208),e(148),e(288),e(289),e(290),e(291),e(292),e(293),e(294),e(295),e(296),e(297),e(298),e(300),e(301),e(302),e(303),e(304),e(212),e(305),e(306),e(307),e(308),e(309),e(310),e(311),e(312),e(313),e(314),e(315),e(316),e(317),e(318),e(319),e(320),e(321),e(322),e(323),e(324),e(325),e(326),e(327),e(328),e(329),e(330),e(331),e(332),e(333),e(334),e(335),e(336),e(337),e(338),e(219),e(340),e(341),e(342),e(343),e(348),e(349),e(350),e(352),e(353),e(354),e(355),e(356),e(357),e(358),e(359),e(360),e(361),e(362),e(363),e(228),e(364),e(365),e(366),e(367),e(368),e(369),e(370),e(158),e(371),e(372),e(373),e(374),e(375),e(376),e(377),e(378),e(379),e(380),e(381),e(382),e(383),e(384),e(385),e(386),e(387),e(388),e(389),e(390),e(391),e(392),e(393),e(394),e(395),e(396),e(398),e(399),e(400),e(401),e(402),e(403),e(404),e(405),e(406),e(407),e(408),e(409),e(412),e(413),e(414),e(415),e(416),e(417),e(418),e(419),e(420),e(421),e(422),e(423),e(424),e(425),e(426),e(427),e(428),e(429),e(430),e(431),e(432),e(161),e(433),e(434),e(440),e(441),e(442),e(443),e(444),e(446),e(447),e(448),e(449),e(450),e(451),e(452),e(453),e(455),e(456),e(457),e(458),e(459),e(460),e(461),e(462),e(463),e(464),e(465),e(466),e(467),e(468),e(469),e(470),e(471),e(472),e(473),e(474),e(475),e(476),e(477),e(478),e(479),e(481),e(483),e(484),e(485),e(486),e(487),e(489),e(490),e(491),e(492),e(493),e(494),e(495),e(496),e(497),e(498),e(499),e(500),e(501),e(502),e(503),e(504),e(505),e(506),e(507),e(508),e(509),e(510),e(511),e(512),e(513),e(514),e(516),e(238),e(239),e(240),e(518),e(519),e(520),e(521),e(522),e(523),e(524),e(525),e(243),e(527),e(528),e(529),e(531),e(245);var r=e(6),a=e(103),i=e.n(a),c=e(79),o=(e(538),e(539),e(165)),u=e(132),s=e(70),l=e(51),f=Object(u.a)((function(){return Promise.all([e.e(1),e.e(2),e.e(10)]).then(e.bind(null,692))})),b=Object(u.a)((function(){return Promise.all([e.e(0),e.e(2),e.e(4),e.e(15)]).then(e.bind(null,694))}));var m=function(){var t=Object(c.b)();return Object(r.useEffect)((function(){t(Object(s.f)())}),[t]),void 0!==Object(c.c)((function(t){return t.countries.initialCountries}))?o.isMobile?Object(l.jsx)(b,{}):Object(l.jsx)(f,{}):Object(l.jsx)(l.Fragment,{})},O=e(102),d=e(257),j=e(256),p=e(168),g=e(169),v=Object(O.combineReducers)({countries:s.a,unit:s.l,weather:p.a,time:g.a,menu:s.g}),h=Object(O.createStore)(v,Object(j.composeWithDevTools)(Object(O.applyMiddleware)(d.a)));i.a.render(Object(l.jsx)(c.a,{store:h,children:Object(l.jsx)(m,{})}),document.getElementById("root"))},70:function(t,n,e){"use strict";e.d(n,"l",(function(){return s})),e.d(n,"g",(function(){return l})),e.d(n,"f",(function(){return f})),e.d(n,"k",(function(){return b})),e.d(n,"j",(function(){return m})),e.d(n,"h",(function(){return O})),e.d(n,"i",(function(){return d})),e.d(n,"b",(function(){return j})),e.d(n,"c",(function(){return p})),e.d(n,"d",(function(){return g})),e.d(n,"e",(function(){return v}));var r=e(50),a=e(170),i=e(5),c=e(27),o=e.n(c),u=e(78),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{unit:"metric"},n=arguments.length>1?arguments[1]:void 0;if("UNIT_TOGGLE"===n.type){var e="metric"===t.unit?"imperial":"metric";return Object(i.a)(Object(i.a)({},t),{},{unit:e})}return t},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{show:!1},n=arguments.length>1?arguments[1]:void 0;if("MENU_TOGGLE"===n.type){var e=!1===t.show;return Object(i.a)(Object(i.a)({},t),{},{show:e})}return t},f=function(){return function(){var t=Object(r.a)(o.a.mark((function t(n){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.getAll();case 2:e=t.sent,n({type:"INIT_COUNTRIES",data:e});case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},b=function(t){return{type:"UNIT_TOGGLE",unit:t}},m=function(t){return{type:"MENU_TOGGLE",show:t}},O=function(t){return{type:"RESET_FILTER",reset:t}},d=function(t){return{type:"FILTER_COUNTRIES",input:t}},j=function(t){return{type:"FILTER_COUNTRIES",country:t}},p=function(t){return{type:"FILTER_COUNTRIES",continent:t}},g=function(t){return{type:"FILTER_COUNTRIES",region:t}},v=function(t){return{type:"FILTER_COUNTRIES",subregion:t}};n.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INIT_COUNTRIES":var e=n.data.filter((function(t){return"Antarctica"===t.name.common||"Bouvet Island"===t.name.common||"Heard Island and McDonald Islands"===t.name.common||"Macau"===t.name.common||"United States Minor Outlying Islands"===t.name.common||"South Georgia"===t.name.common||"French Southern and Antarctic Lands"===t.name.common})),r=e.filter((function(t){return"Antarctica"===t.name.common})).map((function(t){return Object(i.a)(Object(i.a)({},t),{},{capital:["No Capital City"],subregion:"Antarctic"})})),c=e.filter((function(t){return"Bouvet Island"===t.name.common})).map((function(t){return Object(i.a)(Object(i.a)({},t),{},{capital:["Oslo"],subregion:"Antarctic"})})),o=e.filter((function(t){return"Heard Island and McDonald Islands"===t.name.common})).map((function(t){return Object(i.a)(Object(i.a)({},t),{},{capital:["Bern"],subregion:"Antarctic"})})),u=e.filter((function(t){return"Macau"===t.name.common})).map((function(t){return Object(i.a)(Object(i.a)({},t),{},{capital:["Macau"]})})),s=e.filter((function(t){return"United States Minor Outlying Islands"===t.name.common})).map((function(t){return Object(i.a)(Object(i.a)({},t),{},{capital:["Washington DC"]})})),l=e.filter((function(t){return"South Georgia"===t.name.common})).map((function(t){return Object(i.a)(Object(i.a)({},t),{},{subregion:"Antarctic"})})),f=e.filter((function(t){return"French Southern and Antarctic Lands"===t.name.common})).map((function(t){return Object(i.a)(Object(i.a)({},t),{},{subregion:"Antarctic"})})),b=n.data.filter((function(t){return"Antarctica"!==t.name.common&&"Bouvet Island"!==t.name.common&&"Heard Island and McDonald Islands"!==t.name.common&&"Macau"!==t.name.common&&"United States Minor Outlying Islands"!==t.name.common&&"South Georgia"!==t.name.common&&"French Southern and Antarctic Lands"!==t.name.common})),m=[].concat(Object(a.a)(b),[l[0],o[0],u[0],s[0],r[0],c[0],f[0]]);return{initialCountries:m,filter:{input:"",country:"",continent:"All",region:"All",subregion:"",reset:!1},filtered:[]};case"FILTER_COUNTRIES":if(""===n.input)return Object(i.a)(Object(i.a)({},t),{},{filter:{input:"",country:"",continent:"All",region:"All",subregion:"",reset:!1},filtered:[]});if(n.input){var O=Object(i.a)(Object(i.a)({},t),{},{filter:Object(i.a)(Object(i.a)({},t.filter),{},{input:n.input.toLowerCase()})}),d=O.initialCountries.filter((function(t){return t.name.common.toLowerCase().startsWith(O.filter.input)}));return 1===d.length?Object(i.a)(Object(i.a)({},O),{},{filter:Object(i.a)(Object(i.a)({},O.filter),{},{country:d[0].name.common,continent:d[0].continents[0],region:d[0].region,subregion:d[0].subregion}),filtered:d}):Object(i.a)(Object(i.a)({},O),{},{filtered:d})}if(n.country){var j=Object(i.a)(Object(i.a)({},t),{},{filter:Object(i.a)(Object(i.a)({},t.filter),{},{country:n.country.name.common.toLowerCase(),continent:n.country.continents[0].toLowerCase(),region:n.country.region,subregion:n.country.subregion})}),p=j.initialCountries.filter((function(t){return t.name.common.toLowerCase().startsWith(j.filter.country)}));return Object(i.a)(Object(i.a)({},j),{},{filtered:p})}if(n.continent){var g=Object(i.a)(Object(i.a)({},t),{},{filter:Object(i.a)(Object(i.a)({},t.filter),{},{continent:n.continent.toLowerCase()})}),v="All"===g.filter.continent?g.initialCountries:g.initialCountries.filter((function(t){return t.continents[0].toLowerCase()===g.filter.continent})),h=Object(i.a)(Object(i.a)({},g),{},{filtered:v,filter:Object(i.a)(Object(i.a)({},g.filter),{},{input:"",country:"",continent:n.continent.toLowerCase(),region:"All",subregion:""})});return h}if(n.region){var y=Object(i.a)(Object(i.a)({},t),{},{filter:Object(i.a)(Object(i.a)({},t.filter),{},{region:n.region.toLowerCase()})}),E="all"===y.filter.region?y.initialCountries:y.initialCountries.filter((function(t){return t.region.toLowerCase()===y.filter.region}));return Object(i.a)(Object(i.a)({},y),{},{filtered:E})}if(n.subregion){var I=Object(i.a)(Object(i.a)({},t),{},{filter:Object(i.a)(Object(i.a)({},t.filter),{},{subregion:n.subregion.toLowerCase()})}),T=I.initialCountries.filter((function(t){var n;return(null===(n=t.subregion)||void 0===n?void 0:n.toLowerCase())===I.filter.subregion})),w=Object(i.a)(Object(i.a)({},I),{},{filtered:T});return w}return t;case"RESET_FILTER":return Object(i.a)(Object(i.a)({},t),{},{filter:{input:"",country:"",continent:"",region:"All",subregion:"",reset:!0},filtered:[]});default:return t}}},78:function(t,n,e){"use strict";var r=e(50),a=e(27),i=e.n(a),c=e(131),o=e.n(c),u=function(){var t=Object(r.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getAll"),t.next=3,o.a.get("/api/countries");case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(r.a)(i.a.mark((function t(n){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getWeather"),t.next=3,o.a.get("/api/weather/lat/".concat(n.location[0],"/lng/").concat(n.location[1],"/unit/").concat(n.unit));case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=Object(r.a)(i.a.mark((function t(n){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/api/time/lat/".concat(n.location[0],"/lng/").concat(n.location[1]));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();n.a={getAll:u,getWeather:s,getTimeZone:l}}},[[566,6,7]]]);
//# sourceMappingURL=main.c7392c1f.chunk.js.map