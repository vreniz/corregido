import loginView from "@/views/loginView";
import homeView from "@/views/homeView";
import NotFoundView from "@/views/notFound";
import { isAuthenticated } from "@/utils";

const routes = {
  "/": { view: loginView, public: true },
  "/home": { view: homeView, public: false },
};

export const navigateTo = (path) => {
  history.pushState({}, "", path);
  router();
};

export const router = () => {
  const app = document.querySelector("#app");
  const path = window.location.pathname;
  const route = routes[path];

  // Ruta inexistente -> 404
  if (!route) {
    app.innerHTML = NotFoundView();
    document
      .querySelector("#goHome")
      ?.addEventListener("click", () => navigateTo("/"));
    return;
  }

  // Ruta protegida sin sesión -> login
  if (!route.public && !isAuthenticated()) {
    navigateTo("/");
    return;
  }

  // Ya autenticado e intenta ir al login -> home
  if (path === "/" && isAuthenticated()) {
    navigateTo("/home");
    return;
  }

  app.innerHTML = route.view();
};

// Intercepta clics en enlaces internos (data-link) para no recargar la página
document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (link) {
    e.preventDefault();
    navigateTo(link.getAttribute("href"));
  }
});

window.addEventListener("popstate", router);
