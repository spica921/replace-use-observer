/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {  useInsertionEffect, useRef, useState } from "react";
import { Model } from "./Model";
import { autorun, reaction } from "mobx"
interface IWithoutMobXProps {
    model: Model;
}

export const WithoutMobX: React.FC<IWithoutMobXProps> = props => {
    const count = useObserver(() => ({ k: props.model.count }));
    console.log(count)
    return (<div>{count.k}</div>)
}

// eslint-disable-next-line react-refresh/only-export-components
export function useObserver22<T>(func: () => T) {
    const [values, setValues] = useState<T>(func())
    useRef(autorun(() => {
        const nextValue = func() as any;

        setValues(old => {
            console.log(nextValue, old);
            if (old === nextValue) {

                console.log("p1");
                return old;
            }

            if (typeof nextValue === "object") {

                if (Object.entries(nextValue || {}).every(([k, v]) => (old as any || {})[k] === v)) {

                    console.log("p2");
                    return old
                }
            }

            console.log("p3");
            return nextValue
        })
    }, { delay: 20 }))

    return values;
}

const useObserver = <T extends () => any>(hook: T): ReturnType<T> => {
    const [hookResult, setHookResult] = useState(() => hook());
  
    useInsertionEffect(() => {
      // Initialize the reaction
      const disposer = reaction(
        () => hook(), // Track the observables used in the hook
        (result, _reaction) => {
        console.log("aaa")
          setHookResult(result); // Update the state with the new hook result
        }
      );
  
      // Cleanup the reaction
      return () => disposer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependencies array ensures this effect runs only once
  
    return hookResult;
  };
