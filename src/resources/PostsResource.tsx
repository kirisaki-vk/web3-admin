import {Button, Datagrid, List, ReferenceField, Show, SimpleShowLayout, TextField, useRedirect} from 'react-admin';
import {MdComment} from "react-icons/md";

export const PostList = () => {
    const redirect = useRedirect();
    const clickHandler = (record) => {
        redirect(`/comments?filter={"postId":${record.id}}`)
    }
    return <List>
        <Datagrid rowClick={"show"}>
            <ReferenceField source="userId" reference="users" link={"show"}/>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <Button startIcon={<MdComment />} label={"Comments"} variant={"outlined"}/>
        </Datagrid>
    </List>
};

export const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <Button variant={"outlined"} startIcon={<MdComment/>} label={"See comments"}/>
        </SimpleShowLayout>
    </Show>
);