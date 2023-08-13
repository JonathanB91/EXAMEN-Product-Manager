import axios from "axios";
import { Button } from "@mui/material";
import { baseUrl } from '../config';

const colores = {
    'Start Project': 'warning',
    'Move to Complete': 'success',
    'Remove Project': 'error',
}

const ButtonState = ({ title, select, id, callback }) => {
    const HandleChange = async () => {
        try {
            if (select === "Remove") { await axios.delete(baseUrl + "/api/activity/" + id) }
            else {
                await axios.put(baseUrl + "/api/activity/" + id, { status: select });
            }
            callback && callback();
        } catch (e) {
            console.log("Error", e);
            if (e?.response?.status === 400) {

            } else {

            }
        }
    }
    return (
        <div>
            <Button variant='contained' color={colores[title]} onClick={HandleChange}>{title}</Button>
        </div>
    )
}

export default ButtonState;