import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    
    const menu: any = document.querySelector('.menu')
    const listItem: any = document.querySelector('.listItem')

    listItem.addEventListener('click', function(){
      menu.classList.remove('show')
   })
   
  }

}
