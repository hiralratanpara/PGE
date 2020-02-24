import {Selector} from 'testcafe';
class homePage {
    constructor () {
        this.userName = Selector('#txtUsername');
        this.password = Selector('#txtPassword');
    }
}

export default new homePage();