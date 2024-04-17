import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { BookingComponent } from './booking/booking.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';

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

{path: 'booking/:propiedadid',
component: BookingComponent},
{path: 'propiedades',
component: PropiedadesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
