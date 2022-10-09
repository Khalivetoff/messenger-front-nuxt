import { wait } from "~~/utils/wait.util";
import { AuthBaseService } from "./authBase.service";
import { TRule } from '~~/models/vuetify/form.model';
import { AntiSpamService } from "../antiSpam.service";

export class RegisterService extends AuthBaseService {
    public titleText = 'Регистрация';
    private _nickname = ref('');
    public nicknameRuleList: Array<TRule> = [v => !!v || 'Обязателньое поле'];

    constructor() {
        super(new AntiSpamService());
        this.onSubmit = this.onSubmit.bind(this);
    }

    public get nickname(): string {
        return unref(this._nickname);
    }

    public set nickname(nickname: string) {
        this._nickname.value = nickname;
    }

    public async goToMirrorPage(): Promise<void> {
        await navigateTo('/');
    }

    public async submit(): Promise<void> {
        await wait(1500);
        console.log('register()');
        // todo: регистрация
    }
}