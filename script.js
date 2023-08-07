function login()
{
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if(username=="html" && password=="css")
    {
        window.location.href="yes.html"
        alert("success!")
    }
    else
    {
        alert("check once!");
    }
}
