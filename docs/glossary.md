---
id: glossary
title: Glossary
---

<dl>
  <dt><a name="adabas">ADABAS</a></dt>
  <dd>
    A database system system that, in Los Angeles County, runs on the mainframe
    and stores the original versions of the CJIS tables.  Direct access is only
    possible through 3270 terminal emulation.  Table names are 5-digit numbers.
    '32757', for example, is the charge table.
  </dd>
  <dt><a name="apigw">API Gateway</a></dt>
  <dd>
    An AWS reverse-proxy service specialized to web API implementations.
    It handles request throttling, access control and service routing.
    In some cases it may perform message transformation.
  </dd>
  <dt><a name="aws">AWS</a></dt>
  <dd>
    Amazon Web Service - A cloud computing service providing virtualized infrastructure and
    application services.
  </dd>
  <dt><a name="bearer">Bearer Token</a></dt>
  <dd>
    An <a href="https://tools.ietf.org/html/rfc6750">RFC specification</a>
    for transmission of security tokens in an HTTP <tt>Authorization</tt> header.
  </dd>
  <dt><a name="cjis">CJIS</a></dt>
  <dd>
    Criminal Justice Information Service – A catch-all term that is applied to many things
    related to criminal justice.  The original CJIS comes from
    the <a href="https://www.fbi.gov/services/cjis">FBI</a>.
  </dd>
  <dt><a name="cors">CORS</a></dt>
  <dd>
    Cross Origin Resource Sharing - A browser security arrangement by which an HTTP endpoint
    signifies is acceptance
    of <a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross-origin</a> requests
    through predefined HTTP header values.
    A cross-origin request is JavaScript loaded from one origin (server) that invokes HTTP
    requests on another server.  While often needed in a web API environment, this behavior
    was restricted by most browsers due to security concerns.  CORS is a protocol supported
    by most modern browsers that allow this behavior for certain API endpoints.
  </dd>
  <dt><a name="docker">Docker</a></dt>
  <dd>
    An infrastructure virtualization technology that leverages 
    Linux <a href="https://en.wikipedia.org/wiki/Cgroups">cgroups</a> and <a href="https://en.wikipedia.org/wiki/Linux_namespaces">namespaces</a> to
    isolate and virtualize certain aspects of the OS kernel.
    It's more efficient than traditional OS virtualization techniques
    by not attempting to virtualize an <i>entire</i> kernel.
  </dd>
  <dt><a name="jwt">JWT</a></dt>
  <dd>
    JSON Web Token is a token format designed for use by web applicatons.
    Its decoded format is JSON.  Its encoded format, Base64url, is a slight 
    variation of Base64 this is safer for transmission in HTTP headers and
    URLs.
  </dd>
  <dt><a name="lea">LEA</a></dt>
  <dd>
    Law Enforcement Agency - A generic term for an agency involved in law enforcement.
    This includes police agencies, probation offices, school police, coroner, etc.
  </dd>
  <dt><a name="mariadb">MariaDB</a></dt>
  <dd>
    MariaDB is a fork of MySQL created by the original MySQL developers after MySQL
    was purchased by Oracle.  MySQL client libraries work for both MySQL and MariaDB.
  </dd>
  <dt><a name="nosql">NoSQL</a></dt>
  <dd>
    A type of document database where the primary elements are "documents" instead table rows.
    It allows for loose structural constraints.  This can be good or bad depending on
    the context.
  </dd>
  <dt><a name="sns">SNS</a></dt>
  <dd>
    Simple Notification Service – An asynchronous event-notification
    service offered on AWS.  Message producers publish messages to SNS
    topics.   Message consumers subscribe to topics and receive the
    message.
  </dd>
  <dt><a name="vpc">VPC</a></dt>
  <dd>
    Virtual Private Cloud – A collection of public and/or private IP
    subnets managed as a single non-routable private subnet range.
    Subnets can be made publically accessible through assignment of
    network routing rules to an internet gateway.
  </dd>
</dl>
