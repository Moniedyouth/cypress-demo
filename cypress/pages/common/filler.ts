import { Checker } from "./checker";
import { Getter } from "./getter";
import { Helpers } from "./helpers";
import { Waiter } from "./waiter";

export interface Filler extends Getter, Helpers, Checker, Waiter {}
export class Filler {
  public fillField(selector: string, text: string) {
    cy.get(selector).type(text);
  }

  public fillFieldBySelectorAndIndex(selector: string, index: number, text: string) {
    cy.get(selector).eq(index).fill(text);
  }

  public fillFieldWithoutScroll(selector: string, text: string) {
    cy.get(selector).type(text, {scrollBehavior:false});
  }
  public clearAndFillField(selector: string, text: string) {
    cy.get(selector).clear().type(text);
  }

  public clearField(selector: string) {
    cy.get(selector).clear();
  }

  public clearAndFillFieldBySelectorAndIndex(selector: string, index: number, text: string) {
    cy.get(selector).eq(index).clear().type(text);
  }

  public clearAndFillFieldWithoutScroll(selector: string, text: string) {
    cy.get(selector).clear({ scrollBehavior: false }).type(text, { scrollBehavior: false });
  }

  public fillFieldPressEnter(selector: string, text: string) {
    cy.get(selector).type(text, {delay: 1000}).type('{enter}');
  }

  public fillIframeField(element: Cypress.Chainable<JQuery> | any, data: string) {
    element.clear().fill(data);
  }

  public fillIframeFieldForceType(
    iframe: string,
    selector: string,
    text: string
  ) {
    cy.getIframeBody(iframe).within(() => {
      cy.get(selector).type(text, { force: true });
    });
  }

  public fillIframeFieldForceSelect(
    iframe: string,
    selector: string,
    text: string
  ) {
    cy.getIframeBody(iframe).within(() => {
      cy.get(selector).select(text, { force: true });
    });
  }
}
