import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  templateUrl: './externalListMachines.component.html'
})
export class ExternalListMachinesComponent implements OnInit{
    
    ngOnInit() {
        console.log("List of external machines....");
    }

    
}
