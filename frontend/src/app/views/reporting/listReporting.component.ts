import { Component, OnInit } from "@angular/core";
import { CustomLogger } from "../../modules/utils/CustomLogger";

@Component({
    templateUrl: "./listReporting.component.html"
})
export class ListReportingComponent implements OnInit {

    ngOnInit(){
       CustomLogger.logString("Inside ListReporting Component") ;
    }
}