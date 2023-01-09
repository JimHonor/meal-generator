import { Col, Row, Space, Typography } from "antd";

const { Text, Paragraph } = Typography;

export default function Meal({ meal }) {
  return (
    <Space direction="vertical" size="large">
      <Row gutter={32}>
        <Col flex={"16rem"}>
          <img
            src={meal.mealThumb}
            alt={meal.name}
            style={{ width: "16rem", height: "16rem" }}
          />
        </Col>
        <Col flex={"auto"}>
          <Typography.Title>{meal.name}</Typography.Title>
          <Row gutter={[0, 8]}>
            <Col span={4}>
              <Text strong>Category</Text>
            </Col>
            <Col span={20}>
              <Text>{meal.category}</Text>
            </Col>
            <Col span={4}>
              <Text strong>Area</Text>
            </Col>
            <Col span={20}>
              <Text>{meal.area}</Text>
            </Col>
            {meal.tags ? (
              <>
                <Col span={4}>
                  <Text strong>Tags</Text>
                </Col>
                <Col span={20}>
                  <Text>{meal.tags}</Text>
                </Col>
              </>
            ) : (
              ""
            )}
          </Row>
        </Col>
      </Row>
      <Space direction="vertical">
        <h3></h3>
        <Typography.Title level={3}>Ingredients</Typography.Title>
        <Row gutter={[0, 16]}>
          {meal.ingredients.map((ingredient, index) => (
            <Col key={index} span={12}>
              <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <Text strong>{ingredient.name}</Text>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <Text>{ingredient.measure}</Text>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Space>
      <Space direction="vertical">
        <Typography.Title level={3}>Instructions</Typography.Title>
        <Paragraph>{meal.instructions}</Paragraph>
      </Space>
    </Space>
  );
}
