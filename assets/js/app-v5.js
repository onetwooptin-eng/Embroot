(() => {
  'use strict';

  const LANG = document.documentElement.lang || 'en';
  const PRODUCTS = Array.isArray(window.EMBERROOT_PRODUCTS) ? window.EMBERROOT_PRODUCTS : [];
  const CATALOG = Array.isArray(window.EMBERROOT_CATALOG) ? window.EMBERROOT_CATALOG : PRODUCTS;
  const CONFIG = window.EMBERROOT_CONFIG || { email: 'sales@emberrootbiofuels.com', whatsapp: '' };
  const I18N = window.EMBERROOT_I18N || {};
  const COMMON = I18N[LANG] || I18N.en || {};
  const APP_SCRIPT = [...document.scripts].find((script) => /assets\/js\/app-v5\.js(?:\?|$)/.test(script.src));
  const ROOT = APP_SCRIPT
    ? new URL(APP_SCRIPT.src.replace(/assets\/js\/app-v5\.js(?:\?.*)?$/, ''))
    : new URL('./', window.location.href);

  const CART_KEY = 'emberroot_quote_cart_v3';
  const WISH_KEY = 'emberroot_wishlist_v5';
  const COMPARE_KEY = 'emberroot_compare_v5';
  const PROFILE_KEY = 'emberroot_profile';
  const ORDER_KEY = 'emberroot_orders_v5';

  const TEXT = {
    en: {
      menu: 'Menu', close: 'Close', search: 'Search', wishlist: 'Wishlist', compare: 'Compare', cart: 'Cart',
      cartTitle: 'Your cart', emptyCart: 'Your cart is empty.', viewCart: 'View cart', checkout: 'Checkout',
      subtotal: 'Product subtotal', remove: 'Remove', quantity: 'Quantity', added: 'Added to cart',
      continue: 'Continue shopping', orderSize: 'Order size', lots: 'Selected lots', add: 'Add selected quantity to cart',
      saved: 'Saved', removed: 'Removed', quick: 'Quick view', viewProduct: 'View product', allProducts: 'All products',
      noResults: 'No products match your search.', productsShown: 'products shown', previous: 'Previous', next: 'Next',
      clearCart: 'Clear cart', orderSummary: 'Order summary', sendOrder: 'Place order', sending: 'Sending order…',
      sent: 'Your order was sent. Your reference number is shown on the confirmation page.', failed: 'The order could not be sent.',
      required: 'Please complete all required fields.', payment: 'Payment preference', reference: 'Order reference',
      accountSaved: 'Profile saved on this device.', emptyWish: 'Your wishlist is empty.', emptyCompare: 'Choose products to compare.',
      compareProducts: 'Compare products', clear: 'Clear', stock: 'Availability', inStock: 'In stock / quote available',
      preOrder: 'Pre-order', price: 'Price', category: 'Category', rating: 'Rating',
      copy: 'Copy', download: 'Download', print: 'Print', removeItem: 'Remove item', update: 'Update',
      mobileCart: 'Cart', mobileSearch: 'Search', mobileMenu: 'Menu',
      decrease: 'Decrease', increase: 'Increase', product: 'Product', ton: 'Ton', tons: 'Tons', truck: '1 Truck',
    },
    de: {
      menu: 'Menü', close: 'Schließen', search: 'Suche', wishlist: 'Merkliste', compare: 'Vergleichen', cart: 'Warenkorb',
      cartTitle: 'Ihr Warenkorb', emptyCart: 'Ihr Warenkorb ist leer.', viewCart: 'Warenkorb ansehen', checkout: 'Zur Kasse',
      subtotal: 'Produkt-Zwischensumme', remove: 'Entfernen', quantity: 'Menge', added: 'Zum Warenkorb hinzugefügt',
      continue: 'Weiter einkaufen', orderSize: 'Bestellmenge', lots: 'Ausgewählte Einheiten', add: 'Ausgewählte Menge in den Warenkorb',
      saved: 'Gespeichert', removed: 'Entfernt', quick: 'Schnellansicht', viewProduct: 'Produkt ansehen', allProducts: 'Alle Produkte',
      noResults: 'Keine passenden Produkte gefunden.', productsShown: 'Produkte angezeigt', previous: 'Zurück', next: 'Weiter',
      clearCart: 'Warenkorb leeren', orderSummary: 'Bestellübersicht', sendOrder: 'Bestellung absenden', sending: 'Bestellung wird gesendet…',
      sent: 'Ihre Bestellung wurde gesendet. Die Referenznummer wird auf der Bestätigungsseite angezeigt.', failed: 'Die Bestellung konnte nicht gesendet werden.',
      required: 'Bitte füllen Sie alle Pflichtfelder aus.', payment: 'Zahlungswunsch', reference: 'Bestellnummer',
      accountSaved: 'Profil auf diesem Gerät gespeichert.', emptyWish: 'Ihre Merkliste ist leer.', emptyCompare: 'Wählen Sie Produkte zum Vergleichen.',
      compareProducts: 'Produkte vergleichen', clear: 'Leeren', stock: 'Verfügbarkeit', inStock: 'Auf Lager / Angebot verfügbar',
      preOrder: 'Vorbestellung', price: 'Preis', category: 'Kategorie', rating: 'Bewertung',
      copy: 'Kopieren', download: 'Herunterladen', print: 'Drucken', removeItem: 'Artikel entfernen', update: 'Aktualisieren',
      mobileCart: 'Warenkorb', mobileSearch: 'Suche', mobileMenu: 'Menü',
      decrease: 'Verringern', increase: 'Erhöhen', product: 'Produkt', ton: 'Tonne', tons: 'Tonnen', truck: '1 LKW',
    },
    cs: {
      menu: 'Menu', close: 'Zavřít', search: 'Hledat', wishlist: 'Oblíbené', compare: 'Porovnat', cart: 'Košík',
      cartTitle: 'Váš košík', emptyCart: 'Váš košík je prázdný.', viewCart: 'Zobrazit košík', checkout: 'Pokladna',
      subtotal: 'Mezisoučet produktů', remove: 'Odstranit', quantity: 'Množství', added: 'Přidáno do košíku',
      continue: 'Pokračovat v nákupu', orderSize: 'Velikost objednávky', lots: 'Vybrané jednotky', add: 'Přidat vybrané množství do košíku',
      saved: 'Uloženo', removed: 'Odstraněno', quick: 'Rychlý náhled', viewProduct: 'Zobrazit produkt', allProducts: 'Všechny produkty',
      noResults: 'Žádný produkt neodpovídá hledání.', productsShown: 'zobrazených produktů', previous: 'Předchozí', next: 'Další',
      clearCart: 'Vyprázdnit košík', orderSummary: 'Souhrn objednávky', sendOrder: 'Odeslat objednávku', sending: 'Objednávka se odesílá…',
      sent: 'Objednávka byla odeslána. Referenční číslo se zobrazí na potvrzovací stránce.', failed: 'Objednávku se nepodařilo odeslat.',
      required: 'Vyplňte všechna povinná pole.', payment: 'Preferovaná platba', reference: 'Číslo objednávky',
      accountSaved: 'Profil byl uložen v tomto zařízení.', emptyWish: 'Seznam oblíbených je prázdný.', emptyCompare: 'Vyberte produkty k porovnání.',
      compareProducts: 'Porovnání produktů', clear: 'Vymazat', stock: 'Dostupnost', inStock: 'Skladem / nabídka dostupná',
      preOrder: 'Předobjednávka', price: 'Cena', category: 'Kategorie', rating: 'Hodnocení',
      copy: 'Kopírovat', download: 'Stáhnout', print: 'Tisk', removeItem: 'Odstranit položku', update: 'Aktualizovat',
      mobileCart: 'Košík', mobileSearch: 'Hledat', mobileMenu: 'Menu',
      decrease: 'Snížit', increase: 'Zvýšit', product: 'Produkt', ton: 'Tuna', tons: 'Tuny', truck: '1 kamion',
    },
    ro: {
      menu: 'Meniu', close: 'Închide', search: 'Caută', wishlist: 'Favorite', compare: 'Compară', cart: 'Coș',
      cartTitle: 'Coșul tău', emptyCart: 'Coșul este gol.', viewCart: 'Vezi coșul', checkout: 'Finalizare',
      subtotal: 'Subtotal produse', remove: 'Elimină', quantity: 'Cantitate', added: 'Adăugat în coș',
      continue: 'Continuă cumpărăturile', orderSize: 'Mărimea comenzii', lots: 'Loturi selectate', add: 'Adaugă cantitatea selectată în coș',
      saved: 'Salvat', removed: 'Eliminat', quick: 'Vizualizare rapidă', viewProduct: 'Vezi produsul', allProducts: 'Toate produsele',
      noResults: 'Niciun produs nu corespunde căutării.', productsShown: 'produse afișate', previous: 'Înapoi', next: 'Înainte',
      clearCart: 'Golește coșul', orderSummary: 'Rezumat comandă', sendOrder: 'Trimite comanda', sending: 'Se trimite comanda…',
      sent: 'Comanda a fost trimisă. Referința este afișată pe pagina de confirmare.', failed: 'Comanda nu a putut fi trimisă.',
      required: 'Completează toate câmpurile obligatorii.', payment: 'Preferință plată', reference: 'Referință comandă',
      accountSaved: 'Profil salvat pe acest dispozitiv.', emptyWish: 'Lista de favorite este goală.', emptyCompare: 'Alege produse pentru comparație.',
      compareProducts: 'Compară produse', clear: 'Șterge', stock: 'Disponibilitate', inStock: 'În stoc / ofertă disponibilă',
      preOrder: 'Precomandă', price: 'Preț', category: 'Categorie', rating: 'Evaluare',
      copy: 'Copiază', download: 'Descarcă', print: 'Tipărește', removeItem: 'Elimină produsul', update: 'Actualizează',
      mobileCart: 'Coș', mobileSearch: 'Caută', mobileMenu: 'Meniu',
      decrease: 'Micșorează', increase: 'Mărește', product: 'Produs', ton: 'Tonă', tons: 'Tone', truck: '1 camion',
    },
    pl: {
      menu: 'Menu', close: 'Zamknij', search: 'Szukaj', wishlist: 'Ulubione', compare: 'Porównaj', cart: 'Koszyk',
      cartTitle: 'Twój koszyk', emptyCart: 'Koszyk jest pusty.', viewCart: 'Zobacz koszyk', checkout: 'Kasa',
      subtotal: 'Suma produktów', remove: 'Usuń', quantity: 'Ilość', added: 'Dodano do koszyka',
      continue: 'Kontynuuj zakupy', orderSize: 'Wielkość zamówienia', lots: 'Wybrane partie', add: 'Dodaj wybraną ilość do koszyka',
      saved: 'Zapisano', removed: 'Usunięto', quick: 'Szybki podgląd', viewProduct: 'Zobacz produkt', allProducts: 'Wszystkie produkty',
      noResults: 'Brak produktów pasujących do wyszukiwania.', productsShown: 'wyświetlonych produktów', previous: 'Wstecz', next: 'Dalej',
      clearCart: 'Wyczyść koszyk', orderSummary: 'Podsumowanie zamówienia', sendOrder: 'Złóż zamówienie', sending: 'Wysyłanie zamówienia…',
      sent: 'Zamówienie zostało wysłane. Numer referencyjny jest wyświetlany na stronie potwierdzenia.', failed: 'Nie udało się wysłać zamówienia.',
      required: 'Uzupełnij wszystkie wymagane pola.', payment: 'Preferowana płatność', reference: 'Numer zamówienia',
      accountSaved: 'Profil zapisano na tym urządzeniu.', emptyWish: 'Lista ulubionych jest pusta.', emptyCompare: 'Wybierz produkty do porównania.',
      compareProducts: 'Porównaj produkty', clear: 'Wyczyść', stock: 'Dostępność', inStock: 'W magazynie / oferta dostępna',
      preOrder: 'Przedsprzedaż', price: 'Cena', category: 'Kategoria', rating: 'Ocena',
      copy: 'Kopiuj', download: 'Pobierz', print: 'Drukuj', removeItem: 'Usuń pozycję', update: 'Aktualizuj',
      mobileCart: 'Koszyk', mobileSearch: 'Szukaj', mobileMenu: 'Menu',
      decrease: 'Zmniejsz', increase: 'Zwiększ', product: 'Produkt', ton: 'Tona', tons: 'Tony', truck: '1 ciężarówka',
    },
  };

  const T = { ...(TEXT[LANG] || TEXT.en), ...COMMON };

  const getJSON = (key, fallback) => {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value ?? fallback;
    } catch {
      return fallback;
    }
  };
  const setJSON = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
  })[character]);
  const money = (value) => `€${Number(value || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const pageURL = (path = '') => new URL(`${LANG}/${String(path).replace(/^\//, '')}`, ROOT).href;
  const productURL = (slug) => pageURL(`products/${slug}/`);
  const productBySlug = (slug) => PRODUCTS.find((product) => product.slug === slug) || CATALOG.find((product) => product.slug === slug);
  const productImage = (product) => {
    if (!product) return new URL('assets/img/og-cover.svg', ROOT).href;
    if (product.localImage) return new URL(product.localImage, ROOT).href;
    if (/^(?:https?:|data:|blob:)/i.test(product.image || '')) return product.image;
    if (product.image) return new URL(product.image, ROOT).href;
    return new URL(product.fallback || 'assets/img/og-cover.svg', ROOT).href;
  };
  const fallbackImage = (product) => new URL(product?.fallback || 'assets/img/og-cover.svg', ROOT).href;
  const toast = (message) => {
    const current = document.querySelector('.v5-toast');
    current?.remove();
    const element = document.createElement('div');
    element.className = 'v5-toast';
    element.setAttribute('role', 'status');
    element.textContent = message;
    document.body.append(element);
    window.setTimeout(() => element.remove(), 2600);
  };

  function normaliseCart(raw) {
    if (!Array.isArray(raw)) return [];
    return raw.map((item, index) => {
      const slug = String(item.slug || '').trim();
      const product = productBySlug(slug);
      const price = Number(item.price ?? product?.price ?? 0);
      const qty = Math.max(1, Number(item.qty) || 1);
      const tons = Number(item.tons || 0);
      return {
        key: String(item.key || `${slug || 'item'}|${tons || index}`),
        slug,
        name: String(item.name || product?.name || T.product),
        variant: String(item.variant || (tons ? `${tons} ${tons === 1 ? T.ton : T.tons}` : '')),
        tons,
        kg: Number(item.kg || (tons ? tons * 1000 : 0)),
        price,
        qty,
        image: String(item.image || productImage(product)),
      };
    }).filter((item) => item.slug && Number.isFinite(item.price));
  }
  const loadCart = () => normaliseCart(getJSON(CART_KEY, []));
  const saveCart = (cart) => {
    setJSON(CART_KEY, normaliseCart(cart));
    refreshCartUI();
  };
  const cartTotal = (cart = loadCart()) => cart.reduce((sum, item) => sum + Number(item.price) * Number(item.qty), 0);
  const cartCount = (cart = loadCart()) => cart.reduce((sum, item) => sum + Number(item.qty), 0);

  function injectUI() {
    const headerNav = document.querySelector('.header .nav');
    const menu = headerNav?.querySelector('.menu');
    const language = headerNav?.querySelector('.lang');
    const toggle = headerNav?.querySelector('.mobile-toggle');

    if (menu) {
      menu.id = 'primaryNavigation';
      menu.setAttribute('aria-label', T.menu || 'Menu');
    }
    if (toggle) {
      toggle.type = 'button';
      toggle.setAttribute('aria-controls', 'primaryNavigation');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', T.menu || 'Menu');
      toggle.innerHTML = '<span aria-hidden="true">☰</span>';
    }

    if (headerNav && !headerNav.querySelector('.v5-header-actions')) {
      const actions = document.createElement('div');
      actions.className = 'v5-header-actions';
      actions.innerHTML = `
        <button class="v5-header-icon v5-search-trigger" type="button" data-open-search aria-label="${escapeHTML(T.search)}">⌕</button>
        <button class="v5-header-icon v5-wish-trigger" type="button" data-open-wishlist aria-label="${escapeHTML(T.wishlist)}">♡<span data-wish-count>0</span></button>
      `;
      headerNav.insertBefore(actions, language || toggle || null);
    }

    if (headerNav && !headerNav.querySelector('.v5-mobile-cart')) {
      const mobileCart = document.createElement('button');
      mobileCart.className = 'v5-mobile-cart';
      mobileCart.type = 'button';
      mobileCart.setAttribute('data-open-cart', '');
      mobileCart.setAttribute('aria-label', T.cart);
      mobileCart.innerHTML = `🛒<span data-cart-count>0</span>`;
      headerNav.insertBefore(mobileCart, toggle || null);
    }

    if (!document.querySelector('#v5Overlay')) {
      const shell = document.createElement('div');
      shell.innerHTML = `
        <div id="v5Overlay" class="v5-overlay" data-close-layer></div>
        <aside id="v5CartDrawer" class="v5-drawer v5-cart-drawer" aria-hidden="true" aria-label="${escapeHTML(T.cartTitle)}">
          <div class="v5-drawer-head"><h2>${escapeHTML(T.cartTitle)}</h2><button type="button" class="v5-close" data-close-layer aria-label="${escapeHTML(T.close)}">×</button></div>
          <div id="v5CartBody" class="v5-drawer-body"></div>
          <div id="v5CartFoot" class="v5-drawer-foot"></div>
        </aside>
        <aside id="v5WishDrawer" class="v5-drawer" aria-hidden="true" aria-label="${escapeHTML(T.wishlist)}">
          <div class="v5-drawer-head"><h2>${escapeHTML(T.wishlist)}</h2><button type="button" class="v5-close" data-close-layer aria-label="${escapeHTML(T.close)}">×</button></div>
          <div id="v5WishBody" class="v5-drawer-body"></div>
        </aside>
        <section id="v5SearchModal" class="v5-modal" aria-hidden="true" aria-label="${escapeHTML(T.search)}">
          <div class="v5-modal-card">
            <button type="button" class="v5-close v5-modal-close" data-close-layer aria-label="${escapeHTML(T.close)}">×</button>
            <h2>${escapeHTML(T.search)}</h2>
            <input id="v5GlobalSearch" class="input" type="search" autocomplete="off" placeholder="${escapeHTML(T.search)}">
            <div id="v5SearchResults" class="v5-search-results"></div>
          </div>
        </section>
        <section id="v5QuickModal" class="v5-modal" aria-hidden="true" aria-label="${escapeHTML(T.quick)}">
          <div class="v5-modal-card v5-quick-card">
            <button type="button" class="v5-close v5-modal-close" data-close-layer aria-label="${escapeHTML(T.close)}">×</button>
            <div id="v5QuickBody"></div>
          </div>
        </section>
        <div id="v5CompareTray" class="v5-compare-tray" aria-live="polite"></div>
      `;
      document.body.append(...shell.children);
    }
  }

  function closeLayers() {
    document.body.classList.remove('v5-layer-open', 'v5-menu-open');
    document.querySelector('.menu')?.classList.remove('is-open');
    const toggle = document.querySelector('.mobile-toggle');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<span aria-hidden="true">☰</span>';
    }
    document.querySelectorAll('.v5-drawer.is-open,.v5-modal.is-open').forEach((element) => {
      element.classList.remove('is-open');
      element.setAttribute('aria-hidden', 'true');
    });
    document.querySelector('#v5Overlay')?.classList.remove('is-open');
  }

  function openMenu() {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.mobile-toggle');
    if (!menu || !toggle) return;
    closeLayers();
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.innerHTML = '<span aria-hidden="true">×</span>';
    document.body.classList.add('v5-layer-open', 'v5-menu-open');
    document.querySelector('#v5Overlay')?.classList.add('is-open');
  }

  function openLayer(selector) {
    const layer = document.querySelector(selector);
    if (!layer) return;
    closeLayers();
    layer.classList.add('is-open');
    layer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('v5-layer-open');
    document.querySelector('#v5Overlay')?.classList.add('is-open');
    const focusTarget = layer.querySelector('input,button,a,select,textarea');
    window.setTimeout(() => focusTarget?.focus(), 50);
  }

  function updateCounts() {
    const count = cartCount();
    document.querySelectorAll('[data-cart-count]').forEach((element) => { element.textContent = String(count); });
    const wishes = getJSON(WISH_KEY, []);
    document.querySelectorAll('[data-wish-count]').forEach((element) => { element.textContent = String(wishes.length); });
  }

  function imageTag(item, className = '') {
    const product = productBySlug(item.slug);
    return `<img class="${className}" src="${escapeHTML(item.image || productImage(product))}" data-fallback="${escapeHTML(fallbackImage(product))}" alt="${escapeHTML(item.name)}">`;
  }

  function renderCartDrawer() {
    const body = document.querySelector('#v5CartBody');
    const foot = document.querySelector('#v5CartFoot');
    if (!body || !foot) return;
    const cart = loadCart();
    if (!cart.length) {
      body.innerHTML = `<div class="v5-empty"><span>🛒</span><p>${escapeHTML(T.emptyCart)}</p><a class="btn primary" href="${pageURL('shop/')}">${escapeHTML(T.continue)}</a></div>`;
      foot.innerHTML = '';
      return;
    }
    body.innerHTML = cart.map((item, index) => `
      <article class="v5-mini-item" data-cart-index="${index}">
        <a href="${productURL(item.slug)}">${imageTag(item)}</a>
        <div class="v5-mini-copy">
          <a href="${productURL(item.slug)}"><strong>${escapeHTML(item.name)}</strong></a>
          <small>${escapeHTML(item.variant || '')}</small>
          <div class="v5-quantity-control" aria-label="${escapeHTML(T.quantity)}">
            <button type="button" data-cart-minus="${index}" aria-label="${escapeHTML(T.decrease)}">−</button>
            <input type="number" min="1" max="99" value="${item.qty}" data-cart-qty="${index}" aria-label="${escapeHTML(T.quantity)}">
            <button type="button" data-cart-plus="${index}" aria-label="${escapeHTML(T.increase)}">+</button>
          </div>
        </div>
        <div class="v5-mini-side">
          <strong>${money(item.price * item.qty)}</strong>
          <button type="button" class="v5-text-button" data-cart-remove="${index}">${escapeHTML(T.remove)}</button>
        </div>
      </article>
    `).join('');
    foot.innerHTML = `
      <div class="v5-subtotal"><span>${escapeHTML(T.subtotal)}</span><strong>${money(cartTotal(cart))}</strong></div>
      <div class="v5-drawer-actions">
        <a class="btn outline" href="${pageURL('cart/')}">${escapeHTML(T.viewCart)}</a>
        <a class="btn primary" href="${pageURL('checkout/')}">${escapeHTML(T.checkout)}</a>
      </div>
    `;
  }

  function refreshCartUI() {
    updateCounts();
    renderCartDrawer();
    renderCartPage();
    renderCheckoutSummary();
  }

  function addCartItem(item, open = true) {
    const cart = loadCart();
    const key = item.key || `${item.slug}|${item.tons || item.variant}`;
    const existing = cart.find((entry) => entry.key === key);
    if (existing) existing.qty += Math.max(1, Number(item.qty) || 1);
    else cart.push({ ...item, key, qty: Math.max(1, Number(item.qty) || 1) });
    saveCart(cart);
    toast(`${T.added}: ${item.name}`);
    if (open) openLayer('#v5CartDrawer');
  }

  function changeCartQuantity(index, nextQuantity) {
    const cart = loadCart();
    if (!cart[index]) return;
    cart[index].qty = Math.max(1, Math.min(99, Number(nextQuantity) || 1));
    saveCart(cart);
  }

  function removeCartItem(index) {
    const cart = loadCart();
    if (!cart[index]) return;
    cart.splice(index, 1);
    saveCart(cart);
  }

  function setupProductPage() {
    const panel = document.querySelector('.ton-order-panel');
    if (!panel) return;
    const slug = panel.dataset.productSlug || window.location.pathname.match(/\/products\/([^/]+)/)?.[1];
    const product = productBySlug(slug);
    const select = panel.querySelector('#productTonOption');
    const quantity = panel.querySelector('#productQty');
    const total = panel.querySelector('#selectedVariationPrice');
    const addButton = panel.querySelector('#addTonOrder');
    if (!product || !select || !quantity || !total || !addButton) return;

    const update = () => {
      const option = select.selectedOptions[0];
      const lots = Math.max(1, Number(quantity.value) || 1);
      quantity.value = String(lots);
      total.textContent = money(Number(option.dataset.price || 0) * lots);
    };
    select.addEventListener('change', update);
    quantity.addEventListener('input', update);
    quantity.addEventListener('change', update);
    update();

    addButton.addEventListener('click', () => {
      const option = select.selectedOptions[0];
      const tons = Number(option.value || 0);
      const lots = Math.max(1, Number(quantity.value) || 1);
      const price = Number(option.dataset.price || product.price || 0);
      const variant = option.textContent.replace(/\s+—\s+€[\d,.]+\s*$/, '').trim();
      addCartItem({
        key: `${product.slug}|${tons}t`, slug: product.slug, name: product.name, variant,
        tons, kg: Number(option.dataset.kg || tons * 1000), price, qty: lots,
        image: productImage(product),
      });
    });

    const info = panel.closest('.product-info');
    if (info && !info.querySelector('.v5-product-actions')) {
      const actions = document.createElement('div');
      actions.className = 'v5-product-actions';
      actions.innerHTML = `
        <button type="button" class="btn outline" data-wish="${escapeHTML(product.slug)}">♡ ${escapeHTML(T.wishlist)}</button>
        <button type="button" class="btn outline" data-compare="${escapeHTML(product.slug)}">⇄ ${escapeHTML(T.compare)}</button>
        <button type="button" class="btn outline" data-share-product>↗ ${escapeHTML(COMMON.share || 'Share')}</button>
      `;
      panel.after(actions);
    }

    const mainImage = document.querySelector('.product-image > img');
    if (mainImage) {
      mainImage.dataset.fallback = fallbackImage(product);
      mainImage.addEventListener('error', imageFallback, { once: false });
    }
  }

  function imageFallback(event) {
    const image = event.currentTarget || event.target;
    const fallback = image.dataset.fallback;
    if (fallback && image.src !== fallback) {
      image.src = fallback;
      image.removeAttribute('srcset');
    }
  }

  function renderCartPage() {
    const container = document.querySelector('#cartItems');
    const total = document.querySelector('#cartTotal');
    if (!container || !total) return;
    const cart = loadCart();
    total.textContent = money(cartTotal(cart));
    if (!cart.length) {
      container.innerHTML = `<div class="v5-empty v5-cart-page-empty"><span>🛒</span><h2>${escapeHTML(T.emptyCart)}</h2><a class="btn primary" href="${pageURL('shop/')}">${escapeHTML(T.continue)}</a></div>`;
      document.querySelector('#cartActions')?.classList.add('v5-cart-actions-empty');
      return;
    }
    document.querySelector('#cartActions')?.classList.remove('v5-cart-actions-empty');
    container.innerHTML = cart.map((item, index) => `
      <article class="v5-cart-row" data-cart-index="${index}">
        <a class="v5-cart-image" href="${productURL(item.slug)}">${imageTag(item)}</a>
        <div class="v5-cart-product">
          <a href="${productURL(item.slug)}"><h3>${escapeHTML(item.name)}</h3></a>
          <p>${escapeHTML(item.variant || '')}</p>
          <button type="button" class="v5-text-button" data-cart-remove="${index}">${escapeHTML(T.removeItem)}</button>
        </div>
        <div class="v5-cart-unit"><span>${escapeHTML(T.price)}</span><strong>${money(item.price)}</strong></div>
        <div class="v5-cart-quantity"><span>${escapeHTML(T.quantity)}</span><div class="v5-quantity-control"><button type="button" data-cart-minus="${index}">−</button><input type="number" min="1" max="99" value="${item.qty}" data-cart-qty="${index}"><button type="button" data-cart-plus="${index}">+</button></div></div>
        <div class="v5-cart-line"><span>${escapeHTML(T.subtotal)}</span><strong>${money(item.price * item.qty)}</strong></div>
      </article>
    `).join('');

    const actions = document.querySelector('#cartActions .buttons');
    if (actions && !actions.querySelector('[data-clear-cart]')) {
      const clear = document.createElement('button');
      clear.type = 'button';
      clear.className = 'btn outline';
      clear.dataset.clearCart = '';
      clear.textContent = T.clearCart;
      actions.prepend(clear);
    }
  }

  function renderCheckoutSummary() {
    const summary = document.querySelector('#quoteSummary');
    if (!summary) return;
    const cart = loadCart();
    if (!cart.length) {
      summary.innerHTML = `<div class="v5-empty"><span>🛒</span><p>${escapeHTML(T.emptyCart)}</p><a class="btn primary" href="${pageURL('shop/')}">${escapeHTML(T.continue)}</a></div>`;
      return;
    }
    summary.innerHTML = `<div class="v5-order-summary">${cart.map((item) => `
      <div class="v5-summary-item">
        ${imageTag(item)}
        <div><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.variant || '')} · ${escapeHTML(T.quantity)}: ${item.qty}</small></div>
        <strong>${money(item.price * item.qty)}</strong>
      </div>
    `).join('')}<div class="v5-summary-total"><span>${escapeHTML(T.subtotal)}</span><strong>${money(cartTotal(cart))}</strong></div></div>`;
  }

  function setupCheckout() {
    const form = document.querySelector('#orderForm');
    if (!form) return;
    renderCheckoutSummary();
    const submit = form.querySelector('#submitOrder');
    const status = form.querySelector('#orderStatus');
    const profile = getJSON(PROFILE_KEY, {});
    const mapping = { first_name: 'first_name', last_name: 'last_name', company: 'company', email: 'email', phone: 'phone', country: 'country', address: 'address', city: 'city', postal: 'postal' };
    Object.entries(mapping).forEach(([field, key]) => {
      if (profile[key] && form.elements[field] && !form.elements[field].value) form.elements[field].value = profile[key];
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const cart = loadCart();
      if (!cart.length) {
        status.className = 'order-status error';
        status.textContent = T.emptyCart;
        return;
      }
      if (!form.reportValidity()) {
        status.className = 'order-status error';
        status.textContent = T.required;
        return;
      }
      const formData = new FormData(form);
      const reference = `ER-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
      const customer = Object.fromEntries(formData.entries());
      const payload = {
        language: LANG,
        page: window.location.href,
        reference,
        customer,
        payment_method: formData.get('payment_method') || 'bank',
        cart,
        total: cartTotal(cart),
        currency: 'EUR',
      };
      submit.disabled = true;
      submit.textContent = T.sending;
      status.className = 'order-status';
      status.textContent = '';
      try {
        const orderItems = cart.map((item, index) =>
          `${index + 1}. ${item.name}${item.variant ? ` — ${item.variant}` : ''} | Qty: ${item.qty} | ${money(item.price * item.qty)}`
        ).join('\n');
        const submission = {
          ...customer,
          _subject: `EmberRoot order ${reference}`,
          _template: 'table',
          _url: window.location.href,
          reference,
          language: LANG,
          payment_method: payload.payment_method,
          order_items: orderItems,
          total: money(payload.total),
          currency: payload.currency,
          source_page: payload.page,
        };
        const response = await fetch(`https://formsubmit.co/ajax/${CONFIG.email || 'sales@emberrootbiofuels.com'}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(submission),
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.success === false) throw new Error(result.message || T.failed);
        const orders = getJSON(ORDER_KEY, []);
        orders.unshift({ ...payload, status: 'Received by sales', date: new Date().toISOString() });
        setJSON(ORDER_KEY, orders.slice(0, 50));
        setJSON(PROFILE_KEY, { ...profile, ...customer });
        saveCart([]);
        status.className = 'order-status success';
        status.textContent = T.sent;
        window.setTimeout(() => {
          window.location.href = `${pageURL('order-confirmation/')}?ref=${encodeURIComponent(reference)}&method=${encodeURIComponent(payload.payment_method)}`;
        }, 650);
      } catch (error) {
        status.className = 'order-status error';
        status.textContent = error?.message || T.failed;
        submit.disabled = false;
        submit.textContent = T.sendOrder;
      }
    });
  }

  function setupOrderConfirmation() {
    const box = document.querySelector('#orderConfirmation');
    if (!box) return;
    const params = new URLSearchParams(window.location.search);
    const reference = params.get('ref') || '';
    const method = params.get('method') || '';
    if (!reference) return;
    box.innerHTML = `
      <div class="success-card-v4">
        <div class="success-icon-v4">✓</div>
        <h2>${escapeHTML(T.sent)}</h2>
        <p><strong>${escapeHTML(T.reference)}:</strong> ${escapeHTML(reference)}</p>
        <p><strong>${escapeHTML(T.payment)}:</strong> ${escapeHTML(method)}</p>
        <a class="btn primary" href="${pageURL('shop/')}">${escapeHTML(T.continue)}</a>
      </div>`;
  }

  function setupShop() {
    const grid = document.querySelector('.product-grid');
    const search = document.querySelector('#search');
    const category = document.querySelector('#category');
    const sort = document.querySelector('#sort');
    if (!grid || !search || !category || !sort) return;
    const cards = [...grid.querySelectorAll('.product-card[data-product]')];
    const originalOrder = new Map(cards.map((card, index) => [card, index]));
    let currentPage = 1;
    const pageSize = 12;
    let controls = grid.parentElement.querySelector('.v5-shop-status');
    if (!controls) {
      controls = document.createElement('div');
      controls.className = 'v5-shop-status';
      controls.innerHTML = `<p><strong data-result-count>0</strong> ${escapeHTML(T.productsShown)}</p><div class="v5-pagination" data-pagination></div>`;
      grid.before(controls);
    }

    const apply = () => {
      const query = search.value.trim().toLowerCase();
      const selectedCategory = category.value;
      const sortValue = sort.value;
      let filtered = cards.filter((card) => {
        const matchesText = !query || `${card.dataset.name || ''} ${card.textContent}`.toLowerCase().includes(query);
        const matchesCategory = !selectedCategory || selectedCategory === 'all' || card.dataset.category === selectedCategory;
        return matchesText && matchesCategory;
      });
      filtered.sort((a, b) => {
        if (sortValue === 'price-asc') return Number(a.dataset.price) - Number(b.dataset.price);
        if (sortValue === 'price-desc') return Number(b.dataset.price) - Number(a.dataset.price);
        if (sortValue === 'name') return String(a.dataset.name).localeCompare(String(b.dataset.name));
        return originalOrder.get(a) - originalOrder.get(b);
      });
      filtered.forEach((card) => grid.append(card));
      cards.forEach((card) => card.classList.add('hidden'));
      const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
      currentPage = Math.min(currentPage, pages);
      const start = (currentPage - 1) * pageSize;
      filtered.slice(start, start + pageSize).forEach((card) => card.classList.remove('hidden'));
      const count = controls.querySelector('[data-result-count]');
      if (count) count.textContent = String(filtered.length);
      const empty = document.querySelector('#empty');
      empty?.classList.toggle('hidden', filtered.length > 0);
      const pagination = controls.querySelector('[data-pagination]');
      if (pagination) {
        pagination.innerHTML = pages > 1 ? `
          <button type="button" data-shop-page="prev" ${currentPage <= 1 ? 'disabled' : ''}>${escapeHTML(T.previous)}</button>
          <span>${currentPage} / ${pages}</span>
          <button type="button" data-shop-page="next" ${currentPage >= pages ? 'disabled' : ''}>${escapeHTML(T.next)}</button>` : '';
      }
    };
    [search, category, sort].forEach((control) => control.addEventListener(control === search ? 'input' : 'change', () => { currentPage = 1; apply(); }));
    controls.addEventListener('click', (event) => {
      const button = event.target.closest('[data-shop-page]');
      if (!button) return;
      currentPage += button.dataset.shopPage === 'next' ? 1 : -1;
      apply();
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    apply();
  }

  function enhanceProductCards() {
    document.querySelectorAll('.product-card[data-product]').forEach((card) => {
      if (card.querySelector('.v5-card-actions')) return;
      const link = card.querySelector('h3 a');
      const product = PRODUCTS.find((candidate) => link?.href.includes(`/${candidate.slug}/`));
      if (!product) return;
      const actions = document.createElement('div');
      actions.className = 'v5-card-actions';
      actions.innerHTML = `
        <button type="button" data-wish="${escapeHTML(product.slug)}" aria-label="${escapeHTML(T.wishlist)}">♡</button>
        <button type="button" data-quick="${escapeHTML(product.slug)}" aria-label="${escapeHTML(T.quick)}">⌕</button>
        <button type="button" data-compare="${escapeHTML(product.slug)}" aria-label="${escapeHTML(T.compare)}">⇄</button>
      `;
      card.prepend(actions);
      card.querySelectorAll('img').forEach((image) => {
        image.dataset.fallback = fallbackImage(product);
        image.addEventListener('error', imageFallback);
      });
    });
    syncSavedButtons();
  }

  function wishlist() {
    const values = getJSON(WISH_KEY, []);
    return Array.isArray(values) ? values.filter((slug) => productBySlug(slug)) : [];
  }
  function toggleWishlist(slug) {
    const values = wishlist();
    const index = values.indexOf(slug);
    if (index >= 0) {
      values.splice(index, 1);
      toast(T.removed);
    } else {
      values.unshift(slug);
      toast(T.saved);
    }
    setJSON(WISH_KEY, values.slice(0, 100));
    renderWishlist();
    syncSavedButtons();
    updateCounts();
  }
  function renderWishlist() {
    const body = document.querySelector('#v5WishBody');
    if (!body) return;
    const values = wishlist();
    body.innerHTML = values.length ? values.map((slug) => {
      const product = productBySlug(slug);
      return `<article class="v5-wish-item"><a href="${productURL(slug)}"><img src="${escapeHTML(productImage(product))}" data-fallback="${escapeHTML(fallbackImage(product))}" alt="${escapeHTML(product.name)}"><span><strong>${escapeHTML(product.name)}</strong><small>${money(product.price)}</small></span></a><button type="button" data-wish="${escapeHTML(slug)}">×</button></article>`;
    }).join('') : `<div class="v5-empty"><span>♡</span><p>${escapeHTML(T.emptyWish)}</p><a class="btn primary" href="${pageURL('shop/')}">${escapeHTML(T.continue)}</a></div>`;
    body.querySelectorAll('img').forEach((image) => image.addEventListener('error', imageFallback));
  }
  function syncSavedButtons() {
    const wishes = wishlist();
    const compares = compareList();
    document.querySelectorAll('[data-wish]').forEach((button) => {
      const active = wishes.includes(button.dataset.wish);
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-compare]').forEach((button) => {
      const active = compares.includes(button.dataset.compare);
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function compareList() {
    const values = getJSON(COMPARE_KEY, []);
    return Array.isArray(values) ? values.filter((slug) => productBySlug(slug)).slice(0, 4) : [];
  }
  function toggleCompare(slug) {
    const values = compareList();
    const index = values.indexOf(slug);
    if (index >= 0) values.splice(index, 1);
    else if (values.length < 4) values.push(slug);
    else toast('Maximum 4 products');
    setJSON(COMPARE_KEY, values);
    renderCompareTray();
    renderComparePage();
    syncSavedButtons();
  }
  function renderCompareTray() {
    const tray = document.querySelector('#v5CompareTray');
    if (!tray) return;
    const values = compareList();
    if (!values.length) {
      tray.classList.remove('is-visible');
      tray.innerHTML = '';
      return;
    }
    tray.classList.add('is-visible');
    tray.innerHTML = `<span><strong>${values.length}</strong> ${escapeHTML(T.compareProducts)}</span><div><a class="btn primary" href="${pageURL('compare/')}">${escapeHTML(T.compare)}</a><button type="button" class="btn outline" data-clear-compare>${escapeHTML(T.clear)}</button></div>`;
  }
  function renderComparePage() {
    const page = document.querySelector('#comparePage');
    if (!page) return;
    const products = compareList().map(productBySlug).filter(Boolean);
    if (!products.length) {
      page.innerHTML = `<div class="v5-empty"><span>⇄</span><h2>${escapeHTML(T.emptyCompare)}</h2><a class="btn primary" href="${pageURL('shop/')}">${escapeHTML(T.continue)}</a></div>`;
      return;
    }
    const row = (label, value) => `<div class="v5-compare-label">${escapeHTML(label)}</div>${products.map((product) => `<div class="v5-compare-cell">${value(product)}</div>`).join('')}`;
    page.innerHTML = `<div class="v5-compare-table" style="--compare-columns:${products.length}">
      ${row('', (product) => `<img src="${escapeHTML(productImage(product))}" data-fallback="${escapeHTML(fallbackImage(product))}" alt="${escapeHTML(product.name)}"><h3>${escapeHTML(product.name)}</h3><a class="btn outline" href="${productURL(product.slug)}">${escapeHTML(T.viewProduct)}</a>`)}
      ${row(T.price, (product) => money(product.price))}
      ${row(T.category, (product) => escapeHTML(product.category))}
      ${row(T.stock, (product) => escapeHTML(product.stock === 'in-stock' ? T.inStock : T.preOrder))}
      ${row(T.rating, (product) => `${escapeHTML(product.rating)} / 5`)}
    </div>`;
    page.querySelectorAll('img').forEach((image) => image.addEventListener('error', imageFallback));
  }

  function openQuickView(slug) {
    const product = productBySlug(slug);
    const body = document.querySelector('#v5QuickBody');
    if (!product || !body) return;
    const variations = product.variations || [{ tons: 1, kg: 1000, price: product.price }];
    body.innerHTML = `
      <div class="v5-quick-layout">
        <div class="v5-quick-image"><img src="${escapeHTML(productImage(product))}" data-fallback="${escapeHTML(fallbackImage(product))}" alt="${escapeHTML(product.name)}"></div>
        <div><span class="badge">${escapeHTML(product.category)}</span><h2>${escapeHTML(product.name)}</h2><p>${escapeHTML(product.description || '')}</p><div class="bigprice">${money(product.price)}</div>
          <label><span class="option-label">${escapeHTML(T.orderSize)}</span><select class="input" data-quick-variation>${variations.map((variation) => `<option value="${variation.tons}" data-price="${variation.price}" data-kg="${variation.kg}">${variation.truck ? T.truck : `${variation.tons} ${variation.tons === 1 ? T.ton : T.tons}`} — ${money(variation.price)}</option>`).join('')}</select></label>
          <div class="v5-quick-buttons"><button type="button" class="btn primary" data-quick-add="${escapeHTML(product.slug)}">${escapeHTML(T.add)}</button><a class="btn outline" href="${productURL(product.slug)}">${escapeHTML(T.viewProduct)}</a></div>
        </div>
      </div>`;
    body.querySelector('img')?.addEventListener('error', imageFallback);
    openLayer('#v5QuickModal');
  }

  function searchProducts(query = '') {
    const results = document.querySelector('#v5SearchResults');
    if (!results) return;
    const normalised = query.trim().toLowerCase();
    const rows = PRODUCTS.filter((product) => !normalised || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(normalised)).slice(0, 12);
    results.innerHTML = rows.length ? rows.map((product) => `
      <a class="v5-search-hit" href="${productURL(product.slug)}">
        <img src="${escapeHTML(productImage(product))}" data-fallback="${escapeHTML(fallbackImage(product))}" alt="${escapeHTML(product.name)}">
        <span><strong>${escapeHTML(product.name)}</strong><small>${escapeHTML(product.category)}</small></span>
        <strong>${money(product.price)}</strong>
      </a>`).join('') : `<div class="notice">${escapeHTML(T.noResults)}</div>`;
    results.querySelectorAll('img').forEach((image) => image.addEventListener('error', imageFallback));
  }

  function setupAccount() {
    const form = document.querySelector('#localProfile');
    if (!form) return;
    const profile = getJSON(PROFILE_KEY, {});
    Object.entries(profile).forEach(([key, value]) => {
      if (form.elements[key]) form.elements[key].value = value;
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      setJSON(PROFILE_KEY, Object.fromEntries(new FormData(form).entries()));
      toast(T.accountSaved);
    });
    const quotes = document.querySelector('#savedQuotes');
    const orders = getJSON(ORDER_KEY, []);
    if (quotes) quotes.innerHTML = orders.length ? orders.map((order) => `<article class="saved-quote"><span class="status-pill">${escapeHTML(order.status || 'Received')}</span><h3>${escapeHTML(order.reference)}</h3><small>${new Date(order.date).toLocaleString()}</small><p>${escapeHTML(order.payment_method || '')} · ${money(order.total)}</p></article>`).join('') : '<div class="notice">No saved orders on this device.</div>';
    const wish = document.querySelector('#accountWishlist');
    if (wish) {
      const values = wishlist();
      wish.innerHTML = values.length ? values.map((slug) => {
        const product = productBySlug(slug);
        return `<a class="v5-search-hit" href="${productURL(slug)}"><img src="${escapeHTML(productImage(product))}" data-fallback="${escapeHTML(fallbackImage(product))}" alt="${escapeHTML(product.name)}"><span><strong>${escapeHTML(product.name)}</strong><small>${escapeHTML(product.category)}</small></span><strong>${money(product.price)}</strong></a>`;
      }).join('') : `<div class="notice">${escapeHTML(T.emptyWish)}</div>`;
    }
  }

  function setupTracking() {
    const form = document.querySelector('#trackForm');
    const result = document.querySelector('#trackResult');
    if (!form || !result) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const reference = String(new FormData(form).get('ref') || '').trim().toUpperCase();
      const order = getJSON(ORDER_KEY, []).find((entry) => String(entry.reference).toUpperCase() === reference);
      result.innerHTML = order ? `<article class="saved-quote"><span class="status-pill">${escapeHTML(order.status || 'Received')}</span><h3>${escapeHTML(order.reference)}</h3><p>${new Date(order.date).toLocaleString()}</p><p>${money(order.total)}</p></article>` : '<div class="notice">No order saved on this device matches that reference.</div>';
    });
  }

  function bindEvents() {
    document.addEventListener('click', (event) => {
      const toggle = event.target.closest('.mobile-toggle');
      if (toggle) {
        event.preventDefault();
        document.querySelector('.menu')?.classList.contains('is-open') ? closeLayers() : openMenu();
        return;
      }
      if (event.target.closest('[data-close-layer]')) {
        event.preventDefault();
        closeLayers();
        return;
      }
      const cartTrigger = event.target.closest('[data-open-cart], .cartpill');
      if (cartTrigger) {
        event.preventDefault();
        renderCartDrawer();
        openLayer('#v5CartDrawer');
        return;
      }
      if (event.target.closest('[data-open-search]')) {
        event.preventDefault();
        searchProducts('');
        openLayer('#v5SearchModal');
        return;
      }
      if (event.target.closest('[data-open-wishlist]')) {
        event.preventDefault();
        renderWishlist();
        openLayer('#v5WishDrawer');
        return;
      }
      const wish = event.target.closest('[data-wish]');
      if (wish) {
        event.preventDefault();
        toggleWishlist(wish.dataset.wish);
        return;
      }
      const compare = event.target.closest('[data-compare]');
      if (compare) {
        event.preventDefault();
        toggleCompare(compare.dataset.compare);
        return;
      }
      if (event.target.closest('[data-clear-compare]')) {
        setJSON(COMPARE_KEY, []);
        renderCompareTray();
        renderComparePage();
        syncSavedButtons();
        return;
      }
      const quick = event.target.closest('[data-quick]');
      if (quick) {
        event.preventDefault();
        openQuickView(quick.dataset.quick);
        return;
      }
      const quickAdd = event.target.closest('[data-quick-add]');
      if (quickAdd) {
        const product = productBySlug(quickAdd.dataset.quickAdd);
        const select = document.querySelector('[data-quick-variation]');
        const option = select?.selectedOptions[0];
        if (product && option) {
          const tons = Number(option.value);
          addCartItem({ key: `${product.slug}|${tons}t`, slug: product.slug, name: product.name, variant: option.textContent.replace(/\s+—\s+€[\d,.]+$/, ''), tons, kg: Number(option.dataset.kg), price: Number(option.dataset.price), qty: 1, image: productImage(product) });
        }
        return;
      }
      const remove = event.target.closest('[data-cart-remove]');
      if (remove) {
        removeCartItem(Number(remove.dataset.cartRemove));
        return;
      }
      const minus = event.target.closest('[data-cart-minus]');
      if (minus) {
        const index = Number(minus.dataset.cartMinus);
        const cart = loadCart();
        changeCartQuantity(index, Number(cart[index]?.qty || 1) - 1);
        return;
      }
      const plus = event.target.closest('[data-cart-plus]');
      if (plus) {
        const index = Number(plus.dataset.cartPlus);
        const cart = loadCart();
        changeCartQuantity(index, Number(cart[index]?.qty || 1) + 1);
        return;
      }
      if (event.target.closest('[data-clear-cart]')) {
        saveCart([]);
        return;
      }
      if (event.target.closest('[data-share-product]')) {
        const share = { title: document.title, url: window.location.href };
        if (navigator.share) navigator.share(share).catch(() => {});
        else navigator.clipboard?.writeText(window.location.href).then(() => toast(T.copy));
      }
    });

    document.addEventListener('change', (event) => {
      const quantity = event.target.closest('[data-cart-qty]');
      if (quantity) changeCartQuantity(Number(quantity.dataset.cartQty), quantity.value);
    });
    document.addEventListener('input', (event) => {
      if (event.target.matches('#v5GlobalSearch')) searchProducts(event.target.value);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLayers();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960 && document.body.classList.contains('v5-menu-open')) closeLayers();
    });
    document.querySelector('.menu')?.addEventListener('click', (event) => {
      if (event.target.closest('a') && window.innerWidth <= 960 && !event.target.closest('.cartpill')) closeLayers();
    });
    document.addEventListener('click', (event) => {
      const language = document.querySelector('.lang');
      if (language?.open && !language.contains(event.target)) language.open = false;
    });
  }

  async function clearLegacyCaches() {
    try {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const registration of registrations) await registration.unregister();
      }
      if ('caches' in window) {
        const keys = await caches.keys();
        for (const key of keys) {
          if (/emberroot/i.test(key)) await caches.delete(key);
        }
      }
    } catch {
      // Cache cleanup is best-effort and must never block the storefront.
    }
  }

  function validateHeaderLinks() {
    document.querySelectorAll('.menu a').forEach((link) => {
      link.removeAttribute('tabindex');
      link.style.pointerEvents = '';
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.body.dataset.build = 'v5';
    clearLegacyCaches();
    document.querySelectorAll('.topbar,.mega-menu').forEach((element) => element.remove());
    document.querySelectorAll('.mega-holder').forEach((holder) => {
      const anchor = holder.querySelector(':scope > a');
      if (anchor) holder.replaceWith(anchor);
      else holder.remove();
    });
    injectUI();
    bindEvents();
    validateHeaderLinks();
    setupProductPage();
    renderCartPage();
    setupCheckout();
    setupOrderConfirmation();
    setupShop();
    enhanceProductCards();
    renderWishlist();
    renderCompareTray();
    renderComparePage();
    setupAccount();
    setupTracking();
    refreshCartUI();
    document.querySelectorAll('img[data-fallback]').forEach((image) => image.addEventListener('error', imageFallback));
  });
})();
