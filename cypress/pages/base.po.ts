import { Base, booster } from "./common/base";
import { Checker } from "./common/checker";
import { Clicker } from "./common/clicker";
import { Filler } from "./common/filler";
import { Getter } from "./common/getter";
import { Helpers } from "./common/helpers";
import { Waiter } from "./common/waiter";

export interface BasePo
  extends Base,
    Clicker,
    Filler,
    Waiter,
    Checker,
    Getter,
    Helpers {}

export class BasePo extends booster(
  Base,
  Clicker,
  Filler,
  Waiter,
  Checker,
  Getter,
  Helpers
) {}
