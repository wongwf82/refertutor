webshims.register("form-shim-extend",function(a,b,c,d,e,f){"use strict";b.inputTypes=b.inputTypes||{};var g=b.cfg.forms,h=b.bugs,i=/\s*,\s*/g,j=b.inputTypes,k={radio:1,checkbox:1},l=function(){var a=this,c=(a.getAttribute("type")||"").toLowerCase();return b.inputTypes[c]?c:a.type},m=function(a,b){"type"in a||(a.type=l.call(b))};!function(){if("querySelector"in d){try{h.findRequired=!a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /></form>')[0].querySelector("select:required")}catch(b){h.findRequired=!1}(h.bustedValidity||h.findRequired)&&!function(){var b=a.find,c=a.find.matchesSelector,e=/(\:valid|\:invalid|\:optional|\:required)(?=[\s\[\~\.\+\>\:\#*]|$)/gi,f=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,c=function(c){var d=arguments;return d=a.call(d,1,d.length),d.unshift(c.replace(e,f)),b.apply(this,d)};for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return c}(),(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",d.documentElement))&&(a.find.matchesSelector=function(a,b){return b=b.replace(e,f),c.call(this,a,b)})}()}}(),b.addInputType=function(a,b){j[a]=b};var n={customError:!1,typeMismatch:!1,badInput:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,patternMismatch:!1,valueMissing:!1,valid:!0},o=function(b){if("select-one"==b.type&&b.size<2){var c=a("> option:first-child",b);return!!c.prop("selected")}return!1},p=a([]),q=function(b){b=a(b);var c,e,f=p;return"radio"==b[0].type&&(c=b[0].name,c?(e=b.prop("form"),f=a(d.getElementsByName(c)).filter(function(){return"radio"==this.type&&a.prop(this,"form")==e&&this.name==c})):f=b),f},r={url:1,email:1,text:1,search:1,tel:1,password:1},s=a.extend({textarea:1},r),t={valueMissing:function(a,b,c){if(!a.prop("required"))return!1;var d=!1;return m(c,a[0]),d="select"==c.nodeName?!b&&(a[0].selectedIndex<0||o(a[0])):k[c.type]?"checkbox"==c.type?!a.is(":checked"):!q(a).filter(":checked")[0]:!b},patternMismatch:function(a,c,d){var e,f=!1;if(""===c||"select"==d.nodeName)return f;if(m(d,a[0]),!r[d.type])return f;var g=a.attr("pattern");if(!g)return f;try{g=new RegExp("^(?:"+g+")$")}catch(h){b.error('invalid pattern value: "'+g+'" | '+h),g=f}if(!g)return f;for(c="email"==d.type&&a.prop("multiple")?c.split(i):[c],e=0;e<c.length;e++)if(!g.test(c[e])){f=!0;break}return f}};a.each({tooShort:["minLength",-1],tooLong:["maxLength",1]},function(a,b){t[a]=function(a,c,d){if("select"==d.nodeName||a.prop("defaultValue")==c)return!1;if(m(d,a[0]),!s[d.type])return!1;var e=a.prop(b[0]);return e>0&&e*b[1]<c.length*b[1]}}),a.each({typeMismatch:"mismatch",badInput:"bad"},function(a,b){t[a]=function(c,d,e){if(""===d||"select"==e.nodeName)return!1;var f=!1;return m(e,c[0]),j[e.type]&&j[e.type][b]?f=j[e.type][b](d,c):"validity"in c[0]&&"name"in c[0].validity&&(f=c[0].validity[a]||!1),f}}),b.modules["form-core"].getGroupElements=q,b.addValidityRule=function(a,b){t[a]=b},a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var c=this.form||this;return a.data(c,"invalidEventShim")?void(c=null):(a(c).data("invalidEventShim",!0).on("submit",a.event.special.invalid.handler),b.moveToFirstEvent(c,"submit"),b.bugs.bustedValidity&&a.nodeName(c,"form")&&!function(){var a=c.getAttribute("novalidate");c.setAttribute("novalidate","novalidate"),b.data(c,"bustedNoValidate",null==a?null:a)}(),void(c=null))},teardown:a.noop,handler:function(b){if("submit"==b.type&&!b.testedValidity&&b.originalEvent&&a.nodeName(b.target,"form")&&!a.prop(b.target,"noValidate")){b.testedValidity=!0;var c=!a(b.target).callProp("reportValidity");return c?(b.stopImmediatePropagation(),f.noFormInvalid||a(b.target).trigger("invalid"),!1):void 0}}},a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var u=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){return a.nodeName(this,"form")?a(this).on("invalid",a.noop):a("form",this).on("invalid",a.noop),u.apply(this,arguments)}}),b.ready("form-shim-extend2 WINDOWLOAD",function(){a(c).on("invalid",a.noop)}),b.addInputType("email",{mismatch:function(){var a=g.emailReg||/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;return function(b,c){var d,e=!1;if(b)for(b=c.prop("multiple")?b.split(i):[b],d=0;d<b.length;d++)if(!a.test(b[d])){e=!0;break}return e}}()}),b.addInputType("url",{mismatch:function(){var a=g.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;return function(b){return b&&!a.test(b)}}()}),b.defineNodeNameProperty("input","type",{prop:{get:l}}),b.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},reportValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},n)}}},"prop");var v=function(c,d){var e,f=a.prop(c,"validity");if(!f)return!0;if(a.data(c,"cachedValidity",f),!f.valid){e=a.Event("invalid");var g=a(c).trigger(e);"reportValidity"!=d||v.unhandledInvalids||e.isDefaultPrevented()||(b.validityAlert.showFor(g),v.unhandledInvalids=!0)}return a.removeData(c,"cachedValidity"),f.valid},w=/^(?:select|textarea|input)/i;["checkValidity","reportValidity"].forEach(function(c){b.defineNodeNameProperty("form",c,{prop:{value:function(){var d=!0,e=a(a.prop(this,"elements")).filter(function(){if(!w.test(this.nodeName))return!1;var a=b.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});v.unhandledInvalids=!1;for(var f=0,g=e.length;g>f;f++)v(e[f],c)||(d=!1);return d}}})}),["input","textarea","select"].forEach(function(c){var d={setCustomValidity:{value:function(c){a.removeData(this,"cachedValidity"),b.data(this,"customvalidationMessage",""+c),h.bustedValidity&&d.setCustomValidity.prop._supvalue&&d.setCustomValidity.prop._supvalue.apply(this,arguments)}},willValidate:{writeable:!1,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var c=a(this).getNativeElement()[0];return!(c.readOnly||b[c.type]||a(c).is(":disabled"))}}()},validity:{writeable:!1,get:function(){var c=a(this).getNativeElement(),d=c[0],e=a.data(d,"cachedValidity");if(e)return e;if(e=a.extend({},n),!a.prop(d,"willValidate")||"submit"==d.type)return e;var f=c.val(),g={nodeName:d.nodeName.toLowerCase()};return e.customError=!!b.data(d,"customvalidationMessage"),e.customError&&(e.valid=!1),a.each(t,function(a,b){b(c,f,g)&&(e[a]=!0,e.valid=!1)}),a(this).getShadowFocusElement().attr("aria-invalid",e.valid?"false":"true"),c=null,d=null,e}}};["checkValidity","reportValidity"].forEach(function(b){d[b]={value:function(){return v.unhandledInvalids=!1,v(a(this).getNativeElement()[0],b)}}}),b.defineNodeNameProperties(c,d,"prop")}),b.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:!0}),b.defineNodeNamesBooleanProperty(["input"],"multiple"),h.bustedValidity&&(b.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){b.data(this,"bustedNoValidate",""+a)},get:function(){var a=b.data(this,"bustedNoValidate");return null==a?e:a}},removeAttr:{value:function(){b.data(this,"bustedNoValidate",null)}}}),a.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(a,b){t[b]=function(a){return(a[0].validity||{})[b]||!1}})),b.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b=!!b,b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}}),["minlength","minLength"].forEach(function(a){b.defineNodeNamesProperty(["input","textarea"],a,{prop:{set:function(a){if(a*=1,0>a)throw"INDEX_SIZE_ERR";this.setAttribute("minlength",a||0)},get:function(){var a=this.getAttribute("minlength");return null==a?-1:1*a||0}}})}),Modernizr.inputtypes.date&&/webkit/i.test(navigator.userAgent)&&!function(){var b={updateInput:1,input:1},c={date:1,time:1,month:1,week:1,"datetime-local":1},e={focusout:1,blur:1},f={updateInput:1,change:1},g=function(a){var c,d,g=!0,h=a.prop("value"),i=h,j=function(c){if(a){var d=a.prop("value");d!==h&&(h=d,c&&b[c.type]||a.trigger("input")),c&&f[c.type]&&(i=d),g||d===i||a.trigger("change")}},k=function(){clearTimeout(d),d=setTimeout(j,9)},l=function(b){clearInterval(c),setTimeout(function(){b&&e[b.type]&&(g=!1),a&&(a.off("focusout blur",l).off("input change updateInput",j),j()),a=null},1)};clearInterval(c),c=setInterval(j,160),k(),a.off({"focusout blur":l,"input change updateInput":j}).on({"focusout blur":l,"input updateInput change":j})};a(d).on("focusin",function(b){b.target&&c[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&g(a(b.target))})}(),b.addReady(function(b,c){var e;a("form",b).add(c.filter("form")).on("invalid",a.noop);try{b!=d||"form"in(d.activeElement||{})||(e=a(b.querySelector("input[autofocus], select[autofocus], textarea[autofocus]")).eq(0).getShadowFocusElement()[0],e&&e.offsetHeight&&e.offsetWidth&&e.focus())}catch(f){}}),Modernizr.input.list||b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var c,d=this,e=a("select",d);return e[0]?c=a.makeArray(e[0].options||[]):(c=d.getElementsByTagName("option"),c.length&&b.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers.")),c}}});var x={submit:1,button:1,image:1},y={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var c="form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),e="form"+b.name,f=b.name,g="click.webshimssubmittermutate"+f,h=function(){var d=this;if("form"in d&&x[d.type]){var g=a.prop(d,"form");if(g){var h=a.attr(d,e);if(null!=h&&(!b.limitedTo||h.toLowerCase()===a.prop(d,c))){var i=a.attr(g,f);a.attr(g,f,h),setTimeout(function(){if(null!=i)a.attr(g,f,i);else try{a(g).removeAttr(f)}catch(b){g.removeAttribute(f)}},9)}}}};switch(b.proptype){case"url":var i=d.createElement("form");y[c]={prop:{set:function(b){a.attr(this,e,b)},get:function(){var b=a.attr(this,e);return null==b?"":(i.setAttribute("action",b),i.action)}}};break;case"boolean":y[c]={prop:{set:function(b){b=!!b,b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case"enum":y[c]={prop:{set:function(b){a.attr(this,e,b)},get:function(){var c=a.attr(this,e);return!c||(c=c.toLowerCase())&&!b.limitedTo[c]?b.defaultProp:c}}};break;default:y[c]={prop:{set:function(b){a.attr(this,e,b)},get:function(){var b=a.attr(this,e);return null!=b?b:""}}}}y[e]||(y[e]={}),y[e].attr={set:function(b){y[e].attr._supset.call(this,b),a(this).off(g).on(g,h)},get:function(){return y[e].attr._supget.call(this)}},y[e].initAttr=!0,y[e].removeAttr={value:function(){a(this).off(g),y[e].removeAttr._supvalue.call(this)}}}),b.defineNodeNamesProperties(["input","button"],y)}),webshims.register("form-message",function(a,b,c,d,e,f){"use strict";f.lazyCustomMessages&&(f.customMessages=!0);var g=b.validityMessages,h=f.customMessages?["customValidationMessage"]:[];g.en=a.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL."},badInput:{defaultMessage:"Please enter a valid value.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",tooShort:"Please enter at least {%minlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},g.en||g["en-US"]||{}),"object"==typeof g.en.valueMissing&&["select","radio"].forEach(function(a){g.en.valueMissing[a]=g.en.valueMissing[a]||"Please select an option."}),"object"==typeof g.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(a){g.en.rangeUnderflow[a]=g.en.rangeUnderflow[a]||"Value must be at or after {%min}."}),"object"==typeof g.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(a){g.en.rangeOverflow[a]=g.en.rangeOverflow[a]||"Value must be at or before {%max}."}),g["en-US"]||(g["en-US"]=a.extend(!0,{},g.en)),g["en-GB"]||(g["en-GB"]=a.extend(!0,{},g.en)),g["en-AU"]||(g["en-AU"]=a.extend(!0,{},g.en)),g[""]=g[""]||g["en-US"],g.de=a.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zul\xe4ssig.",email:"{%value} ist keine g\xfcltige E-Mail-Adresse.",url:"{%value} ist kein(e) g\xfcltige(r) Webadresse/Pfad."},badInput:{defaultMessage:"Geben Sie einen zul\xe4ssigen Wert ein.",number:"Geben Sie eine Nummer ein.",date:"Geben Sie ein Datum ein.",time:"Geben Sie eine Uhrzeit ein.",month:"Geben Sie einen Monat mit Jahr ein.",range:"Geben Sie eine Nummer.","datetime-local":"Geben Sie ein Datum mit Uhrzeit ein."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\xf6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\xf6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\xe4ssig. Hier sind nur bestimmte Werte zul\xe4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",tooShort:"Der eingegebene Text ist zu kurz! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%minlength} das Minimum.",patternMismatch:"{%value} hat f\xfcr dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das K\xe4stchen."}},g.de||{}),"object"==typeof g.de.valueMissing&&["select","radio"].forEach(function(a){g.de.valueMissing[a]=g.de.valueMissing[a]||"Bitte w\xe4hlen Sie eine Option aus."}),"object"==typeof g.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(a){g.de.rangeUnderflow[a]=g.de.rangeUnderflow[a]||"{%value} ist zu fr\xfch. {%min} ist die fr\xfcheste Zeit, die Sie benutzen k\xf6nnen."}),"object"==typeof g.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(a){g.de.rangeOverflow[a]=g.de.rangeOverflow[a]||"{%value} ist zu sp\xe4t. {%max} ist die sp\xe4teste Zeit, die Sie benutzen k\xf6nnen."});var i=g[""],j=function(b,c){return b&&"string"!=typeof b&&(b=b[a.prop(c,"type")]||b[(c.nodeName||"").toLowerCase()]||b.defaultMessage),b||""},k=/</g,l=/>/g,m={value:1,min:1,max:1},n=function(){var d,e={number:function(a){var b=1*a;return b.toLocaleString&&!isNaN(b)&&(a=b.toLocaleString()||a),a}},f=function(b,c,d){var f,g;return m[d]&&(f=a.prop(c,"type"),g=a(c).getShadowElement().data("wsWidget"+f),g&&g.formatValue?b=g.formatValue(b,!1):e[f]&&(b=e[f](b))),b};return[{n:"date",f:"toLocaleDateString"},{n:"time",f:"toLocaleTimeString"},{n:"datetime-local",f:"toLocaleString"}].forEach(function(a){e[a.n]=function(b){var c=new Date(b);return c&&c[a.f]&&(b=c[a.f]()||b),b}}),c.Intl&&Intl.DateTimeFormat&&(d=new Intl.DateTimeFormat(navigator.browserLanguage||navigator.language,{year:"numeric",month:"2-digit"}).format(new Date),d&&d.format&&(e.month=function(a){var b=new Date(a);return b&&(a=d.format(b)||a),a})),b.format={},["date","number","month","time","datetime-local"].forEach(function(a){b.format[a]=function(c,d){return d&&d.nodeType?f(c,d,a):("number"==a&&d&&d.toFixed&&(c=1*c,(!d.fixOnlyFloat||c%1)&&(c=c.toFixed(d.toFixed))),b._format&&b._format[a]?b._format[a](c,d):e[a](c))}}),f}();b.replaceValidationplaceholder=function(c,d,e){var f=a.prop(c,"title");return d&&("patternMismatch"!=e||f||b.error("no title for patternMismatch provided. Always add a title attribute."),f&&(f='<span class="ws-titlevalue">'+f.replace(k,"&lt;").replace(l,"&gt;")+"</span>"),-1!=d.indexOf("{%title}")?d=d.replace("{%title}",f):f&&(d=d+" "+f)),d&&-1!=d.indexOf("{%")&&["value","min","max","maxlength","minlength","label"].forEach(function(b){if(-1!==d.indexOf("{%"+b)){var e=("label"==b?a.trim(a('label[for="'+c.id+'"]',c.form).text()).replace(/\*$|:$/,""):a.prop(c,b)||a.attr(c,b)||"")||"";e=""+e,e=n(e,c,b),d=d.replace("{%"+b+"}",e.replace(k,"&lt;").replace(l,"&gt;")),"value"==b&&(d=d.replace("{%valueLen}",e.length))}}),d},b.createValidationMessage=function(c,d){var e=j(i[d],c);return e||"badInput"!=d||(e=j(i.typeMismatch,c)),e||"typeMismatch"!=d||(e=j(i.badInput,c)),e||(e=j(g[""][d],c)||a.prop(c,"validationMessage"),"customError"!=d&&b.info("could not find errormessage for: "+d+" / "+a.prop(c,"type")+". in language: "+b.activeLang())),e=b.replaceValidationplaceholder(c,e,d),e||""},(!Modernizr.formvalidation||b.bugs.bustedValidity)&&h.push("validationMessage"),i=b.activeLang(g),a(g).on("change",function(){i=g.__active}),h.forEach(function(c){b.defineNodeNamesProperty(["fieldset","output","button"],c,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(d){var e=b.defineNodeNameProperty(d,c,{prop:{get:function(){var c=this,d="";if(!a.prop(c,"willValidate"))return d;var f=a.prop(c,"validity")||{valid:1};return f.valid?d:(d=b.getContentValidationMessage(c,f))?d:f.customError&&c.nodeName&&(d=Modernizr.formvalidation&&!b.bugs.bustedValidity&&e.prop._supget?e.prop._supget.call(c):b.data(c,"customvalidationMessage"))?d:(a.each(f,function(a,e){return"valid"!=a&&e?(d=b.createValidationMessage(c,a),d?!1:void 0):void 0}),d||"")},writeable:!1}})})})}),webshims.register("form-number-date-api",function(a,b,c,d){"use strict";b.addInputType||b.error("you can not call forms-ext feature after calling forms feature. call both at once instead: $.webshims.polyfill('forms forms-ext')"),b.getStep||(b.getStep=function(b,c){var d=a.attr(b,"step");return"any"===d?d:(c=c||i(b),f[c]&&f[c].step?(d=q.number.asNumber(d),(!isNaN(d)&&d>0?d:f[c].step)*(f[c].stepScaleFactor||1)):d)}),b.addMinMaxNumberToCache||(b.addMinMaxNumberToCache=function(a,b,c){a+"AsNumber"in c||(c[a+"AsNumber"]=f[c.type].asNumber(b.attr(a)),isNaN(c[a+"AsNumber"])&&a+"Default"in f[c.type]&&(c[a+"AsNumber"]=f[c.type][a+"Default"]))});var e=parseInt("NaN",10),f=b.inputTypes,g=function(a){return"number"==typeof a||a&&a==1*a},h=function(b){return a('<input type="'+b+'" />').prop("type")===b},i=function(a){return(a.getAttribute("type")||"").toLowerCase()},j=function(a){return a&&!isNaN(1*a)},k=b.addMinMaxNumberToCache,l=function(a,b){a=""+a,b-=a.length;for(var c=0;b>c;c++)a="0"+a;return a},m=1e-7,n=b.bugs.bustedValidity;b.addValidityRule("stepMismatch",function(a,c,d,e){if(""===c)return!1;if("type"in d||(d.type=i(a[0])),"week"==d.type)return!1;var g,h,j=(e||{}).stepMismatch||!1;if(f[d.type]&&f[d.type].step){if("step"in d||(d.step=b.getStep(a[0],d.type)),"any"==d.step)return!1;if("valueAsNumber"in d||(d.valueAsNumber=f[d.type].asNumber(c)),isNaN(d.valueAsNumber))return!1;k("min",a,d),g=d.minAsNumber,isNaN(g)&&(h=a.prop("defaultValue"))&&(g=f[d.type].asNumber(h)),isNaN(g)&&(g=f[d.type].stepBase||0),j=Math.abs((d.valueAsNumber-g)%d.step),j=!(m>=j||Math.abs(j-d.step)<=m)}return j}),[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){b.addValidityRule(a.name,function(b,c,d,e){var g=(e||{})[a.name]||!1;if(""===c)return g;if("type"in d||(d.type=i(b[0])),f[d.type]&&f[d.type].asNumber){if("valueAsNumber"in d||(d.valueAsNumber=f[d.type].asNumber(c)),isNaN(d.valueAsNumber))return!1;if(k(a.attr,b,d),isNaN(d[a.attr+"AsNumber"]))return g;g=d[a.attr+"AsNumber"]*a.factor<d.valueAsNumber*a.factor-m}return g})}),b.reflectProperties(["input"],["max","min","step"]);var o=b.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var b=this,c=i(b),d=f[c]&&f[c].asNumber?f[c].asNumber(a.prop(b,"value")):o.prop._supget&&o.prop._supget.apply(b,arguments);return null==d&&(d=e),d},set:function(c){var d=this,e=i(d);if(f[e]&&f[e].numberToString){if(isNaN(c))return void a.prop(d,"value","");var g=f[e].numberToString(c);g!==!1?a.prop(d,"value",g):b.error("INVALID_STATE_ERR: DOM Exception 11")}else o.prop._supset&&o.prop._supset.apply(d,arguments)}}}),p=b.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var b=this,c=i(b);return f[c]&&f[c].asDate&&!f[c].noAsDate?f[c].asDate(a.prop(b,"value")):p.prop._supget&&p.prop._supget.call(b)||null},set:function(c){var d=this,e=i(d);if(!f[e]||!f[e].dateToString||f[e].noAsDate)return p.prop._supset&&p.prop._supset.apply(d,arguments)||null;if(null===c)return a.prop(d,"value",""),"";var g=f[e].dateToString(c);return g!==!1?(a.prop(d,"value",g),g):void b.error("INVALID_STATE_ERR: DOM Exception 11")}}});a.each({stepUp:1,stepDown:-1},function(c,d){var e=b.defineNodeNameProperty("input",c,{prop:{value:function(c){var g,h,j,k,l,n,o,p=i(this);if(!f[p]||!f[p].asNumber){if(e.prop&&e.prop._supvalue)return e.prop._supvalue.apply(this,arguments);throw b.info("no step method for type: "+p),"invalid state error"}if(l={type:p},c||(c=1,b.warn("you should always use a factor for stepUp/stepDown")),c*=d,g=b.getStep(this,p),"any"==g)throw b.info("step is 'any' can't apply stepUp/stepDown"),"invalid state error";return b.addMinMaxNumberToCache("min",a(this),l),b.addMinMaxNumberToCache("max",a(this),l),h=a.prop(this,"valueAsNumber"),c>0&&!isNaN(l.minAsNumber)&&(isNaN(h)||l.minAsNumber>h)?void a.prop(this,"valueAsNumber",l.minAsNumber):0>c&&!isNaN(l.maxAsNumber)&&(isNaN(h)||l.maxAsNumber<h)?void a.prop(this,"valueAsNumber",l.maxAsNumber):(isNaN(h)&&(h=0),n=l.minAsNumber,isNaN(n)&&(o=a.prop(this,"defaultValue"))&&(n=f[p].asNumber(o)),n||(n=0),g*=c,h=1*(h+g).toFixed(5),j=(h-n)%g,j&&Math.abs(j)>m&&(k=h-j,k+=j>0?g:-g,h=1*k.toFixed(5)),!isNaN(l.maxAsNumber)&&h>l.maxAsNumber||!isNaN(l.minAsNumber)&&h<l.minAsNumber?void b.info("max/min overflow can't apply stepUp/stepDown"):void a.prop(this,"valueAsNumber",h))}}})});var q={number:{bad:function(a){return!g(a)},step:1,stepScaleFactor:1,asNumber:function(a){return g(a)?1*a:e},numberToString:function(a){return g(a)?a:!1}},range:{minDefault:0,maxDefault:100},color:{bad:function(){var a=/^\u0023[a-f0-9]{6}$/;return function(b){return!b||7!=b.length||!a.test(b)}}()},date:{bad:function(a){if(!a||!a.split||!/\d$/.test(a))return!0;var b,c=a.split(/\u002D/);if(3!==c.length)return!0;var d=!1;if(c[0].length<4||2!=c[1].length||c[1]>12||2!=c[2].length||c[2]>33)d=!0;else for(b=0;3>b;b++)if(!j(c[b])){d=!0;break}return d||a!==this.dateToString(this.asDate(a,!0))},step:1,stepScaleFactor:864e5,asDate:function(a,b){return!b&&this.bad(a)?null:new Date(this.asNumber(a,!0))},asNumber:function(a,b){var c=e;return(b||!this.bad(a))&&(a=a.split(/\u002D/),c=Date.UTC(a[0],a[1]-1,a[2])),c},numberToString:function(a){return g(a)?this.dateToString(new Date(1*a)):!1},dateToString:function(a){return a&&a.getFullYear?l(a.getUTCFullYear(),4)+"-"+l(a.getUTCMonth()+1,2)+"-"+l(a.getUTCDate(),2):!1}},time:{bad:function(b,c){if(!b||!b.split||!/\d$/.test(b))return!0;if(b=b.split(/\u003A/),b.length<2||b.length>3)return!0;var d,e=!1;return b[2]&&(b[2]=b[2].split(/\u002E/),d=parseInt(b[2][1],10),b[2]=b[2][0]),a.each(b,function(a,b){return j(b)&&2===b.length?void 0:(e=!0,!1)}),e?!0:b[0]>23||b[0]<0||b[1]>59||b[1]<0?!0:b[2]&&(b[2]>59||b[2]<0)?!0:d&&isNaN(d)?!0:(d&&(100>d?d*=100:10>d&&(d*=10)),c===!0?[b,d]:!1)},step:60,stepBase:0,stepScaleFactor:1e3,asDate:function(a){return a=new Date(this.asNumber(a)),isNaN(a)?null:a},asNumber:function(a){var b=e;return a=this.bad(a,!0),a!==!0&&(b=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0),a[1]&&(b+=a[1])),b},dateToString:function(a){if(a&&a.getUTCHours){var b=l(a.getUTCHours(),2)+":"+l(a.getUTCMinutes(),2),c=a.getSeconds();return"0"!=c&&(b+=":"+l(c,2)),c=a.getUTCMilliseconds(),"0"!=c&&(b+="."+l(c,3)),b}return!1}},month:{bad:function(a){return q.date.bad(a+"-01")},step:1,stepScaleFactor:!1,asDate:function(a){return new Date(q.date.asNumber(a+"-01"))},asNumber:function(a){var b=e;return a&&!this.bad(a)&&(a=a.split(/\u002D/),a[0]=1*a[0]-1970,a[1]=1*a[1]-1,b=12*a[0]+a[1]),b},numberToString:function(a){var b,c=!1;return g(a)&&(b=a%12,a=(a-b)/12+1970,b+=1,1>b&&(a-=1,b+=12),c=l(a,4)+"-"+l(b,2)),c},dateToString:function(a){if(a&&a.getUTCHours){var b=q.date.dateToString(a);return b.split&&(b=b.split(/\u002D/))?b[0]+"-"+b[1]:!1}return!1}},"datetime-local":{bad:function(a,b){return a&&a.split&&2===(a+"special").split(/\u0054/).length?(a=a.split(/\u0054/),q.date.bad(a[0])||q.time.bad(a[1],b)):!0},noAsDate:!0,asDate:function(a){return a=new Date(this.asNumber(a)),isNaN(a)?null:a},asNumber:function(a){var b=e,c=this.bad(a,!0);return c!==!0&&(a=a.split(/\u0054/)[0].split(/\u002D/),b=Date.UTC(a[0],a[1]-1,a[2],c[0][0],c[0][1],c[0][2]||0),c[1]&&(b+=c[1])),b},dateToString:function(a,b){return q.date.dateToString(a)+"T"+q.time.dateToString(a,b)}}};!n&&h("range")&&h("time")&&h("month")&&h("datetime-local")||(q.range=a.extend({},q.number,q.range),q.time=a.extend({},q.date,q.time),q.month=a.extend({},q.date,q.month),q["datetime-local"]=a.extend({},q.date,q.time,q["datetime-local"])),["number","month","range","date","time","color","datetime-local"].forEach(function(a){(n||!h(a))&&b.addInputType(a,q[a])}),null==a("<input />").prop("labels")&&b.defineNodeNamesProperty("button, input, keygen, meter, output, progress, select, textarea","labels",{prop:{get:function(){if("hidden"==this.type)return null;var b=this.id,c=a(this).closest("label").filter(function(){var a=this.attributes["for"]||{};return!a.specified||a.value==b});return b&&(c=c.add('label[for="'+b+'"]')),c.get()},writeable:!1}})}),webshims.register("form-datalist",function(a,b,c,d,e,f){"use strict";var g=function(a){a&&"string"==typeof a||(a="DOM"),g[a+"Loaded"]||(g[a+"Loaded"]=!0,b.ready(a,function(){b.loader.loadList(["form-datalist-lazy"])}))},h={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};b.modules["form-number-date-ui"].loaded&&a.extend(h,{number:1,time:1}),b.propTypes.element=function(c,e){b.createPropDefault(c,"attr"),c.prop||(c.prop={get:function(){var b=a.attr(this,e);return b&&(b=d.getElementById(b),b&&c.propNodeName&&!a.nodeName(b,c.propNodeName)&&(b=null)),b||null},writeable:!1})},function(){var i=a.webshims.cfg.forms,j=Modernizr.input.list;if(!j||i.customDatalist){var k=function(){var c=function(){var b;!a.data(this,"datalistWidgetData")&&(b=a.prop(this,"id"))?a('input[list="'+b+'"], input[data-wslist="'+b+'"]').eq(0).attr("list",b):a(this).triggerHandler("updateDatalist")},d={autocomplete:{attr:{get:function(){var b=this,c=a.data(b,"datalistWidget");return c?c._autocomplete:"autocomplete"in b?b.autocomplete:b.getAttribute("autocomplete")},set:function(b){var c=this,d=a.data(c,"datalistWidget");d?(d._autocomplete=b,"off"==b&&d.hideList()):"autocomplete"in c?c.autocomplete=b:c.setAttribute("autocomplete",b)}}}};j?((a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||b.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=this,d=a("select",c);d[0]&&d[0].options&&d[0].options.length&&(b=d[0].options)}return b}}}),d.list={attr:{get:function(){var c=b.contentAttr(this,"list");return null!=c?(a.data(this,"datalistListAttr",c),h[a.prop(this,"type")]||h[a.attr(this,"type")]||this.removeAttribute("list")):c=a.data(this,"datalistListAttr"),null==c?e:c},set:function(c){var d=this;a.data(d,"datalistListAttr",c),h[a.prop(this,"type")]||h[a.attr(this,"type")]?d.setAttribute("list",c):(b.objectCreate(l,e,{input:d,id:c,datalist:a.prop(d,"list")}),d.setAttribute("data-wslist",c)),a(d).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):b.defineNodeNameProperties("input",{list:{attr:{get:function(){var a=b.contentAttr(this,"list");return null==a?e:a},set:function(c){var d=this;b.contentAttr(d,"list",c),b.objectCreate(f.shadowListProto,e,{input:d,id:c,datalist:a.prop(d,"list")}),a(d).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}}),b.defineNodeNameProperties("input",d),b.addReady(function(a,b){b.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(c)})},l={_create:function(d){if(!h[a.prop(d.input,"type")]&&!h[a.attr(d.input,"type")]){var e=d.datalist,f=a.data(d.input,"datalistWidget"),i=this;return e&&f&&f.datalist!==e?(f.datalist=e,f.id=d.id,a(f.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",a.proxy(f,"_resetListCached")),void f._resetListCached()):e?void(f&&f.datalist===e||(this.datalist=e,this.id=d.id,this.hasViewableData=!0,this._autocomplete=a.attr(d.input,"autocomplete"),a.data(d.input,"datalistWidget",this),a.data(e,"datalistWidgetData",this),g("WINDOWLOAD"),b.isReady("form-datalist-lazy")?c.QUnit?i._lazyCreate(d):setTimeout(function(){i._lazyCreate(d)},9):(a(d.input).one("focus",g),b.ready("form-datalist-lazy",function(){i._destroyed||i._lazyCreate(d)})))):void(f&&f.destroy())}},destroy:function(b){var f,g=a.attr(this.input,"autocomplete");a(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),a(d).off(".datalist"+this.id),a(c).off(".datalist"+this.id),this.input.form&&this.input.id&&a(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),g===e?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",g),b&&"beforeunload"==b.type&&(f=this.input,setTimeout(function(){a.attr(f,"list",a.attr(f,"list"))},9)),this._destroyed=!0}};b.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:a.extend(f,{shadowListProto:l})}),f.list||(f.list={}),k()}}()});