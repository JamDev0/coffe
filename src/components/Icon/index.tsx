import { ReactNode } from "react"
import { PresentationDetailIconContainer } from "./styles"

interface IconProps {
  svg: ReactNode
  backgroundColor: 'darkYellow' | 'gray' | 'yellow' | 'purple'
}

export function Icon({ svg, backgroundColor }: IconProps) {
  return <PresentationDetailIconContainer backgroundColor={backgroundColor}>{svg}</PresentationDetailIconContainer>
}