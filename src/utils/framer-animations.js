export const fadeAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
  fadeTransition: { delay: 1 },
};

export const containerAnimation = {
  open: { height: "auto", opacity: 1 },
  closed: { height: "500px", opacity: 1 },
  initial: { opacity: 1 },
  containerTransition: { ease: "linear", delay: 0.2 },
};
