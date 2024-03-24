import { createContext, useContext } from 'react';

type CacheKeyValue = {
  postsKey: string;
};

export const CacheKeyContext = createContext<CacheKeyValue>({
  postsKey: '/pai/posts',
});

export const useCacheKeys = () => useContext(CacheKeyContext);
