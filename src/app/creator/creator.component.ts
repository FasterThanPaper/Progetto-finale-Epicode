import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from '../interfaces/iclient';
import { Comuni } from '../interfaces/icomuni';
import { Province } from '../interfaces/iprovince';
import { ClientsService } from '../services/clients.service';
import { ComuniService } from '../services/comuni.service';
import { ProvincieService } from '../services/provincie.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

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
  }

  comuni: Comuni[] = []

  province: Province[] = []

  clientType: string[] = []

  constructor(
    private clientService: ClientsService,
    private comuniService: ComuniService,
    private provinceService: ProvincieService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id) {
        this.clientService.getCliente(params.id).subscribe(response => this.client = response);
      }
    })
    this.comuniService.getAllComuni().subscribe(response => this.comuni = response.content);
    this.provinceService.getAllProvince().subscribe(response => this.province = response.content);
    this.clientService.getTipoCliente().subscribe(response => this.clientType = response);
  }

  nuovoContatto () {
    if (!this.client.id) {
      console.log("Cliente Aggiunto");
      this.clientService.addCliente(this.client).subscribe(response => console.log(response));
    } 
    else {
      this.clientService.updateClient(this.client).subscribe(response => console.log(response));
    } this.router.navigate(['reader']);
  }
}
