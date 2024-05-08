describe("Hr Add Employee",()=> {

  beforeEach("Navigate and Login",() => {
      cy.visit("https://beta.workmotion.com/login/")
      
      cy.get("#email").type("aliaa+qahrmanager@workmotion.com");
      cy.get("#password").type("Test1234{enter}");
      cy.viewport(1400,1000)      
    })

  it("Hr Add Employee",()=> {

      cy.get("button[data-testid='add-employee-menu']").click();
      
      cy.get("li[data-testid='create-new-item']").click();

      cy.get("div[class=' css-1wy0on6']").should('be.visible');

      //cy.get("div[class=' css-1wy0on6']").click();

      //cy.get("div[class=' css-hlgwow']").type("Germany");
      
      cy.get("input[id='select-country']").type("Germany");

      cy.get("div[class=' css-1joffuw-option']").click();

      cy.get("#onboarding-get-started-btn").click();

      cy.get("div[data-testid='onboarding-product-workglobal'] > div > h3").click();

      cy.get("button[data-cy='product-selection-begin-onboarding-btn']").click();

      cy.get("header[class='sc-dhKdcB jgTtBH']").contains("Talent De")




  })

})