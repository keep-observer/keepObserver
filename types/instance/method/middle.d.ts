import { middlesFn } from '../../types/middle';
export declare const useMiddle: (scopeName: string, middlesFn: middlesFn) => {
    [propName: string]: middlesFn[];
};
export declare const getRunMiddle: () => any;
