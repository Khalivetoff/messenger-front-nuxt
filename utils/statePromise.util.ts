export class StatePromise<ResolveData = unknown, RejectData = unknown> {
    private _promise: Promise<ResolveData>;
    private _resolve: (result: ResolveData) => void;
    private _reject: (reason: RejectData) => void;
    private _isCompleted = ref(false);

    constructor() {
        this._promise = new Promise<ResolveData>((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        })
    }

    public resolve(result?: ResolveData): void {
        this._resolve(result);
        this.onComplete();
    }

    public reject(reason?: RejectData): void {
        this._reject(reason);
        this.onComplete();
    }

    public then(handler: (result?: ResolveData) => unknown): void {
        this._promise.then(handler);
    }

    public catch(handler: (error?: unknown) => unknown): void {
        this._promise.catch(handler);
    }

    public get isCompleted(): boolean {
        return unref(this._isCompleted)
    }

    private onComplete(): void {
        this._isCompleted.value = true;
    }
}