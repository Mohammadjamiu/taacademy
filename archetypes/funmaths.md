---
title: "{{ replace .Name "-" " " | title }}"
postdate: {{ dateFormat "Jan 02, 06" .Date }}
image: ""
description: ""
alt: ""
weight: ""
author: {{ .Site.Params.author }}
categorylink: /categories/maths-and-fun
categories: ["Maths and Fun"]
type: posts
draft: false
---
