import React, { useContext, useMemo } from 'react'
import { FlatList, Image, Pressable, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { colors } from '../assets/colors/colors'
import Hlogo from '../assets/hacktoberfest/Hlogo'
import Toggle from 'react-native-toggle-element'
import { DATA } from '../data'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationContext } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'
import { ThemeContext } from '../contexts/ThemeContext'
import Moon from '../assets/icons/Moon'
import Sun from '../assets/icons/Sun'

const Home = () => {
	const { isDark } = useContext(ThemeContext)
	const renderItem = ({ item }) => <Item data={item} />
	return useMemo(
		() => (
			<View style={styles.container(isDark)}>
				<StatusBar
					backgroundColor={isDark ? colors.background_dark : colors.background_light}
					barStyle={isDark ? 'light-content' : 'dark-content'}
				/>
				<Header />
				<FlatList
					contentContainerStyle={styles.flatList}
					numColumns={2}
					data={DATA}
					renderItem={renderItem}
					keyExtractor={(_, index) => index}
				/>
			</View>
		),
		[ isDark ]
	)
}

export default Home

const Header = () => {
	const { setIsDark, isDark } = useContext(ThemeContext)
	const width = useWindowDimensions().width
	const H_SIZE = width / 7
	return useMemo(
		() => (
			<View style={styles.headerContainer}>
				<View style={styles.logoContainer}>
					<Hlogo height={H_SIZE} width={H_SIZE} color={isDark ? '#fff' : '#183D5D'} />
				</View>
				<Toggle
					value={isDark}
					onPress={(val) => setIsDark(val)}
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
						borderColor: colors.toogle_light,
						alignItems: 'center',
						justifyContent: 'center'
					}}
					thumbActiveComponent={<Moon size={18} />}
					thumbInActiveComponent={<Sun size={18} />}
				/>
			</View>
		),
		[ isDark ]
	)
}

const Item = ({ data }) => {
	const width = useWindowDimensions().width
	const { isDark } = useContext(ThemeContext)
	const navigation = useContext(NavigationContext)
	const IMAGE_HEIGHT = width / 2
	return useMemo(
		() => (
			<Pressable style={styles.itemStyle} onPress={() => navigation.navigate('Detail', { data })}>
				<View style={styles.imageContainer(isDark)}>
					<SharedElement id={`item.${data.id}.photo`} style={styles.image(IMAGE_HEIGHT)}>
						<Image source={data.image} style={styles.image(IMAGE_HEIGHT)} resizeMode='cover' />
					</SharedElement>
					<LinearGradient colors={[ 'transparent', 'transparent', '#000' ]} style={styles.linearGradient}>
						<Text style={styles.name}>{data.name}</Text>
					</LinearGradient>
				</View>
			</Pressable>
		),
		[ isDark ]
	)
}

const styles = StyleSheet.create({
	logoContainer: { paddingVertical: 8 },
	container: (isDark) => ({
		flex: 1,
		backgroundColor: isDark ? colors.background_dark : colors.background_light
	}),
	headerContainer: {
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
	imageContainer: (isDark) => ({
		padding: 8,
		borderRadius: 8,
		backgroundColor: isDark ? colors.foreground_dark : colors.foreground_light,
		elevation: isDark ? 0 : 4
	}),
	image: (IMAGE_HEIGHT) => ({ height: IMAGE_HEIGHT, width: '100%', borderRadius: 8 }),
	name: { color: 'white', fontWeight: 'bold', lineHeight: 24, fontSize: 19 }
})
