import 'dotenv/config';

const env = process.env;

export class Config {
    connectionString:(string | undefined) = env.CONNECTION_STRING;
    environment:(string | undefined) = env.NODE_ENV;
    secret: (string | undefined) = env.TOKEN_SECRET;
    port:number = env.NODE_ENV == 'production'? 80 : 3000;
}
