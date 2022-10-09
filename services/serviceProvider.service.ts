export abstract class ServiceProvider {
    public static get serviceName(): string {
        return this.name;
    }
}