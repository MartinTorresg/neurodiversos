import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent {
  currentIndex = 0;
  translateValue = 0;
  itemsPerSlide = 1;

  teamMembers = [
    {
      image: 'beatrizMancilla.jpg',
      color: '#e3193b',
      specialty: 'Terapeuta Ocupacional',
      name: 'Dra. Beatriz Mancilla',
      description: 'Especialista en Trastorno del Espectro Autista y TDAH...',
      degree: 'Magíster en Neuropsicología',
    },
    {
      image: 'costianBarraza.jpg',
      color: '#2eaae5',
      specialty: 'Psicólogo',
      name: 'Costian Barraza',
      description: 'Especialista en integración sensorial...',
      degree: 'Diplomado en Integración Sensorial',
    },
    {
      image: 'cristinaGomez.jpg',
      color: '#f6c400',
      specialty: 'Fonoaudióloga',
      name: 'Cristina Gómez',
      description: 'Especialista en trastornos del lenguaje...',
      degree: 'Magíster en Trastornos del Lenguaje',
    },
    {
      image: 'evelynParada.jpg',
      color: '#4d3ca5',
      specialty: 'Terapeuta Ocupacional',
      name: 'Dr. Evelyn Parada',
      description: 'Especialista en adolescentes y adultos...',
      degree: 'Doctor en Psicología Clínica',
    },
    {
      image: 'fernandaAcevedo.jpg',
      color: '#951c8d',
      specialty: 'Terapeuta Ocupacional',
      name: 'Fernanda Acevedo',
      description: 'Especialista en intervención temprana...',
      degree: 'Especialista en Educación Inclusiva',
    },
    {
      image: 'javieraMenese.jpg',
      color: '#2eaae5',
      specialty: 'Psicóloga',
      name: 'Javiera Meneses',
      description: 'Especialista en comunicación aumentativa...',
      degree: 'Especialista en Comunicación Aumentativa',
    },
    {
      image: 'javieraParra.jpg',
      color: '#2eaae5',
      specialty: 'Psicóloga',
      name: 'Javiera Parra',
      description: 'Especialista en comunicación aumentativa...',
      degree: 'Especialista en Comunicación Aumentativa',
    },
    {
      image: 'fernandaCeballos.jpg',
      color: '#2eaae5',
      specialty: 'Fonoaudióloga',
      name: 'Fernanda Ceballos',
      description: 'Especialista en comunicación aumentativa...',
      degree: 'Especialista en Comunicación Aumentativa',
    }
  ];

  get indicators() {
    return Array(Math.ceil(this.teamMembers.length / this.itemsPerSlide)).fill(0);
  }

  ngOnInit() {
    this.calculateItemsPerSlide();
    window.addEventListener('resize', () => this.calculateItemsPerSlide());
  }

  calculateItemsPerSlide() {
    const width = window.innerWidth;
    if (width >= 1024) {
      this.itemsPerSlide = 3;
    } else if (width >= 768) {
      this.itemsPerSlide = 2;
    } else {
      this.itemsPerSlide = 1;
    }
    this.goToSlide(this.currentIndex); // recalcula posición
  }

  nextSlide() {
    if (this.currentIndex < this.indicators.length - 1) {
      this.currentIndex++;
      this.updateTranslateValue();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTranslateValue();
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateTranslateValue();
  }

  updateTranslateValue() {
    this.translateValue = -this.currentIndex * 100;
  }
}
