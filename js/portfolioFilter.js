import {PortfolioFilterOption} from './PortfolioFilterOption.js'

class PortfolioFilter {
    constructor (params){
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        this.DOM = null;
        this.init();

    }
    init(){
        this.render();
        for(const item of this.data){
            new PortfolioFilterOption ({
                parentDOM: this.DOM,
                data: item,
            });
        }
        this.addEvents();
    }
    addEvents(){

    }
    render(){
        
        this.parentDOM.insertAdjacentHTML ('beforeend', `<div class="filter"></div>`);
        this.DOM = this.parentDOM.querySelector('.filter')
        
    }
}
export {PortfolioFilter};