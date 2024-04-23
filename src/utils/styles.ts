import React, { useEffect, useState } from "react";
import { SxProps, Theme } from '@mui/material/styles';

const testing = '250px';
const width = window.innerWidth * .6;
const styles: Record<string, SxProps<Theme>> = {

    ArticleTitle: {
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: '20px',
        marginRight: '40px',
        color: 'text.primary',
        ":hover": {
            color: 'text.secondary'
        }
    },

    ArticleImage: {
        maxWidth: "40%",
        objectFit: 'fit',
        paddingLeft: '20px',
        paddingBottom: '20px'
    },

    BoxRow: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        '@media (max-width: 920px)': {
            position: 'fixed',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: '100'
          }
    },

    TitleBarItem: {
        display: 'flex',
        flexDirection: 'row',
        width: '25%',
        justifyContent: 'right',
        backgroundColor: '#fff'
    },

    TitleBarTitle: {fontWeight: 'bold', textAlign: 'right'},

    List: {
        paddingTop: '0',
        top: testing,
        borderRight: '1px solid',
        borderRightColor: 'secondary.main',
        borderLeft: '1px solid',
        borderLeftColor: 'secondary.main'
    },

    ListItem: {
        display: 'flex', 
        justifyContent: 'space-between', 
        textAlign: 'right',
        '&:hover': {
            backgroundColor: 'secondary.main'
        }
    },
    
    FlexChild: {flex: '1 1 0'},
   
    StickyBar: {
        position: 'sticky',
        left: '0',
        right: '0',
        top: '-1px',
        zIndex: '100',
    },

    Slider: {
        position: 'absolute',
        left: '880px',
        width: '40px',
        height: testing,
        backgroundColor: 'secondary.main'
    }
}

const functionalStyles: Record<string, (...args: any[]) => SxProps<Theme>> = {
    TitleBarItemSortIcon: (hidden: boolean) => ({
        display: hidden ? 'none' : 'block'
    }),

    SliderButton: (disabled: boolean) => ({
        width: '40px',
        height: '40px',
        border: 'none',
        padding: '0',
        backgroundColor: 'text.secondary',
        opacity: disabled ? '0.25' : '1.0'
    }),

    SliderText: (top: boolean) => ({
            color: top ? 'text.secondary' : 'text.primary',
            fontWeight: 700
    }),

    Article: (left: number, lastSlide: boolean, currentSlide: boolean) => ({
        border: 'none',
        borderRadius: '0',
        borderBottom: '1px solid',
        borderBottomColor: 'secondary.main',
        borderTop: '1px solid',
        borderTopColor: 'secondary.main',
        borderRight: lastSlide ? '1px solid' : 'none',
        borderRightColor: 'secondary.main',
        boxShadow: 'none', 
        width: '920px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: `${left}px`,
        transition: 'left 1s, opacity 1s',
        opacity: currentSlide ? '1.0' : '0.5'
    }),

    ArticleContainer: (numArticles: number) => ({
        height: testing,
        display: "block",
        position: "absolute",
        width: `${numArticles * 920}px`,
    }),

    ArticleCover: (numArticles: number) => ({
        left: `${920 * -(numArticles - 1) + 1}px`,
        position: 'absolute',
        backgroundColor: '#fff',
        borderRight: '1px solid',
        borderRightColor: 'secondary.main',
        height: testing,
        width: `${(numArticles - 1) * 920}px`
    }),

    SelectorCard: (first: boolean, cases: boolean) => ({
        display: 'flex',
        flex: '0 1 50%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '.125rem',
        paddingTop: '.125rem',
        borderLeft: first ? 'none' : '1px solid',
        borderLeftColor: 'secondary.main',
        color: 'secondary.main',
        backgroundColor: 'text.secondary',
        opacity: cases ? '1.0' : '0.5',
        // cursor: 'pointer',
        '@media (max-width: 920px)': {
          fontSize: '1.125rem',
          lineHeight: '2rem'
        }
    }),
};

export default styles;
export { functionalStyles };