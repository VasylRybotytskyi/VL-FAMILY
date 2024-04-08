import { Container, Button } from "@mui/material";

const buttons = [
  { name: "Всі", value: "" },
  { name: "Фрукти", value: "fruit" },
  { name: "Овочі", value: "vegetable" },
  { name: "Гриби", value: "mushrooms" },
  { name: "Мясо", value: "meat" },
  { name: "Риба", value: "fish" },
];

const FilterBar = ({ activeCategory, setActiveCategory }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: 3, display: "flex", flexWrap: "wrap", gap: 1 }}
    >
      {buttons.map(({ name, value }, index) => (
        <Button
          size="small"
          key={index}
          variant={value === activeCategory ? "contained" : "outlined"}
          onClick={() => setActiveCategory(value)}
        >
          {name}
        </Button>
      ))}
    </Container>
  );
};

export default FilterBar;
