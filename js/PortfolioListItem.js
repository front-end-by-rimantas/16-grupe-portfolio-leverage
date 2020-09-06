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
        const HTML = `<div class="item">
                        <div class="card">
                            <img src="./img/portfolio/${this.data.img}" alt="${this.data.title}">
                            <div clas="hover"></div>
                            <div class="cardText">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>    
                    </div>`
        this.parentDOM.insertAdjacentHTML('beforeend',HTML);
        this.DOM = this.parentDOM.querySelector('.item');
    }
}
export {PortfolioListItem};