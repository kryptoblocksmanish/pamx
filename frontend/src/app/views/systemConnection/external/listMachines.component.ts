import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../../../modules/services/dbService.service';
import { MiscService } from '../../../modules/services/miscService.service';
import { NetworkService } from '../../../modules/services/network/networkService.service';
import { CustomLogger } from '../../../modules/utils/CustomLogger';
import { MachineProfile } from '../../../modules/models/MachineProfile.model';

// declare var require: any;
// const data: any = require('./data.json');


@Component({
  templateUrl: './listMachines.component.html'
})
export class ListMachinesComponent implements OnInit {
  tableDataArr: any;
  constructor(private dbService: DBService, private miscService: MiscService, private router: Router, private networkService: NetworkService) {
  }


  async ngOnInit() {
    let result = await this.dbService.getAllMachineProfiles().toPromise();
    CustomLogger.logStringWithObject("result:::::", result);
    this.tableDataArr = result["data"];
  }

  onClickConnect(data:MachineProfile) {
    CustomLogger.logStringWithObject("onClickConnect:::::", data);
    this.onClickConnectRDP(data.uid);
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

  async onClickConnectRDP(machine_uid) {
    try {
      let result = await this.networkService.testConnectRDP(machine_uid).toPromise();
      CustomLogger.logStringWithObject("onClickConnectRDP:", result);
    } catch (err) {
      CustomLogger.logStringWithObject("onClickConnectRDP:error:", err);
    }
  }

  async onClickConnectSSH(machine_uid) {
    try {
      let result = await this.networkService.testConnectSSH().toPromise();
      CustomLogger.logStringWithObject("onClickConnectSSH:", result);
    } catch (err) {
      CustomLogger.logStringWithObject("onClickConnectSSH:error:", err);
    }
  }
}


// @Component({
//   templateUrl: './listMachines.component.html'
// })
// export class ListMachinesComponent implements OnInit {
//   editing = {};
//   rows = [];
//   temp = [...data];
//   // tableDataArr = [...data];

//   loadingIndicator = true;
//   reorderable = true;

//   columns = [{ prop: 'status' }, { name: 'Username' }, { name: 'address' }, { name: 'platform_id' }, { name: 'safe' }];

//   constructor(private dbService: DBService, private miscService: MiscService, private router: Router, private networkService: NetworkService) {
//   }

//   async ngOnInit() {
//     let result = await this.dbService.getAllMachineProfiles().toPromise();
//     CustomLogger.logStringWithObject("result:::::", result);
//     this.source = result["data"];

//     // //to be deleted
//     // try {
//     //   let r1 = await this.miscService.getKeycloakToken().toPromise();
//     //   CustomLogger.logStringWithObject("r1:::::", r1);
//     // } catch (error) {
//     //   CustomLogger.logError(error.message);
//     //   CustomLogger.logError(error);
//     // }

//   }

//   source: any;
//   settings = {
//     // selectMode: 'multi',
//     columns: {
//       status: {
//         title: 'Status',
//         filter: false
//       },
//       username: {
//         title: 'User Name',
//         filter: false
//       },
//       address: {
//         title: 'Address',
//         filter: false
//       },
//       platform_id: {
//         title: 'Platform ID',
//         filter: false
//       },
//       safe: {
//         title: '',
//         filter: false,
//         type: 'html'
//       },
//       button: {
//         title: 'ID string',
//         type: 'html',
//         renderComponent: CustomRendererComponent
//       }      
//     },
//     add: {
//       confirmCreate: true
//     },
//     edit: {
//       editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
//       saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
//       cancelButtonContent: '<i class="ti-close text-danger"></i>',
//       confirmSave: true
//     },
//     delete: {
//       deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
//       saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
//       cancelButtonContent: '<i class="ti-close text-danger"></i>',
//       confirmDelete: true
//     }
//   };

//   async onDeleteConfirm(event) {
//     CustomLogger.logStringWithObject("onDeleteConfirm:", event);
//     this.miscService.confirmDialogBox('Please confirm..', 'Do you really want to delete this machine ?')
//       .then(async (confirmed) => {
//         console.log('User confirmed:', confirmed);
//         if (confirmed) {
//           //delete data from table;
//           try {
//             let result = await this.dbService.deleteMachineProfile(event.data).toPromise();
//             CustomLogger.logStringWithObject("onDeleteConfirm:deleteMachineProfile:", result);
//             event.confirm.resolve();
//           } catch (err) {
//             CustomLogger.logStringWithObject("onDeleteConfirm:deleteMachineProfile:error:", err);
//           }
//         }
//       })
//       .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

//   }
//   onCreateConfirm(event) {
//     CustomLogger.logStringWithObject("onCreateConfirm:", event);
//   }

//   async onEditConfirm(event) {
//     CustomLogger.logStringWithObject("onEditConfirm:", event);
//     CustomLogger.logStringWithObject("New Data:", event.newData);
//     event.confirm.resolve();

//     //add the edited data in table;
//     try {
//       let result = await this.dbService.editMachineProfile(event.newData).toPromise();
//       CustomLogger.logStringWithObject("onEditConfirm:editMachineProfile:", result);
//     } catch (err) {
//       CustomLogger.logStringWithObject("onEditConfirm:editMachineProfile:error:", err);
//     }
//   }




//   // onCustomAction(event){
//   //   CustomLogger.logStringWithObject("oncustomaction:, event:::", event);
//   // }

// }
