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

  constructor(private propSrv : PropiedadService) {}
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

}