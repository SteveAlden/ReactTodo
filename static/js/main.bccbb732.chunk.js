(this["webpackJsonpreact-tod-list"]=this["webpackJsonpreact-tod-list"]||[]).push([[0],{60:function(t,e,a){t.exports=a(73)},65:function(t,e,a){},70:function(t,e,a){},73:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),r=a(7),l=a.n(r),c=(a(65),a(13)),i=a(15),s=a(11),d=a(18),u=a(19),p=a(22),m=a(108),h=a(37),b=a(111),f=a(113),g=a(49),y=a.n(g),v=a(36),E=Object(m.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1},appbar:{color:v.a}}}));var j=function(){var t=E();return n.a.createElement("div",{className:t.root},n.a.createElement(b.a,{position:"static",className:t.appbar,style:{backgroundColor:"#303030",color:"rgba(132.0, 201.0, 251.0, 1.0)"}},n.a.createElement(f.a,{className:t.toolbar},n.a.createElement(y.a,null),n.a.createElement(h.a,{variant:"h6",className:t.title},"Todo List"))))},O=(a(70),a(116)),w=a(50),x=a.n(w),C=a(114),k=a(115),T=a(118),S=a(117),N=a(122),A=function(t){function e(){var t,a;Object(i.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(n)))).getStyle=function(){return{textDecoration:a.props.todo.completed?"line-through":"none",color:"rgba(132.0, 201.0, 251.0, 1.0)"}},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,a=t.title;return n.a.createElement(C.a,{role:void 0,dense:!0,button:!0,style:this.getStyle()},n.a.createElement(k.a,null,n.a.createElement(N.a,{edge:"start",color:"default",onChange:this.props.markComplete.bind(this,e),style:{color:"rgba(132.0, 201.0, 251.0, 1.0)"}})),n.a.createElement(S.a,{disableTypography:!0,primary:n.a.createElement(h.a,null,a)}),n.a.createElement(T.a,null,n.a.createElement(O.a,{edge:"end","aria-label":"delete",onClick:this.props.delTodo.bind(this,e)},n.a.createElement(x.a,{style:{color:"rgba(132.0, 201.0, 251.0, 1.0)"}}))))}}]),e}(o.Component),B=a(119),W=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return n.a.createElement(B.a,null,n.a.createElement(A,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo}))}))}}]),e}(o.Component),D=a(121),G=function(t){function e(){var t,a;Object(i.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(n)))).state={title:""},a.onChange=function(t){return a.setState({title:t.target.value})},a.onSubmit=function(t){t.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},n.a.createElement(D.a,{id:"standard-full-width",color:"secondary",label:"What do you want to do...?",style:{margin:8,color:"rgba(132.0, 201.0, 251.0, 1.0)"},fullWidth:!0,required:!0,value:this.state.title,onChange:this.onChange}))}}]),e}(o.Component),J=a(31),M=a.n(J),q=a(120),I=a(74),L=function(t){function e(){var t,a;Object(i.a)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(n)))).state={todos:[{id:M.a.v4(),title:"Play with space time",completed:!1},{id:M.a.v4(),title:"Manipulate space time",completed:!1},{id:M.a.v4(),title:"Mess with space time",completed:!1}]},a.markComplete=function(t){a.setState({todos:a.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},a.delTodo=function(t){a.setState({todos:Object(c.a)(a.state.todos.filter((function(e){return e.id!==t})))})},a.addTodo=function(t){var e={id:M.a.v4(),title:t,completed:!1};a.setState({todos:[].concat(Object(c.a)(a.state.todos),[e])})},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(j,null),n.a.createElement(q.a,{maxWidth:"smx"},n.a.createElement(I.a,{style:{margin:"20px 2px 20px 2px",backgroundColor:"#272727",padding:"20px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},n.a.createElement(G,{addTodo:this.addTodo}),n.a.createElement(W,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo}))))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(L,null),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.bccbb732.chunk.js.map