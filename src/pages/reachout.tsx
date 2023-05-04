import { Application as ContactForm } from "../contactForm";
import "./reachout.css"
  
/**
 * The ReachOut function returns a div containing a ContactForm component.
 * @returns A React functional component called `ReachOut` is being returned. It renders a `div`
 * element that contains a `ContactForm` component.
 */
const ReachOut = () => {
  return (
    <div>
      <ContactForm />
    </div>
    
  );
};
  
export default ReachOut