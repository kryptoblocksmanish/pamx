import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DBService } from '../../../modules/services/dbService.service';
import { CustomLogger } from '../../../modules/utils/CustomLogger';
declare var require: any;

@Component({
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  loadingIndicator = true;
  reorderable = true;
  constructor(private dbService: DBService) {

  }

  async ngOnInit() {
    this.getAllUsers();
  }

  onConnectClick(data) {
    CustomLogger.logString("aaaaaaaaaaaaaaa");
    CustomLogger.logStringWithObject("onConnectClick....", data);
    this.getAllUsers();
    alert("Remote connection will be made to: '" + data.address + "' for user: '" + data.username + "'");
  }

  async getAllUsers() {
    let result = await this.dbService.getAllUserProfiles().toPromise();
    CustomLogger.logStringWithObject("Result::::", result);
    this.source = result["data"];
  }

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

  source: any;
  settings = {
    columns: {
      login_name: {
        title: 'Login Name',
        filter: false
      },
      full_name: {
        title: 'Full Name',
        filter: false
      },
      last_modified: {
        title: 'Last Modifed',
        filter: false,
        type: 'date',
        valuePrepareFunction: (date) => {
          if (date) {
            return new DatePipe('en-US').transform(date, 'dd / MM / yyyy hh: mm');
          }
          return null;
        },
      },
      is_active: {
        title: 'Is Active',
        filter: false
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


}
