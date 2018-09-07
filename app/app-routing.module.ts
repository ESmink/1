import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppClientListComponent } from "./client-list/app-client-list.component";
import { AppClientDetailComponent } from "./client-detail/app-client-detail.component";
import { AppWoundDetailComponent } from "./wound-detail/app-wound-detail.component";
import { AppCreateClientDialogComponent } from "./create-client-dialog/app-create-client-dialog.component";
import { AppCreateWoundComponent } from "./create-wound/app-create-wound.component";

const routes: Routes = [
    { path: "", redirectTo: "/client-list", pathMatch: "full" },
    { path: "client-list", component: AppClientListComponent },
    { path: "client-detail/:id", component: AppClientDetailComponent },
    { path: "client-detail/:clientId/wound-detail/:woundId", component: AppWoundDetailComponent },
    { path: "create-client-dialog", component: AppCreateClientDialogComponent },
    { path: "create-wound/:clientId", component: AppCreateWoundComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
