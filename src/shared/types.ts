import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

export type AllRoles =
    | 'operator'
    | 'headoperator'
    | 'qc'
    | 'line2'
    | 'line3'
    | 'analytic'
    | 'admin'
    | 'mainmanager'
    | 'oskoperator'
    | 'press';

interface ExtendedIndexRouteObject extends IndexRouteObject {
    access?: AllRoles[];
    children?: undefined;
}
export interface ExtendedNonIndexRouteObject extends NonIndexRouteObject {
    access?: AllRoles[];
    children?: ExtendedNonIndexRouteObject[];
}

export type ExtendedRouteObject =
    | ExtendedIndexRouteObject
    | ExtendedNonIndexRouteObject;
