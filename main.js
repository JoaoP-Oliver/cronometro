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


// Acrescentar mais tarde
/*
                let time = 22

                if(time > 0 && time < 6) {
                  console.log('dark purple')
                } else if(time >= 6 && time <= 12) {
                  console.log('yellow')
                } else if(time >= 12 && time <= 18) {
                  console.log('gray')
                } else if(time >= 18 && time <= 24) {
                  console.log('black')
                }
*/
