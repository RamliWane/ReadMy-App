import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-start pt-2 gap-2 bg-blue-500">
        <Image source={{ }} className="w-24 h-24 mb-2"/>
        <Text className="text-white text-xl font-bold">
          NativeWind Jalan Babi!
        </Text>
      </View>
    </SafeAreaView>
  );
}
