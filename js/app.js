import "./fullpage.min.js";

const cards = document.querySelectorAll(".card");

const myFullpage = new fullpage("#fullpage", {
  menu: "#menu",
  lockAnchors: false,
  anchors: ["firstPage", "secondPage"],
  navigation: false,
  navigationPosition: "right",
  navigationTooltips: ["firstSlide", "secondSlide"],
  showActiveTooltip: true,
  slidesNavigation: true,
  slidesNavPosition: "bottom",

  // Scrolling
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 600,
  scrollBar: false,
  easingcss3: "ease",
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: true,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: true,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: true,
  normalScrollElements: "#element1, .element2",
  scrollOverflow: false,
  scrollOverflowMacStyle: false,
  scrollOverflowReset: false,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  // Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  // Design
  controlArrows: true,
  controlArrowsHTML: [
    '<li class="fp-arrow">1</li>',
    '<li class="fp-arrow">2</li>',
  ],
  verticalCentered: true,
  paddingTop: "3em",
  paddingBottom: "10px",
  fixedElements: ".header, .footer .footer__contact",
  responsiveWidth: 992,
  responsiveHeight: 650,
  responsiveSlides: false,
  parallax: true,
  parallaxOptions: {
    type: "reveal",
    percentage: 62,
    property: "translate",
  },
  dropEffect: false,
  dropEffectOptions: { speed: 2300, color: "#F82F4D", zIndex: 9999 },
  waterEffect: true,
  waterEffectOptions: { animateContent: true, animateOnMouseMove: true },
  cards: false,
  cardsOptions: {
    perspective: 100,
    fadeContent: true,
    fadeBackground: true,
  },

  // Custom selectors
  sectionSelector: ".card",
  slideSelector: ".slide",

  lazyLoading: true,
  observer: true,

  // Events
  beforeLeave: function (origin, destination, direction, trigger) {},
  onLeave: function (origin, destination, direction, trigger) {
    const { backgroundColor } = destination.item.dataset;
    document.body.style.backgroundColor = backgroundColor;
  },
  afterLoad: function (origin, destination, direction, trigger) {
    cards.forEach((card) => {
      card.style.minHeight = `100vh`;
    });
  },
  afterRender: function () {},
  afterResize: function (width, height) {
    cards.forEach((card) => {
      card.style.minHeight = `100vh`;
    });
  },

  afterReBuild: function () {},
  afterResponsive: function (isResponsive) {},
  afterSlideLoad: function (
    section,
    origin,
    destination,
    direction,
    trigger
  ) {},
  onSlideLeave: function (section, origin, destination, direction, trigger) {},
  onScrollOverflow: function (section, slide, position, direction) {},
});
