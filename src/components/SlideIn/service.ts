import { ReactElement } from 'react';

let slideInComponent: ReactElement | null = null;

export const setComponent = (component: ReactElement) => slideInComponent = component;

export const getComponent = () => slideInComponent;
