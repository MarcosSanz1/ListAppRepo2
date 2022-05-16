import React from "react";
import {TaskContainer}  from './TaskContainer'
import {Funcionalities}  from './Funcionalities'
import {ProvisionalTasks} from './ProvisionalTasks'
import { Task } from "./Task";



export const Layout= ()=>{
    const layout = {
        width: '100%',
        backgroundColor:'#e5e4e2'
    }

    const valor =false

    return(
        <div style={layout}>
            <Funcionalities/>

            {/* <TaskContainer  /> */}
            {/* <Task /> */}
            <ProvisionalTasks />
        </div>
    )
}

