function verify()
    {
        var email = document.getElementById("email");
        var pass = document.getElementById("password");
		alert(email.value.trim());
        if(email.value.trim()=="" && pass.value.trim()=="")
            {
                alert("Blank username and password");
            }
        else if(email.value.trim()=="")
            {
                alert("Blank Username")
            }
        else if(pass.value.trim()=="")
            {
              alert("Blank password")
            }
        else
            {
                
	alert("good to go for login");
            }
    }