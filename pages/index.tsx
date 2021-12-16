import prisma from "../lib/prisma";
import GradientLayout from "../components/gradientLayout";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const Home = ({ artists }) => {
  return (
    <GradientLayout
      color="green"
      title="13 Characters"
      subtitle="profile"
      description="10 public playlists"
      image="./profile.png"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top Artists this month
          </Text>
          <Text fontSize="medium">Only visible to you</Text>
        </Box>

        <Flex>
          {artists.map((artist) => (
            <Box paddingX="15px" width="12%">
              <Box bg="gray.900" width="100%" borderRadius="4px" padding="15px">
                <Image src="https://placedog.net/300/300" borderRadius="100%" />
                <Box marginTop="15px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="sm">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};

export default Home;
