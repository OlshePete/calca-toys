'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { ChildrenComponentProps } from '@/types';

export function StoreProviders({ children }:ChildrenComponentProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}