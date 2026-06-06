/* ============================================
   VICOMETAL — Premium Scroll Effects JS
   Marquee parallax, scroll-reveal, numbered services
   ============================================ */

(function () {
    'use strict';

    /* --- 1. MARQUEE PARALLAX --- */
    function initMarquee() {
        const section = document.getElementById('marqueeSection');
        if (!section) return;

        const row1 = document.getElementById('marqueeRow1');
        const row2 = document.getElementById('marqueeRow2');
        if (!row1 || !row2) return;

        function onScroll() {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.25;

            row1.style.transform = 'translateX(' + (offset - 150) + 'px)';
            row2.style.transform = 'translateX(' + (-(offset - 150)) + 'px)';
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* --- 2. SCROLL-REVEAL TEXT (character opacity based on scroll) --- */
    function initScrollRevealText() {
        const blocks = document.querySelectorAll('.scroll-reveal-text');
        if (!blocks.length) return;

        blocks.forEach(function (block) {
            var text = block.textContent;
            block.textContent = '';
            block.setAttribute('aria-label', text);

            var chars = [];
            for (var i = 0; i < text.length; i++) {
                var span = document.createElement('span');
                if (text[i] === ' ') {
                    span.innerHTML = '&nbsp;';
                    span.className = 'char';
                } else {
                    span.textContent = text[i];
                    span.className = 'char';
                }
                block.appendChild(span);
                chars.push(span);
            }

            block._chars = chars;
        });

        function onScroll() {
            blocks.forEach(function (block) {
                var chars = block._chars;
                if (!chars || !chars.length) return;

                var rect = block.getBoundingClientRect();
                var windowH = window.innerHeight;

                // Calculate progress: 0 when entering bottom, 1 when at top
                var start = windowH * 0.85;
                var end = windowH * 0.25;
                var progress = (start - rect.top) / (start - end);
                progress = Math.max(0, Math.min(1, progress));

                var totalChars = chars.length;
                for (var i = 0; i < totalChars; i++) {
                    var charProgress = i / totalChars;
                    if (progress > charProgress) {
                        chars[i].classList.add('revealed');
                    } else {
                        chars[i].classList.remove('revealed');
                    }
                }
            });
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* --- 3. NUMBERED SERVICES STAGGER --- */
    function initNumberedServices() {
        var items = document.querySelectorAll('.service-numbered-item');
        if (!items.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
                    setTimeout(function () {
                        entry.target.classList.add('visible');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

        items.forEach(function (item, i) {
            item.setAttribute('data-delay', String(i * 100));
            observer.observe(item);
        });
    }

    /* --- INIT --- */
    function init() {
        initMarquee();
        initScrollRevealText();
        initNumberedServices();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
