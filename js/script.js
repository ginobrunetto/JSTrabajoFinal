import Form from './modules/form-by-steps/form.js';

export class Main extends Form {

    constructor() {
        super();
        console.log('Script init');  
        this.initHijos();            
    }    
    initHijos() {
        let $selectHijos =$('#childGroupSelectUnder18');
        $selectHijos.on('change', this.hijos);
    }      
    hijos(){
        let $childrenData1=$('#childrenData1');
        let $childrenData2=$('#childrenData2');
        let $childrenData3=$('#childrenData3');
        let $childrenData4=$('#childrenData4');
        var e = document.getElementById("childGroupSelectUnder18");
        var childValue = e.options[e.selectedIndex].value;
        switch (childValue) {
          case '0':
            $childrenData1.css("display", "none");
            $childrenData2.css("display", "none");
            $childrenData3.css("display", "none");
            $childrenData4.css("display", "none");
            break;
          case '1':
            $childrenData1.css("display", "block");
            $childrenData2.css("display", "none");
            $childrenData3.css("display", "none");
            $childrenData4.css("display", "none");
            break;
          case '2':
            $childrenData1.css("display", "block");
            $childrenData2.css("display", "block");
            $childrenData3.css("display", "none");
            $childrenData4.css("display", "none");
            break;
          case '3':
            $childrenData1.css("display", "block");
            $childrenData2.css("display", "block");
            $childrenData3.css("display", "block");
            $childrenData4.css("display", "none");
            break;
          case '4':
            $childrenData1.css("display", "block");
            $childrenData2.css("display", "block");
            $childrenData3.css("display", "block");
            $childrenData4.css("display", "block");
            break;
        }
    };       
};
let main = new Main();