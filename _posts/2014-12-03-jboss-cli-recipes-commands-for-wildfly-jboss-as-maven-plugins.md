---
layout: single
title: 'JBoss CLI Examples: Useful for Wildfly/JBoss-AS Maven Plugins'
category: jboss
tags: [jboss, wildfly, cli recipes, maven, java]
lang: en-US
---
Ever wanted to use the `afterDeployment`or `beforeDeployment`tags of wildfly (or jboss-as) maven plugins?
<!--more-->
Example:
{% gist dbd01dad9497b137ea61 %}

The tags there are following the format `command`, which are **JBoss "CLI"** (Command Line Interface) commands.

# Example Commands

Is is quite difficult to find documentation for those commands (that's pretty much the reason I wrote this).  As a starting point, you can find several recipes/examples in [WildFly CLI Recipes page](https://docs.jboss.org/author/display/WFLY8/CLI+Recipes), they have lots of commands you can try.

Make sure you also check [http://jtips.info/index.php?title=WildFly/cli](http://jtips.info/index.php?title=WildFly/cli) - lots of examples there as well.

# How to try the commands/recipes out?

To start the CLI (Command Line Interface), go to your WildFly/JBoss instalation's `bin/` folder and run `jboss-cli(.bat)`. Your server instance must be online.

The commands usually, but not always, follow the format `/child-node-type=name:command(args)`

Where `:command` can be:

- `:read-resouce`
- `:add`
- `:remove`
- `:write-attribute(name=ATTRIBUTE_NAME,value=ATTRIBUTE_VALUE)`
- others... (I don't know them all, but there are others for sure, depending on the node type)


# If you're lost: `/:read-children-types`

Pretty much one of **the most useful** commands: `/:read-children-types`. It shows all kind of nodes you can work with, and from there on, dive! Here's how it could go:

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

And then you can take any `children-type`, say `"subsystem"` and list:

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
	
Or `"core-service"`:

	[standalone@localhost:9990 /] /:read-children-names(child-type=core-service)
	...
        
And son on! After finding the node you want to change, pick a command and touché!
