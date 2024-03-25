import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login() {
    const formBox = document.querySelector('.input-group');
    const btn = document.getElementById('btn');
    if (formBox && btn) {
        formBox.classList.add('form-right');
        formBox.classList.remove('form-left');
        btn.classList.add('button-right');
        btn.classList.remove('button-left');
    }
}

  register() {
    const formBox = document.querySelector('.input-group');
    const btn = document.getElementById('btn');
    if (formBox && btn) {
        formBox.classList.add('form-left');
        formBox.classList.remove('form-right');
        btn.classList.add('button-left');
        btn.classList.remove('button-right');
    }
}



  submitLogin() {
    // Handle login form submission logic here
  }

  submitRegister() {
    // Handle registration form submission logic here
  }

}
