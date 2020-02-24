import {Selector} from 'testcafe';
import {login} from '../locators/HRMLocators.json';
import {ElementActions} from '../utils/elementActions';
const elementActions = new ElementActions();
export default class HRMHomePage {
    homePage(){
        elementActions.clickElement(login.forgotPassWord);
        
    }
}
 