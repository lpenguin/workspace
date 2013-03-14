/**
 * Created with PyCharm.
 * User: npryanichnikov
 * Date: 14.03.13
 * Time: 12:58
 * To change this template use File | Settings | File Templates.
 */


(function(){
    var script=document.createElement('script');
    script.src='http://code.jquery.com/jquery-latest.min.js';
    var head=document.getElementsByTagName('head')[0], done=false;
    script.onload=script.onreadystatechange = function(){
        if ( !done && (!this.readyState
            || this.readyState == 'loaded'
            || this.readyState == 'complete') ) {
            success();
            script.onload = script.onreadystatechange = null;
            head.removeChild(script);
        }
    };
    var success = function(){
        var div = document.createElement("div")
        div.innerHTML = "abs";
        document.getElementsByTagName('body')[0].appendChild(div);
        window.root_url = "http://127.0.0.1:8000/static/";
        $.getScript(root_url+'js/modules.js', function(){
            $.getScript(root_url+'js/parser.js', function(){
                $.getScript(root_url+'js/django.js', function(){
                    init();
                });
            });
        });
    };

    var init = function(){

        var template = "<style>"+
            ".workspace_top {" +
            "padding: 10px;"+
            "position: absolute;"+
            "width: 300px;"+
            "height: 200px;"+
            "background-color: #f0f0f0;" +
            "top: 100px;" +
            "left: 500px;"+
            "}"+
            "</style>"+
            "<div class='workspace_top'>"+
            "Hello its workspace" +
            "</div>";
        var div = $('<div>'+template+'</div>');
        $('body').append(div);


    };
    head.appendChild(script);

})()
