function renderSkills(selector, data) {
    const DOM = document.querySelector (selector);
    let HTML = '';
    const size = data.length;
    for (let i = 0; i < size; i++) {
        HTML += `<div class="bar col-12 col-sm-12 col-md-6 col-lg-3">
                            <div class="skill-gauge-value">
                                <h2 class="value">${0}</h2>
                                <span>%</span>
                            </div>
                </div>`;
    }
    return DOM.innerHTML = HTML;
}

export { renderSkills };