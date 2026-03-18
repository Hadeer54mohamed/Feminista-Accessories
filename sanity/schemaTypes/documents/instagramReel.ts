import {PlayIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const instagramReelType = defineType({
  name: 'instagramReel',
  title: 'Instagram Reel',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Label for this reel',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'e.g. https://www.instagram.com/reel/DS2iNvoCO20/',
      validation: (rule) =>
        rule.required().custom((value) => {
          if (!value) return true
          if (value.includes('instagram.com/reel/')) return true
          return 'Must be an Instagram reel link'
        }),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'link',
    },
  },
})
