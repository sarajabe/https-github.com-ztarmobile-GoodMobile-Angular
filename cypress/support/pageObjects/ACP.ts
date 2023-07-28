import { PageObjects } from '../../support/pageObjects';
import { CONSTANT } from '../../fixtures/constants/index';
class Acp {
     clickOnAccountSummaryFromPopUp() {
          cy.get('[data-cy="action-button"]').click();
     };
     clickOnBackToSummaryBtn() {
          cy.get('[data-cy="backToSummaryBtn"]').click();
          return this;
     };
     clickOnCancelPlanBtn() {
          cy.get('[data-cy="cancelPlanBtn"]').click();
          return this;
     };
     clickOnResumeFillingBtn() {
          cy.get('[data-cy="resumeFillingBtn"]').click();
          return this;
     };
     clickOnCancelBtnFromPopUp() {
          cy.get('[data-cy="cancel-btn"]').click();
          return this;
     };
     clickOnCancelAppBtn() {
          cy.get('[data-cy="cancelAppBtn"]').click();
          return this;
     };
     clickOnLearnBtn() {
          cy.get('[data-cy="check-qualification"]').click();
          return this;
     };
     clickOnSubmitBtn() {
          cy.get('.primary').click();
     };
     clickOnVerifyBtn() {
          cy.get('[data-cy="verifyBtn"]').click();
          return this;
     };
     clickOnLessFaqsBtn() {
          cy.get('.more-or-less-faqs > a').click();
          return this;
     };
     clickOnHowLongTheEbbWillBeAvailable() {
          cy.get('#how-long-will-the-acp-program-be-available').click();
          return this;
     };
     clickOnAreAnyBusinessTypeAccountsEligibleForTheACPDiscount() {
          cy.get('#are-any-business-type-accounts-eligible-for-the-acp-discount').click();
          return this;
     };
     clickOnWhatPlansAreEligible() {
          cy.get('#what-plans-are-eligible-for-the-acp-at-good2go-mobile').click();
          return this;
     };
     clickOnIHaveLifelineService() {
          cy.get('#i-have-lifeline-service-am-i-eligible-for-the-acp-at-good2go-mobile').click();
          return this;
     };
     clickOnMoreFaqs() {
          cy.get('.more-or-less-faqs > a').click();
          return this;
     };
     clickOnHowDoIknowTheenrollmentWasSuccessful() {
          cy.get('#how-will-i-know-my-enrollment-was-successful').click();
          return this;
     };
     clickOnHowDoIknow() {
          cy.get('#how-do-i-know-if-i-qualify-for-the-acp-program').click();
          return this;
     };
     clickOnWhoIsEligibile() {
          cy.get('#who-is-eligible-for-the-acp-program').click();
          return this;
     };
     clickOnWhyOfferingBtn() {
          cy.get('#why-is-good2go-offering-this-program').click();
          return this;
     };
     clickOnCheckEligbilityBtn() {
          cy.contains('a', 'why-is-good2go-offering-this-program').click();
          return this;
     };
     clickOnViewFderalAssistanceProgramBtn() {
          cy.contains('a', 'View federal assistance program').click();
          return this;
     };
     clickOnVisitNationalVirifierBtn() {
          cy.contains('a', 'Visit national Verifier').click();
          return this;
     };
     clickOnLearnMoreBtn() {
          cy.get('[data-cy="check-qualification"]').click();
          return this;
     };
     clickOnDoIQualifyBtn() {
          cy.get('[data-cy="doIQualify"]').click();
          return this;
     };
     clickOnGotItBtnFromPopUp() {
          cy.get('[data-cy="action-button"]').click();
          return this;
     };
     clickOnUseSameAddressCheckbox() {
          cy.get('[data-cy=useSameAddress]').click();
          return this;
     };
     fillInPhysicalAddressInfo(adrress1, city) {
          cy.get('[data-cy="addressLookup"]').click({force:true});
          cy.get('[data-cy="addressLookup"]').clear();
          cy.get('[data-cy="addressLookup"]').type(adrress1);
          cy.get('.mat-option-text').first().click();
          cy.get('[data-cy="city"]').click({force:true});
          cy.get('[data-cy="city"]').clear();
          cy.get('[data-cy="city"]').type(city);
          return this;
     };
     fillInPhysicalAddressInfo2(state, zip) {
          cy.get('[data-cy="state"]').click({force:true});
          cy.get('[data-cy="state"]').clear();
          cy.get('[data-cy="state"]').type(state);
          cy.get('[data-cy="zipCode"]').click({force:true});
          cy.get('[data-cy="zipCode"]').clear();
          cy.get('[data-cy="zipCode"]').type(zip);
          return this;
     };

     fillInMailingAddress(ADDRESS_LINE1, city) {
          cy.get('[data-cy="mailingAddress1"]').click({force:true});
          cy.get('[data-cy="mailingAddress1"]').clear();
          cy.get('[data-cy="mailingAddress1"]').type(ADDRESS_LINE1);
          cy.get('.mat-option-text').first().click();
          cy.get('[data-cy="mail-city"]').click({force:true});
          cy.get('[data-cy="mail-city"]').clear();
          cy.get('[data-cy="mail-city"]').type(city);
          return this;
     };
     fillInMailingAddress2(state, zip) {
          cy.get('[data-cy="mail-state"]').click({force:true});
          cy.get('[data-cy="mail-state"]').clear();
          cy.get('[data-cy="mail-state"]').type(state);
          cy.get('[data-cy="mail-zipCode"]').click({force:true});
          cy.get('[data-cy="mail-zipCode"]').clear();
          cy.get('[data-cy="mail-zipCode"]').type(zip);
          return this;
     };
     clickOnQualifyingProgram(FIRST_QUALIFYING_PROGRAM) {
          // browser.actions().mouseMove(qualifyingProgram).perform();
          cy.get('[data-cy=eligibilityCode]').trigger('mousemove');
          cy.get('[data-cy=eligibilityCode]').type(FIRST_QUALIFYING_PROGRAM);
          return this;
     };
     fillInPersonalInfoPart1(firstName, lastName) {
          cy.get('[data-cy="firstName"]').click({force: true});
          cy.get('[data-cy="firstName"]').clear();
          cy.get('[data-cy="firstName"]').type(firstName);
          cy.get('[data-cy="lastName"]').click({force:true});
          cy.get('[data-cy="lastName"]').clear();
          cy.get('[data-cy="lastName"]').type(lastName);
          return this;
     };
     clickOnNextBtn() {
          cy.contains('Next').click();
          return this;
     };
     checkNoRadioBtn() {
          cy.get('#no').click();
          return this;
     };
     checkYesRadioBtn() {
          cy.get('#yes').click();
          return this;
     };
     checkYesWithoutIDRadioBtn() {
          cy.get('#yes-without-id').click();
          return this;
     };
     fillInACPAppID(acpID) {
          cy.get('[data-cy="applicationId"]').click({force:true});
          cy.get('[data-cy="applicationId"]').clear();
          cy.get('[data-cy="applicationId"]').type(acpID);
          return this;
     };
     fillInState(state) {
          cy.get('[data-cy="state"]').click({force:true});
          cy.get('[data-cy="state"]').clear();
          cy.get('[data-cy="state"]').type(state);
          return this;
     };
     clickOnMonth(month) {
          cy.get('[data-cy="month"]').trigger('mousemove');
          cy.get('[data-cy="month"]').type(month);
          return this;
     };
     fillInPersonalInfoPart2(year) {
          cy.get('[data-cy="year"]').click({force:true});
          cy.get('[data-cy="year"]').clear();
          cy.get('[data-cy="year"]').type(year);
          return this;
     };
     fillInEmail(email) {
          cy.get('[data-cy="email"]').click({force:true});
          cy.get('[data-cy="email"]').clear();
          cy.get('[data-cy="email"]').type(email);
          return this;
     };
     fillInPhoneNumber(phone_no) {
          cy.get('[data-cy="phoneNumber"]').click({force:true});
          cy.get('[data-cy="phoneNumber"]').clear();
          cy.get('[data-cy="phoneNumber"]').type(phone_no);
          return this;
     };
     fillInSSN(ssn_no) {
          cy.get('[data-cy="ssn"]').click({force:true});
          cy.get('[data-cy="ssn"]').clear();
          cy.get('[data-cy="ssn"]').type(ssn_no);
          return this;
     };
     fillITribalID(tribal_id) {
          cy.get('[data-cy="tribalID"]').click({force:true});
          cy.get('[data-cy="tribalID"]').clear();
          cy.get('[data-cy="tribalID"]').type(tribal_id);
          return this;
     };
     clickOnIdType(ssn) {
          // browser.actions().mouseMove(idTypeField).perform();
          cy.get('[data-cy="idType"]').trigger('mousemove');
          cy.get('[data-cy="idType"]').type(ssn);
          return this;
     };
     fillInPersonalInfoPart3(ssn_no, phoneNumber,email) {
          cy.get('[data-cy=ssn]').clear();
          cy.get('[data-cy=ssn]').type(ssn_no);
          cy.get('[data-cy="phoneNumber"]').clear();
          cy.get('[data-cy="phoneNumber"]').type(phoneNumber);
          cy.get('[data-cy=email]').clear();
          cy.get('[data-cy=email]').type(email);
          return this;
     };
     clickOnBackBtn() {
          cy.get('[data-cy="backBtn"]').click();
          return this;
     };
     clickOnSignInLink() {
          cy.get('[data-cy="signInLink"]').click();
          return this;
     };
     cllickOnApplyNowFrom3StepsSection() {
          cy.get('[data-cy="applyNow3StepsSection"]').click();
          return this;
     };
     clickOnStartHere() {
          cy.get('[data-cy="startHere"]').click();
          return this;
     };
     clickOnApplyNowBtn() {
          cy.get('[data-cy="bannerApplyNowBtn"]').click();
          return this;
     };
     clickOnGetStarted() {
          cy.contains('a', 'Get Started ').click();
          return this;
     };
     clickOnSSNRadio() {
          cy.get('[data-cy="ssnRadio"]').click();
          return this;
     };
     clickOnTribalRadio() {
          cy.get('[data-cy="tribalBtn"]').click();
          return this;
     };
     clickOnIQualifyIndividually() {
          cy.get('#indivisual').click();
          return this;
     };
     fillInSchoolName() {
          cy.get('[data-cy="schoolName"]').click({force:true})
          cy.get('[data-cy="schoolName"]').clear();
          cy.get('[data-cy="schoolName"]').type('automated test ')
          return this;
     };
     firstCheck() {
          cy.get('[data-cy="firstCheck"]').click()
          cy.get('[data-cy="firstCheck"]').clear();
          cy.get('[data-cy="firstCheck"]').type('CH')
          return this;
     };
     secondCheck() {
          cy.get('[data-cy="secondCheck"]').click();
          cy.get('[data-cy="secondCheck"]').clear();
          cy.get('[data-cy="secondCheck"]').type('CH');
          return this;
     };
     thirdCheck() {
          cy.get('[data-cy="thirdCheck"]').click();
          cy.get('[data-cy="thirdCheck"]').clear();
          cy.get('[data-cy="thirdCheck"]').type('CH');
          return this;
     };
     forthCheck() {
          cy.get('[data-cy="forthCheck"]').click();
          cy.get('[data-cy="forthCheck"]').clear();
          cy.get('[data-cy="forthCheck"]').type('CH');
          return this;
     };
     firstCheckSignUp() {
          cy.get('[data-cy="firstCheck"]').click()
          cy.get('[data-cy="firstCheck"]').clear();
          cy.get('[data-cy="firstCheck"]').type('MY')
          return this;
     };
     secondCheckSignUp() {
          cy.get('[data-cy="secondCheck"]').click();
          cy.get('[data-cy="secondCheck"]').clear();
          cy.get('[data-cy="secondCheck"]').type('MY');
          return this;
     };
     thirdCheckSignUp() {
          cy.get('[data-cy="thirdCheck"]').click();
          cy.get('[data-cy="thirdCheck"]').clear();
          cy.get('[data-cy="thirdCheck"]').type('MY');
          return this;
     };
     forthCheckSignUp() {
          cy.get('[data-cy="forthCheck"]').click();
          cy.get('[data-cy="forthCheck"]').clear();
          cy.get('[data-cy="forthCheck"]').type('MY');
          return this;
     };
     firstCheckResumeFillingSignUp() {
          cy.get('#initial1').click()
          cy.get('#initial1').clear();
          cy.get('#initial1').type('MY')
          return this;
     };
     secondCheckResumeFillingSignUp() {
          cy.get('#initial2').click();
          cy.get('#initial2').clear();
          cy.get('#initial2').type('MY');
          return this;
     };
     thirdCheckResumeFillingSignUp() {
          cy.get('#initial3').click();
          cy.get('#initial3').clear();
          cy.get('#initial3').type('MY');
          return this;
     };
     forthCheckResumeFillingSignUp() {
          cy.get('#initial4').click();
          cy.get('#initial4').clear();
          cy.get('#initial4').type('MY');
          return this;
     };
     fifthCheckResumeFillingSignUp() {
          cy.get('#initial10').click();
          cy.get('#initial10').clear();
          cy.get('#initial10').type('MY');
          return this;
     };
     sixCheckResumeFillingSignUp() {
          cy.get('#acpFederalSubsidyInitials').click();
          cy.get('#acpFederalSubsidyInitials').clear();
          cy.get('#acpFederalSubsidyInitials').type('MY');
          return this;
     };
     sevenCheckResumeFillingSignUp() {
          cy.get('#initial6').click()
          cy.get('#initial6').clear();
          cy.get('#initial6').type('MY')
          return this;
     };
     eightCheckResumeFillingSignUp() {
          cy.get('#initial7').click();
          cy.get('#initial7').clear();
          cy.get('#initial7').type('MY');
          return this;
     };
     nineCheckResumeFillingSignUp() {
          cy.get('#initial8').click();
          cy.get('#initial8').clear();
          cy.get('#initial8').type('MY');
          return this;
     };
     // tenCheckResumeFillingSignUp() {
     //      cy.get('#initial4').click();
     //      cy.get('#initial4').clear();
     //      cy.get('#initial4').type('MY');
     //      return this;
     // };
     elevenCheckResumeFillingSignUp() {
          cy.get('#initial9').click();
          cy.get('#initial9').clear();
          cy.get('#initial9').type('MY');
          return this;
     };
     mismatchedInitials() {
          cy.get('[data-cy="firstCheck"]').click();
          cy.get('[data-cy="firstCheck"]').clear();
          cy.get('[data-cy="firstCheck"]').type('MK');
          cy.get('[data-cy="secondCheck"]').click();
          cy.get('[data-cy="secondCheck"]').clear();
          cy.get('[data-cy="secondCheck"]').type('MK');
          cy.get('[data-cy="thirdCheck"]').click();
          cy.get('[data-cy="thirdCheck"]').clear();
          cy.get('[data-cy="thirdCheck"]').type('MK');
          cy.get('[data-cy="forthCheck"]').click();
          cy.get('[data-cy="forthCheck"]').clear();
          cy.get('[data-cy="forthCheck"]').type('MK');
          return this;
     };
     NotAPPFoundSignature() {
          cy.get('[data-cy="firstCheck"]').click();
          cy.get('[data-cy="firstCheck"]').clear();
          cy.get('[data-cy="firstCheck"]').type('ML');
          cy.get('[data-cy="secondCheck"]').click();
          cy.get('[data-cy="secondCheck"]').clear();
          cy.get('[data-cy="secondCheck"]').type('ML');
          cy.get('[data-cy="thirdCheck"]').click();
          cy.get('[data-cy="thirdCheck"]').clear();
          cy.get('[data-cy="thirdCheck"]').type('ML');
          cy.get('[data-cy="forthCheck"]').click();
          cy.get('[data-cy="forthCheck"]').clear();
          cy.get('[data-cy="forthCheck"]').type('ML');
          return this;
     };
     NotCompleteAPPSignature() {
          cy.get('[data-cy="firstCheck"]').click();
          cy.get('[data-cy="firstCheck"]').clear();
          cy.get('[data-cy="firstCheck"]').type('MY')
          cy.get('[data-cy="secondCheck"]').click();
          cy.get('[data-cy="secondCheck"]').clear();
          cy.get('[data-cy="secondCheck"]').type('MY');
          cy.get('[data-cy="thirdCheck"]').click();
          cy.get('[data-cy="thirdCheck"]').clear();
          cy.get('[data-cy="thirdCheck"]').type('MY');
          cy.get('[data-cy="forthCheck"]').click();
          cy.get('[data-cy="forthCheck"]').clear();
          cy.get('[data-cy="forthCheck"]').type('MY');
          return this;
     };
     completeAPPSignature() {
          cy.get('[data-cy="firstCheck"]').click()
          cy.get('[data-cy="firstCheck"]').clear();
          cy.get('[data-cy="firstCheck"]').type('TS')
          cy.get('[data-cy="secondCheck"]').click();
          cy.get('[data-cy="secondCheck"]').clear();
          cy.get('[data-cy="secondCheck"]').type('TS');
          cy.get('[data-cy="thirdCheck"]').click();
          cy.get('[data-cy="thirdCheck"]').clear();
          cy.get('[data-cy="thirdCheck"]').type('TS');
          cy.get('[data-cy="forthCheck"]').click();
          cy.get('[data-cy="forthCheck"]').clear();
          cy.get('[data-cy="forthCheck"]').type('TS');
          return this;
     };
     duplicateAPPSignature() {
          cy.get('[data-cy="firstCheck"]').click()
          cy.get('[data-cy="firstCheck"]').clear();
          cy.get('[data-cy="firstCheck"]').type('DA')
          cy.get('[data-cy="secondCheck"]').click();
          cy.get('[data-cy="secondCheck"]').clear();
          cy.get('[data-cy="secondCheck"]').type('DA');
          cy.get('[data-cy="thirdCheck"]').click();
          cy.get('[data-cy="thirdCheck"]').clear();
          cy.get('[data-cy="thirdCheck"]').type('DA');
          cy.get('[data-cy="forthCheck"]').click();
          cy.get('[data-cy="forthCheck"]').clear();
          cy.get('[data-cy="forthCheck"]').type('DA');
          return this;
     };
     fillInFullName(fullName) {
          cy.get('[data-cy="name"]').click({force:true})
          cy.get('[data-cy="name"]').clear();
          cy.get('[data-cy="name"]').type(fullName)            
          return this;
     };
     fillInFullNameResumeFilling(fullName) {
          cy.get('#applicantSignatureForCertId').click({force:true})
          cy.get('#applicantSignatureForCertId').clear();
          cy.get('#applicantSignatureForCertId').type(fullName)
          return this;
     };
     notCapitalisedInitials() {
          cy.get('[data-cy="firstCheck"]').click();
          cy.get('[data-cy="firstCheck"]').clear();
          cy.get('[data-cy="firstCheck"]').type('mk');
          cy.get('[data-cy="secondCheck"]').click();
          cy.get('[data-cy="secondCheck"]').clear();
          cy.get('[data-cy="secondCheck"]').type('mk');
          cy.get('[data-cy="thirdCheck"]').click();
          cy.get('[data-cy="thirdCheck"]').clear();
          cy.get('[data-cy="thirdCheck"]').type('mk');
          cy.get('[data-cy="forthCheck"]').click();
          cy.get('[data-cy="forthCheck"]').clear();
          cy.get('[data-cy="forthCheck"]').type('mk');
          return this;
     };
     pendingReviewInitials() {
          cy.get('[data-cy="firstCheck"]').click();
          cy.get('[data-cy="firstCheck"]').clear();
          cy.get('[data-cy="firstCheck"]').type('BG');
          cy.get('[data-cy="secondCheck"]').click();
          cy.get('[data-cy="secondCheck"]').clear();
          cy.get('[data-cy="secondCheck"]').type('BG');
          cy.get('[data-cy="thirdCheck"]').click();
          cy.get('[data-cy="thirdCheck"]').clear();
          cy.get('[data-cy="thirdCheck"]').type('BG');
          cy.get('[data-cy="forthCheck"]').click();
          cy.get('[data-cy="forthCheck"]').clear();
          cy.get('[data-cy="forthCheck"]').type('BG');
          return this;
     };
     purchasePlanWithStorePickup(){
          cy.get('.menu-item.ng-star-inserted > .items-link').click();
          PageObjects.TitleExpectations.goToACPApplicationPage();
          cy.get('.actions > .primary').click();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL2);
          cy.get('.title').should('have.text','ACP Enrollment');
          cy.get('[data-cy="checkBtn"]').click();
          PageObjects.Compatibility.assertIMEInumberAddressReferenceRequired();
          PageObjects.Compatibility.enterIMEInumber(CONSTANT.COMPATIBILITY.NEWMEID.INVALID_MEID);
          PageObjects.Compatibility.addressRefNotSelectedFromList();
          PageObjects.Compatibility.assertIMEInumberAddressReferenceInvalid();
          PageObjects.Compatibility.enterIMEInumber(CONSTANT.COMPATIBILITY.TMO_ONLY.TMO1);
          PageObjects.Compatibility.enterAddressRef();
          cy.get('[data-cy="checkBtn"]').click();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL2);
          cy.get('.head-note').should('have.text','Your Phone is compatible!');
          cy.get('[data-cy="nextBtn"]').click();
          this.clickOnBackBtn();
          cy.get('.head-note').should('have.text','Your Phone is compatible!');
          cy.get('[data-cy="nextBtn"]').click();
          PageObjects.ShippingPage.clickOnStorePickup();
          cy.get('[data-cy="barCodeVal"]').click();
          cy.get('[data-cy="nextBtn"]').click();
          cy.get('.top-desc').should('have.text','ACP Application successful!');
          cy.get('.sub-desc').should('have.text','Next Steps - In Store SIM Card Pickup.');
          cy.get('[data-cy="continueBtn"]').click();
          PageObjects.TitleExpectations.goToPurchasedPlansPage();
          cy.get('[data-cy="planTitle"]').should('have.text',' Affordable Connectivity Program Plan');
          cy.get('[data-cy="pickupBarCode"]').should('have.text','In-store Pickup Barcode');
          cy.get('[data-cy="deliveryOption"]').should('have.text','Store Pickup');
     }
     cancelPurchasePlan(){
          cy.get('.menu-item.ng-star-inserted > .items-link').click();
          PageObjects.TitleExpectations.goToACPApplicationPage();
          cy.get('.actions > .primary').click();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL2);
          cy.get('.title').should('have.text','ACP Enrollment');
          PageObjects.Compatibility.enterIMEInumber(CONSTANT.COMPATIBILITY.TMO_ONLY.TMO1);
          PageObjects.Compatibility.enterAddressRef();
          cy.get('[data-cy="checkBtn"]').click();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL2);
          cy.get('.head-note').should('have.text','Your Phone is compatible!');
          cy.get('[data-cy="nextBtn"]').click();
          cy.get('.address-section-title').should('have.text','How do you want to get your package?');
          cy.get('[data-cy="cancel"]').click();
          PageObjects.TitleExpectations.goToACPPage();
     };
     requiredMessagesAcpFirstPage(){
          cy.get('[data-cy="required-fname-msg"]').should('have.text',' First name is required ');
          cy.get('[data-cy="required-lname-msg"]').should('have.text',' Last name is required ');
          cy.get('[data-cy="required-month-msg"]').should('have.text',' Date of Birth is required ');
          cy.get('[data-cy="required-idType-msg"]').should('have.text',' Government ID Type is required ');
          cy.get('[data-cy="required-email-msg"]').should('have.text',' Email Address is required ');
     };
     invalidMessagesAcpFirstPage(){
          cy.get('[data-cy="invalid-fname-msg"]').should('have.text',' First name is invalid ');
          cy.get('[data-cy="invalid-lname-msg"]').should('have.text',' Last name is invalid ');
          cy.get('[data-cy="invalid-ssn-msg"]').should('have.text',' Last 4 SSN should be 4 digits');
          cy.get('[data-cy="invalid-phone-msg"]').should('have.text',' Phone Number must have 10 digits ');
          cy.get('[data-cy="invalid-email-msg"]').should('have.text',' Email Address is invalid. Hint: watch out for extra spaces ');
     };
     requiredMessagesAcpSecondPage(){
          cy.get('[data-cy="required-city-msg"]').should('have.text',' City is required ');
          cy.get('[data-cy="required-state-msg"]').should('have.text',' State is required ');
          cy.get('[data-cy="required-zipcode-msg"]').should('have.text',' ZIP Code is required ');
          cy.get('[data-cy="required-mailing-city-msg"]').should('have.text',' City is required ');
          cy.get('[data-cy="required-mailing-state-msg"]').should('have.text',' State is required ');
          cy.get('[data-cy="required-mailing-zipcode-msg"]').should('have.text',' ZIP Code is required ');
     };
     invalidMessagesAcpSecondPage(){
          cy.get('[data-cy="invalid-city-msg"]').should('have.text',' City is invalid ');
          cy.get('[data-cy="invalid-state-msg"]').should('have.text',' State is invalid ');
          cy.get('[data-cy="invalid-zipcode-msg"]').should('have.text',' ZIP Code is invalid ');
          cy.get('[data-cy="invalid-mailing-city-msg"]').should('have.text',' City is invalid ');
          cy.get('[data-cy="invalid-mailing-state-msg"]').should('have.text',' State is invalid ');
          cy.get('[data-cy="invalid-mailing-zipcode-msg"]').should('have.text',' ZIP Code is invalid ');
     };
     requiredMessagesAcpThirdPage(){
          cy.get('#required-qualifying-program-msg').should('have.text',' Qualifying program is required ');
          cy.get('[data-cy="qualifying-validation-message"]').should('have.text',' Please select one of the options above ');
     };
     requiredMessagesAcpForthPage(){
          cy.get('[data-cy="requiredSignature"]').should('have.text',' Initials are required , please make sure you filled all of them ');
          cy.get('[data-cy="requiredName"]').should('have.text',' Full name is required ');
          cy.get('[data-cy="captchaRequired"]').should('have.text','Please verify that you are not a robot');
     };
     selectDareOfBirth(){
          cy.get('select').eq(0).select('01', { force: true }).should('have.value', '01');
          cy.get('select').eq(1).select('19', { force: true }).should('have.value', '19');
          cy.get('select').eq(2).select('1991', { force: true }).should('have.value', '1991');
     };
     selectDareAndMonth(){
          cy.get('select').eq(0).select('01', { force: true }).should('have.value', '01');
          cy.get('select').eq(1).select('19', { force: true }).should('have.value', '19');
     };
     enrollmentNewUserAcpComplete(){
          PageObjects.welcomeOnBoard.clickOnShopPlansBtn();  
          PageObjects.TitleExpectations.goToPlansGMPage();
          this.clickOnDoIQualifyBtn();
          PageObjects.TitleExpectations.goToACPPage();
          this.clickOnApplyNowBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          this.checkNoRadioBtn();
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          this.clickOnNextBtn();
          this.requiredMessagesAcpFirstPage();
          this.fillInPersonalInfoPart1(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.FIRST_NAME,
               CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.LAST_NAME);
          this.selectDareAndMonth();
          this.clickOnSSNRadio();
          this.fillInSSN(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.SSN_NO);
          this.fillInPhoneNumber(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.PHONE_NUMBER);
          this.fillInEmail(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.Email);
          this.clickOnNextBtn();
          this.invalidMessagesAcpFirstPage();
          this.fillInPersonalInfoPart1(CONSTANT.ACP_DATA.PERSONAL_INFO2.FIRST_NAME,
               CONSTANT.ACP_DATA.PERSONAL_INFO2.LAST_NAME);
          this.selectDareOfBirth();
          this.clickOnSSNRadio();
          this.fillInSSN(CONSTANT.ACP_DATA.PERSONAL_INFO2.SSN_NO);
          this.fillInPhoneNumber(CONSTANT.ACP_DATA.PERSONAL_INFO2.PHONE_NUMBER);
          this.fillInEmail(PageObjects.Dynamics.makeNewEmail());
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('[data-cy="stepTitle"]').should('have.text','Address Information');
          this.clickOnNextBtn();
          this.requiredMessagesAcpSecondPage();
          this.fillInPhysicalAddressInfo(CONSTANT.ACP_DATA.INVALID_ADDRESS2.ADDRESS_LINE1,
               CONSTANT.ACP_DATA.INVALID_ADDRESS2.CITY);
          this.fillInPhysicalAddressInfo2(CONSTANT.ACP_DATA.INVALID_ADDRESS2.STATE,
               CONSTANT.ACP_DATA.INVALID_ADDRESS2.ZIP);
          this.fillInMailingAddress(CONSTANT.ACP_DATA.INVALID_ADDRESS2.ADDRESS_LINE1,
               CONSTANT.ACP_DATA.INVALID_ADDRESS2.CITY);
          this.fillInMailingAddress2(CONSTANT.ACP_DATA.INVALID_ADDRESS2.STATE,
               CONSTANT.ACP_DATA.INVALID_ADDRESS2.ZIP);
          this.clickOnNextBtn();
          this.invalidMessagesAcpSecondPage();
          this.fillInPhysicalAddressInfo(CONSTANT.ACP_DATA.VERIFIED_ADDRESS2.ADDRESS_LINE1,
               CONSTANT.ACP_DATA.VERIFIED_ADDRESS2.CITY);
          this.fillInPhysicalAddressInfo2(
               CONSTANT.ACP_DATA.VERIFIED_ADDRESS2.STATE,
               CONSTANT.ACP_DATA.VERIFIED_ADDRESS2.ZIP);
          cy.get('[data-cy="useSameAddress"]').click();
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('[data-cy="stepTitle"]').should('have.text','Qualified Programs');
          this.clickOnNextBtn();
          this.requiredMessagesAcpThirdPage();
          cy.get('li').eq(26).click({ force: true });
          this.clickOnIQualifyIndividually();
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('[data-cy="stepTitle"]').should('have.text', 'Required document(s) consent: ');
          this.clickOnNextBtn();
          cy.get('[data-cy="validationMessageCheckbox"]').should('have.text', 'Please tick this box to confirm that you have read and understood what documents you need to provide.');
          cy.get('[data-cy="consentFormCheckbox"]').click();
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('[data-cy="stepTitle"]').should('have.text','Almost there!');
          this.clickOnVerifyBtn();
          this.requiredMessagesAcpForthPage();
          this.firstCheckSignUp();
          this.secondCheckSignUp();
          this.thirdCheckSignUp();
          this.forthCheckSignUp();
          this.fillInFullName(CONSTANT.ACP_DATA.PERSONAL_INFO2.FULL_NAME);
          PageObjects.Recaptcha.checkRecaptchaCustomerInfo1();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL1);
          this.clickOnVerifyBtn();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL2);
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('[data-cy="congratulationTitle"]').should('have.text','Congratulations!');
          cy.get('[data-cy="acpBenefitsDescription"]').should('have.text','Your ACP benefits can now be applied to your Good Mobile 10GB ACP plan!');
          cy.get('[data-cy="addNewLine"]').should('exist');
     };
     addNewLineStorePickupActivate(){
          cy.get('[data-cy="addNewLine"]').click();
          cy.get('[data-cy="addingNewLineTitle"]').should('have.text','Adding a New Line:');
          cy.get('[data-cy="checkBtn"]').click();
          PageObjects.Compatibility.assertIMEInumberAddressReferenceRequired();
          PageObjects.Compatibility.enterIMEInumber(CONSTANT.COMPATIBILITY.NEWMEID.INVALID_MEID);
          PageObjects.Compatibility.addressRefNotSelectedFromList();
          PageObjects.Compatibility.assertIMEInumberAddressReferenceInvalid();
          PageObjects.Compatibility.enterIMEInumber(CONSTANT.COMPATIBILITY.IMEIS.IMEI_ATT);
          PageObjects.Coverage.enterAddressRefBothCoverages();
          cy.get('[data-cy="checkBtn"]').click();
          cy.get('[data-cy="phoneIsCompatibleTitle"]').should('have.text','Your Phone is compatible!');
          cy.get('[data-cy="phoneIsCompatibleSubTitle"]').should('have.text','You can use the device you have with our network!');
          cy.get('[data-cy="nextBtn"]').click();
          cy.get('[data-cy="addressSectionTitle"]').should('have.text','How do you want to get your package?')
          PageObjects.ShippingPage.clickOnStorePickup();
          cy.get('[data-cy="barCodeVal"]').click();
          cy.get('[data-cy="nextBtn"]').click();
          PageObjects.TitleExpectations.goToPurchaseSuccessfulPage();
          cy.get('[data-cy="orderWillBeAvailable"]').should('have.text','Your order will be available at any of the following stores:');
          cy.get('[data-cy="storePickupSuccessful"]').should('have.text',' You can always find your SIM Card In-Store Pickup barcode in your Purchased Plans page, to provide it for the store clerk for your order pickup. ');
          cy.get('[data-cy="purchasedPlansBtn"]').click();
          PageObjects.TitleExpectations.goToPurchasedPlansPage();
          cy.get('[data-cy="planTitle"]').should('have.text',' Affordable Connectivity Program Plan');
          cy.get('[data-cy="pickupBarCode"]').should('have.text','In-Store Pickup Barcode');
          cy.get('[data-cy="deliveryOption"]').should('have.text','Store Pickup');
          cy.get('[data-cy="acpSummary"]').click();
          PageObjects.TitleExpectations.goToACPApplicationPage();
          cy.get('[data-cy="acpPlanActivationStatusValue"]').should('have.text','Pending Activation');
          cy.get('[data-cy="activateYourPlanBtn"]').click();
          PageObjects.TitleExpectations.goToActivatePortYourSimPage();
          cy.get('[data-cy="activateNewNumber"]').click();
          cy.get('[data-cy="nextBtn"]').click()
          PageObjects.Activation.enteractivationInfoForNewNumber(CONSTANT.ACTIVATION.ACTIVATION_DATA.ACP_NEW_NUMBER.ACTIVATION_CODE,
               CONSTANT.ACTIVATION.ACTIVATION_DATA.ACP_NEW_NUMBER.ACCOUNT_PIN,
               CONSTANT.ACTIVATION.ACTIVATION_DATA.ACP_NEW_NUMBER.CONFIRM_ACCOUNT_PIN);
          PageObjects.Recaptcha.checkRecaptchaCustomerInfo();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL0);
          cy.get('[data-cy="activate-button"]').click();
          cy.wait(CONSTANT.TIME.SPEED_TIME.MAX);
          cy.get('[data-cy="successfullyActivatedTitle"]').should('have.text','Successfully activated!');
          cy.get('[data-cy="selectDeviceBtn"]').should('have.text','Select your Device');
          cy.get('[data-cy="accountSummaryBtn"]').click();
          PageObjects.TitleExpectations.goToAccountSummaryPage();
          cy.get('[data-cy="acpSummary"]').click();
          PageObjects.TitleExpectations.goToACPApplicationPage();
          cy.get('[data-cy="acpPlanActivationStatusValue"]').should('have.text','Enrolled');
          cy.get('[data-cy="youAreEligibleDescription"]').should('have.text','You are eligible for a $100 discount on a new device from our catalog! Hurry up and get yours today!');
          cy.get('[data-cy="acpStatusValueComplete"]').should('have.text','Complete');
          cy.get('[data-cy="acpStatusValue"]').should('have.text','Complete');
          cy.get('[data-cy="mdnValue"]').should('have.text','Phone Number/MDN: (646) 662-1975');
          cy.get('[data-cy="viewApplicationForm"]').click();
          PageObjects.TitleExpectations.goToAcpApplicationDetailsPage();
          cy.get('[data-cy="fullNameValue"]').should('have.text','MRana Yhaddad');
          cy.get('[data-cy="dateOfBirthValue"]').should('have.text','01/19/1991');
          cy.get('[data-cy="identityVerificationValue"]').should('have.text','6462');
     }
     addNewLineHomeDeliveryActivate(){
          cy.get('[data-cy="addNewLine"]').click();
          cy.get('.main-title').should('have.text','Adding a New Line:');
          cy.get('[data-cy="checkBtn"]').click();
          PageObjects.Compatibility.assertIMEInumberAddressReferenceRequired();
          PageObjects.Compatibility.enterIMEInumber(CONSTANT.COMPATIBILITY.NEWMEID.INVALID_MEID);
          PageObjects.Compatibility.addressRefNotSelectedFromList();
          PageObjects.Compatibility.assertIMEInumberAddressReferenceInvalid();
          PageObjects.Compatibility.enterIMEInumber(CONSTANT.COMPATIBILITY.IMEIS.IMEI_ATT);
          PageObjects.Coverage.enterAddressRefBothCoverages();
          cy.get('[data-cy="checkBtn"]').click();
          cy.get('.head-note').should('have.text','Your Phone is compatible!');
          cy.get('.sub-note').should('have.text','You can use the device you have with our network!');
          cy.get('[data-cy="nextBtn"]').click();
          PageObjects.ShippingPage.clickOnHomeDelivery();
          PageObjects.ShippingPage.clickOnAddNewAddress();
          PageObjects.ShippingPage.clickOnSaveBtn();
          cy.get('[data-cy="addressNameRequiredMsg"]').should('have.text', 'Name is a required field');
          cy.get('[data-cy="addressRequiredMsg"]').should('have.text', 'Address is a Required Field');
          cy.get('[data-cy="cityIsRequired"]').should('have.text', 'City is a Required Field');
          cy.get('[data-cy="requiredStateMsg"]').should('have.text', 'State is a required field ');
          cy.get('[data-cy="postalIsRequired"]').should('have.text', 'Postal Code is a Required Field');
          PageObjects.ShippingPage.editShippingAddress(CONSTANT.SHIPPING.SHIPPING_DATA.NAME,
               CONSTANT.SHIPPING.SHIPPING_DATA.SHIPPING_ADDRESS,
               CONSTANT.SHIPPING.SHIPPING_DATA.SUITE_NO,
               CONSTANT.SHIPPING.SHIPPING_DATA.CITY,
               CONSTANT.SHIPPING.SHIPPING_DATA.STATE,
               CONSTANT.SHIPPING.SHIPPING_DATA.POSTAL);
          PageObjects.ShippingPage.clickOnSaveBtn();
          PageObjects.ShippingPage.clickOnNextBtn();
          PageObjects.TitleExpectations.goToPurchaseSuccessfulPage();
          cy.get('[data-cy="homeDeliverySuccessfulNewSIM"]').should('have.text','Lookout for your new SIM Card in the mail!');
          cy.get('[data-cy="purchasedPlansBtn"]').click();
          PageObjects.TitleExpectations.goToPurchasedPlansPage();
          cy.get('[data-cy="planTitle"]').should('have.text',' Affordable Connectivity Program Plan');
          cy.get('[data-cy="deliveryOption"]').should('have.text','Home Delivery');
          cy.get('[data-cy="addressCity"]').should('have.text','1250 WATERS PL  111, BRONX,');
          cy.get('[data-cy="statePostalCode"]').should('have.text','NY, 10461-2720');
          cy.get('.menu-item.ng-star-inserted > .items-link').click();
          PageObjects.TitleExpectations.goToACPApplicationPage();
          cy.get('[data-cy="acpPlanActivationStatusValue"]').should('have.text','Pending Activation');
          cy.get('.actions > .primary').click();
          PageObjects.TitleExpectations.goToActivatePortYourSimPage();
          cy.get('#new').click();
          cy.get('.button').click()
          PageObjects.Activation.enteractivationInfoForNewNumber(CONSTANT.ACTIVATION.ACTIVATION_DATA.ACP_NEW_NUMBER.ACTIVATION_CODE,
               CONSTANT.ACTIVATION.ACTIVATION_DATA.ACP_NEW_NUMBER.ACCOUNT_PIN,
               CONSTANT.ACTIVATION.ACTIVATION_DATA.ACP_NEW_NUMBER.CONFIRM_ACCOUNT_PIN);
          PageObjects.Recaptcha.checkRecaptchaCustomerInfo();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL0);
          cy.get('[data-cy="activate-button"]').click();
          cy.wait(CONSTANT.TIME.SPEED_TIME.MAX);
          cy.get('.title').should('have.text','Successfully activated!');
          cy.get('[data-cy="mdnValue"]').should('have.text','(646) 662-1975');
          cy.get('.action > .button').should('have.text','Select your Device');
          cy.get('.actions > .button').click();
          PageObjects.TitleExpectations.goToAccountSummaryPage();
          cy.get('.menu-item.ng-star-inserted > .items-link').click();
          PageObjects.TitleExpectations.goToACPApplicationPage();
          cy.get('[data-cy="acpPlanActivationStatusValue"]').should('have.text','Enrolled');
          cy.get('[data-cy="youAreEligibleDescription"]').should('have.text','You are eligible for a $100 discount on a new device from our catalog! Hurry up and get yours today!');
          cy.get('[data-cy="acpStatusValueComplete"]').should('have.text','Complete');
          cy.get('[data-cy="acpStatusValue"]').should('have.text','Complete');
          cy.get('[data-cy="mdnValue"]').should('have.text','Phone Number/MDN: (646) 662-1975');
          cy.get('[data-cy="viewApplicationForm"]').click();
          PageObjects.TitleExpectations.goToAcpApplicationDetailsPage();
          cy.get('[data-cy="fullNameValue"]').should('have.text','MRana Yhaddad');
          cy.get('[data-cy="dateOfBirthValue"]').should('have.text','01/19/1991');
          cy.get('[data-cy="identityVerificationValue"]').should('have.text','6462');
     };
     selectLastYearOption(){
          cy.get('select').find('option').last().then($lastOption => {
               cy.get('select').eq(2).select($lastOption.val());
           });
     };
     selectLastYearOptionChildInfo(){
          cy.get('select').find('option').last().then($lastOption => {
               cy.get('select').eq(3).select($lastOption.val());
          });
     };
     selectFirstYearOption(){
          cy.get('select').eq(2).find('option').first().then($firstOption => {
               cy.get('select').eq(2).select($firstOption.val());
           });
     };
     invalidMessagesAcpFirstPageWithTribalID(){
          cy.get('[data-cy="invalid-fname-msg"]').should('have.text',' First name is invalid ');
          cy.get('[data-cy="invalid-lname-msg"]').should('have.text',' Last name is invalid ');
          cy.get('[data-cy="invalidDateMsg"]').should('have.text',' Date is invalid ');
          cy.get('[data-cy="invalidTribalMsg"]').should('have.text',' Tribal ID is invalid ');
          cy.get('[data-cy="invalid-phone-msg"]').should('have.text',' Phone Number must have 10 digits ');
          cy.get('[data-cy="invalid-email-msg"]').should('have.text',' Email Address is invalid. Hint: watch out for extra spaces ');
     };
     invalidMessagesAcpFirstPageSSN(){
          cy.get('[data-cy="invalid-fname-msg"]').should('have.text',' First name is invalid ');
          cy.get('[data-cy="invalid-lname-msg"]').should('have.text',' Last name is invalid ');
          cy.get('[data-cy="invalidDateMsg"]').should('have.text',' Date is invalid ');
          cy.get('[data-cy="invalid-ssn-msg"]').should('have.text',' Last 4 SSN should be 4 digits');
          cy.get('[data-cy="invalid-phone-msg"]').should('have.text',' Phone Number must have 10 digits ');
          cy.get('[data-cy="invalid-email-msg"]').should('have.text',' Email Address is invalid. Hint: watch out for extra spaces ');
     };
     requiredMessagesAcpChildInfo(){
          cy.get('[data-cy="required-fname-msg"]').should('have.text',' First name is required ');
          cy.get('[data-cy="required-lname-msg"]').should('have.text',' Last name is required ');
          cy.get('[data-cy="required-month-msg"]').should('have.text',' Date of Birth is required ');
          cy.get('[data-cy="required-idType-msg"]').should('have.text',' Government ID Type is required ');
     };
     invalidMessagesAcpChildInfoTribalID(){
          cy.get('[data-cy="invalid-fname-msg"]').should('have.text',' First name is invalid ');
          cy.get('[data-cy="invalid-lname-msg"]').should('have.text',' Last name is invalid ');
          cy.get('[data-cy="invalidDateMsg"]').should('have.text',' Date is invalid ');
          cy.get('[data-cy="invalidTribalMsg"]').should('have.text',' Tribal ID is invalid ');
     };
     invalidMessagesAcpChildInfoSSN(){
          cy.get('[data-cy="invalid-fname-msg"]').should('have.text',' First name is invalid ');
          cy.get('[data-cy="invalid-lname-msg"]').should('have.text',' Last name is invalid ');
          cy.get('[data-cy="invalidDateMsg"]').should('have.text',' Date is invalid ');
          cy.get('[data-cy="invalid-ssn-msg"]').should('have.text', ' Last 4 SSN should be 4 digits')
     };
     fillInInvalidSchoolName() {
          cy.get('[data-cy="schoolName"]').click({force:true})
          cy.get('[data-cy="schoolName"]').clear();
          cy.get('[data-cy="schoolName"]').type('a');
          return this;
     };
     fillInSchoolNameWithSpecialCharacter(){
          cy.get('[data-cy="schoolName"]').click({force:true})
          cy.get('[data-cy="schoolName"]').clear();
          cy.get('[data-cy="schoolName"]').type('@');
          return this;
     }
     clickOnTribalIDforChild() {
          cy.get('[data-cy="tribalID"]').click();
          return this;
     };
     clickOnSSN(){
          cy.get('[data-cy="ssn"]').click();
          return this;
     };
     fillInChildSSN(ssn_no) {
          cy.get('[data-cy="ssnInput"]').click({force:true});
          cy.get('[data-cy="ssnInput"]').clear();
          cy.get('[data-cy="ssnInput"]').type(ssn_no);
          return this;
     };
     firstCheckWithNum() {
          cy.get('[data-cy="firstCheck"]').click()
          cy.get('[data-cy="firstCheck"]').clear();
          cy.get('[data-cy="firstCheck"]').type('11')
          return this;
     };
     secondCheckWithNum() {
          cy.get('[data-cy="secondCheck"]').click();
          cy.get('[data-cy="secondCheck"]').clear();
          cy.get('[data-cy="secondCheck"]').type('11');
          return this;
     };
     thirdCheckWithNum() {
          cy.get('[data-cy="thirdCheck"]').click();
          cy.get('[data-cy="thirdCheck"]').clear();
          cy.get('[data-cy="thirdCheck"]').type('11');
          return this;
     };
     forthCheckWithNum() {
          cy.get('[data-cy="forthCheck"]').click();
          cy.get('[data-cy="forthCheck"]').clear();
          cy.get('[data-cy="forthCheck"]').type('11');
          return this;
     };
     firstCheckWithSpecialCharacter() {
          cy.get('[data-cy="firstCheck"]').click()
          cy.get('[data-cy="firstCheck"]').clear();
          cy.get('[data-cy="firstCheck"]').type('@M')
          return this;
     };
     secondCheckWithSpecialCharacter() {
          cy.get('[data-cy="secondCheck"]').click();
          cy.get('[data-cy="secondCheck"]').clear();
          cy.get('[data-cy="secondCheck"]').type('@M');
          return this;
     };
     thirdCheckWithSpecialCharacter() {
          cy.get('[data-cy="thirdCheck"]').click();
          cy.get('[data-cy="thirdCheck"]').clear();
          cy.get('[data-cy="thirdCheck"]').type('@M');
          return this;
     };
     forthCheckWithSpecialCharacter() {
          cy.get('[data-cy="forthCheck"]').click();
          cy.get('[data-cy="forthCheck"]').clear();
          cy.get('[data-cy="forthCheck"]').type('@M');
          return this;
     };
     enrollmentNewUserAcpRequiredInvalidValidation(){
          PageObjects.welcomeOnBoard.clickOnShopPlansBtn();  
          PageObjects.TitleExpectations.goToPlansGMPage();
          this.clickOnDoIQualifyBtn();
          PageObjects.TitleExpectations.goToACPPage();
          this.clickOnApplyNowBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          this.checkNoRadioBtn();
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          this.clickOnNextBtn();
          this.requiredMessagesAcpFirstPage();
          this.fillInPersonalInfoPart1(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.FIRST_NAME,
               CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.LAST_NAME);
          cy.get('select').eq(0).select('12', { force: true }).should('have.value', '12');
          cy.get('select').eq(1).select('30', { force: true }).should('have.value', '30');
          this.selectLastYearOption();
          this.clickOnTribalRadio();
          this.fillITribalID(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.TRIBAL_ID);
          this.fillInPhoneNumber(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.PHONE_NUMBER);
          this.fillInEmail(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.Email);
          this.invalidMessagesAcpFirstPageWithTribalID();
          this.fillInPersonalInfoPart1(CONSTANT.ACP_DATA.PERSONAL_INFO_HAS_SPECIAL_CHARACTERS.FIRST_NAME,
               CONSTANT.ACP_DATA.PERSONAL_INFO_HAS_SPECIAL_CHARACTERS.LAST_NAME);
          cy.get('select').eq(0).select('12', { force: true }).should('have.value', '12');
          cy.get('select').eq(1).select('30', { force: true }).should('have.value', '30');
          this.selectLastYearOption();
          this.clickOnSSNRadio();
          this.fillInSSN(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.SSN_NO);
          this.fillInPhoneNumber(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.PHONE_NUMBER);
          this.fillInEmail(CONSTANT.ACP_DATA.PERSONAL_INFO_HAS_SPECIAL_CHARACTERS.Email);
          this.clickOnNextBtn();
          this.invalidMessagesAcpFirstPageSSN();
          this.fillInPersonalInfoPart1(CONSTANT.ACP_DATA.PERSONAL_INFO2.FIRST_NAME,
               CONSTANT.ACP_DATA.PERSONAL_INFO2.LAST_NAME);
          this.selectDareOfBirth();
          this.clickOnSSNRadio();
          this.fillInSSN(CONSTANT.ACP_DATA.PERSONAL_INFO2.SSN_NO);
          this.fillInPhoneNumber(CONSTANT.ACP_DATA.PERSONAL_INFO2.PHONE_NUMBER);
          const newEmail = Cypress.env('newEmail');
          this.fillInEmail(newEmail);
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('[data-cy="stepTitle"]').should('have.text','Address Information');
          this.clickOnNextBtn();
          this.requiredMessagesAcpSecondPage();
          this.fillInPhysicalAddressInfo(CONSTANT.ACP_DATA.INVALID_ADDRESS.ADDRESS_LINE1,
               CONSTANT.ACP_DATA.INVALID_ADDRESS.CITY);
          this.fillInPhysicalAddressInfo2(CONSTANT.ACP_DATA.INVALID_ADDRESS.STATE,
               CONSTANT.ACP_DATA.INVALID_ADDRESS.ZIP);
          this.fillInMailingAddress(CONSTANT.ACP_DATA.INVALID_ADDRESS.ADDRESS_LINE1,
               CONSTANT.ACP_DATA.INVALID_ADDRESS.CITY);
          this.fillInMailingAddress2(CONSTANT.ACP_DATA.INVALID_ADDRESS.STATE,
               CONSTANT.ACP_DATA.INVALID_ADDRESS.ZIP);
          this.clickOnNextBtn();
          this.invalidMessagesAcpSecondPage();
          this.fillInPhysicalAddressInfo(CONSTANT.ACP_DATA.VERIFIED_ADDRESS.ADDRESS_LINE1,
               CONSTANT.ACP_DATA.INVALID_ADDRESS_HAS_SPECIAL_CHARACTERS.CITY);
          this.fillInPhysicalAddressInfo2(
               CONSTANT.ACP_DATA.INVALID_ADDRESS_HAS_SPECIAL_CHARACTERS.STATE,
               CONSTANT.ACP_DATA.INVALID_ADDRESS_HAS_SPECIAL_CHARACTERS.ZIP);
          this.fillInMailingAddress(CONSTANT.ACP_DATA.VERIFIED_ADDRESS.ADDRESS_LINE1,
               CONSTANT.ACP_DATA.INVALID_ADDRESS_HAS_SPECIAL_CHARACTERS.CITY);
          this.fillInMailingAddress2(CONSTANT.ACP_DATA.INVALID_ADDRESS_HAS_SPECIAL_CHARACTERS.STATE,
               CONSTANT.ACP_DATA.INVALID_ADDRESS_HAS_SPECIAL_CHARACTERS.ZIP);
          this.invalidMessagesAcpSecondPage();
          this.fillInPhysicalAddressInfo(CONSTANT.ACP_DATA.VERIFIED_ADDRESS2.ADDRESS_LINE1,
               CONSTANT.ACP_DATA.VERIFIED_ADDRESS2.CITY);
          this.fillInPhysicalAddressInfo2(
               CONSTANT.ACP_DATA.VERIFIED_ADDRESS2.STATE,
               CONSTANT.ACP_DATA.VERIFIED_ADDRESS2.ZIP);
          this.fillInMailingAddress(CONSTANT.ACP_DATA.VERIFIED_ADDRESS2.ADDRESS_LINE1,
               CONSTANT.ACP_DATA.VERIFIED_ADDRESS2.CITY);
          this.fillInMailingAddress2(CONSTANT.ACP_DATA.VERIFIED_ADDRESS2.STATE,
               CONSTANT.ACP_DATA.VERIFIED_ADDRESS2.ZIP);
          cy.get('[data-cy="useSameAddress"]').click();
          cy.get('[data-cy="mailingTitle"]').should('not.exist');
          cy.get('[data-cy="useSameAddress"]').click();
          cy.get('[data-cy="mailingAddress1"]').should('be.empty');
          cy.get('[data-cy="mail-city"]').should('be.empty');
          cy.get('[data-cy="mail-state"]').should('be.empty');
          cy.get('[data-cy="mail-zipCode"]').should('be.empty');
          cy.get('[data-cy="useSameAddress"]').click();
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('[data-cy="stepTitle"]').should('have.text','Qualified Programs');
          this.clickOnNextBtn();
          this.requiredMessagesAcpThirdPage();
          cy.get('li').eq(36).click({ force: true });
          cy.get('li').eq(29).click({ force: true });
          cy.get('li').eq(26).click({ force: true });
          this.clickOnQualifyThroughMyChild();
          this.clickOnNextBtn();
          cy.get('[data-cy="requiredPublicHousing"]').should('have.text',' Public Housing is required ');
          cy.get('[data-cy="schoolNameRequiredMsg"]').should('have.text',' School Name is required ');
          this.requiredMessagesAcpChildInfo();
          cy.get('select').eq(0).select('Housing Choice Voucher Program', { force: true }).invoke('val').should('eq', '1');
          this.fillInInvalidSchoolName();
          this.fillInPersonalInfoPart1(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.FIRST_NAME,
            CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.LAST_NAME);
          cy.get('select').eq(1).select('12', { force: true }).should('have.value', '12');
          cy.get('select').eq(2).select('30', { force: true }).should('have.value', '30');
          this.selectLastYearOptionChildInfo();
          this.clickOnTribalIDforChild();
          this.fillITribalID(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.TRIBAL_ID);
          this.clickOnNextBtn();
          cy.get('[data-cy="invalidSchoolName"]').should('have.text',' School name is invalid ');
          this.invalidMessagesAcpChildInfoTribalID();
          this.clickOnNextBtn();
          this.fillInSchoolNameWithSpecialCharacter();
          this.fillInPersonalInfoPart1(CONSTANT.ACP_DATA.PERSONAL_INFO_HAS_SPECIAL_CHARACTERS.FIRST_NAME,
               CONSTANT.ACP_DATA.PERSONAL_INFO_HAS_SPECIAL_CHARACTERS.LAST_NAME);
          cy.get('select').eq(1).select('12', { force: true }).should('have.value', '12');
          cy.get('select').eq(2).select('30', { force: true }).should('have.value', '30');
          this.selectLastYearOptionChildInfo();
          this.clickOnSSN();
          this.fillInChildSSN(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.SSN_NO);
          this.clickOnNextBtn();
          this.invalidMessagesAcpChildInfoSSN();
          this.fillInSchoolName();
          this.fillInPersonalInfoPart1(CONSTANT.ACP_DATA.PERSONAL_INFO.FIRST_NAME,
               CONSTANT.ACP_DATA.PERSONAL_INFO.LAST_NAME);
          cy.get('select').eq(1).select('12', { force: true }).should('have.value', '12');
          cy.get('select').eq(2).select('30', { force: true }).should('have.value', '30');
          cy.get('select').eq(3).select('2007', { force: true }).should('have.value', '2007');
          this.clickOnSSN();
          this.fillInChildSSN(CONSTANT.ACP_DATA.PERSONAL_INFO.SSN_NO);
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('[data-cy="stepTitle"]').should('have.text', 'Required document(s) consent: ');
          this.clickOnNextBtn();
          cy.get('[data-cy="validationMessageCheckbox"]').eq(0).should('have.text', 'Please tick this box to confirm that you have read and understood what documents you need to provide.');
          cy.get('[data-cy="validationMessageCheckbox"]').eq(1).should('have.text', 'Please tick this box to confirm that you have read and understood what documents you need to provide.');
          cy.get('[data-cy="consentFormCheckbox"]').eq(0).click();
          cy.get('[data-cy="consentFormCheckbox"]').eq(1).click();
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('[data-cy="stepTitle"]').should('have.text','Almost there!');
          this.clickOnVerifyBtn();
          this.requiredMessagesAcpForthPage();
          this.clickOnBackBtn();
          cy.get('[data-cy="consentFormCheckbox"]').eq(0).should('not.be.checked');
          cy.get('[data-cy="consentFormCheckbox"]').eq(1).should('not.be.checked');
          this.clickOnBackBtn();
          cy.get('[data-cy="schoolName"]').should('have.value','automated test ');
          cy.get('#housingAssistance').should('have.value','1').contains('Housing Choice Voucher Program');
          cy.get('[data-cy="firstName"]').should('have.value','Mirna');
          cy.get('[data-cy="lastName"]').should('have.value','Young');
          cy.get('[data-cy="ssnInput"]').should('have.value', '8888');
          this.clickOnBackBtn();
          cy.get('[data-cy="addressLookup"]').should('have.value','777 Stevens Ave, Portland, ME 04103');
          cy.get('[data-cy="city"]').should('have.value','Portland');
          cy.get('[data-cy="state"]').should('have.value','ME');
          cy.get('[data-cy="zipCode"]').should('have.value','04103');
          this.clickOnBackBtn();
          cy.get('[data-cy="firstName"]').should('have.value','MRana');
          cy.get('[data-cy="lastName"]').should('have.value','Yhaddad');
          cy.get('[data-cy="ssn"]').should('have.value', '6462');
          cy.get('[data-cy="phoneNumber"]').should('have.value','5122034783');
          cy.get('[data-cy="email"]').should('have.value', newEmail);
          this.clickOnNextBtn();
          cy.get('[data-cy="addressLookup"]').should('have.value','777 Stevens Ave, Portland, ME 04103');
          cy.get('[data-cy="city"]').should('have.value','Portland');
          cy.get('[data-cy="state"]').should('have.value','ME');
          cy.get('[data-cy="zipCode"]').should('have.value','04103');
          this.clickOnNextBtn();
          cy.get('[data-cy="schoolName"]').should('have.value','automated test ');
          cy.get('#housingAssistance').should('have.value','1').contains('Housing Choice Voucher Program');
          cy.get('[data-cy="firstName"]').should('have.value','Mirna');
          cy.get('[data-cy="lastName"]').should('have.value','Young');
          cy.get('[data-cy="ssnInput"]').should('have.value', '8888');
          this.clickOnNextBtn();
          cy.get('[data-cy="consentFormCheckbox"]').eq(0).should('not.be.checked');
          cy.get('[data-cy="consentFormCheckbox"]').eq(1).should('not.be.checked');
          cy.get('[data-cy="consentFormCheckbox"]').eq(0).click();
          cy.get('[data-cy="consentFormCheckbox"]').eq(1).click();
          this.clickOnNextBtn();
          this.firstCheckWithNum();
          this.secondCheckWithNum();
          this.thirdCheckWithNum();
          this.forthCheckWithNum();
          this.fillInFullName(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.FULL_NAME);
          this.clickOnVerifyBtn();
          cy.get('[ data-cy="mismatchingMsg"]').should('have.text',' Mismatching initials with your first charecter of your first name and first charecter of your last name ');
          cy.get('[data-cy="fullnameInvalidMsg"]').should('have.text',' Your full name does not match the previous registered one ');
          cy.get('[data-cy="captchaRequired"]').should('have.text','Please verify that you are not a robot');
          this.clickOnVerifyBtn();
          this.firstCheckWithSpecialCharacter();
          this.secondCheckWithSpecialCharacter();
          this.thirdCheckWithSpecialCharacter();
          this.forthCheckWithSpecialCharacter();
          this.fillInFullName(CONSTANT.ACP_DATA.PERSONAL_INFO_HAS_SPECIAL_CHARACTERS.FULL_NAME);
          this.clickOnVerifyBtn();
          cy.get('[ data-cy="mismatchingMsg"]').should('have.text',' Mismatching initials with your first charecter of your first name and first charecter of your last name ');
          cy.get('[data-cy="fullnameInvalidMsg"]').should('have.text',' Your full name does not match the previous registered one ');
          cy.get('[data-cy="captchaRequired"]').should('have.text','Please verify that you are not a robot');
          this.clickOnVerifyBtn();
          this.firstCheckSignUp();
          this.secondCheckSignUp();
          this.thirdCheckSignUp();
          this.forthCheckSignUp();
          this.fillInFullName(CONSTANT.ACP_DATA.PERSONAL_INFO2.FULL_NAME);
          this.clickOnVerifyBtn();
          cy.get('[data-cy="captchaRequired"]').should('have.text','Please verify that you are not a robot');
          PageObjects.Recaptcha.checkRecaptchaCustomerInfo1();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL1);
          this.clickOnVerifyBtn();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL2);
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('[data-cy="congratulationTitle"]').should('have.text','Congratulations!');
          cy.get('[data-cy="acpBenefitsDescription"]').should('have.text','Your ACP benefits can now be applied to your Good Mobile 10GB ACP plan!');
          cy.get('[data-cy="addNewLine"]').should('exist');
     };

     addNewLineHomeDeliveryActivateExistingUser(){
          PageObjects.TitleExpectations.goToACPApplicationPage();
          cy.get('[data-cy="actionAcpBtn"]').click();
          cy.get('[data-cy="addingNewLineTitle"]').should('have.text','Adding a New Line:');
          cy.get('[data-cy="checkBtn"]').click();
          PageObjects.Compatibility.assertIMEInumberAddressReferenceRequired();
          PageObjects.Compatibility.enterIMEInumber(CONSTANT.COMPATIBILITY.NEWMEID.INVALID_MEID);
          PageObjects.Compatibility.addressRefNotSelectedFromList();
          PageObjects.Compatibility.assertIMEInumberAddressReferenceInvalid();
          PageObjects.Compatibility.enterIMEInumber(CONSTANT.COMPATIBILITY.IMEIS.IMEI_ATT);
          PageObjects.Coverage.enterAddressRefBothCoverages();
          cy.get('[data-cy="checkBtn"]').click();
          cy.get('[data-cy="phoneIsCompatibleTitle"]').should('have.text','Your Phone is compatible!');
          cy.get('[data-cy="phoneIsCompatibleSubTitle"]').should('have.text','You can use the device you have with our network!');
          cy.get('[data-cy="nextBtn"]').click();
          PageObjects.ShippingPage.clickOnHomeDelivery();
          PageObjects.ShippingPage.clickOnAddNewAddress();
          PageObjects.ShippingPage.clickOnSaveBtn();
          cy.get('[data-cy="addressNameRequiredMsg"]').should('have.text', 'Name is a required field');
          cy.get('[data-cy="addressRequiredMsg"]').should('have.text', 'Address is a Required Field');
          cy.get('[data-cy="cityIsRequired"]').should('have.text', 'City is a Required Field');
          cy.get('[data-cy="requiredStateMsg"]').should('have.text', 'State is a required field ');
          cy.get('[data-cy="postalIsRequired"]').should('have.text', 'Postal Code is a Required Field');
          PageObjects.ShippingPage.editShippingAddress(CONSTANT.SHIPPING.SHIPPING_DATA.NAME,
               CONSTANT.SHIPPING.SHIPPING_DATA.SHIPPING_ADDRESS,
               CONSTANT.SHIPPING.SHIPPING_DATA.SUITE_NO,
               CONSTANT.SHIPPING.SHIPPING_DATA.CITY,
               CONSTANT.SHIPPING.SHIPPING_DATA.STATE,
               CONSTANT.SHIPPING.SHIPPING_DATA.POSTAL);
          PageObjects.ShippingPage.clickOnSaveBtn();
          PageObjects.ShippingPage.clickOnNextBtn();
          PageObjects.TitleExpectations.goToPurchaseSuccessfulPage();
          cy.get('[data-cy="homeDeliverySuccessfulNewSIM"]').should('have.text','Lookout for your new SIM Card in the mail!');
          cy.get('[data-cy="purchasedPlansBtn"]').click();
          PageObjects.TitleExpectations.goToPurchasedPlansPage();
          cy.get('[data-cy="planTitle"]').should('have.text',' Affordable Connectivity Program Plan');
          cy.get('[data-cy="deliveryOption"]').should('have.text','Home Delivery');
          cy.get('[data-cy="addressCity"]').should('have.text','1250 WATERS PL  111, BRONX,');
          cy.get('[data-cy="statePostalCode"]').should('have.text','NY, 10461-2720');
          cy.get('[data-cy="acpSummary"]').click();
          PageObjects.TitleExpectations.goToACPApplicationPage();
          cy.get('[data-cy="acpPlanActivationStatusValue"]').should('have.text','Pending Activation');
          cy.get('[data-cy="actionAcpBtn"]').click();
          PageObjects.TitleExpectations.goToActivatePortYourSimPage();
          cy.get('[data-cy="activateNewNumber"]').click();
          cy.get('[data-cy="nextBtn"]').click()
          PageObjects.Activation.enteractivationInfoForNewNumber(CONSTANT.ACTIVATION.ACTIVATION_DATA.ACP_NEW_NUMBER.ACTIVATION_CODE,
               CONSTANT.ACTIVATION.ACTIVATION_DATA.ACP_NEW_NUMBER.ACCOUNT_PIN,
               CONSTANT.ACTIVATION.ACTIVATION_DATA.ACP_NEW_NUMBER.CONFIRM_ACCOUNT_PIN);
          PageObjects.Recaptcha.checkRecaptchaCustomerInfo();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL0);
          cy.get('[data-cy="activate-button"]').click();
          cy.wait(CONSTANT.TIME.SPEED_TIME.MAX);
          cy.get('[data-cy="successfullyActivatedTitle"]').should('have.text','Successfully activated!');
          cy.get('[data-cy="mdnValue"]').should('have.text','(646) 662-1975');
          cy.get('[data-cy="selectDeviceBtn"]').should('have.text','Select your Device');
          cy.get('[data-cy="accountSummaryBtn"]').click();
          PageObjects.TitleExpectations.goToAccountSummaryPage();
          cy.get('[data-cy="acpSummary"]').click();
          PageObjects.TitleExpectations.goToACPApplicationPage();
          cy.get('[data-cy="acpPlanActivationStatusValue"]').should('have.text','Enrolled');
          cy.get('[data-cy="youAreEligibleDescription"]').should('have.text','You are eligible for a $100 discount on a new device from our catalog! Hurry up and get yours today!');
          cy.get('[data-cy="acpStatusValueComplete"]').should('have.text','Complete');
          cy.get('[data-cy="acpStatusValue"]').should('have.text','Complete');
          cy.get('[data-cy="mdnValue"]').should('have.text','Phone Number/MDN: (646) 662-1975');
          cy.get('[data-cy="viewApplicationForm"]').click();
          PageObjects.TitleExpectations.goToAcpApplicationDetailsPage();
          cy.get('[data-cy="fullNameValue"]').should('have.text','MRana Yhaddad');
          cy.get('[data-cy="dateOfBirthValue"]').should('have.text','01/19/1991');
          cy.get('[data-cy="identityVerificationValue"]').should('have.text','6462');
     };
     addNewLineStorePickupActivateExistingUser(){
          PageObjects.TitleExpectations.goToACPApplicationPage();
          cy.get('[data-cy="actionAcpBtn"]').click();
          cy.get('[data-cy="addingNewLineTitle"]').should('have.text','Adding a New Line:');
          cy.get('[data-cy="checkBtn"]').click();
          PageObjects.Compatibility.assertIMEInumberAddressReferenceRequired();
          PageObjects.Compatibility.enterIMEInumber(CONSTANT.COMPATIBILITY.NEWMEID.INVALID_MEID);
          PageObjects.Compatibility.addressRefNotSelectedFromList();
          PageObjects.Compatibility.assertIMEInumberAddressReferenceInvalid();
          PageObjects.Compatibility.enterIMEInumber(CONSTANT.COMPATIBILITY.IMEIS.IMEI_ATT);
          PageObjects.Coverage.enterAddressRefBothCoverages();
          cy.get('[data-cy="checkBtn"]').click();
          cy.get('[data-cy="phoneIsCompatibleTitle"]').should('have.text','Your Phone is compatible!');
          cy.get('[data-cy="phoneIsCompatibleSubTitle"]').should('have.text','You can use the device you have with our network!');
          cy.get('[data-cy="nextBtn"]').click();
          cy.get('[data-cy="addressSectionTitle"]').should('have.text','How do you want to get your package?')
          PageObjects.ShippingPage.clickOnStorePickup();
          cy.get('[data-cy="barCodeVal"]').click();
          cy.get('[data-cy="nextBtn"]').click();
          PageObjects.TitleExpectations.goToPurchaseSuccessfulPage();
          cy.get('[data-cy="orderWillBeAvailable"]').should('have.text','Your order will be available at any of the following stores:');
          cy.get('[data-cy="storePickupSuccessful"]').should('have.text',' You can always find your SIM Card In-Store Pickup barcode in your Purchased Plans page, to provide it for the store clerk for your order pickup. ');
          cy.get('[data-cy="purchasedPlansBtn"]').click();
          PageObjects.TitleExpectations.goToPurchasedPlansPage();
          cy.get('[data-cy="planTitle"]').should('have.text',' Affordable Connectivity Program Plan');
          cy.get('[data-cy="pickupBarCode"]').should('have.text','In-Store Pickup Barcode');
          cy.get('[data-cy="deliveryOption"]').should('have.text','Store Pickup');
          cy.get('[data-cy="acpSummary"]').click();
          PageObjects.TitleExpectations.goToACPApplicationPage();
          cy.get('[data-cy="acpPlanActivationStatusValue"]').should('have.text','Pending Activation');
          cy.get('[data-cy="actionAcpBtn"]').click();
          PageObjects.TitleExpectations.goToActivatePortYourSimPage();
          cy.get('[data-cy="activateNewNumber"]').click();
          cy.get('[data-cy="nextBtn"]').click()
          PageObjects.Activation.enteractivationInfoForNewNumber(CONSTANT.ACTIVATION.ACTIVATION_DATA.ACP_NEW_NUMBER.ACTIVATION_CODE,
               CONSTANT.ACTIVATION.ACTIVATION_DATA.ACP_NEW_NUMBER.ACCOUNT_PIN,
               CONSTANT.ACTIVATION.ACTIVATION_DATA.ACP_NEW_NUMBER.CONFIRM_ACCOUNT_PIN);
          PageObjects.Recaptcha.checkRecaptchaCustomerInfo();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL0);
          cy.get('[data-cy="activate-button"]').click();
          cy.wait(CONSTANT.TIME.SPEED_TIME.MAX);
          cy.get('[data-cy="successfullyActivatedTitle"]').should('have.text','Successfully activated!');
          cy.get('[data-cy="selectDeviceBtn"]').should('have.text','Select your Device');
          cy.get('[data-cy="accountSummaryBtn"]').click();
          PageObjects.TitleExpectations.goToAccountSummaryPage();
          cy.get('[data-cy="acpSummary"]').click();
          PageObjects.TitleExpectations.goToACPApplicationPage();
          cy.get('[data-cy="acpPlanActivationStatusValue"]').should('have.text','Enrolled');
          cy.get('[data-cy="youAreEligibleDescription"]').should('have.text','You are eligible for a $100 discount on a new device from our catalog! Hurry up and get yours today!');
          cy.get('[data-cy="acpStatusValueComplete"]').should('have.text','Complete');
          cy.get('[data-cy="acpStatusValue"]').should('have.text','Complete');
          cy.get('[data-cy="mdnValue"]').should('have.text','Phone Number/MDN: (646) 662-1975');
          cy.get('[data-cy="viewApplicationForm"]').click();
          PageObjects.TitleExpectations.goToAcpApplicationDetailsPage();
          cy.get('[data-cy="fullNameValue"]').should('have.text','MRana Yhaddad');
          cy.get('[data-cy="dateOfBirthValue"]').should('have.text','01/19/1991');
          cy.get('[data-cy="identityVerificationValue"]').should('have.text','6462');
     };
     enrollmentNewUserAcpPendingResolution(){
          PageObjects.welcomeOnBoard.clickOnShopPlansBtn();  
          PageObjects.TitleExpectations.goToPlansGMPage();
          this.clickOnDoIQualifyBtn();
          PageObjects.TitleExpectations.goToACPPage();
          this.clickOnApplyNowBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          this.checkNoRadioBtn();
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          this.clickOnNextBtn();
          this.requiredMessagesAcpFirstPage();
          this.fillInPersonalInfoPart1(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.FIRST_NAME,
               CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.LAST_NAME);
          cy.get('select').eq(0).select('01', { force: true }).should('have.value', '01');
          cy.get('select').eq(1).select('19', { force: true }).should('have.value', '19');
          this.clickOnSSNRadio();
          this.fillInSSN(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.SSN_NO);
          this.fillInPhoneNumber(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.PHONE_NUMBER);
          this.fillInEmail(CONSTANT.ACP_DATA.INVALID_PERSONAL_INFO.Email);
          this.clickOnNextBtn();
          this.invalidMessagesAcpFirstPage();
          this.fillInPersonalInfoPart1(CONSTANT.ACP_DATA.PERSONAL_INFO.FIRST_NAME,
               CONSTANT.ACP_DATA.PERSONAL_INFO.LAST_NAME);
          this.selectDareOfBirth();
          this.clickOnSSNRadio();
          this.fillInSSN(CONSTANT.ACP_DATA.PERSONAL_INFO.SSN_NO);
          this.fillInPhoneNumber(CONSTANT.ACP_DATA.PERSONAL_INFO.PHONE_NUMBER);
          this.fillInEmail(PageObjects.Dynamics.makeNewEmail());
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('.header-color').should('have.text','Address Information');
          this.clickOnNextBtn();
          this.requiredMessagesAcpSecondPage();
          this.fillInPhysicalAddressInfo(CONSTANT.ACP_DATA.INVALID_ADDRESS2.ADDRESS_LINE1,
               CONSTANT.ACP_DATA.INVALID_ADDRESS2.CITY);
          this.fillInPhysicalAddressInfo2(CONSTANT.ACP_DATA.INVALID_ADDRESS2.STATE,
               CONSTANT.ACP_DATA.INVALID_ADDRESS2.ZIP);
          this.fillInMailingAddress(CONSTANT.ACP_DATA.INVALID_ADDRESS2.ADDRESS_LINE1,
               CONSTANT.ACP_DATA.INVALID_ADDRESS2.CITY);
          this.fillInMailingAddress2(CONSTANT.ACP_DATA.INVALID_ADDRESS2.STATE,
               CONSTANT.ACP_DATA.INVALID_ADDRESS2.ZIP);
          this.clickOnNextBtn();
          this.invalidMessagesAcpSecondPage();
          this.fillInPhysicalAddressInfo(CONSTANT.ACP_DATA.VERIFIED_ADDRESS.ADDRESS_LINE1,
               CONSTANT.ACP_DATA.VERIFIED_ADDRESS.CITY);
          this.fillInPhysicalAddressInfo2(
               CONSTANT.ACP_DATA.VERIFIED_ADDRESS.STATE,
               CONSTANT.ACP_DATA.VERIFIED_ADDRESS.ZIP);
          cy.get('[data-cy="useSameAddress"]').click();
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('.header-color').should('have.text','Qualified Programs');
          this.clickOnNextBtn();
          this.requiredMessagesAcpThirdPage();
          cy.get('li').eq(26  ).click({ force: true });
          this.clickOnIQualifyIndividually();
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('.header-color').should('have.text', 'Required document(s) consent: ');
          this.clickOnNextBtn();
          cy.get('.validation-message').should('have.text', 'Please tick this box to confirm that you have read and understood what documents you need to provide.');
          cy.get('.consent-form > .ng-untouched').click();
          this.clickOnNextBtn();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('.secondary-font').should('have.text','Customer Notice and Agreement');
          this.clickOnVerifyBtn();
          this.requiredMessagesAcpForthPage();
          this.firstCheckSignUp();
          this.secondCheckSignUp();
          this.thirdCheckSignUp();
          this.forthCheckSignUp();
          this.fillInFullName(CONSTANT.ACP_DATA.PERSONAL_INFO.FULL_NAME);
          PageObjects.Recaptcha.checkRecaptchaCustomerInfo1();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL1);
          this.clickOnVerifyBtn();
          cy.wait(CONSTANT.TIME.SPEED_TIME.LEVEL2);
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('.title').should('have.text','Awesome, Almost Done!');
          cy.get('.description').should('have.text','Please select “Resume Filing” to be redirected to the National Verifier. Once you are done, the National Verifier will redirect you back to Good Mobile to complete the process.Please make sure to complete this step within 45 days.');
          cy.get('[data-cy="resumeFilingBtn"]').should('exist');
     };
     resumeFillingFlow(){
          cy.get('[data-cy="resumeFilingBtn"]').click();
          // cy.visit('https://nvca-stg.universalservice.org/ebca-ui/#/termcondition');
          cy.url().should('eq', 'https://nvca-stg.universalservice.org/ebca-ui/#/termcondition');
          //
          cy.get('#nextBtn').click();
          this.firstCheckResumeFillingSignUp();
          this.secondCheckResumeFillingSignUp();
          this.thirdCheckResumeFillingSignUp();
          this.forthCheckResumeFillingSignUp();
          this.fifthCheckResumeFillingSignUp();
          this.sixCheckResumeFillingSignUp();
          this.sevenCheckResumeFillingSignUp();
          this.eightCheckResumeFillingSignUp();
          this.nineCheckResumeFillingSignUp();
          // this.tenCheckResumeFillingSignUp();
          this.elevenCheckResumeFillingSignUp();
          this.fillInFullNameResumeFilling(CONSTANT.ACP_DATA.PERSONAL_INFO.FULL_NAME);
          //checkbox
          cy.get('#certSubmitBtn').click();
          //
          cy.get('#returnToCarrierUrlBtn').click();
          PageObjects.TitleExpectations.goToACPEnrollemntPage();
          cy.get('.title').should('have.text','Congratulations!');
          cy.get('.description').should('have.text','Your ACP benefits can now be applied to your Good Mobile 10GB ACP plan!');
          cy.get('[data-cy="addNewLine"]').should('exist');
     };
};
export default new Acp();
