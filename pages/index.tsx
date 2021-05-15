import { Button, Flex, Heading, Grid, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import names from "../constants/names";

const leaderboardData = new Array(100).fill(0).map((_, idx) => ({
  id: Math.round(Math.random() * 10000),
  name: names[idx],
  points: Math.round(Math.random() * 100000),
}));

export default function Home() {
  return (
    <>
      <Flex align="center" justify="space-between" my="20px">
        <Heading>Leaderboard</Heading>
        <Button colorScheme="red">Sign In</Button>
      </Flex>
      <Grid margin="auto" templateColumns="50px auto 100px" mb="200px">
        <Heading size="md">#</Heading>
        <Heading size="md">Name</Heading>
        <Heading size="md" textAlign="right">
          Points
        </Heading>
        {leaderboardData
          .sort((a, b) => b.points - a.points)
          .map((person, index) => (
            <Fragment key={person.id}>
              <Text>{index + 1}</Text>
              <Text>{person.name}</Text>
              <Text textAlign="right">{person.points}</Text>
            </Fragment>
          ))}
      </Grid>
    </>
  );
}
