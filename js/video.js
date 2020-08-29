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
        this.youtube.setAttribute("src", `${videoData.link}`)
        
        });
        this.closeDOM.addEventListener('click', () => {
        this.DOM.classList.remove('show');
        this.youtube.setAttribute("src", " ");
        });
        
        this.backDOM.addEventListener ('click',() => {
        this.DOM.classList.remove('show');
        this.youtube.setAttribute("src", " ");
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
                                            <div class="video-header">
                                                <i class="fa fa-times"></i>
                                                <i class="fa fa-arrows-alt"></i>
                                                <i class="fa fa-search-plus"></i>
                                                <i class="fa fa-search-minus"></i>
                                                <i class="fa fa-clone"></i>
                                            </div>
                                            <div class="video-box"> 
                                                <div class="video-position">
                                                    <iframe id="youtube" src="${videoData.link};autoplay=1&amp;enablejsapi=1" frameborder="0" allowfullscreen="true"></iframe>
                                                </div> 
                                            </div>     
                                            <div class="video-footer">Fit image</div>
                                    </div>`;
                    
            this.playVideoDOM = this.DOM.querySelector('.play');
            this.closeDOM = this.DOM.querySelector('.fa-times');
            this.backDOM = this.DOM.querySelector('.video-box');
            this.youtube = document.getElementById("youtube");

            console.log(this.youtube)                   
        }
}

export {Video};