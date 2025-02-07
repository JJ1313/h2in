// ========= CARGAR DE COMUNAS =========
(async () => {
    const baseUrl = window.location.origin;
    console.log(baseUrl);
    const response = await fetch(`${baseUrl}/plataforma/data/comunas-regiones.json`);
    const data = await response.json();
    const citySelect = document.getElementById('city');
    const cities = [];
    data.regiones.forEach((r) => {
        r.comunas.forEach((c) => {
            cities.push(c);
        });
    });
    cities.sort();
    cities.forEach((c) => {
        const option = document.createElement('option');
        option.setAttribute('value', c);
        option.innerText = c;
        citySelect.appendChild(option);
    });
})();

// ========= HANDLE FORM =========
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btnClicked = e.submitter;
    const targetUser = document.getElementById('target-user').value;
    if (btnClicked.getAttribute('id') == 'btn-submit') {
        window.location.href = `/plataforma/app.html?userType=${targetUser}`
    };
    if (btnClicked.getAttribute('id') == 'btn-skip') {
        window.location.href = `/plataforma/app.html?userType=${targetUser}`
    };
});
