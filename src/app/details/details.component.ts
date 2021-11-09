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
    ragioneSociale: '',
    partitaIva: '',
    tipoCliente: '',
    email: '',
    pec: '',
    telefono: '',
    nomeContatto: '',
    cognomeContatto: '',
    telefonoContatto: '',
    emailContatto: '',
    indirizzoSedeOperativa: {
      id: undefined,
      via: '',
      civico: '',
      cap: '',
      localita: '',
      comune: {
        id: undefined,
        nome: '',
        provincia: {
          id: undefined,
          nome: '',
          sigla: ''
        }
      }
    },
    indirizzoSedeLegale: {
      id: undefined,
      via: '',
      civico: '',
      cap: '',
      localita: '',
      comune: {
        id: undefined,
        nome: '',
        provincia: {
          id: undefined,
          nome: '',
          sigla: ''
        }
      }
    },
    dataInserimento: '',
    dataUltimoContatto: '',
    fatturatoAnnuale: 0
  };

  constructor(private clientservice: ClientsService, private route: ActivatedRoute) {
    this.route.params.subscribe(element => {
      let x = element['id'];
      if (x) {
        this.clientservice.getCliente(x).subscribe(response => this.client = response);
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
