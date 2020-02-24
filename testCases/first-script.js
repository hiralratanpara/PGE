import {Selector} from 'testcafe';
//const searchBox= Selector("input[@id='smobile_1']");
//const searchBox = selector('#smobile');
fixture('testcafe demo')
.page('https://www.pgealerts.com/');
test('search box comes in full screen', async t => {
    await t
        .maximizeWindow()
        .typeText('#smobile_1','power shutoff')
        
        //.expect(Selector('#main > div > div > div.col-xs-12.col-sm-8.col-sm-pull-4 > div.emap-page-heading_block.emap-page-updates_heading > h1').innerText).contains('Search Results for: power shutoff')
        //.click('#onetrust-accept-btn-handler')
        // .wait(1000)
        // .click('#searchform_1 > div:nth-child(2) > span:nth-child(3)')
        // .wait(1000)
        //.click('#menu-item-32 > a:nth-child(1)') 
       //.click('#searchform_1 > div:nth-child(2) > span:nth-child(3) > button:nth-child(1) > i:nth-child(1)') 
    });

    fixture('employees')
    .page('https://www.pgealerts.com/?lang=en&s=power+shutoff')
    test('click on PG&E Employees tab', async t => {
        await t
        .expect(Selector('#main > div > div > div.col-xs-12.col-sm-8.col-sm-pull-4 > div.emap-page-heading_block.emap-page-updates_heading > h1').innerText).contains('Search Results for: power shutoff')
        
    });