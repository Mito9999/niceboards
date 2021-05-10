import { Button, Flex, Heading, Grid, Text, Box } from "@chakra-ui/react";
import { Fragment } from "react";

const leaderboardData = [
  {
    id: 34897,
    name: "John Doe",
    points: 9999,
  },
  {
    id: 4563452,
    name: "James Robert",
    points: 23442,
  },
  {
    id: 3567212345,
    name: "Michael John",
    points: 3453,
  },
  {
    id: 45,
    name: "Joseph Richard",
    points: 2345,
  },
  {
    id: 4321,
    name: "Charles Benjamin",
    points: 1,
  },
  {
    id: 123456,
    name: "Abe Lincoln",
    points: 234565,
  },
  {
    id: 111,
    name: "George Washington",
    points: 123411,
  },
  {
    id: 222,
    name: "Lebron James",
    points: 657365756,
  },
  {
    id: 333,
    name: "John Smith",
    points: 2345,
  },
  {
    id: 444,
    name: "Alexander Hamilton",
    points: 44,
  },
];

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
      <Flex margin="auto"></Flex>
    </>
  );
}
