
/* ========================================
   AUTOVIVA - JAVASCRIPT
======================================== */


/* ========================================
   MENU DE NAVEGAÇÃO
======================================== */

// Seleciona o botão do menu
const menuButton = document.querySelector('.menu-toggle');

// Seleciona a navegação
const navigation = document.querySelector('#menu-principal');


// Verifica se os elementos existem
if (menuButton && navigation) {

    // Evento de clique no botão
    menuButton.addEventListener('click', () => {

        // Verifica se o menu está aberto
        const isOpen =
            menuButton.getAttribute('aria-expanded') === 'true';

        // Atualiza o estado do botão
        menuButton.setAttribute(
            'aria-expanded',
            String(!isOpen)
        );

        // Abre ou fecha o menu
        navigation.classList.toggle('is-open', !isOpen);

    });


    // Fecha o menu ao clicar em um link
    navigation.querySelectorAll('a').forEach((link) => {

        link.addEventListener('click', () => {

            // Atualiza o botão
            menuButton.setAttribute(
                'aria-expanded',
                'false'
            );

            // Fecha o menu
            navigation.classList.remove('is-open');

        });

    });

}


/* ========================================
   ATUALIZAÇÃO AUTOMÁTICA DO ANO
======================================== */

// Seleciona o elemento do ano
const year = document.querySelector('#year');

// Atualiza o ano automaticamente
if (year) {

    year.textContent = new Date().getFullYear();

}


/* ========================================
   ACESSIBILIDADE DO MENU
======================================== */

// Fecha o menu quando o usuário aperta ESC
document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape' && navigation && menuButton) {

        navigation.classList.remove('is-open');

        menuButton.setAttribute(
            'aria-expanded',
            'false'
        );

        menuButton.focus();

    }

});
