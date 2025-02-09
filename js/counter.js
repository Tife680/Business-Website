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