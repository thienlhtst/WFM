/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionListComponent } from './position-list/position-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { PositionServiceService } from 'src/Services/Position/PositionService.service';
import { FormsModule } from '@angular/forms';
import { PagingnavComponent } from '../../../shared/components/pagingnav/pagingnav.component';
import { NotificationComponent } from '../../../shared/components/Notification/Notification.component';
import { PipeSharePipe } from "../../../shared/components/Pipe/pipe-share.pipe";
import { SpinnerBetaComponent } from '../../../shared/components/spinner-beta/spinner-beta.component';
import { PositionOptionsComponent } from './position-options/position-options.component';
import { SharedModule } from "../../../shared/shared.module";
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmationDialogService } from '../../../shared/components/confirmation-dialog/confirmation-dialog.service';
import { RegexService } from 'src/Services/Regex/regex.service';

const route : Routes =[{
  path:'',
  children:[
    {path:'',component:PositionListComponent},
    {path:'options/:id',component:PositionOptionsComponent}
  ]
}]

@NgModule({
    declarations: [
        PositionListComponent,
        PositionOptionsComponent
    ],
    providers: [PositionServiceService,ConfirmationDialogService,RegexService],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        BreadcrumbComponent,
        HttpClientModule,
        FormsModule,
        PagingnavComponent,
        NotificationComponent,
        PipeSharePipe,
        SpinnerBetaComponent,
        SharedModule,MatTooltipModule
    ]
})
export class PositionModule { }
