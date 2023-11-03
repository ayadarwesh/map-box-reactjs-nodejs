import {IUser} from "./IUser";
import {IPolygon} from "./IPolygon";

export interface IStore{
    auth:IAuth,
    users:{loading:boolean,users:IUser[]},
    polygons:{loading:boolean,polygons:IPolygon[]}
}

export interface IAuth{
    user:IUser,
    loading:boolean
}

