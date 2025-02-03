export function fadeIn(direction: string, delay: number) {
    return {
      hidden: {
        opacity: 0,
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: delay,
          type: "spring",
          stiffness: 100,
        },
      },
    };
  }


  export const fadeIn2 = (direction = 'up', duration = 0.5) => {
    return {
      hidden: {
        opacity: 0,
        x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: duration,
          ease: 'easeInOut',
        },
      },
    };
  };