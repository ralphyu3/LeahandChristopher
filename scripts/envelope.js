$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

function open() {
    const envelope = document.getElementById('envelope');
    const navbar = document.getElementById('navbar');
    const us = document.getElementById('us');
    const envelopebody = document.getElementById('envelopebody');
    const home = document.getElementById('home');
    const urinvited = document.getElementById('urinvited');
    const wedding = document.getElementById('wedding');
    const attire = document.getElementById('attire');
    const gift = document.getElementById('gift');
    const rsvp = document.getElementById('rsvp');
    const id01 = document.getElementById('id01');
    const foot = document.getElementById('foot');
    const margbottom = document.getElementById('margbottom');

    // Add 'open' class and remove 'close' class
    envelope.classList.add("open");
    envelope.classList.remove("close");
    setTimeout(() => {
        envelopebody.classList.add("b-hidden");
        navbar.classList.remove("b-hidden");
        us.classList.remove("b-hidden");
        home.classList.remove("b-hidden");
        urinvited.classList.remove("b-hidden");
        wedding.classList.remove("b-hidden");
        attire.classList.remove("b-hidden");
        gift.classList.remove("b-hidden");
        rsvp.classList.remove("b-hidden");
        id01.classList.remove("b-hidden");
        foot.classList.remove("b-hidden");
        margbottom.classList.remove("b-hidden");

    }, 2000);
   
}

    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});