class PortfolioFilterOption {
    constructor (params){
        this.parentDOM = params.parentDOM;
        this.data = params.data;

        this.DOM = null;
        this.init();

        
        console.log(this.data);
    }
    init(){
        this.render();
        this.addEvents();
    }
    addEvents(){

    }
    render(){
        const HTML = `<div class="option">${this.data.title}</div>`
        this.parentDOM.insertAdjacentHTML ('beforeend',HTML);
        this.DOM = this.parentDOM.querySelector('.option');
    }
}
export {PortfolioFilterOption};