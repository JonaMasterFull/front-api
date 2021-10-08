import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListadogoPro } from '../../model/gopro';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-gopro',
  templateUrl: './gopro.component.html',
  styleUrls: ['./gopro.component.css']
})
export class GoproComponent implements OnInit {

  goprolist:ListadogoPro[] | undefined;


  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllgoPro().subscribe(data => {
      this.goprolist = data;
    })
  }

}
