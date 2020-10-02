import React, { useRef } from 'react'
import {
	View,
	Text,
	Image,
	StatusBar,
	StyleSheet,
	useWindowDimensions,
	Animated,
	Pressable,
	Linking
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { SharedElement } from 'react-navigation-shared-element'
import { colors } from '../assets/colors/colors'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import * as Animatable from 'react-native-animatable'

const Detail = ({ route, navigation }) => {
	const { data } = route.params
	const scrollY = useRef(new Animated.Value(0)).current
	const width = useWindowDimensions().width
	const bottomView = useRef()
	const topRef = useRef()
	let connectButton = null

	connectButton = data.social.map((item, index) => (
		<React.Fragment key={index}>
			<ConnectButton
				name={item.name}
				onPress={() =>
					Linking.openURL(item.link).then((data) => {}).catch(() => {
						alert('Failed to open link')
					})}
			/>
		</React.Fragment>
	))

	return (
		<React.Fragment>
			<StatusBar backgroundColor={'black'} barStyle='light-content' />
			<Animated.ScrollView
				showsVerticalScrollIndicator={false}
				style={{ flex: 1 }}
				contentContainerStyle={{
					backgroundColor: colors.background_dark
				}}
				onScroll={Animated.event([ { nativeEvent: { contentOffset: { y: scrollY } } } ], {
					useNativeDriver: true
				})}>
				<Animated.View
					style={{
						...StyleSheet.absoluteFill,
						transform: [ { translateY: Animated.multiply(scrollY, 1) }, { scale: 1 } ]
					}}>
					<SharedElement id={`item.${data.id}.photo`} style={{ width: width, height: width * 2 }}>
						<Image source={data.image} style={{ width: width, height: width * 2 }} resizeMode='cover' />
					</SharedElement>
					<Animatable.View
						ref={topRef}
						animation='fadeIn'
						duration={450}
						delay={400}
						style={{ ...StyleSheet.absoluteFillObject }}>
						<LinearGradient
							colors={[ 'transparent', 'transparent', 'transparent', 'transparent', 'black' ]}
							start={{ x: 0, y: 1 }}
							end={{ x: 0, y: 0 }}
							style={styles.linearGradient}>
							<Pressable
								onPress={() => {
									Promise.all([
										topRef.current.fadeOut(450),
										bottomView.current.fadeOutDownBig(450)
									]).then(() => navigation.goBack())
								}}
								hitSlop={{ top: 16, bottom: 16, right: 16, left: 16 }}>
								<Icon name='arrow-back-outline' size={24} color={colors.background_light} />
							</Pressable>
						</LinearGradient>
					</Animatable.View>
				</Animated.View>
				<Animatable.View
					ref={bottomView}
					animation='fadeInUpBig'
					duration={450}
					delay={400}
					style={styles.bottomView}>
					<Text style={styles.name}>{data.name}</Text>
					<View style={styles.container}>
						<View style={styles.techContainer}>
							<Text style={styles.techText}>{data.techStack}</Text>
						</View>
					</View>
					<View style={styles.connectContainer}>
						<Text style={styles.connectText}>Let's Connect</Text>
						<View style={styles.lineHorizontal} />
					</View>
					{connectButton}
				</Animatable.View>
			</Animated.ScrollView>
		</React.Fragment>
	)
}

Detail.sharedElements = (route, otherRoute, showing) => {
	const { data } = route.params
	return [ `item.${data.id}.photo` ]
}

export default Detail

const ConnectButton = ({ name, onPress }) => {
	return (
		<Pressable
			onPress={onPress}
			style={{
				borderRadius: 8,
				backgroundColor: colors.foreground_dark,
				padding: 12,
				alignItems: 'center',
				justifyContent: 'center',
				marginVertical: 12
			}}>
			<Text style={{ color: colors.foreground_light }}>{name}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	linearGradient: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		padding: 16
	},
	bottomView: {
		marginTop: width * 1.5,
		padding: 16,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		backgroundColor: colors.background_dark,
		flex: 1
	},
	container: { alignItems: 'flex-start', marginTop: 14 },
	techContainer: {
		backgroundColor: colors.foreground_dark,
		paddingHorizontal: 16,
		paddingVertical: 4,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100
	},
	techText: { color: colors.foreground_light },
	name: { color: colors.background_light, fontSize: 24, fontWeight: 'bold', lineHeight: 28 },
	connectContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 32, marginBottom: 6 },
	connectText: { color: '#90c3da', fontSize: 14 },
	lineHorizontal: { height: 1, backgroundColor: '#90c3da', flex: 1, marginLeft: 8, marginTop: 2 }
})
