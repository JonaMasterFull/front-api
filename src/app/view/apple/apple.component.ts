import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ListadoApple } from '../../model/apple';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  applelist:ListadoApple[] | undefined;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllApple().subscribe(data => {
      this.applelist = data;
    })
  }

  buscarProducto(termino:String){
    console.log(termino);
  }

}
