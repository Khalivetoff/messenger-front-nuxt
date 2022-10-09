import { IUserData, IUserDataRaw } from "~~/models/auth/user.model";
import { StatePromise } from "~~/utils/statePromise.util";
import { ServiceProvider } from "../serviceProvider.service";

export class AuthStoreService extends ServiceProvider {
    private _isAuthCompleted = ref(false);
    private _$state = new StatePromise<IUserData | null>();

    public get isAuthCompleted(): boolean {
        return unref(this._isAuthCompleted);
    }

    public get $state(): StatePromise<IUserData> {
        return this._$state;
    }

    public onAuthComplete(userData?: IUserDataRaw): void {
        this._isAuthCompleted.value = true;
        if (!userData) {
            this._$state.resolve(null);
            return;
        }
        const { roleList, nickname, login } = userData;
        this._$state.resolve({
            login,
            nickname,
            roles: roleList.reduce((roles, role) => {
                roles.set(role, true);
                return roles;
            }, new Map()),
        });
    }
}