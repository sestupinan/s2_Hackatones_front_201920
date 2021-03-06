import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import { TecnologiaListComponent } from './tecnologia-list/tecnologia-list.component';
import {TecnologiaDetailComponent} from './tecnologia-detail/tecnologia-detail.component';
import {TecnologiaCreateComponent} from './tecnologia-create/tecnologia-create.component';
import { TecnologiaService } from './tecnologia.service';
import { TecnologiaEditComponent } from './tecnologia-edit/tecnologia-edit.component';

@NgModule ({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        NgxPermissionsModule
    ],
    declarations: [
        TecnologiaListComponent,
        TecnologiaDetailComponent,
        TecnologiaCreateComponent,
        TecnologiaEditComponent 
    ],
    providers: [TecnologiaService]
})
export class TecnologiaModule { }