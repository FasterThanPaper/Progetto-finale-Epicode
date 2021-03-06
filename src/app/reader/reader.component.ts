import { Component, OnInit } from '@angular/core';
import { IClient } from '../interfaces/iclient';
import { ClientsService } from '../services/clients.service';


@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})

export class ReaderComponent implements OnInit {

  clients: IClient[] = [];

  constructor(private clientservice: ClientsService) { }

  ngOnInit(): void {
    this.clientservice.getAllClienti().subscribe(response => this.clients = response.content);
    console.log(this.clients);
  }

  removeClient(item: IClient): void {
    this.clientservice.deleteClient(item).subscribe(response => {
      this.clients = this.clients.filter(element => element.id !== item.id);
    })
  }
}