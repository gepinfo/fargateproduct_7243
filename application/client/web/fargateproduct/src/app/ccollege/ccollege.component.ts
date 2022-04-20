import { Component, OnInit } from '@angular/core';
import { CcollegeService } from './ccollege.service';

@Component({
  selector: 'app-ccollege',
  templateUrl: './ccollege.component.html',
  styleUrls: ['./ccollege.component.scss'],
})

export class CcollegeComponent implements OnInit {
    public datacollege = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }

    constructor (
        private ccollegeService: CcollegeService,
    ) { }

    ngOnInit() {
        this.datacollege.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.ccollegeService.GpCreate(this.datacollege).subscribe(data => {
            this.datacollege.name = ''
 	 	this.datacollege.email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}