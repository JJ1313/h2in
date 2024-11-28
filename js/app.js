document.addEventListener('click', (event) => {
  if(!event.target.classList.contains('btn-popover')){
    let openPopover = document.querySelector('.pop-info[data-visible]');
    if(openPopover){
      openPopover.removeAttribute('data-visible');
    }
  }
});

const infoDiv = document.getElementById('infoDiv');
infoDiv.addEventListener('click', (event) => {
  // Open Popover
  if(event.target.classList.contains('btn-popover')){
    let idTarget = event.target.getAttribute('data-target');
    document.getElementById(idTarget).toggleAttribute('data-visible', true);
  }
  // Manage accordion 
  if(event.target.classList.contains('btn-accordion')){
    let idTarget = event.target.getAttribute('data-target');
    document.getElementById(idTarget).toggleAttribute('data-opened');
    
}
});

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', () => {
  infoDiv.toggleAttribute('data-visible', false);
});


