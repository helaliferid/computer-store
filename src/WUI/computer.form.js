export class ComputerFormView{
   constructor(){
    this.brandField=document.createElement('input');
    this.brandField.type='text';
    this.characteristicField=document.createElement('input');
    this.characteristicField.type='text';
    this.priceField=document.createElement('input');
    this.priceField.type='text';
   }

   render(anchor){
        let _form='';
        anchor.appendChild(this.brandField);
        anchor.appendChild(this.characteristicField);
        anchor.appendChild(this.priceField);
   }
}

