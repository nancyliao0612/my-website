import { BsArrowUp } from "react-icons/bs";

const ScrollButton = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <BsArrowUp className="scroll-button" onClick={scrollToTop} />
    </>
  );
};

export default ScrollButton;
