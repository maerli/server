(this.webpackJsonpmaresia=this.webpackJsonpmaresia||[]).push([[0],{30:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/maresia.cc2c0c6d.jpg"},52:function(e,t,a){e.exports=a(96)},57:function(e,t,a){},58:function(e,t,a){},88:function(e,t){},91:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(46),o=a.n(s),c=(a(57),a(2)),i=a(3),l=a(5),u=a(4),d=a(6),p=(a(58),a(11)),m=a(13),h=a(1),v=a.n(h),f=(a(30),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{className:"waves-effect waves-light btn modal-trigger",href:"#modal1"},"Modal"),r.a.createElement("div",{id:"modal1",className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",null,this.props.title),r.a.createElement("p",null,this.props.data)),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("a",{href:"#!",className:"modal-close waves-effect waves-green btn-flat"},"Fechar"))))}}]),t}(n.Component)),b=a(20),y=a.n(b),E=window.location.protocol+"//"+window.location.hostname+":4000",k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={pedidos:null,mesas:null,categorias:null,sprodutos:null,mesa:null,garcon:localStorage.getItem("user"),data:Date.now(),status:0,total:0,produtos:[],title:"atual",search:"",socket:y()(E)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"_makePedido",value:function(e){var t,a,n,r;return v.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:t=e.preco,a=!1,s.t0=v.a.keys(this.state.produtos);case 3:if((s.t1=s.t0()).done){s.next=12;break}if(r=s.t1.value,(n=this.state.produtos.slice())[r].id_produto!=e.id_produto){s.next=10;break}return n[r].quantidade+=1,a=!0,s.abrupt("break",12);case 10:s.next=3;break;case 12:a||(e.quantidade=1,n=(n=this.state.produtos.slice()).concat(e),console.log(n)),this.setState({produtos:n,total:this.state.total+t});case 14:case"end":return s.stop()}}),null,this)}},{key:"_getProduto",value:function(e){var t,a,n,s,o,c,i,l,u,d;return v.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,v.a.awrap(fetch(E+"/database/produtos"));case 2:return t=p.sent,p.next=5,v.a.awrap(t.json());case 5:for(a=p.sent,n=[],s=!0,o=!1,c=void 0,p.prev=10,i=a[Symbol.iterator]();!(s=(l=i.next()).done);s=!0)u=l.value,d=r.a.createElement("div",{className:"hand",onClick:this._makePedido.bind(this,u),key:u.id_produto}," ",u.nome," R$ ",u.preco.toFixed(2)),n.push(d);p.next=18;break;case 14:p.prev=14,p.t0=p.catch(10),o=!0,c=p.t0;case 18:p.prev=18,p.prev=19,s||null==i.return||i.return();case 21:if(p.prev=21,!o){p.next=24;break}throw c;case 24:return p.finish(21);case 25:return p.finish(18);case 26:this.setState({sprodutos:n,categoria:e,title:"Produtos",data:n});case 27:case"end":return p.stop()}}),null,this,[[10,14,18,26],[19,,21,25]])}},{key:"_getCategorias",value:function(e){var t,a,n,s,o,c,i,l,u,d;return v.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,v.a.awrap(fetch(E+"/database/categorias"));case 2:return t=p.sent,p.next=5,v.a.awrap(t.json());case 5:for(a=p.sent,n=[],s=!0,o=!1,c=void 0,p.prev=10,i=a[Symbol.iterator]();!(s=(l=i.next()).done);s=!0)u=l.value,d=r.a.createElement("div",{className:"hand",onClick:this._getProduto.bind(this,u.nome),key:u.id_categoria},u.nome," "),n.push(d);p.next=18;break;case 14:p.prev=14,p.t0=p.catch(10),o=!0,c=p.t0;case 18:p.prev=18,p.prev=19,s||null==i.return||i.return();case 21:if(p.prev=21,!o){p.next=24;break}throw c;case 24:return p.finish(21);case 25:return p.finish(18);case 26:this.setState({categorias:n,mesa:e,data:n,title:"Categorias"});case 27:case"end":return p.stop()}}),null,this,[[10,14,18,26],[19,,21,25]])}},{key:"_pedidos",value:function(e){var t,a,n,s,o,c,i,l,u,d,p,m,h,f,b,y,k,g;return v.a.async((function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,v.a.awrap(fetch(E+e));case 2:return t=x.sent,x.next=5,v.a.awrap(t.json());case 5:a=x.sent,n=[],s=!0,o=!1,c=void 0,x.prev=10,i=a[Symbol.iterator]();case 12:if(s=(l=i.next()).done){x.next=40;break}for(u=l.value,d=JSON.parse(u.produtos).reverse(),p=[],m=!0,h=!1,f=void 0,x.prev=19,b=d[Symbol.iterator]();!(m=(y=b.next()).done);m=!0)k=y.value,p.push(r.a.createElement("div",{style:{fontSize:"20px"}},"(",k.quantidade,") ",r.a.createElement("strong",null,k.nome)," >>> ",(k.preco*k.quantidade).toFixed(2)," "));x.next=27;break;case 23:x.prev=23,x.t0=x.catch(19),h=!0,f=x.t0;case 27:x.prev=27,x.prev=28,m||null==b.return||b.return();case 30:if(x.prev=30,!h){x.next=33;break}throw f;case 33:return x.finish(30);case 34:return x.finish(27);case 35:g=r.a.createElement(w,{key:u.id_pedido,title:u.mesa,data:p,status:u.status,id:u.id_pedido,socket:this.state.socket,total:u.total.toFixed(2)}),n.push(g);case 37:s=!0,x.next=12;break;case 40:x.next=46;break;case 42:x.prev=42,x.t1=x.catch(10),o=!0,c=x.t1;case 46:x.prev=46,x.prev=47,s||null==i.return||i.return();case 49:if(x.prev=49,!o){x.next=52;break}throw c;case 52:return x.finish(49);case 53:return x.finish(46);case 54:return console.log(e),x.abrupt("return",n.reverse());case 56:case"end":return x.stop()}}),null,this,[[10,42,46,54],[19,23,27,35],[28,,30,34],[47,,49,53]])}},{key:"componentDidMount",value:function(){var e,t,a,n,s,o,c,i,l,u,d,p=this;return v.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,v.a.awrap(fetch(E+"/database/mesas"));case 2:return e=m.sent,m.next=5,v.a.awrap(e.json());case 5:for(t=m.sent,a=[],n=!0,s=!1,o=void 0,m.prev=10,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0)l=i.value,u=r.a.createElement("div",{className:"hand",onClick:this._getCategorias.bind(this,l.nome),key:l.id_mesa,value:l.nome},r.a.createElement("a",{className:"waves-effect waves-light btn modal-trigger",href:"#modal1"},l.nome," ")),a.push(u);m.next=18;break;case 14:m.prev=14,m.t0=m.catch(10),s=!0,o=m.t0;case 18:m.prev=18,m.prev=19,n||null==c.return||c.return();case 21:if(m.prev=21,!s){m.next=24;break}throw o;case 24:return m.finish(21);case 25:return m.finish(18);case 26:return m.next=28,v.a.awrap(this._pedidos("/database/pedidos"));case 28:d=m.sent,this.setState({pedidos:d,mesas:a}),this.state.socket.on("reload",(function(e){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,v.a.awrap(p._pedidos("/database/pedidos"));case 3:return e.t1=e.sent,e.t2={pedidos:e.t1},e.abrupt("return",e.t0.setState.call(e.t0,e.t2));case 6:case"end":return e.stop()}}))}));case 31:case"end":return m.stop()}}),null,this,[[10,14,18,26],[19,,21,25]])}},{key:"_insertPedido",value:function(){var e,t,a,n,r,s,o,c,i;return v.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=this.state,t=e.mesa,a=e.garcon,n=e.data,r=e.status,s=e.total,o=e.produtos,l.next=3,v.a.awrap(fetch(E+"/insert/pedidos",{method:"POST",headers:{"Content-Type":"application/json",Accept:"aplication/json"},body:JSON.stringify({mesa:t,garcon:a,data:n,status:r,total:s,produtos:JSON.stringify(o)})}));case 3:return c=l.sent,l.next=6,v.a.awrap(c.json());case 6:i=l.sent,console.log(i);case 8:case"end":return l.stop()}}),null,this)}},{key:"_click",value:function(){this._insertPedido(),console.log(this.state)}},{key:"_table",value:function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null," ",r.a.createElement("td",null," Mesa ")," ",r.a.createElement("td",null," Pre\xe7o ")," ",r.a.createElement("td",null," Quantidade ")," ")),r.a.createElement("tbody",null,this.state.produtos&&this.state.produtos.map((function(e){return r.a.createElement("tr",{key:e.id_produto},r.a.createElement("td",null," ",e.nome," "),r.a.createElement("td",null," ",r.a.createElement("strong",null," R$ ",e.preco.toFixed(2))," "),r.a.createElement("td",null," ",r.a.createElement("strong",null," ",e.quantidade," ")," "))})))),"Pre\xe7o total : ",r.a.createElement("span",null," ",r.a.createElement("strong",null,"R$ ",this.state.total," ")),r.a.createElement("button",{className:"btn",onClick:this._click.bind(this)},"Enviar "))}},{key:"_change",value:function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.awrap(this._pedidos("/select/pedidos/id_pedido/"+this.state.search));case 2:t.sent,this.setState({search:e.target.value});case 4:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"none"}},this.state.mesas),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"none"}}," ",this._table()," "),r.a.createElement("div",null," ",r.a.createElement("input",{type:"text",placeholder:"buscar",onChange:this._change.bind(this)})),r.a.createElement("div",null," ",this.state.pedidos," "),r.a.createElement(f,{title:this.state.title,data:this.state.data})))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={status:a.props.status,arquivado:"block",socket:a.props.socket},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"_preparar",value:function(e,t){var a;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(fetch(E+"/edit/pedidos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({coluna1:"id_pedido",value1:t,coluna2:"status",value2:e})}));case 2:return a=n.sent,n.next=5,v.a.awrap(a.json());case 5:n.sent,this.setState({status:e}),this.state.socket.emit("newPedido"),this.state.socket.emit("novo_pedido",{garcon:"maerli",id_pedido:t});case 9:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row",style:{display:this.state.arquivado}},4!==this.state.status&&r.a.createElement("div",{className:"col s12 m10"},r.a.createElement("div",{className:"card "+["green","blue","black","yellow"][this.state.status]+" darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},r.a.createElement("span",{className:""},"Pedido n\xb0 ",this.props.id)),r.a.createElement("div",null,r.a.createElement("h5",null," ",this.props.title," "),this.props.data,["recebido","preparando","pronto","arquivado"][this.state.status],r.a.createElement("br",null),"Valor total do pedido : (",this.props.total,")")),r.a.createElement("div",{className:"card-action"},r.a.createElement("button",{className:"btn",onClick:this._preparar.bind(this,1,this.props.id)},"Preparar"),r.a.createElement("button",{className:"btn red"},"Cancelar"),r.a.createElement("button",{className:"btn orange",onClick:this._preparar.bind(this,2,this.props.id)}," Pronto "),r.a.createElement("button",{className:"btn grey",onClick:this._preparar.bind(this,4,this.props.id)}," Arquivar ")))))}}]),t}(n.Component),g=a(47),x=a.n(g),j=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m7"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:x.a}),r.a.createElement("span",{className:"card-title"},"Card Title")),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.")),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:"/"},"This is a link")))))}}]),t}(n.Component),O=(window.location.protocol,window.location.hostname,function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(f,null))}}]),t}(n.Component)),_=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-action"},"Este aplicativo foi desenvolvido por includeSoft.")))}}]),t}(n.Component),S=window.location.protocol+"//"+window.location.hostname+":4000",N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={garcon:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,s,o,c,i,l;return v.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,v.a.awrap(fetch(S+"/database/garcon"));case 2:return e=u.sent,u.next=5,v.a.awrap(e.json());case 5:for(t=u.sent,a=[],n=!0,s=!1,o=void 0,u.prev=10,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0)l=i.value,a.push(r.a.createElement("div",{key:l.id_garco},l.nome," ",l.sobrenome));u.next=18;break;case 14:u.prev=14,u.t0=u.catch(10),s=!0,o=u.t0;case 18:u.prev=18,u.prev=19,n||null==c.return||c.return();case 21:if(u.prev=21,!s){u.next=24;break}throw o;case 24:return u.finish(21);case 25:return u.finish(18);case 26:this.setState({garcon:a});case 27:case"end":return u.stop()}}),null,this,[[10,14,18,26],[19,,21,25]])}},{key:"_addGarcon",value:function(){var e,t,a,n,r,s,o;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=document.querySelector("#nome").value,t=document.querySelector("#sobrenome").value,a=document.querySelector("#senha").value,n=document.querySelector("#src").value,r={nome:e,sobrenome:t,senha:a,src:n},c.next=7,v.a.awrap(fetch(S+"/insert/garcon",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}));case 7:return s=c.sent,c.next=10,v.a.awrap(s.json());case 10:o=c.sent,console.log(o);case 12:case"end":return c.stop()}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"nome",placeholder:"nome"}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"sobrenome",placeholder:"sobrenome"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",id:"senha",placeholder:"senha"}),r.a.createElement("br",null),r.a.createElement("input",{type:"hidden",id:"src",value:"null"}),r.a.createElement("input",{type:"submit",onClick:this._addGarcon,value:"Criar",className:"btn green"}),this.state.garcon)}}]),t}(n.Component),C=a(48),P=window.location.protocol+"//"+window.location.hostname+":4000",q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={produtos:null,categorias:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,s,o,c,i,l,u,d,p,m,h,f,b,y,E,k,w;return v.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,v.a.awrap(fetch(P+"/database/produtos"));case 2:return e=g.sent,g.next=5,v.a.awrap(fetch(P+"/database/categorias"));case 5:return t=g.sent,g.next=8,v.a.awrap(e.json());case 8:return a=g.sent,g.next=11,v.a.awrap(t.json());case 11:for(n=g.sent,s=[],o=!0,c=!1,i=void 0,g.prev=16,l=a[Symbol.iterator]();!(o=(u=l.next()).done);o=!0)d=u.value,p=r.a.createElement("div",{key:d.id_produto}," ",d.nome," "),s.push(p);g.next=24;break;case 20:g.prev=20,g.t0=g.catch(16),c=!0,i=g.t0;case 24:g.prev=24,g.prev=25,o||null==l.return||l.return();case 27:if(g.prev=27,!c){g.next=30;break}throw i;case 30:return g.finish(27);case 31:return g.finish(24);case 32:for(m=[],h=!0,f=!1,b=void 0,g.prev=36,y=n[Symbol.iterator]();!(h=(E=y.next()).done);h=!0)k=E.value,w=r.a.createElement("option",{key:k.id_categoria,value:k.nome}," ",k.nome," "),m.push(w);g.next=44;break;case 40:g.prev=40,g.t1=g.catch(36),f=!0,b=g.t1;case 44:g.prev=44,g.prev=45,h||null==y.return||y.return();case 47:if(g.prev=47,!f){g.next=50;break}throw b;case 50:return g.finish(47);case 51:return g.finish(44);case 52:this.setState({produtos:s,categorias:m});case 53:case"end":return g.stop()}}),null,this,[[16,20,24,32],[25,,27,31],[36,40,44,52],[45,,47,51]])}},{key:"_insertProduto",value:function(e){var t,a;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(fetch(P+"/insert/produtos",{method:"POST",headers:{"Content-Type":"application/json",Accept:"aplication/json"},body:e}));case 2:return t=n.sent,n.next=5,v.a.awrap(t.json());case 5:a=n.sent,console.log(a);case 7:case"end":return n.stop()}}))}},{key:"_click",value:function(){var e=document.querySelector("#nome").value,t=document.querySelector("#categoria").value,a=document.querySelector("#preco").value,n=document.querySelector("#descricao").value,r=document.querySelector("#img").value,s=JSON.stringify(Object(C.a)({nome:e,categoria:t,preco:a,descricao:n,img:r},"categoria",t));this._insertProduto(s)}},{key:"render",value:function(){return r.a.createElement("div",{className:"col s6"},r.a.createElement("input",{id:"nome",type:"text",placeholder:"nome"}),r.a.createElement("input",{id:"preco",type:"text",placeholder:"pre\xe7o"}),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("strong",null," Categoria "),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("select",{id:"categoria",style:{display:"block"}},r.a.createElement("label",null,"Materialize Select"),this.state.categorias))),r.a.createElement("textarea",{id:"descricao",placeholder:"Descri\xe7\xe3o"}),r.a.createElement("input",{type:"hidden",id:"img",value:"default.png"}),r.a.createElement("input",{className:"btn waves-effect waves-light",type:"button",onClick:this._click.bind(this),value:"Criar"}),r.a.createElement("div",{id:"mesas"},this.state.produtos))}}]),t}(n.Component),T=window.location.protocol+"//"+window.location.hostname+":4000",M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={mesas:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,s,o,c,i,l,u;return v.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,v.a.awrap(fetch(T+"/database/mesas"));case 2:return e=d.sent,d.next=5,v.a.awrap(e.json());case 5:for(t=d.sent,a=[],n=!0,s=!1,o=void 0,d.prev=10,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0)l=i.value,u=r.a.createElement("div",{style:A.mesa,key:l.id_mesa}," ",l.nome," "),a.push(u);d.next=18;break;case 14:d.prev=14,d.t0=d.catch(10),s=!0,o=d.t0;case 18:d.prev=18,d.prev=19,n||null==c.return||c.return();case 21:if(d.prev=21,!s){d.next=24;break}throw o;case 24:return d.finish(21);case 25:return d.finish(18);case 26:this.setState({mesas:a});case 27:case"end":return d.stop()}}),null,this,[[10,14,18,26],[19,,21,25]])}},{key:"_insertMesa",value:function(e){var t,a;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(fetch(T+"/insert/mesas",{method:"POST",headers:{"Content-Type":"application/json",Accept:"aplication/json"},body:e}));case 2:return t=n.sent,n.next=5,v.a.awrap(t.json());case 5:a=n.sent,console.log(a);case 7:case"end":return n.stop()}}))}},{key:"_click",value:function(){var e=document.querySelector("#nome").value,t=JSON.stringify({nome:e});this._insertMesa(t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{id:"nome",type:"text",placeholder:"Nome da mesa"})," ",r.a.createElement("br",null),r.a.createElement("input",{type:"button",className:"btn",onClick:this._click.bind(this),value:"Criar"}),r.a.createElement("div",{id:"mesas"},this.state.mesas))}}]),t}(n.Component),A={mesa:{border:"1px solid gray",padding:"5px",borderRadius:"10px",margin:"4px",cursor:"pointer"}},J=window.location.protocol+"//"+window.location.hostname+":4000",D=function(e){function t(e){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"_verify",value:function(){var e;return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getIytem("user"),t.abrupt("return",e);case 2:case"end":return t.stop()}}))}},{key:"_signin",value:function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem("user",e),alert(e);case 2:case"end":return t.stop()}}))}},{key:"_login",value:function(e,t){var a,n;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=JSON.stringify({user:e,senha:t}),r.next=3,v.a.awrap(fetch(J+"/garcon",{method:"POST",headers:{"Content-Type":"application/json",Accept:"aplication/json"},body:a}));case 3:return n=r.sent,r.next=6,v.a.awrap(n.json());case 6:r.sent.user&&this._signin(e);case 8:case"end":return r.stop()}}),null,this)}},{key:"_click",value:function(){var e=document.querySelector("#user").value,t=document.querySelector("#senha").value;this._login(e,t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{id:"user",type:"text"})," ",r.a.createElement("br",null),r.a.createElement("input",{id:"senha",type:"password"}),r.a.createElement("br",null),r.a.createElement("input",{className:"btn",type:"button",onClick:this._click.bind(this),value:"entrar"})))}}]),t}(n.Component),I=window.location.protocol+"//"+window.location.hostname+":4000",R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={categorias:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t,a,n,s,o,c,i,l,u;return v.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,v.a.awrap(fetch(I+"/database/categorias"));case 2:return e=d.sent,d.next=5,v.a.awrap(e.json());case 5:for(t=d.sent,a=[],n=!0,s=!1,o=void 0,d.prev=10,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0)l=i.value,u=r.a.createElement("div",{key:l.id_categoria}," ",l.nome," "),a.push(u);d.next=18;break;case 14:d.prev=14,d.t0=d.catch(10),s=!0,o=d.t0;case 18:d.prev=18,d.prev=19,n||null==c.return||c.return();case 21:if(d.prev=21,!s){d.next=24;break}throw o;case 24:return d.finish(21);case 25:return d.finish(18);case 26:this.setState({categorias:a});case 27:case"end":return d.stop()}}),null,this,[[10,14,18,26],[19,,21,25]])}},{key:"_insertCategoria",value:function(e){var t,a;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(fetch(I+"/insert/categorias",{method:"POST",headers:{"Content-Type":"application/json",Accept:"aplication/json"},body:e}));case 2:return t=n.sent,n.next=5,v.a.awrap(t.json());case 5:a=n.sent,console.log(a);case 7:case"end":return n.stop()}}))}},{key:"_click",value:function(){var e=document.querySelector("#nome").value,t=JSON.stringify({nome:e});this._insertCategoria(t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{id:"nome",type:"text",placeholder:"nome"})," ",r.a.createElement("br",null),r.a.createElement("input",{type:"button",className:"btn",onClick:this._click.bind(this),value:"Criar"}),r.a.createElement("div",{id:"categorias"},this.state.categorias))}}]),t}(n.Component),W=window.location.protocol+"//"+window.location.hostname+":4000",F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={pedidos:null,mesas:null,categorias:null,sprodutos:null,mesa:null,garcon:localStorage.getItem("user"),data:Date.now(),status:0,total:0,produtos:[],title:"atual",search:"",socket:y()(W)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"_makePedido",value:function(e){var t,a,n,r;return v.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:t=e.preco,a=!1,s.t0=v.a.keys(this.state.produtos);case 3:if((s.t1=s.t0()).done){s.next=12;break}if(r=s.t1.value,(n=this.state.produtos.slice())[r].id_produto!=e.id_produto){s.next=10;break}return n[r].quantidade+=1,a=!0,s.abrupt("break",12);case 10:s.next=3;break;case 12:a||(e.quantidade=1,n=(n=this.state.produtos.slice()).concat(e),console.log(n)),this.setState({produtos:n,total:this.state.total+t});case 14:case"end":return s.stop()}}),null,this)}},{key:"_getProduto",value:function(e){var t,a,n,s,o,c,i,l,u,d;return v.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,v.a.awrap(fetch(W+"/select/produtos/categoria/"+e));case 2:return t=p.sent,p.next=5,v.a.awrap(t.json());case 5:for(a=p.sent,n=[],s=!0,o=!1,c=void 0,p.prev=10,i=a[Symbol.iterator]();!(s=(l=i.next()).done);s=!0)u=l.value,d=r.a.createElement("div",{className:"hand",onClick:this._makePedido.bind(this,u),key:u.id_produto}," ",u.nome," R$ ",u.preco.toFixed(2)),n.push(d);p.next=18;break;case 14:p.prev=14,p.t0=p.catch(10),o=!0,c=p.t0;case 18:p.prev=18,p.prev=19,s||null==i.return||i.return();case 21:if(p.prev=21,!o){p.next=24;break}throw c;case 24:return p.finish(21);case 25:return p.finish(18);case 26:this.setState({sprodutos:n,categoria:e,title:"Produtos",data:n});case 27:case"end":return p.stop()}}),null,this,[[10,14,18,26],[19,,21,25]])}},{key:"_getCategorias",value:function(e){var t,a,n,s,o,c,i,l,u,d;return v.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,v.a.awrap(fetch(W+"/database/categorias"));case 2:return t=p.sent,p.next=5,v.a.awrap(t.json());case 5:for(a=p.sent,n=[],s=!0,o=!1,c=void 0,p.prev=10,i=a[Symbol.iterator]();!(s=(l=i.next()).done);s=!0)u=l.value,d=r.a.createElement("div",{className:"hand",onClick:this._getProduto.bind(this,u.nome),key:u.id_categoria}," ",u.nome," "),n.push(d);p.next=18;break;case 14:p.prev=14,p.t0=p.catch(10),o=!0,c=p.t0;case 18:p.prev=18,p.prev=19,s||null==i.return||i.return();case 21:if(p.prev=21,!o){p.next=24;break}throw c;case 24:return p.finish(21);case 25:return p.finish(18);case 26:this.setState({categorias:n,mesa:e,data:n,title:"Categorias"});case 27:case"end":return p.stop()}}),null,this,[[10,14,18,26],[19,,21,25]])}},{key:"_pedidos",value:function(e){var t,a,n,s,o,c,i,l,u,d,p,m,h,f,b,y,E,k;return v.a.async((function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,v.a.awrap(fetch(W+e));case 2:return t=w.sent,w.next=5,v.a.awrap(t.json());case 5:a=w.sent,n=[],s=!0,o=!1,c=void 0,w.prev=10,i=a[Symbol.iterator]();case 12:if(s=(l=i.next()).done){w.next=40;break}for(u=l.value,d=JSON.parse(u.produtos).reverse(),p=[],m=!0,h=!1,f=void 0,w.prev=19,b=d[Symbol.iterator]();!(m=(y=b.next()).done);m=!0)E=y.value,p.push(r.a.createElement("div",null,"Produto ",r.a.createElement("strong",null,E.nome),"Quantidade ",E.quantidade," ",r.a.createElement("br",null)));w.next=27;break;case 23:w.prev=23,w.t0=w.catch(19),h=!0,f=w.t0;case 27:w.prev=27,w.prev=28,m||null==b.return||b.return();case 30:if(w.prev=30,!h){w.next=33;break}throw f;case 33:return w.finish(30);case 34:return w.finish(27);case 35:k=r.a.createElement($,{key:u.id_pedido,title:u.mesa,data:p,status:u.status,total:u.total,id:u.id_pedido}),n.push(k);case 37:s=!0,w.next=12;break;case 40:w.next=46;break;case 42:w.prev=42,w.t1=w.catch(10),o=!0,c=w.t1;case 46:w.prev=46,w.prev=47,s||null==i.return||i.return();case 49:if(w.prev=49,!o){w.next=52;break}throw c;case 52:return w.finish(49);case 53:return w.finish(46);case 54:return n=n.reverse(),this.setState({pedidos:n}),w.abrupt("return",n);case 57:case"end":return w.stop()}}),null,this,[[10,42,46,54],[19,23,27,35],[28,,30,34],[47,,49,53]])}},{key:"componentDidMount",value:function(){var e,t,a,n,s,o,c,i,l,u,d=this;return v.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,v.a.awrap(fetch(W+"/database/mesas"));case 2:return e=p.sent,p.next=5,v.a.awrap(e.json());case 5:for(t=p.sent,a=[],n=!0,s=!1,o=void 0,p.prev=10,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0)l=i.value,u=r.a.createElement("div",{className:"hand",onClick:this._getCategorias.bind(this,l.nome),key:l.id_mesa,value:l.nome},r.a.createElement("a",{className:"waves-effect waves-light btn modal-trigger",href:"#modal1"},l.nome," ")),a.push(u);p.next=18;break;case 14:p.prev=14,p.t0=p.catch(10),s=!0,o=p.t0;case 18:p.prev=18,p.prev=19,n||null==c.return||c.return();case 21:if(p.prev=21,!s){p.next=24;break}throw o;case 24:return p.finish(21);case 25:return p.finish(18);case 26:return p.next=28,v.a.awrap(this._pedidos("/select/pedidos/garcon/"+this.state.garcon));case 28:this.setState({mesas:a}),this.state.socket.on("reload",(function(e){return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d._pedidos("/select/pedidos/garcon/"+d.state.garcon));case 1:case"end":return e.stop()}}))}));case 30:case"end":return p.stop()}}),null,this,[[10,14,18,26],[19,,21,25]])}},{key:"_insertPedido",value:function(){var e,t,a,n,r,s,o,c,i;return v.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return e=this.state,t=e.mesa,a=e.garcon,n=e.data,r=e.status,s=e.total,o=e.produtos,l.next=3,v.a.awrap(fetch(W+"/insert/pedidos",{method:"POST",headers:{"Content-Type":"application/json",Accept:"aplication/json"},body:JSON.stringify({mesa:t,garcon:a,data:n,status:r,total:s,produtos:JSON.stringify(o)})}));case 3:return c=l.sent,l.next=6,v.a.awrap(c.json());case 6:i=l.sent,console.log(i),this.state.socket.emit("newPedido");case 9:case"end":return l.stop()}}),null,this)}},{key:"_click",value:function(){this._insertPedido()}},{key:"_table",value:function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null," ",r.a.createElement("td",null," Mesa ")," ",r.a.createElement("td",null," Pre\xe7o ")," ",r.a.createElement("td",null," Quantidade ")," ")),r.a.createElement("tbody",null,this.state.produtos&&this.state.produtos.map((function(e){return r.a.createElement("tr",{key:e.id_produto},r.a.createElement("td",null," ",e.nome," "),r.a.createElement("td",null," ",r.a.createElement("strong",null," R$ ",e.preco.toFixed(2))," "),r.a.createElement("td",null," ",r.a.createElement("strong",null," ",e.quantidade," ")," "))})))),"Pre\xe7o total : ",r.a.createElement("span",null," ",r.a.createElement("strong",null,"R$ ",this.state.total," ")),r.a.createElement("button",{className:"btn",onClick:this._click.bind(this)},"Enviar "))}},{key:"_change",value:function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.awrap(this._pedidos("/select/pedidos/id_pedido/"+this.state.search));case 2:t.sent,this.setState({search:e.target.value});case 4:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.state.mesas),r.a.createElement("div",null,r.a.createElement("div",null," ",this._table()," "),r.a.createElement("div",null," ",r.a.createElement("input",{type:"text",placeholder:"buscar",onChange:this._change.bind(this)})),r.a.createElement("div",null," ",this.state.pedidos," "),r.a.createElement(f,{title:this.state.title,data:this.state.data})))}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={status:a.props.status,aquivado:"block",socket:a.props.socket},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"_preparar",value:function(e,t){var a,n;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(4!=e){r.next=4;break}this.setState({arquivado:"none"}),r.next=12;break;case 4:return r.next=6,v.a.awrap(fetch(W+"/edit/pedidos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({coluna1:"id_pedido",value1:t,coluna2:"status",value2:e})}));case 6:return a=r.sent,r.next=9,v.a.awrap(a.json());case 9:n=r.sent,console.log(n),this.setState({status:e});case 12:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row",style:{display:this.state.arquivado}},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"card "+["green","blue","black"][this.state.status]+" darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},this.props.title," ",r.a.createElement("span",{className:""},"Pedido n\xb0 ",this.props.id)),r.a.createElement("div",null,this.props.data,["recebido","preparando","pronto"][this.state.status],"Total : ",this.props.total)),r.a.createElement("div",{className:"card-action"},r.a.createElement("button",{className:"btn red"},"Cancelar"),2===this.state.status&&r.a.createElement("button",{className:"btn grey",onClick:this._preparar.bind(this,4)}," Arquivar ")))))}}]),t}(n.Component),L=(a(91),a(49)),U=a.n(L);window.document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".modal");U.a.Modal.init(e)}));var Q=localStorage.getItem("user"),z=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return Q?r.a.createElement("div",{style:B.app,className:"App"},r.a.createElement(p.a,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{className:"active",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/desktop/users"},"Usu\xe1rios")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/desktop/mesas"},"Mesas")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/desktop/categorias"},"Categorias")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/desktop/produtos"},"Produtos")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/desktop/pedidos"}," Pedidos")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/desktop/mobile"}," Mobile ")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/desktop/sobre"},"Sobre"))),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/desktop",exact:!0,component:O}),r.a.createElement(m.a,{path:"/desktop/sobre",component:_}),r.a.createElement(m.a,{path:"/desktop/mesas",component:M}),r.a.createElement(m.a,{path:"/desktop/users",component:N}),r.a.createElement(m.a,{path:"/desktop/produtos",component:q}),r.a.createElement(m.a,{path:"/desktop/pedidos",component:k}),r.a.createElement(m.a,{path:"/desktop/categorias",component:R}),r.a.createElement(m.a,{path:"/desktop/mobile",component:F})))):r.a.createElement(D,null)}}]),t}(n.Component),B={app:{margin:"5px"}},G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(t,e)}))}}()}},[[52,1,2]]]);
//# sourceMappingURL=main.d0403aa7.chunk.js.map