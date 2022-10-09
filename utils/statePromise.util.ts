export class StatePromise<ResolveData = unknown, RejectData = unknown> {
    private _promise: Promise<ResolveData>;
    private _resolve: (result: ResolveData) => void;
    private _reject: (reason: RejectData) => void;
    private _result: ResolveData;
    private _error: unknown;
    private _isCompleted = false;

    constructor() {
        this._promise = new Promise<ResolveData>((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        })
    }

    public resolve(result: ResolveData): void {
        if (this._isCompleted) {
            return;
        }
        this._result = result;
        this._resolve(result);
        this.onComplete();
    }

    public reject(reason: RejectData): void {
        if (this._isCompleted) {
            return;
        }
        this._error = reason;
        this._reject(reason);
        this.onComplete();
    }

    public then(handler: (result: ResolveData) => unknown): void {
        this._isCompleted ? handler(this._result) : this._promise.then(handler);
    }

    public catch(handler: (error: unknown) => unknown): void {
        this._isCompleted ? handler(this._error) : this._promise.catch(handler);
    }

    private onComplete(): void {
        this._isCompleted = true;
    }
}