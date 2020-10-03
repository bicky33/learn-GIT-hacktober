import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

const Sun = ({ size = 512, color = '#000' }) => {
	return (
		<Svg width={size} height={size} viewBox='0 0 512 512'>
			<Path
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeMiterlimit={10}
				strokeWidth={32}
				d='M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94'
			/>
			<Circle
				cx={256}
				cy={256}
				r={80}
				fill='none'
				stroke={color}
				strokeLinecap='round'
				strokeMiterlimit={10}
				strokeWidth={32}
			/>
		</Svg>
	)
}

export default Sun
