import CustomButton from "@/components/customButton";
import Drivercard from "@/components/driverCard";
import RideLayout from "@/components/rideLayout";
import { userDriverStore } from "@/store";
import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = userDriverStore();
  return (
    <RideLayout title="Choose a Driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <Drivercard
            selected={selectedDriver!}
            setSelected={() => setSelectedDriver(Number(item.id))}
            item={item}
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <CustomButton
              title="Select Ride"
              onPress={() => router.push("/(root)/book-ride")}
            />
          </View>
        )}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
