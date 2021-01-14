import {makeStyles} from '@material-ui/core/styles';
import styled from 'styled-components/macro';
import {mobile} from '../../../utils/screen-sizes';

export const AppointmentsLogContainer = styled.div`
    position: relative;
`;

export const SubMenu = styled.div`
    margin-top: 8.5rem;
    background: ${props => props.theme.palette.primary.light};
    height: 8rem;

    @media ${mobile} {
        background: transparent;
    }
`;

export const useDatepickerStyles = makeStyles({
    staticWrapperRoot: {
        maxWidth: '32rem',
        margin: '5rem auto 5rem',
        background: 'transparent',
        '& .MuiToolbar-root': {
            display: 'none'
        },
        '& .MuiPickersCalendar-week': {
            '& .MuiPickersDay-current': {
                fontWeight: 'bold',
            },
        },
        '& .MuiPickersCalendarHeader-switchHeader': {
            '& .MuiButtonBase-root': {
                background: 'transparent'
            }
        },
        '& .MuiPickersSlideTransition-transitionContainer': {
            '& > .MuiTypography-root': {
                fontWeight: 'bold'
            }
        },
        '& .MuiPickersCalendarHeader-daysHeader span': {
            fontWeight: 'bold',
            color: '#000',
            fontSize: '1.6rem'
        },
        '& .MuiPickersToolbar-toolbar': {
            background: 'transparent',
            '& .MuiPickersToolbarText-toolbarTxt': {
                color: '#000'
            }
        }
        
    }
}, {name: 'MuiPickersStaticWrapper'});

export const LogWrapper = styled.div`
    background: white;
    min-height: 52rem;
    border-radius: 9rem 9rem 0px 0px;
    
`;

export const DaysContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 7rem 5%;
    max-width: 189rem;

    @media (max-width: 1500px) {
        padding: 7rem 4rem;
    }
`;

export const DayColumn = styled.div`
    width: 19rem;

    @media (max-width: 1500px) {
        width: 17rem;
    }

    @media (max-width: 1285px) {
        width: 15rem;
    }
`;

export const HourText = styled.span`
    font-size: 1.6rem;
    font-weight: bold;
`;