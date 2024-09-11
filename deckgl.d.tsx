declare module "deck.gl" {
  export class Deck {
    constructor(props: any);
    setProps(props: any): void;
    finalize(): void;
  }
}
