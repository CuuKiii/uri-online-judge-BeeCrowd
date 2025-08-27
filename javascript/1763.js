var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const obj = {
  brasil: 'Feliz Natal!',
  alemanha: 'Frohliche Weihnachten!',
  austria: 'Frohe Weihnacht!',
  coreia: 'Chuk Sung Tan!',
  espanha: 'Feliz Navidad!',
  grecia: 'Kala Christougena!',
  'estados-unidos': 'Merry Christmas!',
  inglaterra: 'Merry Christmas!',
  australia: 'Merry Christmas!',
  portugal: 'Feliz Natal!',
  suecia: 'God Jul!',
  turquia: 'Mutlu Noeller',
  argentina: 'Feliz Navidad!',
  chile: 'Feliz Navidad!',
  mexico: 'Feliz Navidad!',
  antardida: 'Merry Christmas!',
  canada: 'Merry Christmas!',
  irlanda: 'Nollaig Shona Dhuit!',
  belgica: 'Zalig Kerstfeest!',
  italia: 'Buon Natale!',
  libia: 'Buon Natale!',
  siria: 'Milad Mubarak!',
  marrocos: 'Milad Mubarak!',
  japao: 'Merii Kurisumasu!',
};

for(let i = 0; lines[i]; i += 1) {
  const phrase = lines[i]

  if(obj[phrase]) console.log(obj[phrase])
  else console.log('--- NOT FOUND ---')
} 
