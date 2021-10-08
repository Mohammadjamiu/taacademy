---
title: "{{ replace .Name "-" " " | title }}"
postdate: {{ dateFormat "January 02, 2006" .Date }}
image: ""
description: ""
alt: ""
weight: ""
author: {{ .Site.Params.author }}
categories: ["Circuit analysis"]
categorylink: /categories/circuit-analysis
type: posts
draft: false
---
