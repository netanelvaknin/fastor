import styled from 'styled-components/macro';
import {TextField, Button} from '../../../ui/index';
import {Grid, Typography} from '@material-ui/core';
import {mobile, tablet} from '../../../utils/screen-sizes';
import {Checkbox} from "../../../ui/index";

export const RightGrid = styled(Grid)`
  margin: 0 auto;
  padding: 0rem 2rem 0rem;

  @media ${mobile} {
    padding: 0;
  }
`;

export const HoursSetupHeading = styled(Typography)`
  &.MuiTypography-root {
    margin: 5rem 0 2rem;

    @media ${mobile} {
      margin: 3rem 0 3rem;
    }
  }
`;

export const ToText = styled.span`
  font-weight: bold;
  @media ${tablet} {
    margin: 0 1rem;
  }

  @media ${mobile} {
    margin: 0 2rem;
  }
`;

export const LeftGrid = styled(Grid)`
  padding: 0rem 3rem 0rem;
  border-right: 1px solid #D7D7D7;

  @media ${mobile} {
    border-right: 0;
    padding: 0rem 1rem 0rem;
  }
`;

export const TimePicker = styled(TextField)`
  & .MuiInputBase-root.MuiInput-root {
    min-width: auto;
  }
`;

export const AddButton = styled(Button)`
  &.MuiButtonBase-root {
    min-width: auto;
  }
`;


export const DayCheckbox = styled(Checkbox)`
  margin: 10px !important;

  @media ${mobile} {
    margin: 10px !important;
  }

  & span {
    padding: 0;
  }
`;

export const BreakButton = styled(Button)`
  margin: 1rem 0;

  & .MuiButton-label {
    text-decoration: none;
  }
`;

export const NoWorkingHoursFound = styled.span`
  text-align: center;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  color: #BABABA;
  margin-bottom: 3rem;
`;