---
layout: single
title: 'sh: docker-compose: not found @ alpine'
category: docker
tags: [docker, alpine, docker-compose]
lang: en-US
comments: true
share: true
mathjax: false
published: true
---

You are at alpine and, boom:

    sh: docker-compose: not found

<!--more-->

# Install docker-compose quickly

Just:

    apk update
    apk upgrade
    apk add python python-dev py-pip build-base curl
    curl -L https://github.com/docker/compose/releases/download/1.14.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    pip install docker-compose

Change the **1.14.0** with the version found at [docker-compose releases](https://github.com/docker/compose/releases/latest).
