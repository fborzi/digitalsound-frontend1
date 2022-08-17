import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorComponent } from './modules/administrador/administrador.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { QuienesComponent } from './modules/quienes/quienes.component';
import { SubrubrosComponent } from './modules/subrubros/subrubros.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { VentaMayoristaLoginComponent } from './modules/venta-mayorista-login/venta-mayorista-login.component';
import { VentaMayoristaSignUpComponent } from './modules/venta-mayorista-signup/venta-mayorista-signup.component';
import { VentaMayoristaComponent } from './modules/venta-mayorista/venta-mayorista.component';
import { LoginGuard } from './services/guards/login.guard';
import { ProductGuardService } from './services/guards/product-guard.service';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'quienes', component: QuienesComponent },
    { path: 'ventamayoristasignup', component: VentaMayoristaSignUpComponent, canActivate: [LoginGuard] },
    { path: 'ventamayoristalogin', component: VentaMayoristaLoginComponent, canActivate: [LoginGuard] },
    { path: 'contacto', component: ContactoComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'administrador', component: AdministradorComponent, canActivate: [ProductGuardService], data: { expectedRole: ['admin'] } },
    { path: 'subrubros', component: SubrubrosComponent },
    { path: 'ventamayorista', component: VentaMayoristaComponent, canActivate: [ProductGuardService], data: { expectedRole: ['admin', 'user'] } },
    { path: '**', redirectTo: '' , pathMatch: 'full'}
  ]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],//
  exports: [RouterModule],

})
export class AppRoutingModule { }
export const routingComponents = [  HomeComponent,
                                    ProductosComponent,
                                    QuienesComponent,
                                    SubrubrosComponent,
                                    UsuarioComponent,
                                    VentaMayoristaLoginComponent,
                                    VentaMayoristaSignUpComponent,
                                    VentaMayoristaComponent,
                                    AdministradorComponent,
                                    ContactoComponent,
                                    ProductGuardService
                                ]; 