import RideLayout from "@/components/rideLayout";
import { useLocationStore } from "@/store";
import { Text, View } from "react-native";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setUserLocation,
    setDestinationLocation,
  } = useLocationStore();

  return (
    <RideLayout >
      <Text className="text-2xl">Find Ride</Text>
    </RideLayout>
  );
};

export default FindRide;
