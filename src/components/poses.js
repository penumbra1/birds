import posed from 'react-pose'

const Fade = posed.div({
  enter: {
    opacity: 1,
    delay: 200,
    transition: { duration: 3000 },
    beforeChildren: true,
  },
  exit: { opacity: 0, transition: { duration: 3000 } },
})

const FadeUp = posed.div({
  enter: { y: '0%', opacity: 1, delay: 0, beforeChildren: 300 },
  exit: { y: '0%', opacity: 0, transition: { duration: 1000 } },
})

const FadeDown = posed.div({
  enter: { y: 0, opacity: 1, delay: 500, transition: { duration: 1000 } },
  exit: { y: '-50%', opacity: 0, transition: { duration: 3000 } },
})

const SlideUpOnExit = posed.div({
  enter: { y: '0' },
  exit: { y: '-120vh', transition: { duration: 1000 } },
})

const DefaultPose = Fade

export { FadeUp, Fade, FadeDown, SlideUpOnExit }
