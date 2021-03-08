import {PortfolioListItem} from './PortfolioListItem.js'

class PortfolioList {
    constructor (params){
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        this.DOM = null;
        this.init();
    }
    init(){
        
        this.render();
        for(const item of this.data){
            new PortfolioListItem ({
                parentDOM: this.DOM,
                data: item,
            });
        }
        this.addEvents();
    }
    addEvents(){

    }
    render(){
        
        this.parentDOM.insertAdjacentHTML ('beforeend', `<div class="list"></div>`);
        this.DOM = this.parentDOM.querySelector('.list');
    }
    
}
export {PortfolioList};