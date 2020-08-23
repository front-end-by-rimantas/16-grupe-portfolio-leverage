function renderBestServices( selector, data ) {

    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length;

    for ( let i=0; i<size; i++ ) {
        
        const service = data[i];
        console.log(service);

        HTML += `<div class="card">
                    ${service.icon}
                    <h3>${service.title}</h3>
                    <p>${service.descripcion}</p>
                    ${service.link}
                </div>`;
    }
    return DOM.innerHTML = HTML;
}
export { renderBestServices };
