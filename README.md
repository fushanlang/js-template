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
 <pre>
  &lt;textarea id="template_code" style="display:none'&gt;
 &lt;js&gt; for(var i=0;i&lt;names.length;++i){&lt;/js&gt;
 	&lt;label&gt;&lt;h1&gt;&lt;js&gt; echo(names[i]);&lt;/js&gt;&lt;/h1&gt;&lt;/label&gt;
 &lt;js&gt; }&lt;/js&gt;
 &lt;/textarea&gt;
 </pre>
 js_template(document.getElementById('template_code').value,{names:['tom','jerry','david']});
 
 Exception processing:
 if eval met exeption, will
 automaticlly add the debug info to window.AJ variable.
 let developer easily to debug.

 Author:fushanlang
 Email :fushanlang@gmail.com

