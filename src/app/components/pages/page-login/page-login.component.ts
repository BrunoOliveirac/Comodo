import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/pages/page-login/auth.service';
import { Usuario } from 'src/app/components/pages/page-login/usuario';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  mostrarMenu: boolean = false;
  public usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  Logar(){
    this.authService.Logar(this.usuario);
  }

}