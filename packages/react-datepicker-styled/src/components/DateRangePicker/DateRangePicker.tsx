import React from 'react'
import styled from 'styled-components'
import {opacity, OpacityProps} from 'styled-system'
import Grid from '../Grid'
import Flex from '../Flex'
import Input from '../Input'
import ArrowIcon from '../../icons/ArrowIcon'
import Datepicker from '../Datepicker'

const StyledArrowIcon = styled(ArrowIcon)<OpacityProps>`
  ${opacity}
`

function DateRangePicker() {
  return (
    <div>
      <Grid gridTemplateColumns="194px 39px 194px">
        <Input />
        <Flex alignItems="center" justifyContent="center">
          <StyledArrowIcon width="15px" height="12px" color="#ffffff" opacity={0.4} />
        </Flex>
        <Input />
      </Grid>
      <Datepicker />
    </div>
  )
}

export default DateRangePicker