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
        window.root_url = "http://127.0.0.1:8000/static/";
        $.getScript(root_url+'js/modules.js', function(){
            $.getScript(root_url+'js/parser.js', function(){
                $.getScript(root_url+'js/django.js', function(){
                    init();
                });
            });
        });
    };
    function popupwindow(url, title, w, h) {
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2);
        return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
    }
    var init = function(){

        var width = 500;
        var height = 200;
        var left = (screen.width/2)-(width);
        var top = (screen.height/2)-(height)*1.5;

        var css_link = "<link href='"+root_url+"css/bootstrap.min.css' rel='stylesheet'>";
        $('head').append($(css_link));
        var template = "" +
            "" +
            "<style>"+
            ".workspace_top {" +
            "border: solid 1px;" +
            "padding: 10px;"+
            "position: absolute;"+
            "width: "+width+"px;"+
            "height: "+height+"px;"+
            "background-color: #fcfcfc;" +
            "top: "+top+"px;" +
            "left: "+left+"px;" +
            //" font: 15px/22.5px \"Helvetica Neue\",HelveticaNeue,Helvetica,Arial,sans-serif;" +
            //"text-align: left;"+
            "}"+
            "</style>"+
            "<div class='workspace_top '>"+

            "<form class=\"form-horizontal\">" +
            "<h4>Hello its workspace</h4>" +
            "  <div class=\"control-group\">" +
            "    <label class=\"control-label\" for=\"project\">Project</label>" +
            "    <div class=\"controls\">" +
            "     <input type='text' id='project' value='test'/>" +
            "    </div>" +
            "   </div>" +

            "  <div class=\"control-group\">" +
            "    <label class=\"control-label\" for=\"text\">Task</label>" +
            "    <div class=\"controls\">" +
            "     <input type='text' id='text' value=''/>" +
            "    </div>" +
            "   </div>" +
            "  <div class=\"control-group\">" +
            "    <div class=\"controls\">" +
            "     <button id='send' class=btn type=button>Send</button>" +
            "    </div>" +
            "" +
            "</div>";
        var iframe = "<iframe src='http://yandex.ru'></iframe>";
        $('body').append($(iframe));
        var div = $('<div>'+template+'</div>');
        $('body').append(div);
        $('#text').focus();


        $('#send').click(function(){

            var task = {
                text: $("#text").val(),
                project_name: $("#project").val()
            };
            $.ajax({
                type: "POST",
                url: '/json/task/add/',
                data: task,
                dataType: "json",
                success: function(data){
                    alert('task added');
                }
            });
        });
        $("input").bind("keydown", function(event) {
            // track enter key
            var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
            if (keycode == 13) { // keycode for enter key
                // force the 'Enter Key' to implicitly click the Update button
                document.getElementById('send').click();
                return false;
            } else  {
                return true;
            }
        }); // end of function

    };
    head.appendChild(script);
})()
