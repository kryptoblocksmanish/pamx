import { Component, OnInit } from "@angular/core";
import { CustomLogger } from "../../modules/utils/CustomLogger";

@Component({
    templateUrl: "./listAccessPrivileges.component.html"
})
export class ListAccessPrivilegesComponent implements OnInit {

    ngOnInit(){
       CustomLogger.logString("Inside ListAccessPrivilegesComponent") ;
    }
}