const submit = document.querySelector('#submit')
function ValidateEmail(mail)
{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}


submit.addEventListener('click', function (event){
    event.preventDefault();
     var fname = document.querySelector('#fname').value;
     var lname = document.querySelector('#lname').value;
     var email = document.querySelector('#email').value;
     ValidateEmail(email)
     console.log(ValidateEmail(email))
     console.log({fname, lname, email})
});