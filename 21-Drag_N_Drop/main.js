'use strict';

const lleno = document.querySelector('.lleno');
const vacios = document.querySelectorAll('.vacio');

lleno.addEventListener('dragstart', dragStart);
lleno.addEventListener('dragend', dragEnd);

for(const vacio of vacios){
    vacio.addEventListener('dragover', dragOver);
    vacio.addEventListener('dragenter', dragEnter);
    vacio.addEventListener('dragleave', dragLeave);
    vacio.addEventListener('drop', dragDrop);
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hover';
}

function dragLeave(){
    this.className = 'vacio';
}

function dragOver(e){
    e.preventDefault();
}

function dragDrop(){
    this.className = 'vacio';
    this.append(lleno);
}

function dragStart(){
    this.className += ' agarrado';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd(){
    this.className = 'lleno';
}