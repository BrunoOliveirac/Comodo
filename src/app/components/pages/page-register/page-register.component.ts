import { Component, OnInit } from '@angular/core';
import { AuthService } from '../page-login/auth.service';
import { RegistroUsuario } from './registroUsuario';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.scss']
})
export class PageRegisterComponent implements OnInit {

  public registroUsuario: RegistroUsuario = new RegistroUsuario();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.registroUsuario = new RegistroUsuario();
  }

  Registrar(){
    this.authService.Registrar(this.registroUsuario);
  }

}
