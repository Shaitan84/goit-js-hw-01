"use strict";

let deliveryCountry = prompt("В какую страну желаете оформить доставку?");
let country = deliveryCountry.toLocaleLowerCase();
const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;
const china = "китай";
const chile = "чили";
const australia = "австралия";
const india = "индия";
const jamaica = "ямайка";

if (country !== null) {
  switch (country) {
    case china:
      alert(
        `Доставка в ${deliveryCountry} будет стоить ${priceChina} кредитов`
      );
      break;

    case chile:
      alert(
        `Доставка в ${deliveryCountry} будет стоить ${priceChile} кредитов`
      );
      break;

    case australia:
      alert(
        `Доставка в ${deliveryCountry} будет стоить ${priceAustralia} кредитов`
      );
      break;

    case india:
      alert(
        `Доставка в ${deliveryCountry} будет стоить ${priceIndia} кредитов`
      );
      break;

    case jamaica:
      alert(
        `Доставка в ${deliveryCountry} будет стоить ${priceJamaica} кредитов`
      );
      break;
    default:
      alert("В вашей стране доставка недоступна!");
  }
} else {
  console.log("Отменено пользователем!");
}
