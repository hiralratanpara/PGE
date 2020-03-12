import { homePage } from '../locators/pgeAlerts.json'
import ElementActions from '../utils/elementActions'
import coreUtils from '../coreUtils'
import Assertions from '../utils/assertions.js';

const elementActions = new ElementActions();
const CoreUtils = new coreUtils();
const assertions = new Assertions();

export default class NwPgeHomePage {
   async pgeEmployee() {


      //await elementActions.clickElementA(homePage.acceptCookie);
      await elementActions.shortWait();
      await assertions.contains(homePage.pgeEmployees, "PG&E Employees");
      await elementActions.clickElement(homePage.pgeEmployees);
      await elementActions.shortWait();
      await elementActions.clickElement(homePage.safety);
      await elementActions.shortWait();
      
      await elementActions.clickElement(homePage.searchBox);
      await elementActions.setText(homePage.searchBox, "power shutoff");
      await elementActions.clickElement(homePage.searchButton)
      await elementActions.shortWait();
      

   }
   async safety() {
      await elementActions.clickElement(homePage.safety);
   }
}