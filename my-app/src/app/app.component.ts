import { Component } from '@angular/core';
import { PropiedadService } from './services/propiedad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  registerObj: any = {
  "nombres": "",
  "apellidos": "",
  "correoElectronico": "",
  "telefono": "",
  "password": "",
  };
  loginObj: any = {
    "nombres": "11",
    "apellidos": "11",
    "correoElectronico": "",
    "telefono": "111",
    "password": "",
    };
    loggedUser: any;
  constructor(private propSrv : PropiedadService) {

    const local = localStorage.getItem('UsuarioArriendaTuFinca');
    if (local != null) {
      this.loggedUser = JSON.parse(local);
    }
  }
  onRegister() {
    this.propSrv.registrarUsuario(this.registerObj).subscribe((res: any) => {
      if (res == null) {
          alert('Usuario registrado');
          console.log(res);
          this.closeRegister();
          this.loggedUser = res.data;
          alert('Error: ' + res.statusText);
      }
      } );
  }
  logoff() {
    localStorage.removeItem('UsuarioArriendaTuFinca');
    this.loggedUser = undefined;
  }
  openRegister() {
    const model = document.getElementById('registerModal'); 
    if(model != null) {
        model.style.display = 'block';
    }
}
closeRegister() {
  const model = document.getElementById('registerModal'); 
  if(model != null) {
    model.style.display = 'none';
  }
}
onlogin(){
  debugger;
  this.propSrv.loginUser(this.loginObj).subscribe((res: any) => {
    if (res !== null) { 
        alert('Login exitoso');
        localStorage.setItem('UsuarioArriendaTuFinca', JSON.stringify(res));
        console.log(res);
        this.loggedUser = res.data;
        this.closeLogin();

    } else {
        alert('Error: ' + res.statusText);
    }
});
}

openLogin() {
  const model = document.getElementById('loginModal'); 
  if(model != null) {
      model.style.display = 'block';
  }
}
closeLogin() {

const model = document.getElementById('loginModal'); 
if(model != null) {
  model.style.display = 'none';
}
}
}