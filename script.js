





window.addEventListener('keydown', function(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key = document.querySelector(`key[data-key="${event.keyCode}"]`) // animation
    console.log(audio)
    if (!audio) return;         // if the key isnt mapped to any audio, do nothing
    audio.currentTime = 0       // rewind to start so that if you hit key repeatedly it just plays over
    audio.play()                // play the audio if it is mapped and found
    
    key.classList.add('playing')
    
    
    
    
    // console.log(event.keyCode) // check if the key code selector is working
})


const keys = document.querySelector('.key')

