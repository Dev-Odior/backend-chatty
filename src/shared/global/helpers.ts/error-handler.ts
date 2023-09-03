import HTTP_STATUS from "http-status-codes";

export interface IErrorResponse {
  message: string;
  status: string;
  statusCode: number;
  serializeError(): IError;
}

export interface IError {
  message: string;
  status: string;
  statusCode: number;
}

export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract status: string;

  constructor(message: string) {
    super(message);
  }

  serializeError(): IError {
    return {
      message: this.message,
      status: this.status,
      statusCode: this.statusCode,
    };
  }
}

export class JoiRequestValidationError extends CustomError {
  statusCode: number = HTTP_STATUS.BAD_REQUEST;
  status: string = "Error";
  constructor(message: string) {
    super(message);
  }
}

export class BadRequestError extends CustomError {
  statusCode: number = HTTP_STATUS.BAD_REQUEST;
  status: string = "Error";
  constructor(message: string) {
    super(message);
  }
}
export class NotFoundError extends CustomError {
  statusCode: number = HTTP_STATUS.BAD_REQUEST;
  status: string = "Error";
  constructor(message: string) {
    super(message);
  }
}

export class NotAuthorizedError extends CustomError {
  statusCode: number = HTTP_STATUS.UNAUTHORIZED;
  status = "Error";
  constructor(message: string) {
    super(message);
  }
}

export class serverError extends CustomError {
  statusCode: number = HTTP_STATUS.SERVICE_UNAVAILABLE;
  status = "Error";
  constructor(message: string) {
    super(message);
  }
}

new serverError("There was a server error").serializeError();
