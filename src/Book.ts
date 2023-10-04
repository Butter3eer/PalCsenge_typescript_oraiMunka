export class Book {
    name: string;
    rating: number;

    constructor(name: string, rating: number) {
        this.name = name;
        if (rating < 1) {
            throw new Error("A rating nem lehet 1-nél kisebb!")
        }
        else if (rating > 10) {
            throw new Error("A rating nem lehet 10-nél nagyobb!")
        }
        else {
            this.rating = rating;
        }
    }

    toString() : string {
        return `A könyv címe ${this.name} és ${this.rating} értékeléssel rendelkezik.`;
    }
}