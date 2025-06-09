import { Component } from '@angular/core';
import { CompromisoComponent } from "../compromiso/compromiso.component";
import { ServiciosComponent } from "../servicios/servicios.component";
import { PlanesComponent } from "../planes/planes.component";
import { ComentariosComponent } from "../comentarios/comentarios.component";
import { ContactoComponent } from "../contacto/contacto.component";
import { EquipoComponent } from "../../../components/equipo/equipo.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { AgendarHoraComponent } from "../../../components/agendar-hora/agendar-hora.component";

@Component({
  selector: 'app-body',
  imports: [CompromisoComponent, ServiciosComponent, PlanesComponent, ComentariosComponent, ContactoComponent, EquipoComponent, FaqComponent, AgendarHoraComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  scrollToAnchor(anchor: string): void {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  

}
