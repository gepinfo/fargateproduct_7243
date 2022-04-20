import { Component, OnInit } from '@angular/core';
import { BankdetailsService } from './bankdetails.service';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.scss'],
})

export class BankdetailsComponent implements OnInit {
    public bankform = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        bankac: '',
    }

    constructor (
        private bankdetailsService: BankdetailsService,
    ) { }

    ngOnInit() {
        this.bankform.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.bankdetailsService.GpCreate(this.bankform).subscribe(data => {
            this.bankform.name = ''
 	 	this.bankform.bankac = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}