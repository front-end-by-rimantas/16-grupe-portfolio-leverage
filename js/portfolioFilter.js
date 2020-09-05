class PortfolioFilter {
    constructor (params){
        this.parentDOM = params.parentDOM;
        this.DOM = null;
        this.init();

    }
    init(){
        this.render();
        this.addEvents();
    }
    addEvents(){

    }
    render(){
        
        this.parentDOM.innerHTML =   `<div class="filter"></div>`;
        this.DOM = this.parentDOM.querySelector('.filter')
        
    }
}
export {PortfolioFilter};