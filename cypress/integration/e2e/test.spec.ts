import { BasePo } from "../../pages/base.po";
import { MainPo } from "../../pages/main.po";
import engagementRingsSchema from '../../fixtures/schemas/engagementRingsSchema';

const basePage: BasePo = new BasePo();
const mainPo: MainPo = new MainPo();

describe("Test for AQA position", () => {
  it("Test Zásnuby API schema and filters", () => {
    cy.visit("/");
    cy.wait("@popups");
    cy.get("body").then((body) => {
      if (body.find(mainPo.elements.marketingPopUp).length > 0) {
        basePage.clickOnElementBySelector(mainPo.buttons.closePopUp);
      }
    });

    basePage.clickOnElementBySelectorByIndex(mainPo.buttons.engagementRings, 0);
    basePage.urlShouldInclude('engagement-rings');

    cy.wait('@getEngagementRings').then((interception) => {
      const { response } = interception;
      expect(response.statusCode).to.eq(200);
      cy.validateSchema(engagementRingsSchema, response.body);
    });
  });
});
