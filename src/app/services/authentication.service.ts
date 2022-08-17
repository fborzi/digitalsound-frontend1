import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDTO } from '../models/jwtdto';
import { Usuario } from '../models/usuario';
import { UsuarioLogin } from '../models/usuariologin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authURL = environment.authURL;

  constructor(private httpClient: HttpClient) { }

  public register(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + '/new', usuario);
  }

  public login(usuarioLogin: UsuarioLogin): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + '/login', usuarioLogin);
  }

}
