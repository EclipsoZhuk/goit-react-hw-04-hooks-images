(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=a(16),i=a(5),l=a(6),u=a(8),h=a(7),d=(a(30),a(31),a(11)),m=a(14),g=a.n(m),p=a(25),b=a(15),j=a.n(b),f="23121091-79cfae32e8a9d261b4a6138dc";j.a.defaults.baseURL="https://pixabay.com/api/";var O=function(){var e=Object(p.a)(g.a.mark((function e(t){var a,n,r,o=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:1,e.prev=1,e.next=4,j.a.get("?q=".concat(t,"&page=").concat(a,"&key=").concat(f,"&image_type=photo&orientation=horizontal&per_page=12"));case 4:return n=e.sent,r=n.data.hits,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();function y(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}var v=a(12),w=a.n(v),S=a(1),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleSearchQueryChange=function(t){e.setState({searchQuery:t.target.value.toLowerCase()})},e.handleSubmit=function(t){var a=e.state.searchQuery,n=e.props.onSubmit;if(t.preventDefault(),""===a.trim())return d.b.error("Please,enter the correct request!",{position:"top-left"});n(a),e.setState({searchQuery:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.handleSearchQueryChange,t=this.handleSubmit,a=this.state.searchQuery;return Object(S.jsx)("header",{className:"Searchbar",children:Object(S.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(S.jsx)("input",{onChange:e,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,value:a,placeholder:"Search images and photos"}),Object(S.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(S.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]})})}}]),a}(n.Component);function k(e){var t=e.image,a=e.onOpenModal;return Object(S.jsx)("img",{onClick:function(){return a(t)},src:t.webformatURL,alt:t.tags,className:"ImageGalleryItem-image"})}function C(e){var t=e.images,a=e.onOpenModal;return Object(S.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(S.jsx)("li",{className:"ImageGalleryItem",children:Object(S.jsx)(k,{image:e,onOpenModal:a})},e.id)}))})}function M(e){var t=e.onClick;return Object(S.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})}var F=document.querySelector("#modal-root"),I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.handleBackdropClick,t=this.props.children;return Object(o.createPortal)(Object(S.jsx)("div",{className:"Overlay",onClick:e,children:Object(S.jsx)("div",{className:"Modal",children:t})}),F)}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",page:1,images:[],loading:!1,showModal:!1,largeImage:{}},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;return e.setState({loading:!0}),O(a,n).then((function(t){console.log(t),e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))}))},e.handlerFormSubmit=function(t){return e.setState({searchQuery:t,page:1,images:[]})},e.handleOpenModal=function(t){e.setState({largeImage:t}),e.toggleModal()},e.handleOnLoadClick=function(){e.setState({loading:!0}),e.fetchImages().then((function(){return y()})).catch((function(e){return console.log(e)})).finally((function(){return e.setState({loading:!1})}))},e.toggleModal=function(){return e.setState((function(e){return{showModal:!e.showModal}}))},e.hideLoaderInModal=function(){return e.setState({loading:!1})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.searchQuery!==t.searchQuery&&this.fetchImages().catch((function(e){return console.log(e)})).finally((function(){return a.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.handlerFormSubmit,t=this.handleOpenModal,a=this.handleOnLoadClick,n=this.toggleModal,r=this.hideLoaderInModal,o=this.state,c=o.images,s=o.loading,i=o.showModal,l=o.largeImage;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(d.a,{autoClose:3e3}),Object(S.jsx)(x,{onSubmit:e}),s&&Object(S.jsx)(w.a,{className:"spinner",type:"Circles",color:"#00BFFF",height:300,width:300}),0!==c.length&&Object(S.jsx)(C,{images:c,onOpenModal:t}),s&&!i&&Object(S.jsx)(w.a,{className:"spinner",type:"Circles",color:"#00BFFF",height:300,width:300}),!s&&c[0]&&Object(S.jsx)(M,{onClick:a}),i&&Object(S.jsxs)(I,{onClose:n,children:[s&&Object(S.jsx)(w.a,{className:"spinner",type:"Circles",color:"#00BFFF",height:300,width:300}),Object(S.jsx)("img",{src:l.largeImageURL,alt:l.tags,onLoad:r})]})]})}}]),a}(n.Component),L=N;a(72),a(73);c.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(L,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.5a89a957.chunk.js.map