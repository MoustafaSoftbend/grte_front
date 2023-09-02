import { useEffect } from "react";

const RenderDiffChecker = () => {
    useEffect(() => {
        if (typeof window === 'undefined') {
          // Server-side rendering
          console.log('Server-side rendering');
        } else {
          // Client-side rendering
          console.log('Client-side rendering');
        }
      }, []);
    
      return null;
}

export default RenderDiffChecker;