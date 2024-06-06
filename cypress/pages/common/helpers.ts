import { Constants } from "../../fixtures/constants";
import { Getter } from "./getter";

export interface Helpers extends Getter {}
export class Helpers {
  public scrollToElement(
    selector: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .get(selector, { timeout: Constants.DEFAULT_TIMEOUT })
      .scrollIntoView();
  }

  public scrollWithDurationToElement(
    selector: string,
    duration: number
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .get(selector, { timeout: Constants.DEFAULT_TIMEOUT })
      .scrollIntoView({ duration: duration });
  }

  public scrollToElementAndIndex(
    selector: string,
    index: number
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .get(selector, { timeout: Constants.DEFAULT_TIMEOUT })
      .eq(index)
      .scrollIntoView();
  }

  public scrollToElementBySelectorAndText(
    selector: string,
    text: string,
    duration: number
  ): Cypress.Chainable<any> {
    return cy
      .get(selector)
      .contains(text, { timeout: Constants.DEFAULT_TIMEOUT })
      .scrollIntoView({ duration: duration });
  }

  public scrollToElementByText(text: string): Cypress.Chainable<any> {
    return cy
      .contains(text, { timeout: Constants.DEFAULT_TIMEOUT })
      .scrollIntoView();
  }

  public hoverElement(
    hoverElement: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .get(hoverElement, { timeout: Constants.DEFAULT_TIMEOUT })
      .trigger("mouseenter", { force: hoverElement.includes("COLOR") });
  }

  public hoverElementByText(
    hoverElement: string,
    text: string
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .get(hoverElement, { timeout: Constants.DEFAULT_TIMEOUT })
      .contains(text)
      .trigger("mouseenter");
  }

  public hoverElementBySelector(selector: string) {
    cy.get(selector).trigger("mouseenter", { force: true }).invoke("show");
  }

  public hoverElementBySelectorRightClick(selector: string) {
    cy.get(selector).rightclick();
  }

  public hoverElementBySelectorAndIndexRightClick(selector: string, index: number) {
    cy.get(selector).eq(index).rightclick();
  }

  public hoverElementBySelectorActive(selector: string) {
    cy.get(selector).invoke("attr", "style", "active");
  }

  public hoverElementBySelectorAndIndex(selector: string, index: number) {
    cy.get(selector)
      .eq(index)
      .trigger("mouseover", { force: true })
      .invoke("show");
  }

  public reloadPage(withoutCache: boolean = true): void {
    if (withoutCache) {
      cy.reload(withoutCache);

      return;
    }

    cy.reload();
  }

  public interceptElement(url: string, allias: string) {
    cy.intercept(url).as(allias);
  }

  public getCarouselSelector(index: string): string {
    return '.cs-display-controller--hidden-mobile [data-swiper-slide-index="{index}"]'.replace(
      "{index}",
      index
    );
  }

  public selectOption(selector: string, index: number) {
    cy.get(selector).select(index);
  }

  public selectOptionValueString(selector: string, value: string, isForce?: boolean) {
    cy.get(selector).select(value, {force:isForce});
  }

  public clearFieldBySelector(selector: string) {
    cy.get(selector).clear();
  }
}
