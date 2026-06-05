import { saveSession } from "@/utils";
import { navigateTo } from "@/router/router";
import { http } from "@/api/http";

export const loginController = () => {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      alert("Completa correo y contraseña");
      return;
    }

    try {
      const users = await http.get(
        `/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
      );

      if (!users.length) {
        alert("Credenciales incorrectas");
        return;
      }

      saveSession({
        id: users[0].id,
        name: users[0].name,
        role: users[0].role,
      });

      navigateTo("/home");
    } catch (error) {
      console.error(error);
      alert("Error conectando con la API");
    }
  });
};
