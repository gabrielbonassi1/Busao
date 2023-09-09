var Messenger = function() {
    this.login_cookie = null;
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    return{
        auth : function(token) {
            var login_cookie
            var out = null;
            var request_contents = {
                url: 'http://api.olhovivo.sptrans.com.br/v2.1/Login?token=' + token,
                type: 'POST',
                dataType: 'json',
                success: function(result) {
                    out = result;
                    login_cookie = xhr
                },
                error: function(result) {
                    if(result.readyState != 4) {
                        out = {status:result.status, error: 'Unexpected error'};
                    } else {
                        out = !result.responseJSON ? JSON.parse(result.responseText) : result.responseJSON;

                        console.log(out);
                    }
                }
            }
        },

        send : function(endpoint, data, params, type) {
            if(data) {
                data = JSON.stringify(data);
            }
            var url = 'http://api.olhovivo.sptrans.com.br/v2.1/' + endpoint;
            if(params) {
                url += "?" + params;
            }
            var out = null;
            var request_contents = {
                url: url,
                type: type,
                dataType: 'json',
                success: function(result) {
                    out = result;
                },
                error: function(result) {
                    if(result.readyState != 4) {
                        out = {status:result.status, error: 'Unexpected error'};
                    } else {
                        out = !result.responseJSON ? JSON.parse(result.responseText) : result.responseJSON;

                        console.log(out);
                    }
                }
            };
            if(data) {
                request_contents.data = data;
            }
            $.ajax(request_contents);
            return out;
        }
    }
}();