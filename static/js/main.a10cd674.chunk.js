(this.webpackJsonpmoviedb=this.webpackJsonpmoviedb||[]).push([[0],{36:function(e,t,a){e.exports=a(67)},41:function(e,t,a){},42:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),c=a.n(o),i=(a(41),a(42),a(2)),l=a(13),m=a(3),s=a(4),u=a(6),p=a(5),v=a(8),d=a.n(v),h="ad72e3da31fb5a89ff269c553aa812c6",E=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={movieList:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/now_playing?api_key=".concat(h);d.a.get(t).then((function(t){var a=t.data.results;e.setState({movieList:a})}))}},{key:"render",value:function(){console.log(this.state.movieList);var e=this.state.movieList.map((function(e,t){return r.a.createElement("div",{className:"col s3",key:t},r.a.createElement(i.b,{to:"/movie/".concat(e.id)},r.a.createElement("img",{src:"".concat("http://image.tmdb.org/t/p/w300").concat(e.poster_path),alt:"movie"})))}));return r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"light-blue-text text-darken-1"},"Now Playing"),e)}}]),a}(n.Component),g=a(34),b=a(35);a(15).b.add(b.a);var f=function(){return r.a.createElement(g.a,{icon:"spinner",size:"6x",spin:!0})},w=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={movie:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieID,a="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(h);d.a.get(a).then((function(t){e.setState({movie:t.data})}))}},{key:"render",value:function(){if(void 0===this.state.movie.title)return r.a.createElement("div",{className:"spinner-wrapper"},r.a.createElement(f,null));var e=this.state.movie,t="http://image.tmdb.org/t/p/w300".concat(e.poster_path);return r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:"cover"}),r.a.createElement("p",null," Title: ",e.title),r.a.createElement("p",null," Release Date: ",e.release_date),r.a.createElement("p",null," Budget: ",e.budget),r.a.createElement("p",null," Tagline: ",e.tagline),r.a.createElement("p",null," Overview: ",e.overview))}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={popular:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://api.themoviedb.org/3/tv/popular?api_key=".concat(h);d.a.get(t).then((function(t){e.setState({popular:t.data.results})}))}},{key:"render",value:function(){console.log(this.state.popular);var e=this.state.popular.map((function(e,t){return r.a.createElement("div",{className:"col s3",key:t},r.a.createElement(i.b,{to:"/tvshows/".concat(e.id)},r.a.createElement("img",{src:"".concat("http://image.tmdb.org/t/p/w300").concat(e.poster_path),alt:"shows"})))}));return r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"light-blue-text text-darken-1"},"Popular"),e)}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={shows:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.tvShowID,a="https://api.themoviedb.org/3/tv/".concat(t,"?api_key=").concat(h);d.a.get(a).then((function(t){e.setState({shows:t.data})}))}},{key:"render",value:function(){if(console.log(this.props.match),void 0===this.state.shows.original_name)return r.a.createElement("div",{className:"spinner-wrapper"},r.a.createElement(f,null));var e=this.state.shows,t="http://image.tmdb.org/t/p/w300".concat(e.poster_path);return r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:"shows"}),r.a.createElement("p",null,"Title: ",e.original_name),r.a.createElement("p",null,"Overview: ",e.overview),r.a.createElement("p",null,"Number of seasons: ",e.number_of_seasons," "),e.networks.map((function(e,t){return r.a.createElement("p",{key:t},"Network: ",e.name,"  ")})))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null," ",r.a.createElement("h1",{className:"light-blue-text text-darken-1"},"Trending"))}}]),a}(n.Component),N=(a(65),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(i.c,{className:"dropdown-trigger",to:"#","data-target":"dropdown1"},this.props.movieTitle),r.a.createElement("ul",{id:"dropdown1",className:"dropdown-content dropdown"},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/movie/upcoming"},"Upcoming Movies")),r.a.createElement("li",{className:"divider",tabindex:"-1"}),r.a.createElement("li",null,r.a.createElement(i.c,{to:"#!"},"Popular")),r.a.createElement("li",{className:"divider",tabindex:"-1"}),r.a.createElement("li",null,r.a.createElement(i.c,{to:"#!"},"three"))),r.a.createElement(i.c,{className:"dropdown-trigger",to:"#","data-target":"dropdown2"},this.props.showTitle),r.a.createElement("ul",{id:"dropdown2",className:"dropdown-content dropdown"},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/tvshows/upcoming"},"Upcoming Shows")),r.a.createElement("li",{className:"divider",tabindex:"-1"}),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/tvshows"},"Popular")),r.a.createElement("li",{className:"divider",tabindex:"-1"}),r.a.createElement("li",null,r.a.createElement(i.c,{to:"#!"},"three"))),r.a.createElement(i.c,{className:"dropdown-trigger",to:"#","data-target":"dropdown3"},this.props.trendingTitle),r.a.createElement("ul",{id:"dropdown3",className:"dropdown-content dropdown"},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/trending/movies"},"Trending Movies"))))}}]),a}(n.Component)),y=(a(66),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={movieTitle:"",showTitle:"",trendingTitle:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".dropdown-trigger");window.M.Dropdown.init(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"light-blue darken-1"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement(i.c,{exact:!0,to:"#",className:"brand-logo center"},"Movie DB"),r.a.createElement("ul",{id:"nav-mobile",className:"left hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(i.c,{to:"/"}," ",r.a.createElement(N,{movieTitle:"Movie"}))),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/tvshows"},r.a.createElement(N,{showTitle:"TV Shows"}))),r.a.createElement("li",null,r.a.createElement(i.c,{to:"/trending"},r.a.createElement(N,{trendingTitle:"Trending"})))))))}}]),a}(n.Component)),x=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={upcomingMovie:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(h);d.a.get(t).then((function(t){console.log(t.data);var a=t.data.results;e.setState({upcomingMovie:a})}))}},{key:"render",value:function(){console.log(this.state.upcomingMovie);var e=this.state.upcomingMovie.map((function(e,t){return r.a.createElement("div",{className:"col s3",key:t},r.a.createElement(i.b,{to:"/movie/upcoming/".concat(e.id)},r.a.createElement("img",{src:"".concat("http://image.tmdb.org/t/p/w300").concat(e.poster_path),alt:"upcoming"})))}));return r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"light-blue-text text-darken-1"},"Upcoming"),e)}}]),a}(n.Component),D=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={movieDetail:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieID,a="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(h);d.a.get(a).then((function(t){console.log(t.data),e.setState({movieDetail:t.data})}))}},{key:"render",value:function(){if(void 0===this.state.movieDetail.title)return r.a.createElement("div",{className:"spinner-wrapper"},r.a.createElement(f,null));var e=this.state.movieDetail,t="http://image.tmdb.org/t/p/w300".concat(e.poster_path);return r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:"cover"}),r.a.createElement("p",null,"Title:",e.title))}}]),a}(n.Component),M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.call(this)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",{className:"light-blue-text text-darken-1"},"Upcoming Shows")}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.call(this)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",{className:"light-blue-text text-darken-1"},"Trending Movies")}}]),a}(n.Component);var _=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement("div",{className:"container"},r.a.createElement(l.a,{exact:!0,path:"/",component:E}),r.a.createElement(l.a,{exact:!0,path:"/movie/upcoming",component:x}),r.a.createElement(l.a,{path:"/movie/upcoming/:movieID",component:D}),r.a.createElement(l.a,{path:"/movie/:movieID",component:w}),r.a.createElement(l.a,{exact:!0,path:"/tvshows",component:O}),r.a.createElement(l.a,{exact:!0,path:"/tvshows/upcoming",component:M}),r.a.createElement(l.a,{path:"/tvshows/:tvShowID",component:j}),r.a.createElement(l.a,{path:"/trending",component:k}),r.a.createElement(l.a,{path:"/trending/movies",component:T}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a10cd674.chunk.js.map