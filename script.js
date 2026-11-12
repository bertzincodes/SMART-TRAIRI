// ====== CONFIGURAÇÃO ======
// Coloque o número da escola com DDI + DDD, só dígitos. Ex.: '5588999999999'
const WHATSAPP_NUMBER = '';
const WHATSAPP_MESSAGE = 'Olá! Vim pelo site e gostaria de informações sobre as turmas da Smart Trairi.';
// ==========================

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

function setMenu(open) {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  toggle.textContent = open ? '✕' : '☰';
}

toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

if (WHATSAPP_NUMBER) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  document.querySelectorAll('[data-whatsapp]').forEach(a => {
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    if (a.classList.contains('whatsapp-float')) {
      a.setAttribute('aria-label', 'Falar no WhatsApp');
      a.textContent = '💬';
    }
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
