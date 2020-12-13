import styled from 'styled-components/macro';
import {Card} from '../../ui/card/Card';
import {mobile, tablet} from '../../utils/screen-sizes';
import cardLabelBackground from '../../assets/backgrounds/card-label-background.svg';
import {IconButton} from '@material-ui/core';
import {Button} from '../../ui/index';

export const BusinessRegisterPageStyle = styled.div`
    min-height: 100vh;
    padding: 8.6rem 0 5rem;
    background: #F5F9FF;

    @media ${mobile} {
        padding: 0;
    }

    &:after {
        content: '';
        width: 50%;
        min-height: 100vh;
        background: #E4EFFF;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 0;

        @media ${mobile} {
            display: none;
        }
    }
`;


export const BusinessRegisterCard = styled(Card)`
    margin: 10rem auto;
    position: relative;
    z-index: 1;
    width: 72rem;
    min-height: 52rem;

    @media ${tablet} {
        width: 90vw;
    }

    @media ${mobile} {
        width: 100%;
        margin: 8.6rem 0 0;
        min-height: 100vh;
        padding-bottom: 1rem;
    }
`;

export const CardLabel = styled.div`
    margin-top: 8.5rem;
    height: 5rem;
    background: url(${cardLabelBackground});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
`;

export const ArrowRightButton = styled(IconButton)`
    &.MuiButtonBase-root {
        position: absolute;
        top: 3rem;
        right: 4rem;

        @media ${mobile} {
            top: .5rem;
        }
    }
`;

export const ContinueButtonStyle = styled(Button)`
    width: 28rem;
    height: 3rem;
`;