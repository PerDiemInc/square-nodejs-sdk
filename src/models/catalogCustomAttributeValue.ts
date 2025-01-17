import {
  array,
  boolean,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';

/**
 * An instance of a custom attribute. Custom attributes can be defined and
 * added to `ITEM` and `ITEM_VARIATION` type catalog objects.
 * [Read more about custom attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes).
 */
export interface CatalogCustomAttributeValue {
  /** The name of the custom attribute. */
  name?: string | null;
  /** The string value of the custom attribute.  Populated if `type` = `STRING`. */
  stringValue?: string | null;
  /** The id of the [CatalogCustomAttributeDefinition]($m/CatalogCustomAttributeDefinition) this value belongs to. */
  customAttributeDefinitionId?: string;
  /** Defines the possible types for a custom attribute. */
  type?: string;
  /**
   * Populated if `type` = `NUMBER`. Contains a string
   * representation of a decimal number, using a `.` as the decimal separator.
   */
  numberValue?: string | null;
  /** A `true` or `false` value. Populated if `type` = `BOOLEAN`. */
  booleanValue?: boolean | null;
  /** One or more choices from `allowed_selections`. Populated if `type` = `SELECTION`. */
  selectionUidValues?: string[] | null;
  /** A copy of key from the associated `CatalogCustomAttributeDefinition`. */
  key?: string;
}

export const catalogCustomAttributeValueSchema: Schema<CatalogCustomAttributeValue> = object(
  {
    name: ['name', optional(nullable(string()))],
    stringValue: ['string_value', optional(nullable(string()))],
    customAttributeDefinitionId: [
      'custom_attribute_definition_id',
      optional(string()),
    ],
    type: ['type', optional(string())],
    numberValue: ['number_value', optional(nullable(string()))],
    booleanValue: ['boolean_value', optional(nullable(boolean()))],
    selectionUidValues: [
      'selection_uid_values',
      optional(nullable(array(string()))),
    ],
    key: ['key', optional(string())],
  }
);
