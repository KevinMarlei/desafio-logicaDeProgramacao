const nomeHeroi = 'Wing Zero';
let exp = 0;

if(nomeHeroi != '' && exp < 1000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${exp} exp, Ferro!`);
}else if(nomeHeroi != '' && exp > 1000 && exp <= 2000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${exp} exp, Bronze!`);
}else if(nomeHeroi != '' && exp > 2.000 && exp <= 5.000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${exp} exp, Prata!`);
}else if(nomeHeroi != '' && exp > 6.000 && exp <= 7.000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${exp} exp, Ouro!`);
}else if(nomeHeroi != '' && exp > 7.000 && exp <= 8.000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${exp} exp, Platina!`);
}else if(nomeHeroi != '' && exp > 8.000 && exp <= 9.000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${exp} exp, Ascendente!`);
}else if(nomeHeroi != '' && exp > 9.000 && exp <= 10.000){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${exp} exp, Imortal!`);
}else if(nomeHeroi != '' && exp >= 10.001){
    console.log(`O herói de nome ${nomeHeroi} está no nível de ${exp} exp, Bronze!`);
}else{
    console.log(`O herói de nome ${nomeHeroi} está em um nível muito baixo e precisa treinar mais para combater o mal!`);
}