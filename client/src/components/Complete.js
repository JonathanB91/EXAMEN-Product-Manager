import { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonState from './ButtonState';
import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';
import moment from 'moment';
import Typography from '@mui/material/Typography';
import { baseUrl } from '../config';



const Completed = ({ completedUpdate, setCompletedUpdate }) => {
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const response = await axios.get(baseUrl + "/api/activity?select=Completed");
            setData(response.data);

        } catch (e) {
            console.log("Error", e);
            if (e?.response?.status === 400) {
                //setRequest(400);
            } else {
                //setRequest(500);
            }
        }
        // Peticion
    }

    useEffect(() => {

        getData();
    }, []);

    useEffect(() => {
        if (completedUpdate) {
            getData();
            setCompletedUpdate(false);
        }
    }, [completedUpdate]);
    return (
        <div>
            <Typography variant='h3' sx={{ color: 'success.main' }}>Completed</Typography>
            {data.map((item) => (
                <Paper sx={{ p: 4, mb: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>{item.activityName}</Grid>
                        <Grid item xs={12}>{moment(item.dueDate).format("L")}
                        </Grid>
                        <Grid item xs={12}>
                            <ButtonState id={item._id} select='Remove' title='Remove Project' callback={() => {
                                setCompletedUpdate(true);
                            }
                            } />
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </div>
    )
}

export default Completed;