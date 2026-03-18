import {accordionGroupType} from './objects/module/accordionGroupType'
import {accordionType} from './objects/module/accordionType'
import {calloutType} from './objects/module/calloutType'
import {callToActionType} from './objects/module/callToActionType'
import {footerType} from './objects/global/footerType'
import {gridItemType} from './objects/module/gridItemType'
import {gridType} from './objects/module/gridType'
import {heroType} from './objects/module/heroType'
import {imageCallToActionType} from './objects/module/imageCallToActionType'
import {imageFeaturesType} from './objects/module/imageFeaturesType'
import {imageFeatureType} from './objects/module/imageFeatureType'
import {instagramType} from './objects/module/instagramType'
import {linkEmailType} from './objects/link/linkEmailType'
import {linkExternalType} from './objects/link/linkExternalType'
import {linkInternalType} from './objects/link/linkInternalType'
import {menuLinksType} from './objects/global/menuLinksType'
import {menuType} from './objects/global/menuType'
import {seoType} from './objects/seoType'

const annotations = [linkEmailType, linkExternalType, linkInternalType]

const objects = [
  accordionGroupType,
  accordionType,
  calloutType,
  callToActionType,
  footerType,
  gridItemType,
  gridType,
  heroType,
  imageCallToActionType,
  imageFeaturesType,
  imageFeatureType,
  instagramType,
  menuLinksType,
  menuType,
  seoType,
]

import {portableTextType} from './portableText/portableTextType'
import {portableTextSimpleType} from './portableText/portableTextSimpleType'

const blocks = [portableTextType, portableTextSimpleType]

import {categoryType} from './documents/category'
import {featuredProductType} from './documents/featuredProduct'
import {instagramReelType} from './documents/instagramReel'
import {testimonialType} from './documents/testimonial'

const documents = [categoryType, featuredProductType, instagramReelType, testimonialType]

import {settingsType} from './singletons/settingsType'

const singletons = [settingsType]

export const schemaTypes = [...annotations, ...objects, ...singletons, ...blocks, ...documents]
