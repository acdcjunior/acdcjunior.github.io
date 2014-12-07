---
layout: post
title: 'JSF 2.2 Primefaces JAAS Tomcat Example - With Authentication, Template Layout and `tomcat7:run` enabled.'
maintag: 'jsf'
tags: [jsf, primefaces, jaas, tomcat, maven, tomcat7:run, template, layout]
lang: 'en_US'
---

- JSF 2.2
- Primefaces 5.1
- Servlet 3.0/3.1
- Tomcat Maven Plugin
- Declarative and Programatic Authentication using JAAS

##Download/run the example project:

- **Download the [project source code](https://github.com/acdcjunior/acdcjunior-github-io-example-projects/archive/master.zip);**
  - Unzip it and head to this project's folder:  `cd jsf-primefaces-jaas-tomcat-example`;
- **Run it using: `mvn tomcat7:run`**
  - Open your browser on: http://127.0.0.1:8080/jsf-primefaces-jaas-tomcat-example/

There you go. Now begin developing! Any changes to the `.xhtml` files should be picked up automatically: no need to re-run the project.

###Latest JSF stack

Versions used (the latest at the moment):

- JSF 2.2
- Primefaces 5.1
- Servlet 3.0/3.1


###User authentication

We use **declarative security** via *FORM based authentication*, specifying security constraints for resources in the `web.xml` file (more: https://docs.oracle.com/javaee/7/tutorial/security-webtier002.htm). Some people refer to this as JAAS based authentication, but I'm not so sure this is the correct term (see more at the last part of this post).

Although we use *FORM based auth*, we **don't** use the `j_security_check`/`j_username`/`j_password` form. We create a **pure-JSF** form and process the login POST using a bean (then **`LoginManager`** bean and login in via Servlet's 3.0 `HttpServletRequest#login()`).
We took this route mainly because it allows us to have more control over the login page (like login errors in the same page; possibility to log in without necessarily accessing a protected resource) but, *specially*, because the regular form had bugs (among others, it gave a 408 error on tomcat using some browsers).


###Tomcat Run - The Tomcat7 Maven Plugin

Another dealbreaking requisite: We wanted our whole solution to work with simply:

- Download the source code
- Run `mvn tomcat7:run`

It is very important that the command is `:run` and not `run-war`: When using `:run` any **changes to `.xhtml` files are  picked up immediately**, making the developent much, much easier (also, with minimal IDE support, some code changes inside methods may also be picked up).

###Layout

Every real application uses a layout system based on templates, right? No one wants to set the same background and the same menubar on every page.

We use the ["full" `<p:layout>`](http://www.primefaces.org/showcase/ui/panel/layout/element.xhtml), with [`<ui:insert>`](https://docs.oracle.com/javaee/7/javaserver-faces-2-2/vdldocs-facelets/toc.htm) and [`<ui:composition>`](https://docs.oracle.com/javaee/7/javaserver-faces-2-2/vdldocs-facelets/ui/composition.html).



###What's missing?

I still need to figure out where JAAS and Java EE are exactly related to each other. JAAS is definitely **not** Java EE (it is a Java SE spec), that I know, but does Tomcat support it? Which points of the `j_*` form are JAAS (if any) and which are not?

In Tomcat, the users are picket up from `tomcat-users.xml`. In JBoss, they come from something called "security-domain":

	<?xml version="1.0" encoding="UTF-8"?>
	<jboss-web>
	    <security-domain>java:/jaas/other</security-domain>
    </jboss-web>

and uses the `ApplicationRealm`.

So hang in there, I'll update this post as soon as I get to it :D