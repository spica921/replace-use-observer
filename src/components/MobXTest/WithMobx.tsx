import React from "react";
import { Model } from "./Model";
import { useObserver } from "mobx-react";
interface IWithMobXProps {
    model: Model;
}

export const WithMobX: React.FC<IWithMobXProps> = props => {
    const count = useObserver(() => props.model.count);
    return (<div>{count}</div>)
}