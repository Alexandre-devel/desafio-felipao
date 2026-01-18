//Nome
let nickname = "Arima"



//Experiencia
let suaExperiencia = 1000



//Ranks disponíveis
if (suaExperiencia <= 1000){
  seurank = "Ferro"

} else if (suaExperiencia <=2001){
   seurank = "Bronze"

} else if (suaExperiencia <= 5000){
  seurank = "Prata"

} else if (suaExperiencia <= 7000){
  seurank = "Ouro"

} else if (suaExperiencia <= 8000){
  seurank = "Platina"

} else if (suaExperiencia <= 9000){
  seurank = "Ascendente"

} else if (suaExperiencia <= 10000){
  seurank = "Imortal"

} else if (suaExperiencia >= 10000){
  seurank = "Radiante"
}



console.log("O herói de nome " + nickname , "Está no nível " + seurank)