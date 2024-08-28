const button = $('button');
const envelope = $('.envelope');
var flipped = false;

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
			ease: Circ.easeInOut

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
		.to('button', 1, {
			y: '180px',
			ease: Circ.easeInOut,
			onComplete: toggleHide
		}, 'moveDown+=0.15'
		);
}

function toggleFlip() {
	if (!envelope.hasClass('is-open')) {
		return;
	}

	const ry = (!flipped) ? 180 : 0;
	flipped = (!flipped) ? true : false;

	TweenMax.to('.card', 1, {
		rotationY: ry,
		ease: Power4.easeInOut,
		onComplete: toggleHide
	});
}

function toggleHide() {
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
	const linkElement = document.querySelector('link[href="styles/blueenvelopestyle.css"]');

	setTimeout(() => {
		linkElement.parentNode.removeChild(linkElement);
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

	}, 1000);

}

button.one('click', pullOut);
button.on('click', toggleFlip);