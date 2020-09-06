class PortfolioFilterOption {
    constructor (params){
        this.parentDOM = params.parentDOM;
        this.tags = params.data;

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
        const HTML = `<div class="option">${this.tags}</div>`
        this.parentDOM.insertAdjacentHTML ('beforeend',HTML);
        this.DOM = this.parentDOM.querySelector('.option');
    }
}
export {PortfolioFilterOption};