export function logger(req: any, res: any, next: Function) {
  console.log('Request logger functional');
  next();
}