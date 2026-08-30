/* ─── CONFIG ────────────────────────────────────────────────────────────
   CONTATO  → troque por https://wa.me/55DDDNUMERO quando tiver WhatsApp.
   PREÇOS   → conferir com o cliente. Ver PRECOS-CONFERIR.md.            */

const CONTATO = 'https://ig.me/m/baizer.store';

const MENU = [['iPhone','iphone.html'],['Mac','mac.html'],['iPad','ipad.html'],
  ['Watch','apple-watch.html'],['AirPods','airpods.html'],['Android','android.html'],
  ['Garantia','garantia.html']];

/* hero da home: 18 renders oficiais, um por cor */
const MODELOS = [
  {id:'iphone-17-pro-max', nome:'iPhone 17 Pro Max', preco:'R$ 7.990',
   cores:[['Laranja Cósmico','#f88a46'],['Azul Profundo','#3f4658'],['Prata','#e6e6e4']]},
  {id:'iphone-17-pro', nome:'iPhone 17 Pro', preco:'R$ 7.590',
   cores:[['Laranja Cósmico','#f88a46'],['Azul Profundo','#3f4658'],['Prata','#e6e6e4']]},
  {id:'iphone-17-air', nome:'iPhone 17 Air', preco:'R$ 5.990',
   cores:[['Azul Céu','#cddfeb'],['Dourado Claro','#e8ddc4'],['Branco Nuvem','#f3f3f3'],['Preto Espacial','#363636']]},
  {id:'iphone-17', nome:'iPhone 17', preco:'R$ 5.590',
   cores:[['Lavanda','#e5d9e8'],['Névoa','#a8b9cf'],['Sálvia','#b5c098'],['Branco','#eeeeec'],['Preto','#2f3031']]},
  {id:'iphone-17e', nome:'iPhone 17e', preco:'R$ 4.590',
   cores:[['Rosa Pálido','#f7dcda'],['Branco','#f5f5f2'],['Preto','#3a3a3a']]}
];

/* catálogos — [nome, especificação, à vista, parcelado, etiqueta] */
const CATALOGO = {
  iphoneLacrado: [
    ['iPhone 17 Pro Max','6,9 polegadas','R$ 7.990','12x R$ 757,48','Lacrado'],
    ['iPhone 17 Pro','6,3 polegadas','R$ 7.590','12x R$ 719,56','Lacrado'],
    ['iPhone 17 Air','6,5 polegadas','R$ 5.990','12x R$ 567,88','Lacrado'],
    ['iPhone 17','6,3 polegadas','R$ 5.590','12x R$ 529,95','Lacrado'],
    ['iPhone 17e','6,1 polegadas','R$ 4.590','12x R$ 435,15','Lacrado'],
    ['iPhone 16 Pro Max','6,9 polegadas','R$ 6.990','12x R$ 662,68','Lacrado · CPO'],
    ['iPhone 16 Pro','6,3 polegadas','R$ 5.690','12x R$ 539,43','Lacrado · CPO'],
    ['iPhone 16 Plus','6,7 polegadas','R$ 5.290','12x R$ 502,51','Lacrado'],
    ['iPhone 16','6,1 polegadas','R$ 4.890','12x R$ 463,59','Lacrado'],
    ['iPhone 15 Pro Max','6,7 polegadas','R$ 5.790','12x R$ 548,91','Lacrado · CPO'],
    ['iPhone 15 Pro','6,1 polegadas','R$ 4.590','12x R$ 435,15','Lacrado · CPO'],
    ['iPhone 15 Plus','6,7 polegadas','','','Lacrado'],
    ['iPhone 15','6,1 polegadas','R$ 4.290','12x R$ 406,71','Lacrado'],
    ['iPhone 14 Pro Max','6,7 polegadas','R$ 4.890','12x R$ 463,59','Lacrado · CPO'],
    ['iPhone 14 Pro','6,1 polegadas','R$ 3.990','12x R$ 378,27','Lacrado · CPO'],
    ['iPhone 14','6,1 polegadas','R$ 3.790','','Lacrado'],
    ['iPhone 13 Pro Max','6,7 polegadas','R$ 4.390','12x R$ 416,19','Lacrado · CPO'],
    ['iPhone 13','6,1 polegadas','R$ 3.290','12x R$ 311,90','Lacrado · CPO']
  ],
  iphoneOpenbox: [
    ['iPhone 17 Pro','6,3 polegadas','R$ 6.790','12x R$ 643,72','Openbox'],
    ['iPhone 17 Air','6,5 polegadas','R$ 5.390','12x R$ 510,99','Openbox'],
    ['iPhone 17','6,3 polegadas','R$ 4.890','12x R$ 463,59','Openbox'],
    ['iPhone 16 Pro Max','6,9 polegadas','R$ 5.890','12x R$ 558,40','Openbox'],
    ['iPhone 16 Pro','6,3 polegadas','R$ 4.890','12x R$ 463,59','Openbox'],
    ['iPhone 16','6,1 polegadas','R$ 3.990','12x R$ 378,27','Openbox'],
    ['iPhone 15 Pro Max','6,7 polegadas','R$ 4.590','12x R$ 435,15','Openbox'],
    ['iPhone 15 Pro','6,1 polegadas','R$ 3.990','12x R$ 378,27','Openbox'],
    ['iPhone 15 Plus','6,7 polegadas','R$ 3.390','12x R$ 321,38','Openbox'],
    ['iPhone 15','6,1 polegadas','R$ 3.090','12x R$ 292,94','Openbox'],
    ['iPhone 14 Pro Max','6,7 polegadas','R$ 3.890','12x R$ 368,79','Openbox'],
    ['iPhone 14 Pro','6,1 polegadas','R$ 3.390','12x R$ 321,38','Openbox'],
    ['iPhone 14 Plus','6,7 polegadas','R$ 2.590','12x R$ 245,54','Openbox'],
    ['iPhone 14','6,1 polegadas','R$ 2.390','12x R$ 226,58','Openbox'],
    ['iPhone 13 Pro Max','6,7 polegadas','R$ 3.290','12x R$ 311,90','Openbox'],
    ['iPhone 13 Pro','6,1 polegadas','R$ 2.890','12x R$ 273,98','Openbox'],
    ['iPhone 13','6,1 polegadas','R$ 2.299','12x R$ 216,81','Openbox']
  ],
  mac: [
    ['MacBook Pro M2','13,3 polegadas · 8GB + 256GB SSD · A2338','R$ 7.999','12x R$ 754,14','Lacrado'],
    ['MacBook Air M3','13,6 polegadas · 24GB + 512GB SSD · A3113','R$ 8.499','12x R$ 801,28','Lacrado'],
    ['MacBook Air M2','13,3 polegadas · 16GB + 256GB SSD · A2681','R$ 6.499','12x R$ 612,74','Lacrado'],
    ['MacBook Air M1','13,3 polegadas · 8GB + 128GB SSD · A2337','R$ 4.499','12x R$ 424,20','Lacrado'],
    ['MacBook Air M1','13,3 polegadas · 16GB + 1TB SSD · A2337','R$ 5.999','12x R$ 565,61','Lacrado'],
    ['iMac M4','Retina 24 polegadas','R$ 15.499','12x R$ 1.461,16','Lacrado'],
    ['Mac Mini M4','16GB RAM + 256GB SSD','R$ 5.749','12x R$ 545,12','Lacrado'],
    ['MacBook Neo','Retina 13 polegadas','','','Novo'],
    ['MacBook Pro M5 Max','Retina 16,2 polegadas','','','Lacrado'],
    ['MacBook Pro M5 Pro','Retina 14,2 polegadas','','','Lacrado'],
    ['MacBook Pro M5','Retina 14,2 polegadas','','','Lacrado'],
    ['MacBook Air M5','Retina 13,6 polegadas','','','Lacrado'],
    ['MacBook Air M4','Retina 13,6 polegadas','','','Lacrado'],
    ['MacBook Pro M4','Retina 14,2 polegadas','','','Lacrado'],
    ['Studio Display','5K · 27 polegadas · Standard Glass','','','Lacrado']
  ],
  ipad: [
    ['iPad Air Pro M5','Liquid Retina 13 polegadas · 256GB','R$ 8.390','12x R$ 795,41','Lacrado'],
    ['iPad Air M4','Liquid Retina 11 polegadas · 128GB','R$ 4.290','12x R$ 406,71','Lacrado'],
    ['iPad Air M3','128GB · também em 256GB por R$ 4.890','R$ 3.890','12x R$ 368,79','Lacrado'],
    ['iPad 11 Wi-Fi (2025)','A16 Bionic · Liquid Retina 11 polegadas · 128GB','R$ 3.290','12x R$ 311,90','Lacrado'],
    ['iPad Mini 6ª geração','A15 Bionic · Liquid Retina 8,3 polegadas · 64GB','R$ 2.499','12x R$ 235,67','Lacrado'],
    ['Apple Pencil Pro','Compatível com iPad Air e Pro','R$ 1.190','12x R$ 112,81','Lacrado'],
    ['Apple Pencil USB-C','Compatível com a linha iPad','R$ 990','12x R$ 93,85','Lacrado']
  ],
  watch: [
    ['Apple Watch Ultra 3','Caixa de 49mm · GPS de dupla frequência','','','Lacrado'],
    ['Apple Watch Series 10','Caixa de 42mm e 46mm','R$ 2.590','12x R$ 245,54','Lacrado'],
    ['Apple Watch SE 2','Caixa de 40mm e 44mm','R$ 1.799','12x R$ 169,68','Lacrado']
  ],
  airpods: [
    ['AirPods Pro 3','Cancelamento de ruído · entrada USB-C','R$ 1.990','12x R$ 189,60','Lacrado'],
    ['AirPods 4','Com cancelamento de ruído','R$ 1.390','12x R$ 131,77','Lacrado'],
    ['AirPods 4','Sem cancelamento de ruído','R$ 990','12x R$ 93,85','Lacrado'],
    ['AirPods Max','Over-ear · cancelamento de ruído','R$ 3.990','12x R$ 378,27','Lacrado'],
    ['AirPods 3','Áudio espacial','R$ 1.299,99','','Lacrado'],
    ['AirPods 2','Linha padrão','R$ 999,99','','Lacrado']
  ],
  android: [
    ['Poco F7 5G','6,67 polegadas · 12GB + 512GB','R$ 3.190','12x R$ 302,42','Lacrado'],
    ['Redmi Note 15 Pro+ 5G','6,83 polegadas','R$ 2.590','12x R$ 245,54','Lacrado'],
    ['Poco M8 Pro 5G','6,79 polegadas','R$ 2.190','12x R$ 207,62','Lacrado'],
    ['Redmi Note 15 4G','6,77 polegadas','R$ 1.590','12x R$ 150,73','Lacrado'],
    ['Redmi 15','6,9 polegadas · 8GB + 256GB','R$ 1.490','12x R$ 141,25','Lacrado'],
    ['Realme Note 70','4GB + 128GB','R$ 989,99','12x R$ 93,85','Lacrado'],
    ['Redmi A5','6,88 polegadas · 3GB + 64GB','R$ 889,99','12x R$ 84,37','Lacrado'],
    ['Poco C73','6,71 polegadas','R$ 790','12x R$ 74,89','Lacrado']
  ]
};

/* ─── comportamento ─────────────────────────────────────────────────── */
const $ = s => document.querySelector(s);
const pagina = location.pathname.split('/').pop() || 'index.html';

/* cabeçalho e rodapé iguais em todas as páginas */
document.body.insertAdjacentHTML('afterbegin', `
<header id="topo">
  <div class="wrap">
    <a class="logo" href="index.html">Baizer<span>Store</span></a>
    <nav>${MENU.map(([t, u]) =>
      `<a href="${u}"${u === pagina ? ' aria-current="page"' : ''}>${t}</a>`).join('')}</nav>
    <a class="navcta" href="${CONTATO}" target="_blank" rel="noopener">Falar agora</a>
  </div>
</header>`);

document.body.insertAdjacentHTML('beforeend', `
<section class="final">
  <div class="wrap sobe">
    <h2>Fale com um especialista.</h2>
    <p class="lead center" style="margin:18px auto 32px">Responde rápido, tira dúvida de modelo e confirma preço e disponibilidade na hora.</p>
    <div class="actions">
      <a class="btn btn-p" href="${CONTATO}" target="_blank" rel="noopener">Chamar no Direct</a>
      <a class="btn btn-s" href="https://www.instagram.com/baizer.store/" target="_blank" rel="noopener">Ver o Instagram</a>
    </div>
  </div>
</section>
<footer>
  <div class="wrap frow">
    <p>© ${new Date().getFullYear()} BaizerStore · Produtos Apple</p>
    <nav class="fnav">${MENU.map(([t, u]) => `<a href="${u}">${t}</a>`).join('')}</nav>
    <p><a href="https://www.instagram.com/baizer.store/" target="_blank" rel="noopener">@baizer.store</a></p>
  </div>
  <div class="wrap" style="margin-top:22px">
    <p class="small">Preços e disponibilidade sujeitos a confirmação no atendimento. Simulações de parcela nas bandeiras Visa e Master.</p>
  </div>
</footer>`);

/* cartão de produto */
const cartao = ([nome, spec, vista, parc, tag], garantia) => `
  <a class="card sobe" href="${CONTATO}" target="_blank" rel="noopener">
    <span class="tag">${tag}</span>
    <h3>${nome}</h3><p class="spec">${spec}</p>
    <p class="from">${vista ? 'A partir de' : ''}<span class="val">${vista || 'Consultar'}</span>${
      vista ? (parc ? 'à vista · ou ' + parc : 'à vista') : 'valor sob consulta'}</p>
    ${garantia ? `<p class="warr">${garantia}</p>` : ''}
  </a>`;

function grade(alvo, lista, garantia){
  const el = typeof alvo === 'string' ? $(alvo) : alvo;
  if (el) { el.innerHTML = lista.map(l => cartao(l, garantia)).join(''); observar(el.children); }
}

/* imagem: tenta .webp, cai pra .png, senão marca o espaço */
function foto(el, srcs){
  let i = 0;
  const proxima = () => {
    if (i < srcs.length) el.src = srcs[i++];
    else { el.removeAttribute('src'); el.parentElement.classList.add('empty'); }
  };
  el.onerror = proxima;
  el.onload = () => el.parentElement.classList.remove('empty');
  proxima();
}

/* entrada por scroll */
const olho = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('dentro'); olho.unobserve(e.target); }
}), {rootMargin: '0px 0px -8% 0px', threshold: .08});
const observar = els => [...els].forEach(e => { e.classList.add('sobe'); olho.observe(e); });

addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sobe').forEach(e => olho.observe(e));
  document.querySelectorAll('.slot img:not(#heroImg)').forEach(img => {
    const b = img.getAttribute('src').replace(/\.\w+$/, '');
    img.parentElement.dataset.file = b.split('/').pop() + '.webp';
    foto(img, [b + '.webp', b + '.png']);
  });
  document.querySelectorAll('a[href="#contato"]').forEach(a => {
    a.href = CONTATO; a.target = '_blank'; a.rel = 'noopener';
  });
});

/* cabeçalho ganha borda ao rolar */
const topo = $('#topo');
addEventListener('scroll', () => topo.classList.toggle('rolou', scrollY > 12), {passive: true});

/* ─── hero da home (só roda se a página tiver o palco) ──────────────── */
if ($('#modelTabs')) {
  let mi = 0, ci = 0, auto;
  const device = $('#device'), heroImg = $('#heroImg'), slot = heroImg.parentElement;

  const pintar = () => {
    const m = MODELOS[mi], [nome, hex] = m.cores[ci];
    const cor = nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
    device.classList.add('swap');
    setTimeout(() => {
      const c = 'img/' + m.id + '-' + cor, b = 'img/' + m.id;
      slot.dataset.file = m.id + '-' + cor + '.webp';
      foto(heroImg, [c + '.webp', c + '.png', b + '.webp', b + '.png']);
      heroImg.alt = m.nome + ' ' + nome;
      device.classList.remove('swap');
    }, 260);
    $('#glow').style.setProperty('--glow', hex);
    $('#heroModelo').textContent = m.nome;
    $('#heroPreco').textContent = m.preco;
    $('#colorName').textContent = nome;
    [...$('#modelTabs').children].forEach((b, i) => b.setAttribute('aria-selected', i === mi));
    [...$('#colorDots').children].forEach((b, i) => b.setAttribute('aria-selected', i === ci));
  };

  const dots = () => $('#colorDots').innerHTML = MODELOS[mi].cores
    .map(([n, h], i) => `<button role="tab" title="${n}" data-i="${i}" style="background:${h}"></button>`).join('');

  $('#modelTabs').innerHTML = MODELOS
    .map((m, i) => `<button role="tab" data-i="${i}">${m.nome.replace('iPhone ', '')}</button>`).join('');

  const parar = () => clearInterval(auto);
  $('#modelTabs').onclick = e => { const b = e.target.closest('button'); if (!b) return; mi = +b.dataset.i; ci = 0; dots(); pintar(); parar(); };
  $('#colorDots').onclick = e => { const b = e.target.closest('button'); if (!b) return; ci = +b.dataset.i; pintar(); parar(); };
  auto = setInterval(() => {
    ci = (ci + 1) % MODELOS[mi].cores.length;
    if (!ci) { mi = (mi + 1) % MODELOS.length; dots(); }
    pintar();
  }, 4200);

  dots(); pintar();

  /* parallax leve: o aparelho sobe um pouco mais devagar que a página */
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const palco = $('.stage');
    addEventListener('scroll', () => {
      const y = Math.min(scrollY, 700);
      palco.style.transform = 'translateY(' + (y * .12) + 'px)';
      palco.style.opacity = String(Math.max(0, 1 - y / 620));
    }, {passive: true});
  }
}
