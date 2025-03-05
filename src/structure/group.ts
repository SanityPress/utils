import type {
	StructureBuilder,
	ListItemBuilder,
	ListItem,
	Divider,
} from 'sanity/structure'

export const group = (
	S: StructureBuilder,
	title: string,
	items: (ListItemBuilder | ListItem | Divider)[],
): ListItemBuilder =>
	S.listItem().title(title).child(S.list().title(title).items(items))
