
import Homepage from '../pageObject/orangeHRMPageObject';
// const Homepage = new homepage();
fixture('OrangeHRM Homepage')
.page('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
test('search box comes in full screen', async t => {
    await t
        .maximizeWindow()
        .typeText(Homepage.userName, 'Admin')
        .typeText(Homepage.password,'admin123') 
        //.takeScreenshotOnFail();
        });
    
