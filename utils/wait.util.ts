export function wait(timeout = 0, isSuccess = true): Promise<void> {
    return new Promise((resolve, reject) => setTimeout(isSuccess ? resolve : reject, timeout));
}