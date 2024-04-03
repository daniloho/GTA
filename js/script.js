const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});

// Seletor dos links de navegação
const linksNavegacao = document.querySelectorAll('a[href^="#"]');

// Adiciona um ouvinte de eventos para cada link
linksNavegacao.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        // Rola suavemente até a seção de destino
        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
