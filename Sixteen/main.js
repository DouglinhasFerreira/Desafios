var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 0;

// Função de navegação manual
var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    currentSlide = manual;
};

// Evento de clique para os botões
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
    });
});

// Função para repetir os slides automaticamente
var repeat = function() {
    let active = document.getElementsByClassName("active");
    let i = currentSlide;

    var repeater = () => {
        setTimeout(function () {
            // Remove a classe 'active' dos slides e botões
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove("active");
            });

            // Avança para o próximo slide ou volta ao primeiro
            i = (i + 1) % slides.length;

            slides[i].classList.add('active');
            btns[i].classList.add('active');

            // Atualiza a variável currentSlide
            currentSlide = i;

            // Chama a função novamente após um intervalo
            repeater();
        }, 3000); // Muda o slide a cada 3 segundos
    };

    repeater();
};

// Inicia o carrossel automático
repeat();