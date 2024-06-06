import { MainPo } from "../../pages/main.po";
import { CollectionInitialPo } from "../../pages/collectionInitial.po";
import { ProductPo } from "../../pages/product.po";
import { CatalogPo } from "../../pages/catalog.po";
import wishlistSchema from "../../fixtures/schemas/productPageSchemas/wishlistSchema";
import productSchema from "../../fixtures/schemas/productPageSchemas/productSchema";
import productQuestionFormSchema from "../../fixtures/schemas/productPageSchemas/productQuestionFormSchema";
import productShipReturnSchema from "../../fixtures/schemas/productPageSchemas/productShipReturnSchema";
import productAskQuestionSchema from "../../fixtures/schemas/productPageSchemas/productAskQuestionSchema";
import productEngagementSchema from "../../fixtures/schemas/catalogPageSchemas/productEngagementSchema";
import productCatalogSchema from "../../fixtures/schemas/catalogPageSchemas/productCatalogSchema";
import filtersSchema from "../../fixtures/schemas/catalogPageSchemas/filtersSchema";
import { engagementFilterValues } from '../../fixtures/engagementFilterValues';

const mainPage: MainPo = new MainPo();
const collectionInitialPage: CollectionInitialPo = new CollectionInitialPo();
const productPage: ProductPo = new ProductPo();
const catalogPage: CatalogPo = new CatalogPo();

describe("Test for AQA position", () => {
  beforeEach(() => {
    cy.intercept('GET', "**api/v1/popups**").as("popups");
    cy.intercept('GET', "**api/v1/pages/engagement").as("engagement");
    cy.intercept('GET', "**api/v1/filters").as('filters');
    cy.intercept('GET', "**api/v1/system-catalog/engagement**").as("systemCatalogEngagement");
    cy.intercept('GET', "**api/v1/products/jednoduchynahrdelnikspismenomnaretiazke").as("nahrdelnik");
    cy.intercept('GET', "**api/v1/blocks/product-question-form").as("productQuestionForm");
    cy.intercept('GET', "**api/v1/blocks/product-ship-return").as("productShipReturn");
    cy.intercept('GET', "**api/v1/blocks/product-ask-question").as("productAskQuestion");
    cy.intercept('POST', "**api/v1/wishlists").as("wishlists");
  });
  it("Test Zásnuby API schema and filters", () => {
    cy.visit("/");
    cy.wait("@popups");
    mainPage.clickOnElementBySelector(mainPage.buttons.closePopUp);
    mainPage.hoverElementBySelectorAndIndexRightClick(mainPage.buttons.engagementRings, 0);
    mainPage.isSiblingElementVisibleBySelector(mainPage.buttons.engagementRings, mainPage.elements.megaMenu)
    mainPage.clickOnVisibleElementBySelector(mainPage.buttons.engagementMaterialsUpave);

    cy.wait('@engagement').then((interception) => {
      const { response } = interception;
      expect(response.statusCode).to.eq(200);
      cy.validateSchema(productEngagementSchema, response.body);
    });
    cy.wait('@filters').then((interception) => {
      const { response } = interception;
      expect(response.statusCode).to.eq(200);
      cy.validateSchema(filtersSchema, response.body);
    });
    cy.wait('@systemCatalogEngagement').then((interception) => {
      const { response } = interception;
      expect(response.statusCode).to.eq(200);
      cy.validateSchema(productCatalogSchema, response.body);
    });

    const expectedTitles = [
      'Kategória',
      'Kovy',
      'Tvar Prsteňa',
      'Tvar Kameňov',
      'Štýly Hlavy Prsteňa',
      'Štýl Osadenia Kameňa'
    ];
    catalogPage.checkFilterTitles(catalogPage.buttons.filterTitles, expectedTitles);
    catalogPage.checkFilterTitleCount('Štýly Hlavy Prsteňa', 1);

    const checkedValues = {
      'Štýly Hlavy Prsteňa': ['U-Páve Single Halo Malý'],
    };

    catalogPage.checkAndExpandFilterValues(engagementFilterValues, checkedValues);
  });

  it("Test add to wishlist Náhrdelník Mon Petit and API schemas", () => {
    cy.visit("/");
    cy.wait("@popups");

    mainPage.clickOnElementByIndex(mainPage.buttons.initials, 0);
    mainPage.waitForOpenedPage('collection/initials');

    collectionInitialPage.scrollToElement(collectionInitialPage.buttons.monPetitNecklaceProduct);
    collectionInitialPage.clickOnElementBySelector(collectionInitialPage.buttons.monPetitNecklaceProduct);
    
    cy.wait('@nahrdelnik').then((interception) => {
      const { response } = interception;
      expect(response.statusCode).to.eq(200);
      cy.validateSchema(productSchema, response.body);
    });
    cy.wait('@productQuestionForm').then((interception) => {
      const { response } = interception;
      expect(response.statusCode).to.eq(200);
      cy.validateSchema(productQuestionFormSchema, response.body);
    });
    cy.wait('@productShipReturn').then((interception) => {
      const { response } = interception;
      expect(response.statusCode).to.eq(200);
      cy.validateSchema(productShipReturnSchema, response.body);
    });
    cy.wait('@productAskQuestion').then((interception) => {
      const { response } = interception;
      expect(response.statusCode).to.eq(200);
      cy.validateSchema(productAskQuestionSchema, response.body);
    });
    productPage.waitForElementBeVisible(productPage.elements.mainImage);
    productPage.scrollToElement(productPage.buttons.addRoCompare);
    productPage.clickOnElementBySelector(productPage.buttons.addRoCompare);

    cy.wait('@wishlists').then((interception) => {
      const { response } = interception;
      expect(response.statusCode).to.eq(200);
      cy.validateSchema(wishlistSchema, response.body);
    });
    
  });
});
