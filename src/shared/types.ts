import { IndexRouteProps } from 'react-router-dom';

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

export interface ExtendedIndexRouteObject extends IndexRouteProps {
    access?: AllRoles[];
}
