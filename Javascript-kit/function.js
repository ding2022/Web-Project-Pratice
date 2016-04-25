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
        url:location.href
    };

    /*
    * 链接操作通用函数
    * */
    o.urls = {
        param:""
    };
    o.urls.getParam = function(opts){
        var opts = plugs.extend(defaults,opts);
        var url = opts.url;

        var reg = new RegExp("(^|&)"+ opts.param +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    };

    return o;
})((JKit || {}),plugs);

//Demo
//alert(JKit.urls.getParam({url:"http://www.baidu.com?id=1",param:'id'}));

