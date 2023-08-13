import { useFormik } from 'formik';
import axios from "axios";
import { useState } from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../config';

const validate = values => {

    const errors = {};
    if (!values.activityName) {
        errors.activityName = 'Nombre de Actividad Requerido';
    } else if (values.activityName.length < 3) {
        errors.activityName = 'El nombre del proyecto debe tener al menos 3 caracteres';
    }

    if (!values.dueDate) {
        errors.dueDate = 'Fecha Requerida';
    }
    return errors;
};


const ProjectForm = () => {
    let navigate = useNavigate();

    const [request, setRequest] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (valores) => {
        setRequest(false);
        setLoading(true);
        try {
            await axios.post(baseUrl + "/api/activity", valores);
            setRequest(200);
            navigate('/');

        } catch (e) {
            console.log("Error", e);
            if (e?.response?.status === 400) {
                setRequest(400);
            } else {
                setRequest(500);
            }
        }
        setLoading(false);
    };
    const formik = useFormik({
        validate,
        initialValues: {
            activityName: '',
            dueDate: '',
            status: 'Backlog',
        },
        onSubmit,
    });
    return (
        <Paper sx={{ p: 4, mt: 3 }}>
            <Grid container spacing={2} component='form' onSubmit={formik.handleSubmit}>
                <Grid item xs={12}>
                    <label style={{ marginRight: "10px" }} htmlFor="project">Project</label>
                    <input
                        id="project"
                        name="activityName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.activityName}
                    />
                    {formik.errors.activityName ? <Typography sx={{ color: 'error.main' }}>{formik.errors.activityName}</Typography> : null}
                </Grid >
                <Grid item xs={12}>
                    <label style={{ marginRight: "10px" }} htmlFor="dueDate">Due Date</label>
                    <input
                        id="dueDate"
                        name="dueDate"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.dueDate}
                    />
                    {formik.errors.dueDate ? <Typography sx={{ color: 'error.main' }}>{formik.errors.dueDate}</Typography> : null}
                </Grid >
                <Grid container justifyContent='center' item xs={12}>
                    <Button variant='contained' type="submit">Plan Project</Button>
                </Grid >
            </Grid>
        </Paper >
    );
};

export default ProjectForm;
