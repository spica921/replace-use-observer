import { Suspense } from "react"

export const SaspenseTest: React.FC = () => {
    return <Suspense fallback="waiting..."><ThrowPromise /></Suspense>
}

const sleep = new Promise(resolve => setTimeout(resolve, 5000));

const ThrowPromise: React.FC = () => {
    return <div><button onClick={() => { throw sleep }}>call</button></div>
}