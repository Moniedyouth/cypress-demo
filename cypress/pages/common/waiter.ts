import { Constants } from "../../fixtures/constants";
import { Checker } from "./checker";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Waiter extends Checker {}
export class Waiter {
  public waitForOpenedPage(url: string): void {
    cy.url().should("include", `/${url}`);
  }

  public waitForElementBeVisible(selector: string): void {
    cy.get(selector, { timeout: Constants.DEFAULT_TIMEOUT }).should("be.visible");
  }

  public waitForElementBeVisibleByIndex(selector: string, index: number): void {
    cy.get(selector, { timeout: Constants.DEFAULT_TIMEOUT }).eq(index).should("be.visible");
  }

  public waitForElementNotBeVisible(selector: string): void {
    cy.get(selector).should("not.be.visible");
  }

  public waitForElementNotExists(selector: string): void {
    cy.get(selector).should("not.exist");
  }

  public waitForElementNotExistsByText(text: string): void {
    cy.contains(text).should("not.exist");
  }

  public waitForElementBeVisibleByText(text: string): void {
    cy.contains(text).should("be.visible");
  }

  public waitForElementNotBeVisibleByText(text: string): void {
    cy.contains(text).should("not.be.visible");
  }

  public waitForElementBeVisibleAndHasText(selector:string, text: string): void {
    cy.get(selector)
    .should("be.visible")
    .and('contain.text', text);
  }

  public waitForElementByIndexBeVisibleAndHasText(selector:string, index: number, text: string): void {
    cy.get(selector)
    .eq(index)
    .should("be.visible")
    .and('contain.text', text);
  }
  public waitForElementBeVisibleBySelectorAndText(selector:string, text: string): void {
    cy.get(selector)
    .contains(text)
    .should("be.visible")
  }

  public waitIframeElement(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    iframe: any,
    selector: string
  ): Cypress.Chainable<JQuery> {
    return cy
      .wrap(iframe)
      .find(selector, { timeout: Constants.DEFAULT_TIMEOUT })
      .should("be.visible");
  }

  public waitForLoadSpinnerDisappear(selector: string): void {
    cy.get(selector, { timeout: Constants.DEFAULT_TIMEOUT }).should("be.visible");
    cy.get(selector, { timeout: Constants.DEFAULT_TIMEOUT }).should('not.exist');
  }

  public waitForLoadSpinnerNotVisible(selector: string): void {
    cy.get(selector, { timeout: Constants.DEFAULT_TIMEOUT }).should("be.visible");
    cy.get(selector, { timeout: Constants.DEFAULT_TIMEOUT }).should('not.be.visible');
  }

  public waitForLoadSpinnerNotVisibleByIndex(selector: string, index: number): void {
    cy.get(selector).eq(index, { timeout: Constants.DEFAULT_TIMEOUT }).should("be.visible");
    cy.get(selector).eq(index, { timeout: Constants.DEFAULT_TIMEOUT }).should('not.be.visible');
  }

  public waitForLoadSpinnerDisappearSearch(): void {
    cy.get('[id="html-body"]').invoke('attr','aria-busy').should('eq', 'true');
    cy.get('[id="html-body"]', { timeout: Constants.DEFAULT_TIMEOUT }).invoke('attr','aria-busy').should('eq', 'false');
  }

  public waitForLoadingElementByIndex(selector: string, index: number): void {
    cy.get(selector, { timeout: Constants.DEFAULT_TIMEOUT }).eq(index).should('exist');
    cy.get(selector, { timeout: Constants.DEFAULT_TIMEOUT }).eq(index).should('not.exist');
  }
}
