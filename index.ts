// Ques # 52
let smartPhone = {
    make : 'Samsung',
    model : 'Galaxy s21',
    specs : {
        storage : '128GB',
        screenSize : '6.2 inches',
        batterylife : '18 hours'
    }
};
console.log(smartPhone);

// Ques # 53
let skills = {
    languages : ['JavaScript', 'TypeScript', 'Python'],
    frameWorks : ['React', 'Angular', 'Vue'],
    tools : ['Git', 'Webpack', 'Docker']
};
let {languages,frameWorks,tools} = skills
console.log(` Language: ${languages[0]}\n Framework: ${frameWorks[0]}\n Tool : ${tools[0]}`);

//Ques # 54
function 
createObjectKey(Key : string , value : string) {
    let dynamicObject = {};
    dynamicObject = value;
    return dynamicObject;
} 
let userPreference = createObjectKey('theme', 'Dark')
console.log(userPreference)










