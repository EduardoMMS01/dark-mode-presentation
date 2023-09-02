const toggleSwitch = () => {
    const bodyClass = document.body.classList
    const img = document.querySelector('#profile img')

    bodyClass.contains('light') 
        ? bodyClass.remove('light')
        : bodyClass.add('light')

    bodyClass.contains('light')
        ? img.setAttribute('src', './assets/avatar-light.png')
        : img.setAttribute('src', './assets/avatar.png')
}

// Dica que já faria tudo por tras dos panos do primeiro ternário:
// bodyClass.toggle('light')