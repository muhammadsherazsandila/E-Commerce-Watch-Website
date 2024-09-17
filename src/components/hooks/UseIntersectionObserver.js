// hooks/useIntersectionObserver.js
import { useInView } from 'react-intersection-observer';

export function UseIntersectionObserver(options) {
    const { ref, inView, entry } = useInView(options);
    return { ref, inView, entry };
}
