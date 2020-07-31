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
A valid API key as described above is all that's needed for a GET request
to any API.
This is because data returned by the APIs are publically available
one way or another and there is no need to protect it.

### API Updates

Updates to a table **does** require authentication on behalf of the 
user or system submitting the update.  A system that submits updates
to a code table, will be allocated an HMAC secret with which to sign
the authentication token.