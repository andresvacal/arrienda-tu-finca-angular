import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonPipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropiedadCardComponent} from './reusableComponents/propiedad-card/propiedad-card.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; // Import this
import { BookingComponent } from './booking/booking.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReservacionDetailComponent } from './reservacion-detail/reservacion-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    PropiedadesComponent,
    PropiedadCardComponent,
    HomeComponent,
    BookingComponent,
    ReservacionesComponent,
    PerfilComponent,
    ReservacionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    HttpClientModule,
    JsonPipe,
    BrowserAnimationsModule, // Add this
    BsDatepickerModule.forRoot() // Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
