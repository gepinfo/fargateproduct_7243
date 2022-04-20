import { Component, OnInit } from '@angular/core';
import { CstudentService } from './cstudent.service';

@Component({
  selector: 'app-cstudent',
  templateUrl: './cstudent.component.html',
  styleUrls: ['./cstudent.component.scss'],
})

export class CstudentComponent implements OnInit {
    public formstudent = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        age: '',
    }

    constructor (
        private cstudentService: CstudentService,
    ) { }

    ngOnInit() {
        this.formstudent.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.cstudentService.GpCreate(this.formstudent).subscribe(data => {
            this.formstudent.name = ''
 	 	this.formstudent.age = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}