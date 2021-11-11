import { Component, OnInit } from '@angular/core';
import { IClient } from '../interfaces/iclient';
import { ClientsService } from '../services/clients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  client: IClient = {
    ragioneSociale: "",
    partitaIva: "",
    tipoCliente: "",
    email: "",
    pec: "",
    telefono: "",
    nomeContatto: "",
    cognomeContatto: "",
    telefonoContatto: "",
    emailContatto: "",
    indirizzoSedeOperativa: {
        via: "",
        civico: "",
        cap: "",
        localita: "",
        comune: {
            id: 1,
            nome: "",
            provincia: {
                id: 1,
                nome: "",
                sigla: ""
            }
        }
    },
    indirizzoSedeLegale: {
        via: "",
        civico: "",
        cap: "",
        localita: "",
        comune: {
            id: 1,
            nome: "",
            provincia: {
                id: 1,
                nome: "",
                sigla: ""
            }
        }
    },
    dataInserimento: "2019-06-01T08:11:01.911+00:00",
    dataUltimoContatto: "2021-03-24T21:32:06.375+00:00"
  };

  constructor(private clientservice: ClientsService, private route: ActivatedRoute) {
    this.route.params.subscribe(element => {
      let x = element['id'];
      if (x) {
        this.clientservice.getCliente(x).subscribe(response => this.client = response);
        console.log(x);
      }
    });
   }

  ngOnInit(): void {

  }

  // ngOnInit(): void {
  //   let x = this.route.snapshot.paramMap.get('id');
  //   if (x) {
  //     console.log(x)
  //     this.clientservice.getCliente(x).subscribe(response => console.log(response));
  //   }
  // }
}
