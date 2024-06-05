import { Constants } from "../../fixtures/constants";
import { Getter } from "./getter";
import { Helpers } from "./helpers";

export interface Checker extends Getter, Helpers {}
export class Checker {

  public urlShouldInclude(uri: string) {
    cy.url().should("include", uri.toLowerCase());
  }

  public urlShouldNotInclude(uri: string) {
    cy.url().should("not.include", uri.toLowerCase());
  }

  public urlShouldIncludeProductTitle(uri: string) {
    cy.url().should("include", uri.toLowerCase().trim().replace('<br>', ' ').split(' ').filter(i=> i!='').join('-'));
  }

  public isElementEnable(selector: string) {
    cy.get(selector).should("be.enabled");
  }

  public checkElementExist(
    selector: string,
    isVisible: boolean = true
  ): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy
      .get(selector, { timeout: Constants.DEFAULT_TIMEOUT })
      .should(isVisible ? "exist" : "not.exist");
  }

  public checkTextOfElement(selector: string, text: string){
    cy.get(selector as string).should('have.text', text)
  }

  public checkPartTextOfElementIndex(selector: string, index:number, text: string){
    cy.get(selector).eq(index).should('contain.text', text)
  }

  public checkPartTextOfElement(selector: string, text: string){
    cy.get(selector).should('contain.text', text)
  }

  public checkNotContainPartTextOfElement(selector: string, text: string){
    cy.get(selector).should('not.contain.text', text)
  }

  public isElementVisible (element: Cypress.Chainable<JQuery> | any){
    element.should('be.visible')
  }

  public isElementVisibleBySelector (selector: string): Cypress.Chainable<JQuery>{
    return cy.get(selector).should('be.visible')
  }

  public isElementNotVisibleBySelector (selector: string): Cypress.Chainable<JQuery>{
    return cy.get(selector).should('not.be.visible')
  }

  public isElementNotExistsBySelector (selector: string): Cypress.Chainable<JQuery>{
    return cy.get(selector).should('not.exist')
  }

  public isElementNotExistsBySelectorAndText (selector: string, text: string): Cypress.Chainable<JQuery>{
    return cy.get(selector).contains(text).should('not.exist')
  }

  public isElementNotExistsBySelectorAndIndex (selector: string, index: number): Cypress.Chainable<JQuery>{
    return cy.get(selector).eq(index).should('not.exist')
  }

  public checkElementAndTextVisible(selector: string, text: string): Cypress.Chainable<JQuery>{
    return cy.get(selector).contains(text).should('be.visible')
  }

  public checkElementBySelectorTextIndexIsVisible(selector: string, index:number, text: string): Cypress.Chainable<JQuery>{
    return cy.get(selector).eq(index).contains(text).should('be.visible')
  }

  public checkTextNotBeVisible(text: string): Cypress.Chainable<JQuery | any>{
    return cy.contains(text).should('not.exist')
  }

  public checkElementValue(selector: string, value: string, index: number = 0) {
    cy.get(selector).eq(index).should('have.value', value)
  }
}
