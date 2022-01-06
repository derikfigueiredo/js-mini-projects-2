
let cards = document.querySelectorAll('.card');
let dropzones = document.querySelectorAll('.dropzone')


function dragStart() {
  console.log('começou');
  
}

function dragging() {
}

function dragEnd() {
}


cards.forEach((card) => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('drag', dragging);
  card.addEventListener('dragend', dragEnd)
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
  console.log('dragover')
}

function dragleave() {
  console.log('saiu')
}

function drop() {
  console.log('soltou')
}

