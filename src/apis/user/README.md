## User api

```typescript
type User {
  username: string,
  createdon: number,
  active: boolean,
  fullname: string | null,
  email: string,
  phone: string | null,
  mobilephone: string | null,
  blocked: boolean,
  blockeduntil: number | null,
  blockedafter: number | null,
  logincount: number | null,
  lastlogin: number | null,
  thislogin: number | null,
  failedlogincount: number,
  dob: number | null,
  gender: 'male' | 'female' | null,
  address: string | null,
  country: string | null,
  city: string | null,
  state: string | null,
  zip: string | null,
  fax: string | null,
  photo: string | null,
  comment: string | null,
  user_color: string,
}
```

#### GET api/user/me

params:
```typescript
none
```

response:
```
type Response {
  success: boolean,
  object: User,
}
```

#### GET api/user/login

params:
```typescript
{
  username: string,
  email: string,
  password: string,
  rememberme: boolean,
}
```

response:
```
type Response {
  success: boolean,
  object: User & { token: string },
}
```

#### GET api/user/logout

params:
```typescript
none
```

response:
```
type Response {
  success: boolean,
}
```

#### GET api/user/forgot

params:
```typescript
{
  email: string,
}
```

response:
```
type Response {
  success: true,
}
```

#### GET api/user/register

params:
```typescript
{
  email: string,
  fullname: string,
  mobilephone: string,
  password: string,
  confirmpassword: string,
}
```

response:
```
type Response {
  success: boolean,
  object: User & { token: string },
}
```

#### GET api/user/update

params:
```typescript
{
  email: string,
  fullname: string,
  mobilephone: string,
  address: string,
  description: string,
}
```

response:
```
type Response {
  success: boolean,
  object: User,
}
```
