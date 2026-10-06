import { WorkItem, WorkCategory } from "./workData"

export function filterWorkItems(
  items: WorkItem[],
  filter: WorkCategory | "all"
): WorkItem[] {
  if (filter === "all") return items
  return items.filter((item) => item.category === filter)
}
