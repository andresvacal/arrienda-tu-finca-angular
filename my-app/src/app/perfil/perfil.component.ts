import { Component, OnInit } from '@angular/core';
import { PropiedadService } from '../services/propiedad.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  loggedUser: any = {    
};
  userId!: number;

  constructor(private propiedadService: PropiedadService) {
    const local = localStorage.getItem('UsuarioArriendaTuFinca');
    if (local) {
      this.loggedUser = JSON.parse(local);
      console.log('Logged User:', this.loggedUser);  // Check the structure of loggedUser
      this.userId = this.loggedUser.idArrendador;
      console.log('User ID:', this.userId);  
    }
  }
  
  ngOnInit(): void {
    if (this.userId) {
      this.loadUserProfile(this.userId);
    }
  }

  loadUserProfile(id: number) {
    this.propiedadService.getUserById(id).subscribe((userData: any) => {
      this.loggedUser = userData; 
      console.log(userData);
    }, error => {
      console.error('Failed to load user data:', error);
    });
  }

}