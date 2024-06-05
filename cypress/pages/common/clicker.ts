import { Getter } from "./getter";
import { Helpers } from "./helpers";

export interface Clicker extends Getter, Helpers {}
export class Clicker {
  public clickOnElementBySelector(
    selector: string,
    isForce?: boolean,
    childSelector?: string
  ) {
    if (childSelector) {
      cy.get(selector)
        .find(childSelector as string)
        .click({ force: isForce });
    }
    cy.get(selector).click({ force: isForce });
  }
  public clickOnElementForceAndWithoutScroll(selector: string) {
    cy.get(selector).click({scrollBehavior:false,  force: true});
  }
  public dblclickOnElementBySelector(selector: string) {
    cy.get(selector).dblclick({scrollBehavior: false});
  }

  public clickOnIframeElement(element: Cypress.Chainable<JQuery>) {
    element.click({ force: true });
  }

  public clickOnText(text: string) {
    cy.contains(text).click();
  }

  public clickOnTextAndIndex(text: string, index: number) {
    cy.contains(text).eq(index).click({force:true});
  }

  public clickOnElementAndText(selector: string, text: string | RegExp) {
    cy.get(selector).contains(text).click({force:true,scrollBehavior: false});
  }

  public clickOnElementAndTextAndIndex(selector: string, text: string, index: number) {
    cy.get(selector).contains(text).eq(index).click({force:true});
  }

  public clickOnElementWithoutScroll(selector: string) {
    cy.get(selector).click({scrollBehavior:false});
  }

  public clickOnElementWithoutScrollBySelectorAndIndex(selector: string, index: number) {
    cy.get(selector).eq(index).click({scrollBehavior:false});
  }

  public clickOnElementByIndex(selector: string, index:number, isForce?: boolean,) {
    cy.get(selector).eq(index).click({ force: isForce });
  }

  public choosePresentNthElement(elements: string, index: number) {
    cy.get(`${elements}:not(.cs-grid-layout__brick.product__out-of-stock)`).eq(index).click();
  }

  public chooseLinkPresentNthElement(elements: string, index: number) {
    cy.get(elements).eq(index).click();
  }

  public clickOnElementBySelectorByIndex(elements: string, elemNumber: number, isScroll?: boolean | any) {
    cy.get(elements).eq(elemNumber).click({scrollBehavior:isScroll});
  }

  public selectOptionByIndex(
    elements: string,
    elemNumber: number,
    isForce?: boolean
  ) {
    cy.get(elements)
      .should("be.enabled")
      .select(elemNumber, { force: isForce });
  }

  public selectOptionBySelector(
    element: string,
    value: string,
    isForce?: boolean
  ) {
    cy.get(element)
      .select(value, { force: isForce });
  }

  public selectOptionBySelectorAndIndex(
    element: string,
    index: number,
    value: string,
    isForce?: boolean
  ) {
    cy.get(element)
      .eq(index)
      .select(value, { force: isForce });
  }

  public uncheckCheckbox(selector: string) {
    cy.get(selector).uncheck({ force: true });
  }

  public checkCheckbox(selector: string) {
    cy.get(selector).check({ force: true });
  }

  public checkCheckboxByElementAndIndex(selector: string, index: number) {
    cy.get(selector).eq(index).check({scrollBehavior:false, force: true });
  }
}
