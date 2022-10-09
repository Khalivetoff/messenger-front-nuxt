import { VNodeRef } from "vue";
import { TRule } from "models/vuetify/form.model";
import { IAuthBaseService } from "~~/models/auth/authBaseService.model";
import { IAntispam } from "~~/models/antispam.model";
import { ServiceProvider } from "../serviceProvider.service";

export abstract class AuthBaseService extends ServiceProvider implements IAuthBaseService {
    public emailRuleList: Array<TRule> = [v => !!v || 'Поле обязательно'];
    public passwordRuleList: Array<TRule> = [v => !!v || 'Поле обязательно'];
    public abstract titleText: string;
    private _email = ref('');
    private _password = ref('');
    private _formRef = ref();
    private _isValid = ref(false);
    private _isProcessActive = ref(false);
    
    constructor(public antispam: IAntispam) {
        super();
    };

    public get email(): string {
        return unref(this._email);
    }

    public set email(email: string) {
        this._email.value = email;
    }

    public get password(): string {
        return unref(this._password);
    }

    public set password(password: string) {
        this._password.value = password;
    }

    public get formRef(): VNodeRef {
        return this._formRef;
    }

    public get isValid(): boolean {
        return this.antispam.isValid && unref(this._isValid);
    }

    public set isValid(isValid: boolean) {
        this._isValid.value = !!isValid;
    }

    public get isProcessActive(): boolean {
        return unref(this._isProcessActive);
    }

    public startProcessActive(): void {
        this._isProcessActive.value = true;
    }

    public cancelProcessActive(): void {
        this._isProcessActive.value = false;
    }

    public async validate(): Promise<boolean> {
        await this._formRef.value.validate();
        return this._isValid.value;
    }

    public async onSubmit(): Promise<void> {
        if (!(await this.validate())) {
            return;
        }
        try {
            this.startProcessActive();
            await this.submit();
        } catch(e) {
            this.antispam.activate();
            await nextTick();
            this._formRef.value.resetValidation();
        } finally {
            this.cancelProcessActive();
        }
    }

    protected abstract submit(): Promise<void>;
    public abstract goToMirrorPage(): Promise<void>;
}