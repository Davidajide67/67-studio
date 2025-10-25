// async function getAdvice () {
//     const url = "https://api.adviceslip.com/advice"
//     const res = await fetch (url)
//     const data = await res.json()
//     console.log(data)
//     console.log(data.slip.advice)
// }
// let count = 10 ;
// function timer (){
//      console.log (count);
//      count--;
//      let interval = setInterval(() => {
//         console.log(count);
//         if (count < 0 ) {
//             count= 10;
//         }
//      }, 1000);
// }
// setTimeout(10000, getAdvice)
//     .catch (error => {
//         console.error('ERROR FETCHING THE ADVISE', error);
//         setTimeout(getAdvice, 10000);
//     });
// getAdvice()
async function getAdvice () {
    const url = "https://api.adviceslip.com/advice"
    try {
        const res = await fetch (url)
            const data = await res.json()
            console.log(data)
            console.log (`15 Seconds advice is : "${data.slip.advice}"`)
            const advise = document.getElementById("advise-text")
            advise.textContent = `advise is : "${data.slip.advice}"`
    } catch (error) {
        console.log(`ERROR FAILED TO FETCH ADVISE`,error)
    }
    setTimeout(getAdvice, 3000)
}
getAdvice();

AOS.i