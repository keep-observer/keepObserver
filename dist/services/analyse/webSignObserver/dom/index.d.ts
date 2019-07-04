export declare var initPatchNodeEvent: () => boolean;
export declare var addNodeEventPatchHandle: (el: any, handleFn: any) => () => any;
export declare var removeNodeEventPatchHandle: (el: any, handleFn: any) => any;
export declare var addNodeObserverListener: (nodeInfo: any, handleFn: any) => false | (() => void);
