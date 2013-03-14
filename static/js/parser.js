/**
 * Created with PyCharm.
 * User: npryanichnikov
 * Date: 14.03.13
 * Time: 12:10
 * To change this template use File | Settings | File Templates.
 */

modules.parser = {
    parse_args: function(arg_str){
        var args  = arg_str.split(/\s+/);

        var optionals = {};
        var params = [];
        for(var i = 0; i < args.length; ){var arg = args[i++];
            if(arg.match(/^\-/)){
                // optional argument
                var arg_name = arg.replace(/^\-/, '');
                optionals[arg_name] = args[i++];
            }else{
                params.push(arg);
            }

        }
        return {
            options: optionals,
            arguments: params
        }
    }
};
