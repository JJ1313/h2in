const btnsSideMenu = document.querySelectorAll('.btn');
btnsSideMenu.forEach(btn => {

  btn.addEventListener('click', (event) => {
    let idTarget =  event.target.getAttribute('data-target');
    let target = event.target;
    if(!idTarget){
      idTarget = event.target.parentElement.getAttribute('data-target');
      target = event.target.parentElement;
    }
    target.toggleAttribute('data-active');
    document.getElementById(idTarget).toggleAttribute('data-visible');
  });
});

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

const btnsClose = document.querySelectorAll('.btn-close');
btnsClose.forEach(btn => {
  btn.addEventListener('click', (event) => {
    const idTarget = event.target.getAttribute('data-target');
    const mainBtn = document.querySelector(`.btn[data-target=${idTarget}]`);
    if (mainBtn){
      mainBtn.toggleAttribute('data-active', false);
    }
    document.getElementById(idTarget).toggleAttribute('data-visible', false);
  });
});

const selectDesaladora = document.getElementById('select-desaladoras');
selectDesaladora.addEventListener('change', (event) => {
  document.getElementById("desaladora-status").innerText = desaladoras[selectDesaladora.value].status;
  document.getElementById("desaladora-capacity").innerText = desaladoras[selectDesaladora.value].capacity;
  document.getElementById("desaladora-unit").innerText = desaladoras[selectDesaladora.value].capacityUnit;
  document.getElementById("desaladora-use").innerText = desaladoras[selectDesaladora.value].use;
  document.getElementById("desaladora-owner").innerText = desaladoras[selectDesaladora.value].owner;
});

document.getElementById('toggle-communes').addEventListener("change", (event) => {
  toggleMarkers(communesMarkers, event.target.checked);
});
document.getElementById('toggle-desalination').addEventListener("change", (event) => {
  toggleMarkers(desalinationMarkers, event.target.checked);
});
