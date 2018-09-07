import { Component, OnInit } from "@angular/core";
import * as camera from "nativescript-camera";
import { ImageAsset } from "image-asset";
import { MasterDataService } from "../master-data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Guid } from "../guid-typescript";
import { Location } from '@angular/common';

@Component({
	selector: "AppCreate-wound",
	moduleId: module.id,
	templateUrl: "./app-create-wound.component.html",
	styleUrls: ['./app-create-wound.component.css']
})
export class AppCreateWoundComponent implements OnInit {

	clientId: string;

	description: string;
	woundLocation: string;

	image: ImageAsset;

	constructor(private masterDataService: MasterDataService,
		private route: ActivatedRoute,
		private router: Router) {
	}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.clientId = params.clientId;
		})

		camera.requestPermissions().then(() => {
			camera.takePicture().then((image) => {
				this.image = image;
			});
		});
	}

	saveImage(): void {
		this.masterDataService.addWound(this.clientId, {
			id: Guid.raw(),
			photo: this.image,
			description: this.description,
			location: this.woundLocation
		});

		this.router.navigate(['client-detail', this.clientId]);
	}
}