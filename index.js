// Ques # 52
var smartPhone = {
    make: 'Samsung',
    model: 'Galaxy s21',
    specs: {
        storage: '128GB',
        screenSize: '6.2 inches',
        batterylife: '18 hours'
    }
};
console.log(smartPhone);
// Ques # 53
var skills = {
    languages: ['JavaScript', 'TypeScript', 'Python'],
    frameWorks: ['React', 'Angular', 'Vue'],
    tools: ['Git', 'Webpack', 'Docker']
};
var languages = skills.languages, frameWorks = skills.frameWorks, tools = skills.tools;
console.log(" Language: ".concat(languages[0], "\n Framework: ").concat(frameWorks[0], "\n Tool : ").concat(tools[0]));
// Ques # 54
function createObjectKey(key, value) {
    var dynamicObject = {};
    dynamicObject = value;
    return dynamicObject;
}
var userPreference = createObjectKey('theme', 'Dark');
console.log(userPreference);
