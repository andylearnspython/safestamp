import React, { PropsWithChildren, useEffect, useRef } from 'react';
import styles from './UShaped.module.css';

/**
 * This is a React component that arranges its child elements in a U-shaped layout using CSS
 * transforms.
 * @param  - This is a React functional component called "UShaped" that takes in children as props. It
 * uses the useRef and useEffect hooks to position the child elements in a U-shaped layout. The
 * component returns a div with a ref to the uarcRef variable and maps over the children to render each
 * child
 * @returns This code exports a React functional component named `UShaped`. It takes in children as
 * props and returns a div container with a ref to a `uarcRef` element. The `setUShapePosition`
 * function is called on mount and on window resize, which calculates the position of each child
 * element within the container using trigonometry and sets the transform style property accordingly.
 * The children are mapped
 */
export function UShaped({ children }: PropsWithChildren<{}>) {
  const uarcRef = useRef<HTMLDivElement | null>(null);

  const setUShapePosition = () => {
    const parent = uarcRef.current;
    if (!parent) return;

    const items = parent.children;
    const totalItems = items.length;

    const width = Math.max(50, Math.min(parent.clientWidth / 2) - 60);
    const height = Math.max(50, Math.min(parent.clientHeight) - 60);
    const angleSpan = 120;
    const angleStep = angleSpan / (totalItems - 1);

    for (let i = 0; i < totalItems; i++) {
      const angle = angleStep * i + 180 + (90 - angleSpan / 2);
      const x = width * (Math.cos(angle * Math.PI / 180));
      const y = height * (-Math.sin(angle * Math.PI / 180));

      (items[i] as HTMLElement).style.transform = `translate(calc(${x}px - 50%), ${y}px)`;
    }
  };

  useEffect(() => {
    setUShapePosition();
    window.addEventListener('resize', setUShapePosition);

    return () => {
      window.removeEventListener('resize', setUShapePosition);
    };
  }, []);

  return (
    <div ref={uarcRef} className={styles.uarc}>
      {React.Children.map(children, child => (
        <div className={styles.arcItem}>{child}</div>
      ))}
    </div>
  );
};