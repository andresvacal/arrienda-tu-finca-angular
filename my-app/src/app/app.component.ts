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

  constructor(private propSrv : PropiedadService) {


  }
  onRegister() {
    this.propSrv.registrarUsuario(this.registerObj).subscribe((res: any) => {
      if (res == null) {
          alert('Usuario registrado');
          console.log(res);
          this.closeRegister();
        // Handle other status codes if needed
        alert('Error: ' + res.statusText);
      }
      } );
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
  this.propSrv.loginUser(this.registerObj).subscribe((res: any) => {
    if (res == null) {
      alert('Login exitoso');
      localStorage.setItem('arrUsuario', JSON.stringify(res.data));
      console.log(res);
      this.closeLogin();
  }else{
    alert('Error: ' + res.statusText);
  }});
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