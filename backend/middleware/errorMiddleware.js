const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  //   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  //   res.status(statusCode);
  //   res.json({
  //     message: error.message,
  //     stack: process.env.NODE_ENV === "production" ? null : error.stack,
  //   });

  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = error.message;

  if (error.message === "Cart is empty" && error.kind === "ObjectId") {
    message = "Product not found";
    statusCode = 400;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};

export { notFound, errorHandler };
