import React from 'react'

type Anchor = 'left' | 'right' | 'top' | 'bottom'

type GreenBubbleProps = {
    anchorX?: Anchor,
    anchorY?: Anchor,
    posX?: number,
    posY?: number,
}

const defaultAnchorX: Anchor = 'left'
const defaultAnchorY: Anchor = 'top'

export default function GreenBubble({ anchorX = defaultAnchorX, anchorY = defaultAnchorY, posX = 0, posY = 0 }: GreenBubbleProps) {
  const styles: React.CSSProperties = {
    left: anchorX === 'left' ? `${posX}px` : undefined,
    right: anchorX === 'right' ? `${posX}px` : undefined,
    top: anchorY === 'top' ? `${posY}px` : undefined,
    bottom: anchorY === 'bottom' ? `${posY}px` : undefined,
  }

  return (
    <div className=' animate-pulse -z-10 blur-2xl w-[380px] h-[380px] bg-[#18311f] border-8 border-white border-opacity-5 rounded-full absolute' style={styles}></div>
  )
}

