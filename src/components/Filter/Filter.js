import React, { useContext } from 'react';
import Buttons from '../buttons/Buttons';
import { ActionApp } from '../../reduce/ActionApp';
import { AlertMassage } from '../../Context/AlertContextProvider';

const Filter = () => {
    const {dispatch} = useContext(AlertMassage)
    return (
        <div className='btn-group'>
            <Buttons className="btn btn-primary" clickHander={()=>{
                dispatch({type:ActionApp.FILTER_TYPPE,payload:'all'})
            }}>All</Buttons>
            <Buttons className="btn btn-primary" clickHander={()=>{
                dispatch({type:ActionApp.FILTER_TYPPE,payload:"done"})
            }}>Done</Buttons>
            <Buttons className="btn btn-primary" clickHander={()=>{
                dispatch({type:ActionApp.FILTER_TYPPE ,payload:"undone"})
            }}>Undone</Buttons>
        </div>
    );
};

export default Filter;