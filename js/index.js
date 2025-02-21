const URL = "http://localhost:3000";
const PORT = 3000;
// ========= LOAD CITIES =========
/* (async () => {
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
*/
// ========= LOAD USERS TYPE COUNTER =========
(async () => {
    try {
        const response = await fetch(`${URL}/usersType`);
        if (!response.ok) {
            throw new Error('Error fetching usersType');
        }
        const data = await response.json();
        const usersData = data.object || {};
        document.getElementById("publicOfficial-count").innerText = usersData.publicOfficial?.count ?? 0;
        document.getElementById("company-count").innerText = usersData.company?.count ?? 0;
        document.getElementById("education-count").innerText = usersData.education?.count ?? 0;
        document.getElementById("community-count").innerText = usersData.community?.count ?? 0;
    }
    catch (err) {
        console.log('Error:', err);
    }
})();

// ========= SAVE USER =========
const saveUser = async (newUser) => {
    try {
        const response = await fetch(`${URL}/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        });
        if (!response.ok) {
            throw new Error('Error request');
        }
        const data = await response.json();
    }
    catch (err) {
        console.log('Error:', err);
    }
};
// ========= HANDLE FORM =========
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btnClicked = e.submitter;
    const targetUser = document.getElementById('target-user').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const occupation = document.getElementById('occupation').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const organization = document.getElementById('organization').value;
    if (btnClicked.getAttribute('id') == 'btn-submit') {
        const user = {
            targetUser: targetUser,
            city: city,
            email: email,
            occupation: occupation,
            phone: phone,
            address: address,
            organization: organization,
        }
        saveUser(user);
        // window.location.href = `/plataforma/app.html?userType=${targetUser}`
    };
    if (btnClicked.getAttribute('id') == 'btn-skip') {
        window.location.href = `/plataforma/app.html?userType=${targetUser}`
    };
});
