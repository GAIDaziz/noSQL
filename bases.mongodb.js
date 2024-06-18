//indiquer la base de donn"e à utuliser dans le fichier 
use('damFirst')
//afficher les base de données existantes
db.getMongo().getDBs();

db.person.insertOne({name:'duflanc',prename:'roger'});
//ajouter plusieurs entrées dans la colection perssonee
db.person.insertMany([
    {name:'test',firstName:'truc'},
    {name:'bidule',firstName:'bla'}
]);

db.person.insertONE({name:'duflanc',prename:'roger',skills:['php','js','html','css']});


db.person.find();

db.person.find({firstName:'roger'})
db.person.deleteMany({firstName:'Roger'})

db.person.find

const skills = ['PHP', 'JS', 'MongoDb', 'CSS', 'HTML', 'Cuisine'];
const firstNames = ['Odalis', 'Baylie', 'Junior', 'Johnson', 'Aysha', 'Miranda', 'Gilberto', 'Christin', 'Iyanna', 'Jaylyn', 'Amari', 'Duane', 'Willis', 'Coy', 'Bernadette', 'Aniya', 'Javion', 'Raphael', 'Gerald', 'Caelan', 'Josh', 'Nehemiah', 'Keyanna', 'Sierra', 'Heriberto', 'Aisha', 'Harris', 'Dustyn', 'Anders', 'Chaya'];
const names = ['Strom', 'Harley', 'Tharp', 'Lindquist', 'Armando', 'Nautica', 'Slack', 'Kaya', 'Potts', 'Burroughs', 'Theresa', 'Shen', 'Sommer', 'Pool', 'Fischer', 'Coy', 'Sturm', 'Alora', 'Mosher', 'Meg', 'Ly', 'Rebecca', 'Shanna', 'Hendrix', 'Lancaster', 'Destiney', 'Wooten', 'Isiah', 'Howe', 'Smyth'];

// Essayer de récupérer et afficher en console log un élément random de la liste skills
const randomIndex = Math.floor(Math.random() * skills.length);
const randomSkill = skills[randomIndex];
console.log(randomSkill);