export interface IAntispam {
    isValid: boolean;
    code: string;
    sourceCode: string;
    isActive: boolean;
    activate(): void;
    resetCode(): void;
}