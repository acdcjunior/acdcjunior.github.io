---
layout: post
title: 'JBoss CLI Recipes (commands): Useful for Wildfly/JBoss-AS Maven Plugins'
maintag: 'jboss'
tags: [jboss, wildfly, cli recipes, maven, java]
lang: 'en_US'
---
Ever wanted to use the `afterDeployment`or `beforeDeployment`tags of wildfly (or jboss-as) maven plugins?

Example:

	<configuration>
		<afterDeployment>
			<commands>
				<command>/subsystem=security/security-domain="unused-domain":remove</command>
			</commands>
		</afterDeployment>
	</configuration>

The tags there are follow the format `command`, which are **JBoss "CLI Recipes"**.

Those recipes are *way* undocumented (that's pretty much the reason I write this).  As a starting point, you can find several examples here: https://docs.jboss.org/author/display/AS71/CLI+Recipes

They have lots of commands you can try.

###How to try the commands/recipes out out?

Just go to your WildFly/JBoss instalation's `bin/` folder and run `jboss-cli(.bat)`. Your server instance must be online.

They commands/recipes follow the format `/child-node-type=name:command(args)`

Where `:command` can be:

- `:add`
- `:read-resouce`
- `:remove`
- others... (I don't know them all, but there are others for sure, depending on the node type)


##The most useful command: `/:read-children-types`

	[standalone@localhost:9990 /] /:read-children-names(child-type=subsystem)
	{
	    "outcome" => "success",
	    "result" => [
	        "batch",
	        "datasources",
	        ...
	        "logging",
	        ...
	        "security",
	        "transactions",
	        ...
	    ],
	    "response-headers" => {"process-state" => "reload-required"}
	}
	[standalone@localhost:9990 /] /:read-children-names(child-type=management)
	{
	    "outcome" => "failed",
	    "failure-description" => "JBAS014793: No known child type named management",
	    "rolled-back" => true,
	    "response-headers" => {"process-state" => "reload-required"}
	}
	[standalone@localhost:9990 /] /:read-children-types
	{
	    "outcome" => "success",
	    "result" => [
	        "core-service",
	        "deployment",
	        "deployment-overlay",
	        "extension",
	        "interface",
	        "path",
	        "socket-binding-group",
	        "subsystem",
	        "system-property"
	    ],
	    "response-headers" => {"process-state" => "reload-required"}
	}

And then you can take any `children-type` and list:

	[standalone@localhost:9990 /] /:read-children-names(child-type=core-service)

And son on!
