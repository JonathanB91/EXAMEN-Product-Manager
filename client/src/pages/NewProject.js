import Header from "../components/header";
import ProjectForm from "../components/projectForm";
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

const NewProject = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid container alignItems='center' flexDirection='column' justifyContent='center' item xs={12}>
                    <Header />
                </Grid>
                <Grid container justifyContent='center' item xs={12}>
                    <ProjectForm />
                </Grid>
            </Grid>
        </Container>
    )
}

export default NewProject;