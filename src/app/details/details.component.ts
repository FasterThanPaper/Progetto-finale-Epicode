import { Component, OnInit } from '@angular/core';
import { IClient } from '../interfaces/iclient';
import { ClientsService } from '../services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit { 

  client!: IClient;

  constructor(private clientservice: ClientsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id) {
        this.clientservice.getCliente(element.id).subscribe(response => console.log(response));
      }
    })
  }
}
