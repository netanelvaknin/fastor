import {makeStyles} from '@material-ui/core/styles';

export const useTimePickerStyles = makeStyles((theme) => ({
    input: {
        width: '100px',
        height: '30px',
        borderRadius: '28px',
        background: 'white',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.08)',
        '& .MuiInputBase-input': {
            textAlign: 'center'
        }
    }
}));