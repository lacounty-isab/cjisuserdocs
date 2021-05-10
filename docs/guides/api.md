---
id: apiusage
title: API Usage Guide
sidebar_label: 'API'
---

The available APIs and the interface specifications are available from from
the [main page](/).

## Environments

There are three environments hosted for CJIS APIs.

* __DEV__ - Generally available only to developers of APIs.  This
  environment is subject to unpredictable deployments and downtime.

* __TEST__ - The TEST environment is not as volatile as the DEV
  environment.  It is used to verify updates in an end-to-end fashion
  before promoted to PROD.  Data is replicated to TEST from PROD
  periodically; but not often enough to be guaranteed up-to-date.
  In order to test adds, updates and deletes, a few records may
  exist that are not legitimate.  These usually have conspicious
  values such as "test" in various fields.

* __PROD__ - The PROD environment is the system of record.

In general, developers of API clients may use PROD in their client
TEST environments for GET requests.  API requests that change data
should test against the TEST environment.

## Access Control

The following sections describe API access control.

### API Keys

All API calls require an API key.
An API key is generally granted to any county agency that requests one.
The API key serves serves as an accounting mechanism for enforcing rate 
limits between systems rather than as authentication for an individual.
Once an API key is obtained, it should
be included as the value of the `x-api-key` HTTP request header
for each request.

Note that an API key is valid for a single system in a single environment.

### GET Requests

No authentication is required for GET requests.
Only a valid API key is required for a GET request to most APIs.

### API Updates

Updates **do** require authentication on behalf of the 
user or system submitting the update.

## Access Tokens

Access tokens are formatted as [JWT](/docs/glossary#jwt) (JSON Web Token)
[bearer](/docs/glossary#bearer) tokens.  This means that the encoded JWT
is included in the `Authorization` HTTP request header in the following
way.

```
Authorization: Bearer <encoded token>
```

where `<encoded token>` is the encoded JWT.

### Claims

There are two sets of claims: *header* and *payload* claims.  The header
claim will be the following for asymmetric signatures.
```json
{
  "alg": "RS256",
  "typ": "JWT"
}
```

For symmetric signatures, the `alg` value will be `HS256`.

The payload claims will require the following properties,
listed below sample values.

```json
{
  "iss": "myidp",
  "sub": "e654321",
  "iat": 1629572400,
  "exp": 1629572500,
  "enabled": true,
  "scope": ['myscope']
}
```

* The issuer name must be registered with the application and populate
  the `iss` field for each token.

* The `sub` field is populated with the enumber or email address of the
  user on behalf of whom the request is sent.  This is a user that the
  issuer has already authenticated.  The issuer
  *asserts* the identity of the user.

* The `iat` field is the [epoch timestamp](https://www.epochconverter.com/)
  for the token creation time.

* The `exp` field is the [epoch timestamp](https://www.epochconverter.com/)
  for the token expiration time.

* The `enabled` field should always be `true`.  Otherwise the user will
  be rejected as a disabled user.

* The `scope` is an array of scope names.  Consult with an administrator
  for the scope you client is allowed to assert.  This may require the
  definition of a new scope.

It's important to understand that just because your client is *allowed*
to assert a certain range of scopes doesn't mean your client should
include them all for each user.
The client is responsible for only asserting scopes
appropriate for the asserted user.

### Signatures

Anyone can create a token asserting a user.
But the token is only accepted if
it contains a valid signature of type `RS256` or `HS256`.


#### RS256

An `RS256` signature uses asymmetric keys and is the preferred
algorithm for signing CJIS Tables JWTs.
Generate an RSA key pair in PEM format.

:::tip
You **do not need** a CA, such as Verisign or Komodo, to sign your
JWT-signing certificate.  A self-signed certificate works well in
this context.
:::

If you're using `openssl` to generate your key pair, you may use the
following steps as a guide.


```console
openssl genrsa -out my-key.pem 2048
```

This creates a file `my-key.pem` containing your system's private
key.  Never distribute this.  It should only be stored on the client
machine and in a backup location.

Generate the certificate containing the public key.
The following command will prompt you with several questions
about x509 attributes.

:::note
The `-days 1850` option in the command below means the
certificate will expire after 1,850 days (about 5 years).
You may choose whatever value you wish.  When your certificate
expires, you must generate a new one and distribute it to
applications that verify your signature.
:::

```console
openssl req -x509 -new -key my-key.pem -out my-cert.pem -days 1850
```

You may use whatever x509 attributes you wish.  The following list is
a guide.

```props
C=US
ST=California
L=County of Los Angeles
O=<your agency>
OU=<your department>
CN=<your application>
```

:::note
This is **not** an SSL certificate – there is no requirement
to make the `CN` the value of a DNS name.  It should be a name that
clearly identifies the system or application that signed the JWT.
:::note

#### HS256

If you wish to use a single secret key instead of public/private keys,
you may opt for HMAC (Hash Message Authentication Code).  It's best to
choose a string that is not easily grasped by a casual glance.
An example of good HMAC codes can be found at
https://www.grc.com/passwords.htm.
Check the field labeled **63 random alpha-numeric characters**.

Bad Sample
```
my hashcode for production
```

Good Sample
```console
P13wMGqxqXJ4FOPob3WePjYqfpFniRSpIg9Y59iQBIREdY8cOBA
```
