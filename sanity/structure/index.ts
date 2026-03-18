import {CogIcon, PlayIcon, StarIcon, TagsIcon, UsersIcon} from '@sanity/icons'
import {ListItemBuilder, StructureResolver} from 'sanity/structure'

const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'category',
    'featuredProduct',
    'instagramReel',
    'media.tag',
    'settings',
    'testimonial',
  ].includes(id)
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Categories')
        .icon(TagsIcon)
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Products')
        .icon(StarIcon)
        .child(S.documentTypeList('featuredProduct').title('Products')),
      S.divider(),
      S.listItem()
        .title('Testimonials')
        .icon(UsersIcon)
        .child(S.documentTypeList('testimonial').title('Testimonials')),
      S.listItem()
        .title('Instagram Reels')
        .icon(PlayIcon)
        .child(S.documentTypeList('instagramReel').title('Instagram Reels')),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .schemaType('settings')
        .child(S.editor().title('Settings').schemaType('settings').documentId('settings')),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
