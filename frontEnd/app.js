// Product data
const dummyProducts = [
  {
    id: "kb-mech",
    name: "Mechanical Keyboard Pro",
    description: "Hot-swappable switches, per-key RGB, USB‑C, built for builders.",
    price: 129,
    tag: "Peripherals",
    badge: "New",
  },
  {
    id: "headset-wireless",
    name: "Lag‑Free Wireless Headset",
    description: "Low-latency audio with AI-powered noise isolation for crisp calls.",
    price: 89,
    tag: "Audio",
    badge: "Bestseller",
  },
  {
    id: "monitor-4k",
    name: "27\" 4K Creator Display",
    description: "Color-accurate IPS panel with 144Hz refresh for play and work.",
    price: 399,
    tag: "Monitors",
    badge: "Creator",
  },
  {
    id: "chair-ergonomic",
    name: "ErgoByte Chair",
    description: "Ergonomic chair with breathable mesh and 4D armrests.",
    price: 259,
    tag: "Workspace",
    badge: "Comfort",
  },
];

//  ROUTES
const routes = {
  home: "home",
  products: "products",
  cart: "cart",
  login: "login",
  signup: "signup",
};

// Cart state
let cart = [];

// Cart functions
function getCart() {
  return cart;
}

function addToCart(productId) {
  const product = dummyProducts.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartCount();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartCount();
}

function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (countEl) {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    countEl.textContent = totalQty.toString();
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

//  NAVIGATION 
function navigateTo(route) {
  const routeKey = routes[route] ? route : routes.home;
  window.location.hash = `#${routeKey}`;
}

function setActiveRouteFromHash() {
  const hash = window.location.hash.replace("#", "") || routes.home;
  renderRoute(hash);
}

//  RENDER ROUTER 
function renderRoute(route) {
  const viewRoot = document.getElementById("view-root");
  if (!viewRoot) return;

  switch (route) {
    case routes.products:
      viewRoot.innerHTML = renderProductsView();
      break;
    case routes.cart:
      viewRoot.innerHTML = renderCartView();
      break;
    case routes.login:
      viewRoot.innerHTML = renderLoginView();
      break;
    case routes.signup:
      viewRoot.innerHTML = renderSignupView();
      break;
    case routes.home:
    default:
      viewRoot.innerHTML = renderHomeView();
      break;
  }
}

//  EMPTY PLACEHOLDER VIEWS 
function renderHomeView() {
  return `<section class="view-section"></section>`;
}

function renderProductsView() {
  return `
    <section class="view-section">
      <header class="section-header">
        <div>
          <h2 class="section-title">
            <span class="section-title-icon">🧩</span>
            Demo products
          </h2>
          <p class="section-subtitle">
            These are dummy items to show how a products grid and cart flow could look.
          </p>
        </div>
        <button class="btn btn-ghost" data-route="cart">
          View cart
        </button>
      </header>
      <div class="products-grid">
        ${dummyProducts
          .map(
            (p) => `
          <article class="product-card">
            <div class="product-body">
              <div class="product-tag">
                <span>${p.tag}</span>
                <span>•</span>
                <span>${p.badge}</span>
              </div>
              <h3 class="product-name">${p.name}</h3>
              <p class="product-desc">${p.description}</p>
            </div>
            <div class="product-meta">
              <div>
                <div class="product-price">$${p.price}</div>
                <div class="product-pill">Demo only</div>
              </div>
              <button class="btn btn-primary btn-add-to-cart" data-product-id="${p.id}">
                Add to cart
              </button>
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    </section>
  `;
}
function renderCartView() {
  return `<section class="view-section"></section>`;
}

function renderLoginView() {
  return `<section class="view-section"></section>`;
}

function renderSignupView() {
  return `<section class="view-section"></section>`;
}

//  INIT 
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-route]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.currentTarget;
      const route = target.getAttribute("data-route");
      if (route) {
        navigateTo(route);
      }
    })
  );

  setActiveRouteFromHash();
});

window.addEventListener("hashchange", setActiveRouteFromHash);
