import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './module/student/student.module';

@Module({
  imports: [
    StudentModule,
    LoggerModule.forRoot({
      pinoHttp: {
        prettyPrint: {
          levelFirst: true,
          translateTime: 'SYS:standard',
          singleLine: true,
          ignore: 'hostname',
        },
        serializers: {
          err: (err) => {
            return err;
          },
          req: (req) => {
            return [req.method, req.url];
          },
          res: (res) => {
      
            return [res.statusCode];
          },
        },
        customSuccessMessage: function (res) {
          if (res.statusCode === 404) {
            return 'resource not found';
          }
          return 'success';
        },
        customErrorMessage: function (error, res) {
          return 'request errored with status code: ' + res.statusCode;
        },
        customAttributeKeys: {
          req: 'request',
          res: 'response',
          err: 'error',
          responseTime: 'timeTaken',
        },
        customLogLevel: function (res, err) {
          if (res.statusCode >= 400 && res.statusCode < 500) {
            return 'warn'
          } else if (res.statusCode >= 500 || err) {
            return 'error'
          }
          return 'info'
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
