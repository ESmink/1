import { Wound } from "./wound";

export interface Client {
    id: string;
    name: string;
    dateOfBirth: Date;
    city: string;
    wounds: Array<Wound>;
}