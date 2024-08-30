const button = $('#envelopeButton');
const envelope = $('.envelope');

function pullOut() {
    button.hide();
    return new TimelineMax()
        .to('.flap', 1, {
            rotationX: 180,
            ease: Power1.easeInOut
        }, 'scaleBack')
        .to('.invitation', 1, {
            scale: 0.8,
            ease: Power4.easeInOut,
        }, 'scaleBack')
        .set('.flap', {
            zIndex: 0
        })
        .to('.card', 1, {
            y: '0%',
            scaleY: 1.2,
            ease: Circ.easeInOut,
        })
        .set('.mask', {
            //- Change overflow on mask
            overflow: 'visible',
            onComplete: function () {
                //- Change Z-Index on Pseudo element
                envelope.toggleClass('is-open');
            }
        })
        .to('.mask', 1.3, {
            'clip-path': 'inset(0 0 0% 0)',
            ease: Circ.easeInOut,
        }, 'moveDown')
        .to('.card', 1.3, {
            y: '100%',
            scaleY: 1,
            ease: Circ.easeInOut,
        }, 'moveDown')
        .to('#envelopeButton', 1, {
            y: '180px',
            ease: Circ.easeInOut,
            onComplete: initialize
        }, 'moveDown+=0.15');
}


function initialize() {
    setTimeout(() => {
        removeEnvelopeElements();
        addMainHtmlStyles();
        setTimeout(() => {
            removebhidden();
        }, 10);


    }, 1500)
}

function removeEnvelopeElements() {
    const fontLink = document.querySelector('link[href="https://fonts.googleapis.com/css?family=Baloo"]');
    const stylesheetLink = document.querySelector('link[href="styles/orangeenvelopestyles.css"]');
    const invitationDiv = document.querySelector('div.invitation');
    const jqueryScript = document.querySelector('script[src="https://code.jquery.com/jquery-2.2.4.min.js"]');
    const tweenMaxScript = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"]');
    const scrubGSAPScript = document.querySelector('script[src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/ScrubGSAPTimeline.js"]');
    const orangeEnvelopeScript = document.querySelector('script[src="./scripts/orangeenvelope.js"]');

    fontLink.remove();
    stylesheetLink.remove();
    invitationDiv.remove();
    jqueryScript.remove();
    tweenMaxScript.remove();
    scrubGSAPScript.remove();
    orangeEnvelopeScript.remove();
}

function addMainHtmlStyles() {
    // Array of link element details
    const links = [
        { rel: 'stylesheet', href: 'styles/styles.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'true' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Bungee+Tint&family=Jersey+10&family=Dancing+Script:wght@400..700&family=Matemasie&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Great+Vibes&family=Pacifico&display=swap' }
    ];

    // Function to add each link element to the head
    links.forEach(linkData => {
        const link = document.createElement('link');
        Object.keys(linkData).forEach(attr => link.setAttribute(attr, linkData[attr]));
        document.head.appendChild(link);
    });

}

function addMainHtmlBody() {
    document.body.insertAdjacentHTML('afterbegin',
        `
    <!-- Header / Home-->
    <header class="rmw-display-container rmw-wide bgimg rmw-grayscale-min" id="home">
        <div class="rmw-display-middle headertext rmw-center ">
            <h1 class="rmw-jumbo merriweather-regular">Marielle & Ralph</h1>
            <h2 class="merriweather-regular">are getting married</h2>
            <h2 class="merriweather-regular"><b>12.07.2024</b></h2>
        </div>
    </header>

    <!-- Navbar (sticky bottom) -->
    <div class="rmw-bottom rmw-hide-small navbar">
        <div class="rmw-bar rmw-white rmw-center rmw-padding rmw-opacity-min rmw-hover-opacity-off">
            <a href="#home" style="width:25%" class="rmw-bar-item rmw-button">Home</a>
            <a href="#us" style="width:25%" class="rmw-bar-item rmw-button">Soon to be YUs</a>
            <a href="#wedding" style="width:25%" class="rmw-bar-item rmw-button">Wedding</a>
            <a href="#rsvp" style="width:25%" class="rmw-bar-item rmw-button rmw-hover-black">RSVP</a>
        </div>
    </div>

    <!-- Soon to be YUS-->
    <div class="rmw-container rmw-padding-64  rmw-grayscale-min" id="us">
        <div class="rmw-content">
            <h1 class="rmw-center pacifico-regular ">Soon to be YUs . .</h1>
            <img class="rmw-round rmw-grayscale-min" src="images/sg9.JPG"
                 style="width:100%;margin:32px 0">
            <p>
                <i>
                    We joyfully invite you to witness our love and commitment as we embark on this beautiful journey together. Your presence will make our special day even more memorable, as we celebrate the start of our new chapter filled with love, laughter, and cherished moments.

                    Please join us for a day of heartfelt vows, joyous celebrations, and unforgettable memories. We look forward to sharing this meaningful occasion with you and creating memories that will last a lifetime.
                </i>
            </p><br>
            <p class="rmw-center">
                <a href="#wedding"
                   class="rmw-button rmw-black rmw-round rmw-padding-large rmw-large">Wedding Details</a>
            </p>
        </div>
    </div>

    <!-- You are Invited of Course -->
    <div class="rmw-display-container bgimg2">
        <div class="rmw-display-middle rmw-text-white rmw-center">
            <h1 class="rmw-xlarge merriweather-regular">Of course,</h1><br>
            <h1 class="rmw-jumbo merriweather-regular">You Are Invited</h1><br>
        </div>
    </div>

    <!-- Wedding Details -->
    <div class="rmw-container rmw-padding-48  rmw-grayscale-min rmw-center" id="wedding">
        <div class="rmw-content">
            <h1 class="rmw-text-black"><b>Wedding Details</b></h1>
            <img class="rmw-round-large rmw-grayscale-min"
                 src="images/farmhouse-removebg-preview.png" alt="Farmhouse" style="width:70%;margin:10px 0">
            <h5 class="rmw-text-black">December 07, 2024</h5>
            <div class="rmw-row">
                <div class="rmw-half">
                    <h2>Venue</h2>
                    <p>The Old Farmhouse at Hacienda Gloria, Brgy. Concepcion, Talisay City, Negros Occidental</p>
                    <p>
                        <a href="https://maps.app.goo.gl/Cz2rbgZeKmog5S7s8" target="_blank"
                           class="rmw-hover-text-amber">Click to view on Google Maps</a>
                    </p>
                </div>
                <div class="rmw-half">
                    <h2>Program</h2>
                    <p>Wedding Ceremony - 3:00pm</p>
                    <p>Cocktail Hour - 4:00pm</p>
                    <p>Reception & Dinner - 5:30pm</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Attire Details -->
    <div class="rmw-container rmw-padding-48  rmw-grayscale-min rmw-center">
        <div class="rmw-content">
            <h1 class="rmw-text-black"><b>Dress Code</b></h1>
            <div class="rmw-row">
                <h2 class="rmw-text-black"><b>Principal Sponsors</b></h2>
                <div class="rmw-half">
                    <h3>Male</h3>
                    <p>
                        Barong Tagalog (Cream)
                    </p>
                </div>
                <div class="rmw-half">
                    <h3>Female</h3>
                    <p>
                        Long Gown (Beige / Cream)
                    </p>
                </div>
            </div>
            <div class="rmw-row">

                <div class="rmw-col">
                    <h2 class="rmw-text-black"><b>Guests</b></h2>
                    <p>
                        Strictly Semi-Formal Attire
                    </p>
                </div>
                <div class="rmw-col">
                    <h2><img src="images/colorpallete.png" alt="colorpallete"></h2>
                </div>
            </div>
        </div>
    </div>

    <!--Gift Ideas-->
    <div class="rmw-container rmw-padding-64  rmw-grayscale-min rmw-center">
        <div class="rmw-content">
            <h1 class="rmw-text-black"><b>Gift Ideas</b></h1>
            <p class="">
                <i>
                    Your presence on our special day means the world to us. We kindly ask for your prayers as we begin our journey together. If you'd like to give a gift, it will be greatly appreciated.
                </i>
            </p>
            <div class="rmw-row">
                <div class="rmw-third">
                    <h3>Cash</h3>
                    <p>
                        Envelopes will be provided on the venue
                    </p>
                </div>
                <div class="rmw-third">
                    <h3>Gcash</h3>
                    <p>
                        You can send on 09xxxxxx
                    </p>
                </div>
                <div class="rmw-third">
                    <h3>Others</h3>
                    <p>
                        Any gifts will be appreciated
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- RSVP section -->
    <div class="rmw-container rmw-padding-64  rmw-center" id="rsvp">
        <h1 class="raleway">We Hope You Can Join Us!</h1>
        <p class="rmw-medium raleway">Kindly Respond by clicking the RSVP button on/before September 30, 2024</p>
        <p class="rmw-xlarge">
            <button onclick="document.getElementById('id01').style.display='block'"
                    class="rmw-button rmw-round rmw-deep-red rmw-opacity rmw-hover-opacity-off" style="padding:8px 60px">
                RSVP
            </button>
        </p>
    </div>

    <!-- RSVP modal -->
    <div id="id01" class="rmw-modal">
        <div class="rmw-modal-content rmw-card-4 rmw-animate-zoom" style="padding:32px;max-width:600px; height: 85vh;">
            <span onclick="document.getElementById('id01').style.display='none'" class="rmw-button rmw-large rmw-display-topright">&times;</span>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdCbq6jbrjaUOLp8rkV2sqX4dNUPuXDHgqluZ6JbwZSpdFqpg/viewform?usp=sf_link"
                    width="100%" height="90%" frameborder="0" marginheight="0" marginwidth="0">
                Loading…
            </iframe>
        </div>
    </div>`)
}

function removebhidden() {
    const home = document.getElementById('home');
    const navbar = document.getElementById('navbar');
    const us = document.getElementById('us');
    const urinvited = document.getElementById('urinvited');
    const wedding = document.getElementById('wedding');
    const attire = document.getElementById('attire');
    const gift = document.getElementById('gift');
    const rsvp = document.getElementById('rsvp');
    const id01 = document.getElementById('id01');
    const foot = document.getElementById('foot');
    const margbottom = document.getElementById('margbottom');

    home.classList.remove("b-hidden");
    navbar.classList.remove("b-hidden");
    us.classList.remove("b-hidden");
    urinvited.classList.remove("b-hidden");
    wedding.classList.remove("b-hidden");
    attire.classList.remove("b-hidden");
    gift.classList.remove("b-hidden");
    rsvp.classList.remove("b-hidden");
    id01.classList.remove("b-hidden");
    foot.classList.remove("b-hidden");
    margbottom.classList.remove("b-hidden");
}

function removehidefoot() {

    const foot = document.getElementById('foot');
    foot.classList.remove("b-hidden")
}

function redirectoindex() {
    window.location.href = './index.html';
}

button.one('click', pullOut);