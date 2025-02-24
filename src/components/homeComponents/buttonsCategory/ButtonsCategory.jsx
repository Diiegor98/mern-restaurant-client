//React Bootstrap
import { Button, ButtonGroup } from "react-bootstrap";

const ButtonsCategory = ({ setCategory }) => {
  return (
    <ButtonGroup
      className="p-4 gap-3 flex-wrap m-auto"
      aria-label="Basic example"
    >
      <Button
        className="rounded-0"
        variant="outline-warning"
        onClick={() => setCategory("")}
      >
        Todas
      </Button>
      <Button variant="outline-warning" onClick={() => setCategory("Clasica")}>
        Clasicas
      </Button>
      <Button variant="outline-warning" onClick={() => setCategory("BBQ")}>
        BBQs
      </Button>
      <Button variant="outline-warning" onClick={() => setCategory("Gourmet")}>
        Gourmets
      </Button>
      <Button
        className="rounded-0"
        variant="outline-warning"
        onClick={() => setCategory("Vegetarianas")}
      >
        Vegetarianas
      </Button>
    </ButtonGroup>
  );
};

export default ButtonsCategory;
