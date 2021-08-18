import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../pages/page-login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  mostrarMenu: boolean = false;
  
  constructor(private router: Router, private authService: AuthService) {}
  
  ngOnInit(): void {
    
  //   const menu: any = document.querySelector('.menu')
  //   const listItem: any = document.querySelector('.listItem')

  //   listItem.addEventListener('click', function(){
  //     menu.classList.remove('show');
  //  })

    this.authService.mostrarMenuEmitter.subscribe(
     (mostrar: boolean) => this.mostrarMenu = mostrar);
  }

}
