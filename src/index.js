import {ComputerFormView} from './WUI/computer.form';
class Application{
    run(){
        let mainContainer=document.querySelector('#main');
        let _cf=new ComputerFormView(mainContainer);
        _cf.render(mainContainer)
    }
}

const app=new Application();
app.run()