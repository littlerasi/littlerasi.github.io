emailjs.init("rTcfVxWAnrqF1zizs");

document
.getElementById("contactForm")

.addEventListener("submit", function(event){

    event.preventDefault();

    emailjs.sendForm(
        "service_tscr9ee",
        "template_30f7l6k",
        this,
        "rTcfVxWAnrqF1zizs"
    )

    .then(function(){

        alert("Pesan berhasil dikirim 🎉");

        document
        .getElementById("contactForm")
        .reset();

    })

    .catch(function(error){

        alert("Pesan gagal dikirim 😢");

        console.log("ERROR:", error);

    });

});