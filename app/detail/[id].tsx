import { Image } from "expo-image";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRight, BookmarkPlus, Star } from "lucide-react-native";
import { router } from "expo-router";

export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-[#0F172A]">
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
            >
                <View className="pt-6 gap-6">
                    <View className="px-5 gap-4">
                        <View className="flex-row gap-4">
                            <Image
                                source={require("../../assets/profile.jpeg")}
                                className="w-32 h-50 rounded-xl"
                            />
                            <View className="flex-1 justify-between py-1">
                                <View>
                                    <Text className="text-white text-xl font-bold leading-6 mb-2">
                                        The Fight Club In A Jungle
                                    </Text>
                                    <Text className="text-gray-400 text-sm mb-1">
                                        Author: Ramli Silawane
                                    </Text>
                                    <Text className="text-gray-400 text-sm mb-3">
                                        Release: 2024
                                    </Text>
                                    <View className="flex-row gap-1">
                                        <Star size={18} color="white" fill="white" />
                                        <Star size={18} color="white" fill="white" />
                                        <Star size={18} color="white" fill="white" />
                                        <Star size={18} color="white" fill="white" />
                                        <Star size={18} color="white" fill="white" />
                                    </View>

                                    <TouchableOpacity className="bg-white py-3 mt-3 rounded-xl flex-row items-center justify-center gap-2">
                                        <BookmarkPlus size={20} color="#0F172A" />
                                        <Text className="text-[#0F172A] font-semibold text-base">
                                            Add to Library
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="bg-gray-300 w-[92%] h-px mx-5" />

                    <View className="flex-row justify-center gap-5">
                        <Text className="text-white text-[15px] font-bold ">
                            Keterangan
                        </Text>
                        <Text className="text-white text-[15px] font-bold">
                            Synopsis
                        </Text>
                    </View>

                    <View className="ml-5">
                        <Text className="text-white text-xl font-bold leading-6 mb-2">
                            Keterangan
                        </Text>
                        <Text className="text-white text-[16px] font-bold leading-6 mb-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi libero minus ullam nihil adipisci atque esse illum suscipit dolore, soluta, amet quo fugiat repellendus voluptates, velit voluptatibus laudantium odio itaque.
                        </Text>
                    </View>

                    {/* <View className="ml-5">
                        <Text className="text-white text-xl font-bold leading-6 mb-2">
                            Synopsis
                        </Text>
                        <Text className="text-white text-[16px] font-bold leading-6 mb-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi libero minus ullam nihil adipisci atque esse illum suscipit dolore, soluta, amet quo fugiat repellendus voluptates, velit voluptatibus laudantium odio itaque.
                        </Text>
                    </View> */}

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
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >
    );
}