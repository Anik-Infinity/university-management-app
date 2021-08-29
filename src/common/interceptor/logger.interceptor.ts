import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  //logger : PinoLogger;
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    const now = Date.now();
    //console.log(`Before... ${Date.now() - now}ms`);
    //this.logger.logger(context.switchToHttp().getResponse()["statusCode"])
    return handler.handle().pipe(
      tap((data) => {
        //console.log(`After... ${Date.now() - now}ms`);
      }),
    );
  }
}
