const bou = {
    name: 'Purna',
    id: 40,
    address: 'Shoyon er sathe thke',
    isMarried: true,
    friends: ['n', 'e', 'i'],
    fvtMovies: [{name: 'venom', year: 2024,}, {name: 'salar', year: 2024}],
    act: function(){
        console.log('saradin dhong kore')
    },
    car:{
        brand: 'GTR-35',
        price: 5000000,
        made: 2023,
        manufacturer: {
            name: 'Nissan',
            ceo: 'Carlos Ghosn',
            country: 'japan'
        }
    }
}

// console.log(student.car);
console.log(bou.act);
bou.act();
