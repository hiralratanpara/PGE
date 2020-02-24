import {Selector} from 'testcafe';

fixture('OrangeHRM TimeSheet')
.page('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
test('search box comes in full screen', async t => {
   
    await t
        .maximizeWindow()
        .typeText('#txtUsername','Admin')
        .typeText('#txtPassword','admin123')
        .click('#btnLogin')
        .wait(1000)
        .expect(Selector('#welcome').textContent).contains('Welcome')
          //clicking on Time module,entering employee name and clicking on view
        .click('#menu_time_viewTimeModule')
        .wait(1000)

        //entering the day of week

        
        // .click('#time_startingDays')
        // .click('#time_startingDays > option:nth-child(4)')
        // .wait(1000)
        employeeNameText =  await Selector('#employeeSelectForm > fieldset > ol > li:nth-child(1) > label')
        console.log(employeeNameText.inn)
        .typeText('#employee','a')
        .click('body > div.ac_results > ul > li.ac_even.ac_over')
        .click('#btnView')
       
          //Adding timesheet
        .click('#btnAddTimesheet')  
        // .click('#time_date')
        // .click('#ui-datepicker-div > table > tbody > tr:nth-child(2) > td.ui-datepicker-days-cell-over.ui-datepicker-current-day.ui-datepicker-today > a')
        // .click('#btnAddTimesheet')
        // .typeText('#searchSystemUser_userName','Admin')
        // .click('#searchBtn')
        // .expect(Selector('#resultTable > tbody > tr > td:nth-child(5)').textContent).contains('Enabled')
        .wait(1000)
        .click('#welcome')
        .wait(1000)
        .click('#welcome-menu > ul > li:nth-child(2) > a')
    });

    
    