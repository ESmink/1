import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MasterDataService } from '../master-data.service';
import { Client } from '../model/client';

@Component({
	selector: "AppClient-list",
	moduleId: module.id,
	templateUrl: "./app-client-list.component.html",
	styleUrls: ['./app-client-list.component.css']
})
export class AppClientListComponent implements OnInit {

	clients: Array<Client>;

	constructor(private router: Router,
				private masterDataService: MasterDataService) {
	}

	ngOnInit(): void {
		this.clients = this.masterDataService.clients;
	}

	navigateToClientDetail(args: any): void {
		this.router.navigate(['client-detail', this.clients[args.index].id]);
	}
}