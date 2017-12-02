/*复制粘贴*/
function mf()
{
    document.getElementById('modal-body').style.height = "460px";
    $('#alogin').modal('show');
    document.getElementById('zcpage').style.visibility= "visible";
}
function mg()
{
    document.getElementById('modal-body').style.height = "310px";
    $('#alogin').modal('show');
    document.getElementById('dlpage').style.visibility= "visible";
}
function f()
{
    $('#alogin').modal('hide');
    document.getElementById('dlpage').style.visibility= "hidden";
    window.setTimeout(mf,500);
    
}
function g()
{
    $('#alogin').modal('hide');
    document.getElementById('zcpage').style.visibility= "hidden";
    window.setTimeout(mg,500);
    
}
i = false;
function Check_username(id)
{
    var re =   /^[a-zA-Z0-9]*$/;
    if(!re.test(id)||id.length<5)//长度不对
    {
        document.getElementById('username_hint').innerHTML = "请输入5~16字的合法用户名！";
        $('#zcsubmit').attr('disabled',true);
        return false;
    }
    else
    {
        document.getElementById('username_hint').innerHTML = "";
        return true;
    }
}
function Check_name(name)
{
    if(name=='')
    {
        document.getElementById('name_hint').innerHTML = "请输入昵称！";
        $('#zcsubmit').attr('disabled',true);
        return false;
    }
    else
    {
        document.getElementById('name_hint').innerHTML = "";
        return true;
    }
}
function Check_password1(pw)
{
    var re =   /^[a-zA-Z0-9]*$/;
    if(!re.test(pw)||pw.length<5)
    {
        document.getElementById('password_hint').innerHTML = "请输入长度为5~16的合法密码！";
        $('#zcsubmit').attr('disabled',true);
        return false;
    }
    else
    {
        document.getElementById('password_hint').innerHTML = "";
        return true;
    }
}
function Check_password2(pw,pw2)
{
    var re =   /^[a-zA-Z0-9]*$/;
    if(pw2!=pw)
    {
        document.getElementById('password2_hint').innerHTML = "两次密码不一致！";
        $('#zcsubmit').attr('disabled',true);
        return false;
    }else{
        document.getElementById('password2_hint').innerHTML = "";
        return true;
    }
}
function Check_email(email)
{
    var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    if(!regex.test(email))
    {
        document.getElementById('email_hint').innerHTML = "请输入合法的电子邮箱！";
        $('#zcsubmit').attr('disabled',true);
        return false;
    }
    else
    {
        document.getElementById('email_hint').innerHTML = "";
        return true;
    }
}
function Check()
{
    var info = document.getElementById('zcpage').getElementsByTagName('input');
    var id = info[0].value;
    var name = info[1].value;
    var pw = info[2].value;
    var pw2 = info[3].value;
    var email = info[4].value;
    var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    var re =   /^[a-zA-Z0-9]*$/;
    if(!re.test(id)||id.length<5)
    {
        $('#zcsubmit').attr('disabled',true);
        return false;
    }
    else if(id.length==8)/*把这里改为判断是否重复的函数*/
    {
        document.getElementById('username_hint').innerHTML = "用户名重复！";
        $('#zcsubmit').attr('disabled',true);
        return false;
    }
    else 
    {
    document.getElementById('username_hint').innerHTML = "";
    if(name.length == 0)
    {
        $('#zcsubmit').attr('disabled',true);
        return false;
    }
    else if(!re.test(pw)||pw.length<5)
    {
        $('#zcsubmit').attr('disabled',true);
        return false;
    }
    else if(pw2!=pw)
    {
        $('#zcsubmit').attr('disabled',true);
        return false;
    }
    else if(!regex.test(email))
    {
        $('#zcsubmit').attr('disabled',true);
        return false;
    }
    else
    {
        $('#zcsubmit').attr('disabled',false);
    }
}
}
function monitor()
{
    var info = document.getElementById('zcpage').getElementsByTagName('input');
    var id = info[0].value;
    var name = info[1].value;
    var pw = info[2].value;
    var pw2 = info[3].value;
    var email = info[4].value;
    $('#reg_username').keyup(function(){
        Check_username(id);
        });
    $('#reg_name').keyup(function(){
        Check_name(name);
        });
    $('#reg_pw').keyup(function(){
        Check_password1(pw);
        });
    $('#reg_pw2').keyup(function(){
        Check_password2(pw,pw2);
        });
    $('#reg_mail').keyup(function(){
        Check_email(email);
        });
    $('input').blur(function(){
        Check();
    });
}
function show_modal()
{
	$('#alogin').modal('show');
}
window.setInterval(monitor,100);