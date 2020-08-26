import videoData from '../data/videoData.js'


class Video {
    constructor(param) {
        this.selector = param.selector;
        this.DOM = null;
        this.renderVideo();
        this.addEvents();
        this.playVideoDOM = null;
        this.closeDOM = null;
    }

    addEvents() {
        this.playVideoDOM.addEventListener('click', () => {
        this.DOM.classList.add('show');
        
        });
        this.closeDOM.addEventListener('click', () => {
        this.DOM.classList.remove('show');
        });
    }

    renderVideo (){
            this.DOM = document.querySelector(this.selector)
            this.DOM.innerHTML = ` <div class="row">
                                        <div  class="col-12">
                                            <h2>${videoData.title}</h2>
                                            <p>${videoData.text}</p>  
                                        </div>
                                        <div class="col-12 picturebox">
                                            <a class="play" href="#"> 
                                                <i class="fa fa-play"></i>
                                                <img src="../img/watchVideoPic.jpg" alt="videoPhoto">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="video-background">
                                            <div class="video-header">header
                                                <i class="fa fa-clone"></i>
                                                <i class="fa fa-search-minus"></i>
                                                <i class="fa fa-search-plus"></i>
                                                <i class="fa fa-arrows-alt"></i>
                                                <i class="fa fa-times"></i>
                                            </div>
                                            <div class="video-position">
                                                <iframe src="//www.youtube.com/embed/7e90gBu4pas?wmode=opaque&amp;autoplay=1&amp;enablejsapi=1" frameborder="0"></iframe>
                                            </div>  
                                            <div class="video-footer">footer</div>
                                    </div>`;
                    
            this.playVideoDOM = this.DOM.querySelector('.play');
            this.closeDOM = this.DOM.querySelector('.fa-times');  
            console.log(this.DOM.classList)                   
        }
}

export {Video};