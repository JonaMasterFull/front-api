import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { GoproComponent } from './view/gopro/gopro.component';
import { AppleComponent } from './view/apple/apple.component';
import { CiscoComponent } from './view/cisco/cisco.component';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    GoproComponent,
    AppleComponent,
    CiscoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
