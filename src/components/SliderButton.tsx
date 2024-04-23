import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { functionalStyles } from '../utils/styles';
import { slideForward, slideBackward } from '../utils/articleSlice';
import { useAppDispatch } from '../utils/hooks';

interface SliderButtonProps {
    top: boolean;
    end: boolean;
}
const SliderButton = (props: SliderButtonProps) => {
    const { top, end } = props;
    const dispatch = useAppDispatch();

    const handleClick = (forward: boolean) => {
        if(forward){
            dispatch(slideForward())
        } else {
            dispatch(slideBackward())
        }
    }
    return (
        <ButtonBase 
            onClick={()=>handleClick(top)} 
            disableRipple={true} 
            disabled={end} 
            sx={functionalStyles.SliderButton(end)}
        >
            {/*TODO ugly*/}
            <Typography variant='h5'>
                {top ? '>' : '<'}
            </Typography>            
         </ButtonBase>
    )
}

export default SliderButton;