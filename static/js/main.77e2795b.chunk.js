(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(14),n(8)),l=n(7),s=n(1),u=n(2),m=n(4),v=n(3),b=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("span",{className:this.getBadgeClas()}," ",this.formate()),r.a.createElement("button",{onClick:function(){return e.props.OnIncrement(e.props.items)},className:"button btn-secondary btn-sm m-2 "},"Increment"),r.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.items.id)},className:"button btn-danger btn-sm m-2"},"Delete"))}},{key:"getBadgeClas",value:function(){var e="badge badge-";return e+=0===this.props.items.value?"warning":"primary"}},{key:"formate",value:function(){var e=this.props.items.value;return 0===e?"zero":e}}]),n}(a.Component),p=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={arra:[{id:1,value:4},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleIncrement=function(t){var n=Object(l.a)(e.state.arra),a=n.indexOf(t);n[a]=Object(i.a)({},t),n[a].value++,e.setState({arra:n})},e.handleDelete=function(t){var n=e.state.arra.filter((function(e){return e.id!==t}));e.setState({arra:n})},e.handleReset=function(){var t=e.state.arra.map((function(e){return e.value=0,e}));e.setState({arra:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleReset,className:"button btn-primary btn-sm m-2 "},"Reset"),this.state.arra.map((function(t){return r.a.createElement(b,{key:t.id,OnIncrement:e.handleIncrement,onDelete:e.handleDelete,items:t})})))}}]),n}(a.Component),d=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"))}}]),n}(a.Component);n(15);var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("main",{className:"container"},r.a.createElement(p,null)))};n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.77e2795b.chunk.js.map