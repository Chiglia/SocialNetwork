import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  register() {
    const formBox = document.querySelector('.form-box');
    if (formBox) {
      formBox.classList.remove('register-active');
      formBox.classList.add('login-active');

      const forms = document.querySelectorAll('.input-group');
      forms.forEach(form => {
        form.classList.remove('form-right'); // Rimuovi la classe form-right
        form.classList.add('form-left'); // Aggiungi la classe form-left
      });
    }
  }

  login() {
    const formBox = document.querySelector('.form-box');
    if (formBox) {
      formBox.classList.remove('login-active'); // Rimuovi questa classe se stai passando alla registrazione
      formBox.classList.add('register-active'); // Aggiungi questa classe per mostrare il form di registrazione

      const forms = document.querySelectorAll('.input-group');
      forms.forEach(form => {
        form.classList.remove('form-left'); // Rimuovi la classe form-left
        form.classList.add('form-right'); // Aggiungi la classe form-right
      });
    }
  }
}
