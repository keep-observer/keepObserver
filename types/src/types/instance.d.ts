import PipeUser from '../instance/pipe/PipeUser/index';
export declare type Provider = new (...args: any[]) => {
    apply?: (pipe: PipeUser, config: any) => any;
};
