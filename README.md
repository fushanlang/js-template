js-template
===========

lightest javascript template. keep original javascript syntax.  easily to use.


how to use
==========


Parameter:
 template is template string.
 values  is a simple obj variables container. like  {'name':'tom','age':13}
 syntax:
 <js></js>
 keep original javascript syntax support, add
 and public output function named as "echo".

 example:
 <textarea id="template_code" style="display:none'>
 <js> for(var i=0;i<names.length;++i){</js>
 	<label><h1><js> echo(names[i]);</js></h1></label>
 <js> }</js>
 </textarea>
 js_template(document.getElementById('template_code').value,{names:['tom','jerry','david']});

 Exception processing:
 if eval met exeption, will
 automaticlly add the debug info to window.AJ variable.
 let developer easily to debug.

 Author:fushanlang
 Email :fushanlang@gmail.com

