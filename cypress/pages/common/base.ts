import { Constructor, makeBoosterWith } from "../../../utils/booster";

export class Base {}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const booster: (...constructors: any[]) => Constructor =
  makeBoosterWith(Base);
