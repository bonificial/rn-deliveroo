import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react'
import {AdjustmentsIcon, ChevronDownIcon, SearchIcon} from "react-native-heroicons/solid";
import {UserIcon} from "react-native-heroicons/outline";

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false})
    }, [])

    return (<SafeAreaView className={'bg-white pt-5'}>

        <Text className={'text-red-500'}>
            {/* Header */}
            <View className={'flex-row pb-3 items-center mx-4 space-x-2'}>
                <Image source={{uri: 'https://w7.pngwing.com/pngs/876/134/png-transparent-black-box-truck-illustration-van-delivery-truck-car-logistics-delivery-angle-truck-logo.png'}} className={'h-7 w-7 bg-gray-300 p4 rounded-full'}/>
                <View className={'flex-1 border-4'}>
                    <Text className={'font-bold text-gray-400 text-xs'}>Deliver Now!</Text>
                    <Text className={'font-bold text-xl'}>Current Location
                        <ChevronDownIcon size={20} color={'#00CCBB'}/>
                    </Text>
                </View>
                <UserIcon size={35} color={'#00CCBB'}/>
            </View>
            {/*    Search */}
            {/*  <View>
                <View className={'flex-row space-x-2 flex-1 bg-gray-200 p-3'}>
                    <SearchIcon color={'gray'} size={20}/>
                    <TextInput placeholder={'Restaurants and Cuisines'} keyboardType={'default'}/>
                </View>
                <AdjustmentsIcon color={'#00CCBB'}/>
            </View>*/}

        </Text>

    </SafeAreaView>)
}
