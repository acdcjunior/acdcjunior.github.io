---
layout: single
title: 'JSF 2.2 Primefaces JAAS Tomcat Example - With Authentication, Template Layout and Maven'
category: jsf
tags: [jsf, primefaces, jaas, tomcat, maven, 'tomcat7:run', template, layout, 'java ee']
lang: en-US
---
Just a Java EE demo app. What you'll find:

- JSF 2.2
- Primefaces 5.1
- Servlet 3.0/3.1
- Tomcat Maven Plugin
- Declarative and Programatic Authentication using JAAS
<!--more-->

## Talk is cheap, show me the money (aka download/run the example project now):

Here are the steps needed to run the example project:

- **Download the [project source code](https://github.com/acdcjunior/acdcjunior-github-io-example-projects/archive/master.zip)**
  - Unzip it and head to this project's folder:  `cd jsf-primefaces-jaas-tomcat-example`;
- **Run it using: `mvn tomcat7:run`**
  - Open your browser on: [http://127.0.0.1:8080/jsf-primefaces-jaas-tomcat-example/](http://127.0.0.1:8080/jsf-primefaces-jaas-tomcat-example/)

There you go. Now begin developing! Any changes to the `.xhtml` files should be picked up automatically: no need to re-run the project.

Now to the features, goals and what you'll find on the example source code.

## JSF stack versions

Versions used (the current at the time of the post, though not the latest anymore):

- JSF 2.2
- Primefaces 5.1

Other specs:

- Servlet 3.0/3.1 - Because we're using Tomcat7 plugin. If you want to use anything from Servlet 4.0, just deploy to a Tomcat 8, the app should work the same.


## User authentication

We use **declarative security** via *FORM based authentication*, specifying security constraints for resources in the *deployment descriptor* (`web.xml`) file (more on [Securing Web Applications - The Java EE 7 Tutorial](https://docs.oracle.com/javaee/7/tutorial/security-webtier002.htm)). Some people refer to this as JAAS based authentication, but I'm not so sure this is the correct term (see more at the last part of this post).

Although we do use *FORM based auth*, we **don't** use the `j_security_check`/`j_username`/`j_password` form. We create a **pure-JSF** form and process the login POST using a bean (named **`LoginManager`** log in through it via Servlet's 3.0 [`HttpServletRequest#login(String, String)`](https://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServletRequest.html#login(java.lang.String, java.lang.String))).
We took this route mainly because it allows us to have more control over the login page (like login errors in the same page; possibility to log in without necessarily accessing a protected resource) but, *specially*, because the regular form had bugs (among others, it gave a 408 error on tomcat using some browsers).


## Tomcat Run - The Tomcat7 Maven Plugin

Another dealbreaking requisite: We wanted our whole solution to work with simply:

- Download the source code
- Run `mvn tomcat7:run`

It is very important that the command is `:run` and not `run-war`: When using `:run` any **changes to `.xhtml` files are  picked up immediately**, making the developent much, much easier (also, with minimal IDE support, some code changes inside methods on Java classes may also be picked up - try running `mvn tomcat7:run` in debug mode).

## Layout

Every real application uses a layout system based on templates, right? No one wants to place again and again the same background and the same menubar on every page.

The example project uses the [PrimeFace's "full" `<p:layout>`](http://www.primefaces.org/showcase/ui/panel/layout/element.xhtml), with [`<ui:insert>`](https://docs.oracle.com/javaee/7/javaserver-faces-2-2/vdldocs-facelets/toc.htm) and [`<ui:composition>`](https://docs.oracle.com/javaee/7/javaserver-faces-2-2/vdldocs-facelets/ui/composition.html). Check the `WEB-INF/templates/` folder.



## What's missing?

I still need to figure out/explain where JAAS and Java EE are exactly related to each other. JAAS is definitely **not** Java EE (it is a Java SE spec), that I know, but does Tomcat support it? Which points of the `j_*` form are JAAS (if any) and which are not?

In Tomcat, the users are picket up from `tomcat-users.xml`. In JBoss, they come from something called "security-domain":

	<?xml version="1.0" encoding="UTF-8"?>
	<jboss-web>
	    <security-domain>java:/jaas/other</security-domain>
    </jboss-web>

and uses the `ApplicationRealm`.

Also take a look at the [`HttpServletRequest#login(String, String)`](https://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServletRequest.html#login(java.lang.String, java.lang.String)) docs:

> Validate the provided username and password in the password validation realm used by the web container login mechanism configured for the ServletContext.

"Realm" is then a keyword in this quest.

Quoting [Apache Tomcat 8 Configuration Reference - The Realm Component](http://tomcat.apache.org/tomcat-8.0-doc/config/realm.html):

> A Realm element represents a "database" of usernames, passwords, and roles (similar to Unix groups) assigned to those users.

What we're doing is authenticating with a Realm provided by Tomcat - it provides a default JAAS Realm implementation.
[The JAAS Specification describes the result of a successful login as a javax.security.auth.Subject instance](https://tomcat.apache.org/tomcat-8.0-doc/api/org/apache/catalina/realm/JAASRealm.html).

Quoting [Apache Tomcat 8 - Realm Configuration HOW-TO](http://tomcat.apache.org/tomcat-8.0-doc/realm-howto.html):

> What is a Realm?

> A Realm is a "database" of usernames and passwords that identify valid users of a web application (or set of web applications), plus an enumeration of the list of roles associated with each valid user. You can think of roles as similar to groups in Unix-like operating systems, because access to specific web application resources is granted to all users possessing a particular role (rather than enumerating the list of associated usernames). A particular user can have any number of roles associated with their username.

> Although the Servlet Specification describes a portable mechanism for applications to declare their security requirements (in the web.xml deployment descriptor), there is no portable API defining the interface between a servlet container and the associated user and role information. In many cases, however, it is desirable to "connect" a servlet container to some existing authentication database or mechanism that already exists in the production environment. Therefore, Tomcat defines a Java interface (org.apache.catalina.Realm) that can be implemented by "plug in" components to establish this connection. Six standard plug-ins are provided, supporting connections to various sources of authentication information:

> - JDBCRealm - Accesses authentication information stored in a relational database, accessed via a JDBC driver.
> - DataSourceRealm - Accesses authentication information stored in a relational database, accessed via a named JNDI JDBC DataSource.
> - JNDIRealm - Accesses authentication information stored in an LDAP based directory server, accessed via a JNDI provider.
> - UserDatabaseRealm - Accesses authentication information stored in an UserDatabase JNDI resource, which is typically backed by an XML document (conf/tomcat-users.xml).
> - MemoryRealm - Accesses authentication information stored in an in-memory object collection, which is initialized from an XML document (conf/tomcat-users.xml).
> - **JAASRealm** - Accesses authentication information through the Java Authentication & Authorization Service (JAAS) framework.

> **It is also possible to write your own Realm implementation, and integrate it with Tomcat.**

...

So, anyway, hang in there, I'll update this post whenever (hopefully some day) I get to it :D
