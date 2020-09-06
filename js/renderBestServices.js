function renderBestServices( selector, data ) {


<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
export { renderBestServices };
