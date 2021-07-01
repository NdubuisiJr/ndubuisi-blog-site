import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

export const BlogPage: FunctionComponent = () => {
    const id = useParams();
    return (
        <div>ID: {id}</div>
    );
};