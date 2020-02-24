import {Selector} from 'testcafe';
//const searchBox= Selector("input[@id='smobile_1']");
//const searchBox = selector('#smobile');
fixture('OrangeHRM Homepage')
.page('https://www.google.com/gmail/about/#');
test('search box comes in full screen', async t => {
    await t
        .maximizeWindow()
        .click('body > div.hercules-header.h-c-header.h-c-header--product-marketing-one-tier.header--desktop > div.h-c-header__bar > div.h-c-header__cta > ul.h-c-header__cta-list.header__nav--ltr > li:nth-child(2) > a')
        .wait(7000)
        .typeText('#identifierId','abcd@gmail.com')
        .click('#identifierNext > span > span')
        .wait(3000)
        .expect(Selector('#profileIdentifier').textContent).contains('abcd');
        // .click('#btnLogin')
        // .wait(5000)
        // .expect(Selector('#welcome').contains('Welcome');
        
    });

    