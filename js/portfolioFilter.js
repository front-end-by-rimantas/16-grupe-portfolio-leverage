import {PortfolioFilterOption} from './PortfolioFilterOption.js'

class PortfolioFilter {
    constructor (params){
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        this.tags=[];
        this.DOM = null;
        this.init();
    }
    init(){
        this.render();
        this.filterTags();
        for(const tag of this.tags){
            new PortfolioFilterOption ({
                parentDOM: this.DOM,
                data: tag,
            });
        }
        this.addEvents();
    }

    filterTags(){
        for(const item of this.data){
            for(const tag of item.tags){
                if(this.tags.indexOf(tag) === -1){
                    this.tags.push(tag)
                    console.log(this.tags);
                }
            }
        }
    }

    addEvents(){

    }
    render(){
        
        this.parentDOM.insertAdjacentHTML ('beforeend', `<div class="filter"></div>`);
        this.DOM = this.parentDOM.querySelector('.filter')
        
    }
}
export {PortfolioFilter};