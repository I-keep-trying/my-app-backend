(this["webpackJsonpcountries3.1"]=this["webpackJsonpcountries3.1"]||[]).push([[6],{337:function(t,e,n){"use strict";var i=n(116);e.a=i.instance},674:function(t){t.exports=JSON.parse('[{"id":"FZUe47mEY9PCOzYmMxzYY","region":"All","subregions":[]},{"id":"p3QkwaBBJbQm4-oi_qzIQ","region":"Africa","subregions":["Northern Africa","Middle Africa","Western Africa","Southern Africa","Eastern Africa"]},{"id":"oEXPulND1myYNkk691COU","region":"Americas","subregions":["Caribbean","South America","Central America","North America"]},{"id":"Tnrp40V1CE3AB_yBKxmxK","region":"Antarctic","subregions":["Antarctic"]},{"id":"MywTm4_IEp2XZtAfPKRGg","region":"Asia","subregions":["Southern Asia","Western Asia","South-Eastern Asia","Eastern Asia","Central Asia"]},{"id":"qxmsAgkNwgqb5xqff-ddc","region":"Europe","subregions":["Northern Europe","Southern Europe","Western Europe","Eastern Europe","Central Europe"]},{"id":"3HyqK4xy8_nAO7Up9TwSN","region":"Oceania","subregions":["Polynesia","Australia and New Zealand","Melanesia","Micronesia"]}]')},676:function(t,e,n){},686:function(t){t.exports=JSON.parse('[{"continent":"All","id":"QIioiGUHEpP4hRt2pBFg3"},{"continent":"South America","id":"_cw07BZPZHmjMxWvb8II9"},{"continent":"Oceania","id":"aFBrSMa6TFFHgWH9X1DuY"},{"continent":"North America","id":"nHlLaD315EKE66jw0_nIv"},{"continent":"Europe","id":"3RhDoECpF0SSezB435Xw7"},{"continent":"Asia","id":"C5nfMq73D-Km1FsH9FwaH"},{"continent":"Antarctica","id":"5tCHJ4f7XecwOt9EBeEuA"},{"continent":"Africa","id":"REZY6LyDvvCXwwnkZ7ABS"}]')},687:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n(4),o=n(25),r=n(16),c=n(74),s=n(15),a=n(1),u=n.n(a),l=n(337),d=n(324),p=n(321),f=n(322),h=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).state={active:!0,sticky:!1},e.stickyRef=Object(a.createRef)(),e.triggerRef=Object(a.createRef)(),e.addListeners=function(t){var n=Object(c.b)(t)?t.current:t;n&&(l.a.sub("resize",e.handleUpdate,{target:n}),l.a.sub("scroll",e.handleUpdate,{target:n}))},e.removeListeners=function(t){var n=Object(c.b)(t)?t.current:t;n&&(l.a.unsub("resize",e.handleUpdate,{target:n}),l.a.unsub("scroll",e.handleUpdate,{target:n}))},e.update=function(t){var n=e.state.pushing;if(e.ticking=!1,e.assignRects(),n)return e.didReachStartingPoint()?e.stickToContextTop(t):e.didTouchScreenBottom()?e.stickToScreenBottom(t):e.stickToContextBottom(t);if(e.isOversized()){if(e.contextRect.top>0)return e.stickToContextTop(t);if(e.contextRect.bottom<window.innerHeight)return e.stickToContextBottom(t)}return e.didTouchScreenTop()?e.didReachContextBottom()?e.stickToContextBottom(t):e.stickToScreenTop(t):e.stickToContextTop(t)},e.handleUpdate=function(t){e.ticking||(e.ticking=!0,e.frameId=requestAnimationFrame((function(){return e.update(t)})))},e.assignRects=function(){var t=e.props.context,n=Object(c.b)(t)?t.current:t||document.body;e.triggerRect=e.triggerRef.current.getBoundingClientRect(),e.contextRect=n.getBoundingClientRect(),e.stickyRect=e.stickyRef.current.getBoundingClientRect()},e.didReachContextBottom=function(){var t=e.props.offset;return e.stickyRect.height+t>=e.contextRect.bottom},e.didReachStartingPoint=function(){return e.stickyRect.top<=e.triggerRect.top},e.didTouchScreenTop=function(){return e.triggerRect.top<e.props.offset},e.didTouchScreenBottom=function(){var t=e.props.bottomOffset;return e.contextRect.bottom+t>window.innerHeight},e.isOversized=function(){return e.stickyRect.height>window.innerHeight},e.pushing=function(t){e.props.pushing&&e.setState({pushing:t})},e.stick=function(t,n){e.setState({bound:n,sticky:!0}),Object(r.a)(e.props,"onStick",t,e.props)},e.unstick=function(t,n){e.setState({bound:n,sticky:!1}),Object(r.a)(e.props,"onUnstick",t,e.props)},e.stickToContextBottom=function(t){Object(r.a)(e.props,"onBottom",t,e.props),e.stick(t,!0),e.pushing(!0)},e.stickToContextTop=function(t){Object(r.a)(e.props,"onTop",t,e.props),e.unstick(t,!1),e.pushing(!1)},e.stickToScreenBottom=function(t){var n=e.props.bottomOffset;e.stick(t,!1),e.setState({bottom:n,top:null})},e.stickToScreenTop=function(t){var n=e.props.offset;e.stick(t,!1),e.setState({top:n,bottom:null})},e}Object(o.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){Object(d.a)()&&(this.state.active&&(this.handleUpdate(),this.addListeners(this.props.scrollContext)))},e.getDerivedStateFromProps=function(t,e){return e.active===t.active||t.active?{active:t.active}:{active:t.active,sticky:!1}},n.componentDidUpdate=function(t,e){if(e.active!==this.state.active)return this.state.active?(this.handleUpdate(),void this.addListeners(this.props.scrollContext)):void this.removeListeners(t.scrollContext);t.scrollContext!==this.props.scrollContext&&(this.removeListeners(t.scrollContext),this.addListeners(this.props.scrollContext))},n.componentWillUnmount=function(){Object(d.a)()&&(this.state.active&&(this.removeListeners(this.props.scrollContext),cancelAnimationFrame(this.frameId)))},n.computeStyle=function(){var t=this.props.styleElement,e=this.state,n=e.bottom,o=e.bound,r=e.sticky,c=e.top;return r?Object(i.a)({bottom:o?0:n,top:o?void 0:c,width:this.triggerRect.width},t):t},n.render=function(){var t=this.props,n=t.children,o=t.className,r=this.state,c=r.bottom,a=r.bound,l=r.sticky,d=Object(p.a)(e,this.props),h=Object(f.a)(e,this.props),b=Object(s.a)(l&&"ui",l&&"stuck-container",l&&(a?"bound-container":"fixed-container"),o),g=Object(s.a)("ui",l&&(a?"bound bottom":"fixed"),l&&!a&&(null===c?"top":"bottom"),"sticky"),m=l&&this.stickyRect?{height:this.stickyRect.height}:{};return u.a.createElement(h,Object(i.a)({},d,{className:b}),u.a.createElement("div",{ref:this.triggerRef,style:m}),u.a.createElement("div",{className:g,ref:this.stickyRef,style:this.computeStyle()},n))},e}(a.Component);h.handledProps=["active","as","bottomOffset","children","className","context","offset","onBottom","onStick","onTop","onUnstick","pushing","scrollContext","styleElement"],h.propTypes={},h.defaultProps={active:!0,bottomOffset:0,offset:0,scrollContext:Object(d.a)()?window:null}},701:function(t,e,n){"use strict";n.r(e);var i=n(672),o=n(1),r=n(120),c=n(687),s=n(706),a=n(192),u=n(98),l=n(686),d=n(674),p=(n(676),n(29)),f=Object(a.a)((function(){return Promise.all([n.e(2),n.e(11)]).then(n.bind(null,688))})),h=Object(a.a)((function(){return Promise.all([n.e(1),n.e(17)]).then(n.bind(null,679))})),b=Object(a.a)((function(){return n.e(13).then(n.bind(null,690))}));e.default=function(){var t=Object(o.useState)({id:"FZUe47mEY9PCOzYmMxzYY",region:"All",subregions:[]}),e=Object(i.a)(t,2),n=e[0],a=e[1],g=Object(r.b)(),m=Object(r.c)((function(t){return t})),j=Object(r.c)((function(t){return t.countries.filtered.length>0?t.countries.filtered:t.countries.initialCountries})),O=Object(o.useRef)();return Object(o.useEffect)((function(){if(m.countries.filter.region.toLowerCase()===n.region.toLowerCase())return n;var t=d.filter((function(t){return t.region.toLowerCase()===m.countries.filter.region.toLowerCase()?t:null}));a(t[0])}),[m]),Object(p.jsxs)("div",{id:"ref",ref:O,children:[Object(p.jsxs)(c.a,{id:"Sticky",context:O,children:[Object(p.jsx)(f,{}),1===j.length?Object(p.jsx)(h,{data:j[0]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.a,{attached:"top",tabular:!0,widths:8,children:l.map((function(t){return Object(p.jsx)(s.a.Item,{active:m.countries.filter.continent.toLowerCase()===t.continent.toLowerCase(),onClick:function(){return e=t,g(Object(u.c)(e.continent)),void("All"===e.continent&&window.localStorage.clear());var e},children:"All"===t.continent?"All Continents":t.continent},t.id)}))}),Object(p.jsx)(s.a,{attached:!0,tabular:!0,widths:7,children:d.map((function(t){return Object(p.jsx)(s.a.Item,{active:m.countries.filter.region.toLowerCase()===t.region.toLowerCase(),onClick:function(){return e=t,g(Object(u.d)(e.region)),a(e),void("All"===e.region&&window.localStorage.clear());var e},children:"All"===t.region?"All Regions":t.region},t.id)}))}),"all"!==m.countries.filter.region.toLowerCase()?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(s.a,{widths:n.subregions.length,attached:!0,tabular:!0,children:n.subregions.map((function(t,e){return Object(p.jsx)(s.a.Item,{active:m.countries.filter.subregion.toLowerCase()===t.toLowerCase(),onClick:function(){return e=t,void g(Object(u.e)(e));var e},children:t},e)}))})}):Object(p.jsx)(p.Fragment,{})]})]}),Object(p.jsx)(b,{})]})}}}]);
//# sourceMappingURL=6.ea430541.chunk.js.map