import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  value = 0

  jumbo(value: number){
    this.value = value
  }
  
  constructor() { }
  
  ngOnInit(): void {}

}