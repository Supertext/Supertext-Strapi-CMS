import type { Schema, Struct } from '@strapi/strapi';

export interface BaseBlogPostContainer extends Struct.ComponentSchema {
  collectionName: 'components_base_blog_post_containers';
  info: {
    displayName: 'Blog Post Container';
  };
  attributes: {
    blog_entries: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-post.blog-post'
    >;
  };
}

export interface BaseButton extends Struct.ComponentSchema {
  collectionName: 'components_base_buttons';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['default', 'login']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

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

export interface BaseKeyFigures extends Struct.ComponentSchema {
  collectionName: 'components_base_key_figures';
  info: {
    displayName: 'keyFigures';
  };
  attributes: {};
}

export interface BaseKeyfigures extends Struct.ComponentSchema {
  collectionName: 'components_base_keyfigures';
  info: {
    displayName: 'Keyfigures';
  };
  attributes: {
    figure: Schema.Attribute.String;
  };
}

export interface BaseLogoBoard extends Struct.ComponentSchema {
  collectionName: 'components_base_logo_boards';
  info: {
    displayName: 'Logo Board';
  };
  attributes: {};
}

export interface BaseReferenceLogo extends Struct.ComponentSchema {
  collectionName: 'components_base_reference_logos';
  info: {
    displayName: 'Reference Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link_url: Schema.Attribute.String;
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

export interface CasesFooterNote extends Struct.ComponentSchema {
  collectionName: 'components_cases_footer_notes';
  info: {
    displayName: 'footerNote';
  };
  attributes: {
    cta: Schema.Attribute.Component<'base.button', false>;
    text: Schema.Attribute.String;
  };
}

export interface CasesImage extends Struct.ComponentSchema {
  collectionName: 'components_cases_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface CasesQuote extends Struct.ComponentSchema {
  collectionName: 'components_cases_quotes';
  info: {
    description: '';
    displayName: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    role: Schema.Attribute.String;
  };
}

export interface CasesShowShareButtons extends Struct.ComponentSchema {
  collectionName: 'components_cases_show_share_buttons';
  info: {
    description: '';
    displayName: 'showShareButtons';
  };
  attributes: {
    showShareButtons: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface CasesSliderJumbotron extends Struct.ComponentSchema {
  collectionName: 'components_cases_slider_jumbotrons';
  info: {
    description: '';
    displayName: 'sliderJumbotron';
  };
  attributes: {
    sliderImages: Schema.Attribute.Media<'images' | 'files', true>;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CasesTextContent extends Struct.ComponentSchema {
  collectionName: 'components_cases_text_contents';
  info: {
    description: '';
    displayName: 'TextContent';
  };
  attributes: {
    background: Schema.Attribute.Enumeration<['light', 'dark']> &
      Schema.Attribute.DefaultTo<'dark'>;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ImpressumItem extends Struct.ComponentSchema {
  collectionName: 'components_impressum_items';
  info: {
    description: '';
    displayName: 'item';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ImpressumSection extends Struct.ComponentSchema {
  collectionName: 'components_impressum_sections';
  info: {
    description: '';
    displayName: 'section';
  };
  attributes: {
    address1: Schema.Attribute.String;
    address2: Schema.Attribute.String;
    item: Schema.Attribute.Component<'impressum.item', true>;
    title: Schema.Attribute.String;
  };
}

export interface OrderformContent extends Struct.ComponentSchema {
  collectionName: 'components_orderform_contents';
  info: {
    description: '';
    displayName: 'content';
  };
  attributes: {
    cta: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    eyebrowtitle: Schema.Attribute.String;
    footerNote: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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

export interface TranslateSectionsCheckedListItem
  extends Struct.ComponentSchema {
  collectionName: 'components_translate_sections_checked_list_items';
  info: {
    displayName: 'Checked List Item';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TranslateSectionsFeatureIcons extends Struct.ComponentSchema {
  collectionName: 'components_translate_sections_feature_icons';
  info: {
    displayName: 'Feature Icons';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface TranslateSectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_translate_sections_features';
  info: {
    description: '';
    displayName: 'Features';
  };
  attributes: {
    features: Schema.Attribute.Component<
      'translate-sections.feature-icons',
      true
    >;
    footerText: Schema.Attribute.String;
    lead: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface TranslateSectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_translate_sections_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    leading: Schema.Attribute.RichText;
    mainHeading: Schema.Attribute.String;
  };
}

export interface TranslateSectionsImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_translate_sections_image_galleries';
  info: {
    description: '';
    displayName: 'References';
  };
  attributes: {
    references: Schema.Attribute.Component<
      'translate-sections.reference-text',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface TranslateSectionsImageText extends Struct.ComponentSchema {
  collectionName: 'components_translate_sections_image_texts';
  info: {
    description: '';
    displayName: 'Checked-List Text';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'base.button', true>;
    checked_list_items: Schema.Attribute.Component<
      'translate-sections.checked-list-item',
      true
    >;
    lead: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface TranslateSectionsReferenceText extends Struct.ComponentSchema {
  collectionName: 'components_translate_sections_reference_texts';
  info: {
    displayName: 'Reference Text';
  };
  attributes: {
    quote: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'base.blog-post-container': BaseBlogPostContainer;
      'base.button': BaseButton;
      'base.faq-category-container': BaseFaqCategoryContainer;
      'base.faq-container': BaseFaqContainer;
      'base.key-figures': BaseKeyFigures;
      'base.keyfigures': BaseKeyfigures;
      'base.logo-board': BaseLogoBoard;
      'base.reference-logo': BaseReferenceLogo;
      'base.seo': BaseSeo;
      'cases.footer-note': CasesFooterNote;
      'cases.image': CasesImage;
      'cases.quote': CasesQuote;
      'cases.show-share-buttons': CasesShowShareButtons;
      'cases.slider-jumbotron': CasesSliderJumbotron;
      'cases.text-content': CasesTextContent;
      'impressum.item': ImpressumItem;
      'impressum.section': ImpressumSection;
      'orderform.content': OrderformContent;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'translate-sections.checked-list-item': TranslateSectionsCheckedListItem;
      'translate-sections.feature-icons': TranslateSectionsFeatureIcons;
      'translate-sections.features': TranslateSectionsFeatures;
      'translate-sections.hero': TranslateSectionsHero;
      'translate-sections.image-gallery': TranslateSectionsImageGallery;
      'translate-sections.image-text': TranslateSectionsImageText;
      'translate-sections.reference-text': TranslateSectionsReferenceText;
    }
  }
}
