$(function() {
	
    function validate() {
        var $form = $('form.form'),
            _userName = $.trim($('.userName', $form).val()),
            _password = $.trim($('.password', $form).val()),
            regUserName = /^[A-Za-z0-9_-]{1,50}$/,
            regPassword = /^[A-Za-z0-9_-]{1,50}$/;

        if (!_userName || !_userName.length) {
            $('.userNameError', $form).html('用户名不能为空！');
            return false;
        } else if (!regUserName.test(_userName)) {
            $('.userNameError', $form).html('用户名为1-50位的数字或字母！');
            return false;
        } else {
            $('.userNameError', $form).html('');
        }

        if (!_password || !_password.length) {
            $('.passwordError', $form).html('密码不能为空！');
            return false;
        } else if (!regPassword.test(_password)) {
            $('.passwordError', $form).html('密码为1-50位的数字或字母！');
            return false;
        } else {
            $('.passwordError', $form).html('');
        }
        return true;
    }

    $('.userName,.password', '.sy-input').unbind('blur').bind('blur', function(event) {
        validate();
    }).eq(0).trigger('focus');

    $('.form').submit(function() {
        return validate();
    });
    
});