---
id: adabas
title: ADABAS Tables
sidebar_label: 'ADABAS Tables'
---

The CJIS tables are being migrated from [ADABAS](/docs/glossary#adabas)
tables.  This page provides cross reference information between ADABAS
tables and their CJIS Codes counterparts.

| ADABAS Table | Conventional Name | Comments              |
|--------------|-------------------|-----------------------|
| `32704` | Charge Conversion | PIX use only; no longer actively maintained in ADABAS. |
| `32726` | Special Allegations |  |
| `32742` | Allegations | Eventually will become part of charge code API as prescribed by Cal DOJ |
| `32751` | Juvenile Court Districts |  |
| `32754` | Court Dept/Div to District |  |
| `32756` | Arrest Agency | System of record is now CCHRS LEA Master; readonly copy provided by API. |
| `32757` | Charge Codes | Awaiting stands from Cal DOJ; meanwhile API exposes dump from ADABAS table. |
