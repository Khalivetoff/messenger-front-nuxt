import { VNodeRef } from 'vue';
import { IAntispam } from '../antispam.model';

export interface IAuthBaseService {
    email: string;
    password: string;
    isValid: boolean;
    formRef: VNodeRef;
    isProcessActive: boolean;
    antispam: IAntispam;
    onSubmit(): Promise<void>;
    goToMirrorPage(): Promise<void>;
}