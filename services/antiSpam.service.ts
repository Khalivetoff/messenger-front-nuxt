import { IAntispam } from "~~/models/antispam.model";
import { TRule } from "~~/models/vuetify/form.model";

export class AntiSpamService implements IAntispam {
    private _sourceCode = ref('');
    private _code = ref('');
    private _isActive = ref(false);

    public get code(): string {
        return unref(this._code);
    }
    
    public set code(code: string) {
        this._code.value = code;
    }

    public resetCode(): void {
        this._sourceCode.value = String(Math.floor(1000 + Math.random() * 9000));
        this._code.value = '';
    }

    public get isValid(): boolean {
        return !this._isActive.value || this._code.value === this._sourceCode.value;
    }

    public get sourceCode(): string {
        return unref(this._sourceCode);
    }

    public get isActive(): boolean {
        return unref(this._isActive);
    }

    public activate(): void {
        this.resetCode();
        this._isActive.value = true;
    }

    public static getRuleList(sourceCode: string): Array<TRule> {
        return [v => !!v && v === sourceCode || 'Некорректный код'];
    }
}