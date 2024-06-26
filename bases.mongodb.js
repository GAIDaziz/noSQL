/* global use, db */

//Indiquer la base de donnée à utiliser dans le fichier
use('damFirst')

// Afficher les base de données existantes
db.getMongo().getDBs();
//Ajouter une entrée dans la collection person qui aura un name et un firstName
db.person.insertOne({name:'Duflanc', firstName:'Roger'});

//Ajouter plusieurs entrées dans la collection person
db.person.insertMany([
    {name:'test',firstName:'truc'}, 
    {name:'bidule', firstName:'bla'}
]);
//Contrairement au SQL, on peut mettre des valeurs complexes comme des arrays et des objets
db.person.insertOne({
    name:'Duflanc', 
    firstName:'Roger', 
    skills: ['PHP','JS','HTML','CSS'] 
});

//techniquement on est dans du JS, donc on peut écrire et exécuter de l'algo JS
//par exemple, ici on fait une boucle pour insert 10 personnes
// for (let index = 0; index < 10; index++) {
//     db.person.insertOne({name:'name'+index, firstName:'firstname'+index})
    
// }
//On utilise le find pour récupérer des entrées d'une collection
db.person.find();

db.person.find({firstName:'roger'})
db.person.deleteMany({firstName:'Roger'})

db.person.find

const skills = ['PHP', 'JS', 'MongoDb', 'CSS', 'HTML', 'Cuisine'];
const firstNames = ['Odalis', 'Baylie', 'Junior', 'Johnson', 'Aysha', 'Miranda', 'Gilberto', 'Christin', 'Iyanna', 'Jaylyn', 'Amari', 'Duane', 'Willis', 'Coy', 'Bernadette', 'Aniya', 'Javion', 'Raphael', 'Gerald', 'Caelan', 'Josh', 'Nehemiah', 'Keyanna', 'Sierra', 'Heriberto', 'Aisha', 'Harris', 'Dustyn', 'Anders', 'Chaya'];
const names = ['Strom', 'Harley', 'Tharp', 'Lindquist', 'Armando', 'Nautica', 'Slack', 'Kaya', 'Potts', 'Burroughs', 'Theresa', 'Shen', 'Sommer', 'Pool', 'Fischer', 'Coy', 'Sturm', 'Alora', 'Mosher', 'Meg', 'Ly', 'Rebecca', 'Shanna', 'Hendrix', 'Lancaster', 'Destiney', 'Wooten', 'Isiah', 'Howe', 'Smyth'];

// Essayer de récupérer et afficher en console log un élément random de la liste skills
const randomIndex = Math.floor(Math.random() * skills.length);
//const randomSkill = skills[randomIndex];
//console.log(randomSkill);





//ajouter aussi un age aléatoire entre 10 et 100 a chaque personne

function generateRandomFullNames(count) {
    const randomFullNames = [];
  
    for (let i = 0; i < count; i++) {
      const firstNameIndex = Math.floor(Math.random() * firstNames.length);
      const lastNameIndex = Math.floor(Math.random() * names.length);
  
      const fullName = `${firstNames[firstNameIndex]} ${names[lastNameIndex]}`;
      randomFullNames.push(fullName);
    }}

//une foi que ça marche en fait une boucle qui fait 1000 tours pour avoire quelque datas 

/**
 * requette a faire sure nos persons;
 * active un find récupéré toutes les persons qui sont pkus de 50 ans 
 * récupéré les perssone qui possède les skill php 
 * récupéré les perssone quio ont plus de 4 skills
 * récupéré les persone dons le prénom termine pare un a
 * récupérer un update pour incrémenter de l'age des personne qui ont comme name 'somer'
 */