import React from 'react'
import { defineField } from 'sanity'
import { TextInputWithPresets } from '@/ui/TextInputWithPresets'
import {
	MdFormatAlignLeft,
	MdFormatAlignCenter,
	MdFormatAlignRight,
	MdFormatAlignJustify,
} from 'react-icons/md'

export const textAlign = defineField({
	name: 'textAlign',
	title: 'Text alignment',
	type: 'string',
	components: {
		input: (props) => (
			<TextInputWithPresets
				presets={[
					{ value: 'start', icon: MdFormatAlignLeft },
					{ value: 'center', icon: MdFormatAlignCenter },
					{ value: 'end', icon: MdFormatAlignRight },
					{ value: 'justify', icon: MdFormatAlignJustify },
				]}
				{...props}
			/>
		),
	},
	initialValue: 'center',
})
