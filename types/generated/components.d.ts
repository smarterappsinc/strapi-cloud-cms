import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsBlock extends Struct.ComponentSchema {
  collectionName: 'components_components_blocks';
  info: {
    displayName: 'Block';
  };
  attributes: {
    actionText: Schema.Attribute.Text;
    cta: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsCollapsible extends Struct.ComponentSchema {
  collectionName: 'components_components_collapsibles';
  info: {
    description: '';
    displayName: 'Collapsible';
  };
  attributes: {
    component_id: Schema.Attribute.String;
    description: Schema.Attribute.String;
    sections: Schema.Attribute.Component<
      'mini-component.collapsible-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsContact extends Struct.ComponentSchema {
  collectionName: 'components_components_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    description: Schema.Attribute.Text;
    destinationUrl: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsDetailedFeatures extends Struct.ComponentSchema {
  collectionName: 'components_components_detailed_features';
  info: {
    description: '';
    displayName: 'Detailed Features';
  };
  attributes: {
    component_id: Schema.Attribute.String;
    sections: Schema.Attribute.Component<
      'mini-component.detailed-feature',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsGroupedCards extends Struct.ComponentSchema {
  collectionName: 'components_components_grouped_cards';
  info: {
    displayName: 'Grouped Cards';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.button', false>;
    sections: Schema.Attribute.Component<'mini-component.grouped-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsHero extends Struct.ComponentSchema {
  collectionName: 'components_components_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Component<'shared.video', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsSimpleDetail extends Struct.ComponentSchema {
  collectionName: 'components_components_simple_details';
  info: {
    displayName: 'Simple Detail';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MiniComponentCollapsibleItem extends Struct.ComponentSchema {
  collectionName: 'components_mini_component_collapsible_items';
  info: {
    displayName: 'Collapsible Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface MiniComponentDetailedFeature extends Struct.ComponentSchema {
  collectionName: 'components_mini_component_detailed_features';
  info: {
    description: '';
    displayName: 'Detailed Feature';
  };
  attributes: {
    bgColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'files' | 'images'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    title: Schema.Attribute.Component<
      'mini-component.detailed-feature-title',
      false
    >;
  };
}

export interface MiniComponentDetailedFeatureTitle
  extends Struct.ComponentSchema {
  collectionName: 'components_mini_component_detailed_feature_titles';
  info: {
    description: '';
    displayName: 'Detailed Feature Title';
  };
  attributes: {
    highlightColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text: Schema.Attribute.JSON;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface MiniComponentGroupedCard extends Struct.ComponentSchema {
  collectionName: 'components_mini_component_grouped_cards';
  info: {
    description: '';
    displayName: 'Grouped Card';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['primary', 'secondary', 'brand']> &
      Schema.Attribute.DefaultTo<'primary'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['link', 'button']>;
    url: Schema.Attribute.String;
  };
}

export interface SharedMetaProps extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_props';
  info: {
    description: '';
    displayName: 'Meta Props';
    icon: 'apps';
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    value: Schema.Attribute.String & Schema.Attribute.Required;
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
    metaProps: Schema.Attribute.Component<'shared.meta-props', true>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaUrl: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedTheme extends Struct.ComponentSchema {
  collectionName: 'components_shared_themes';
  info: {
    description: '';
    displayName: 'Theme';
    icon: 'brush';
  };
  attributes: {
    brand_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    brand_color_hover: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    brand_color_second: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    poster: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.block': ComponentsBlock;
      'components.collapsible': ComponentsCollapsible;
      'components.contact': ComponentsContact;
      'components.detailed-features': ComponentsDetailedFeatures;
      'components.grouped-cards': ComponentsGroupedCards;
      'components.hero': ComponentsHero;
      'components.simple-detail': ComponentsSimpleDetail;
      'mini-component.collapsible-item': MiniComponentCollapsibleItem;
      'mini-component.detailed-feature': MiniComponentDetailedFeature;
      'mini-component.detailed-feature-title': MiniComponentDetailedFeatureTitle;
      'mini-component.grouped-card': MiniComponentGroupedCard;
      'shared.button': SharedButton;
      'shared.header': SharedHeader;
      'shared.link': SharedLink;
      'shared.meta-props': SharedMetaProps;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.theme': SharedTheme;
      'shared.video': SharedVideo;
    }
  }
}
