function renderBestServices( data ) {


    let HTML = '';
    const size = data.lenght;

    for ( let i=0; i<size; i++ ) {
        HTML +=     `<div class="card">
                        <i class="icon fa fa-database" aria-hidden="true"></i>
                        <h3>Digital Marketing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        <a class="arrow " href="#"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></i></a>
                    </div>`;
    }
    return HTML;
}

export { renderBestServices };