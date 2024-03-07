import React from "react";
import { VStack, HStack, Text, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaCloud, FaRegSnowflake, FaArrowLeft, FaSearch } from "react-icons/fa";

const Index = () => {
  const cardBg = useColorModeValue("gray.100", "gray.700");
  const weatherData = [
    { day: "Now", icon: FaSun, temperature: "76°" },
    { day: "2 PM", icon: FaSun, temperature: "78°" },
    { day: "3 PM", icon: FaSun, temperature: "77°" },
    { day: "4 PM", icon: FaCloud, temperature: "75°" },
    { day: "5 PM", icon: FaRegSnowflake, temperature: "72°" },
  ];

  return (
    <VStack spacing={8} p={5}>
      <HStack justifyContent="space-between" w="full">
        <IconButton icon={<FaArrowLeft />} variant="ghost" />
        <Text fontSize="2xl" fontWeight="bold">
          Cupertino
        </Text>
        <IconButton icon={<FaSearch />} variant="ghost" />
      </HStack>
      <VStack bg={cardBg} borderRadius="xl" p={5} w="full" spacing={5} shadow="md">
        <Text fontSize="5xl" fontWeight="bold">
          76°
        </Text>
        <Text fontSize="xl" color="gray.500">
          Sunny
        </Text>
        <HStack justifyContent="space-between" w="full">
          {weatherData.map((weather, index) => (
            <VStack key={index}>
              <Text fontSize="md">{weather.day}</Text>
              <IconButton icon={React.createElement(weather.icon)} variant="ghost" isRound={true} aria-label={`${weather.day} weather`} />
              <Text fontSize="md">{weather.temperature}</Text>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Index;
