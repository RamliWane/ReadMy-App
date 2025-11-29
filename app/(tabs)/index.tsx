import { Image } from "expo-image";
import { View, Text, TextInput, ScrollView , TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRight, BookmarkPlus } from "lucide-react-native";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="pt-10 gap-3">
          <View className="px-5 flex-row justify-between">
            <Image
              source={require("../../assets/profile.jpeg")}
              className="w-20 h-20 rounded-full"
            />
            <BookmarkPlus size={24} color="white" />
          </View>

          <View className="px-5">
            <Text className="text-white text-xl font-bold">
              Hello! Ramli Silawane
            </Text>
          </View>

          <View className="px-5">
            <View className="flex-row items-center bg-white rounded-xl px-4 py-1 shadow-lg">
              <TextInput
                className="bg-white/10 rounded-xl px-4 py-3 text-black"
                placeholder="Search Here"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          <View className="bg-gray-300 w-[92%] h-px mx-5" />

        <View className="pb-5">

          <View className="px-5 flex-row items-center justify-between">
            <Text className="text-white text-xl font-semibold mb-3">
              Recomended For You
            </Text>
            <ArrowRight size={24} color="white" />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
          >
            <TouchableOpacity onPress={() => router.push("./detail/[id]")}>
              <Image
                source={require("../../assets/profile.jpeg")}
                className="w-32 h-48 rounded-xl"
                contentFit="cover"
              />
            </TouchableOpacity>
            <Image
              source={require("../../assets/profile.jpeg")}
              className="w-32 h-48 rounded-xl"
              contentFit="cover"
            />
            <Image
              source={require("../../assets/profile.jpeg")}
              className="w-32 h-48 rounded-xl"
              contentFit="cover"
            />
            <Image
              source={require("../../assets/profile.jpeg")}
              className="w-32 h-48 rounded-xl"
              contentFit="cover"
            />
            <Image
              source={require("../../assets/profile.jpeg")}
              className="w-32 h-48 rounded-xl"
              contentFit="cover"
            />
            <Image
              source={require("../../assets/profile.jpeg")}
              className="w-32 h-48 rounded-xl"
              contentFit="cover"
            />
          </ScrollView>

          <View className="px-5 pt-5 flex-row items-center justify-between">
            <Text className="text-white text-xl font-semibold mb-3">
              Most Popular
            </Text>
            <ArrowRight size={24} color="white" />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
          >
            <Image
              source={require("../../assets/profile.jpeg")}
              className="w-32 h-48 rounded-xl"
              contentFit="cover"
            />
            <Image
              source={require("../../assets/profile.jpeg")}
              className="w-32 h-48 rounded-xl"
              contentFit="cover"
            />
            <Image
              source={require("../../assets/profile.jpeg")}
              className="w-32 h-48 rounded-xl"
              contentFit="cover"
            />
            <Image
              source={require("../../assets/profile.jpeg")}
              className="w-32 h-48 rounded-xl"
              contentFit="cover"
            />
            <Image
              source={require("../../assets/profile.jpeg")}
              className="w-32 h-48 rounded-xl"
              contentFit="cover"
            />
            <Image
              source={require("../../assets/profile.jpeg")}
              className="w-32 h-48 rounded-xl"
              contentFit="cover"
            />
          </ScrollView>
        </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}