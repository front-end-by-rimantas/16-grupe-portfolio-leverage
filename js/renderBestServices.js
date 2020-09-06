function renderBestServices( selector, data ) {
    
    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length;

    for ( let i=0; i<size; i++ ) {

        const service = data[i];
        

        HTML += `<div class="card col-12 col-sm-6 col-md-4">
                    ${service.icon}
                    <h3>${service.title}</h3>
                    <p>${service.descripcion}</p>
                    ${service.link}
                </div>`;
    }
    return DOM.innerHTML = HTML;
}
export { renderBestServices };

