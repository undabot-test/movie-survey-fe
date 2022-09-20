import { styled, Typography } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

export const Answer = styled('div')({
  marginBottom: 16,
})

export const Question = styled(Typography)({
  userSelect: 'none',
  cursor: 'pointer',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
})

export const Arrow = styled(ExpandMore)<{ open: boolean }>(({ open }) => ({
  transform: open ? 'rotate(180deg)' : 'rotate(0)',
  transition: 'transform .2s',
}))
