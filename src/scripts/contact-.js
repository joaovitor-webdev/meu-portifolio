function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-form`).classList.add('active');
}

function sendWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('whatsapp-nome').value;
    const telefone = document.getElementById('whatsapp-telefone').value;
    const mensagem = document.getElementById('whatsapp-mensagem').value;

    const numeroWhatsApp = '5581992718851';

    const textoMensagem = `Olá! Meu nome é ${nome}.%0A%0ATelefone: ${telefone}%0A%0AMensagem: ${mensagem}`;

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;

    window.open(urlWhatsApp, '_blank');

    event.target.reset();
}

function sendEmail(event) {
    event.preventDefault();

    const nome = document.getElementById('email-nome').value;
    const email = document.getElementById('email-email').value;
    const mensagem = document.getElementById('email-mensagem').value;

    const seuEmail = 'joaovitor.webdev@gmail.com';

    const subject = `Contato de ${nome}`;
    const body = `Olá! Meu nome é ${nome}%0AE-mail: ${email}%0A%0AMensagem:%0A${mensagem}`;

    const mailtoLink = `mailto:${seuEmail}?subject=${subject}&body=${body}`;

    window.open(mailtoLink);

    event.target.reset();

}

document.getElementById('whatsapp-telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (value.length > 0) {
        value = value.replace(/^(\d*)/, '($1');
    }

    e.target.value = value;
});