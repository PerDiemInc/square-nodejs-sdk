
# Booking

Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
at a given location to a requesting customer in one or more appointment segments.

## Structure

`Booking`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A unique ID of this object representing a booking.<br>**Constraints**: *Maximum Length*: `36` |
| `version` | `number \| undefined` | Optional | The revision number for the booking used for optimistic concurrency. |
| `status` | [`string \| undefined`](../../doc/models/booking-status.md) | Optional | Supported booking statuses. |
| `createdAt` | `string \| undefined` | Optional | The RFC 3339 timestamp specifying the creation time of this booking. |
| `updatedAt` | `string \| undefined` | Optional | The RFC 3339 timestamp specifying the most recent update time of this booking. |
| `startAt` | `string \| undefined` | Optional | The RFC 3339 timestamp specifying the starting time of this booking. |
| `locationId` | `string \| undefined` | Optional | The ID of the [Location](../../doc/models/location.md) object representing the location where the booked service is provided. Once set when the booking is created, its value cannot be changed.<br>**Constraints**: *Maximum Length*: `32` |
| `customerId` | `string \| undefined` | Optional | The ID of the [Customer](../../doc/models/customer.md) object representing the customer receiving the booked service.<br>**Constraints**: *Maximum Length*: `192` |
| `customerNote` | `string \| undefined` | Optional | The free-text field for the customer to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a relevant [CatalogObject](../../doc/models/catalog-object.md) instance.<br>**Constraints**: *Maximum Length*: `4096` |
| `sellerNote` | `string \| undefined` | Optional | The free-text field for the seller to supply notes about the booking. For example, the note can be preferences that cannot be expressed by supported attributes of a specific [CatalogObject](../../doc/models/catalog-object.md) instance.<br>This field should not be visible to customers.<br>**Constraints**: *Maximum Length*: `4096` |
| `appointmentSegments` | [`AppointmentSegment[] \| undefined`](../../doc/models/appointment-segment.md) | Optional | A list of appointment segments for this booking. |
| `transitionTimeMinutes` | `number \| undefined` | Optional | Additional time at the end of a booking.<br>Applications should not make this field visible to customers of a seller. |
| `allDay` | `boolean \| undefined` | Optional | Whether the booking is of a full business day. |
| `locationType` | [`string \| undefined`](../../doc/models/business-appointment-settings-booking-location-type.md) | Optional | Supported types of location where service is provided. |
| `creatorDetails` | [`BookingCreatorDetails \| undefined`](../../doc/models/booking-creator-details.md) | Optional | Information about a booking creator. |
| `source` | [`string \| undefined`](../../doc/models/booking-booking-source.md) | Optional | Supported sources a booking was created from. |

## Example (as JSON)

```json
{
  "version": null,
  "status": null,
  "start_at": null,
  "location_id": null,
  "customer_id": null,
  "customer_note": null,
  "seller_note": null,
  "appointment_segments": null,
  "location_type": null,
  "creator_details": null,
  "source": null
}
```

