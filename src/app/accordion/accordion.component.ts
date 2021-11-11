import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IReceipts } from '../interfaces/ireceipts';
import { ReceiptsService } from '../services/receipts.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  
  recs: IReceipts[] = []
  
  constructor(private recservice: ReceiptsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      let x = element['id'];
      if (x) {
        this.recservice.getRecs(x).subscribe(response => this.recs = response.content);
      }
    });
  }
}