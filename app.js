function calcular(){
    var altura = window.document.getElementById('txta')
    var peso = window.document.getElementById('txtp')
    if (altura.value.length == 0){
        window.alert("[ERRO] Favor verificar dados") 
    } else {
        if (peso.value.length == 0){
            window.alert("[ERRO] Favor verificar dados")
        } else {
            var a = Number(altura.value)
            var p = Number(peso.value)
            if (a <= 0 || p <= 0){
                window.alert("[ERRO] Favor verificar dados")
            } else {
                var imc = 0
                imc = p / (a**2)
                var res = window.document.getElementById('dados')
                if (imc <= 18.5) {
                    res.innerHTML = `<H1>Resultado</H1><H2>Seu IMC é de ${imc.toFixed(2)}</H2><p>Você esta abaixo de seu peso normal</p><p><button onclick="bck()" id="btn">voltar</button></p>`
                } else if (imc <= 24.9){
                    res.innerHTML = `<H1>Resultado</H1><H2>Seu IMC é de ${imc.toFixed(2)}</H2><p>Você esta em seu peso normal</p><p><button onclick="bck()" id="btn">voltar</button></p>`
                } else if (imc <= 29.9){
                    res.innerHTML = `<H1>Resultado</H1><H2>Seu IMC é de ${imc.toFixed(2)}</H2><p>Você esta com excesso de peso</p><p><button onclick="bck()" id="btn">voltar</button></p>`
                } else if (imc <= 34.9){
                    res.innerHTML = `<H1>Resultado</H1><H2>Seu IMC é de ${imc.toFixed(2)}</H2><p>Você esta com Obesidade Grau I</p><p><button onclick="bck()" id="btn">voltar</button></p>`
                } else if (imc <= 39.9){
                    res.innerHTML = `<H1>Resultado</H1><H2>Seu IMC é de ${imc.toFixed(2)}</H2><p>Você esta com Obesidade Grau II</p><p><button onclick="bck()" id="btn">voltar</button></p>`
                } else {
                    res.innerHTML = `<H1>Resultado</H1><H2>Seu IMC é de ${imc.toFixed(2)}</H2><p>Você esta com Obesidade Grau III</p><p><button onclick="bck()" id="btn">voltar</button></p>`
                }
            }
        }
    }
}

function bck(){
    window.location.href = `index.html`
}