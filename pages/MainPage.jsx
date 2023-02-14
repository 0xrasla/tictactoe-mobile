import { useState } from "react";
import { Box, Button, Text } from "native-base";

const MainPage = () => {
  const [activePerson, setActivePerson] = useState({
    id: 1,
    name: "Rasla",
    age: 20,
  });

  const data = [
    {
      id: 1,
      name: "Rasla",
      age: 20,
    },
    {
      id: 2,
      name: "Sorna",
      age: 21,
    },
    {
      id: 3,
      name: "Sorna Papa",
      age: 22,
    },
  ];

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * data.length);
    setActivePerson(data[randomNumber]);
  }

  return (
    <>
      <Text fontSize={"xl"} fontFamily={"heading"} color={"primary.100"} pb={4}>
        {activePerson.name}
      </Text>

      <Button
        title="Generate"
        onPressIn={generateRandomNumber}
        fontFamily={"heading"}
      >
        Generate
      </Button>
    </>
  );
};

export default MainPage;
