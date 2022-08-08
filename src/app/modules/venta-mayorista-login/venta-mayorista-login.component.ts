import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/models/usuariologin';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-venta-mayorista-login',
  templateUrl: './venta-mayorista-login.component.html',
  styleUrls: ['./venta-mayorista-login.component.css']
})
export class VentaMayoristaLoginComponent implements OnInit {

  formularioLogin!: FormGroup;
  isLogged: boolean = false;
  isLoginFail: boolean = false;
  usuarioLogin!: UsuarioLogin;
  username: string = "";
  password: string = "";
  roles: string[] = [];
  errorMessage: string = "";
  rol: string = "ROLE_ADMIN";

  constructor(
    public formbuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formularioLogin = this.formbuilder.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      username:['', [Validators.required]],
    });

    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.username = this.tokenService.getUserName()!;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  login(){
    this.usuarioLogin = new UsuarioLogin(this.formularioLogin.value.username, this.formularioLogin.value.password);

    // let permisosRequeridos = this.roles.filter(rol => rol === "ROLE_VENTA_MAYORISTA");

    //var rol = "ROLE_ADMIN";
    let permisosRequeridos = this.roles;    

    let tienePermiso = this.roles.some(rol => permisosRequeridos.includes(rol));
                        // .susPermisosArray
                        // .some(p=> permisosRequeridos.includes(p) )

    this.authService.login(this.usuarioLogin).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;

        console.log(tienePermiso);
      
      //Aqui puede ir un mensaje de que no tiene permiso
      //if(!tienePermiso) this.router.navigate(["/miPaginaGeneral"])  


        // console.log(Array.isArray(this.roles));
        // console.log(this.roles)
        // console.log(data.authorities.includes("ROLE_ADMIN"));
        // console.log(data.authorities);

        if(this.roles.includes(this.rol)){  //!tienePermiso
           this.router.navigate(['/administrador']);
         }else{
           this.router.navigate(['/ventamayorista']);
         }
      },
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
      });

    console.log(this.formularioLogin.value);
  }


}
