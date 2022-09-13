let color = "000000"
let scheme = "monochrome" 

document.getElementById("color").addEventListener('input', function(){
    color = (document.getElementById("color").value).substring(1)

})

document.getElementById("scheme").addEventListener('input', function(){
    scheme = document.getElementById("scheme").value

})

document.getElementById("btn-color").addEventListener('click', function(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}`)
    .then(response => response.json())
    .then(data => {
        let html = ""
        for(let i = 0; i < 5; i++){
            html += `
            <div><img src=${data.colors[i].image.bare}><p class="hex-color">${data.colors[i].hex.value}</p></div>`
        }
        
        
        
        document.getElementById("colors").innerHTML = html
    })
})


document.getElementById("colors").onclick = function(){
    document.execCommand("Copy")
}

