import { Injectable } from '@angular/core';
import { Client } from './model/client';
import { Wound } from "./model/wound"; 
import { Guid } from "./guid-typescript";

@Injectable({
    providedIn: 'root'
})
export class MasterDataService {

    public clients: Array<Client>;

    constructor() {
        this.clients = [];

        this.clients.push({
            id: Guid.raw(),
            name: "Meneer1",
            dateOfBirth: new Date(),
            city: 'Groenlo',
            wounds: []
        });

        this.clients.push({
            id: Guid.raw(),
            name: "Meneer2",
            dateOfBirth: new Date(),
            city: 'Ruurlo',
            wounds: []
        });

        this.clients.push({
            id: Guid.raw(),
            name: "Mevrouw3",
            dateOfBirth: new Date(),
            city: 'Enschede',
            wounds: []
        });
    }

    public getClient(id: string): Client {
        return this.clients.find(c => c.id == id);
    }

    public addClient(client: Client): void {
        this.clients.push(client);
    }

    public addWound(clientId: string, wound: Wound): void {
        this.clients.find(c => c.id == clientId).wounds.unshift(wound);
    }
    
}