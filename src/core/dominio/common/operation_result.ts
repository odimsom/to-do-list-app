export default class OperationResult<T> {
  public IsSuccess: boolean = false
  public Message: string = ''
  public Errors?: string[]
  public Data?: T

  constructor(isSuccess: boolean, message: string = '', errors?: string[], data?: T) {
    this.IsSuccess = isSuccess
    this.Message = message
    this.Errors = errors
    this.Data = data
  }

  public static Success<D>(data?: D, message: string = ''): OperationResult<D> {
    return new OperationResult<D>(true, message, [], data)
  }

  public static Failure<D>(errors: string[], data?: D, message: string = ''): OperationResult<D> {
    return new OperationResult<D>(false, message, errors, data)
  }
}
