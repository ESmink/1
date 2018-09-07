import { ImageAsset } from 'image-asset';

export interface Wound {
    id: string;
    photo: ImageAsset;
    location: string;
    description: string;
}