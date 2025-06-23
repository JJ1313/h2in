// Controla botones para abrir o cerrar secciones
const btnsSideMenu = document.querySelectorAll('.btn');
btnsSideMenu.forEach(btn => {
    if (!btn.classList.contains('link')) {
        btn.addEventListener('click', (event) => {
            let idTarget = event.target.getAttribute('data-target');
            let target = event.target;
            if (!idTarget) {
                idTarget = event.target.parentElement.getAttribute('data-target');
                target = event.target.parentElement;
            }
            // Cierra menus abiertos, para que no se superpongan
            const menus = document.querySelectorAll('#menu-hidrico, #menu-opciones, #section-indicadores, #section-detalle');
            menus.forEach((m) => {
                if (target.getAttribute("data-target") !== m.getAttribute("id") && target.getAttribute('data-target') !== "menu-cuencas") {
                    m.toggleAttribute('data-visible', false);
                }
            });
            target.toggleAttribute('data-active')
            document.getElementById(idTarget).toggleAttribute('data-visible');
        });
    }
});

// Control de pop info de indicadores
const btnsPopOver = document.querySelectorAll('.btn-popover');
btnsPopOver.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const idTarget = event.target.getAttribute('data-target');
        document.getElementById(idTarget).toggleAttribute('data-visible', true);
        setTimeout(() => {
            document.getElementById(idTarget).toggleAttribute('data-visible', false);
        }, 5000);
    });
});

// Controla botones close
const btnsClose = document.querySelectorAll('.btn-close');
btnsClose.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const idTarget = event.target.getAttribute('data-target');
        const mainBtn = document.querySelector(`.btn[data-target=${idTarget}]`);
        if (mainBtn) {
            mainBtn.toggleAttribute('data-active', false);
        }
        document.getElementById(idTarget).toggleAttribute('data-visible', false);
    });
});

// Cambia indicadores de desalinizadoras
const selectDesaladora = document.getElementById('select-desaladoras');
selectDesaladora.addEventListener('change', (event) => {
    document.getElementById("desaladora-status").innerText = desaladoras[selectDesaladora.value].status;
    document.getElementById("desaladora-capacity").innerText = desaladoras[selectDesaladora.value].capacity;
    document.getElementById("desaladora-unit").innerText = desaladoras[selectDesaladora.value].capacityUnit;
    document.getElementById("desaladora-use").innerText = desaladoras[selectDesaladora.value].use;
    document.getElementById("desaladora-owner").innerText = desaladoras[selectDesaladora.value].owner;
});

// Toggle markers 
document.getElementById('toggle-communes').addEventListener('change', (event) => {
    toggleMarkers(communesMarkers, event.target.checked);
});
document.getElementById('toggle-desalination').addEventListener('change', (event) => {
    if (event.target.checked) {
        document.getElementById('toggle-communes').checked = false;
        toggleMarkers(communesMarkers, false);
        removeLimitCommunes();
        document.getElementById('toggle-limitCommunes').checked = false;
    }
    toggleMarkers(desalinationMarkers, event.target.checked);
});
// Toggle areas
document.getElementById('toggle-limitCommunes').addEventListener('change', (event) => {
    event.target.checked ? displayLimitcommunes() : removeLimitCommunes();
});
// Toggle areas
document.getElementById('toggle-ptas').addEventListener('change', (event) => {
    if (event.target.checked) {
        document.getElementById('toggle-communes').checked = false;
        toggleMarkers(communesMarkers, false);
        removeLimitCommunes();
        document.getElementById('toggle-limitCommunes').checked = false;
    }
    toggleMarkers(ptasMarkers, event.target.checked);
});
