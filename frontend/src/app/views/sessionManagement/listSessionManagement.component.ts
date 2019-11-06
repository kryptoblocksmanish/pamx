import { Component, OnInit } from "@angular/core";
import { CustomLogger } from "../../modules/utils/CustomLogger";

@Component({
    templateUrl: "./listSessionManagement.component.html"
})
export class ListSessionManagementComponent implements OnInit {

    ngOnInit(){
       CustomLogger.logString("Inside ListSessionManagementComponent") ;
    }
}