import { Grid, Heading, Text, Box } from "@chakra-ui/react";
import { Fragment } from "react";
import { names } from "../utils/contants";

const leaderboardData = new Array(100).fill(0).map((_, idx) => ({
  id: idx.toString() + Math.round(Math.random() * 10000),
  name: names[idx],
  points: Math.round(Math.random() * 100000),
}));

export default function Home() {
  return (
    <>
      <Grid margin="auto" templateColumns="50px auto 100px">
        <Heading size="md">#</Heading>
        <Heading size="md">Name</Heading>
        <Heading size="md" textAlign="right">
          Points
        </Heading>
        {leaderboardData
          .sort((a, b) => b.points - a.points)
          .map((person, index) => (
            <Fragment key={person.id}>
              <Text py="1" my="1">
                {index + 1}
              </Text>
              <Text
                py="1"
                my="1"
                borderBottom="2px solid"
                borderColor="gray.200"
              >
                {person.name}
              </Text>
              <Text
                py="1"
                my="1"
                textAlign="right"
                borderBottom="2px solid"
                borderColor="gray.200"
              >
                {person.points}
              </Text>
            </Fragment>
          ))}
      </Grid>
    </>
  );
}
