# techAaditi-backend

### Running the app

Install docker desktop:

[docker](https://docs.docker.com/engine/install/)

Postgres DB docker:

```bash
docker-compose up -d
```
```bash
wsl --install
```

Install pnpm:

```bash
npm install -g pnpm
```

Install the dependencies:

```bash
pnpm install
```

Drizzle migrate:

```bash
pnpm run generate
pnpm run migrate
```


Run the query to create test user:

```sql
INSERT INTO public.users
("name", email, is_admin, "password", is_verified, salt, code)
VALUES('Test', 'test@gmail.com', true, '$argon2id$v=19$m=65536,t=3,p=4$5cMjvKGsPYKzWlE0UZte82ZCkWnMBqg9kwpy5e8/9ug$ByQAhQLZy24I7iZvAepkUlt2tAYXe2233KXI1ikynig', true, 'e5c323bca1ac3d82b35a5134519b5ef366429169cc06a83d930a72e5ef3ff6e8', '25dbc6b03e23210a5c01d15573fdb1da26e50d2eeb10d67ccd7ba77c955c723b')
ON CONFLICT (email) DO NOTHING;
```

Run the development server:

```bash
pnpm dev
```

Test Credentials:

test@gmail.com
Test@123