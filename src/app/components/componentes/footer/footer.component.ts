import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../pages/page-login/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  mostrarMenu: boolean = false;
  
  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
       
   this.authService.mostrarMenuEmitter.subscribe(
     (mostrar: boolean) => this.mostrarMenu = mostrar);
  }


}
