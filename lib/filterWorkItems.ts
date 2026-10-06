// lib/filterWorkItems.ts — Pure helper extracted from WorkGrid for testability

import { WorkItem, WorkCategory } from "./workData"

/**
 * Returns the subset of `items` that match `filter`.
 * When filter is "all", all items are returned unchanged.
 */
export function filterWorkItems(
  items: WorkItem[],
  filter: WorkCategory | "all"
): WorkItem[] {
  if (filter === "all") return items
  return items.filter((item) => item.category === filter)
}
