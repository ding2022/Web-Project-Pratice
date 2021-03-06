/**
 * Created by pengguangyu on 2016/4/25.
 */

var plugs = {
    extend : function(target, options) {
        for (name in options) {
            target[name] = options[name];
        }
        return target;
    }
};

var JKit = (function(o,plugs){

    var defaults = {
        url:location.href,
        idName : "JKshow"
    };

    /*
    * 链接操作通用函数
    * */
    o.urls = {
        url : "",
        param : ""
    };
    o.urls.getParam = function(opts){
        var opts = plugs.extend(defaults,opts);
        var url = opts.url;
        url = url.substr(url.indexOf("?"));

        var reg = new RegExp("(^|&)"+ opts.param +"=([^&]*)(&|$)");
        var r = url.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    };

    /*
    * 控制元素显示、隐藏
    * */
    o.toggle = {
        className : "",
    };
    o.toggle.showOrhide = function(opts){
        var opts = plugs.extend(defaults,opts);
        var eleId = document.getElementById(opts.idName);
        var showOrHide = eleId.style.display;

        if(showOrHide == "none")
            eleId.style.display = "block";
        else
            eleId.style.display = "none";

    };

    return o;
})((JKit || {}),plugs);


