import { useEffect } from 'react';

export const useDocumentTitle = (title) => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = title ? `${title} | Study Campus Malaysia` : 'Study Campus Malaysia - Your Education Journey';

        return () => {
            document.title = prevTitle;
        };
    }, [title]);
};
