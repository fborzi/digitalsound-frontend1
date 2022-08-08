import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-venta-mayorista-signup',
  templateUrl: './venta-mayorista-signup.component.html',
  styleUrls: ['./venta-mayorista-signup.component.css']
})
export class VentaMayoristaSignUpComponent implements OnInit {

  formularioSignUp!: FormGroup;
  isLogged: boolean = false;
  nuevoUsuario!: Usuario;
  errorMessage : string = "";
  

  constructor(
    private formbuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formularioSignUp = this.formbuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]],
      empresa: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]]      
    })

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  guardarUsuario(){
    console.log(this.formularioSignUp.value);

    this.nuevoUsuario = new Usuario(this.formularioSignUp.value.nombre,
      this.formularioSignUp.value.apellido,
      this.formularioSignUp.value.dni,
      this.formularioSignUp.value.empresa,
      this.formularioSignUp.value.email,
      this.formularioSignUp.value.password,
      );
    this.authService.nuevoUsuario(this.nuevoUsuario).subscribe(
      data => {
        this.router.navigate(['/ventamayoristalogin']);
      },
      error => {
        this.errorMessage = error.error.message;
        console.log(error.error.message);
      }
    )
  }



}
