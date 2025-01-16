import { faker } from '@faker-js/faker';

describe("Hr Add Employee",()=> {
  let testData;

  beforeEach("Navigate and Login",() => {
    cy.fixture('addMutamersInGroup.json').then((data) => {
      testData = data;
      cy.visit(testData.url);       
      cy.xpath("//*[contains(text(),' Login ')]").click();
      cy.xpath("(//*[contains(text(),'Username / Password')])[1]").click(); 
      
      cy.xpath("//*[contains(@placeholder,'User Name')]").type(testData.credentials.username);
      cy.xpath("//*[contains(@placeholder,'Password')]").type(testData.credentials.password); 

      
      cy.xpath("(//*[contains(text(),' Login ')])[2]").click();

      const otpDigits = [1, 2, 3, 4];

      // Loop through each digit and enter it into the respective input field
      otpDigits.forEach((digit, index) => {
        // Construct the XPath for the current field
        const fieldXPath = `//*[@formcontrolname='code_${index + 1}']`;
        
        // Use Cypress XPath to locate and type the digit
        cy.xpath(fieldXPath).type(digit.toString());
      });

      cy.xpath("//*[contains(text(),' Verify ')]").click();
      
      


      //cy.get("#userName").type(testData.credentials.username);
      //cy.get("#password").type(testData.credentials.password); 
      //cy.get("#CaptchaCode").type(testData.credentials.captcha+"{enter}");     
      //cy.get("#OtpValue").type(testData.credentials.otp+"{enter}");

      

      cy.xpath("//*[@id='ContractsListTable_paginate']/ul/li[3]/a").click();

      cy.xpath("//* [contains(@href ,'23068954')]").click();

      cy.viewport(1700,580)   
    });   
    })

  it("Hr Add Employee",()=> {

    for (let n = 1; n <= 5; n++) {

      


      cy.get("#qa-menu-groups").click();
      //cy.get("#qa-create-group").click();
      //cy.wait(2000)
      
      //cy.get("#kt_content > div > div.kt-portlet > div.kt-portlet__head > div.kt-portlet__head-toolbar > div.kt-portlet__head-wrapper.p-2 > button").click();
      //cy.wait(2000)
      //cy.get("#groupNameEn_f").type("Group50");
      //cy.wait(2000)
      //cy.xpath("//*[@id='collapseOne8']/div/div[3]/div/button[1]").click();
      //cy.wait(2000)

      
      //cy.xpath("//*[@id='GroupsList']/tbody/tr[1]/td[1]").click();
      //cy.get("#qa-actions").click();
      //cy.wait(2000);
    

      //cy.visit("https://web-huic.haj.gov.sa/newumrah-test/bsp/ExternalAgencies/Groups/EditMuatamerList/CfDJ8KfNMWrNXERPuyqjjVXyx6cbN0xcReS6sBI252202c1NznioWKL05y61vpq15GydiJu8MsfLuDPVw2eG9K1k5du3kVStBhM8Bo2SRGN79QDp_dTgZnuj3K4wYeGLScPEIQ");
      //cy.wait(5000);
      //const randomWordgroup = faker.lorem.word();
      //cy.get("#GroupNameEn").type(randomWord + "AutoMated Group");
      //used cy.get("#GroupNameEn").type("Automation Big Mutamer Group " + randomWordgroup +" " + n);
      

      //cy.get("#select2-EmbassyId-container").click();
      
      //cy.get("#select2-EmbassyId-results >li:nth-of-type(2)").click();

      
      cy.get("#qa-next").click();

      
      //cy.get("#saCloseBtn").click();


      for (let i = 1; i <= 50; i++) {

        

      const randomPassport = faker.string.numeric(8);

        const randomWord = faker.lorem.word();

        const randomWord1 = faker.lorem.word();
        
        const randomWord2 = faker.lorem.word();
        
        const randomWord3 = faker.lorem.word();
        
        const randomWord4 = faker.lorem.word();
        cy.wait(2000);
      cy.xpath("//* [text()='Add Muatamer']").click();

      const filePath = 'Yemen Pilgrim\\Passportturkey.jpg';  // relative to cypress/fixtures

      cy.get('#PassportPictureUploader').attachFile(filePath);

      const filePath2 = 'ftm.png';  // relative to cypress/fixtures
        //new
      //cy.xpath("//* [text()='Ok']").click();

      cy.get('#VaccinationPictureUploader').attachFile(filePath2);
      
      //new
      cy.get('#PersonalPictureUploader').attachFile(filePath2);

      //new 
      
      cy.get("#select2-NationalityId-container").click();
      
      cy.get("#select2-NationalityId-results >li:nth-of-type(2)").click();
      
      //new
       cy.get('#ResidencyPictureUploader').attachFile(filePath2);
        
      cy.get("#IqamaId").type("55487877778");
      
      cy.get("#FirstNameEn").clear().type("First"+randomWord1);
      cy.get("#SecondNameEn").clear().type("Second"+randomWord2);
      cy.get("#ThirdNameEn").clear().type("Third"+randomWord3);
      cy.get("#FamilyNameEn").clear().type("Family"+randomWord4);
      
      //new
      //cy.get("#IqamaExpiryDate").type("2025-01-22");
      cy.get('#FirstNameAr, #FamilyNameAr').each(($el) => {
        // Remove each element
        cy.wrap($el).invoke('remove'); });
      /*
      cy.get('#FirstNameAr').then($input => {
        if ($input.is(':visible')) {
          // If the element is visible, type into it
          cy.wrap($input).type('أحمد');
        } else {
          
        }
      });
        cy.get('#FamilyNameAr').then($input => {
          if ($input.is(':visible')) {
            // If the element is visible, type into it
            cy.wrap($input).type('الفقي');
          } else {
            
          }
        });*/
        

        
      cy.get("#select2-MobileCountryKey-container").click();
      
      cy.get("#select2-MobileCountryKey-results >li:nth-of-type(2)").click();
      
      cy.get("#IqamaExpiryDate") // Replace with the element's selector
      .then(($el) => {
        $el.remove(); // Removes the element from the DOM
      });
      
      cy.get("#MobileNo").type("1119892921");

      
      cy.get("#Email").type("test@test.com");

      cy.get("#select2-Gender-container").click();
      
      cy.get("#select2-Gender-results >li:nth-of-type(2)").click();

      cy.get("#select2-MartialStatus-container").click();
      
      cy.get("#select2-MartialStatus-results >li:nth-of-type(2)").click();

      
      cy.get("#Job").type("swq");


      cy.get("#select2-BirthCountry-container").click();
      
      cy.get("#select2-BirthCountry-results >li:nth-of-type(2)").click();

      
      cy.get("#BirthCity").type(randomWord);

      
      //cy.get("#BirthDate").type("1980-01-22");

      
      cy.get("#Job").click();

      
      cy.get("#IssueCity").type(randomWord);

      //cy.get("#select2-IssueCountry-container").click();
      
      //cy.get("#select2-IssueCountry-results >li:nth-of-type(2)").click();


      //cy.get("#PassportIssueDate").type("2022-01-22");
      
      //cy.get("#PassportExpiryDate").type("2029-01-22");
      
      cy.get("#select2-PassportType-container").click();
      
      cy.get("#select2-PassportType-results >li:nth-of-type(2)").click();
      
       cy.get('#PassportNumber').then(($input) => {
      // $input is a jQuery object
      const inputElement = $input[0] as HTMLInputElement;
      inputElement.value = "N" + randomPassport + i;

      //cy.wait(1000);
    });
        
      cy.get("#CaptchaCode").type("1");
      
      cy.get("#qa-add-mutamer-save").click({ force: true });

      cy.get('#saCloseBtn').then(($el) => {
        // Check if the element is visible and not disabled
        if ($el.is(':visible') && !$el.is(':disabled')) {
          cy.wrap($el).click();
        } else {
          
      cy.get("#CaptchaCode").type("1"+"{enter}");
      cy.get("#saCloseBtn").click();
        }
      });
        
      //cy.get("#saCloseBtn").click();
      
      //cy.wait(1000);
      }    
      cy.xpath("//* [contains(text() ,'Next Step')]").click();
      
      //cy.xpath("(//*[@id='qa-actions']/i)[1]").click();

      //cy.xpath("/html/body/div[5]/div/a[4]/span").click();

      
      //cy.get("#confirmBtn").click();

      //cy.visit("https://web-huic.haj.gov.sa/newumrah-test/bsp/ExternalAgencies/Groups/Index"); 
    }
     
      
  })
})