import React from 'react'
import styled, {css} from 'styled-components'

interface SvgProps {
  angle: number
}
const Svg = styled('svg')<SvgProps>`
  ${({angle}) =>
    css`
      transform: rotate(${angle}deg);
    `}
`

interface Props extends IconProps {
  direction?: 'up' | 'down' | 'left' | 'right'
}

function calculateAngle(direction: Props['direction']) {
  switch (direction) {
    case 'up':
      return 90
    case 'down':
      return -90
    case 'left':
      return 180
    case 'right':
    default:
      return 0
  }
}

function CaretIcon({height, width, color, direction = 'right', className = ''}: Props) {
  const angle = calculateAngle(direction)
  return (
    <Svg
      width={width}
      height={height}
      color={color}
      className={className}
      angle={angle}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
      />
    </Svg>
  )
}

export default CaretIcon
