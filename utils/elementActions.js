 import {Selector, t} from 'testcafe';


export default  class ElementActions{
    async clickElement(element){
        //stepName = 'clicking on element: ' + element;
       try{
          
          await t.click(Selector(element));
           console.log("clicked on element:" + element);
        } 
       catch (err){
           console.log("unable to click on element:" + element);
           throw(err);
        }
   }
    async clickElementA(element) {
    //stepName = "click " +element;
        try {
          await t.click(Selector(element));
          console.log("Clicked on element: " + element);
    }
        catch (err) {
           console.log("unable to click on element: " + element);
           throw err;
        }
    }
   async setText(element, set_text){
      // var stepName = 'setting a text in the element:' + element;
       try{
            //await t.wait(5000);
            await t.typeText(element, set_text);
           console.log("clicked on element:" + element);
           console.log("entered text in element:" + element);
       } catch (err){
           console.log("unable to set the text in field:" + element);
           throw(err);
       }
   }
 
   async shortWait() {
    try {
        await t.wait(8000)
        console.log('waited for element')
    }
    catch (err) {
        console.log('can not wait for element')
        throw err;
    }
}
}




