import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { approutingWithProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MeritosComponent } from './components/meritos/meritos.component';
import { AplicacionesWebComponent } from './components/aplicaciones-web/aplicaciones-web.component';
import { AplicacionesDeEscritorioComponent } from './components/aplicaciones-de-escritorio/aplicaciones-de-escritorio.component';
import { AplicacionesDeTerminalComponent } from './components/aplicaciones-de-terminal/aplicaciones-de-terminal.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MeritosComponent,
    AplicacionesWebComponent,
    AplicacionesDeEscritorioComponent,
    AplicacionesDeTerminalComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    approutingWithProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
