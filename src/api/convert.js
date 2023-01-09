// import data from "./mock.json";
// const meal = data.meals[0];

export const mealConverter = (meal) => {
  const ingredients = [];
  const measures = [];

  const keys = Object.keys(meal);

  const result = keys.reduce((result, key) => {
    let newKey;
    const value = meal[key];

    if (key.includes("Ingredient") && value) {
      ingredients.push(value);
    } else if (key.includes("Measure") && value) {
      measures.push(value);
    } else {
      if (key.slice(0, 3) === "str") {
        if (key === "strMeal") {
          newKey = "name";
        } else {
          newKey = key.slice(3).replace(/^./, key.charAt(3).toLowerCase());
        }
      } else if (key.includes("id")) {
        newKey = "id";
      } else {
        newKey = key;
      }
      result[newKey] = value;
    }

    return result;
  }, {});

  result.ingredients = ingredients.map((ingredient, index) => ({
    name: ingredient,
    measure: measures[index],
  }));

  return result;
};
