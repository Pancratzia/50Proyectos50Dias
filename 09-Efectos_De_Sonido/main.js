const C4 = new Audio('sonidos/C4.mp3');
const D4 = new Audio('sonidos/D4.mp3');
const E4 = new Audio('sonidos/E4.mp3');
const F4 = new Audio('sonidos/F4.mp3');
const G4 = new Audio('sonidos/G4.mp3');
const A4 = new Audio('sonidos/A4.mp3');
const B4 = new Audio('sonidos/B4.mp3');
const Db4 = new Audio('sonidos/Db4.mp3');
const Eb4 = new Audio('sonidos/Eb4.mp3');
const Gb4 = new Audio('sonidos/Gb4.mp3');
const Ab4 = new Audio('sonidos/Ab4.mp3');
const Bb4 = new Audio('sonidos/Bb4.mp3');
console.log(C4);

const play_sonido = (audio) => {
    
    const clon  = audio.cloneNode();
    clon.play();
    setTimeout(() => (clon.volume = 0.8),400);
    setTimeout(() => (clon.volume = 0.6),800);
    setTimeout(() => (clon.volume = 0.4),1200);
    setTimeout(() => (clon.volume = 0.2),1600);
    setTimeout(() => (clon.volume = 0),2000);
};

const tecla_C4 = document.querySelector('.C4');
const play_C4 = () => {
    play_sonido(C4);
    tecla_C4.classList.add('activa');
    setTimeout(() => {(tecla_C4.classList.remove('activa')),200;});
}


tecla_C4.addEventListener('click', play_C4);

const tecla_D4 = document.querySelector('.D4');
const play_D4 = () => {
    play_sonido(D4);
    tecla_D4.classList.add('activa');
    setTimeout(() => {(tecla_D4.classList.remove('activa')),200;});
}

tecla_D4.addEventListener('click', play_D4);

const tecla_E4 = document.querySelector('.E4');
const play_E4 = () => {
    
    play_sonido(E4);
    tecla_E4.classList.add('activa');
    setTimeout(() => {(tecla_E4.classList.remove('activa')),200;});
}

tecla_E4.addEventListener('click', play_E4);

const tecla_F4 = document.querySelector('.F4');
const play_F4 = () => {
    play_sonido(F4);
    tecla_F4.classList.add('activa');
    setTimeout(() => {(tecla_F4.classList.remove('activa')),200;});
}

tecla_F4.addEventListener('click', play_F4);

const tecla_G4 = document.querySelector('.G4');
const play_G4 = () => {
    play_sonido(G4);
    tecla_G4.classList.add('activa');
    setTimeout(() => {(tecla_G4.classList.remove('activa')),200;});
}

tecla_G4.addEventListener('click', play_G4);

const tecla_A4 = document.querySelector('.A4');
const play_A4 = () => {
    
    play_sonido(A4);
    tecla_A4.classList.add('activa');
    setTimeout(() => {(tecla_A4.classList.remove('activa')),200;});
}

tecla_A4.addEventListener('click', play_A4);

const tecla_B4 = document.querySelector('.B4');
const play_B4 = () => {
    
    play_sonido(B4);
    tecla_B4.classList.add('activa');
    setTimeout(() => {(tecla_B4.classList.remove('activa')),200;});
}

tecla_B4.addEventListener('click', play_B4);

const tecla_Db4 = document.querySelector('.Db4');
const play_Db4 = () => {
    play_sonido(Db4);
    tecla_Db4.classList.add('activa');
    setTimeout(() => {(tecla_Db4.classList.remove('activa')),200;});
}
tecla_Db4.addEventListener('click', play_Db4);

const tecla_Eb4 = document.querySelector('.Eb4');
const play_Eb4 = () => {
    play_sonido(Eb4);
    tecla_Eb4.classList.add('activa');
    setTimeout(() => {(tecla_Eb4.classList.remove('activa')),200;});
}
tecla_Eb4.addEventListener('click', play_Eb4);

const tecla_Gb4 = document.querySelector('.Gb4');
const play_Gb4 = () => {
    play_sonido(Gb4);
    tecla_Gb4.classList.add('activa');
    setTimeout(() => {(tecla_Gb4.classList.remove('activa')),200;});
}
tecla_Gb4.addEventListener('click', play_Gb4);

const tecla_Ab4 = document.querySelector('.Ab4');
const play_Ab4 = () => {
    play_sonido(Ab4);
    tecla_Ab4.classList.add('activa');
    setTimeout(() => {(tecla_Ab4.classList.remove('activa')),200;});
}
tecla_Ab4.addEventListener('click', play_Ab4);

const tecla_Bb4 = document.querySelector('.Bb4');
const play_Bb4 = () => {
    
    play_sonido(Bb4);
    tecla_Bb4.classList.add('activa');
    setTimeout(() => {(tecla_Bb4.classList.remove('activa')),200;});

}
tecla_Bb4.addEventListener('click', play_Bb4);





