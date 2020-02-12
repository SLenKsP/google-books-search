(this["webpackJsonpgoogle-books-search"]=this["webpackJsonpgoogle-books-search"]||[]).push([[0],{24:function(e,t,a){e.exports=a(50)},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(20),r=a.n(o),c=a(53),i=a(55),s=a(54),m=a(21),u=a(5),h=a(6),d=a(8),v=a(7),E=a(9),f=function(e){var t=e.children;return l.a.createElement("ul",{className:"list-group"},t)};function b(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function g(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function p(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function k(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-".concat(e)})).join(" ")},a)}var N=function(e){var t=e.Title,a=e.Subtitle,n=e.Authors,o=e.Link,r=e.description,c=e.Image,i=e.Button;return l.a.createElement(b,null,l.a.createElement(p,{className:"flex-wrap-reverse"},l.a.createElement(k,{size:"md-8"},l.a.createElement("h4",{className:"font-italic"},t),a&&l.a.createElement("h5",{className:"font-italic"},a)),l.a.createElement(k,{size:"md-4"},l.a.createElement("div",{className:"btn-container"},l.a.createElement("a",{className:"btn btn-light",target:"_blank",rel:"noopener noreferrer",href:o},"View"),l.a.createElement(i,null)))),l.a.createElement(p,null,l.a.createElement(k,{size:"md-6"},l.a.createElement("p",{className:"font-italic small"},"Written by ",n))),l.a.createElement(p,null,l.a.createElement(k,{size:"12 sm-4 md-2"},l.a.createElement("img",{className:"img-thumbnail img-fluid w-100",src:c,alt:t})),l.a.createElement(k,{size:"12 sm-8, md-10"},l.a.createElement("p",null,r))))};var w=function(e){var t=e.children;return l.a.createElement("div",{className:"jumbotron"},t)};var y=function(e){var t=e.icon,a=e.title,n=e.children;return l.a.createElement("div",{className:"card mt-2"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h4",null,l.a.createElement("i",{className:"fa fa-".concat(t),"aria-hidden":"true"})," ",a)),l.a.createElement("div",{className:"card-body"},n))};var B=function(){return l.a.createElement("footer",null,l.a.createElement("hr",null))};var S=function(e){var t=e.query,a=e.handleInputChange,n=e.handleFormSubmit;return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Query",className:"font-weight-bolder"},"Book title"),l.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:t,placeholder:"Enter book Title",name:"query",onChange:a,required:!0})),l.a.createElement("div",{className:"pull-right"},l.a.createElement("button",{onClick:n,type:"submit",className:"btn btn-lg btn-success float-right"},"Search")))},j=a(10),I=a.n(j),O=function(e){return I.a.get("/api/google/",{params:{q:"".concat(e)}})},z=function(){return I.a.get("/api/books/")},C=function(e){return I.a.delete("/api/books/".concat(e))},x=function(e){return I.a.post("/api/books/",e)},W=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],query:"",message:"Enter the Book title"},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(m.a)({},n,l))},a.getBooks=function(){O(a.state.query).then((function(e){console.log("The response is ".concat(e.data.length)),a.setState({books:e.data})})).catch((function(){a.setState({books:[],message:"No books were found!"})}))},a.handleFormSubmit=function(e){e.preventDefault(),a.getBooks()},a.handleBookSave=function(e){var t=a.state.books.find((function(t){return t.id===e}));x({id:t.id,title:t.volumeInfo.title,url_link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail}).then((function(){return a.getBooks()}))},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(g,null,l.a.createElement(p,null,l.a.createElement(k,{size:"md-12"},l.a.createElement(w,null,l.a.createElement("h1",{className:"text-center"},"Search Google Books"),l.a.createElement("h3",{className:"text-center"},'Search a Book with entering Book title"'))),l.a.createElement(k,{size:"md-12"},l.a.createElement(y,{title:"Book Search",icon:"fas fa-search"},l.a.createElement(S,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,query:this.state.query})))),l.a.createElement(p,null,l.a.createElement(k,{size:"md-12"},l.a.createElement(y,{title:"Results",icon:"fas fa-book-open"},this.state.books.length?l.a.createElement(f,null,this.state.books.map((function(t){return l.a.createElement(N,{key:t.id,title:t.volumeInfo.title,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors.join(", "),description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,Button:function(){return l.a.createElement("button",{onClick:function(){return e.handleBookSave(t.id)},className:"btn btn-warning ml-2"},"Save")}})}))):l.a.createElement("h2",{className:"text-center"},this.state.message)))),l.a.createElement(B,null))}}]),t}(n.Component);var q=function(){return l.a.createElement(g,{fluid:!0},l.a.createElement(p,null,l.a.createElement(k,{size:"md-12"},l.a.createElement(w,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},D=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={books:[]},a.getSavedBooks=function(){z().then((function(e){console.log(e),a.setState({books:e.data})})).catch((function(e){return console.log(e)}))},a.handleBookDelete=function(e){C(e).then((function(e){a.getSavedBooks()}))},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement(g,null,l.a.createElement(p,null,l.a.createElement(k,{size:"md-12"},l.a.createElement(w,null,l.a.createElement("h1",{className:"text-center"},l.a.createElement("strong",null,"Google Books Search")),l.a.createElement("h2",{className:"text-center"},'These are the books you have curated. Press "View" to see more information on that title. Press "Delete" to ... well, you know ... delete an item from your Saved Books list.')))),l.a.createElement(p,null,l.a.createElement(k,{size:"md-12"},l.a.createElement(y,{title:"Saved Books",icon:"bookmark"},this.state.books.length?l.a.createElement(f,null,this.state.books.map((function(t){return l.a.createElement(N,{key:t.id,title:t.title,subtitle:t.subtitle,link:t.url_link,authors:t.authors.join(", "),description:t.description,image:t.image,Button:function(){return l.a.createElement("button",{onClick:function(){return e.handleBookDelete(t._id)},className:"btn btn-dark ml-2"},"Delete")}})}))):l.a.createElement("h2",{className:"text-center"},"You haven't saved any books yet.")))),l.a.createElement(B,null))}}]),t}(n.Component),F=a(52),L=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1,width:window.innerWidth},a.updateWidth=function(){var e={width:window.innerWidth};a.state.open&&e.width>960&&(e.open=!1),a.setState(e)},a.toggleNavBar=function(){a.setState({open:!a.state.open})},a}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-1"},l.a.createElement(F.a,{className:"navbar-brand",to:"/"},"Google Books Search"),l.a.createElement("button",{onClick:this.toggleNavBar,className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","area-expanded":"false","area-label":"Toggle Navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"".concat(this.state.open?"":"collapse ","navbar-collapse"),id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(F.a,{onClick:this.toggleNavBar,className:"/"===window.location.pathname?"nav-link active":"nav-link",to:"/"},"Search")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(F.a,{onClick:this.toggleNavBar,className:"/saved"===window.location.pathname?"nav-link active":"nav-link",to:"/saved"},"Saved")))))}}]),t}(n.Component);var T=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement(i.a,null,l.a.createElement(s.a,{exact:!0,path:"/",component:W}),l.a.createElement(s.a,{exact:!0,path:"/saved",component:D}),l.a.createElement(s.a,{component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.ac7bbcd7.chunk.js.map