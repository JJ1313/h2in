// Controla botones para abrir o cerrar secciones
const btnsSideMenu = document.querySelectorAll('.btn');
btnsSideMenu.forEach(btn => {
    if (!btn.classList.contains('link')) {
        btn.addEventListener('click', (event) => {
            let idTarget = event.target.getAttribute('data-target');
            let target = event.target;

            // SIEMPRE SUBIR AL CONTENEDOR '.btn' QUE TIENE EL data-target
            // Esto asegura que 'target' sea siempre el elemento correcto para alternar 'data-active'
            // y para obtener el 'clickedMenuId'
            while (target && !target.classList.contains('btn')) {
                target = target.parentElement;
            }
            // Si por alguna razón el click no fue en un btn o un hijo de un btn, salimos.
            if (!target) return;

            // Ahora que 'target' es el .btn correcto, obtenemos su data-target
            idTarget = target.getAttribute('data-target');
            const clickedMenuId = idTarget; // clickedMenuId es el mismo que idTarget en este punto

            // Verifica si el botón clickeado es uno de los headers internos de "Indicadores"
            const isInternalIndicatorHeader = (clickedMenuId === 'menu-socioAmbiental' || clickedMenuId === 'menu-tecnico');

            // Nueva verificación para botones internos de 'Recursos Hídricos' (menu-hidrico)
            // 'menu-cuencas' es un control interno del panel de "Recursos Hídricos"
            const isInternalHidricoControl = (clickedMenuId === 'menu-cuencas');

            const menusPrincipales = document.querySelectorAll('#menu-hidrico, #menu-opciones, #section-detalle, #section-indicadores');

            menusPrincipales.forEach((m) => {
                // No cierres 'm' si:
                // 1. 'm' es el menú clickeado (target.id === m.id)
                // 2. 'm' es 'menu-cuencas' (ya lo excluías para su propio cierre si fuera un menú principal)
                // 3. El click es un header interno de 'Indicadores' Y 'm' es 'section-indicadores'
                // 4. El click es un control interno de 'Recursos Hídricos' Y 'm' es 'menu-hidrico'
                if (clickedMenuId !== m.getAttribute("id") &&
                    m.getAttribute("id") !== "menu-cuencas" && // Mantiene esta exclusión para el panel de cuencas en sí
                    !(isInternalIndicatorHeader && m.getAttribute("id") === "section-indicadores") &&
                    !(isInternalHidricoControl && m.getAttribute("id") === "menu-hidrico")
                ) {
                    m.toggleAttribute('data-visible', false);
                    const correspondingBtn = document.querySelector(`.btn[data-target="${m.id}"]`);
                    if (correspondingBtn) {
                        correspondingBtn.toggleAttribute('data-active', false);
                    }
                }
            });

            // Ahora 'target' es el elemento .btn que clickeamos (o su ancestro .btn)
            target.toggleAttribute('data-active');

            // 'idTarget' es el ID del elemento que queremos mostrar/ocultar
            document.getElementById(idTarget).toggleAttribute('data-visible');
        });
    }
});// Control de pop info de indicadores
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
    toggleMarkers(desalinationMarkers, event.target.checked);
});
// Toggle areas
document.getElementById('toggle-limitCommunes').addEventListener('change', (event) => {
    
    event.target.checked ? displayLimitcommunes() : removeLimitCommunes();
});
// Toggle PTAS
document.getElementById('toggle-ptas').addEventListener('change', (event) => {
    toggleMarkers(ptasMarkers, event.target.checked);
});
