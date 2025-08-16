'use strict';

const typedOptions = {
    strings: [' make awesome websites.', ' build digital solutions.', ' design modern interfaces.'],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
};

const typed = new Typed('#typed-text', typedOptions);
