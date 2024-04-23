import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import SliderButton from './SliderButton';
import SliderText from './SliderText';
import styles from '../utils/styles';

interface SliderProps {
    max: number;
    current: number;
}
const Slider = (props: SliderProps) => {

    const { max, current } = props;
    console.log("this is max: ", max);
    console.log("this is current: ", current);
    return (
        <Box sx={styles.Slider}>
            {/* true = go forwards */}
           <SliderButton top={true} end={current + 1 === max} />
           <SliderText top={true} current={current} max={max} />
                <Divider />
            {/* false = go backwards */}
            <SliderText top={false} current={current} max={max} />
            <SliderButton top={false} end={current === 0} />
        </Box>
    )
};

export default Slider;