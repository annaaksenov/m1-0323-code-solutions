/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  return person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
}
getDescriptionOfPerson();
console.log(getDescriptionOfPerson);
