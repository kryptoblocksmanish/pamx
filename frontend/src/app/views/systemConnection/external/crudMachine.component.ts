import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { MachineProfile } from "../../../modules/models/MachineProfile.model";
import { CustomLogger } from "../../../modules/utils/CustomLogger";
import { DBService } from "../../../modules/services/dbService.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: "./crudMachine.component.html"
})
export class CRUDMachineComponent implements OnInit {

    machineForm: FormGroup;
    machineProfile: MachineProfile;

    ngOnInit() {
        this.machineForm = new FormGroup({
            username: new FormControl(),
            password: new FormControl(),
            address: new FormControl(),
            platform_id: new FormControl(),
            safe: new FormControl()
        });

        this.machineProfile = new MachineProfile();
        this.machineProfile.username = "tim1";
        this.machineProfile.password = "123";
        this.machineProfile.address = "12.56.478.2";
        this.machineProfile.platform_id = "PLAT_1";
        this.machineProfile.safe = "YES";


        this.machineForm.setValue(this.machineProfile);
    }

    constructor(private dbService: DBService, private router:Router) {
    }

    async onClickSave() {
        this.machineProfile = this.machineForm.value;
        CustomLogger.logStringWithObject("New machine will be added...", this.machineProfile);
        try {
            let result = await this.dbService.addMachineProfile(this.machineProfile).toPromise();
            CustomLogger.logStringWithObject("result got from db:", result);
            alert("Machine added successfully...");
        } catch (err) {
            CustomLogger.logStringWithObject("error from db:", err.error.message);
            alert("Error:::" + err.error.message);
        }
        this.router.navigate(["externalList"]);
    }

    onClickCancel() {

    }

}