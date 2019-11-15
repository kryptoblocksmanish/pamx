import { Component, OnInit } from '@angular/core';
import { DBService } from '../../../modules/services/dbService.service';
import { CustomLogger } from '../../../modules/utils/CustomLogger';
import { MiscService } from '../../../modules/services/miscService.service';
import { Router } from '@angular/router';
import { NetworkService } from '../../../modules/services/network/networkService.service';
declare var require: any;
const data: any = require('./data.json');

@Component({
  templateUrl: './listMachines.component.html'
})
export class ListMachinesComponent implements OnInit {
  editing = {};
  rows = [];
  temp = [...data];
  // tableDataArr = [...data];

  loadingIndicator = true;
  reorderable = true;

  columns = [{ prop: 'status' }, { name: 'Username' }, { name: 'address' }, { name: 'platform_id' }, { name: 'safe' }];

  constructor(private dbService: DBService, private miscService: MiscService, private router: Router, private networkService:NetworkService) {
  }

  async ngOnInit() {
    let result = await this.dbService.getAllMachineProfiles().toPromise();
    CustomLogger.logStringWithObject("result:::::", result);
    this.source = result["data"];

    // //to be deleted
    // try {
    //   let r1 = await this.miscService.getKeycloakToken().toPromise();
    //   CustomLogger.logStringWithObject("r1:::::", r1);
    // } catch (error) {
    //   CustomLogger.logError(error.message);
    //   CustomLogger.logError(error);
    // }

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
      },
      platform_id: {
        title: 'Platform ID',
        filter: false
      },
      safe: {
        title: 'Link',
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

  async onDeleteConfirm(event) {
    CustomLogger.logStringWithObject("onDeleteConfirm:", event);
    this.miscService.confirmDialogBox('Please confirm..', 'Do you really want to delete this machine ?')
      // .then(async function (confirmed) {
      //   console.log('User confirmed:', confirmed);
      //   if (confirmed) {
      //     //delete data from table;
      //     try {

      //       let result = await this.dbService.deleteMachineProfile(event.newData).toPromise();
      //       CustomLogger.logStringWithObject("onDeleteConfirm:deleteMachineProfile:", result);
      //     } catch (err) {
      //       CustomLogger.logStringWithObject("onDeleteConfirm:deleteMachineProfile:error:", err);
      //     }
      //   }

      // })
      .then(async (confirmed) => {
        console.log('User confirmed:', confirmed);
        if (confirmed) {
          //delete data from table;
          try {
            let result = await this.dbService.deleteMachineProfile(event.data).toPromise();
            CustomLogger.logStringWithObject("onDeleteConfirm:deleteMachineProfile:", result);
            event.confirm.resolve();
          } catch (err) {
            CustomLogger.logStringWithObject("onDeleteConfirm:deleteMachineProfile:error:", err);
          }
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }
  onCreateConfirm(event) {
    CustomLogger.logStringWithObject("onCreateConfirm:", event);
  }

  async onEditConfirm(event) {
    CustomLogger.logStringWithObject("onEditConfirm:", event);
    CustomLogger.logStringWithObject("New Data:", event.newData);
    event.confirm.resolve();

    //add the edited data in table;
    try {
      let result = await this.dbService.editMachineProfile(event.newData).toPromise();
      CustomLogger.logStringWithObject("onEditConfirm:editMachineProfile:", result);
    } catch (err) {
      CustomLogger.logStringWithObject("onEditConfirm:editMachineProfile:error:", err);
    }
  }



  onClickAddMachine() {
    CustomLogger.logString("Will route to add machine...");
    this.router.navigate(["crudMachine"]);
  }

  openConfirmationDialog() {
    this.miscService.confirmDialogBox('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => console.log('User confirmed:', confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  async onClickConnect(){
    try {
      let result = await this.networkService.testConnect().toPromise();    
      CustomLogger.logStringWithObject("onClickConnect:", result);
    } catch (err) {
      CustomLogger.logStringWithObject("onClickConnect:error:", err);
    }

  }
}
