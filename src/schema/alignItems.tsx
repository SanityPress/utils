import React from 'react'
import { defineField } from 'sanity'
import { TextInputWithPresets } from '@/ui/TextInputWithPresets'
import {
	MdVerticalAlignTop,
	MdVerticalAlignBottom,
	MdVerticalAlignCenter,
	MdVerticalDistribute,
} from 'react-icons/md'

export const alignItems = defineField({
	name: 'alignItems',
	title: 'Vertical alignment',
	type: 'string',
	components: {
		input: (props) => (
			<TextInputWithPresets
				presets={[
					{ value: 'start', icon: MdVerticalAlignTop },
					{ value: 'center', icon: MdVerticalAlignCenter },
					{ value: 'end', icon: MdVerticalAlignBottom },
					{ value: 'stretch', icon: MdVerticalDistribute },
				]}
				{...props}
			/>
		),
	},
	initialValue: 'center',
})
