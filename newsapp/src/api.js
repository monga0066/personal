

export const getnews=()=>{
 return fetch("https://newsdata.io/api/1/news?apikey=pub_1089880be725a379d33af0360bc2c0b0bb3f5").then(res=>res.json())
}