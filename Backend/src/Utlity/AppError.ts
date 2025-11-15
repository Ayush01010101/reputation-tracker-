class AppError extends Error {
  statusCode: number;
  data?: object;

  constructor(message: string, statusCode: number, data?: object) {
    super(message); // Error class ko message pass karo
    this.statusCode = statusCode;
    this.data = data;
    this.name = 'AppError'; // Error ka naam
    Error.captureStackTrace(this, this.constructor); // Stack trace ke liye
  }
}

export default AppError;
