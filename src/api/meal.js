import { mealConverter } from "./convert";

const API_KEY = "1";

export const getRandomMeal = async () => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/${API_KEY}/random.php`
  );
  const data = await res.json();
  return mealConverter(data.meals[0]);
};
