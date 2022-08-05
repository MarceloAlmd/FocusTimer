export default function ({
    florestOn,
    florestOff,
    rainOn,
    rainOff,
    shopOn,
    shopOff,
    fireOn,
    fireOff,
    sound
}) {
    florestOn.addEventListener('click', function(){
        florestOn.classList.add('hide')
        florestOff.classList.remove('hide')
        sound.florest.play()
    })
    florestOff.addEventListener('click', function(){
        florestOff.classList.add('hide')
        florestOn.classList.remove('hide')
        sound.florest.pause()
    })
    
    rainOn.addEventListener('click', function(){
        rainOn.classList.add('hide')
        rainOff.classList.remove('hide')
        sound.rain.play()
    })
    rainOff.addEventListener('click', function(){
        rainOff.classList.add('hide')
        rainOn.classList.remove('hide')
        sound.rain.pause()
    })
    
    shopOn.addEventListener('click', function(){
        shopOn.classList.add('hide')
        shopOff.classList.remove('hide')
        sound.shop.play()
    })
    shopOff.addEventListener('click', function(){
        shopOff.classList.add('hide')
        shopOn.classList.remove('hide')
        sound.shop.pause()
    })
    
    fireOn.addEventListener('click', function(){
        fireOn.classList.add('hide')
        fireOff.classList.remove('hide')
        sound.fire.play()
    })
    fireOff.addEventListener('click', function(){
        fireOn.classList.remove('hide')
        fireOff.classList.add('hide')
        sound.fire.pause()
    })
    
}

