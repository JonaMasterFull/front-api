import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListadoCisco } from '../../model/cisco';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cisco',
  templateUrl: './cisco.component.html',
  styleUrls: ['./cisco.component.css']
})
export class CiscoComponent implements OnInit {

  ciscolist:ListadoCisco[] | undefined;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllCisco().subscribe(data => {
      this.ciscolist = data;
    })
  }

}
