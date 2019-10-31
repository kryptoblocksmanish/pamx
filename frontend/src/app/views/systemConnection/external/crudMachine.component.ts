import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { MachineProfile } from "../../../modules/models/MachineProfile.model";

@Component({
    templateUrl : "./crudMachine.component.html"
})
export class CRUDMachineComponent implements OnInit{

    machineForm: FormGroup;
    machineProfile: MachineProfile;

    ngOnInit(){
        this.machineForm = new FormGroup({
            username: new FormControl(),
            address: new FormControl()
        });

        this.machineProfile = new MachineProfile();
        this.machineProfile.username = "aaaaaaaaa";
        this.machineProfile.address = "bbbbbb";

        this.machineForm.setValue(this.machineProfile);
    }

    constructor(){

    }

}