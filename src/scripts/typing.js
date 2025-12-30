document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        "Desenvolvedor Web",
        "Técnico em Desenvolvimento de Sistemas",
        "Sites modernos para seu negócio vender mais"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = deletingSpeed;

            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;

            if (charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = pauseTime;
            }
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 500);
});