import { Component, OnInit } from "@angular/core";
import { CustomLogger } from "../../modules/utils/CustomLogger";

@Component({
    templateUrl: "./listDisasterRecovery.component.html"
})
export class ListDisasterRecoveryComponent implements OnInit {

    ngOnInit(){
       CustomLogger.logString("Inside ListDisasterRecoveryComponent") ;
    }
}