import { useCallback } from 'react';


export const useScrollToId = () => {
return useCallback((id: string) => {
const target = document.getElementById(id);
if (target) {
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}, []);
};