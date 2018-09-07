import { Component, OnInit, OnChanges } from "@angular/core";
import { MasterDataService } from '../master-data.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../model/client';
import { Router } from '@angular/router';


@Component({
	selector: "AppClient-detail",
	moduleId: module.id,
	templateUrl: "./app-client-detail.component.html",
	styleUrls: ['./app-client-detail.component.css']
})
export class AppClientDetailComponent implements OnInit, OnChanges {

	client: Client;
	constructor(private masterDataService: MasterDataService,
				private route: ActivatedRoute,
				private router: Router) {
	}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.client = this.masterDataService.getClient(params.id);
		});
	}

	ngOnChanges(): void {
		this.route.params.subscribe(params => {
			this.client = this.masterDataService.getClient(params.id);
		
		});
	}

	navigateToCreateWound(): void {
		
		this.router.navigate(['create-wound', this.client.id]);
	}
}