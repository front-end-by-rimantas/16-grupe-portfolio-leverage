import {PortfolioListItem} from './PortfolioListItem.js'

class PortfolioList {
    constructor (params){
        this.parentDOM = params.parentDOM;
        this.DOM = null;
        this.init();
        /*this.item = null;*/
        
    }
    init(){
        
        this.render();
        new PortfolioListItem ({
            parentDOM: this.DOM,
        });
        this.addEvents();
    }
    addEvents(){

    }
    render(){
        
        this.parentDOM.innerHTML =`<div class="list"></div>`;
        this.DOM = this.parentDOM.querySelector('.list')
        console.log(this.DOM);
    }
    
}
export {PortfolioList};