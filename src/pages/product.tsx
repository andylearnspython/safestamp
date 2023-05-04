import { faArrowRight, faCheckCircle, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContentColumn, ContentColumns, PageContainer } from "../components/ContentBlocks";
import "./product.css";
import { Fragment, useState } from "react";
import center from '../assets/Product.png';
import { Dialog, DialogProps, Transition } from "@headlessui/react";

function StyledDialog({
  open,
  onClose,
  children,
}: Pick<DialogProps<any>, "open" | "onClose"> & { children: React.ReactNode }) {
  return <Transition
    appear
    show={open}
    enter="dialog-enter"
    enterFrom="dialog-enter-from"
    enterTo="dialog-enter-to"
    leave="dialog-leave"
    leaveFrom="dialog-leave-from"
    leaveTo="dialog-leave-to"
    as={Fragment}
  >
    <Dialog className="dialog-container" onClose={onClose}>
      <div className="dialog-backdrop" />
      <div className="dialog-scroll-container">
        <div className="dialog-centering">
          <Dialog.Panel className="dialog-panel">
            <button type="button" className="dialog-close-button" onClick={() => onClose(true)}>
              Close <FontAwesomeIcon icon={faClose} />
            </button>
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  </Transition>
}

/* The `Product` function is a React component that renders a page for a product called SafeStamp. It
includes a header with information about the product's attributes, and a hero image section with two
buttons that open dialogs when clicked. The dialogs provide more information about the engineering
and fun aspects of the product. The state variables `isLeftPopoverOpen` and `isRightPopoverOpen` are
used to control the visibility of the dialogs. The `StyledDialog` component is a custom wrapper
around the `Dialog` component from the `@headlessui/react` library that provides custom styling and
animation. */
export function Product() {
  const [isLeftPopoverOpen, setIsLeftPopoverOpen] = useState(false);
  const [isRightPopoverOpen, setIsRightPopoverOpen] = useState(false);

  return <PageContainer>
    <ContentColumns alignment="center">
      <ContentColumn size={2}>
        <h1>SafeStamp® is the <u>only</u> product with <u>both</u> attributes necessary to solve counterfeiting.</h1>
        <p><b><u>Engaging</u> Interface for End-Users</b>: the interactive tactile interface offers an easy and
          enjoyable way for customers to verify the authenticity of their product at
          the final <u>point-of-purchase</u> it requires no additional device</p>
        <p><b><u>Irreproducible</u> by Counterfeiters</b>: the reaction stems from proprietary, advanced nanomaterial
          science <u>too complicated to be replicated</u></p>
      </ContentColumn>
    </ContentColumns>
    <div className="hero-image-section">
      <div className="hero-image-container">
        <img className="hero-image" src={center}></img>
        <button type="button" className="hero-button hero-button-left" onClick={() => setIsLeftPopoverOpen(!isLeftPopoverOpen)}>
          How it Works <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <StyledDialog open={isLeftPopoverOpen} onClose={() => setIsLeftPopoverOpen(false)}>
          <Dialog.Title>The engineering behind SafeStamp</Dialog.Title>
          <p className="lead">We have engineered and developed the only material that is able to change
          color under light physical force.</p>
          <p>The reaction can be repeated tens of thousands
          of times, and the indicator operates in a wide range of temperature, pressure,
          altitude and humidity conditions.</p>
          <p>In order to accomplish this, we have developed
          a unique manufacturing process to make nanoparticles in the narrow range of sizes,
          that allow for the reflection of all colors of the visible spectrum. Additionally,
          we have engineered our polymer to have improved sensitivity to weak external force,
          and also a fast and reversible response.</p>
          <p>These two components together allow our
          nanomaterial to have clear, distinct, and repeatable color-change reactions from
          light human touch.</p>
          <p>Our indicator also functions effectively as an ink and can be
          produced in any shape or size, and placed on any forms of packaging as dictated by
          our clients. The malleable nature of our nanomaterial allows us to work with our
          clients to design any pattern and color combination that best suits their brand and
          the nature of their product.</p>
        </StyledDialog>
        <button type="button" className="hero-button hero-button-right" onClick={() => setIsRightPopoverOpen(!isRightPopoverOpen)}>
          How it Works <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <StyledDialog open={isRightPopoverOpen} onClose={() => setIsRightPopoverOpen(false)}>
          <Dialog.Title>The fun behind SafeStamp</Dialog.Title>
          <p>
            The indicator, which changes color and reveals hidden patterns when touched,
            empowers customers to, with ease, verify the authenticity of a product. This
            elegant and engaging design sets SafeStamp® apart.
          </p>
          <blockquote>
            “It is a staple of behavioral science that conscious engagement with a product serves as the single most effective means to direct the attentional spotlight, an act that is simply not inspired by a passive hologram.”
            <footer>
              Dr. Avi Chaudhuri,
              <br />
              <cite>The case against holograms: how a once-lofty security technology has fallen</cite>
            </footer>
          </blockquote>
          <p>
            The act of triggering a color-change on-the-spot and the excitement of revealing secret patterns is <em>fun</em> for a customer, in stark contrast to other passive anti-counterfeit techniques.
          </p>
        </StyledDialog>
      </div>
    </div>
  </PageContainer>
}
