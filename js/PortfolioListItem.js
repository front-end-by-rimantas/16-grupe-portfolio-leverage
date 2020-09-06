class PortfolioListItem {
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
        const HTML = `<div class="item">${this.data.img}</div>`
        this.parentDOM.insertAdjacentHTML('beforeend',HTML);
        this.DOM = this.parentDOM.querySelector('.item');
    }
}
export {PortfolioListItem};