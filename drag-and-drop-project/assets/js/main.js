
let cards = document.querySelectorAll('.card');
let dropzones = document.querySelectorAll('.dropzone')


function dragStart() {
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'));

  this.classList.add('is-dragging');
}

function dragging() {
  console.log('is dragging');
}

function dragEnd() {
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'));

  this.classList.remove('is-dragging');

}


cards.forEach((card) => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('drag', dragging);
  card.addEventListener('dragend', dragEnd);
})


dropzones.forEach( dropzone => {
  dropzone.addEventListener('dragenter', dragenter);
  dropzone.addEventListener('dragover', dragover);
  dropzone.addEventListener('dragleave', dragleave);
  dropzone.addEventListener('drop', drop);
})

function dragenter() {
  
}

function dragover() {
  this.classList.add('over');

  
  //get card being dragged
  const cardBeingDragged = document.querySelector('.is-dragging');

  //this = dropzone // putting dragging card on dropzone
  this.appendChild(cardBeingDragged);
}

function dragleave() {
  console.log('saiu')
  this.classList.remove('over');
}

function drop() {
  console.log('soltou')
}

