import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { BookingComponent } from './booking/booking.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { LoginComponent } from './login/login.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReservacionDetailComponent } from './reservacion-detail/reservacion-detail.component';
import { PagoComponent } from './pago/pago.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
{path: 'home',
component: HomeComponent,
},
{path: 'buscar',
component: BuscarComponent},

{path: 'login',
component: LoginComponent},

{path: 'booking/:propiedadid',
component: BookingComponent},

{path: 'reservaciones',
component: ReservacionesComponent},

{path: 'propiedades',
component: PropiedadesComponent},

{path: 'perfil',
component: PerfilComponent},

{path: 'Reserva/:idSolicitud',
component: ReservacionDetailComponent},

{path: 'Reserva/:idSolicitud/:idArrendador/:idArrendatario',
component: PagoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
