/**
 * Property 2: Preservation — Existing Web Project Behavior
 *
 * These tests verify that all pre-existing WebProjectItem entries in WORK_ITEMS
 * are intact and that the filterWorkItems helper behaves correctly.
 * They are expected to PASS on current (pre-build) code to confirm the baseline.
 *
 * **Validates: Requirements 6.1, 6.2, 6.3**
 */

import { describe, it, expect } from "vitest"
import * as fc from "fast-check"
import { WORK_ITEMS, WorkCategory, WebProjectItem } from "../lib/workData"
import { filterWorkItems } from "../lib/filterWorkItems"

const CATEGORIES: WorkCategory[] = ["catalog", "social", "email", "web"]

// ─── Filter correctness — deterministic examples ───────────────────────────

describe("filterWorkItems — filter correctness", () => {
  it("returns only items matching the selected category", () => {
    for (const cat of CATEGORIES) {
      const result = filterWorkItems(WORK_ITEMS, cat)
      expect(result.every((item) => item.category === cat)).toBe(true)
    }
  })

  it("returns all items when filter is 'all'", () => {
    const result = filterWorkItems(WORK_ITEMS, "all")
    expect(result).toHaveLength(WORK_ITEMS.length)
  })

  it("returns empty array when given empty input", () => {
    expect(filterWorkItems([], "web")).toHaveLength(0)
  })
})

// ─── Filter idempotence — property-based ───────────────────────────────────

describe("filterWorkItems — idempotence (property-based)", () => {
  it("applying the same filter twice equals applying it once", () => {
    /**
     * **Validates: Requirements 2.2, 2.3**
     * Idempotence: filter(filter(items, f), f) === filter(items, f)
     */
    fc.assert(
      fc.property(
        fc.constantFrom(...CATEGORIES, "all" as const),
        (filter) => {
          const once = filterWorkItems(WORK_ITEMS, filter)
          const twice = filterWorkItems(once, filter)
          expect(twice).toHaveLength(once.length)
          expect(twice.map((i) => i.id)).toEqual(once.map((i) => i.id))
        }
      )
    )
  })

  it("never returns items of a different category than the filter", () => {
    /**
     * **Validates: Requirements 2.3, 2.4**
     * No item from a different category slips through the filter.
     */
    fc.assert(
      fc.property(fc.constantFrom(...CATEGORIES), (filter) => {
        const result = filterWorkItems(WORK_ITEMS, filter)
        expect(result.every((item) => item.category === filter)).toBe(true)
      })
    )
  })
})

// ─── WebProjectItem preservation ───────────────────────────────────────────

describe("WebProjectItem preservation", () => {
  const webItems = WORK_ITEMS.filter(
    (item): item is WebProjectItem => item.category === "web"
  )

  it("all web projects have non-empty tags arrays", () => {
    /**
     * **Validates: Requirements 6.2**
     * Every WebProjectItem must carry at least one tag so the tag row renders.
     */
    expect(webItems.length).toBeGreaterThan(0)
    for (const item of webItems) {
      expect(item.tags, `${item.id} should have tags`).toBeDefined()
      expect(
        item.tags.length,
        `${item.id} tags should be non-empty`
      ).toBeGreaterThan(0)
    }
  })

  it("all web projects have a valid liveUrl", () => {
    /**
     * **Validates: Requirements 6.1**
     * Every WebProjectItem must supply a liveUrl so the <a target="_blank"> renders.
     */
    for (const item of webItems) {
      expect(item.liveUrl, `${item.id} should have liveUrl`).toBeTruthy()
      expect(item.liveUrl).toMatch(/^https?:\/\//)
    }
  })

  it("all web projects have non-empty title and description", () => {
    /**
     * **Validates: Requirements 6.1**
     * Cards must have displayable content.
     */
    for (const item of webItems) {
      expect(item.title.trim(), `${item.id} title should not be empty`).not.toBe("")
      expect(
        item.description.trim(),
        `${item.id} description should not be empty`
      ).not.toBe("")
    }
  })

  it("all web projects have a thumbnail path", () => {
    /**
     * **Validates: Requirements 6.1, 8.1**
     * Cards require a thumbnail path for the <Image> component.
     */
    for (const item of webItems) {
      expect(item.thumbnail, `${item.id} should have a thumbnail`).toBeTruthy()
    }
  })

  it("WORK_ITEMS contains all original web projects", () => {
    /**
     * **Validates: Requirements 6.3**
     * Confirms every pre-existing project is still present after the data migration.
     */
    const webIds = webItems.map((i) => i.id)
    const expectedIds = [
      "yawdesh",
      "phytogenix",
      "secacad",
      "panaceutics",
      "soprep",
      "tizzle-shop",
      "secquiz",
    ]
    for (const id of expectedIds) {
      expect(webIds, `WORK_ITEMS should contain ${id}`).toContain(id)
    }
  })

  it("filterWorkItems with 'all' renders a count equal to WORK_ITEMS.length", () => {
    /**
     * **Validates: Requirements 6.3**
     * When filter is 'all', the rendered item count must equal total WORK_ITEMS.
     */
    const result = filterWorkItems(WORK_ITEMS, "all")
    expect(result).toHaveLength(WORK_ITEMS.length)
  })

  it("every web project tag is a non-empty string (property-based)", () => {
    /**
     * **Validates: Requirements 6.2**
     * Property: for every tag in every WebProjectItem, the tag is a non-empty string.
     */
    fc.assert(
      fc.property(fc.constantFrom(...webItems), (item) => {
        expect(Array.isArray(item.tags)).toBe(true)
        for (const tag of item.tags) {
          expect(typeof tag).toBe("string")
          expect(tag.trim().length).toBeGreaterThan(0)
        }
      })
    )
  })
})
