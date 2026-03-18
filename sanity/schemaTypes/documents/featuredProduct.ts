import {StarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const featuredProductType = defineType({
  name: 'featuredProduct',
  title: 'Featured Product',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
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
      title: 'Product Image',
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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'New'},
          {title: 'Best Seller', value: 'Best Seller'},
          {title: 'Premium', value: 'Premium'},
        ],
      },
    }),
    defineField({
      name: 'isBestSeller',
      title: 'Best Seller',
      type: 'boolean',
      description: 'Toggle to show this product in the Best Sellers section',
      initialValue: false,
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Product rating (0-5), shown in Best Sellers section',
      validation: (rule) => rule.min(0).max(5),
      initialValue: 5,
      hidden: ({parent}) => !parent?.isBestSeller,
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews Count',
      type: 'number',
      description: 'Number of reviews, shown in Best Sellers section',
      validation: (rule) => rule.min(0),
      initialValue: 0,
      hidden: ({parent}) => !parent?.isBestSeller,
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
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      categoryName: 'category.name',
      price: 'price',
      media: 'image',
    },
    prepare({title, categoryName, price, media}) {
      return {
        title,
        subtitle: [categoryName, price && `${price} EGP`].filter(Boolean).join(' — '),
        media,
      }
    },
  },
})
