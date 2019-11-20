import { Input, Component } from "@angular/core";
import { Router } from "@angular/router";
import { ViewCell } from "ng2-smart-table";

@Component({
    template: `
      Hi.. <button (click)="navigateToSomeRoute()"> BBBB {{ value }}</button>
    `,
  })
  export class CustomRendererComponent implements ViewCell {
    constructor(private router: Router) { 
        console.log("Inside... Customrenderer");
        
    }
    renderValue: string;
    @Input() value: string; // This will be the value passed from the pathID column (see next code block)
    @Input() rowData: any;
    ngOnInit() {
    }
  
    navigateToSomeRoute() {
      this.router.navigate(['/some/path', this.value]); // so will go to /some/path/{{ value }}
    }
  }