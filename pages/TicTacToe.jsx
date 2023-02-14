import { Box, Text, Flex, Button, useToast, Modal } from "native-base";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { CustomAlert } from "../components/Alert";

export default function TicTacToe() {
  const toast = useToast();

  const [baseArr, setBaseArr] = useState([
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [showModal, setShowModal] = useState(false);
  const [winner, setWinner] = useState(null);

  const updateArr = (index) => {
    let newArr = baseArr;
    if (newArr[index] !== "_") return;
    newArr[index] = currentPlayer;
    setBaseArr(newArr);

    switchPlayer();

    const winner = checkWinner();

    if (winner && winner !== "_") {
      setWinner(winner);
      setShowModal(true);
    } else {
      setWinner("Tie Game");
    }

    if (baseArr.every((item) => item !== "_")) {
      setShowModal(true);
    }
  };

  const switchPlayer = () => {
    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  };

  const resetBoard = () => {
    setBaseArr(["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
    setCurrentPlayer("X");
  };

  const checkWinner = () => {
    // Check rows
    for (let i = 0; i < 9; i += 3) {
      if (baseArr[i] === baseArr[i + 1] && baseArr[i + 1] === baseArr[i + 2]) {
        return baseArr[i];
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (baseArr[i] === baseArr[i + 3] && baseArr[i + 3] === baseArr[i + 6]) {
        return baseArr[i];
      }
    }

    // Check diagonals
    if (baseArr[0] === baseArr[4] && baseArr[4] === baseArr[8]) {
      return baseArr[0];
    }

    if (baseArr[2] === baseArr[4] && baseArr[4] === baseArr[6]) {
      return baseArr[2];
    }

    return null;
  };

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text fontSize={"xl"} fontFamily={"heading"} color={"primary.100"}>
        Tic Tac Toe
      </Text>

      <Flex
        flexDirection="row"
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        width={270}
        backgroundColor={"red.700"}
        rounded={"lg"}
        shadow={"9"}
        mt={5}
      >
        {baseArr.map((item, index) => (
          <Box
            key={index}
            style={styles.box}
            fontFamily={"body"}
            backgroundColor={"primary.700"}
          >
            <Button
              backgroundColor={"primary.700"}
              onPress={() => {
                return updateArr(index);
              }}
            >
              <Text fontSize={"2xl"} color={"light.200"}>
                {item != "_" ? item : ""}
              </Text>
            </Button>
          </Box>
        ))}
      </Flex>

      <Text fontSize={"2xl"} color={"light.200"} fontFamily={"body"} mt={4}>
        Current Player: {currentPlayer}
      </Text>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        backgroundColor={"light.400"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          backgroundColor={"light.500"}
          p={4}
          rounded={"lg"}
        >
          <Text
            fontSize={"2xl"}
            color={"light.200"}
            fontFamily={"body"}
            mt={4}
            mb={2}
          >
            {winner == "X" || winner == "Y" ? winner + " is Winner" : winner}
          </Text>

          <Button
            onPress={() => {
              setShowModal(false);
              resetBoard();
            }}
          >
            <Text fontSize={"2xl"} color={"light.200"} fontFamily={"body"}>
              Want to play again?
            </Text>
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 70,
    height: 70,
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
