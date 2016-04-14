This project enables Novi Systems to communicate directly with RPG and DataQueues running on the System i (iSeries, AS400)

The following steps are required to configure this integration.

##Configure your Novi System##

1.  In your Novi System - create a new Library to communicate with your RPG programs
	Note-  A copy of this library is found in AS400Integration/novi/code/libraries/AS400Lib
2.  Create a service to call an RPG Program
	Note-  An example service is found in AS400Integration/novi/code/services/Call_TSTAARON
	1.  For parameters the service takes 
		- ProgramName
		- PCML description.  This description must be escaped for javascript
		- JSON payload input structure
3.  Create a service to receive queue events
	Note - An example service is found in AS400Integration/novi/code/services/queueEvent

##Configure your J2EE server##

1.  Deploy the war file AS400Integration/j2ee/noviAS400.war to a Tomcat server.
	Note - the tomcat server should have IP based access to the AS400 host
2.  In the unpacked web archive update the file named noviAS400.config with the appropriate configuration
3.  Restart your tomcat
