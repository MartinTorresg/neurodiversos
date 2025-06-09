import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MensajesService } from '../../../services/mensajes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private mensajesService: MensajesService
  ) {
    this.contactForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\+569\d{8}$/)
        ]
      ],
      plan: [''],
      message: [''],
      business_id: [1, Validators.required]
    });

    // ✅ Aquí: limpia el errorMessage si el usuario cambia algo del formulario
    this.contactForm.valueChanges.subscribe(() => {
      this.errorMessage = '';
    });
  }

  enviar() {
    if (this.contactForm.invalid) {
      this.errorMessage = 'Formulario inválido. Por favor completa todos los campos obligatorios.';
      return;
    }

    const formData = this.contactForm.value;

    this.mensajesService.enviarMensaje(formData).subscribe({
      next: (res) => {
        this.successMessage = res.message;
        this.errorMessage = ''; // ✅ Aquí: limpia el mensaje de error si todo salió bien
        this.contactForm.reset();
      },
      error: (err) => {
        this.successMessage = '';
        this.errorMessage = err.error?.error || 'Ocurrió un error al enviar el mensaje.';
      }
    });
  }
}
