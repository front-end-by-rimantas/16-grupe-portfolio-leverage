import videoData from '../data/videoData.js'


class Video {
    constructor(param) {
        this.selector = param.selector;
        this.DOM = null;
        this.init();
    }
    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.renderVideo();
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

        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.warn('Could not find any element by given selector.');
            return false;
        }

        return true;
    }
    
    renderVideo (){
        this.DOM.innerHTML = ` <div class="row">
                                    <div  class="col-12">
                                        <h2 class="section-title">${videoData.title}</h2>
                                        <p class="section-description">${videoData.text}</p>  
                                    </div>
                                    <div class="col-12 video">
                                        VIDEO
                                    </div>
                                </div>`;
                                
    }
}

export {Video};