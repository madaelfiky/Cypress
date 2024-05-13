describe("Hr Add Employee",()=> {
  let testData;

  beforeEach("Navigate and Login",() => {
    cy.fixture('hrLoginAddEmp.json').then((data) => {
      testData = data;
      cy.visit(testData.url); 
      cy.get("#email").type(testData.credentials.username);
      cy.get("#password").type(testData.credentials.password+"{enter}");
      cy.viewport(1400,1000)   
    });   
    })

  it("Hr Add Employee",()=> {
      cy.get("button[data-testid='add-employee-menu']").click();
      
      cy.get("li[data-testid='create-new-item']").click();

      cy.get("div[class=' css-1wy0on6']").should('be.visible');

      //cy.get("div[class=' css-1wy0on6']").click();

      //cy.get("div[class=' css-hlgwow']").type("Germany");

      cy.xpath("//input[@id='select-country']").type(testData.country);;

      cy.get("div[class=' css-1joffuw-option']").click();

      cy.get("#onboarding-get-started-btn").click();

      cy.get("div[data-testid='onboarding-product-workglobal']").click();

      cy.get("button[data-cy='product-selection-begin-onboarding-btn']").click();

      cy.get("header[class='sc-dhKdcB jgTtBH']").contains(testData.assertionData);
      
  })
})