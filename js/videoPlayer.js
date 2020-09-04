function videoPlayer(videoData){
    return `<div class="video-box"> 
                <div class="video-position">
                    <iframe id="youtube" src="${videoData.link};autoplay=1&amp;enablejsapi=1" frameborder="0" allowfullscreen="true"></iframe>
                </div> 
            </div>`
}
export default videoPlayer;