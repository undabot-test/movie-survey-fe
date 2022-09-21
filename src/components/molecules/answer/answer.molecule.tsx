import { memo, useState } from 'react'
import { Collapse, IconButton, Typography } from '@mui/material'
import { AnswerProps } from './answer.types'
import * as Styled from './answer.styles'

const Answer = ({ question, answer }: AnswerProps) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <Styled.Answer>
      <Styled.Question variant="body1" onClick={handleClick}>
        <IconButton>
          <Styled.Arrow open={open} />
        </IconButton>
        {question}
      </Styled.Question>
      <Collapse in={open}>
        <Typography variant="body1" color="GrayText" sx={{ ml: 5 }}>
          {answer}
        </Typography>
      </Collapse>
    </Styled.Answer>
  )
}

export default memo(Answer)
