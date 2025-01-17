
# Inventory Adjustment Group

## Structure

`InventoryAdjustmentGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A unique ID generated by Square for the<br>`InventoryAdjustmentGroup`.<br>**Constraints**: *Maximum Length*: `100` |
| `rootAdjustmentId` | `string \| undefined` | Optional | The inventory adjustment of the composed variation.<br>**Constraints**: *Maximum Length*: `100` |
| `fromState` | [`string \| undefined`](../../doc/models/inventory-state.md) | Optional | Indicates the state of a tracked item quantity in the lifecycle of goods. |
| `toState` | [`string \| undefined`](../../doc/models/inventory-state.md) | Optional | Indicates the state of a tracked item quantity in the lifecycle of goods. |

## Example (as JSON)

```json
{
  "from_state": null,
  "to_state": null
}
```

