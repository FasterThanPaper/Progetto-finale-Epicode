import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from '../interfaces/iclient';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

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
  }

  constructor(
    private clientService: ClientsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
        this.clientService.getCliente(params.id).subscribe(response => this.client = response);
      }
    })
  }

  nuovoContatto () {
    if (!this.client.id) {
      console.log("Cliente Aggiunto")
      this.clientService.addCliente(this.client).subscribe(response => console.log(response))
    }
  }

}
