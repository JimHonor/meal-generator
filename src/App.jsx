import { useState } from "react";

import { Button, Space, Typography } from "antd";
import { getRandomMeal } from "./api/meal";
import Meal from "./Meal";

const App = () => {
  const [loading, setLoading] = useState(true);

  const [meal, setMeal] = useState([]);

  const onGetMeal = () => {
    getRandomMeal().then((value) => {
      setMeal(value);
      setLoading(false);
    });
  };

  return (
    <div className="App">
      <Space direction="vertical" size="large">
        <Button type="primary" onClick={onGetMeal}>
          Get meal
        </Button>
        {!loading ? <Meal meal={meal} /> : ""}
      </Space>
    </div>
  );
};

export default App;
