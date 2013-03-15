/**
 * Created with PyCharm.
 * User: npryanichnikov
 * Date: 14.03.13
 * Time: 13:05
 * To change this template use File | Settings | File Templates.
 */
javascript:(function(){
    var script=document.createElement('script');
    script.src='http://127.0.0.1:8000/static/js/jsonp.js?__rnd='+Math.random()*10000;
    document.body.appendChild(script);
})()
