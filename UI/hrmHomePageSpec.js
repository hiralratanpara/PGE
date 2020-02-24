import {Selector} from 'testcafe';
import {homePage} from '../pageObject/HRMHomePage'

fixture('OrangeHRM Homepage')
.page('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
test('search box comes in full screen', async t => {
    await t
        .maximizeWindow();

});