function progress(){


    let progressElements = document.querySelectorAll('#progress')
    for (let el of progressElements) {

        let procentOfProgress = el.getAttribute('value');
        el.style.width = procentOfProgress + '%'
        console.log(procentOfProgress);

        if (procentOfProgress < '50'){
            console.log('yes')
            el.style.color = 'black'
        }
    }
}
progress()