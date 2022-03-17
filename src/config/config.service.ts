import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string = '.env') {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  isEnv(env: string) {
    return this.envConfig.ENV === env;
  }

  public get isDev() {
    return this.envConfig.ENV === 'development';
  }

  public get isProd() {
    return this.envConfig.ENV === 'production';
  }

  public get isTest() {
    return this.envConfig.ENV === 'test';
  }

  public get databaseType() {
    return this.envConfig.DATABASE_TYPE;
  }

  public get databaseHost() {
    return this.envConfig.DATABASE_HOST;
  }

  public get databasePort() {
    return Number(this.envConfig.DATABASE_PORT);
  }

  public get databaseUsername() {
    return this.envConfig.DATABASE_USERNAME;
  }

  public get databasePassword() {
    return this.envConfig.DATABASE_PASSWORD;
  }

  public get databaseName() {
    return this.envConfig.DATABASE_NAME;
  }

  public get jwtSecret() {
    return this.envConfig.JWT_SECRET_KEY;
  }

  public get googleauthClientId() {
    return this.envConfig.GOOGLEAUTH_CLIENT_ID;
  }

  public get googleauthClientSecret() {
    return this.envConfig.GOOGLEAUTH_CLIENT_SECRET;
  }

  public get googleauthRedirectUri() {
    return this.envConfig.GOOGLEAUTH_REDIRECT_URI;
  }
}