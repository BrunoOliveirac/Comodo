import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { RegistroUsuario } from '../page-register/registroUsuario';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  Registrar(registroUsuario: RegistroUsuario) {
    throw new Error('Method not implemented.');
  }

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  Logar(usuario: Usuario){
    if(usuario.email === 'admin@admin.com' && usuario.senha === 'admin'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/home']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioAutenticacao(){
    return this.usuarioAutenticado;
  }

}
