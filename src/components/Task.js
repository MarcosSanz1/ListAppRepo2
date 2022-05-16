import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { QueryBuilder} from '@mui/icons-material';

export const Task = props =>{

    // Aquí tengo que recoger el titulo, descripción, fecha y el estado de la tarea.
    // Al editar la tarea, sacará radioButtons para cambiar el estado
    // Necesito usar un onClick para cambiar el valor de una booleana "editar"
    // La card y el contenido cambiará cuando la booleana "editar" este a true.
    // La etiqueta / notificación 

    const [ edit, setEdit ] = useState(false)

    const [ completeTask, setCompleteTask ] = useState(false)

    const [ fewdays, setFewDays ] = useState(false)

    const due = 2

    const tasks = {
        width: '27%',
        // height: 300,
        marginBottom: '2%',
        flexDirection: 'column',
        // justifyContent: 'center',
    }

    const taskStyle1 = {
        display: 'flex',
        flexDirection: 'column',
        height: 300,
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 6,
        border: 'solid 1px gray',
        backgroundColor: '#FFFFFF'
    }
    const taskStyle2 = {
        display: 'flex',
        flexDirection: 'column',
        height: 300,
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 6,
        border: 'solid 1.5px blue',
        backgroundColor: '#FFFFFF'
    }

    const borderBlue = {
        border: 'solid 1.5px blue'
    }
    
    const positionDate = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 7,
        fontSize: 18,
    }

    const alertStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 2,
        paddingRight: 10,
        fontSize: 12,
        textAlign: "end"
    }

    const stateTaskStyle = {
        display: 'flex',
        fontSize: 25, 
        textAlign: "center",
        justifyContent: "center",
        paddingTop: 50
    }

    return(
        <div style={tasks}>
            {!edit ? 
            <Card style={taskStyle1} onClick={() => setEdit(!edit)}>
                {fewdays && 
                    <CardHeader style={alertStyle}
                    subheader={`Due in ${due} days`}
                    action={
                        <QueryBuilder style={{color: 'orange'}} />
                    }
                />
                }
                <CardContent style={{margin: 3}}>
                    <Typography gutterBottom variant="h4" component="h2">
                        <b>{props.name}</b>
                    </Typography>
                    {!completeTask ?
                        <Typography style={stateTaskStyle} color="blue" component="p">
                            <b>In Progress</b>
                        </Typography>
                        :
                        <Typography style={{fontSize: 25, textAlign: "center", paddingTop: 40 }} color="green" component="p">
                            <b>Completed</b>
                        </Typography>
                    }
                </CardContent>
                <Typography style={positionDate} color="textSecondary" component="p">
                        12 May 2022
                </Typography>
            </Card> :
            <Card style={taskStyle2} onClick={() => {setEdit(!edit); setCompleteTask(!completeTask); setFewDays(!fewdays)}}>
                <CardHeader style={alertStyle}
                    subheader={`Due in ${due} days`}
                    action={
                        <QueryBuilder style={{color: 'orange'}} />
                    }
                />
                <CardContent style={{margin: 3}}>
                    <Typography gutterBottom variant="h4" component="h2">
                        <b>{props.name}</b>
                    </Typography>
                    <Typography style={{fontSize: 20, wordWrap: 'break-word'}} color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <Typography style={positionDate} color="textSecondary" component="p">
                        12 May 2022
                </Typography>
            </Card>
            }
        </div>
    )
}

// {padding: 2, float: 'right', fontSize: 12}