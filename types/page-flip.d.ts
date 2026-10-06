/**
 * Minimal type declarations for page-flip@2.0.7
 * (The package ships no .d.ts files.)
 */
declare module "page-flip" {
  export type SizeType = "fixed" | "stretch"

  export interface FlipSetting {
    startPage?: number
    size?: SizeType
    width: number
    height: number
    minWidth?: number
    maxWidth?: number
    minHeight?: number
    maxHeight?: number
    drawShadow?: boolean
    flippingTime?: number
    usePortrait?: boolean
    startZIndex?: number
    autoSize?: boolean
    maxShadowOpacity?: number
    showCover?: boolean
    mobileScrollSupport?: boolean
    clickEventForward?: boolean
    useMouseEvents?: boolean
    swipeDistance?: number
    showPageCorners?: boolean
    disableFlipByClick?: boolean
  }

  export type PageFlipEventName =
    | "flip"
    | "changeOrientation"
    | "changeState"
    | "init"
    | "update"

  export interface FlipEvent {
    data: number
  }

  export class PageFlip {
    constructor(element: HTMLElement, setting: FlipSetting)

    loadFromImages(images: string[]): void
    loadFromHTML(items: NodeListOf<HTMLElement> | HTMLElement[]): void
    updateFromImages(images: string[]): void

    flipNext(corner?: "top" | "bottom"): void
    flipPrev(corner?: "top" | "bottom"): void
    flip(page: number, corner?: "top" | "bottom"): void
    turnToPage(page: number): void
    turnToNextPage(): void
    turnToPrevPage(): void

    getPageCount(): number
    getCurrentPageIndex(): number
    getOrientation(): "portrait" | "landscape"

    on(event: PageFlipEventName, callback: (e: FlipEvent) => void): void
    off(event: PageFlipEventName): void

    destroy(): void
    update(): void
    clear(): void
  }
}
