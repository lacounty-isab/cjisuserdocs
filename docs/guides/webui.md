---
id: webuiusage
title: Web UI User Guide
sidebar_label: 'Web UI'
---

The Web UI is a browser-based application that provides
user-friendly access to the code tables.  It fetches data
through AJAX requests to the underlying API.  In this way
it serves to

- verify the API itself
- verify content of the underlying tables
- update content of the underlying tables

As a UI product, it is somewhat rough around the edges.
We have no dedicated team to UI development and time spent
improving the UI has to be triaged against other demands of
application and infrastructure components.  Since the API
endpoints are [CORS](/docs/glossary#cors), anyone
can write their own client (browser-based, command-line or
workstation GUI) to work with the tables through the API.

## Home Page

### API Host Configuration

The Web UI homepage presents an **API Host Configuration**
panel.  This should default to the proper option, **Reverse Proxy**.
Other choices are there for developers who wish to test
alternative API hosts.  This will often fail unless
CORS is properly configured.

### Table Selection

From the home page, the most common selection is one of the table
options presented across the top:

* Charge Codes
* Charge Conversion
* LEA

Selecting one of these links will take you to the page dedicated
to its table.  Most of these pages have the form of a table of items
in the bottom half with a filter near the top to narrow a selection.

:::note
Sometimes the fetch will fail.  Until the retry/timeout logic is improved,
it is common to see an emtpy list.  Click the **Refresh** button and
a second fetch should succeed.
:::

### Login

A login is not necessary to view tables.  Only table modification
requires a login.  If you do need to login, select the
**Login Credentials** link.

## Login Page

The login page has its own API host configuration
panel since the security components are separately deployed from the
API components.  As with the API server selection, using the default
**reverse proxy** server is recommended.  Authentication tokens
are not trusted between environments.

All accounts are local to the application.  There is currently no
integration with the county's AD server.  Registering an account
and determining its privileges requires coordination with
CJIS code table administrators.

## Charge Codes

A screenshot of the Charge Code dashboard is shown below.

![Charge Code Page](/img/webuiChargeCode1.png)

The items in the list are colored by severity (felony, misdemeanor,
infraction, etc).  The filter has a few criteria on which to filter.
The right of the filter shows how many of the charges are actually
showing vs filtered in the list vs loaded in your browser's memory.

Double-clicking a row will pull up the detailed view.  The detailed
view allows for making changes.  Note the change submission will fail
if you are not authenticated.  This is indicated near the top of the page.


## Charge Conversion

A screenshot of the Charge Conversion dashbaord is shown below.

![Charge Conversion Page](/img/webuiChargeConversion1.png)

The left side is for browsing exising charge conversions.
The right is for adding or removing entries.

Generally, there is not much interest in this table aside from
using it to generate Cloverleaf charge code mappings.


## LEA Codes

A screenshot of the LEA dashboard is shown below.

![LEA Page](/img/webuiLea1.png)

The LEA page allows one to view a summary of LEA records subject
to restictions in the filter.  Double-clicking an entry in the list
will show a detailed view.  There is no update capabilties since
these are handled by the CCHRS LEA Master application.
