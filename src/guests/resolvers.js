import { getAllGuests } from "./logic";
import {url, port, guestPoint} from './server';

const URL = `http://${url}:${port}`;

const resolvers = {
    Query:{
        allGuests: (_) =>{
            let response = getAllGuests(`${URL}/${guestPoint}`);
            return response;
        }
    }
}

export default resolvers;