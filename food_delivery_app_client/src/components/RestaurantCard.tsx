import { View, Text, TouchableWithoutFeedback, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';


interface RestaurantCardProps {
    name: string;
    address: string;
    image: ImageSourcePropType;
    stars: number;
    category: string;
    reviews: string;
}

export default function RestaurantCard({ name, address, image, stars, category, reviews }: RestaurantCardProps) {
    return (
        <TouchableWithoutFeedback>
            <View
                style={{
                    shadowColor: themeColors.bgColor(0.2),
                    shadowRadius: 7
                }}
                className='mr-6 bg-white rounded-3xl shadow-lg'>
                <Image className="h-36 w-64 rounded-t-3xl" source={image} />
                <View className='px-3 pb-4 space-y-2'>
                    <Text className='text-lg font-bold pt-2'>{name}</Text>
                    <View className='flex-row items-center space-x-1'>
                        <Image className="h-4 w-4" source={require("../assets/images/fullStar.png")} />
                        <Text className='text-xs'>
                            <Text className='text-green-700'>
                                {stars}{' '}
                            </Text>
                            <Text className='text-green-700'>
                                ({reviews} review) · <Text className='font-semibold'>{category}</Text>
                            </Text>
                        </Text>
                    </View>
                    <View className='flex-row item-center space-x-1'>
                        <Icon.MapPin color="gray" width={15} height={15} />
                        <Text className="text-gray-700 text-xs">Nearby· {address}</Text>
                    </View>
                </View>
            </View>

        </TouchableWithoutFeedback>
    )
}