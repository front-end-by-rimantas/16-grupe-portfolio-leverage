class PortfolioListItem {
    constructor (params){
        this.parentDOM = params.parentDOM;
        this.DOM = null;
        this.init();
        console.log(params);
    }
    init(){
        this.render();
        this.addEvents();
    }
    addEvents(){

    }
    render(){
        
        this.parentDOM.innerHTML =`<div class="item"></div>`;
        this.DOM = this.parentDOM.querySelector('.item')
        console.log(this.DOM);
    }
}
export {PortfolioListItem};