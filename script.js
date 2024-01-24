'use strict';

///////////////////////////////
// Carousel Slider
const logosSlide = document.querySelector('.logo-slide');
const LogosContainer = document.querySelector('.carousel-logos');

// Make Clone for logosSlide
const logosCopy = logosSlide.cloneNode(true);

// Append it to the Logo Container
// LogosContainer.appendChild(logosCopy);

/////////////////////////////////
// FAQ Script

const AllAnswer = document.querySelectorAll('[data-answer]');
const AllArrow = document.querySelectorAll('[data-arrow]');
const question = document.querySelectorAll('[data-question]');

const faqFun = function () {
	for (let i = 0; i < question.length; i++) {
		question[i].addEventListener('click', function (e) {
			AllAnswer[i].classList.toggle('answer-opened');
			AllArrow[i].classList.toggle('arrow-rotated');
			AllArrow[i].classList.toggle('active-color');
		});
	}
};
faqFun();

//////////////////////////////////////
// Mobile navigation button
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const mobileBtn = document.querySelector('.btn-mobile-nav');

const navFun = function () {
	mobileBtn.addEventListener('click', function () {
		// it'll toggle the hidden class into nav element
		nav.classList.toggle('mobile-nav');
		// it'll toggle the hidden nav-logo-open into mobile button element
		mobileBtn.classList.toggle('nav-logo-open');
	});
};
navFun();

///////////////////////////////////////////////
// Observer Usage Functions

// Insert plans HTML
const plans = document.querySelector('.plans');
const plansArr = {
	plans: ['starter', 'intermedite', 'ultimate'],
	costs: [350, 450, 900],
};

const plansAdd = function () {
	plansArr.plans.forEach((p) => {
		const i = plansArr.plans.indexOf(p);
		const markup = ` <div class="package-plans text-middle">
								<h2 class="second-heading-3">${p}</h2>
								<p class="third-heading-2">$${plansArr.costs[i]} per month</p>
								<a class="hero-btn"
								   href="#">more details</a>
							</div>`;
		// console.log(plansArr.costs[i]);
		plans.insertAdjacentHTML('beforeend', markup);
	});
};

const plansRemove = function () {
	document.removeChild(document.querySelector('.package-plans'));
};

const packagePlans = document.querySelector('.package-plans');
const planInsert = function (entries, observer) {
	entries.forEach((entry) => {
		if (entry.boundingClientRect.width <= 688 && !entry.isIntersecting) {
			plansAdd();
		} else {
			// plansRemove();
		}
	});
};

// Sticky Navigation bar
const headerNav = document.querySelector('.header');
const stickynav = function (entries, observer) {
	entries.forEach((entry) => {
		// Observe the targetted element is out of window device
		if (!entry.isIntersecting) headerNav.classList.add('sticky');
		else headerNav.classList.remove('sticky');
		// Observe the width of the holded device and check the condition
	});
};

// observer creating
const observer = function (callback) {
	const observer = new IntersectionObserver(callback, {
		root: null,
		threshold: 0,
		rootMargin: '20px',
	});
	observer.observe(document.querySelector('header'));
};

// Observer intiating
const observerInit = function () {
	observer(stickynav);
	observer(planInsert);
};

observerInit();
