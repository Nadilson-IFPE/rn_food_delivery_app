import { View, Text, TouchableOpacity, ScrollView, ImageSourcePropType } from 'react-native'
import React from 'react'
import { themeColors } from '../theme';
import RestaurantCard from './RestaurantCard';

interface FeaturedRowProps {
    title: string;
    description: string;
    restaurants: Restaurant[];
}

interface Restaurant {
    name: string;
    image: ImageSourcePropType;
    description: string;
    address: string;
    stars: number;
    reviews: string;
    category: string;
}

export default function FeaturedRow({ title, restaurants, description }: FeaturedRowProps) {
    return (
        <View>
            <View className='flex-row justify-between items-center px-4'>
                <View>
                    <Text className='font-bold text-lg'>{title}</Text>
                    <Text className='text-gray-500 text-xs'>{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }} className='font-semibold'>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className='overflow-visible py-5'>

                {
                    restaurants.map((restaurant, index) => {
                        return (
                            <RestaurantCard
                                key={index}
                                name={restaurant.name}
                                address={restaurant.address}
                                image={restaurant.image}
                                stars={restaurant.stars}
                                category={restaurant.category}
                                reviews={restaurant.reviews} />
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}