/* ========================================
    DROPZONE - script.js
    Premium Gaming E-Pin Store
    ======================================== */
// ============ CRATE DATA ============
const crateData = {
  // MLBB Crates
  'mlbb-bronz': {
     title: 'Bronz Elmas Kasası',
     game: 'Mobile Legends: Bang Bang',
     currency: 'Elmas',
     price: '150 TL',
     image: 'images/mlbb-bronz.png',
     description: 'Şafak Vadisi\'nde fark yaratmaya hazır mısın? Kostümlerini (Skin) garantile, Şanslı Çark\'ı çevir ve efsanevi ödüllere ulaş!\n\nDropZone Bronz MLBB Kasası ile boş çıkmak YOK! Satın aldığın an sistem rastgele bir şekilde ödülünü belirler ve Elmas e-pin kodun saniyeler içinde e-posta adresine ve ekrandaki sipariş sayfasına yansır.',
     drops: [
        { rarity: 'GARANTİ', class: 'garanti', emoji: '🟢', percent: 70, amount: 88, desc: 'Paran asla boşa gitmez, en kötü ihtimalle bunu alırsın!' },
        { rarity: 'NADİR', class: 'nadir', emoji: '🔵', percent: 20, amount: 265, desc: 'Güzel bir kostüm için harika bir başlangıç!' },
        { rarity: 'DESTANSI', class: 'destansi', emoji: '🟣', percent: 9, amount: 582, desc: 'Epic kostüm seni bekliyor!' },
        { rarity: 'EFSANEVİ', class: 'efsanevi', emoji: '🔴', percent: 0.9, amount: 1262, desc: 'Lightborn veya Collector kostüm yolunda büyük adım!' },
        { rarity: 'MİSTİK', class: 'mistik', emoji: '🟡', percent: 0.1, amount: 2645, desc: 'Şafak Vadisi\'nin hakimi sensin!' }
     ],
     howItWorks: [
        'Kasayı sepete ekle ve güvenli bir şekilde satın al.',
        'Ödeme tamamlandığında şans algoritması devreye girer.',
        'Kazandığın MLBB Elmas kodu ve yükleme talimatları anında karşına çıkar.',
        'Kodu MLBB resmi yükleme sitesinden veya oyun içinden hesabına tanımla ve savaş alanına hükmet!'
     ]
  },
  'mlbb-gumus': {
     title: 'Gümüş Elmas Kasası',
     game: 'Mobile Legends: Bang Bang',
     currency: 'Elmas',
     price: '300 TL',
     image: 'images/mlbb-gumus.jpg',
     description: 'Şafak Vadisi\'nde fark yaratmaya hazır mısın? Kostümlerini (Skin) garantile, Şanslı Çark\'ı çevir ve efsanevi ödüllere ulaş!\n\nDropZone Gümüş MLBB Kasası ile boş çıkmak YOK! Satın aldığın an sistem rastgele bir şekilde ödülünü belirler ve Elmas e-pin kodun saniyeler içinde e-posta adresine ve ekrandaki sipariş sayfasına yansır.',
     drops: [
        { rarity: 'GARANTİ', class: 'garanti', emoji: '🟢', percent: 64, amount: 88, desc: 'Paran asla boşa gitmez, en kötü ihtimalle bunu alırsın!' },
        { rarity: 'NADİR', class: 'nadir', emoji: '🔵', percent: 23, amount: 265, desc: 'Güzel bir kostüm için harika bir başlangıç!' },
        { rarity: 'DESTANSI', class: 'destansi', emoji: '🟣', percent: 10, amount: 582, desc: 'Epic kostüm seni bekliyor!' },
        { rarity: 'EFSANEVİ', class: 'efsanevi', emoji: '🔴', percent: 2.1, amount: 1262, desc: 'Lightborn veya Collector kostüm yolunda büyük adım!' },
        { rarity: 'MİSTİK', class: 'mistik', emoji: '🟡', percent: 0.9, amount: 2645, desc: 'Şafak Vadisi\'nin hakimi sensin!' }
     ],
     howItWorks: [
        'Kasayı sepete ekle ve güvenli bir şekilde satın al.',
        'Ödeme tamamlandığında şans algoritması devreye girer.',
        'Kazandığın MLBB Elmas kodu ve yükleme talimatları anında karşına çıkar.',
        'Kodu MLBB resmi yükleme sitesinden veya oyun içinden hesabına tanımla ve savaş alanına hükmet!'
     ]
  },
  'mlbb-altin': {
     title: 'Altın Elmas Kasası',
     game: 'Mobile Legends: Bang Bang',
     currency: 'Elmas',
     price: '450 TL',
     image: 'images/mlbb-altin.jpg',
     description: 'Şafak Vadisi\'nde fark yaratmaya hazır mısın? Kostümlerini (Skin) garantile, Şanslı Çark\'ı çevir ve efsanevi ödüllere ulaş!\n\nDropZone Altın MLBB Kasası ile boş çıkmak YOK! Satın aldığın an sistem rastgele bir şekilde ödülünü belirler ve Elmas e-pin kodun saniyeler içinde e-posta adresine ve ekrandaki sipariş sayfasına yansır.',
     drops: [
        { rarity: 'GARANTİ', class: 'garanti', emoji: '🟢', percent: 45, amount: 88, desc: 'Paran asla boşa gitmez, en kötü ihtimalle bunu alırsın!' },
        { rarity: 'NADİR', class: 'nadir', emoji: '🔵', percent: 34, amount: 265, desc: 'Güzel bir kostüm için harika bir başlangıç!' },
        { rarity: 'DESTANSI', class: 'destansi', emoji: '🟣', percent: 15, amount: 582, desc: 'Epic kostüm seni bekliyor!' },
        { rarity: 'EFSANEVİ', class: 'efsanevi', emoji: '🔴', percent: 4.5, amount: 1262, desc: 'Lightborn veya Collector kostüm yolunda büyük adım!' },
        { rarity: 'MİSTİK', class: 'mistik', emoji: '🟡', percent: 1.5, amount: 2645, desc: 'Şafak Vadisi\'nin hakimi sensin!' }
     ],
     howItWorks: [
        'Kasayı sepete ekle ve güvenli bir şekilde satın al.',
        'Ödeme tamamlandığında şans algoritması devreye girer.',
        'Kazandığın MLBB Elmas kodu ve yükleme talimatları anında karşına çıkar.',
        'Kodu MLBB resmi yükleme sitesinden veya oyun içinden hesabına tanımla ve savaş alanına hükmet!'
     ]
  },
  // PUBG Crates
  'pubg-bronz': {
     title: 'Bronz UC Kasası',
     game: 'PUBG Mobile',
     currency: 'UC',
     price: '200 TL',
     image: 'images/pubg-bronz.jpg',
     description: 'Savaş alanında hayatta kalan son kişi sen olmaya hazır mısın? Geliştirilebilir silahlarını (Buz Diyarı!) fulle, Royale Pass\'i aç ve destansı setlere ulaş!\n\nDropZone Bronz PUBG Mobile Kasası ile boş çıkmak YOK! Satın aldığın an sistem rastgele bir şekilde ödülünü belirler ve UC e-pin kodun saniyeler içinde e-posta adresine ve ekrandaki sipariş sayfasına yansır.',
     drops: [
        { rarity: 'GARANTİ', class: 'garanti', emoji: '🟢', percent: 70, amount: 60, desc: 'Paran asla boşa gitmez, en kötü ihtimalle bunu alırsın!' },
        { rarity: 'NADİR', class: 'nadir', emoji: '🔵', percent: 20, amount: 325, desc: 'Premium sandıklar ve şans çarkları için harika bir başlangıç!' },
        { rarity: 'DESTANSI', class: 'destansi', emoji: '🟣', percent: 9, amount: 660, desc: 'Royale Pass anında senin, sezonun tadını çıkar!' },
        { rarity: 'EFSANEVİ', class: 'efsanevi', emoji: '🔴', percent: 0.9, amount: 1800, desc: 'Geliştirilebilir silah kaplamaları ve özel setler yolunda büyük adım!' },
        { rarity: 'MİSTİK', class: 'mistik', emoji: '🟡', percent: 0.1, amount: 3850, desc: 'X-Suit\'lerin ve tüm haritanın tek hakimi sensin!' }
     ],
     howItWorks: [
        'Kasayı sepete ekle ve güvenli bir şekilde satın al.',
        'Ödeme tamamlandığında şans algoritması devreye girer.',
        'Kazandığın PUBG Mobile UC kodu ve yükleme talimatları anında karşına çıkar.',
        'Kodu PUBG Mobile resmi yükleme sitesinden veya oyun içinden hesabına tanımla ve savaş alanına hükmet!'
     ],
     automation: 'Kodlarınız Size Nasıl Ulaşıyor? Otomasyon Sistemimiz Nasıl Çalışır?\n\nSiparişlerinizin size saniyeler içinde, %100 güvenli bir şekilde ulaşması için insan faktörünü ortadan kaldıran özel bir otomasyon kullanıyoruz.\n\n• Güvenli Depolama: E-Pin kodlarınız, dışarıdan erişime kapalı yüksek güvenlikli bulut sunucularımızda saklanır.\n• Anında İşlem: Sitemizden satın alım yaptığınız an, sistemimiz ödemeyi algılar ve otomasyonu tetikler.\n• Hatasız Kod Ataması: Veritabanındaki "Kullanılmadı" statüsündeki ilk yeni kod size özel ayrılır.\n• Saniyeler İçinde Teslimat: Size ayrılan benzersiz kodunuz, hiçbir insan müdahalesi beklemeden anında E-Posta adresinize iletilir.\n\nÖzetle; 7/24 çalışan hatasız algoritmamız sayesinde ödemeniz onaylandığı an kodunuz elinizdedir.'
  },
  'pubg-gumus': {
     title: 'Gümüş UC Kasası',
     game: 'PUBG Mobile',
     currency: 'UC',
     price: '300 TL',
     image: 'images/pubg-gumus.png',
     description: 'Savaş alanında hayatta kalan son kişi sen olmaya hazır mısın? Geliştirilebilir silahlarını (Buz Diyarı!) fulle, Royale Pass\'i aç ve destansı setlere ulaş!\n\nDropZone Gümüş PUBG Mobile Kasası ile boş çıkmak YOK! Satın aldığın an sistem rastgele bir şekilde ödülünü belirler ve UC e-pin kodun saniyeler içinde e-posta adresine ve ekrandaki sipariş sayfasına yansır.',
     drops: [
        { rarity: 'GARANTİ', class: 'garanti', emoji: '🟢', percent: 64, amount: 60, desc: 'Paran asla boşa gitmez, en kötü ihtimalle bunu alırsın!' },
        { rarity: 'NADİR', class: 'nadir', emoji: '🔵', percent: 23, amount: 325, desc: 'Premium sandıklar ve şans çarkları için harika bir başlangıç!' },
        { rarity: 'DESTANSI', class: 'destansi', emoji: '🟣', percent: 10, amount: 660, desc: 'Royale Pass anında senin, sezonun tadını çıkar!' },
        { rarity: 'EFSANEVİ', class: 'efsanevi', emoji: '🔴', percent: 2.1, amount: 1800, desc: 'Geliştirilebilir silah kaplamaları ve özel setler yolunda büyük adım!' },
        { rarity: 'MİSTİK', class: 'mistik', emoji: '🟡', percent: 0.9, amount: 3850, desc: 'X-Suit\'lerin ve tüm haritanın tek hakimi sensin!' }
     ],
     howItWorks: [
        'Kasayı sepete ekle ve güvenli bir şekilde satın al.',
        'Ödeme tamamlandığında şans algoritması devreye girer.',
        'Kazandığın PUBG Mobile UC kodu ve yükleme talimatları anında karşına çıkar.',
        'Kodu PUBG Mobile resmi yükleme sitesinden veya oyun içinden hesabına tanımla ve savaş alanına hükmet!'
     ],
     automation: 'Kodlarınız Size Nasıl Ulaşıyor? Otomasyon Sistemimiz Nasıl Çalışır?\n\nSiparişlerinizin size saniyeler içinde, %100 güvenli bir şekilde ulaşması için insan faktörünü ortadan kaldıran özel bir otomasyon kullanıyoruz.\n\n• Güvenli Depolama: E-Pin kodlarınız, dışarıdan erişime kapalı yüksek güvenlikli bulut sunucularımızda saklanır.\n• Anında İşlem: Sitemizden satın alım yaptığınız an, sistemimiz ödemeyi algılar ve otomasyonu tetikler.\n• Hatasız Kod Ataması: Veritabanındaki "Kullanılmadı" statüsündeki ilk yeni kod size özel ayrılır.\n• Saniyeler İçinde Teslimat: Size ayrılan benzersiz kodunuz, hiçbir insan müdahalesi beklemeden anında E-Posta adresinize iletilir.\n\nÖzetle; 7/24 çalışan hatasız algoritmamız sayesinde ödemeniz onaylandığı an kodunuz elinizdedir.'
  },
  'pubg-altin': {
     title: 'Altın UC Kasası',
     game: 'PUBG Mobile',
     currency: 'UC',
     price: '400 TL',
     image: 'images/pubg-altin.jpg',
     description: 'Savaş alanında hayatta kalan son kişi sen olmaya hazır mısın? Geliştirilebilir silahlarını (Buz Diyarı!) fulle, Royale Pass\'i aç ve destansı setlere ulaş!\n\nDropZone Altın PUBG Mobile Kasası ile boş çıkmak YOK! Satın aldığın an sistem rastgele bir şekilde ödülünü belirler ve UC e-pin kodun saniyeler içinde e-posta adresine ve ekrandaki sipariş sayfasına yansır.',
     drops: [
        { rarity: 'GARANTİ', class: 'garanti', emoji: '🟢', percent: 45, amount: 60, desc: 'Paran asla boşa gitmez, en kötü ihtimalle bunu alırsın!' },
        { rarity: 'NADİR', class: 'nadir', emoji: '🔵', percent: 34, amount: 325, desc: 'Premium sandıklar ve şans çarkları için harika bir başlangıç!' },
        { rarity: 'DESTANSI', class: 'destansi', emoji: '🟣', percent: 15, amount: 660, desc: 'Royale Pass anında senin, sezonun tadını çıkar!' },
        { rarity: 'EFSANEVİ', class: 'efsanevi', emoji: '🔴', percent: 4.5, amount: 1800, desc: 'Geliştirilebilir silah kaplamaları ve özel setler yolunda büyük adım!' },
        { rarity: 'MİSTİK', class: 'mistik', emoji: '🟡', percent: 1.5, amount: 3850, desc: 'X-Suit\'lerin ve tüm haritanın tek hakimi sensin!' }
     ],
     howItWorks: [
        'Kasayı sepete ekle ve güvenli bir şekilde satın al.',
        'Ödeme tamamlandığında şans algoritması devreye girer.',
        'Kazandığın PUBG Mobile UC kodu ve yükleme talimatları anında karşına çıkar.',
        'Kodu PUBG Mobile resmi yükleme sitesinden veya oyun içinden hesabına tanımla ve savaş alanına hükmet!'
     ],
     automation: 'Kodlarınız Size Nasıl Ulaşıyor? Otomasyon Sistemimiz Nasıl Çalışır?\n\nSiparişlerinizin size saniyeler içinde, %100 güvenli bir şekilde ulaşması için insan faktörünü ortadan kaldıran özel bir otomasyon kullanıyoruz.\n\n• Güvenli Depolama: E-Pin kodlarınız, dışarıdan erişime kapalı yüksek güvenlikli bulut sunucularımızda saklanır.\n• Anında İşlem: Sitemizden satın alım yaptığınız an, sistemimiz ödemeyi algılar ve otomasyonu tetikler.\n• Hatasız Kod Ataması: Veritabanındaki "Kullanılmadı" statüsündeki ilk yeni kod size özel ayrılır.\n• Saniyeler İçinde Teslimat: Size ayrılan benzersiz kodunuz, hiçbir insan müdahalesi beklemeden anında E-Posta adresinize iletilir.\n\nÖzetle; 7/24 çalışan hatasız algoritmamız sayesinde ödemeniz onaylandığı an kodunuz elinizdedir.'
  }
};

// ============ STATE ============
let currentCrate = null;
let isSpinning = false;

// ============ NAVBAR ============
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
     navbar.classList.add('scrolled');
  } else {
     navbar.classList.remove('scrolled');
  }
});

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
     mobileMenu.classList.remove('active');
  });
});

// ============ GAME TABS ============
document.querySelectorAll('.game-tab').forEach(tab => {
  tab.addEventListener('click', () => {
     document.querySelectorAll('.game-tab').forEach(t => t.classList.remove('active'));
     document.querySelectorAll('.crate-grid').forEach(g => g.classList.remove('active'));
     tab.classList.add('active');
     const game = tab.dataset.game;
     document.getElementById(`grid-${game}`).classList.add('active');
  });
});

// ============ HERO PARTICLES ============
function createParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  const colors = ['#00f0ff', '#a855f7', '#ec4899', '#22c55e', '#f59e0b'];
  for (let i = 0; i < 40; i++) {
     const particle = document.createElement('div');
     particle.classList.add('particle');
     particle.style.left = Math.random() * 100 + '%';
     particle.style.animationDelay = Math.random() * 8 + 's';
     particle.style.animationDuration = (6 + Math.random() * 6) + 's';
     particle.style.background = colors[Math.floor(Math.random() * colors.length)];
     particle.style.width = (2 + Math.random() * 4) + 'px';
     particle.style.height = particle.style.width;
     container.appendChild(particle);
  }
}

createParticles();

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
     if (entry.isIntersecting) {
        entry.target.classList.add('visible');
     }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// ============ RNG ALGORITHM ============
function rollDrop(drops) {
  const random = Math.random() * 100;
  let cumulative = 0;
  for (const drop of drops) {
     cumulative += drop.percent;
     if (random <= cumulative) {
        return drop;
     }
  }
  return drops[0];
}

// ============ CRATE OPENING MODAL ============
function openCrateModal(crateId) {
  currentCrate = crateData[crateId];
  if (!currentCrate) return;

  const modal = document.getElementById('crateModal');
  const img = document.getElementById('modalCrateImg');
  const title = document.getElementById('modalTitle');
  const subtitle = document.getElementById('modalSubtitle');
  const slotMachine = document.getElementById('slotMachine');
  const resultDisplay = document.getElementById('resultDisplay');
  const btnSpin = document.getElementById('btnSpin');

  img.src = currentCrate.image;
  title.textContent = currentCrate.title;
  subtitle.textContent = currentCrate.game + ' • ' + currentCrate.price;

  slotMachine.style.display = 'flex';
  resultDisplay.classList.remove('active');
  btnSpin.disabled = false;
  btnSpin.innerHTML = '<i class="fas fa-dice"></i>&nbsp; KASAYI AÇ!';
  isSpinning = false;

  buildSlotReel();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCrateModal() {
  const modal = document.getElementById('crateModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  currentCrate = null;
  isSpinning = false;
}

function buildSlotReel() {
  const reel = document.getElementById('slotReel');
  reel.innerHTML = '';
  reel.style.transition = 'none';
  reel.style.transform = 'translateY(0)';

  if (!currentCrate) return;

  const totalItems = 60;
  for (let i = 0; i < totalItems; i++) {
     const drop = currentCrate.drops[i % currentCrate.drops.length];
     const item = document.createElement('div');
     item.classList.add('slot-item');
     item.innerHTML = `
        <span class="slot-emoji">${drop.emoji}</span>
        <span>${drop.amount} ${currentCrate.currency}</span>
     `;

     const colors = {
        garanti: '#22c55e',
        nadir: '#3b82f6',
        destansi: '#a855f7',
        efsanevi: '#ef4444',
        mistik: '#f59e0b'
     };
     item.style.color = colors[drop.class] || '#fff';
     reel.appendChild(item);
  }
}

// ============ SPIN / CRATE OPEN ============
function spinCrate() {
  if (isSpinning || !currentCrate) return;
  isSpinning = true;

  const btnSpin = document.getElementById('btnSpin');
  btnSpin.disabled = true;
  btnSpin.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div>';

  const result = rollDrop(currentCrate.drops);
  const winIndex = currentCrate.drops.findIndex(d => d.class === result.class);
  const itemHeight = 100;
  const totalRotations = 8;
  const totalDrops = currentCrate.drops.length;
  const targetPosition = (totalRotations * totalDrops + winIndex) * itemHeight;

  const reel = document.getElementById('slotReel');
  reel.innerHTML = '';
  reel.style.transition = 'none';
  reel.style.transform = 'translateY(0)';

  const totalItems = totalRotations * totalDrops + totalDrops + 5;
  for (let i = 0; i < totalItems; i++) {
     const dropIndex = i % totalDrops;
     const drop = currentCrate.drops[dropIndex];
     const item = document.createElement('div');
     item.classList.add('slot-item');
     item.innerHTML = `
        <span class="slot-emoji">${drop.emoji}</span>
        <span>${drop.amount} ${currentCrate.currency}</span>
     `;

     const colors = {
        garanti: '#22c55e',
        nadir: '#3b82f6',
        destansi: '#a855f7',
        efsanevi: '#ef4444',
        mistik: '#f59e0b'
     };
     item.style.color = colors[drop.class] || '#fff';
     reel.appendChild(item);
  }

  void reel.offsetHeight;

  requestAnimationFrame(() => {
     reel.style.transition = 'transform 4s cubic-bezier(0.25, 0.1, 0.15, 1)';
     reel.style.transform = `translateY(-${targetPosition}px)`;
  });

  setTimeout(() => {
     showResult(result);
  }, 4200);
}

function showResult(result) {
  const slotMachine = document.getElementById('slotMachine');
  const resultDisplay = document.getElementById('resultDisplay');
  const resultRarity = document.getElementById('resultRarity');
  const resultAmount = document.getElementById('resultAmount');
  const resultDesc = document.getElementById('resultDesc');

  slotMachine.style.display = 'none';
  resultRarity.textContent = `[${result.rarity}]`;
  resultRarity.className = `result-rarity ${result.class}`;
  resultAmount.textContent = `${result.amount} ${currentCrate.currency}`;
  resultDesc.textContent = result.desc;
  resultDisplay.classList.add('active');

  if (result.class !== 'garanti') {
     triggerConfetti(result.class);
  }

  isSpinning = false;
}

// ============ CONFETTI ============
function triggerConfetti(rarityClass) {
  const container = document.getElementById('confettiContainer');
  container.innerHTML = '';

  const colorSets = {
     nadir: ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb'],
     destansi: ['#a855f7', '#c084fc', '#d8b4fe', '#7c3aed'],
     efsanevi: ['#ef4444', '#f87171', '#fca5a5', '#dc2626'],
     mistik: ['#f59e0b', '#fbbf24', '#fcd34d', '#d97706', '#ff6b6b', '#a855f7']
  };

  const colors = colorSets[rarityClass] || colorSets.nadir;
  const count = rarityClass === 'mistik' ? 100 : rarityClass === 'efsanevi' ? 70 : 40;

  for (let i = 0; i < count; i++) {
     const piece = document.createElement('div');
     piece.classList.add('confetti-piece');
     piece.style.left = Math.random() * 100 + '%';
     piece.style.animationDelay = Math.random() * 2 + 's';
     piece.style.animationDuration = (2 + Math.random() * 2) + 's';
     piece.style.background = colors[Math.floor(Math.random() * colors.length)];
     piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
     piece.style.width = (6 + Math.random() * 8) + 'px';
     piece.style.height = piece.style.width;
     container.appendChild(piece);
  }

  setTimeout(() => {
     container.innerHTML = '';
  }, 5000);
}

// ============ DETAIL MODAL ============
function openDetailModal(crateId) {
  const crate = crateData[crateId];
  if (!crate) return;

  const modal = document.getElementById('detailModal');
  const body = document.getElementById('detailModalBody');

  let html = `
     <div class="detail-header">
        <img src="${crate.image}" alt="${crate.title}" />
        <div class="detail-header-info">
          <h2>${crate.title}</h2>
          <p style="color: var(--text-secondary); font-family: 'Rajdhani', sans-serif; font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px;">${crate.game}</p>
          <div class="detail-price">${crate.price}</div>
        </div>
     </div>
     <div class="detail-description">
        ${crate.description.replace(/\n/g, '<br>')}
     </div>
     <h4 class="detail-section-title">📦 Kasa İçeriği ve Çıkma Olasılıkları (Drop Rates)</h4>
     <div class="detail-drop-rates">
  `;

  crate.drops.forEach(drop => {
     html += `
        <div class="detail-drop-item ${drop.class}">
          <span class="rarity-badge ${drop.class}">${drop.emoji} ${drop.rarity}</span>
          <div class="drop-info">
             <div class="drop-amount">${drop.amount} ${crate.currency}</div>
             <div class="drop-desc">${drop.desc}</div>
          </div>
          <div class="drop-percent">%${drop.percent}</div>
        </div>
     `;
  });

  html += `</div>`;
  html += `
     <h4 class="detail-section-title">⚡ Nasıl Çalışır?</h4>
     <div class="detail-how-it-works">
        <ol>
  `;

  crate.howItWorks.forEach(step => {
     html += `<li>${step}</li>`;
  });

  html += `
        </ol>
     </div>
  `;

  if (crate.automation) {
     html += `
        <h4 class="detail-section-title">🤖 Otomasyon Sistemi</h4>
        <div class="detail-description">
          ${crate.automation.replace(/\n/g, '<br>')}
        </div>
     `;
  }

  html += `
     <div class="detail-note">
        ⚠️ <strong>Önemli Not:</strong> Bu ürün tamamen dijital bir e-pin kodudur. Teslimat dijital olarak yapıldığı için ürün fiziksel olarak kargolanmaz ve iadesi yoktur.
     </div>
  `;

  body.innerHTML = html;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  const modal = document.getElementById('detailModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ============ MODAL CLOSE ON OVERLAY CLICK ============
document.getElementById('crateModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
     closeCrateModal();
  }
});

document.getElementById('detailModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
     closeDetailModal();
  }
});

// ============ KEYBOARD SHORTCUTS ============
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
     closeCrateModal();
     closeDetailModal();
  }
});

// ============ SMOOTH SCROLL FOR NAV LINKS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
     e.preventDefault();
     const target = document.querySelector(this.getAttribute('href'));
     if (target) {
        const navHeight = 72;
        const targetPos = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
     }
  });
});

// ============ INIT ============
console.log('🎮 DropZone - Yeni Nesil Ganimet Dünyası yüklendi!');