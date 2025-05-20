export default class User {
    private readonly key = 'user' as const;

    constructor(
        public readonly id: number,
        public email: string,
        public name: string,
    ) { }

    log(): void {
        console.log(this.toData());
    }

    private toData(): object {
        return { email: this.email, name: this.name, id: this.id };
    }
}
