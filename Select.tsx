import React, {FunctionComponent, ReactNode, useState} from "react";
import styles from './Select.module.scss'
import cn from 'classnames'

interface SelectorProps{
    children?:ReactNode,

}
export const Selector:FunctionComponent = ( { }:SelectorProps ) =>{
    const [selectorStatus,setSelectorStatus] = useState(false)
    const [example,setExample] = useState('1 сутки')
    return(
        <>
        <div className={styles.wrapper}>
            <button type='button' className={cn(styles.selector, {
                [styles.selectorActive]: selectorStatus === true
            })} onClick={() => {
                setSelectorStatus(!selectorStatus)
            }}>{example} </button>

            {selectorStatus && (
                <div className={styles.selectorList}>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('1 сутки')
                        setSelectorStatus(false)
                    }}>
                        1 сутки
                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('2 суток')
                        setSelectorStatus(false)
                    }}>
                        2 суток
                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('3 суток')
                        setSelectorStatus(false)
                    }}>
                        3 суток
                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('4 суток')
                        setSelectorStatus(false)
                    }}>
                        4 суток
                    </button>
                    <button type="button" className={styles.selectorItem} onClick={() => {
                        setExample('5 суток')
                        setSelectorStatus(false)
                    }}>
                        5 суток
                    </button>
                </div>
            )}


        </div>
        </>
    )
}