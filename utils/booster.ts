export type Constructor = new (...args: any[]) => {};

export const makeBoosterWith: (base: Constructor) => (...constructors: any[]) => Constructor =
  (base: Constructor) =>
  (...constructors: any[]) => {
    constructors.forEach((baseCtor: any) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name: string) => {
        Object.defineProperty(
          base.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null),
        );
      });
    });

    return base;
  };