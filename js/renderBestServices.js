function renderBestServices( selector, data ) {

    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.lenght;

    for ( let i=0; i<size; i++ ) {
        const service = data[i];
        console.log(service);
        
        HTML += `<div class="card">
                    <i class="icon fa fa-database" aria-hidden="true"></i>
                    <h3>Digital Marketing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <a class="arrow " href="#"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></i></a>
                </div>`;
    }

    return DOM.innerHTML = HTML;
}

export { renderBestServices };