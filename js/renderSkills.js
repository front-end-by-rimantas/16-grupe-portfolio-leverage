function renderSkills ( selector, data ) {

    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length;
    
    for ( let i=0; i<size; i++ ) {

        const skills = data[i];
    
        HTML += `<div class="col-12 col-sm-6 col-md-3">
        <div class="skill-gauge">
            <div class="gauge-progress">
                <svg>
                    <circle cx="60" cy="60" r="55" class="background" stroke= "${skills.colorGrade.background}"/>
                    <circle cx="60" cy="60" r="55" class="circle-progress" stroke="url(#gradient${i})" />
                    <defs>
                        <linearGradient id="gradient${i}" x1="0%" y1="50%" x2="80%" y2="0%">
                            <stop offset="0%" stop-color="${skills.colorGrade.first}" />
                            <stop offset="100%" stop-color="${skills.colorGrade.second}"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div class="gauge-value">
                <h3>${skills.value}</h3>
                <span>%</span>
            </div>
        </div>
        <h2 class="skill-name">${skills.name}</h2>
    </div>`;
    }
    return DOM.innerHTML = HTML;
}
export { renderSkills };

        
        
