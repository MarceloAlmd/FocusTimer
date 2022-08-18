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

    function ChangeClassListFlorestOn(){
        florestOn.classList.add('hide')
        florestOff.classList.remove('hide')
        sound.florest.play()
    }

    function ChangeClassListFlorestOff(){
        florestOff.classList.add('hide')
        florestOn.classList.remove('hide')
        sound.florest.pause()
    }

    function ChangeClassListRainOn(){
        rainOn.classList.add('hide')
        rainOff.classList.remove('hide')
        sound.rain.play()
    }

    function ChangeClassListRainOff(){
        rainOff.classList.add('hide')
        rainOn.classList.remove('hide')
        sound.rain.pause()
    }

    function ChangeClassListShopOn(){
        shopOn.classList.add('hide')
        shopOff.classList.remove('hide')
        sound.shop.play()
    }

    function ChangeClassListShopOff(){
        shopOff.classList.add('hide')
        shopOn.classList.remove('hide')
        sound.shop.pause()
    }

    function ChangeClassListFireOn(){
        fireOn.classList.add('hide')
        fireOff.classList.remove('hide')
        sound.fire.play()
    }

    function ChangeClassListFireOff(){
        fireOn.classList.remove('hide')
        fireOff.classList.add('hide')
        sound.fire.pause()
    }

    


    florestOn.addEventListener('click', function(){
        ChangeClassListFlorestOn()
    })
    florestOff.addEventListener('click', function(){
      ChangeClassListFlorestOff()
    })
    
    rainOn.addEventListener('click', function(){
        ChangeClassListRainOn()
    })
    rainOff.addEventListener('click', function(){
        ChangeClassListRainOff()
    })
    
    shopOn.addEventListener('click', function(){
        ChangeClassListShopOn()
    })
    shopOff.addEventListener('click', function(){
        ChangeClassListShopOff()
    })
    
    fireOn.addEventListener('click', function(){
        ChangeClassListFireOn()
    })
    fireOff.addEventListener('click', function(){
        ChangeClassListFireOff()
    })
    
}

