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

  public isElementVisibleBySelector (selector: string): Cypress.Chainable<JQuery>{
    return cy.get(selector).should('be.visible')
  }

  public isSiblingElementVisibleBySelector (
    selector: string, 
    siblingSelector: string,
      ): Cypress.Chainable<JQuery>{
    return cy.get(selector).siblings(siblingSelector).should('be.visible')
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

  /**
   * Checks that the given selector has a specified number of elements
   * and that each element contains the corresponding text from the provided titles array.
   * 
   * @param {string} selector - The CSS selector for the elements to check.
   * @param {string[]} titles - The array of expected titles.
   */
  public checkFilterTitles(selector: string, titles: string[]): void {
    cy.get(selector).should('have.length', titles.length).each((title, index) => {
      cy.wrap(title).should('contain', titles[index]);
    });
  }

  /**
   * @function checkFilterTitleCount
   * @description Checks that a specific filter has the expected count.
   * @param {string} filterName - The name of the filter to check.
   * @param {number} expectedCount - The expected count of the filter.
   * @example
   * checkFilterTitleCount('Štýly Hlavy Prsteňa', 1);
   */
  public checkFilterTitleCount(filterName: string, expectedCount: number): void {
    cy.get('h2.widget__title').contains(filterName).parent().within(() => {
      cy.get('div.filter-title__count').should('have.length', 1).each((element) => {
        cy.wrap(element).should('contain.text', expectedCount);
      });
    })
  }

  /**
   * Checks the engagement filter values in the sidebar, clicks the "Show More" button if it exists,
   * and verifies that checkboxes are not checked except those specified in expectedCheckedValues.
   *
   * @param {string} filterCategory - The name of the filter category.
   * @param {string[]} expectedValues - The array of expected engagement values for the filter.
   * @param {string[]} [expectedCheckedValues=[]] - The array of expected checked values for the filter.
   */
  public checkEngagementFilterValues(filterCategory: string, expectedValues: string[], expectedCheckedValues: string[] = []): void {
    // Click on the filter category to expand it
    cy.contains('h2.widget__title', filterCategory).click({ force: true });

    // Wait for the filter content to be visible
    cy.contains('h2.widget__title', filterCategory)
      .parents('.s-accordion__item')
      .find('.s-accordion__content')
      .should('be.visible');

    // Click "Show More" button if it exists
    cy.contains('h2.widget__title', filterCategory)
      .parents('.s-accordion__item')
      .find('.s-accordion__content')
      .then($content => {
        if ($content.find('.widget__collections__show-more').length > 0) {
          cy.wrap($content).find('.widget__collections__show-more').click({ force: true });
        }
      });

    // Get the filter values and check their content
    cy.contains('h2.widget__title', filterCategory)
      .parents('.s-accordion__item')
      .find('.s-accordion__content .widget__collections .form-checkbox')
      .should('have.length.at.least', expectedValues.length)
      .each((element, index) => {
        cy.wrap(element).within(() => {
          cy.get('label').should('contain.text', expectedValues[index]);

          const checkbox = cy.get('input[type="checkbox"]');
          cy.wrap(element).invoke('text').then((label: string) => {
            label = label.trim();

            if (expectedCheckedValues && expectedCheckedValues.includes(label)) {
              checkbox.should('be.checked');
            } else {
              checkbox.should('not.be.checked');
            }
          });
        });
      });
  }

  /**
   * Iterates through all filter categories and checks their engagement values,
   * clicks the "Show More" button if it exists, and verifies checkboxes.
   *
   * @param {object} filterValues - An object containing filter categories as keys and expected values as arrays.
   * @param {object} [checkedValues={}] - An object containing filter categories as keys and expected checked values as arrays.
   */
  public checkAndExpandFilterValues(filterValues: { [key: string]: string[] }, checkedValues: { [key: string]: string[] } = {}): void {
    Object.keys(filterValues).forEach(filterCategory => {
      this.checkEngagementFilterValues(filterCategory, filterValues[filterCategory], checkedValues[filterCategory] || []);
    });
  }

}
