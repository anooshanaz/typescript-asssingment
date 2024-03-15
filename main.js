//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple,
// such as, “Hello Eric, would you like to learn some Python today?”
var personame = "Eric";
console.log("Hello! Eric, would you like to eat some python today?");
// //task3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
var personname = "Allama Iqbal";
console.log("lowercase", personname.toLowerCase());
console.log("uppercase", personname.toUpperCase());
console.log("titlecase", personname.replace('/\b\w\g,c=> c.toUpperCase()'));
//task4
//  let quote:string ="A person who never made a mistake"
//  let author:string ="Albert Einstain Once said,";
// console.log(author+ " " +quote);ode 
//task5
// let famousPerson: string ="Albert Einstain once said";
// let message: string = "A person who never made a mistake";
// console.log(famousPerson+ " " +message);
//task6
// let personName: string = "\t\n Anoosha naz \n\t";
// console.log("original:", personName);
// console.log("stripped:", personName.trim());
//task7,8
// let a: number =4;
// let b: number =4;
// console.log(a+b);
// let c: number =10;
// let d: number =2;
// console.log(c-d);
// let e: number =2;
// let f: number =4;
// console.log(e*f);
// let g: number =32;
// let h: number =4;
// console.log(g/4);
//task9
// let favouriteNumber: number =9;
// let message: string ="My favourite number is"
// console.log(message+ " " +favouriteNumber);
//task10
//Author:[Anosha]
//date:[tuesday,feburary20,2024]
//task9 print my favourite number
//task11
// let personname: string[] =["Anaya","Iraj","Waniya","Kiran"];
// console.log(personname[0]);
// console.log(personname[1]);
// console.log(personname[2]);
// console.log(personname[3]);
//task12
// let personName: string[] =["Anaya","Iraj","Waniya","Kiran"];
// let message: string ="do you like to eat biryani?";
// console.log(personName[0]+ ' ' +message);
// console.log(personName[1]+ ' ' +message);
// console.log(personName[2]+ ' ' +message);
// console.log(personName[3]+ ' ' +message);
//task13
// let transportation: string[] = ["Honda", "Audi", "Honda city", "Carolla"];
// transportation.map((items) => 
// (console.log(`Would you like to ${items}`)))
//task14
// let guestArr: string[] = ["huzaifa", "maheen", "alishba", "hooriya", "waniya"];
// guestArr.map((items) =>
// (console.log(`Dear ${items} you are invited to the dinner`)))
//task15
//  let guestArr: string[] = ["huzaifa", "maheen", "alishba", "hooriya", "waniya"];
//  let CanNotAttend: string = "huzaifa"
//  console.log(CanNotAttend+ " ", "can not attend the dinner");
//  let newGuest: string = "kiran"
//  guestArr[guestArr.indexOf(CanNotAttend)] = newGuest
//  console.log(guestArr)
//  guestArr.map((items) =>
//  console.log(`Dear ${items}, you are invited to the dinner`));
//task16
// let guestArr: string[] = ["huzaifa", "maheen", "alishba", "hooriya", "waniya"];
// let CanNotAttend: string = "huzaifa"
// let newGuest: string = "kiran"
//   guestArr[guestArr.indexOf(CanNotAttend)] = newGuest
//  console.log(guestArr)
//  guestArr.map((items) =>
//  console.log(`Dear ${items}, I found the bigger dinner tabble I am invited more peoples`));
//  let guestBeg: string = "misbah"
//  guestArr.unshift(guestBeg)
//  console.log(guestArr);
//  let middleGuest: string = "ashir"
//  let middleIndex = guestArr.length/3
//  guestArr.splice(middleIndex,3,middleGuest)
//  console.log(guestArr)
//  guestArr.push("zeeshan")
//  console.log(guestArr)
//  guestArr.map((items) =>
//  console.log(`Dear ${items}, you are invited in the more people list on dinner`));
//task17
// let guest: string[] = ["huzaifa", "maheen", "alishba", "hooriya", "waniya"];
// console.log("Due to limited space, only two people can be invited for dinner")
// while(guest.length > 2){
//     const removedGuest = guest.pop();
//     console.log(`Sorry ${removedGuest}, you are not longer invited to dinner`);
// }
// let guests: string[] = ["huzaifa", "maheen"]
// console.log(`Dear ${guests}, you are still invited to dinner`)
// guest.pop();
// console.log("Final guest list:",guests)
//task18
// let place_visit: string[] = ["Turkey", "Pakistan", "London", "Saudia Arab", "China"]
// console.log("Original order", place_visit);
// console.log("Alphabetic order", [...place_visit].sort());
// console.log("Orignal order after sorting", place_visit)
// console.log("Reverse alphbetic order", [...place_visit].sort().reverse());
// console.log("original order after reverse sorting", place_visit);
// place_visit.reverse();
// console.log("Reversed order", place_visit);
// place_visit.reverse();
// console.log("Back to originsl order", place_visit);
// place_visit.sort();
// console.log("Sorted in alphabetic order", place_visit);
// place_visit.sort((a,b) => b.localeCompare(a));
// console.log("Sorted in reserve alphabetical order", place_visit);
//task19
// let new_guest: string[] = ["anoosha", "rimsha", "kiran"];
// let count_invitation: number = new_guest.length
// console.log(`${count_invitation}, people will come to the dinner`);
//task20
// let cities: string[] = ["Maree","Sawat","Kashmir","Istambol"];
// console.log("List of Cities Name")
// console.log(cities);
//task21
// let person: {fname: string, lname: string, age:number}
//  ={fname: "Anosha", lname:"naz", age:20}
// console.log(person)
//task22
// let season: string[] = ["summer", "winter", "autumn", "spring"];
//console.log(season{2});//create an error
// console.log(season[2])
//task23
// let invitation: string[] = ["huzaifa", "maheen"];
// let count_invitation: number = invitation.length;
// console.log(`${count_invitation} people will come to the dinner`);
//task23
// let car: string = "subaru"
// console.log("is car == 'subaru? predict true")
// console.log(car == "subaru")
// console.log("is car != 'honda city'? predict true")
// console.log(car != "honda city")
// console.log("is car == 'subaru? predict true")
// console.log(car == "Subaru")
// console.log("is car.lenght == 6? predict true")
// console.log(car.length == 6)
// console.log("is car.length != 10? predict true")
// console.log(car.length != 10)
// console.log("is 10 > 45? predict false")
// console.log(10 > 45)
// console.log("is 3 <= 2? predict false")
// console.log(3 <= 2)
// console.log("is 72 >= 83? predict false")
// console.log(72 >= 83)
// console.log("is car == 'subaru' && car.length == 6? predict true")
// console.log(car == 'subaru' && car.length == 6)
//task25
// let alien_color: string = "green"
// if(alien_color == "green") 
// console.log("you earn 5 points")
// else(alien_color != "green")
// console.log("no output")
//task24
// let sevenStage: number = 7;
// if(sevenStage === 1){
//     console.log("you are a bady")
// }else if(sevenStage === 2){
//     console.log("you are a child")
// }else if(sevenStage === 3){
//     console.log("you are young")
// }else if(sevenStage === 4){
//     console.log("you are a soldier")
// }else if(sevenStage === 5){
//     console.log("you are meture and have a wisdomatic decision")
// }else if(sevenStage === 6){
//     console.log("you are an old")
// }else{
//     console.log("you are very older and ithis stage is second childhood")
// }
//  let user_name = "Ashir";
//  let age= 18;
// let password = 1234;
// if(user_name.length === 5){
//     console.log("you are correct user")
// }else if(age === 18 && password === 1234){
//     console.log("you are eligible")
// }else if(user_name === "Ashir" || password === 1235) {
//     console.log("Enter a wrong password")
// }else{
//     console.log("wrong information")
// }
// let x: number = 95;
//  if(x > 80){
//      console.log("A+ grade marvellous")
//  }else if (x < 70) {
//      console.log("A grade outstanding performance")
//  } else if(x < 60) {
//      console.log("B grade good effort")
//  } else if(x < 50) {
//      console.log("C grade concentratde in your studies")
//  } else {
//      console.log("you are failed")
//  };
//  let country: string[] = ["Pakistan", "Afganistan", "Iran", "Turkey"]
//  if(country.includes("Pakistan")){
//     console.log("Pakistan is in country list")
//  }
//  if(country.includes("America")){
//     console.log("America is not in country list")
//  }
//task26
// let alien_color: string = "green"
// let alien_colors: string = "red"
// if(alien_color == "green"){
//     console.log("player just earned 5 points")
// }else{
//     console.log("player just earn 10 points")
// };
//task27
// let alien_color: string = "yellow"
// if(alien_color == "green"){
//         console.log("player just earned 5 points")
//  }else if(alien_color == "yellow"){
//      console.log("player just earn 10 points")
//  }else{
//      console.log("player just esrn 15 points")
//  }
//task 28
// let age: number = 100;
// if(age < 2){
//     console.log("you are a baby")
//  }else if(age < 4){
//     console.log("you are a toddler")
//  }else if(age < 13){
//     console.log("you are a kid")
// }else if(age < 20){
//     console.log("you are tenager")
//  }else if(age < 65){
//      console.log("you are a adult")
//  }else{
//  console.log("you are older")
//  }
//task29
// let favourite_fruit: string[] = ["apple", "mango", "grapes", "berry"];
// if(favourite_fruit.includes("apple")) {
//     console.log("apple")
// }
// if(favourite_fruit.includes("peach")){
//     console.log("you really like banana")
// }
// if(favourite_fruit.includes("orange")){
//     console.log("orange")
// }
// if(favourite_fruit.includes("berry")){
//     console.log("you really like banana")
// }
// if(favourite_fruit.includes("grapes")){
//     console.log("grapes")
// }
// task30
// let users: string[] = ["admin", "huzaifa", "ashir", "kiran"];
// for(let user of users) {
//   if(user === "admin") {
//     console.log("hello admin would you like to see a status report")
//   }else{
//     console.log(`hello ${user}, thank you for logging in again`)
//   }
// }
//task31
// let users: string[] = ["admin", "huzaifa", "ashir", "kiran"];
// if(users.length === 0){
//     console.log("we need to find some users")
// }
// for(let user of users){
//   if(user === "admin"){
//     console.log("hello admin would you like to see a status report")
//   }else{
//     console.log(`hello ${user}, thank you for logging in again`)
//   }
// }
// users =[]
// if(users.length === 0){
//   console.log("we need to find some users")
// }
//task32
// let current_users: string[] = ["admin", "huzaifa", "ashir", "kiran"];
// let new_users: string[] = ["admin", "huzaifa", "alishba", "anoosha"];
// let current_users_lower: string[] = current_users.map(user => user.toLowerCase())
// for(let new_user of new_users) 
//   if(current_users_lower.includes(new_user.toLowerCase())){
//   console.log(`sorry ${new_users} that name is taken`)
// } 
// else{
//     console.log(`yes ${new_users} is still in available list`)
// }
//task33
// let numbers: number[] = [1,2,3,4,5,6,7,8,9]
// for(let number of numbers){
//   if(number === 1){
//     console.log(`${number} st`)
//   }else if(number === 2){
//     console.log(`${number} nd`)
//   }else if(number === 3){
//     console.log(`${number} rd`)
//   }else{
//     console.log(`${number} th`)
//   }
// }
//task34
// let favourite_pizza: string[] = ["pepperoni", "chicken", "veg"]
// for(let pizza of favourite_pizza){
//   console.log(pizza)
// }
// for(let pizza of favourite_pizza){
//   console.log(`I really like ${pizza} pizza`)
// }
//  console.log("I really love chicken pizza")
//task35
// let animals: string[] = ["cat", "lion", "peacock", "horse"]
// for(let animal of animals){
//   console.log(animal)
// }
// for(let animal of animals){
//   console.log(`A ${animal} have two eyes`)
// }
//   console.log("All of these are great animals but I love cat more")
//task36
// function makeshirt(size:string, text:string):void{
//   console.log(`You order a ${size} shirt that says ${text}`)
// }
//   makeshirt(`large`,'I love Pakistan')
//   makeshirt(`medium`,'I need a big shirt')
//task37
// function makeshirt(size:string ='large', text: string = 'I love Pakistan'):void{
//   console.log(`You have order a ${size}, shirt that says ${text}`)
// }
// makeshirt();
// makeshirt(`medium`)
// makeshirt(`small`,'I need a big shirt to wear')
//task38
// function describe_city(city:string, country:string = "Pakistan"):void{
//   console.log(`${city} is in ${country}`)
// }
// describe_city(`Karachi`)
// describe_city(`France`,'Europe')
// describe_city(`Istambol`, 'Turkey')
//task39
// function citY_country(city:string, country:string):string{
//   return `${city},${country}`
// }
// let c1 = citY_country(`Lahore`,'Palistan')
// let c2 = citY_country(`Tokyo`,'Japan')
// let c3 = citY_country(`Paris`,'France')
// console.log(c1)
// console.log(c2)
// console.log(c3)
//task40
// function makeAlbum(artist: string, title:string): {artist: string, title:string} {
//     const dictionaries = {
//         artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//         title: title.charAt(0).toUpperCase() + title.slice(1)
//     }
//     return dictionaries;
// }
// let album = makeAlbum("kiran","light")
// console.log(album)
// album = makeAlbum("ashir","red wave")
// console.log(album)
// album = makeAlbum("hamza", "seenbrez")
// console.log(album)
//task41
// function show_megicions(magicions: string[]): void{
//   for(const magicion of magicions) {
//     console.log(magicion.charAt(0).toUpperCase() + magicion.slice(1));
//   }
// }
// const magicion: string[] = ["anosha", "hooriya", "kiran"]
// show_megicions(magicion)
//task 42
// function show_megicions(magicions: string[]): void{
//     for(const magicion of magicions) {
//       console.log(magicion.charAt(0).toLowerCase() + magicion.slice(1));
//     }
//   }
//   const magicion: string[] = ["anosha", "hooriya", "kiran"]
//   show_megicions(magicion)
// function make_great(magicions: string[]): void{
//   for(let i=0; i < magicions.length; i++) {
//     magicions[i] = magicions[i]  +  'the great'
//   }
// }
// const magicions2: string[] = ["Anoosha", "Hooriya", "kiran"]
// make_great(magicions2)
// show_megicions(magicions2)
//task43
// function make_great2(magicions: string[]): string[] {
//   const greatMagicions: string[] = [];
//       for(let i=0; i < magicions.length; i++) {
//        greatMagicions.push(magicions[i]+ 'the great');
//        }
//        return greatMagicions
// }
// const magicions3: string[] = ["ali", "ashir", "huzaifa"]
// const greatMagicions2: string[] = make_great2(magicions3)
// show_megicions(magicions3)
// show_megicions(greatMagicions2)
//task44
// function sandwich(...items: string[]): void {
//     console.log("sandwich order")
//     for(let i = 0; i < items.length; i++) {
//         console.log(`- ${items[i]}`)
//     }
// }
//     console.log("enjoy your sandwich kiran");
//     sandwich("capsicum", "chicken", "potato");
//     sandwich("beef", "cheese");
//     sandwich("chicken garlic", "mayo sauce");
//task45
//  type car = {
//      manufacture: string
//      model: string
//      [key: string]:any;
//  }
//  function createCar(manufacture: string, model: string, optional: Record < string, any>):car{
//      return{
//          manufacture,
//          model,
//          ...optional
//      }
//  }
//  const myCar:car = createCar("toyota","carolla",{
//      color: "black", year: 2024
//  })
//  console.log(myCar)
