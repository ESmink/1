import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AppClientListModule } from "./client-list/app-client-list.module";
import { AppClientDetailModule } from "./client-detail/app-client-detail.module";
import { AppWoundDetailModule } from "./wound-detail/app-wound-detail.module";
import { AppCreateClientDialogModule } from "./create-client-dialog/app-create-client-dialog.module";
import { AppCreateWoundModule } from "./create-wound/app-create-wound.module";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        AppClientListModule,
        AppClientDetailModule,
        AppWoundDetailModule,
        AppCreateClientDialogModule,
        AppCreateWoundModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
