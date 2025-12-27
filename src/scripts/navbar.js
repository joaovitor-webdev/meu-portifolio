document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile_btn');
    const mobileMenu = document.getElementById('mobile_menu');
    const mobileOverlay = document.getElementById('mobile_overlay');

    if (!mobileBtn || !mobileMenu) return;

    function setMenuState(isOpen) {
        mobileBtn.setAttribute('aria-expanded', String(isOpen));
        mobileMenu.setAttribute('aria-hidden', String(!isOpen));
        mobileBtn.classList.toggle('open', isOpen);
        mobileMenu.classList.toggle('open', isOpen);
        if (mobileOverlay) {
            mobileOverlay.classList.toggle('open', isOpen);
            mobileOverlay.setAttribute('aria-hidden', String(!isOpen));
        }
        document.body.classList.toggle('no-scroll', isOpen);
        const main = document.querySelector('main');
        if (main) main.setAttribute('aria-hidden', String(isOpen));
    }

    mobileBtn.addEventListener('click', () => {
        const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
        setMenuState(!expanded);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            setMenuState(false);
        }
    });

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', () => setMenuState(false));
    }

    // fallback: click outside to close
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target) && mobileMenu.classList.contains('open')) {
            setMenuState(false);
        }
    });
});