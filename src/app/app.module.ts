import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParteAltaComponent } from './parte-alta/parte-alta.component';
import { ParteMediaComponent } from './parte-media/parte-media.component';
import { ParteBajaComponent } from './parte-baja/parte-baja.component';
import { BuscadorComponent } from './parte-alta/buscador/buscador.component';
import { PortaOcularesComponent } from './parte-alta/porta-oculares/porta-oculares.component';
import { OcularComponent } from './parte-alta/ocular/ocular.component';
import { TuboComponent } from './parte-alta/tubo/tubo.component';
import { MonturaComponent } from './parte-media/montura/montura.component';
import { ContaPesoComponent } from './parte-media/conta-peso/conta-peso.component';
import { BandejaPortaOcularesComponent } from './parte-baja/bandeja-porta-oculares/bandeja-porta-oculares.component';
import { TripodeComponent } from './parte-baja/tripode/tripode.component';

@NgModule({
  declarations: [
    AppComponent,
    ParteAltaComponent,
    ParteMediaComponent,
    ParteBajaComponent,
    BuscadorComponent,
    PortaOcularesComponent,
    OcularComponent,
    TuboComponent,
    MonturaComponent,
    ContaPesoComponent,
    BandejaPortaOcularesComponent,
    TripodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
