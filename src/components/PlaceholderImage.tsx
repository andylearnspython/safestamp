import "./PlaceholderImage.css";

export interface PlaceholderImageProps {
  text?: string;
}

/**
 * This is a TypeScript React function that returns a placeholder image with optional text.
 * @param {PlaceholderImageProps}  - The above code is a React functional component named
 * `PlaceholderImage` that takes in a single prop named `text` of type string. The default value of
 * `text` is set to "[placeholder image]". The component returns a div element with a class name of
 * "placeholder-image" and a span
 * @returns A React functional component that renders a div with a class name "placeholder-image" and a
 * span element containing the text passed as a prop or the default text "[placeholder image]".
 */
export function PlaceholderImage({ text = "[placeholder image]"}: PlaceholderImageProps) {
  return <div className="placeholder-image">
    <span>{text}</span>
  </div>
}