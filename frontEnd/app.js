//  ROUTES
const routes = {
  home: "home",
  products: "products",
  cart: "cart",
  login: "login",
  signup: "signup",
};

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
  return `<section class="view-section"></section>`;
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
