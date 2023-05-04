// File containing building blocks for content.
import { CSSProperties, PropsWithChildren } from 'react'
import './ContentBlocks.css'

export type ContentSectionProps = PropsWithChildren<{
  className?: string,
  style?: CSSProperties,
  centered?: boolean,
  textSize?: "small" | "medium" | "large",
  wide?: boolean
}>

/**
 * This is a TypeScript React function that renders a content section with customizable properties such
 * as centering, text size, and width.
 * @param {ContentSectionProps}  - - `children`: the content to be rendered inside the `ContentSection`
 * component
 * @returns A React functional component that renders a section element with optional classNames and
 * styles based on the props passed to it. It also renders any children components passed to it as
 * props.
 */
export function ContentSection({
  children,
  className: customClass,
  style,
  centered = false,
  textSize = "small",
  wide = false
}: ContentSectionProps) {
  let className = "section";

  if (centered) {
    className += " section-centered";
  }

  if (textSize !== "small") {
    className += ` section-text-${textSize}`;
  }

  if (wide) {
    className += " section-wide";
  }

  if (customClass) {
    className += ` ${customClass}`;
  }

  return <section className={className} style={style}>
    {children}
  </section>
}

export type ContentColumnsProps = PropsWithChildren<{
  alignment: "top" | "center" | "bottom"
}>

/**
 * This is a TypeScript React function that renders a content section with columns and alignment based
 * on the provided props.
 * @param {ContentColumnsProps}  - The `ContentColumns` function takes two parameters:
 * @returns The `ContentColumns` function is returning a JSX element that renders a `ContentSection`
 * component with the `wide` prop and a `className` prop that includes the `columns` class and the
 * `columns-alignment-` class, where `alignment` is a prop passed to the `ContentColumns`
 * function. The `children` prop is also passed to the `ContentSection` component
 */
export function ContentColumns({ children, alignment }: ContentColumnsProps) {
  return <ContentSection wide className={`columns columns-alignment-${alignment}`}>
    {children}
  </ContentSection>
}

export type ContentColumnProps = PropsWithChildren<{
  size: number,
  order?: number
}>

/**
 * This is a TypeScript React function that returns a div element with children, size, and order
 * properties.
 * @param {ContentColumnProps}  - - `children`: The content to be rendered inside the column.
 * @returns The `ContentColumn` function is returning a JSX element, which is a `div` element with the
 * class name "column" and inline styles that set the `flexGrow` and `order` properties based on the
 * `size` and `order` props passed to the function. The `children` prop is also rendered within the
 * `div` element.
 */
export function ContentColumn({ children, size, order }: ContentColumnProps) {
  return <div className="column" style={{ flexGrow: size, order }}>
    {children}
  </div>
}

export type ImageBackgroundProps = PropsWithChildren<{
  backgroundImage: string
}>

/**
 * This is a TypeScript React component that renders a div with a background image and a linear
 * gradient overlay.
 * @param {ImageBackgroundProps}  - The `ImageBackground` function takes in two parameters:
 * @returns The `ImageBackground` component is being returned. It is a `div` element with a class of
 * "image-background" and a background image that is a linear gradient and the image specified in the
 * `backgroundImage` prop. It also renders any children components passed to it.
 */
export function ImageBackground({ children, backgroundImage }: ImageBackgroundProps) {
  return <div className="image-background" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${backgroundImage})`
  }}>
    {children}
  </div>
}

/**
 * This is a TypeScript React function that returns a main element with a class name of
 * "page-container" and renders its children.
 * @param  - The `PageContainer` function is a React component that takes in one parameter, `children`,
 * which is of type `PropsWithChildren<{}>`. This means that the component can receive any number of
 * child components as its children, and these children components can have any props. The `{} `
 * @returns The `PageContainer` function is returning a JSX element that represents a main container
 * with the class name "page-container" and contains the `children` passed as props.
 */
export function PageContainer({ children }: PropsWithChildren<{}>) {
  return <main className="page-container">
    {children}
  </main>
}