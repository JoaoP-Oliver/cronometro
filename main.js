let ss = 0
        let mil = 0

        const doom = setInterval(() => {
            time()
        },10)

        function time() {
            mil++
            
            if(mil === 99) {
                ss++
                mil = 0
            }

            console.log(ss)
            let time = document.getElementById('time')
            time.innerHTML = `${ss}:${mil}`
        }
