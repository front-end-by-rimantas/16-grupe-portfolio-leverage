function renderBestSkills( selector, data ) {

    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length;

    for ( let i=0; i<size; i++ ) {

        const skill = data[i];
        console.log(skill);
        console.log(345 * skill.percent / 100);

        HTML += `<div class="col-12 col-sm-12 col-md-6 col-lg-3 skill-item">
                    <div class="skill-gauge">
                        <div class="gauge-progress">
                            <svg>
                                <circle cx="60" cy="60" r="55" class="background"/>
                                <circle cx="60" cy="60" r="55" class="circle-progress" stroke-dasharray= "${(345 * skill.percent / 100)}";/>
                            </svg>
                        </div>
                        <div class="gauge-value"> ${skill.percent} </div>
                        
                    </div>

                    <h2>${skill.title}</h2>
                </div>`;
    }
    return DOM.innerHTML = HTML;
}
export { renderBestSkills };
