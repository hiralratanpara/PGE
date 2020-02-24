import {Selector} from 'testcafe';

fixture('OrangeHRM Homepage')
.page('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
test('search box comes in full screen', async t => {
    await t
        .maximizeWindow()
        .typeText('#txtUsername','Admin')
        .typeText('#txtPassword','admin123')
        .click('#btnLogin')
        .wait(1000)
        .expect(Selector('#welcome').textContent).contains('Welcome')
        .click('#menu_admin_viewAdminModule')
        .wait(1000)
        .typeText('#searchSystemUser_userName','Admin')
        .click('#searchBtn')
        .expect(Selector('#resultTable > tbody > tr > td:nth-child(5)').textContent).contains('Enabled')
        .wait(1000)
        .click('#welcome')
        .wait(1000)
        .click('#welcome-menu > ul > li:nth-child(2) > a')
    });

    
