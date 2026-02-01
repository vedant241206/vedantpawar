
function sendMail(){
    let parms={
        name: document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        message: document.getElementById("message").value ,
    }
    emailjs.send("service_aemx3lq", "template_7cqd94j",parms).then(()=>{alert("Message sent sucessfully!!!");
}).catch((error)=> {
    alert("failed to send");
    console.error(error);
});
}