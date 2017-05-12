    $('body').scrollspy({ target: '.navbar-fixed-top' })
    $(document).on('click', '#navbar a', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    var contact = document.getElementById("contact");
    var open = document.getElementById("open");
    var close = document.getElementById("close");
    var sendMessIcon = document.getElementById("sendMessIcon");
    var messageContainer = document.getElementById("message-container");
    var aboutMe = document.getElementById("aboutMe");
    var prevSlide = document.getElementById("prevSlide");
    var nextSlide = document.getElementById("nextSlide");
    window.onload = function(){
        nextSlide.style.opacity = "1";
    }
function openInfo(){
    open.style.opacity = "0";
    close.style.opacity = "1";
    sendMessIcon.style.opacity = "1";
    contact.style.height = "487px"
}
function closeInfo(){
    open.style.opacity = "1";
    close.style.opacity = "0";
    sendMessIcon.style.opacity = "0";
    contact.style.height = "130px"
}
function showMessContainer(){
    messageContainer.classList.add("active");
}
function sendMess(){
    messageContainer.classList.remove("active");
    alert("Message sent successful!")
}
function cancelMess(){
    messageContainer.classList.remove("active");
}
function nextSlider(){
    aboutMe.classList.add("left");
    prevSlide.style.opacity = "1";
    nextSlide.style.opacity = "0";
}
function prevSlider(){
    aboutMe.classList.remove("left");
    prevSlide.style.opacity = "0";
    nextSlide.style.opacity = "1";
}