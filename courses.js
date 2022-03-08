console.log('welcome to course page')
let title = [
    'Atomic and Molecular Physics'
    , 'Classical Mechanics'
    , 'Condensed Matter Physics'
    , 'Electromagnetic Theory'
    , 'Electronics'
    , 'Mathematical Physics'
    , 'Nuclear and Particle Physics'
    , 'Quantum Mechanics'
    , 'Thermo. and Stats Mech'
    , 'Waves, Oscillation & Optics'
]

let topic1 = ['Atomic and Molecular Physics Assignment_CE', 'Atomic and Molecular Physics', 'ATOMIC AND MOLECULAR PHYSICS_CE'
    , 'Atomic SPECTROCOPY NOTES', 'atomic-and-molecular-class-notes', 'atomic-molecular-physics. hand written']

let topic2 = ['Central Force and Kepler’s System', 'clasical-mechanics-class-notes', 'Classical Mechanics Assignment_CE'
    , 'Classical Mechanics', 'CLASSICAL MECHANICS_CE', 'General Mechanics fiziks', 'Stability Analysis']

let topic3 = ['Condensed Matter Physics', 'Condensed Matter-physics-class-notes', 'Solid State Physics Assignment_CE']

let topic4 = ['Applications of Electromagnetic waves', 'Dielectrics', 'electrodynamics-class-notes', 'Electromagnetic Theory Assignment_CE'
    , 'Electromagnetic Theory', 'ELECTROMAGNETIC THEORY_CE', 'EMT_Formula_Sheet']

let topic5 = ['Electronics Assignment_CE', 'Electronics fiziks notes', 'ELECTRONICS_CE', 'electronics-class-notes', 'Expermental Methods'
    , 'Operational Amplifier', 'Practice problem set of both']

let topic6 = ['Complex-Analysis', 'Content of Mathematical Physics', 'Fourier Series', 'Mathematical Physics Assignment_CE', 'MATHEMATICAL PHYSICS_CE'
    , 'mathematical Physics_Part 1', 'Mathematical Physics_Part 2', 'Mathematics_Formula_Sheet']

let topic7 = ['Liquid Drop Model of Nucleus', 'Nuclear and Particle Physics Assignemnt_CE', 'Nuclear and Particle Physics', 'NUCLEAR AND PARTICLE PHYSICS_CE'
    , 'nuclear-particle-class-notes', 'particle-physics-class-notes']

let topic8 = ['Concept of Wave function', 'modern-physics-fiziks-notes', 'QM', 'Quantum Mechanics Assignment_CE', 'QUANTUM MECHANICS_CE'
    , 'Quantum_Formula_Sheet', 'quantum-mechanics-class-notes']

let topic9 = ['Into. to Stats Mech', 'KTG and Thermodynamics fiziks notes', 'Statistical Mechanics', 'Thermo-Stats Theory_CE']

let topic10 = ['Waves, Oscillation & Optics Notes fiziks']

let accordin = document.getElementById('accordionExample')
let count = 0, number = 1;

Array.from(title).forEach(element => {
    accordin.innerHTML += `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${count}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${count}" aria-expanded="true" aria-controls="collapse${count}">
                        <p>${number++}: ${element}</p>
                        </button>
                    </h2>
                    <div id="collapse${count}" class="accordion-collapse collapse" aria-labelledby="heading${count}" data-bs-parent="#accordionExample">
                        <div class="accordion-body" id='topic${count}'></div>
                    </div>
                </div>`

    if (count == 0) {
        topic1.forEach(e => {
            let id = document.getElementById('topic0')
            id.innerHTML += 
            `<li class="list-group-item list-group-item-light">
                <a href="Physics JEST_NET_GATE/${element}/${e}.pdf" target="_blank">${e}</a> <br>
            </li>`
        });
    } else if (count == 1) {
        topic2.forEach(e => {
            let id = document.getElementById('topic1')
            id.innerHTML += 
            `<li class="list-group-item list-group-item-light">
                <a href="Physics JEST_NET_GATE/${element}/${e}.pdf" target="_blank">${e}</a> <br>
            </li>`
        });
    }
    else if (count == 2) {
        topic3.forEach(e => {
            let id = document.getElementById('topic2')
            id.innerHTML += 
            `<li class="list-group-item list-group-item-light">
                <a href="Physics JEST_NET_GATE/${element}/${e}.pdf" target="_blank">${e}</a> <br>
            </li>`
        });
    }
    else if (count == 3) {
        topic4.forEach(e => {
            let id = document.getElementById('topic3')
            id.innerHTML += 
            `<li class="list-group-item list-group-item-light">
                <a href="Physics JEST_NET_GATE/${element}/${e}.pdf" target="_blank">${e}</a> <br>
            </li>`
        });
    }
    else if (count == 4) {
        topic5.forEach(e => {
            let id = document.getElementById('topic4')
            id.innerHTML += 
            `<li class="list-group-item list-group-item-light">
                <a href="Physics JEST_NET_GATE/${element}/${e}.pdf" target="_blank">${e}</a> <br>
            </li>`
        });
    }
    else if (count == 5) {
        topic6.forEach(e => {
            let id = document.getElementById('topic5')
            id.innerHTML += 
            `<li class="list-group-item list-group-item-light">
                <light href="Physics JEST_NET_GATE/${element}/${e}.pdf" target="_blank">${e}</a> <br>
            </li>`
        });
    }
    else if (count == 6) {
        topic7.forEach(e => {
            let id = document.getElementById('topic6')
            id.innerHTML += 
            `<li class="list-group-item list-group-item-light">
                <a href="Physics JEST_NET_GATE/${element}/${e}.pdf" target="_blank">${e}</a> <br>
            </li>`
        });
    }
    else if (count == 7) {
        topic8.forEach(e => {
            let id = document.getElementById('topic7')
            id.innerHTML +=
            `<li class="list-group-item list-group-item-light">
                <a href="Physics JEST_NET_GATE/${element}/${e}.pdf" target="_blank">${e}</a> <br>
            </li>`
        });
    }
    else if (count == 8) {
        topic9.forEach(e => {
            let id = document.getElementById('topic8')
            id.innerHTML += 
            `<li class="list-group-item list-group-item-light">
                <a href="Physics JEST_NET_GATE/${element}/${e}.pdf" target="_blank">${e}</a> <br>
            </li>`
        });
    }
    else if (count == 9) {
        topic10.forEach(e => {
            let id = document.getElementById('topic9')
            id.innerHTML += 
            `<li class="list-group-item list-group-item-light">
                <a href="Physics JEST_NET_GATE/${element}/${e}.pdf" target="_blank">${e}</a> <br>
            </li>`
        });
    }
    count++;
});

let topicsearch = document.getElementById('topicsearch')
topicsearch.addEventListener('input',()=>{
    let inputval = topicsearch.value
    let accord = document.getElementsByClassName('accordion-item')
    Array.from(accord).forEach((e)=>{
        let accordintext = e.getElementsByTagName('p')[0].innerText
        if (accordintext.includes(inputval)) {
            e.style.display = 'block'
        }else{
            e.style.display = 'none'
        }
    })
})