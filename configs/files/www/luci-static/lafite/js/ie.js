!function(){"use strict";Array.prototype.forEach||(Array.prototype.forEach=function(n){var t=this.length;if("function"!=typeof n)throw new TypeError;for(var e=arguments[1],i=0;i<t;i++)i in this&&n.call(e,this[i],i,this)})}(),function(n){"use strict";var t="0.1.4",e="7";n.pb_version||(n.pb_version=t),n.pb_version_num||(n.pb_version_num=e);var i=function(){var n=null;return n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")},o=function(n,t,e){var o=i();o.open("GET",n,!0),o.onreadystatechange=function(){4===o.readyState&&(200===o.status||304===o.status?"function"==typeof t&&t(o.responseText,o.status):"function"==typeof e&&e(o.status))},o.send()};n.doGet||(n.doGet=o);var r=function(n,t,e,o){var r=i();r.open("POST",n,!0),r.onreadystatechange=function(){4===r.readyState&&(200===r.status||304===r.status?"function"==typeof e&&e(r.responseText,r.status):"function"==typeof o&&o(r.status))},"string"==typeof t&&(t.length>0?r.send(t):r.send())};n.doPost||(n.doPost=r);var a=function(n){var t="",e="_i_=_info_&",i=s("sysauth"),o=s("stok");if(n){i&&(n.sysauth=i),o&&(n.stok=o);var r,a;for(r in n)a=null!==n[r].info&&"undefined"!=typeof n[r].info?n[r].info:n[r],a=encodeURIComponent(a),t+=e.replace("_i_",r).replace("_info_",a)}else i&&(t+=e.replace("_i_","sysauth").replace("_info_",i)),o&&(t+=e.replace("_i_","stok").replace("_info_",o));return t=t.substring(0,t.length-1)};n.getSearch||(n.getSearch=a);var s=function(n){var t=new RegExp("(^| )"+n+"=([^;]*)(;|$)"),e=document.cookie.match(t);return e?unescape(e[2]):null};n.getCookie||(n.getCookie=s);var c=function(n,t,e){var i=n+"="+t;if(e>0){var o=new Date;o.setTime(o.getTime()+e),i+=";expires="+o.toGMTString()}document.cookie=i};n.setCookie||(n.setCookie=c);var f=function(n){var t,e=window.location.pathname.substring(window.location.pathname.indexOf(";")+1).replace(/\/.*/,""),i=e.split(";"),o=new RegExp("^W?"+n+"=");return i.forEach(function(n){if(o.test(n))return void(t=n.replace(o,""))}),t};n.getArgs||(n.getArgs=f);var u=function(n,t){if(n&&null!==t){var e;"string"==typeof t&&(t=parseInt(t,10)),0===t?e="opened":1===t&&(e="closed"),n.hasAttribute&&n.hasAttribute("class")?n.setAttribute("class","switch "+e):n.htmlfor&&(n.htmlfor=n.htmlfor.replace("_status_",e))}};n.switchChange||(n.switchChange=u);var l=function(n){if(n.hasAttribute&&n.hasAttribute("class")){var t=n.getAttribute("class");if(/opened/.test(t))return 0;if(/closed/.test(t))return 1}return-1};n.getSwitchStatus||(n.getSwitchStatus=l);var p=function(){var n=l(this);return 0===n?u(this,1):1===n&&u(this,0),!1};n.switchOnclick||(n.switchOnclick=p);var d=function(n){var t={ingoreLocal:!0,ingoreZero:!0};if(arguments[1]&&"object"==typeof arguments[1])for(var e in arguments[1])t[e]=arguments[1][e];return function(){var e=/^(\d{1,3}\.){3}\d{1,3}$/;if(e.test(n)){if(!t.ingoreLocal&&"127.0.0.1"===n)return!1;if(!t.ingoreZero&&"0.0.0.0"===n)return!1;var i=n.split("."),o=!0;return i.forEach(function(n){(n>255||n<0)&&(o=!1)}),o}return!1}()};n.checkIp||(n.checkIp=d);var m=function(n,t){return d(n)?t>255||t<0?n:n.replace(/\.\d{1,3}$/,"."+t):n};n.changeIp||(n.changeIp=m);var h=function(n){return document.getElementById(n)};n.$id||(n.$id=h);var v=function(n,t){return t||(t=document),t.getElementsByTagName(n)};n.$tag||(n.$tag=v);var w=function(n,t){return t=document,t.getElementsByName(n)};n.$name||(n.$name=w);var g=function(n,t){var e={},i=v("*",n),o=function(n,t){var e=t.tagName.toLowerCase(),i={};if("input"===e||"div"===e){if("input"===e&&t.name){if("submit"===t.type)return;if(!t.name)return;if(!t.value)return;i.dom=t,i.info=t.value,n[t.name]=i}if("div"===e&&t.hasAttribute("name")){if(!t.innerHTML||"Loading..."===t.innerHTML)return;i.dom=t,i.info=t.innerHTML,n[t.getAttribute("name")]=i}}};t&&(o=t);for(var r=0;r<i.length;r++)o(e,i[r]);return e};n.getValuesObj||(n.getValuesObj=g);var _=function(n,t){return _.fn.init(n,t)};_.fn=_.prototype={value:null,dom:{root:null,bg:null,ele:null},options:{type:"text"},init:function(n,t){if(t&&"object"==typeof t)for(var e in t)this.options[e]=t[e];var i=this.dom;switch(i.root=h("dialog"),i.root||(i.root=document.createElement("div"),i.root.id="dialog",i.root.className="dialog",document.body.appendChild(i.root)),i.bg=h("dialog-bg"),i.bg||(i.bg=document.createElement("div"),i.bg.id="dialog-bg",i.bg.className="dialog-bg",i.root.appendChild(i.bg)),this.options.type){case"text":this.setTextItem(n)}return i.root.style.display="block",this}},_.fn.init.prototype=_.fn,_.prototype.setTextItem=function(n){var t="dialog-item",e="dialog-title",i=this.dom;if(n&&h(e))this.rename(n);else{this.options.type="text",i.ele=document.createElement("div"),i.ele.id=i.ele.className=t,i.ele.className+=" "+t+"-"+(new Date).getTime().toString(16),i.root.appendChild(i.ele);var o=document.createElement("div");o.id=o.className=e,o.innerHTML=n,i.ele.appendChild(o)}return this},_.prototype.rename=function(n){var t=h("dialog-title");return this.dom.ele&&t?(t.innerHTML=n,this):this},_.prototype.remove=function(n){var t={};if(t.second=1,n)if("function"==typeof n)t.fn=n;else if("object"==typeof n)for(var e in n)t[e]=n[e];var i=this.dom.root,o=this.dom.ele;if(t.second<0&&(t.second=1),"function"!=typeof t.fn&&(t.fn=null),!o)return i.style.display="none",console.warn("No Dialog"),this;var r=function(){o&&o.parentNode===i&&i.removeChild(o),i.style.display="none",t.fn&&t.fn()};return 0===t.second?r():setTimeout(function(){r()},1e3*t.second),this};var y=function(n,t,e){if(t){var i;e&&t.parentNode?i=t.parentNode:e||(i=t),n&&!/\s?warning\s?/.test(i.className)?(""!==i.className&&(i.className+=" "),i.className+="warning"):n||(i.className=i.className.replace(/\s?warning/,""))}};n.warningInput||(n.warningInput=y);var b=function(){return!!s("sysauth")},k=function(){var n=function(n){var t="/cgi-bin/luci/api/sys/login",e=g(n);if(!/login/.test(n.name))return!1;if(e.username.info.length<1||e.password.info.length<1)return!1;var i="username="+e.username.info;return i=i+"&password="+e.password.info,r(t+"?"+i,"",function(n){return"string"==typeof n&&(n=JSON.parse(n)),n.code&&0!==n.code?void console.warn(n.code_info):void(!n.content||n.content.length<=0||(n=n.content[0],n.sysauth&&c("sysauth",n.sysauth),n.stok&&c("stok",n.sysauth),b()&&(window.location="index.html")))},function(){console.warn("网络连接出错")}),!1},t="frm_login";h(t).onsubmit=function(){return n(this)}},N=function(){var n,t=["frm_lan_dhcp","frm_lan_ip"],e=_("正在获取Lan信息..."),i=function(t){var e,i="/cgi-bin/luci/api/lan/setter",o=g(t);if(/dhcp/.test(t.name)){if(o.ignore=l(h("switch_dhcp")),"1"!==o.ignore.info&&1!==o.ignore.info||(e=o.start?o.start.dom:h("input_dhcp_start"),e.value=m(n.ip,n.start),y(!1,e,!0),e=o.limit?o.limit.dom:h("input_dhcp_limit"),e.value=m(n.ip,n.limit),y(!1,e,!0),o=g(t)),!o.start)return console.warn("起始IP尚未填写"),e=o.start?o.start.dom:h("input_dhcp_start"),e.focus(),!1;if(o.start&&!d(o.start.info))return console.warn("起始IP格式错误"),e=o.start?o.start.dom:h("input_dhcp_start"),e.focus(),!1;if(!o.limit)return console.warn("结束IP尚未填写"),e=o.limit?o.limit.dom:h("input_dhcp_limit"),e.focus(),!1;if(o.limit&&!d(o.limit.info))return console.warn("结束IP格式错误"),e=o.limit?o.limit.dom:h("input_dhcp_limit"),e.focus(),!1;if(o.start.info=o.start.info.replace(/^(\d{1,3}\.){3}/,""),o.limit.info=o.limit.info.replace(/^(\d{1,3}\.){3}/,""),o.start&&o.limit&&n.ignore===o.ignore.info&&n.start===o.start.info&&n.limit===o.limit.info)return console.info("没有任何修改!"),!1}if(/ip/.test(t.name)){if(!o.ipaddr)return console.warn("IP地址尚未填写"),e=o.ipaddr?o.ipaddr.dom:w("ipaddr")[0],e.focus(),!1;if(o.ipaddr&&!d(o.ipaddr.info))return console.warn("IP地址格式错误"),e=o.ipaddr?o.ipaddr.dom:w("ipaddr")[0],e.focus(),!1;if(n.ip===o.ipaddr.info)return console.warn("没有任何修改!"),!1}var s=a(o),c=_("正在修改...");return r(i+"?"+s,"",function(e){if("string"==typeof e&&(e=JSON.parse(e)),e.code&&0!==e.code)return console.warn(e.code_info),void c.remove(function(){console.warn(e.code_info)});for(var i in e.content[0])n[i]=e.content[0][i];/dhcp/.test(t.name)&&c.remove(function(){console.info("更改完毕!")})},function(){c.remove(function(){console.warn("未能连接到路由器, 请刷新.")})}),/ip/.test(t.name)&&c.rename('路由器正在重启以更改新的IP, 可点击<a href="http:\\\\'+o.ipaddr.info+'">这里</a>跳转.'),!1};t.forEach(function(n){var t=h(n);t&&(t.onsubmit=function(){return i(this)})});var o=h("input_dhcp_start"),s=h("input_dhcp_limit"),c=h("input_lan_ip"),f=["input_dhcp_start","input_dhcp_limit"];f.forEach(function(n){var t=h(n);return t?void(t.onchange=function(){y(!d(this.value),this,!0)}):console.warn("No Found ID: "+n)});var v=["input_lan_ip"];v.forEach(function(n){var t=h(n);return t?void(t.onchange=function(){var n=d(this.value);if(n){var t=this.value,e=o.value,i=s.value;if(!d(e)||!d(i))return;t=t.replace(/\.\d{1,3}$/,""),o.value=e.replace(/(\d{1,3}\.){3}/,t+"."),s.value=i.replace(/(\d{1,3}\.){3}/,t+".")}y(!n,this,!0)}):console.warn("No Found ID: "+n)});var b=function(){r("/cgi-bin/luci/api/lan/status?"+a(),"",function(t){if("string"==typeof t&&(t=JSON.parse(t)),t.code&&0!==t.code)return console.warn(t.code_info),void e.remove(function(){console.warn(t.code_info),e=null});t=t.content[0];var i=h("switch_dhcp");i.onclick=p,"undefined"!=typeof t.ignore?u(i,t.ignore):u(i,0),t.start&&t.limit&&(o.value=m(t.ip,t.start),s.value=m(t.ip,t.limit),h("frm_lan_dhcp").style.display="block"),t.ip&&t.netmask&&(c.value=t.ip,h("frm_lan_ip").style.display="block"),n=t,e.remove({fn:function(){e=null},second:.5})},function(){e.remove(function(){console.warn("未能连接到路由器, 请刷新."),e=null})})};b()},A=function(){var n,t,e,i=["frm_wan_pppoe","frm_wan_static","frm_wan_dhcp"],o=null,s=_("正在获取Wan信息..."),c=function(n){for(var t=v("li",h("frm_wan")),e=0;e<t.length;e++){var o=t[e];o.nodeType&&1===o.nodeType&&(o.className=n===e?o.className+" active":o.className.replace(/\W?active/,""))}i.forEach(function(t,e){h(t).style.display=n===e?"block":"none"})},f=function(n){var t,e,i,s,c,f="/cgi-bin/luci/api/wan/setter",u=g(n);if(/pppoe/.test(n.name)){t=["username","password"],e=["上网账号","拨号密码"];var l=function(n){n.onkeyup=function(){this.value.length>0?y(!1,this,!0):y(!0,this,!0)}};for(i=0,s=t[i];i<t.length;s=t[++i])if(!u[s]||!u[s].info)return console.warn(e[i]+"尚未填写"),c=u[s]?u[s].dom:w(s)[0],c.onkeyup||l(c),y(!0,c,!0),void c.focus();if("pppoe"===o.proto&&o.username===u.username.info&&o.password===u.password.info)return void console.info("没有任何修改!")}if(/static/.test(n.name)){for(t=["ipaddr","netmask","gateway"],e=["IP地址","子网掩码","网关地址"],i=0,s=t[i];i<t.length;s=t[++i]){if(!u[s])return console.warn(e[i]+"尚未填写"),c=u[s]?u[s].dom:w(s)[0],y(!0,c,!0),void c.focus();if(u[s]&&!d(u[s].info))return console.warn(e[i]+"格式有误"),c=u[s]?u[s].dom:w(s)[0],y(!0,c,!0),void c.focus()}if(u.ipaddr.info===u.gateway.info)return void console.warn("IP地址不可网关地址相同!");if("static"===o.proto&&o.ipaddr===u.ipaddr.info&&o.netmask===u.netmask.info&&o.gateway===u.gateway.info)return void console.info("没有任何修改!")}if(/dhcp/.test(n.name)&&"dhcp"===o.proto)return void console.info("当前已经是DHCP");var p=a(u),m=_("正在更改上网方式...");r(f+"?"+p,"",function(n){return"string"==typeof n&&(n=JSON.parse(n)),n.code&&0!==n.code?(console.warn(n.code_info),void m.remove(function(){console.warn(n.code_info)})):(o=n.content[0],void m.remove(function(){console.info("更改完毕!")}))},function(){m.remove(function(){console.warn("未能连接到路由器, 请刷新.")})})};i.forEach(function(n){h(n).onsubmit=function(){return f(this),!1}}),n=v("a",h("frm_wan"));var u=function(n){return function(){c(n)}};for(e=0;e<n.length;e++)t=n[e],t.tagName&&/a/i.test(t.tagName)&&(t.onclick=u(e));var l=["input_static_ipaddr","input_static_netmask","input_static_gateway"];l.forEach(function(n){h(n).onkeyup=function(){y(!d(this.value,{ingoreLocal:!1,ingoreZero:!1}),this,!0)}});var p=function(){r("/cgi-bin/luci/api/wan/status?"+a(),"",function(n){if("string"==typeof n&&(n=JSON.parse(n)),n.code&&0!==n.code)return console.warn(n.code_info),void s.remove(function(){console.warn(n.code_info),s=null});var t=n.content[0];o=t,h("frm_wan").style.display="block",h("input_pppoe_username").value=o.username||"",h("input_pppoe_password").value=o.password||"",h("input_static_ipaddr").value=o.ipaddr||"",h("input_static_netmask").value=o.netmask||"",h("input_static_gateway").value=o.gateway||"",i.forEach(function(n,t){var e=new RegExp(o.proto);e.test(n)&&c(t)}),s.remove({fn:function(){s=null},second:.5})},function(){s.remove(function(){console.warn("未能连接到路由器, 请刷新."),s=null})})};p()},E=function(){var n,t=[],e=[],i=[],o=_("正在获取Wifi信息..."),s=function(n){var e,i="/cgi-bin/luci/api/wifi/setter",o=g(n);if(!o.ssid||!o.ssid.info)return console.warn("无线名称尚未填写"),e=o.ssid?o.ssid.dom:h("input_"+n.name.replace("frm_","")+"_ssid"),y(!0,e,!0),e.focus(),!1;var s,c;t.forEach(function(t){t.wname===n.name.replace("frm_","")&&(s=t)});var f,u=h("select_"+s.wname+"_encryption");for(c in u.options)if(f=u.options[c],f.selected){o.encryption=f.getAttribute("value");break}var p=h("select_"+s.wname+"_channel");for(c in p.options)if(f=p.options[c],f.selected){o.channel=f.getAttribute("value");break}if(o.encryption)if("none"!==o.encryption&&"psk2"!==o.encryption&&(o.encryption="psk+psk2"),"none"!==o.encryption){if(!o.password||o.password.info.length<8)return console.warn("无线密码格式不正确"),e=o.pwd?o.pwd.dom:h("input_"+n.name.replace("frm_","")+"_pwd"),y(!0,e,!0),e.focus(),!1}else o.key&&(o.password.info=o.key.info);if(o.wname=n.name.replace("frm_",""),o.disabled=l(h("switch_"+o.wname)).toString(),s.ssid===o.ssid.info&&s.channel===o.channel&&s.encryption===o.encryption){var d=!0;if("none"!==o.encryption&&s.key!==o.password.info&&(d=!1),d)return console.info("没有任何修改!"),!1}o.ssid.info=encodeURI(o.ssid.info),"none"!==o.encryption&&o.password.info.length>7&&(o.key=o.password);var m=a(o),v=_("正在更改...");return r(i+"?"+m,"",function(n){return"string"==typeof n&&(n=JSON.parse(n)),n.code&&0!==n.code?(console.warn(n.code_info),v.remove(function(){console.warn(n.code_info)}),!1):(v.remove(function(){console.info("更改完毕")}),void(n.content&&(t=n.content)))},function(){v.remove(function(){console.warn("500: 连接出错")})}),!1},c=function(n){n.tagName&&/form/i.test(n.tagName)&&(n.onsubmit=function(){return s(this)})},f=function(n){n.onchange=function(){y(0===this.value.length,this,!0)}},d=function(n){n.onchange=function(){y(this.value.length<8,this,!0)}},m=function(n){n.onchange=function(){var n=this.id.replace("encryption","pwd");n=n.replace("select","input");var t=h(n).parentNode;t||console.warn("No Password Input?");var e;for(e=0;e<this.options.length;e++){if(this.options[e].selected&&"none"===this.options[e].getAttribute("value")){t.style.display="none";break}t.style.display="block";break}}},w=h("frm_{wifi}").parentNode,b=document.createDocumentFragment(),k=document.createDocumentFragment();k.appendChild(h("frm_{wifi}"));var N=function(t){n=k.cloneNode(!0);var e,i,o=n.childNodes[0];o.id&&(o.id=o.id.replace("{wifi}",t.wname)),o.name&&(o.name=o.name.replace("{wifi}",t.wname));var r=v("input",o),a=v("label",o);for(i=0;i<r.length;i++)e=r[i],e&&e.tagName&&(e.id&&(e.id=e.id.replace("{wifi}",t.wname)),e.name&&(e.name=e.name.replace("{wifi}",t.wname)),/ssid/i.test(e.id)?f(e):/pwd/i.test(e.id)&&d(e));for(i=0;i<a.length;i++)e=a[i],e&&e.tagName&&(e.hasAttribute&&e.hasAttribute("for")?e.setAttribute("for",e.getAttribute("for").replace("{wifi}",t.wname)):e.htmlfor&&(e.htmlfor=e.htmlfor.replace("{wifi}",t.wname)));var s=v("div",o);for(i=0;i<s.length;i++)e=s[i],e&&e.tagName&&(e.hasAttribute&&e.hasAttribute("id")?e.setAttribute("id",e.getAttribute("id").replace("{wifi}",t.wname)):e.htmlfor&&(e.htmlfor=e.htmlfor.replace("{wifi}",t.wname)));var u=v("select",o);for(i=0;i<u.length;i++)e=u[i],e&&e.tagName&&(e.hasAttribute&&e.hasAttribute("id")?e.setAttribute("id",e.getAttribute("id").replace("{wifi}",t.wname)):e.htmlfor&&(e.htmlfor=e.htmlfor.replace("{wifi}",t.wname)),/encryption/i.test(e.id)&&m(e));if(A(o,t),b.childNodes.length){var l=document.createElement("div");l.className="hr",b.appendChild(l)}c(o),o.style.display="block",b.appendChild(n)},A=function(n,t){var e,i,o,r=v("select",n);for(e=0;e<r.length;e++)if(o=r[e],/channel/.test(o.getAttribute("name"))){var a=t.freqlist;for(i=0;i<a.length;i++){var s=a[i].channel.replace(/\D/g,"");o.options[i+1]=new Option("信道 "+s,s)}}},E=function(){r("/cgi-bin/luci/api/wifi/status?"+a(),"",function(n){if("string"==typeof n&&(n=JSON.parse(n)),n.code&&0!==n.code)return console.warn(n.code_info);var r=n.content;r.forEach(function(n){return n.type&&"2.4"===n.type?(e.push(n),void t.push(n)):n.type&&"5.8"===n.type?(i.push(n),void t.push(n)):void 0});var a;for(w||(w=h("frm_{wifi}").parentNode),a=0;a<e.length;a++)N(e[a]);for(a=0;a<i.length;a++)N(i[a]);w.insertBefore(b,w.childNodes[0]);var s=function(n){var t,e,i,o=h("frm_"+n.wname);if(o){o.style.display="block",h("input_"+n.wname+"_ssid").value=n.ssid,h("input_"+n.wname+"_pwd").value=n.key||"",t=h("select_"+n.wname+"_encryption");for(e in t.options)if(i=t.options[e],i.attributes&&i.getAttribute("value")===n.encryption){i.selected=!0,t.onchange();break}t=h("select_"+n.wname+"_channel");for(e in t.options)i=t.options[e],i.attributes&&i.getAttribute("value")===n.channel&&(i.selected=!0);var r=h("switch_"+n.wname);r.onclick=p,"undefined"!=typeof n.disabled?u(r,n.disabled):u(r,0)}};t.forEach(function(n){return s(n)}),o.remove({fn:function(){o=null},second:.5})},function(){o.remove(function(){console.warn("未能连接到路由器, 请刷新."),o=null})})};E()},I=function(){var n=0,t=v("li",h("navbar"));for(n=0;n<t.length;n++){var e=t[n].getAttribute("data-type"),i=new RegExp(e);i.test(window.location.pathname)?t[n].setAttribute("class","item active"):t[n].setAttribute("class","item")}};I(),/sysauth/.test(window.location.pathname)?k():b()?(/wan/.test(window.location.pathname)&&A(),/lan/.test(window.location.pathname)&&N(),/wifi/.test(window.location.pathname)&&E()):window.location="sysauth.htm"}(void 0!==typeof window?window:this);