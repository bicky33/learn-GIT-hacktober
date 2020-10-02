import React, { useContext, useState } from 'react'
import { FlatList, Image, Pressable, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { colors } from '../assets/colors/colors'
import Hlogo from '../assets/hacktoberfest/Hlogo'
import Toggle from 'react-native-toggle-element'
import { DATA } from '../data'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationContext } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'

const Home = () => {
	const renderItem = ({ item }) => <Item data={item} />
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={colors.background_dark} barStyle='light-content' />
			<Header />
			<FlatList
				contentContainerStyle={styles.flatList}
				numColumns={2}
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item, index) => index}
			/>
		</View>
	)
}

export default Home

const Header = () => {
	const [ toggleValue, setToggleValue ] = useState(false)
	const width = useWindowDimensions().width
	const H_SIZE = width / 6
	return (
		<View style={styles.logoContainer}>
			<Hlogo height={H_SIZE} width={H_SIZE} color={toggleValue ? '#fff' : '#183D5D'} />
			<Toggle
				value={toggleValue}
				onPress={(val) => setToggleValue(val)}
				trackBar={{
					activeBackgroundColor: colors.toogle_dark,
					inActiveBackgroundColor: colors.toogle_light,
					borderActiveColor: colors.toogle_dark,
					borderInActiveColor: colors.toogle_light,
					width: 50,
					height: 25
				}}
				thumbButton={{
					width: 27,
					height: 26,
					radius: 100,
					activeBackgroundColor: '#FFF',
					inActiveBackgroundColor: '#FFF'
				}}
				thumbStyle={{
					borderWidth: 1,
					borderColor: '#fff'
				}}
			/>
		</View>
	)
}

const Item = ({ data }) => {
	const width = useWindowDimensions().width
	const navigation = useContext(NavigationContext)
	const IMAGE_HEIGHT = width / 2
	return (
		<Pressable style={styles.itemStyle} onPress={() => navigation.navigate('Detail', { data })}>
			<View style={styles.imageContainer}>
				<SharedElement id={`item.${data.id}.photo`} style={styles.image(IMAGE_HEIGHT)} >
					<Image source={data.image} style={styles.image(IMAGE_HEIGHT)} resizeMode='cover' />
				</SharedElement>
				<LinearGradient colors={[ 'transparent', 'transparent', '#000' ]} style={styles.linearGradient}>
					<Text style={styles.name}>{data.name}</Text>
				</LinearGradient>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background_dark
	},
	logoContainer: {
		marginHorizontal: 16,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	flatList: { padding: 8 },
	linearGradient: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 8,
		justifyContent: 'flex-end',
		borderRadius: 8,
		margin: 8
	},
	itemStyle: { flex: 1, margin: 8 },
	imageContainer: { padding: 8, borderRadius: 8, backgroundColor: colors.foreground_dark },
	image: (IMAGE_HEIGHT) => ({ height: IMAGE_HEIGHT, width: '100%', borderRadius: 8 }),
	name: { color: 'white', fontWeight: 'bold', lineHeight: 20 }
})
