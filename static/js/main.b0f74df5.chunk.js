(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s(2),n=s.n(r),i=s(12),c=s.n(i),l=s(13),u=s(4),d=s(5),o=s(7),h=s(6);function j(e){return Object(a.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"renderSquare",value:function(e){var t=this;return Object(a.jsx)(j,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(a.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),s}(n.a.Component),x=s(10),v=s(11);function O(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<t.length;s++){var a=Object(l.a)(t[s],3),r=a[0],n=a[1],i=a[2];if(e[r]&&e[r]===e[n]&&e[r]===e[i])return e[r]}return null}var f=function(e){Object(o.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(u.a)(this,s),(a=t.call(this,e)).state={squares:Array(9).fill(null),lastPlay:null,clickedUndo:!1,xIsNext:!0},a}return Object(d.a)(s,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();if(!O(t)&&!t[e]){var s=t.slice();t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,lastPlay:s,clickedUndo:!1,xIsNext:!this.state.xIsNext})}}},{key:"undo",value:function(){0===this.state.squares.filter((function(e){return null!=e})).length?this.restart():this.setState({lastPlay:this.state.squares,squares:this.state.lastPlay,clickedUndo:!this.state.clickedUndo,xIsNext:!this.state.xIsNext})}},{key:"restart",value:function(){this.setState({squares:Array(9).fill(null),lastPlay:null,xIsNext:!0})}},{key:"render",value:function(){var e,t,s=this,r=O(this.state.squares),n=null===this.state.lastPlay,i=n||this.state.clickedUndo?"disabled":"",c=n||!this.state.clickedUndo?"disabled":"";return r?(e="Winner: "+r,t="game-finished"):e="Next player: "+(this.state.xIsNext?"X":"O"),Object(a.jsxs)("div",{className:"game",children:[Object(a.jsx)("div",{className:"game-info",children:Object(a.jsx)("div",{className:t,children:e})}),Object(a.jsx)("div",{className:"game-board",children:Object(a.jsx)(b,{squares:this.state.squares,onClick:function(e){return s.handleClick(e)}})}),Object(a.jsxs)("div",{className:"game-controllers",children:[Object(a.jsx)("div",{onClick:function(){return s.undo()},className:i,children:Object(a.jsx)(x.a,{icon:v.b})}),Object(a.jsx)("div",{onClick:function(){return s.undo()},className:c,children:Object(a.jsx)(x.a,{icon:v.a})})]}),Object(a.jsx)("div",{className:"game-restart",children:Object(a.jsx)("button",{onClick:function(){return s.restart()},children:"Restart game"})})]})}}]),s}(n.a.Component);s(24);c.a.render(Object(a.jsx)(f,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b0f74df5.chunk.js.map