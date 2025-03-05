# sanitypress-utils

> Helpful utilities for Sanity Studio and SanityPress

## Installation

```bash
npm install sanitypress-utils
```

## Usage

### Structure helpers

```ts
// e.g. src/sanity/structure.ts
import { singleton, group, directory } from 'sanitypress-utils'

export const structure = structureTool({
	structure: (S) =>
		S.list()
			.title('Content')
			.items([
				singleton(S, 'site', 'Site settings').icon(VscServerProcess),
				S.divider(),

				S.documentTypeListItem('page').title('All pages').icon(VscFiles),
				// customize page directories
				group(S, 'Directories', [
					directory(S, 'docs', { maxLevel: 1 }).title('Docs'),
					directory(S, 'docs/modules').title('Docs › Modules'),
				]),

				// ...
			]),
})
```

### Schema fields

```ts
// schema types
import { alignItems, textAlign } from 'sanitypress-utils'

export default defineType({
	// ...
	fieldsets: [{ name: 'alignment', options: { columns: 2 } }],
	fields: [
		// ...
		defineField({
			...alignItems,
			fieldset: 'alignment',
			group: 'options',
		}),
		defineField({
			...textAlign,
			fieldset: 'alignment',
			group: 'options',
		}),
	],
})
```

### Block type to raw text

Use in schema previews

```ts
import { getBlockText } from 'sanitypress-utils'

export default defineType({
	// ...
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content, media }) => ({
			title: getBlockText(content),
		}),
	},
})
```

### UI Components

#### Text Input with Presets

```tsx
import { getPreset, TextInputWithPresets, type Preset } from 'sanitypress-utils'

const presets: Preset[] = [
	{ title: 'Tablet and below', value: '(width < 48rem)' },
	{ title: 'Mobile only', value: '(width < 24rem)' },
	{ title: 'Dark mode', value: '(prefers-color-scheme: dark)' },
]

export default defineType({
	name: 'img',
	title: 'Image',
	fields: [
		defineField({
			name: 'media',
			title: 'Media query',
			type: 'string',
			placeholder: `e.g. ${presets.map((p) => getPreset(p)).join(', ')}`,
			initialValue: getPreset(presets[0]),
			components: {
				input: (props) => (
					<TextInputWithPresets prefix="@media" presets={presets} {...props} />
				),
			},
		}),
	],
})
```

#### Character Count

```tsx
import { CharacterCount } from 'sanitypress-utils'

export default defineType({
	name: 'metadata',
	title: 'Metadata',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.max(60).warning(),
			components: {
				input: (props) => <CharacterCount max={60} {...props} />,
			},
		}),
		defineField({
			name: 'description',
			type: 'text',
			validation: (Rule) => Rule.max(160).warning(),
			components: {
				input: (props) => <CharacterCount as="textarea" max={160} {...props} />,
			},
		}),
	],
})
```
