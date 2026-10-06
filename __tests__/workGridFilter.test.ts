import { WORK_ITEMS, WorkCategory } from "../lib/workData"

function filterItems(items: typeof WORK_ITEMS, filter: WorkCategory | "all") {
  if (filter === "all") return items
  return items.filter((item) => item.category === filter)
}

describe("WorkGrid filter logic", () => {
  it("filtering by 'catalog' returns only catalog items", () => {
    const result = filterItems(WORK_ITEMS, "catalog")
    expect(result.length).toBeGreaterThan(0)
    result.forEach((item) => {
      expect(item.category).toBe("catalog")
    })
  })

  it("filtering by 'catalog' excludes non-catalog items", () => {
    const result = filterItems(WORK_ITEMS, "catalog")
    const nonCatalog = result.filter((item) => item.category !== "catalog")
    expect(nonCatalog).toHaveLength(0)
  })

  it("filtering by 'all' returns all items", () => {
    const result = filterItems(WORK_ITEMS, "all")
    expect(result).toHaveLength(WORK_ITEMS.length)
  })

  it("filtering by each category returns only matching items", () => {
    const categories: WorkCategory[] = ["catalog", "social", "email", "web"]
    categories.forEach((cat) => {
      const result = filterItems(WORK_ITEMS, cat)
      result.forEach((item) => {
        expect(item.category).toBe(cat)
      })
    })
  })
})
