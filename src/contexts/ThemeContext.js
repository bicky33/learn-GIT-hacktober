import React, { useState, useMemo } from 'react'

const initialState = {
	isDark: false,
	setIsDark: () => {}
}

export const ThemeContext = React.createContext(initialState)

export const { Provider: ThemeProvider, Consumer: ThemeConsumer } = ThemeContext

export const ThemeController = ({ children }) => {
	const [ isDark, setIsDark ] = useState(false)

	return useMemo(
		() => (
			<ThemeProvider
				value={{
					isDark,
					setIsDark
				}}>
				{children}
			</ThemeProvider>
		),
		[ isDark ]
	)
}
