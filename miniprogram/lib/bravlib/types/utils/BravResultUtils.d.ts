import BravLibType from '../typings';
declare function successResult(): BravLibType.BravResult<void>;
declare function errorResult(code: BravLibType.BravErrorCode): BravLibType.BravResult<void>;
declare function successWithData<D>(data: D): BravLibType.BravResult<D>;
export { successResult, errorResult, successWithData };
