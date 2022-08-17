import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './services/interceptors/product-interceptor.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { QuienesComponent } from './modules/quienes/quienes.component';
import { VentaMayoristaSignUpComponent } from './modules/venta-mayorista-signup/venta-mayorista-signup.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { AdministradorComponent } from './modules/administrador/administrador.component';
import { RubrosComponent } from './modules/rubros/rubros.component';
import { SubrubrosComponent } from './modules/subrubros/subrubros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VentaMayoristaLoginComponent } from './modules/venta-mayorista-login/venta-mayorista-login.component';
import { VentaMayoristaComponent } from './modules/venta-mayorista/venta-mayorista.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations:[
    AppComponent,
    HomeComponent,
    ProductosComponent,
    QuienesComponent,
    VentaMayoristaLoginComponent,
    VentaMayoristaSignUpComponent,
    ContactoComponent,
    UsuarioComponent,
    AdministradorComponent,
    RubrosComponent,
    SubrubrosComponent,
    VentaMayoristaComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
