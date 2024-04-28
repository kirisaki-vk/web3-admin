
import {Admin, Resource, EditGuesser, ListView} from 'react-admin';
import { dataProvider } from './dataProvider';
import {UserList} from "./resources/UserRessource";
import {PostList} from "./resources/PostsResource";

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name={"users"} edit={EditGuesser} show={ListView} list={UserList}/>
        <Resource name={"posts"} show={ListView} list={PostList}/>
    </Admin>
);

    