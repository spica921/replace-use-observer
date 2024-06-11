import { Model } from "./Model";
import { WithMobX } from "./WithMobx"
import { WithoutMobX } from "./WithoutMobx"

const model = new Model();

export const MobXTest = () => {
    return (<div>
        <div>
            <WithMobX model={model} />
            <WithoutMobX model={model} />
        </div>

        <div className="card">
            <button onClick={() => model.incriment()}>
            </button>

        </div>
    </div>)
}