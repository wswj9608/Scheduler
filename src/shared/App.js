import React from "react";
import {ConnectedRouter} from 'connected-react-router'
import { BrowserRouter, Route } from "react-router-dom";
import { history } from '../redux/configStore';

import { actionCreators as schActions } from "../redux/modules/schedule";
import {useSelector, useDispatch} from 'react-redux'


import Calendar from "../pages/Calendar";
import SchDetail from '../pages/SchDetail'
import SchCreate from '../pages/SchCreate'
import { Button } from "../elements";

function App() {
  const dispatch = useDispatch()
  const sch_list = useSelector((state) => state.schedule.sch_list)
  const show_end = useSelector((state) => state.schedule.show_end)


  const onEndSch = () => {
     if(!show_end){
      dispatch(schActions.showSch(true))
     }else{
      dispatch(schActions.showSch(false))
     }
  }


  return (
    <React.Fragment>
    
    <ConnectedRouter history = {history}>
      
      <Route path = '/' component = {Calendar} exact/>
      <Route path = '/detail/:sch_id' component = {SchDetail} exact/>
      <Route path = '/create' component = {SchCreate} exact/>
      <Button short _onClick = {onEndSch}>{show_end ? '모든일정 보기' : '완료일정 보기'}</Button>
      <Button is_float _onClick = {()=>{history.push('/create')}}>+</Button>
    </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
