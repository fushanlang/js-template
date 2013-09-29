/*****
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
 */

function js_template(template, values) {
    //output results
    var result = "";

    //public output function
    var echo = function (output) {
        result += output;
    }

    //exception recorder
    var errors=window.AJ;
    window.AJ=errors=!errors?[]:errors;

    //specialized split tag.
    var split = '_{' + Math.random() + '}_';

    //merge multi lines to one line.
    var estr = template.replace(/\n|\r|\t/g, "");

    var js = [];
    /****
     * matches <js>...</js> replaced by the specailized split tag.
     * push to js array at the sametime.
     * */
    estr = estr.replace(/<js>(.*?)<\/js>/g, function ($0, $1) {
        js.push($1);
        return split;
    });

    //splict out the text in template by the specailized split tag.
    var txt = estr.split(split);
    estr = "";
    /****
     * 0101010---0=txt[]element,1=js[]element
     * reconcat txt,js array to a string which
     * can be executed through eval function.
     *
     * **/
    for (var i = 0; i < js.length; ++i) {
        estr += 'echo(txt[' + i + ']);';
        estr += js[i];
    }
    estr += 'echo(txt[' + js.length + ']);';

    try {
        if (values) {
            for (var i in values) {
                //declare the subvariables in template values container.
                eval('var ' + i + ' =values[i];');
            }
        }
        eval(estr);
    }
    catch (error) {
        //record the exception.
        errors.push([error,estr,template]);
    } finally {
        return result;
    }
}