function renderSkills(selector, data) {
    const DOM = document.querySelector (selector);
    let HTML = '';
    const size = data.length;
    for (let i = 0; i < size; i++) {
        HTML += `<div class="bar col-12 col-sm-12 col-md-6 col-lg-3">
                   SKILS 1234
                </div>`;
    }
    return DOM.innerHTML = HTML;
}

export { renderSkills };