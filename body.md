#Follow along: http://mattsayler.github.io/Automating_Feeder_Maps_Presentation

#_Automating_ Feeder Maps Using _Data Driven Pages_ and _Arcpy_

OR

![](./Images/OneMXDtoRule.png)

Matt Sayler
_Clark Public Utilities_

#Obligatory _Stats_ Slide

* Public Utility District
* Electric and Water
* ~185,000 Electric Meters
* ~400 Employees

#Clark GIS System

* ArcGIS 10.0 SP4
* ArcFM 10.0 SP2

#Where Things _Started_

_Dedicated_ full-time employee

_~450_ pages of _individually_ customized MXD files

* Custom _layouts_ with _selection-set_ layers
* Custom _jpegs_ for inset details (_~300_ images)

Custom _'best-fit'_ grid layout for _each_ feeder

![](./Images/AST4_Original.png)

#Pros:

Highly _specific_ symbology

Covers _edge-case_ maps very well

Fits _Dispatch's_ specific _needs_ very well

#Cons:

Management _nightmare_ for GIS Dept.

_Turn-around_ time commonly measured in _days_ per page

_Complex_ process to _add_ new pages

#Then...

Dedicated employee _retires_

Position _left vacant_

_Same_ work, _fewer_ resources

#Option One

Continue with the _existing_ process

(_GIS staff_ mutinies)

#Option Two

Go to a _standardized_ county-wide map grid w/_simplified_ symbology

(_Dispatch staff_ mutinies)

#Option Three

Standarize map _elements_ and leverage the new _Data Driven Pages_ functionality

(Some _initial_ grumbling, but _no mutinies_!)

#Winner

#_What_ are [Data Driven Pages](http://resources.arcgis.com/en/help/main/10.2/index.html#//00s90000003m000000)?

_Tools_ for creating _mapbooks_ using _feature classes_ (basically)

Like

_Grid_ polygons

Existing _Point_ feature classes

#_What_ is [arcpy](http://resources.arcgis.com/en/help/main/10.2/index.html#//000v000000v7000000)?

Esri [python](https://www.python.org/) library for _geoprocessing_ and _other_ tasks

#Project Goals

Retain _80-90%_ of original maps' features

Remain _flexible_

Greatly _reduce_ production time

#Example _New_ Feeder Map

![](./Images/AST4_New.png)

#_How_ does it work?

Feature class attributes _drive_ dynamic content

![](./Images/DrivingTables.png)

![](./Images/DialogDDP.png)

#Pros:

_ONE_ mxd to manage!

Can produce _several_ pages a day

_Standardized_ map layout

#Cons:

_Limited_ number of _insets_ per page

Can be _difficult_ to make _well laid-out_ insets

_Non-network_ features _can't_ easily be symbolized by _feeder_

(selection set layers formerly)

#Another _Cool_ Feature Implemented

_Dynamic_ feeder picklist!

![](./Images/ScriptToolDialog.png)

_Unique value list_ derived from a feature class

Achieved through modifying the script's _validation_ code

![](./Images/ScriptValidation.png)

#Questions?

_Thank you!_

* [msayler@clarkpud.com](mailto:msayler@clarkpud.com)
* [@mattsayler](https://www.twitter.com/mattsayler)
* [github.com/mattsayler](https://www.github.com/mattsayler)
