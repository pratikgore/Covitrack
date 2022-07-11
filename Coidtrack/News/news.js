
let img= document.getElementById('img')
async function fetchnews () {
    let resource = await fetch('https://newsapi.org/v2/everything?q=covid&from=2022-06-11&sortBy=publishedAt&apiKey=24d99d5123104cb2a43b143d513ff91e') ; 
    let response =await resource.json() ; 
    console.log(response)
    let arr = response.articles ; 
    console.log(arr);

    img.src =arr[9].urlToImage ; 

    // for(let i = 0 ; i<10 ; i++) {
    //     console.log(arr[i].url) ; 
    //     console.log(arr[i].urlToImage);
    // }

      
}

fetchnews();