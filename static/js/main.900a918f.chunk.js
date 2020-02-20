(this["webpackJsonpreact-tod-list"]=this["webpackJsonpreact-tod-list"]||[]).push([[0],{101:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),r=a(7),l=a.n(r),c=(a(75),a(14)),i=a(16),s=a(11),p=a(19),d=a(20),u=a(23),f=a(135),m=a(38),x=a(138),h=a(140),b=a(58),g=a.n(b),E=a(37),v=Object(f.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1},appbar:{color:E.a}}}));var y=function(){var t=v();return n.a.createElement("div",{className:t.root},n.a.createElement(x.a,{position:"static",className:t.appbar,style:{backgroundColor:"#303030",color:"rgba(132.0, 201.0, 251.0, 1.0)"}},n.a.createElement(h.a,{className:t.toolbar},n.a.createElement(g.a,null),n.a.createElement(m.a,{variant:"h6",className:t.title},"Todo List"))))},O=(a(80),a(143)),j=a(59),w=a.n(j),C=a(141),S=a(142),k=a(145),T=a(144),M=a(149),B=function(t){function e(){var t,a;Object(i.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(n)))).state={transform:"scale(1.0)",hoverCardBg:"#E1E5EE",color:"#84c9fb"},a.onMouseOver=function(){a.setState({transform:"scale(1.01)",hoverCardBg:"rgba(132.0, 201.0, 251.0, 0.2)"})},a.onMouseOut=function(){a.setState({transform:"scale(1.0)",hoverCardBg:"#E1E5EE"})},a.getStyle=function(){return{textDecoration:a.props.todo.completed?"line-through":"none",color:"rgba(132.0, 201.0, 251.0, 1.0)",boxShadow:"6px 6px 12px #bfc3ca, -6px -6px 12px #ffffff",borderRadius:"7px",transition:"transform .2s",transform:a.state.transform,background:a.state.hoverCardBg}},a.getStyleIcon=function(){return{color:"rgba(132.0, 201.0, 251.0, 1.0)",boxShadow:"4px 4px 8px #bfc3ca, -4px -4px 8px #ffffff",margin:"2px 0px 2px 0px",padding:"10px"}},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,a=t.title;return n.a.createElement(C.a,{role:void 0,dense:!0,button:!0,style:this.getStyle(),onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},n.a.createElement(S.a,null,n.a.createElement(M.a,{edge:"start",color:"default",onChange:this.props.markComplete.bind(this,e),style:this.getStyleIcon()})),n.a.createElement(T.a,{disableTypography:!0,primary:n.a.createElement(m.a,null,a)}),n.a.createElement(k.a,null,n.a.createElement(O.a,{edge:"end","aria-label":"delete",onClick:this.props.delTodo.bind(this,e),style:this.getStyleIcon()},n.a.createElement(w.a,{color:"secondary"}))))}}]),e}(o.Component),R=a(146),I=function(t){function e(){return Object(i.a)(this,e),Object(p.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return n.a.createElement(R.a,null,n.a.createElement(B,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo}))}))}}]),e}(o.Component),N=a(148),A=function(t){function e(){var t,a;Object(i.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(n)))).state={title:""},a.onChange=function(t){return a.setState({title:t.target.value})},a.onSubmit=function(t){t.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",background:"#E1E5EE;",boxShadow:"6px 6px 11px #bfc3ca, -6px -6px 11px #ffffff",margin:"8px 5px 20px 5px",borderRadius:"7px"}},n.a.createElement(N.a,{style:{margin:"7px",paddingTop:"10px",boxSizing:"inherit",borderRadius:"7px 7px 0px 0px",boxShadow:"inset 4px 4px 8px #bfc3ca, inset -4px -4px 8px #ffffff"},id:"standard-full-width",color:"secondary",label:" What do you want to do...?",fullWidth:!0,autoComplete:"off",required:!0,value:this.state.title,onChange:this.onChange}))}}]),e}(o.Component),D=a(32),G=a.n(D),J=a(147),W=a(102),q=(a(83),function(t){function e(){var t,a;Object(i.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(p.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(n)))).state={todos:[{id:G.a.v4(),title:"Play with space time",completed:!1},{id:G.a.v4(),title:"Manipulate space time",completed:!1},{id:G.a.v4(),title:"Mess with space time",completed:!1}]},a.markComplete=function(t){a.setState({todos:a.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},a.delTodo=function(t){a.setState({todos:Object(c.a)(a.state.todos.filter((function(e){return e.id!==t})))})},a.addTodo=function(t){var e={id:G.a.v4(),title:t,completed:!1};a.setState({todos:[].concat(Object(c.a)(a.state.todos),[e])})},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(y,null),n.a.createElement(J.a,null,n.a.createElement(W.a,{style:{margin:"50px 2px 20px 2px",backgroundColor:"#E1E5EE",padding:"20px 10px 20px 10px",boxShadow:" 14px 14px 29px #bfc3ca, -14px -14px 29px #ffffff",borderRadius:"7px"}},n.a.createElement(A,{addTodo:this.addTodo}),n.a.createElement(I,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo}))))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(q,null),document.getElementById("root"))},70:function(t,e,a){t.exports=a(101)},75:function(t,e,a){},80:function(t,e,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.900a918f.chunk.js.map