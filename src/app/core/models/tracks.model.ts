import { ArtistModel } from "./artist.model";

//MODELO DE DATOS QUE DEBE CONTENER UNA CANCION
export interface TrackModel{
    name : string;
    album : string;
    cover : string;
    url: string;
    _id: string | number;
    artist?: ArtistModel;
}