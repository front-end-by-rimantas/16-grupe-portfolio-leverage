import videoData from '../data/videoData.js'


class Video {
    constructor(param) {
        this.selector = param.selector;
        this.DOM = null;
        
        this.renderVideo();
       
    }
 renderVideo (){
        this.DOM = document.querySelector(this.selector)
        this.DOM.innerHTML = ` <div class="row">
                                    <div  class="col-12">
                                        <h2>${videoData.title}</h2>
                                        <p>${videoData.text}</p>  
                                    </div>
                                    <div class="col-12 picturebox">
                                        <a href=${videoData.link}> 
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
                                
    }
}

export {Video};