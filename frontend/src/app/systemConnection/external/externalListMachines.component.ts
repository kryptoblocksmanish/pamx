import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { CustomLogger } from '../../misc/utils/CustomLogger';
declare var require: any;
const data: any = require('./data.json');

@Component({
  templateUrl: './externalListMachines.component.html'
})
export class ExternalListMachinesComponent {
  editing = {};
  rows = [];
  temp = [...data];
  tableDataArr = [...data];

  loadingIndicator = true;
  reorderable = true;

  columns = [{ prop: 'status' }, { name: 'Username' }, { name: 'address' }, { name: 'platformid' }, { name: 'safe' }];

  constructor() {
  }

  onConnectClick(data) {
    CustomLogger.logStringWithObject("onConnectClick....", data);
    alert("Remote connection will be made to: '" + data.address + "' for user: '" + data.username + "'");
  }

}
