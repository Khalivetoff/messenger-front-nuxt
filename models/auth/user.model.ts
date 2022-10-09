import { ERole } from "~~/enums/role.enum";

export interface IUserDataRaw {
    roleList: Array<ERole>;
    nickname: string;
    login: string;
}

export interface IUserData extends Omit<IUserDataRaw, 'roleList'> {
    roles: Map<ERole, true>;
    nickname: string;
    login: string;
}