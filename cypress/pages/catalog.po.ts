import { BasePo } from "./base.po";

export class CatalogPo extends BasePo {

  public buttons = {
    filterTitles: ".top-filter__widget .widget__title",
    showMore: ".widget__collections__show-more"
  };

  public elements = {
    sortTitle: ".widget__title sort-title"
  }

  public checkboxes = {
    filters: "div.desktop_filters .widget__collections .form-checkbox"
  }
}
