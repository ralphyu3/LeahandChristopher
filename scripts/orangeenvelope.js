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
            onComplete: removeEnvelopeElements
        }, 'moveDown+=0.15');
}


function removeEnvelopeElements() {
    const fontLink = document.querySelector('link[href="https://fonts.googleapis.com/css?family=Baloo"]');
    const stylesheetLink = document.querySelector('link[href="styles/orangeenvelopestyles.css"]');
    const invitationDiv = document.querySelector('div.invitation');
    const jqueryScript = document.querySelector('script[src="https://code.jquery.com/jquery-2.2.4.min.js"]');
    const tweenMaxScript = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"]');
    const scrubGSAPScript = document.querySelector('script[src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/ScrubGSAPTimeline.js"]');
    const orangeEnvelopeScript = document.querySelector('script[src="./scripts/orangeenvelope.js"]');


    setTimeout(() => {
        fontLink.remove();
        stylesheetLink.remove();
        invitationDiv.remove();
        jqueryScript.remove();
        tweenMaxScript.remove();
        scrubGSAPScript.remove();
        orangeEnvelopeScript.remove();
    }, 1000)



}

button.one('click', pullOut);