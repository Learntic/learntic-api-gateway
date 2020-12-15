import { getAllGuests } from "./logic";
import { guestPoint} from './server';

const URL = `http://${process.env.GUEST_URL}:${process.env.GUEST_PORT}`;

const resolvers = {
    Query:{
        allGuests: (_) =>{
            let response = getAllGuests(`${URL}/${guestPoint}`);
            return response;
        }
    }
}

export default resolvers;