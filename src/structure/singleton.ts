import type { StructureBuilder, ListItemBuilder } from 'sanity/structure'

export const singleton = (
	S: StructureBuilder,
	id: string,
	title?: string,
): ListItemBuilder =>
	S.listItem()
		.id(id)
		.title(
			title ||
				id
					.split(/(?=[A-Z])/)
					.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
					.join(' '),
		)
		.child(S.editor().id(id).schemaType(id).documentId(id))
