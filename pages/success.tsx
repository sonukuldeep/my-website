import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Success.module.scss'
import dynamic from 'next/dynamic'

const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false,
})

const Success = () => {
  const [height, setHeight] = useState<number | undefined>(undefined)
  const [width, setWidth] = useState<number | undefined>(undefined)
  const confetiRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (confetiRef.current) {
        setWidth(confetiRef.current.clientWidth);
        setHeight(confetiRef.current.clientHeight);
      }
    };


    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className={styles.container} ref={confetiRef}>
      <h2>Congrats you have successfully bought the package</h2>
      <ConfettiToast width={width} height={height} />
    </div>
  )
}

export default Success

function ConfettiToast({ width, height }: { width: number | undefined, height: number | undefined }) {
  return (
    <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={2000}
      tweenDuration={80000}
      gravity={0.02}
    />
  )
}