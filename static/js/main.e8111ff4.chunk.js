(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),o=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user;if(!t)return null;var a=t.name,n=t.username,i=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(i),children:a},n)},b=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(m.jsxs)("article",{"data-id":a,className:u()("TodoInfo",{"TodoInfo--completed":!0===i}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),Object(m.jsx)(j,{user:r})]},a)},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e})}))})},O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:l.find((function(t){return t.id===e.userId}))})})),f=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(!1),c=Object(s.a)(i,2),d=c[0],u=c[1],j=Object(o.useState)(O),b=Object(s.a)(j,2),f=b[0],p=b[1],x=Object(o.useState)(""),v=Object(s.a)(x,2),y=v[0],S=v[1],N=Object(o.useState)(""),I=Object(s.a)(N,2),g=I[0],C=I[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault();var t=y.trim();if(t&&""!==g){var a=l.find((function(e){return e.id===Number(g)})),i={id:Math.max.apply(Math,Object(r.a)(f.map((function(e){return e.id}))).concat([0]))+1,title:t,completed:!1,userId:Number(g),user:a};p([].concat(Object(r.a)(f),[i])),n(!1),u(!1),S(""),C("")}else t||n(!0),""===g&&u(!0)},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("div",{children:"Title:"}),Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:y,onChange:function(e){S(e.target.value),n(!1)}}),!0===a&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("div",{children:"User:"}),Object(m.jsxs)("section",{className:"UserList",children:[Object(m.jsxs)("select",{"data-cy":"userSelect",value:g,onChange:function(e){C(e.target.value),u(!1)},children:[Object(m.jsx)("option",{value:"0",children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:String(e.id),children:e.name},e.username)}))]}),d&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:f})]})};i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e8111ff4.chunk.js.map