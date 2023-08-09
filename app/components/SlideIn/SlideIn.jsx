import { useSpring, animated } from "react-spring";

const SlideIn = ({ children }) => {
  const animatedProps = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { marginTop: 0, opacity: 0 },
    config: { mass: 1, tension: 200, friction: 20},
  });

  return <animated.div style={{ ...animatedProps }}>{children}</animated.div>;
};

export default SlideIn;