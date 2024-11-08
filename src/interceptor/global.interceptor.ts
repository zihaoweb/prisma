import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
interface Response<T> {
  code: number;
  message: string;
  data: T;
}
@Injectable()
export class GlobalInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        return {
          code: 0, // 0 表示成功
          message: 'ok',
          data,
        };
      })
    );
  }
}
