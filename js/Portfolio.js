import {PortfolioFilter} from './portfolioFilter.js'
import {PortfolioList} from './portfolioList.js'

class Portfolio {
    constructor (params){
        this.selector = params.selector;

        this.selectorDOM = null;
        this.DOM = null;

        this.filter = null;
        this.list = null;

        this.init();
    }
    init(){
        if (!this.isValidSelector()) {
            return;
        }
        this.render();
        this.filter = new PortfolioFilter({
            parentDOM: this.DOM,
        });
        this.list = new PortfolioList({
            parentDOM: this.DOM,
        })
        this.addEvents();
    }
    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.warn('Selector should be a "string" type.');
            return false;
        }
        if (this.selector === '') {
            console.warn('Selector should not be an empty string.');
            return false;
        }

        this.selectorDOM = document.querySelector(this.selector);
        if (!this.selectorDOM) {
            console.warn('Could not find any element by given selector.');
            return false;
        }

        return true;
    }
    addEvents(){

    }
    render(){
        this.selectorDOM.innerHTML = `<div class="portfolioList"></div>`;
        this.DOM = this.selectorDOM.querySelector('.portfolioList')
    }
}
export {Portfolio};