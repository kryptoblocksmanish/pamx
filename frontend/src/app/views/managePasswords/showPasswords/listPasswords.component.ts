import { Component, OnInit } from "@angular/core";
import { CustomLogger } from "../../../modules/utils/CustomLogger";

@Component({
    templateUrl: "./listPasswords.component.html"
})
export class ListPasswordsComponent implements OnInit {

    ngOnInit(){
       CustomLogger.logString("Inside ListPasswordsComponent") ;
    }
}