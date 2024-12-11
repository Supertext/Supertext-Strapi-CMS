import type { Schema, Struct } from '@strapi/strapi';

export interface BaseFaqCategoryContainer extends Struct.ComponentSchema {
  collectionName: 'components_base_faq_category_containers';
  info: {
    displayName: 'FAQ Category Container';
  };
  attributes: {
    faq_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-category.faq-category'
    >;
  };
}

export interface BaseFaqContainer extends Struct.ComponentSchema {
  collectionName: 'components_base_faq_containers';
  info: {
    displayName: 'FAQ Container';
  };
  attributes: {
    faq_entries: Schema.Attribute.Relation<
      'oneToMany',
      'api::faq-entry.faq-entry'
    >;
  };
}

export interface BaseSeo extends Struct.ComponentSchema {
  collectionName: 'components_base_seos';
  info: {
    displayName: 'Seo';
    icon: 'filter';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'base.faq-category-container': BaseFaqCategoryContainer;
      'base.faq-container': BaseFaqContainer;
      'base.seo': BaseSeo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
