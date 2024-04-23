import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { loadArticles } from '../utils/articleSlice';
import Box from '@mui/material/Box';
import Article from './Article';
import {functionalStyles} from '../utils/styles';
import { useEffect } from 'react';
import Slider from './Slider';

const ArticleFeed = () => {
    const dispatch = useAppDispatch();
    const articles = useAppSelector((state => state.article));

    useEffect(() => {
        dispatch(loadArticles())
    }, []);

    return articles.value.length? (
        <>
        <Box sx={functionalStyles.ArticleContainer(articles.value.length)}>
            {articles.value.map((i) => {
                return (
                     <Article key={i.title} {...i} {...{current: articles.current, max: articles.value.length}}/>
                )
            })}
            <Slider current={articles.current} max={articles.value.length}/>
            <Box sx={functionalStyles.ArticleCover(articles.value.length)}/>
        </Box>
        </>
    ) : (
        <p>{articles.status}</p>
    )
}

export default ArticleFeed;