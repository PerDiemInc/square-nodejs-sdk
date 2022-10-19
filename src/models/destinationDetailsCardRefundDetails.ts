import { lazy, object, optional, Schema, string } from '../schema';
import { Card, cardSchema } from './card';

export interface DestinationDetailsCardRefundDetails {
  /**
   * Represents the payment details of a card to be used for payments. These
   * details are determined by the payment token generated by Web Payments SDK.
   */
  card?: Card;
  /**
   * The method used to enter the card's details for the refund. The method can be
   * `KEYED`, `SWIPED`, `EMV`, `ON_FILE`, or `CONTACTLESS`.
   */
  entryMethod?: string;
}

export const destinationDetailsCardRefundDetailsSchema: Schema<DestinationDetailsCardRefundDetails> = object(
  {
    card: ['card', optional(lazy(() => cardSchema))],
    entryMethod: ['entry_method', optional(string())],
  }
);