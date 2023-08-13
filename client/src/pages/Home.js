import Backlog from "../components/Backlog";
import InProgress from "../components/InProgress";
import Completed from "../components/Complete";
import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";
import Typography from '@mui/material/Typography';


const Home = () => {
    const [inProgress, setInProgress] = useState(false);
    const [completed, setCompleted] = useState(false);

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid container justifyContent='flex-start' flexDirection='column' alignItems='flex-start' item xs={12}>
                    <Grid container justifyContent='center' flexDirection='column' alignItems='center' item xs={12}>
                        <Typography variant='h2'>Project Manager</Typography>
                    </Grid>
                    <Link to={'/newProject'}>Add New Project</Link>
                </Grid>

                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <Backlog update={inProgress} inProgress={setInProgress} />
                    </Grid>
                    <Grid item xs={4}>
                        <InProgress update={inProgress} setUpdate={setInProgress} completedUpdate={completed} setCompletedUpdate={setCompleted} />
                    </Grid>
                    <Grid item xs={4}>
                        <Completed completedUpdate={completed} setCompletedUpdate={setCompleted} />
                    </Grid>
                </Grid>
            </Grid >
        </Container >
    )
}



export default Home;