document.addEventListener('click', (event) => {
  if(!event.target.classList.contains('btn-popover')){
    let openPopover = document.querySelector('.pop-info[data-visible]');
    if(openPopover){
      openPopover.removeAttribute('data-visible');
    }
  }
});

const sideMenuLeft = document.getElementById('sideMenu-left');
sideMenuLeft.addEventListener('click', (event) => {
  // Manage  floating menu
  let clickedElement;
  if(event.target.tagName === 'H4'){
    clickedElement = event.target.parentElement;
  }
  else{
    clickedElement = event.target;
  }
  if(clickedElement.classList.contains('btn-sideMenuLeft')){
    let idTarget = clickedElement.getAttribute('data-target');
    clickedElement.toggleAttribute('data-active');
    document.getElementById(idTarget).toggleAttribute('data-visible');
  }
});

const sectionIndicadores = document.getElementById('section-indicadores')
sectionIndicadores.addEventListener('click', (event) => {
// Open Popover
  if(event.target.classList.contains('btn-popover')){
    let idTarget = event.target.getAttribute('data-target');
    document.getElementById(idTarget).toggleAttribute('data-visible', true);
    setTimeout(() => {
      document.getElementById(idTarget).toggleAttribute('data-visible', false);
    }, 6000);
  }

// Manage accordion
if(event.target.classList.contains('btn-accordion')){
  let idTarget = event.target.getAttribute('data-target');
  document.getElementById(idTarget).toggleAttribute('data-expanded');
}
});
const closeBtnIndicadores = document.getElementById('btn-closeIndicadores');
closeBtnIndicadores.addEventListener('click', () => {
  sectionIndicadores.toggleAttribute('data-visible', false);
});
const sectionOpciones= document.getElementById('section-opciones')
const closeBtnOpciones = document.getElementById('btn-closeOpciones');
closeBtnOpciones.addEventListener('click', () => {
  sectionOpciones.toggleAttribute('data-visible', false);
});
const selectDesaladora = document.getElementById('select-desaladoras');
selectDesaladora.addEventListener('change', (event) => {
  const desaladora = desaladoras[event.target.value];
  document.getElementById('desaladora-status').innerText = desaladora.status;
  document.getElementById('desaladora-capacity').innerText = desaladora.capacity;
  document.getElementById('desaladora-unit').innerText = desaladora.capacityUnit;
  document.getElementById('desaladora-use').innerText = desaladora.use;
  document.getElementById('desaladora-owner').innerText = desaladora.owner;
});
const closeBtnDesaladora = document.getElementById('btn-closeDesaladoras');
const sectionDesaladoras = document.getElementById('section-desaladoras');
closeBtnDesaladora .addEventListener('click', () => {
  sectionDesaladoras.toggleAttribute('data-visible', false);
});

