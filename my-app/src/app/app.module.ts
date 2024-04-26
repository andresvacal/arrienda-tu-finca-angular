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
@NgModule({
  declarations: [
    AppComponent,
    PropiedadesComponent,
    PropiedadCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    HttpClientModule,
    JsonPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
