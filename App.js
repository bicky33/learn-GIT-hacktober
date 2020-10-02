import React from 'react'
import codePush from 'react-native-code-push'
import { NavigationContainer } from '@react-navigation/native'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { enableScreens } from 'react-native-screens'
import Home from './src/screens/Home'
import Detail from './src/screens/Detail'
import { timing } from 'react-native-reanimated'
enableScreens()

const Stack = createSharedElementStackNavigator()

const MyApp = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode='none' initialRouteName='Home'>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen
					name='Detail'
					component={Detail}
					options={() => ({
						gestureEnabled: false,
						transitionSpec: {
							open: { animation: timing, config: { duration: 300 } },
							close: { animation: timing, config: { duration: 300 } }
						},
						cardStyleInterpolator: ({ current: { progress } }) => {
							return {
								cardStyle: {
									opacity: progress
								}
							}
						}
					})}
					sharedElements={(route, otherRoute, showing) => {
						const { data } = route.params
						return [ `item.${data.id}.photo` ]
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

let App = codePush(MyApp)

export default App
