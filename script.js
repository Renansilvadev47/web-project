// CONFIG
const whatsappNumero = "5399702812";

const mensagemPadrao =
  "Olá Patrícia tudo bem ? Quero saber mais.";

const instagramUsuario = "patriciadasilva599";

// BOTÕES
document.querySelectorAll("button[data-tipo]").forEach(btn => {

  btn.addEventListener("click", (e) => {

    e.preventDefault();

    const tipo = btn.dataset.tipo;

    // WHATSAPP
    if (tipo === "whatsapp") {

      const url =
        `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagemPadrao)}`;

      window.open(url, "_blank");
    }

    // INSTAGRAM
    if (tipo === "instagram") {

      const urlInstagram =
        `https://instagram.com/${instagramUsuario}`;

      window.open(urlInstagram, "_blank");
    }

  });

});

// SALVAR POSIÇÃO DO SCROLL
window.addEventListener("scroll", () => {

  sessionStorage.setItem(
    "scrollPosition",
    window.scrollY
  );

});

// RESTAURAR POSIÇÃO
window.addEventListener("load", () => {

  const scrollPosition =
    sessionStorage.getItem("scrollPosition");

  if (scrollPosition !== null) {

    window.scrollTo({
      top: parseInt(scrollPosition),
      behavior: "instant"
    });

  }

});