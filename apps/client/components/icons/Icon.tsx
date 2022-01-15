import { SVGProps } from 'react'
import styled, { ThemedStyledProps } from 'styled-components'

interface IconProps extends ThemedStyledProps<SVGProps<SVGSVGElement>, any> {
  size: string
}

export const Icon = styled.svg<IconProps>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  position: relative;
`
