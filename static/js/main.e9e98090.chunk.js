(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),s=(n(16),n(2)),l=n(3),o=n(5),u=n(4),p=n(6),m=n(9),d=n(1),b=n.n(d),h={en_US:"I support the cause of 996.icu.","zh-Hans":"\u6211\u652f\u6301 996.icu\u3002"},f={position:"fixed",display:"flex",flexFlow:"row",flexWrap:"wrap",alignContent:"center",justifyContent:"center",padding:"1em",left:"0",right:"0",backgroundColor:"white"},g={margin:"0 1em"},E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).apply(this,arguments))).state={closed:Boolean(localStorage.getItem("996-icu-banner-closed")||!1)},e.close=function(){return e.setState({closed:!0},function(){return localStorage.setItem("996-icu-banner-closed","true")})},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.state.closed)return null;var e=this.props,t=e.bannerPosition,n=e.lang,a=e.className,r=e.styles,i=Object.assign({},f,r,Object(m.a)({},t,"0"));return b.a.createElement("div",{id:"banner-996-icu",className:a,style:i},b.a.createElement("span",{id:"message-996-icu"},h[n]),b.a.createElement("a",{id:"website-link-996-icu",href:"https://996.icu/",target:"_blank",rel:"noopener noreferrer",style:g},b.a.createElement("img",{src:"https://img.shields.io/badge/link-996.icu-red.svg",alt:"996.icu"})),b.a.createElement("a",{id:"github-link-996-icu",href:"https://github.com/996icu/996.icu",target:"_blank",rel:"noopener noreferrer",style:g},b.a.createElement("img",{src:"https://img.shields.io/badge/link-996.icu%20GitHub-blue.svg",alt:"996.icu"})),b.a.createElement("a",{id:"dismiss-button-996-icu",href:"#",onClick:this.close,style:g},"Dismiss"))}}]),t}(d.Component);E.defaultProps={bannerPosition:"top",lang:"en_US",className:void 0,styles:void 0};n(19);var k=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"The banner is shown above."),r.a.createElement("p",null,"Edit\xa0",r.a.createElement("a",{className:"App-link",href:"https://github.com/SamChou19815/996-icu-banner/tree/master/src/index.tsx",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("code",null,"src/index.tsx")),"\xa0to contribute."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React to effectively contribute.")))}}]),t}(a.Component);c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.e9e98090.chunk.js.map