import { BasePo } from "./base.po";

export class MainPo extends BasePo {

  public buttons = {
    closePopUp: ".close-popup",
    engagementRings: ".header__nav [href='/engagement-rings']:first",
    initials: ".header__nav [href='/collection/initials']",
    engagementMaterialsUpave: "[href='/engagement?materials=UPAVE']"
  };

  public elements = {
   marketingPopUp: ".marketing-popup",
   megaMenu: ".nav__mega-menu"
  };
}
