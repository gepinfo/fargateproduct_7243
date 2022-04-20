import { Component, OnInit } from '@angular/core';
import { CempformService } from './cempform.service';

@Component({
  selector: 'app-cempform',
  templateUrl: './cempform.component.html',
  styleUrls: ['./cempform.component.scss'],
})

export class CempformComponent implements OnInit {
    public empform = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        empid: '',
    }

    constructor (
        private cempformService: CempformService,
    ) { }

    ngOnInit() {
        this.empform.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.cempformService.GpCreate(this.empform).subscribe(data => {
            this.empform.name = ''
 	 	this.empform.empid = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}