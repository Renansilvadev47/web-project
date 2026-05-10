// CONFIG
const whatsappNumero = "5553984280755";

const mensagemPadrao =
  "Olá Patrícia tudo bem ? Quero agendar uma avaliação.";

const instagramUsuario = "patriciadasilva599";

// BOTÕES
document.querySelectorAll(".btn").forEach(btn => {

  btn.addEventListener("click", (e) => {

    const tipo = btn.dataset.tipo;

    // WHATSAPP
    if (tipo === "whatsapp") {

      e.preventDefault();

      const url =
        `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagemPadrao)}`;

      window.open(url, "_blank");
    }

    // INSTAGRAM
    if (tipo === "instagram") {

      e.preventDefault();

      const urlInstagram =
        `https://instagram.com/${instagramUsuario}`;

      window.open(urlInstagram, "_blank");
    }

  });

});