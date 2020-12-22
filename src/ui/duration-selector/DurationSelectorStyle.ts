import styled from 'styled-components/macro';

export const DurationSelectorContainer = styled.div`
    .rdp-column-container:nth-child(3) {
        display: none;
    }

    .rdp-text-overlay div {
        margin-right: 2rem;
    }

    .rdp-reticule {
        border-top: 2px solid ${props => props.theme.palette.primary.main};
    }
`;