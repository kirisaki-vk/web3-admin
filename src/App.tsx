import {Admin, Resource, EditGuesser, ListView, ShowGuesser, ListGuesser} from 'react-admin';
import { dataProvider } from './dataProvider';
import {UserList} from "./resources/UserRessource";
import {PostList, PostShow} from "./resources/PostsResource";
import {FaCircleUser} from "react-icons/fa6";
import {BsFilePost} from "react-icons/bs";
import {MdComment} from "react-icons/md";

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource icon={FaCircleUser} name={"users"} show={ShowGuesser} list={UserList} recordRepresentation={"name"}/>
        <Resource icon={BsFilePost} name={"posts"} show={PostShow} list={PostList}/>
        <Resource icon={MdComment} name={"comments"} hasCreate list={ListGuesser} show={ShowGuesser} />
    </Admin>
);