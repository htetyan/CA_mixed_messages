//Constellation
//

const constellations = ['Capricornus', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', ' Scorpius / Ophiuchus', 'Sagittarius']

export const constellationCal = (monthPicked, dayPicked) => {

    let myConstellation = '';
    switch(true) {
      //Jan star signs, Capricorn
      case (monthPicked === 1 && dayPicked < 21):
        myConstellation = constellations[monthPicked-1];
        break;
      //Jan star signs, Aquarius
      case (monthPicked === 1 && !dayPicked < 21):
        myConstellation = constellations[monthPicked];
        break;
      //Feb star signs, Aquarius
      case (monthPicked === 2 && dayPicked < 19):
        myConstellation = constellations[monthPicked-1];
        break;
      //Feb star sign, Pisces
      case (monthPicked === 2 && !dayPicked < 19):
        myConstellation = constellations[monthPicked];
        break;
      //Mar star sign, Pisces
      case (monthPicked === 3 && dayPicked < 21):
        myConstellation = constellations[monthPicked-1];
        break;
      //Mar star sign, Aries
      case (monthPicked === 3 && !dayPicked < 21):
        myConstellation = constellations[monthPicked];
        break;
      //Apr star signs, Aries
      case (monthPicked === 4 && dayPicked < 20):
        myConstellation = constellations[monthPicked-1];
        break;
      //Apr star signs, Taurus
      case (monthPicked === 4 && !dayPicked < 20):
        myConstellation = constellations[monthPicked];
        break;
      //May star signs, Taurus
      case (monthPicked === 5 && dayPicked < 21):
        myConstellation = constellations[monthPicked-1];
        break;
      //May star sign, Gemini
      case (monthPicked === 5 && !dayPicked < 21):
        myConstellation = constellations[monthPicked];
        break;
      //Jun star sign, Gemini
      case (monthPicked === 6 && dayPicked < 23):
        myConstellation = constellations[monthPicked-1];
        break;
      //Jun star sign, Cancer
      case (monthPicked === 6 && !dayPicked < 23):
        myConstellation = constellations[monthPicked];
        break;
      //Jul star signs, Cancer
      case (monthPicked === 7 && dayPicked < 23):
        myConstellation = constellations[monthPicked-1];
        break;
      //Jul star signs, Leo
      case (monthPicked === 7 && !dayPicked < 23):
        myConstellation = constellations[monthPicked];
        break;
      //Aug star signs, Leo
      case (monthPicked === 8 && dayPicked < 23):
        myConstellation = constellations[monthPicked-1];
        break;
      //Aug star sign, Virgo
      case (monthPicked === 8 && !dayPicked < 23):
        myConstellation = constellations[monthPicked];
        break;
      //Sep star sign, Virgo
      case (monthPicked === 9 && dayPicked < 23):
        myConstellation = constellations[monthPicked-1];
        break;
      //Sep star sign, Libra
      case (monthPicked === 9 && !dayPicked < 23):
        myConstellation = constellations[monthPicked];
        break;
      //Oct star signs, Libra
      case (monthPicked === 10 && dayPicked < 23):
        myConstellation = constellations[monthPicked-1];
        break;
      //Oct star signs, Scorpio
      case (monthPicked === 10 && !dayPicked < 22):
        myConstellation = constellations[monthPicked];
        break;
      //Nov star signs, Scorpio
      case (monthPicked === 11 && dayPicked < 22):
        myConstellation = constellations[monthPicked-1];
        break;
      //Nov star sign, Sagittarius
      case (monthPicked === 11 && !dayPicked < 22):
        myConstellation = constellations[monthPicked];
        break;
      //Dec star sign, Sagittarius
      case (monthPicked === 12 && dayPicked < 22):
        myConstellation = constellations[monthPicked-1];
        break;
      //Dec star sign, Capricorn
      case (monthPicked === 12 && !dayPicked < 22):
        myConstellation = constellations[0];
        break;
      default:
        myConstellation = "Orion";
    };
    return myConstellation;
}

console.log(constellationCal(10, 1));