const randomNums = (min , max)=>{
  return Math.floor(Math.random() * (max-min+1) + min)
}

const generate = () => {
  const minEl = document.getElementById('min')
  const maxEl = document.getElementById('max')
  const min = Number(minEl.value)
  const max =Number( maxEl.value)
  
  const placeholderEl = document.getElementById('placeholder')
  if (min && max) {
    if (min > max) {
     alert("iltimos birinchi son kichik bo'lsin")
    }else{
      placeholderEl.textContent = randomNums(min , max)
    }
  }else{
   alert("iltimos sonlarni to'liq kiriting")
  }
  
}

const btnEl = document.getElementById('generate')
btnEl.addEventListener('click' , generate)