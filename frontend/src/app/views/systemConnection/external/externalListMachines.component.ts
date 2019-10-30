import { Component, OnInit } from '@angular/core';
import { DBService } from '../../../modules/services/dbService.service';
import { CustomLogger } from '../../../modules/utils/CustomLogger';
import { MiscService } from '../../../modules/services/miscService.service';
declare var require: any;
const data: any = require('./data.json');

@Component({
  templateUrl: './externalListMachines.component.html'
})
export class ExternalListMachinesComponent implements OnInit {
  editing = {};
  rows = [];
  temp = [...data];
  // tableDataArr = [...data];

  loadingIndicator = true;
  reorderable = true;

  columns = [{ prop: 'status' }, { name: 'Username' }, { name: 'address' }, { name: 'platformid' }, { name: 'safe' }];

  constructor(private dbService: DBService, private miscService: MiscService) {
  }

  async ngOnInit() {
    let result = await this.dbService.getAllMachineProfiles().toPromise();
    this.source = result["data"];

    //to be deleted
    try {
      let r1 = await this.miscService.getKeycloakToken().toPromise();
      CustomLogger.logStringWithObject("r1:::::", r1);
    } catch (error) {
      CustomLogger.logError(error.message);
      CustomLogger.logError(error);
    }

  }

  source: any;
  settings = {
    // selectMode: 'multi',
    columns: {
      status: {
        title: 'Status',
        filter: false
      },
      username: {
        title: 'User Name',
        filter: false
      },
      address: {
        title: 'Address',
        filter: false
      }, platformid: {
        title: 'Platform ID',
        filter: false
      }, safe: {
        title: 'Safe',
        filter: false,
        type: 'html'
      }

    },
    add: {
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
      saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
      cancelButtonContent: '<i class="ti-close text-danger"></i>',
      confirmDelete: true
    }
  };

  onDeleteConfirm(event) {
    CustomLogger.logStringWithObject("onDeleteConfirm:", event);
  }
  onCreateConfirm(event) {
    CustomLogger.logStringWithObject("onCreateConfirm:", event);
  }
  onEditConfirm(event) {
    CustomLogger.logStringWithObject("onEditConfirm:", event);
    CustomLogger.logStringWithObject("New Data:", event.newData);
    event.confirm.resolve();
  }
}
