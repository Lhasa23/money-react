import {useEffect, useRef} from 'react';

const useUpdate = (fn: Function, dep: any[]) => {
    const count = useRef(0)
    useEffect(() => {
        count.current += 1
    }, dep)
    useEffect(() => {
        if (count.current > 1) {
            fn()
        }
    }, [count, fn])
}

export default useUpdate
