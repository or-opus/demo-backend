import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { StepsModule } from "./modules/steps/steps.module";
import { Step } from "./modules/steps/entities/step.entity";


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.databaseType,
          host: configService.databaseHost,
          port: configService.databasePort,
          username: configService.databaseUsername,
          password: configService.databasePassword,
          database: configService.databaseName,
          entities: [Step],
          synchronize: false,
        } as TypeOrmModuleAsyncOptions;
      },
    }),
    ConfigModule,
    StepsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
