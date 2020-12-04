---
id: overview
title: Infrastructure Overview
sidebar_label: 'Infrastructure Overview'
---

The following figure summarizes the 
[AWS](/docs/glossary#aws)
infrastructure components that
support the CJIS code table implementation.

![design diagram](/img/SystemDesign.svg)

Web API calls enter the system through
[API Gateway](/docs/glossary#apigw)
at the bottom left of the diagram.
The gateway verifies the API key and applies any quality
of service limits that are configured.
The request is forwarded through a 
[VPC](/docs/glossary#vpc) link
to a private IP on a network load balancer (LB).
The LB routes the request to an instance of a CJIS API
[docker](/docs/glossary#docker)
container.

The 
[Node.js](https://nodejs.org)
implementation within the
docker container processes the request and interacts with
the database as needed.
Notifications and audit records are issued asynchronously
through
[SNS](/docs/glossary#sns)
topics.

Certain operations require authentication.
The authorization API is located in a separate
subnet serviced by its own load balancer.
