(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),l=(n(15),n(7)),s=n(3),i=(n(16),n(17),n(0));var r=function(e){var t="card "+e.className;return Object(i.jsx)("div",{className:t,children:e.children})},u=n(1),d=(n(19),function(e){return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(20),n(21),n(22);var o=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(i.jsxs)("div",{className:"expense-date",children:[Object(i.jsx)("div",{className:"expense-date__month",children:t}),Object(i.jsx)("div",{className:".expense-date__day",children:n}),Object(i.jsx)("div",{className:".expense-date__year",children:a})]})};var j=function(e){return Object(i.jsxs)(r,{className:"expense-item",children:[Object(i.jsx)(o,{date:e.date}),Object(i.jsxs)("div",{className:"expense-item__description",children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})},b=function(e){return 0===e.items.length?Object(i.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(i.jsx)("li",{className:"expenses-list",children:e.items.map((function(e){return Object(i.jsx)(j,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},x=n(10);n(23),n(24);function m(e){var t="0%";return e.maxValue>0&&(console.log(e.value/e.maxValue),t=Math.round(e.value/e.maxValue*100)+"%"),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:e.label})]})}function v(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(i.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(i.jsx)(m,{value:e.value,maxValue:n,label:e.label},e.label)}))})}function O(e){var t,n=[{label:"Jan",value:"0"},{label:"Feb",value:"0"},{label:"Mar",value:"0"},{label:"Apr",value:"0"},{label:"May",value:"0"},{label:"Jun",value:"0"},{label:"Jul",value:"0"},{label:"Aug",value:"0"},{label:"Sep",value:"0"},{label:"Oct",value:"0"},{label:"Nov",value:"0"},{label:"Dec",value:"0"}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(i.jsx)(v,{dataPoints:n})}var h=function(e){var t=Object(u.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(i.jsxs)(r,{className:"expenses",children:[Object(i.jsx)(d,{selected:a,onChangeFilter:function(e){c(e)}}),Object(i.jsx)(O,{expenses:l}),Object(i.jsx)(b,{items:l})]})},p=n(4),f=n(6),_=(n(25),function(e){var t=Object(u.useState)({enteredTitle:"",enteredAmount:"",enteredDate:""}),n=Object(s.a)(t,2),a=n[0],c=n[1],l=function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(f.a)({},n,a))}))};return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a.enteredTitle,amount:a.enteredAmount,date:new Date(a.enteredDate)};e.onSaveExpenseData(n),c({enteredTitle:"",enteredAmount:"",enteredDate:""})},children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Title"}),Object(i.jsx)("input",{type:"text",name:"enteredTitle",value:a.enteredTitle,onChange:l})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Amount"}),Object(i.jsx)("input",{type:"number",min:"0.01",step:"0.01",name:"enteredAmount",value:a.enteredAmount,onChange:l})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{htmlFor:"",children:"Date"}),Object(i.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",name:"enteredDate",value:a.enteredDate,onChange:l})]})]}),Object(i.jsx)("div",{className:"new-expense__actions",children:Object(i.jsx)("button",{type:"submit",children:"Add Expense"})})]})}),N=(n(26),function(e){return Object(i.jsx)("div",{className:"new-expense",children:Object(i.jsx)(_,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onSaveData(n)}})})}),g=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2020,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var D=function(){var e=Object(u.useState)(g),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(N,{onSaveData:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(i.jsx)(h,{items:n})]})};c.a.render(Object(i.jsx)(D,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.a71d2b5b.chunk.js.map