import {TrendUpwardIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const bestSellerType = defineType({
  name: 'bestSeller',
  title: 'Best Seller',
  type: 'document',
  icon: TrendUpwardIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (EGP)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'oldPrice',
      title: 'Old Price (EGP)',
      type: 'number',
      description: 'Leave empty if no discount',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (rule) => rule.required().min(0).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews Count',
      type: 'number',
      validation: (rule) => rule.required().min(0),
      initialValue: 0,
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
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
      title: 'name',
      price: 'price',
      rating: 'rating',
      media: 'image',
    },
    prepare({title, price, rating, media}) {
      return {
        title,
        subtitle: `⭐ ${rating} — ${price} EGP`,
        media,
      }
    },
  },
})
