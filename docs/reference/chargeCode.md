---
title: Charge Code Fields
sidebar_label: Charge Code Fields
---

This reference page is an attempt to track the owner and purpose
of each attribute of the charge code table (`32757` in ADABAS).

## Fields

|Name           |Owner |Description            |
|---------------|------|-----------------------|
|`code`         |DA    |State code where charge is located.  Only state codes are included; no municipal or county ordinance violations are included.
|`statute`      |DA    |Charge number assigned by the state.
|`literal_id`   |DA    |Three character description of specifics associated withe the same charge.  Known as *form number* in the DA.
|`degree`       |DA    |Identifies the degree of a specific charge.  Data originated from penal code.
|`offense_level`|DA    |Felony, misdemeanor, infraction or other.
|`full_description`|DA |A detailed description of a specific charge.
|`short_description`|DA|A general description of charge.
|`bcs_class_code`|DOJ?|BCS code assigned by the state to group charges by offense.  Values in this field reference table `32758`.  The BCS code is a "three-digit string" (sic). A leading `0` is used when needed to make this so.
|`reduce_flag`  |DA    |Whether the charge is reducible to a misdemeanor.  This should be a bolean value; but currently there are at least three values: `Y`, `N` and blank.
|`violent_flag` |DA    |Whether the charge is classified as a violent offense.
|`register_flag`|DA    |Whether the charge requires a defendant to register with a local law enforcement agency for reasons related to arson, narcotics and sex.
|`destruct_flag`|Probation|Specific to Health and Safety code violations that require an agency to destroy a record after a period of time.
|`reporting_district`|Court|Abbreviation of state agency receiving reportable data on this charge.  Values in this field reference table `32768`.
|`bail_amount`|Court|Bail data from courts over 30 years ago.
|`bcs_hierarchy`|DOJ?|Pertains to seriousness of offense.  This comes from the BCS code listing.
|`eff_date`   |DA    |Date charge becomes effective.
|`exp_date`   |DA    |Date charge is expired.
|`reason`     |DA    |Reason for expiring a charge.
|`composite_key`|    |Generated from `code`, `statute`, `literal_id`, `degree`, `offense_level` and `exp_date`.
|`alt_composite_key`|    |Generated from `code`, `statute`, `literal_id`, `degree`, `offense_level` and `exp_date`.
|`state_cjis_code`|CCHRS|Requested by CCHRS in 2002.
|`custody_code`|Probation|
|`sentence_range`|DA     |
|`template_id`|DA   |



## Sources

* __UCC__ - Uniform Crime Charging Manual, February 2020
* __CJIS Standards__ - ISAB Application and System Development Guidelines, 1993, Page II-36
