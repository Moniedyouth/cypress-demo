import { Constants } from "../../fixtures/constants";

export class Getter {
  public getIframeElement(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    iframe: any,
    selector: string
  ): Cypress.Chainable<JQuery> {
    return cy
      .wrap(iframe)
      .find(selector, {timeout: Constants.DEFAULT_TIMEOUT});
  }

  public getElementLink(
    selector: string,
    index: number,
    childSelector?: string
  ): Cypress.Chainable<string> {
    if (childSelector) {
      return cy
        .get(selector)
        .eq(index)
        .find(childSelector)
        .then(($element: JQuery) => $element.html());
    }
    return cy
      .get(selector)
      .eq(index)
      .then(($element: JQuery) => $element.html());
  }

  public getAttributeValue(
    selector: string,
    attr: string,
    index: number
  ): Cypress.Chainable<string> {
    return cy
      .get(selector)
      .eq(index)
      .then(($element: JQuery) => {
        return $element.attr(attr) as string;
      });
  }

  public getElementText(
    selector: string,
    firstChildSelector: string,
    index: number,
    secondChildSelector: string
  ): Cypress.Chainable<string> {
    return cy
      .get(selector)
      .find(firstChildSelector)
      .eq(index)
      .find(secondChildSelector)
      .invoke("text");
  }

  public getElementContainsText(selector: string, text: string) {
    return cy.contains(selector, text);
  }

  public getElementBySelector(selector: string): Cypress.Chainable<JQuery> {
    return cy.get(selector);
  }

  public getElementBySelectorAndIndex(selector: string, index:number): Cypress.Chainable<JQuery> {
    return cy.get(selector).eq(index)
  }
}
