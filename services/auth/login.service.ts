import { wait } from "~~/utils/wait.util";
import { AntiSpamService } from "../antiSpam.service";
import { AuthBaseService } from "./authBase.service";

export class LoginService extends AuthBaseService {
    constructor() {
        super(new AntiSpamService());
        this.onSubmit = this.onSubmit.bind(this);
    }

    public titleText = 'Авторизация';

    protected async submit(): Promise<void> {
        await wait(300, false);
        console.log('login()');
        // todo: авторизация
    }

    public async goToMirrorPage(): Promise<void> {
        await navigateTo('/register');
    }
}