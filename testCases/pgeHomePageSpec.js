import {Selector, t} from 'testcafe';
// import PgeHomePage from '../pageObject/pgeAlertHomePage'

import NwPgeHomePage from '../pageObject/pgeAlertHomePage';

const nwhomepage = new NwPgeHomePage();

fixture('testcafe demo')
.page('https://www.pgealerts.com/');

test
.meta({feature:true, nwhomepage: true})
('search box comes in full screen', async t => {
    
        await t.maximizeWindow()
        //await t.wait(2000)
        await nwhomepage.pgeEmployee()
        // await t.wait(2000);
        await nwhomepage.safety()

});