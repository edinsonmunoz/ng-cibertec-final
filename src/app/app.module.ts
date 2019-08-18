import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavComponent } from './components/common/nav/nav.component';

// Agregando routing
import {RouterModule} from '@angular/router';
// Routing
import {routes} from './app.routing';

// Agregando modulo
import { UsersModule } from './views/users/users.module';

// HttpClient
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    UsersModule, // Agregando modulo
    RouterModule.forRoot(routes), //Agregar por routing
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
