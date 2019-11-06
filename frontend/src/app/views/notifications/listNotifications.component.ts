import { Component, OnInit } from "@angular/core";
import { CustomLogger } from "../../modules/utils/CustomLogger";

@Component({
    templateUrl: "./ListNotifications.component.html"
})
export class ListNotificationsComponent implements OnInit {

    ngOnInit(){
       CustomLogger.logString("Inside ListNotifications Component") ;
    }
}