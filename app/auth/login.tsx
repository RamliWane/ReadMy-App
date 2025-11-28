import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";

export default function LoginScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white justify-center px-6">

            <View className="items-center mb-10">
                <View className="w-24 h-24 bg-[#0F172A] rounded-full items-center justify-center border border-white/20">
                    <Text className="text-white text-4xl font-bold">R</Text>
                </View>
                <Text className="text-[#0F172A] text-3xl font-bold mt-4 tracking-wide">
                    Welcome Back
                </Text>
                <Text className="text-[#0F172A] text-base mt-1">
                    Sign in to continue
                </Text>
            </View>

            <View className="bg-[#0F172A] border border-white/10 p-6 m-2 rounded-2xl shadow-xl backdrop-blur-md">

                <View className="mb-6">
                    <Text className="text-white text-base mb-2">Email</Text>
                    <TextInput
                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white"
                        placeholder="Enter your email"
                        placeholderTextColor="#9CA3AF"
                    />
                </View>

                <View className="mb-6">
                    <Text className="text-white text-base mb-2">Password</Text>
                    <TextInput
                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white"
                        placeholder="Enter your password"
                        placeholderTextColor="#9CA3AF"
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity className="bg-white py-2 m-5 rounded-xl mt-2"   onPress={() => router.push("/(tabs)")}>
                    <Text className="text-center text-black font-semibold text-lg">
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                className="mt-4"
                onPress={() => router.push("./register")}
            >
                <Text className="text-center font-bold text-[#0F172A]">
                    Belum punya akun?{" "}
                    <Text className="text-[#0F172A] underline font-semibold">Register</Text>
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
