import { List, ListItem, ListItemText, Box, Typography } from '@mui/material';
import { Cases } from '../utils/API';
import styles, { functionalStyles } from '../utils/styles';
import { sortContainers, reverseContainers, loadContainers } from '../utils/containerSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import {faSort} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Selector from './Selector';
const TitleBar = () => {

    const sortParam = useAppSelector((state => state.container)).sorted;
    const dispatch = useAppDispatch();
    const handleClick = (param: keyof Cases) => {
        
        if(param === sortParam){
            dispatch(reverseContainers())
        } else {
            dispatch(sortContainers(param));
        }
    };

    return (
        <>
            <TitleBarItem title={'Image'} unsortable/>
            <TitleBarItem title={'Name'} onClick={()=>handleClick('name')} />
            <TitleBarItem title={'ROI (%)'} onClick={()=>handleClick('roi')} />
            <TitleBarItem title={'Price'} onClick={()=>handleClick('price')} />
        </>
    )
};

interface TitleBarItemProps {
    title: string;
    unsortable?: boolean;
    sorted?: boolean;
    onClick?: () => void;
}

const TitleBarItem = (props: TitleBarItemProps) => {
    const {title, unsortable, onClick} = props;
    const [hidden, setHidden] = useState<boolean>(true);
    return (
        <Box
            onMouseEnter={() => setHidden(false)}
            onMouseLeave={() => setHidden(true)}
            onClick={onClick}
            sx={styles.TitleBarItem}
        >   
            {!unsortable && (
                <Box sx={functionalStyles.TitleBarItemSortIcon(hidden)}>
                    <FontAwesomeIcon icon={faSort} />
                </Box>
            )}
            <Typography sx={styles.TitleBarTitle}>{title}</Typography>
        </Box>
    )
}

const PreviewListItem = (props: Cases) => {
    const { name, image, price, roi } = props;
    return (
        <ListItem 
            disablePadding
            divider
            sx={styles.ListItem}
        >
           { /* TODO image for the case goes here */ }
           <Box sx={styles.FlexChild}>           
           <img src={image} alt={name} height={'60rem'}/>
           </Box>
            <ListItemText 
                primary={name}
                primaryTypographyProps={{fontWeight: 'bold'}}
                sx={styles.FlexChild} 
            />
            <ListItemText primary={roi} sx={styles.FlexChild}  />
            <ListItemText primary={price} sx={styles.FlexChild}/>
        </ListItem>
    )
}

const ContainerList = () => {

    const dispatch = useAppDispatch();
    const containers = useAppSelector((state => state.container))

    useEffect(() => {
        dispatch(loadContainers())
    }, []);

    return (
        <List sx={styles.List}>
            <Selector />
            <ListItem 
                disablePadding 
                divider 
                sx={styles.StickyBar}
            >
            <TitleBar />
            </ListItem>
            {containers.value.length ? (
            <>
                {containers.value.map((i) => {
                    return ( <PreviewListItem key={i.name} {...i}/> );
                })}
            </>
            ) : (
                <p>{containers.status}</p>
            )}
        </List>
    );
};

export default ContainerList;