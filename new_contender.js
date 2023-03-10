// Challenge 1: Create an Age Calculator
function createAnAgeCalculator() {
  // Birth year
  let birthYear = 1988;
  // Future Year
  let futureYear = 2026;
  // Age now
  let yourAge = futureYear - birthYear;
  // output Age now
  console.log(yourAge); // 38
}
// Call function createAnAgeCalculator
createAnAgeCalculator();

// Challenge 2: Create an information card
function CreateAnInformationCard() {
  // person variable type Object have name, location and hobby
  let person = {
    name: "John",
    location: "South Africa",
    hobby: "enjoy drinking homemade wine",
  };
  // output person card
  console.log(
    `Hi, my name is ${person.name}. I live in ${person.location} and ${person.hobby}.`
  );
}
// Call function CreateAnInformationCard
CreateAnInformationCard();
