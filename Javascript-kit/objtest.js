/**
 * Created by pengguangyu on 2016/3/21.
 */

//1对象封装
var obj = {
    sayHello:function(){
        document.write("1对象封装 say ----Hello World"+'<br />');
    }
};
obj.sayHello();

//2闭包
var loveThing = (function(){
    var my = {};
    var love = "coding";
    my.getLove = function() {
        return love;
    }
    my.sayLove = function(thing) {
        document.write(thing+'<br />');
    }
    return my;
})();

console.log(loveThing.getLove());//>>> coding
loveThing.sayLove('2闭包 loveThing ----reading');//>>> reading

//3宽放大模式
var pgy = {
    extend : function(target, options) {
        for (name in options) {
            target[name] = options[name];
        }
        return target;
    }
};
var pgy_toggle = (function(pgy_toggle,o){
    var defaults = {
        switchName:"switch",
        id:"toggle",
        hide:"none",
        show:"block"
    };
    var opts = defaults;
    var state = opts.show;
    o.toggle = function(opts){
        opts = pgy_toggle.extend(defaults,opts);
        var switchAction = document.getElementById(opts.switchName);
        var element = document.getElementById(opts.id);
        switchAction.onclick = function(){
            if(element.style.display!=(null||""))
                state = element.style.display;
            if(state == opts.hide)
                element.style.display = opts.show;
            else
                element.style.display = "none";
        }
    };

    return o;
})(pgy,(pgy_toggle || {}));

pgy_toggle.toggle({switchName:"switch"});
